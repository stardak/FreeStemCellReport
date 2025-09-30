import { useState, useEffect } from "react";

export function LoadingState() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) return prev; // Stop at 95% until actual completion
        return prev + Math.random() * 15; // Random increments for realistic feel
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <div className="animate-spin w-16 h-16 border-4 border-medical-blue border-t-transparent rounded-full mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Analyzing Your Information</h2>
        <p className="text-neutral-500 mb-6">Our AI is analyzing your responses and generating personalized educational content...</p>
        
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="bg-neutral-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gray-900 h-full rounded-full transition-all duration-700 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="text-sm text-neutral-500 mt-2">
            {Math.round(Math.min(progress, 100))}% complete
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-neutral-200">
          <div className="flex items-center justify-between text-sm text-neutral-600 mb-2">
            <span>Processing symptoms</span>
            <i className="fas fa-check text-trust-green"></i>
          </div>
          <div className="flex items-center justify-between text-sm text-neutral-600 mb-2">
            <span>AI analysis in progress</span>
            <div className="animate-spin w-4 h-4 border-2 border-medical-blue border-t-transparent rounded-full"></div>
          </div>
          <div className="flex items-center justify-between text-sm text-neutral-400">
            <span>Generating personalized report</span>
            <i className="fas fa-clock"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
