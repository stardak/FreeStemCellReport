import { useState } from "react";
import { conditions } from "@/data/conditions";
import { ChevronLeft } from "lucide-react";
import { Condition } from "@shared/schema";
import { AnimatedBlob } from "@/components/animated-blob/AnimatedBlob";
import painIcon from "@assets/pain_1755090956503.png";
import pelvisIcon from "@assets/pelvis_1755090956503.png";
import stressIcon from "@assets/stress_1755090956503.png";
import backIcon from "@assets/back_1755090956504.png";
import shoulderIcon from "@assets/shoulder_1755090956504.png";
import kneeIcon from "@assets/knee_1755090956504.png";

// New background images
import kneeBackground from "@assets/knee_1755277010440.png";
import shoulderBackground from "@assets/shoulder_1755277010440.png";
import backBackground from "@assets/back_1755277010439.png";
import arthritisBackground from "@assets/arthritis_1755277010439.png";
import hipBackground from "@assets/hip_1755277010439.png";
import cosmeticBackground from "@assets/mariaalice2232_faa_uma_foto_em_hd_de_uma_mulher_bonita_em_close_d1e48b83-12a9-4588-b7b3-cda28e8d9824_1756390450051.png";
import neurologicalBackground from "@assets/riiz0000_A_high-resolution_scientific_aesthetic_illustration_of_02bf4f49-70f0-4234-a523-cc9cbd3354f9_1756390551224.png";
import otherBackground from "@assets/other condtition_1755277010439.png";
import drMcCarthyPhoto from "@assets/doctor_1756742974709.png";

interface ConditionSelectorProps {
  onSelectCondition: (condition: string, description?: string) => void;
  selectedCondition?: string;
}

export function ConditionSelector({ onSelectCondition, selectedCondition }: ConditionSelectorProps) {
  const [customDescription, setCustomDescription] = useState("");
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [currentView, setCurrentView] = useState<'categories' | 'conditions'>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  
  const getConditionIcon = (conditionId: string) => {
    const iconProps = { className: "w-8 h-8", alt: "Condition icon" };
    switch (conditionId) {
      case "knee-pain": return <img src={kneeIcon} {...iconProps} />;
      case "shoulder-injury": return <img src={shoulderIcon} {...iconProps} />;
      case "back-pain": return <img src={backIcon} {...iconProps} />;
      case "arthritis": return <img src={painIcon} {...iconProps} />;
      case "hip-problems": return <img src={pelvisIcon} {...iconProps} />;
      case "other": return <img src={stressIcon} {...iconProps} />;
      default: return <img src={stressIcon} {...iconProps} />;
    }
  };

  const getConditionBackgroundImage = (conditionId: string) => {
    switch (conditionId) {
      case "knee-pain": return kneeBackground;
      case "shoulder-pain": return shoulderBackground;
      case "back-pain": return backBackground;
      case "hip-pain": return hipBackground;
      case "arthritis": return arthritisBackground;
      case "other-condition": return otherBackground;
      case "chronic-pain": return backBackground;
      case "osteoarthritis": return arthritisBackground;
      case "autoimmune": return arthritisBackground;
      case "crohns-colitis": return otherBackground;
      case "multiple-sclerosis": return otherBackground;
      case "neurological": return otherBackground;
      case "spinal-cord": return backBackground;
      case "diabetes": return otherBackground;
      case "fountain-youth-women": return otherBackground;
      case "health-optimization-men": return otherBackground;
      case "sexual-wellness": return otherBackground;
      case "cosmetic-skin": return otherBackground;
      default: return otherBackground;
    }
  };

  const getColorClasses = (color: string, isSelected: boolean) => {
    const baseClasses = "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 backdrop-blur-sm";
    
    if (isSelected) {
      return `${baseClasses} bg-medical-blue/90 text-white`;
    }
    
    switch (color) {
      case "blue": return `${baseClasses} bg-blue-100/90 text-medical-blue`;
      case "green": return `${baseClasses} bg-green-100/90 text-trust-green`;
      case "purple": return `${baseClasses} bg-purple-100/90 text-purple-600`;
      case "red": return `${baseClasses} bg-red-100/90 text-red-600`;
      case "indigo": return `${baseClasses} bg-indigo-100/90 text-indigo-600`;
      case "gray": return `${baseClasses} bg-gray-100/90 text-gray-600`;
      default: return `${baseClasses} bg-gray-100/90 text-gray-600`;
    }
  };

  // Category definitions
  const categories = [
    {
      id: 'pain-orthopedic',
      name: 'Pain & Orthopedic Conditions',
      description: 'Joint pain, musculoskeletal injuries, and chronic pain conditions',
      background: kneeBackground,
      conditions: [
        { id: "knee-pain", name: "Knee Pain", description: "Arthritis, meniscus tears, ligament injuries" },
        { id: "shoulder-pain", name: "Shoulder Pain", description: "Rotator cuff, impingement, arthritis" },
        { id: "back-pain", name: "Back Pain", description: "Disc degeneration, spinal stenosis, sciatica" },
        { id: "hip-pain", name: "Hip Pain", description: "Hip arthritis, labral tears, bursitis" },
        { id: "chronic-pain", name: "Chronic Pain", description: "Long-term pain management" },
        { id: "osteoarthritis", name: "Osteoarthritis", description: "Joint cartilage restoration" }
      ]
    },
    {
      id: 'autoimmune-inflammatory',
      name: 'Autoimmune & Inflammatory Conditions',
      description: 'Immune system disorders and inflammatory diseases',
      background: arthritisBackground,
      conditions: [
        { id: "arthritis", name: "Rheumatoid Arthritis", description: "Autoimmune joint inflammation" },
        { id: "autoimmune", name: "Autoimmune Diseases", description: "Lupus, RA, and immune conditions" },
        { id: "crohns-colitis", name: "Crohn's & Colitis", description: "Gastrointestinal healing" }
      ]
    },
    {
      id: 'neurological',
      name: 'Neurological Disorders',
      description: 'Brain, spinal cord, and nervous system conditions',
      background: neurologicalBackground,
      conditions: [
        { id: "multiple-sclerosis", name: "Multiple Sclerosis", description: "Neurological regeneration" },
        { id: "neurological", name: "Neurological Conditions", description: "Brain and nerve disorders" },
        { id: "spinal-cord", name: "Spinal Cord Injuries", description: "SCI recovery protocols" }
      ]
    },
    {
      id: 'metabolic-systemic',
      name: 'Metabolic & Systemic Conditions',
      description: 'Diabetes, hormonal disorders, and systemic health conditions',
      background: otherBackground,
      conditions: [
        { id: "diabetes", name: "Diabetes Treatment", description: "Type 1 & Type 2 diabetes therapy" },
        { id: "other-condition", name: "Other Conditions", description: "Additional medical conditions requiring evaluation" }
      ]
    },
    {
      id: 'regenerative-longevity',
      name: 'Regenerative & Longevity Treatments',
      description: 'Anti-aging, wellness optimization, and performance enhancement',
      background: shoulderBackground,
      conditions: [
        { id: "fountain-youth-women", name: "Fountain of Youth for Women", description: "Anti-aging and vitality enhancement" },
        { id: "health-optimization-men", name: "Health Optimization for Men", description: "Performance and recovery enhancement" },
        { id: "sexual-wellness", name: "Sexual Wellness", description: "Intimacy and function restoration" }
      ]
    },
    {
      id: 'cosmetic',
      name: 'Cosmetic',
      description: 'Aesthetic treatments and skin rejuvenation',
      background: cosmeticBackground,
      conditions: [
        { id: "cosmetic-skin", name: "Cosmetic & Skin", description: "Anti-aging and skin rejuvenation" }
      ]
    }
  ];

  const handleCategorySelect = (categoryId: string) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSelectedCategory(categoryId);
    
    // Animate out current tiles
    setTimeout(() => {
      setCurrentView('conditions');
      setIsAnimating(false);
    }, 300);
  };

  const handleConditionSelect = (conditionId: string) => {
    if (conditionId === "custom") {
      setShowContinueButton(true);
    } else {
      onSelectCondition(conditionId);
    }
  };

  const handleBackToCategories = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Animate out condition tiles
    setTimeout(() => {
      setCurrentView('categories');
      setSelectedCategory('');
      setIsAnimating(false);
    }, 300);
  };

  const getCurrentConditions = () => {
    const category = categories.find(c => c.id === selectedCategory);
    return category?.conditions || [];
  };

  const handleCustomSubmit = () => {
    if (customDescription.trim()) {
      onSelectCondition("custom", customDescription.trim());
      // Scroll to the loading section after a brief delay
      setTimeout(() => {
        const loadingElement = document.getElementById('loading-section');
        if (loadingElement) {
          loadingElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 600);
    }
  };

  const handleDescriptionChange = (value: string) => {
    setCustomDescription(value);
    setShowContinueButton(value.trim().length > 10);
  };

  return (
    <div>
      {/* Darkening overlay when textarea is focused */}
      {isTextareaFocused && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
          onClick={() => setIsTextareaFocused(false)}
        />
      )}
      
      <div className="text-center mb-8">
        <div className="relative max-w-[900px] mx-auto mb-8">
          {/* Desktop Layout: Floating Profile Picture */}
          <div className="hidden md:block absolute left-0 top-0 z-20 transform -translate-y-4 -translate-x-8">
            <img 
              src={drMcCarthyPhoto} 
              alt="Dr. Daisy McCarthy, MD" 
              className="w-48 h-48 rounded-full object-cover"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          
          {/* Quote Box */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 relative">
            {/* Mobile Layout: Photo at top */}
            <div className="md:hidden flex justify-center mb-4">
              <img 
                src={drMcCarthyPhoto} 
                alt="Dr. Daisy McCarthy, MD" 
                className="w-24 h-24 rounded-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>

            {/* Desktop: Invisible spacer for text wrapping */}
            <div 
              className="hidden md:block float-left mr-6 mb-4"
              style={{ 
                width: '12rem', 
                height: '8rem',
                shapeOutside: 'circle(50%)'
              }}
            ></div>
            
            <div className="text-left">
              <div className="italic text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg mb-3">
                  "As a physician trained in anesthesiology, pain management, and regenerative medicine, I've seen both the promise and the limits of stem cell therapy.
                </p>
                <p className="text-base md:text-lg mb-3">
                  Many patients struggle to find clear, unbiased information about whether these treatments could be suitable for their condition.
                </p>
                <p className="text-base md:text-lg mb-3">
                  That's why I developed this free personalized report — to help you understand what regenerative options may offer, where evidence is strongest, and what questions to ask any provider before making a decision.
                </p>
                <p className="text-base md:text-lg mb-4">
                  My goal is simple: education first, so you can make informed choices about your health."
                </p>
              </div>
              <div className="text-center md:text-right clear-both">
                <p className="font-title-medium text-gray-900 text-base md:text-lg">— Dr. Daisy McCarthy, MD</p>
                <p className="text-xs md:text-sm text-gray-600">Anesthesiologist & Regenerative Medicine Specialist | Trained at Harvard University</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
        <div className="flex items-start">
          <i className="fas fa-exclamation-triangle text-yellow-600 mt-1 mr-3"></i>
          <div>
            <p className="text-sm text-yellow-800">
              <strong>Medical Disclaimer:</strong> This tool provides educational information only and is not intended as medical advice. Always consult with a qualified healthcare provider for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>



      {/* Main Content Container with Fade Animation */}
      <div className="relative">
        {/* Categories View */}
        <div className={`transition-all duration-400 ease-in-out ${
          currentView === 'categories' 
            ? 'opacity-100' 
            : 'opacity-0 pointer-events-none absolute top-0 left-0 w-full'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-title-medium text-gray-900 mb-2">Tell Us About Your Health Concern</h3>
            <p className="text-neutral-600">Describe your condition in your own words or choose from the categories below</p>
          </div>
          
          {/* Custom Description Input */}
          <div id="custom-description-section" className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl border-2 border-medical-blue p-8 mb-8 relative overflow-hidden z-20">
            {/* Highlight accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-900"></div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-title-medium text-gray-900 mb-2">Describe your condition in your own words</h3>
              <p className="text-neutral-600">Tell us about your health concern and we'll create a personalized report</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <textarea
                value={customDescription}
                onChange={(e) => handleDescriptionChange(e.target.value)}
                onFocus={() => setIsTextareaFocused(true)}
                onBlur={() => setIsTextareaFocused(false)}
                placeholder="For example: I have chronic knee pain that's been getting worse over the past year, especially when I walk or go up stairs. I've tried physical therapy but it's not helping much..."
                className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all duration-200 relative z-20"
                rows={4}
                data-testid="input-custom-condition"
              />
              
              <div className="text-center mt-4">
                <button
                  onClick={handleCustomSubmit}
                  disabled={!showContinueButton}
                  className={`px-8 py-3 rounded-lg transition-colors duration-200 font-medium shadow-md hover:shadow-lg ${
                    showContinueButton 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  data-testid="button-submit-custom-condition"
                >
                  Generate My Free Report
                </button>
              </div>
              
              {customDescription.trim().length > 0 && customDescription.trim().length <= 10 && (
                <p className="text-sm text-gray-500 mt-2">Please provide a more detailed description (at least 10 characters)</p>
              )}
            </div>
          </div>
          
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-4 text-gray-500 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <h3 className="text-xl font-title-medium text-gray-900 mb-2">Choose Your Health Category</h3>
            <p className="text-neutral-600">Select the category that best describes your condition</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 group">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white rounded-tr-xl rounded-bl-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-medical-blue p-6 relative overflow-hidden transform hover:-translate-y-2 hover:scale-105 group-hover:opacity-70 hover:!opacity-100"
                  onClick={() => handleCategorySelect(category.id)}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute top-0 left-0 w-full h-32 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${category.background})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  
                  <div className="text-center relative pt-36">
                    <h3 className="text-lg font-title-medium text-gray-900 mb-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded">{category.name}</h3>
                    <p className="text-sm text-neutral-500 bg-white/80 backdrop-blur-sm px-3 py-1 rounded">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conditions View */}
        <div className={`transition-all duration-400 ease-in-out ${
          currentView === 'conditions' 
            ? 'opacity-100' 
            : 'opacity-0 pointer-events-none absolute top-0 left-0 w-full'
        }`}>
          {selectedCategory && (
            <>
              {/* Back Button and Category Header */}
              <div className="mb-8">
                <button
                  onClick={handleBackToCategories}
                  className="bg-gray-100 hover:bg-medical-blue hover:text-white transition-colors duration-200 px-3 py-1 rounded-full text-sm flex items-center mb-4"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back to Categories
                </button>
                
                <div className="text-center">
                  <h3 className="text-2xl font-title-medium text-gray-900 mb-2">
                    {categories.find(c => c.id === selectedCategory)?.name}
                  </h3>
                  <p className="text-neutral-600">
                    {categories.find(c => c.id === selectedCategory)?.description}
                  </p>
                </div>
              </div>

              {/* Condition Tiles */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 group">
                {getCurrentConditions().map((condition) => {
                  const isSelected = selectedCondition === condition.id;
                  return (
                    <div
                      key={condition.id}
                      className={`bg-white rounded-tr-xl rounded-bl-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 p-6 relative overflow-hidden transform hover:-translate-y-2 hover:scale-105 group-hover:opacity-70 hover:!opacity-100 ${
                        isSelected 
                          ? "border-medical-blue bg-blue-50" 
                          : "border-transparent hover:border-medical-blue"
                      }`}
                      onClick={() => handleConditionSelect(condition.id)}
                    >
                      {/* Background Image */}
                      <div 
                        className="absolute top-0 left-0 w-full h-32 bg-cover bg-center"
                        style={{ 
                          backgroundImage: `url(${getConditionBackgroundImage(condition.id)})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      
                      <div className="text-center relative pt-36">
                        <h3 className="text-lg font-title-medium text-gray-900 mb-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded">{condition.name}</h3>
                        <p className="text-sm text-neutral-500 bg-white/80 backdrop-blur-sm px-3 py-1 rounded">{condition.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>


    </div>
  );
}
