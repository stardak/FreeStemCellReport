import { useEffect, useRef } from 'react';

interface SoundWaveProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  isActive: boolean;
  className?: string;
}

export function SoundWave({ audioRef, isActive, className = '' }: SoundWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const analyserRef = useRef<AnalyserNode>();
  const audioContextRef = useRef<AudioContext>();
  const sourceRef = useRef<MediaElementAudioSourceNode>();

  useEffect(() => {
    if (!isActive || !audioRef.current || !canvasRef.current) return;

    const setupAudioAnalysis = async () => {
      try {
        const audioElement = audioRef.current!;
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        
        // Set canvas size
        canvas.width = 160;
        canvas.height = 160;
        
        console.log('Setting up audio analysis...', { isActive, audioElement });

        // Create audio context and analyser
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioContext();
          console.log('Created audio context');
        }
        
        // Resume audio context if suspended
        if (audioContextRef.current.state === 'suspended') {
          await audioContextRef.current.resume();
        }
        
        if (!sourceRef.current && audioElement) {
          try {
            sourceRef.current = audioContextRef.current.createMediaElementSource(audioElement);
            analyserRef.current = audioContextRef.current.createAnalyser();
            
            // Configure analyser
            analyserRef.current.fftSize = 64;
            analyserRef.current.smoothingTimeConstant = 0.8;
            
            // Connect audio graph
            sourceRef.current.connect(analyserRef.current);
            analyserRef.current.connect(audioContextRef.current.destination);
            
            console.log('Audio analysis setup complete');
          } catch (error) {
            console.log('Audio source already connected or error:', error);
          }
        }

        const bufferLength = analyserRef.current!.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const draw = () => {
          if (!isActive) return;

          analyserRef.current!.getByteFrequencyData(dataArray);
          
          // Clear canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Calculate average volume
          const average = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
          const normalizedVolume = average / 255;
          
          // Show animation when there's audio or create a simple pulse
          const shouldAnimate = normalizedVolume > 0.01 || true; // Always show for now
          if (shouldAnimate) {
            // Create a simple pulsing animation if no audio data
            const time = Date.now() * 0.002;
            const pulseIntensity = normalizedVolume > 0.01 ? normalizedVolume : Math.sin(time) * 0.3 + 0.5;
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            
            // Draw multiple concentric circles with different frequencies
            const maxCircleRadius = Math.min(canvas.width, canvas.height) / 2 - 5;
            
            for (let i = 0; i < 4; i++) {
              const frequency = normalizedVolume > 0.01 ? Math.max(dataArray[i * 6] || 40, 40) : 60 + Math.sin(time + i) * 30;
              const radius = Math.min(15 + (pulseIntensity * 35) + i * 12, maxCircleRadius);
              const baseOpacity = normalizedVolume > 0.01 ? Math.max((frequency / 255) * 1.0, 0.4) : (pulseIntensity * 0.6 + 0.3);
              
              // Apply fade near edges
              const fadeOpacity = radius > maxCircleRadius * 0.85 
                ? Math.max(0.1, 1 - (radius - maxCircleRadius * 0.85) / (maxCircleRadius * 0.15))
                : 1;
              
              const finalOpacity = baseOpacity * fadeOpacity;
              
              ctx.beginPath();
              ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
              ctx.strokeStyle = `rgba(79, 70, 229, ${finalOpacity})`;
              ctx.lineWidth = 2;
              ctx.stroke();
              
              // Add inner glow effect
              ctx.beginPath();
              ctx.arc(centerX, centerY, radius - 1, 0, 2 * Math.PI);
              ctx.strokeStyle = `rgba(139, 92, 246, ${finalOpacity * 0.5})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            
            // Draw frequency bars in a circle
            const barCount = 20;
            const maxRadius = Math.min(canvas.width, canvas.height) / 2 - 10; // Leave margin from edge
            
            for (let i = 0; i < barCount; i++) {
              const angle = (i / barCount) * 2 * Math.PI;
              const frequency = normalizedVolume > 0.01 ? (dataArray[i] || 0) : 30 + Math.sin(time * 2 + i * 0.3) * 20;
              const barLength = normalizedVolume > 0.01 ? (frequency / 255) * 25 : (Math.sin(time * 3 + i * 0.2) * 10 + 15);
              const baseOpacity = normalizedVolume > 0.01 ? Math.max(frequency / 255, 0.3) : 0.5 + Math.sin(time * 2 + i * 0.1) * 0.3;
              
              const startRadius = 40;
              const endRadius = Math.min(startRadius + Math.abs(barLength), maxRadius);
              
              const startX = centerX + Math.cos(angle) * startRadius;
              const startY = centerY + Math.sin(angle) * startRadius;
              const endX = centerX + Math.cos(angle) * endRadius;
              const endY = centerY + Math.sin(angle) * endRadius;
              
              // Calculate fade based on distance from center
              const distanceFromCenter = endRadius;
              const fadeThreshold = maxRadius * 0.8; // Start fading at 80% of max radius
              const fadeOpacity = distanceFromCenter > fadeThreshold 
                ? Math.max(0, 1 - (distanceFromCenter - fadeThreshold) / (maxRadius - fadeThreshold))
                : 1;
              
              const finalOpacity = baseOpacity * fadeOpacity;
              
              // Create gradient for smooth fade
              const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
              gradient.addColorStop(0, `rgba(79, 70, 229, ${finalOpacity})`);
              gradient.addColorStop(1, `rgba(79, 70, 229, ${finalOpacity * 0.1})`);
              
              ctx.beginPath();
              ctx.moveTo(startX, startY);
              ctx.lineTo(endX, endY);
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 3;
              ctx.lineCap = 'round';
              ctx.stroke();
              
              // Add bright tips that also fade
              if (finalOpacity > 0.1) {
                ctx.beginPath();
                ctx.arc(endX, endY, 1.5, 0, 2 * Math.PI);
                ctx.fillStyle = `rgba(139, 92, 246, ${finalOpacity * 0.6})`;
                ctx.fill();
              }
            }
          }
          
          animationRef.current = requestAnimationFrame(draw);
        };

        draw();
      } catch (error) {
        console.warn('Audio analysis setup failed:', error);
      }
    };

    setupAudioAnalysis();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, audioRef]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      // Note: We don't close the audio context here to avoid issues with reuse
    };
  }, []);

  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute"
        style={{ 
          width: '160px', 
          height: '160px',
          filter: 'blur(0.3px)',
          zIndex: -1
        }}
      />
    </div>
  );
}