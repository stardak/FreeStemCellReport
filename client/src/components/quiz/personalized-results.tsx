import { EducationalContent } from "@/lib/types";
import { useEffect } from "react";
import { Calendar, TrendingUp, Microscope, CalendarPlus, Download, RotateCcw, CheckCircle, AlertCircle, Clock, Star, Heart, Brain, Dna } from "lucide-react";
import { Link } from "wouter";
import doctorImage from "@assets/doctor_1756742974709.png";
import reportIcon from "@assets/checkup-medical-report-clipboard_1756742374330.png";
import cellsIcon from "@assets/cells_1756742413031.png";
import logo from "@assets/newstemcelllogo_1757155983144.png";

interface PersonalizedResultsProps {
  content: EducationalContent;
  onRestart: () => void;
  userName?: string;
}

export function PersonalizedResults({ content, onRestart, userName }: PersonalizedResultsProps) {
  const getStatusColor = (status: "favorable" | "moderate" | "challenging") => {
    switch (status) {
      case "favorable": return "bg-green-50 text-trust-green";
      case "moderate": return "bg-yellow-50 text-yellow-600";
      case "challenging": return "bg-red-50 text-red-600";
    }
  };

  const getStatusText = (status: "favorable" | "moderate" | "challenging") => {
    switch (status) {
      case "favorable": return "Favorable";
      case "moderate": return "Moderate";
      case "challenging": return "Challenging";
    }
  };

  useEffect(() => {
    // Load Wistia scripts
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/embed/nuq2hqyk0o.js';
    script2.async = true;
    script2.type = 'module';
    document.head.appendChild(script2);

    // Add CSS for Wistia player
    const style = document.createElement('style');
    style.textContent = `
      wistia-player[media-id='nuq2hqyk0o']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/nuq2hqyk0o/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top: 56.25%; 
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      if (document.head.contains(script1)) document.head.removeChild(script1);
      if (document.head.contains(script2)) document.head.removeChild(script2);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e4e2dd' }}>
      {/* Navigation Header */}
      <header className="shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <img 
                src={logo} 
                alt="FreeStemCellReport.com" 
                className="max-w-[225px] h-auto cursor-pointer"
              />
            </Link>
            
            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">
                Home
              </Link>
              <Link href="/about-doctor" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">
                About Dr. McCarthy
              </Link>
              <button
                onClick={onRestart}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium cursor-pointer"
              >
                Take Quiz Again
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Link href="/" className="text-gray-700 hover:text-medical-blue transition-colors text-sm font-medium">
                ← Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Simple Header with Doctor */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-0">
        {/* Text Content - Left Side */}
        <div className="text-left mb-8">
          <h2 className="text-6xl font-title-medium mb-4 text-gray-900">
            {userName ? `${userName.charAt(0).toUpperCase() + userName.slice(1)}'s Personalised Stem Cell Report` : "Your Personalised Stem Cell Report"}
          </h2>
          <p className="text-gray-600 text-lg max-w-lg">
            Evidence-based insights tailored specifically for your condition and health profile
          </p>
        </div>
        
        {/* Doctor Image - Right Side */}
        <div className="flex justify-end">
          <img 
            src={doctorImage} 
            alt="Medical professional providing personalized healthcare guidance" 
            className="max-w-sm h-auto"
          />
        </div>
      </div>

      {/* Enhanced Treatment Overview */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 border-b border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
              <img 
                src={cellsIcon} 
                alt="Stem cells icon" 
                className="w-6 h-6 filter invert"
              />
            </div>
            <h3 className="text-3xl font-title-medium bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">{content.title}</h3>
          </div>
        </div>
        <div className="p-8">
          <div className="text-gray-700 mb-8 space-y-4">
            {content.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-lg">{paragraph.trim()}</p>
            ))}
          </div>

          {/* Line break above video */}
          <hr className="border-gray-200 mb-8" />
          
          {/* Video */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto">
              <div dangerouslySetInnerHTML={{
                __html: `<wistia-player media-id="nuq2hqyk0o" aspect="1.7777777777777777"></wistia-player>`
              }} />
            </div>
          </div>

          {/* Line break below video */}
          <hr className="border-gray-200 mb-8" />

          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/50 rounded-xl p-6 shadow-inner">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-yellow-500 mr-3" />
              <h4 className="text-xl font-semibold text-blue-900">Key Benefits for Your Condition</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start bg-white/60 rounded-lg p-3 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Enhanced Timeline & Recovery */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-gray-100">
            <h3 className="text-2xl font-title-medium text-gray-900 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              Expected Timeline
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {content.timeline.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < content.timeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-green-400 to-green-200"></div>
                  )}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white text-lg font-bold mr-4 mt-1 flex-shrink-0 shadow-lg">
                      {step.step}
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-100">
            <h3 className="text-2xl font-title-medium text-gray-900 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              Success Factors
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {content.successFactors.map((factor, index) => {
                const statusColors = {
                  favorable: 'from-green-100 to-emerald-100 border-green-200',
                  moderate: 'from-yellow-100 to-amber-100 border-yellow-200',
                  challenging: 'from-red-100 to-pink-100 border-red-200'
                };
                const statusIcons = {
                  favorable: <CheckCircle className="w-5 h-5 text-green-600" />,
                  moderate: <AlertCircle className="w-5 h-5 text-yellow-600" />,
                  challenging: <Clock className="w-5 h-5 text-red-600" />
                };
                return (
                  <div key={index} className={`bg-gradient-to-r ${statusColors[factor.status]} border rounded-xl p-4 shadow-sm`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900 text-lg">{factor.factor}</span>
                      <div className="flex items-center">
                        {statusIcons[factor.status]}
                        <span className="ml-2 font-semibold text-gray-700">{getStatusText(factor.status)}</span>
                      </div>
                    </div>
                    {factor.explanation && (
                      <p className="text-gray-700 leading-relaxed">{factor.explanation}</p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/50 rounded-xl shadow-inner">
              <div className="flex items-start">
                <Brain className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="text-blue-800 font-semibold mb-1">Research Evidence:</p>
                  <p className="text-blue-700 leading-relaxed">{content.recoveryStats}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scientific Background */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 p-8 border-b border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
              <Microscope className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-title-medium bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent">
              The Science Behind Stem Cell Therapy{content.condition && ` for ${content.condition}`}
            </h3>
          </div>
          <p className="text-gray-600 text-lg">Understanding the biological mechanisms that make regenerative medicine effective</p>
        </div>
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {content.scientificBackground.map((item, index) => (
              <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 h-full border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Dna className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-4 text-xl text-center">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Next Steps */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-2xl shadow-2xl p-8 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <CalendarPlus className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-title-medium mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Your Next Steps
          </h3>
          {content.nextSteps && content.nextSteps.length > 0 ? (
            <div className="text-left max-w-3xl mx-auto mb-8">
              <p className="text-blue-100 mb-6 text-center text-lg">
                Based on your assessment, here's what we recommend:
              </p>
              <div className="space-y-4">
                {content.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-blue-50 leading-relaxed text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Schedule a consultation with our medical team to discuss your specific case and determine if stem cell therapy is right for you.
            </p>
          )}
          <div className="flex justify-center">
            <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <CalendarPlus className="w-5 h-5 mr-3 group-hover:animate-pulse" />
              Schedule Consultation
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/10 to-transparent rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full -ml-24 -mb-24"></div>
      </div>

        {/* Restart Quiz Option */}
        <div className="text-center mt-12">
          <button 
            className="group bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto border border-gray-300"
            onClick={onRestart}
          >
            <RotateCcw className="w-5 h-5 mr-3 group-hover:animate-spin" />
            Start Over with Different Symptoms
          </button>
        </div>
      </div>
    </div>
  );
}
