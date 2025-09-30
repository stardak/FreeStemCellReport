import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { SoundWave } from './SoundWave';

interface VoiceChatProps {
  className?: string;
}

export function VoiceChat({ className = '' }: VoiceChatProps) {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState<'idle' | 'connecting' | 'listening'>('idle');
  const [statusText, setStatusText] = useState('Idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const pcRef = useRef<RTCPeerConnection | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const loadingStartTime = useRef<number | null>(null);
  const minDelayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const log = (msg: string) => {
    setLogs(prev => [msg, ...prev.slice(0, 9)]); // Keep last 10 logs
  };

  const updateStatus = (mode: 'idle' | 'connecting' | 'listening', text: string) => {
    setStatus(mode);
    setStatusText(text);
  };

  const clearLoadingTimers = () => {
    if (minDelayTimer.current) {
      clearTimeout(minDelayTimer.current);
      minDelayTimer.current = null;
    }
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
  };

  const startMinimumLoading = () => {
    // Clear any existing timers first
    clearLoadingTimers();
    
    loadingStartTime.current = Date.now();
    setIsLoading(true);
    setLoadingProgress(0);
    
    // Progress animation over 3 seconds
    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - (loadingStartTime.current || 0);
      const progress = Math.min((elapsed / 3000) * 100, 100);
      setLoadingProgress(progress);
      
      if (progress >= 100) {
        clearInterval(progressInterval.current!);
        progressInterval.current = null;
      }
    }, 50);
  };

  const stopLoadingIfReady = () => {
    if (!loadingStartTime.current) return;
    
    const elapsed = Date.now() - loadingStartTime.current;
    const remaining = 3000 - elapsed;
    
    if (remaining <= 0) {
      // Minimum time has passed, hide immediately
      setIsLoading(false);
      setLoadingProgress(0);
      clearLoadingTimers();
      loadingStartTime.current = null;
    } else {
      // Wait for remaining time, then hide
      minDelayTimer.current = setTimeout(() => {
        setIsLoading(false);
        setLoadingProgress(0);
        clearLoadingTimers();
        loadingStartTime.current = null;
      }, remaining);
    }
  };

  const startVoice = async () => {
    if (pcRef.current) return; // already running
    
    try {
      updateStatus('connecting', 'Initializing voice chat...');
      setIsActive(true);
      startMinimumLoading();

      // 1) Get ephemeral session token from server
      const sessResponse = await fetch('/session');
      if (!sessResponse.ok) {
        const errorData = await sessResponse.text();
        console.error('Session request failed:', sessResponse.status, errorData);
        throw new Error(`Session creation failed: ${sessResponse.status}`);
      }
      
      const sess = await sessResponse.json();
      console.log('Session response:', sess);
      
      if (!sess || !sess.client_secret) {
        console.error('Invalid session response:', sess);
        throw new Error('Could not create realtime session - invalid response format');
      }
      const EPHEMERAL = sess.client_secret.value;

      // 2) Prepare WebRTC
      pcRef.current = new RTCPeerConnection();
      const pc = pcRef.current;

      // Attach remote audio from model
      pc.ontrack = (e) => {
        if (audioRef.current) {
          audioRef.current.srcObject = e.streams[0];
          // Hide loader when audio starts playing (respecting minimum 3 seconds)
          audioRef.current.onplay = () => {
            stopLoadingIfReady();
            setIsPlaying(true);
          };
          // Track when audio ends
          audioRef.current.onpause = () => {
            setIsPlaying(false);
          };
          audioRef.current.onended = () => {
            setIsPlaying(false);
          };
        }
      };

      // Connection state logging
      pc.oniceconnectionstatechange = () => log(`ICE: ${pc.iceConnectionState}`);
      pc.onconnectionstatechange = () => log(`PC: ${pc.connectionState}`);

      // 3) Capture microphone
      updateStatus('connecting', 'Requesting microphone...');
      micStreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current.getTracks().forEach(track => pc.addTrack(track, micStreamRef.current!));

      // 4) Data channel for text instructions and tool events
      dataChannelRef.current = pc.createDataChannel('oai-events');
      const dataChannel = dataChannelRef.current;
      
      dataChannel.onopen = () => {
        log('Data channel open');
        // Kick off with explicit English-only reinforcement
        dataChannel.send(JSON.stringify({
          type: 'response.create',
          response: {
            instructions: [
              "From now on, respond in ENGLISH only.",
              "Greet the user briefly.",
              "Remind them this is general info, not medical advice.",
              "Ask what brought them here."
            ].join(" ")
          }
        }));
      };
      
      dataChannel.onmessage = (ev) => {
        try {
          const event = JSON.parse(ev.data);
          
          // Log all events for debugging
          console.log('Voice event:', event.type, event);
          
        } catch (error) {
          // Ignore parsing errors
        }
        
        // You can inspect events here for debugging
        // log(`Event: ${event.type} - ${JSON.stringify(event).substring(0, 100)}...`);
      };

      // 5) Create offer and send SDP to OpenAI
      updateStatus('connecting', 'Connecting to assistant...');
      const offer = await pc.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: false
      });
      await pc.setLocalDescription(offer);

      const model = 'gpt-4o-realtime-preview';
      const sdpResp = await fetch(`https://api.openai.com/v1/realtime?model=${model}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${EPHEMERAL}`,
          'Content-Type': 'application/sdp'
        },
        body: offer.sdp
      });

      const answer = { type: 'answer' as RTCSdpType, sdp: await sdpResp.text() };
      await pc.setRemoteDescription(answer);

      updateStatus('listening', 'Listening...');
      log('Assistant ready. Speak now.');
    } catch (err: any) {
      console.error(err);
      log(`Error: ${err.message}`);
      updateStatus('idle', 'Idle');
      setIsActive(false);
      // Clear loading state on error immediately
      setIsLoading(false);
      setLoadingProgress(0);
      clearLoadingTimers();
      loadingStartTime.current = null;
      stopVoice(); // clean up on failure
    }
  };

  const stopVoice = () => {
    try {
      if (dataChannelRef.current && dataChannelRef.current.readyState === 'open') {
        dataChannelRef.current.close();
      }
    } catch {}
    
    try {
      micStreamRef.current?.getTracks()?.forEach(track => track.stop());
    } catch {}
    
    try {
      pcRef.current?.getSenders()?.forEach(sender => sender.track?.stop());
    } catch {}
    
    try {
      pcRef.current?.close();
    } catch {}

    pcRef.current = null;
    micStreamRef.current = null;
    dataChannelRef.current = null;
    
    // Clean up loading timers and state
    clearLoadingTimers();
    loadingStartTime.current = null;
    
    updateStatus('idle', 'Idle');
    setIsActive(false);
    setIsLoading(false);
    setLoadingProgress(0);
    setIsPlaying(false);
    log('Voice chat stopped.');
  };

  const handleMicClick = () => {
    if (pcRef.current) {
      stopVoice();
    } else {
      startVoice();
    }
  };

  // Safety: stop voice on page hide to release mic
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && pcRef.current) {
        stopVoice();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearLoadingTimers(); // Clear timers on unmount
      stopVoice(); // cleanup on component unmount
    };
  }, []);

  return (
    <>
      <div className={`bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 ${className}`}>
        <h3 className="text-2xl font-title-medium text-gray-900 mb-2 text-center">
          Chat with Our Intake Assistant
        </h3>
        <p className="text-gray-600 mb-6 text-center">
          Tap the mic to instantly connect and have a relaxed conversation about how stem cells may help you.
        </p>

        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <button
              onClick={handleMicClick}
              className={`w-20 h-20 rounded-full border-none cursor-pointer outline-none flex items-center justify-center transition-all duration-200 shadow-xl ${
                isActive 
                  ? 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-green-200 scale-110' 
                  : 'bg-gray-900 hover:bg-gray-800 shadow-gray-200 animate-pulse-soft'
              } active:scale-95 transform relative z-10`}
              aria-pressed={isActive}
              aria-label={isActive ? 'Stop voice chat' : 'Start voice chat'}
              data-testid={isActive ? 'button-stop-voice' : 'button-start-voice'}
            >
              {isActive ? (
                <MicOff className="w-8 h-8 text-white" />
              ) : (
                <Mic className="w-8 h-8 text-white" />
              )}
            </button>
            
            {/* Sound Wave Animation */}
            <SoundWave 
              audioRef={audioRef} 
              isActive={isPlaying}
              className="absolute inset-0"
            />
          </div>
          
          {/* Disclaimer text */}
          <p className="text-xs text-gray-500 mt-4 text-center max-w-sm mx-auto leading-relaxed">
            We're always training our Assistant. Think of this as a casual conversation about stem cells — some details may not be 100% accurate, so please don't take it as medical advice.
          </p>
          
          {/* Loading indicator with progress */}
          {isLoading && (
            <div className="mt-4 flex flex-col items-center">
              <div className="relative w-12 h-12">
                <div className="w-12 h-12 border-3 border-medical-blue border-t-transparent rounded-full animate-spin"></div>
                {/* Progress ring */}
                <svg className="absolute top-0 left-0 w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                    pathLength="100"
                  />
                  <path
                    d="M18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    pathLength="100"
                    strokeDasharray={`${loadingProgress} 100`}
                    className="transition-all duration-100 ease-out"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600 mt-3 font-medium">Initializing voice chat...</p>
              <p className="text-xs text-gray-500 mt-1">{Math.round(loadingProgress)}% complete</p>
            </div>
          )}
          
        </div>

        {/* Assistant's audio output */}
        <audio ref={audioRef} autoPlay />
        
      </div>
      
      {/* Book Consultation Button - Positioned outside white container */}
      <div className="mt-6 flex justify-center">
        <a 
          href="https://calendly.com/bennvb12/new-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-button primary"
          data-testid="button-book-call"
        >
          <span className="button_top">Book a Call with Dr. McCarthy</span>
        </a>
      </div>
    </>
  );
}