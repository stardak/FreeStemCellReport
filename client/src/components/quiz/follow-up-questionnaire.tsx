import React, { useState, useEffect } from "react";
import { QuizFormData } from "@/lib/types";
import { conditions } from "@/data/conditions";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { AnimatedBlob } from "@/components/animated-blob/AnimatedBlob";

interface FollowUpQuestionnaireProps {
  selectedCondition: string;
  customDescription?: string;
  onSubmit: (data: QuizFormData) => void;
  onBack: () => void;
}

// Condition-specific question sets
const getQuestionsForCondition = (conditionId: string) => {
  // Return empty array if no condition provided
  if (!conditionId) {
    return [];
  }

  // Pain & Orthopedic Conditions
  const painOrthopedicConditions = ["knee-pain", "shoulder-pain", "back-pain", "hip-pain", "chronic-pain", "osteoarthritis"];
  
  // Autoimmune & Inflammatory Conditions  
  const autoImmuneConditions = ["arthritis", "autoimmune", "crohns-colitis"];
  
  // Neurological Disorders
  const neurologicalConditions = ["multiple-sclerosis", "neurological", "spinal-cord"];
  
  // Metabolic & Systemic Conditions
  const metabolicConditions = ["diabetes", "other-condition"];
  
  // Regenerative & Longevity Treatments
  const regenerativeConditions = ["fountain-youth-women", "health-optimization-men", "sexual-wellness"];
  
  // Cosmetic
  const cosmeticConditions = ["cosmetic-skin"];

  if (painOrthopedicConditions.includes(conditionId)) {
    return [
      {
        id: 'severity',
        title: 'How would you rate your pain level?',
        subtitle: 'This helps us understand the intensity of your symptoms',
        options: [
          { value: 'mild', label: 'Mild', description: 'Manageable discomfort that doesn\'t interfere with daily activities' },
          { value: 'moderate', label: 'Moderate', description: 'Noticeable pain that sometimes limits your activities' },
          { value: 'severe', label: 'Severe', description: 'Intense pain that significantly impacts your daily life' }
        ]
      },
      {
        id: 'duration',
        title: 'How long have you been experiencing this pain?',
        subtitle: 'Duration helps determine the best treatment approach',
        options: [
          { value: 'recent', label: 'Recent (Under 3 months)', description: 'Pain started within the last few months' },
          { value: 'chronic', label: 'Chronic (3-12 months)', description: 'Ongoing pain for several months' },
          { value: 'longterm', label: 'Long-term (1-3 years)', description: 'Persistent pain for over a year' },
          { value: 'years', label: 'Years (3+ years)', description: 'Long-standing pain lasting several years' }
        ]
      },
      {
        id: 'treatments',
        title: 'What treatments have you tried for your pain?',
        subtitle: 'Select all that apply - this helps us understand your treatment history',
        isMultiple: true,
        options: [
          { value: 'physical-therapy', label: 'Physical Therapy', description: 'Professional rehabilitation exercises' },
          { value: 'medication', label: 'Pain Medication', description: 'Over-the-counter or prescription pain relief' },
          { value: 'injections', label: 'Injections', description: 'Cortisone, hyaluronic acid, or other injections' },
          { value: 'surgery', label: 'Surgery', description: 'Any surgical interventions' },
          { value: 'alternative', label: 'Alternative Therapies', description: 'Acupuncture, chiropractic, massage, etc.' },
          { value: 'none', label: 'No Previous Treatment', description: 'This would be your first treatment approach' }
        ]
      }
    ];
  }

  if (autoImmuneConditions.includes(conditionId)) {
    return [
      {
        id: 'severity',
        title: 'How would you rate your current symptoms?',
        subtitle: 'This helps us understand the impact on your daily life',
        options: [
          { value: 'mild', label: 'Mild', description: 'Symptoms are manageable and don\'t significantly impact daily activities' },
          { value: 'moderate', label: 'Moderate', description: 'Symptoms sometimes limit your activities and energy levels' },
          { value: 'severe', label: 'Severe', description: 'Symptoms significantly impact your quality of life and daily functioning' }
        ]
      },
      {
        id: 'duration',
        title: 'How long have you been diagnosed or experiencing symptoms?',
        subtitle: 'Disease duration helps determine the best therapeutic approach',
        options: [
          { value: 'recent', label: 'Recently diagnosed (Under 1 year)', description: 'Newly diagnosed or early-stage symptoms' },
          { value: 'chronic', label: 'Established (1-5 years)', description: 'Living with the condition for several years' },
          { value: 'longterm', label: 'Long-term (5-10 years)', description: 'Experienced condition management for many years' },
          { value: 'years', label: 'Extensive (10+ years)', description: 'Long-standing condition with extensive treatment history' }
        ]
      },
      {
        id: 'treatments',
        title: 'What treatments are you currently using or have tried?',
        subtitle: 'Select all that apply - understanding your treatment history is important',
        isMultiple: true,
        options: [
          { value: 'immunosuppressants', label: 'Immunosuppressive Drugs', description: 'Methotrexate, biologics, or other immune-modulating medications' },
          { value: 'steroids', label: 'Corticosteroids', description: 'Prednisone or other steroid medications' },
          { value: 'anti-inflammatory', label: 'Anti-inflammatory Medications', description: 'NSAIDs or specialized anti-inflammatory drugs' },
          { value: 'dietary', label: 'Dietary Changes', description: 'Anti-inflammatory diet, elimination diets, or specific nutritional approaches' },
          { value: 'alternative', label: 'Alternative Therapies', description: 'Acupuncture, supplements, herbal treatments, etc.' },
          { value: 'none', label: 'No Current Treatment', description: 'Looking for initial or alternative treatment options' }
        ]
      }
    ];
  }

  if (neurologicalConditions.includes(conditionId)) {
    return [
      {
        id: 'severity',
        title: 'How would you describe your current neurological symptoms?',
        subtitle: 'This helps us understand the extent of your condition',
        options: [
          { value: 'mild', label: 'Mild', description: 'Symptoms are noticeable but don\'t significantly limit daily activities' },
          { value: 'moderate', label: 'Moderate', description: 'Symptoms affect some daily activities and require adaptations' },
          { value: 'severe', label: 'Severe', description: 'Symptoms significantly impact mobility, function, or quality of life' }
        ]
      },
      {
        id: 'duration',
        title: 'How long have you been dealing with this neurological condition?',
        subtitle: 'Understanding the timeline helps assess treatment options',
        options: [
          { value: 'recent', label: 'Recent onset (Under 2 years)', description: 'Recently diagnosed or early-stage condition' },
          { value: 'chronic', label: 'Established (2-5 years)', description: 'Living with the condition for several years' },
          { value: 'longterm', label: 'Long-term (5-10 years)', description: 'Extensive experience managing the condition' },
          { value: 'years', label: 'Many years (10+ years)', description: 'Long-standing neurological condition' }
        ]
      },
      {
        id: 'treatments',
        title: 'What neurological treatments have you tried?',
        subtitle: 'Select all that apply - this helps us understand your treatment journey',
        isMultiple: true,
        options: [
          { value: 'medication', label: 'Neurological Medications', description: 'Disease-modifying drugs, symptom management medications' },
          { value: 'rehabilitation', label: 'Rehabilitation Therapies', description: 'Physical, occupational, or speech therapy' },
          { value: 'procedures', label: 'Medical Procedures', description: 'Injections, implants, or other interventional treatments' },
          { value: 'supportive', label: 'Supportive Care', description: 'Assistive devices, mobility aids, adaptive equipment' },
          { value: 'alternative', label: 'Alternative Approaches', description: 'Acupuncture, supplements, diet modifications, etc.' },
          { value: 'none', label: 'No Previous Treatment', description: 'Exploring treatment options for the first time' }
        ]
      }
    ];
  }

  if (metabolicConditions.includes(conditionId)) {
    return [
      {
        id: 'severity',
        title: 'How well-controlled is your metabolic condition?',
        subtitle: 'This helps us understand your current health status',
        options: [
          { value: 'mild', label: 'Well-controlled', description: 'Condition is stable with current management' },
          { value: 'moderate', label: 'Moderately controlled', description: 'Some fluctuations but generally manageable' },
          { value: 'severe', label: 'Poorly controlled', description: 'Significant challenges with current management approach' }
        ]
      },
      {
        id: 'duration',
        title: 'How long have you been managing this condition?',
        subtitle: 'Disease duration affects treatment planning',
        options: [
          { value: 'recent', label: 'Recently diagnosed (Under 2 years)', description: 'New diagnosis, still learning management strategies' },
          { value: 'chronic', label: 'Established (2-10 years)', description: 'Experienced with condition management' },
          { value: 'longterm', label: 'Long-term (10-20 years)', description: 'Extensive experience with the condition' },
          { value: 'years', label: 'Many years (20+ years)', description: 'Long-standing condition with comprehensive treatment history' }
        ]
      },
      {
        id: 'treatments',
        title: 'What treatments are you currently using?',
        subtitle: 'Select all that apply - understanding your current regimen is important',
        isMultiple: true,
        options: [
          { value: 'medication', label: 'Prescription Medications', description: 'Insulin, metformin, or other prescribed treatments' },
          { value: 'lifestyle', label: 'Lifestyle Management', description: 'Diet modifications, exercise programs, weight management' },
          { value: 'monitoring', label: 'Regular Monitoring', description: 'Blood glucose monitoring, regular check-ups, lab work' },
          { value: 'devices', label: 'Medical Devices', description: 'Continuous glucose monitors, insulin pumps, etc.' },
          { value: 'supplements', label: 'Supplements', description: 'Vitamins, minerals, or other nutritional supplements' },
          { value: 'none', label: 'No Current Treatment', description: 'Looking for treatment options or recently diagnosed' }
        ]
      }
    ];
  }

  if (regenerativeConditions.includes(conditionId)) {
    return [
      {
        id: 'goals',
        title: 'What are your primary wellness goals?',
        subtitle: 'Understanding your objectives helps us provide targeted recommendations',
        isMultiple: true,
        options: [
          { value: 'energy', label: 'Increased Energy', description: 'Boost vitality and reduce fatigue' },
          { value: 'performance', label: 'Enhanced Performance', description: 'Improve physical or cognitive performance' },
          { value: 'recovery', label: 'Better Recovery', description: 'Faster healing and reduced downtime' },
          { value: 'longevity', label: 'Anti-aging Benefits', description: 'Slow aging processes and maintain youthfulness' },
          { value: 'wellness', label: 'Overall Wellness', description: 'General health optimization and disease prevention' },
          { value: 'specific', label: 'Specific Health Concerns', description: 'Address particular health issues or symptoms' }
        ]
      },
      {
        id: 'duration',
        title: 'How long have you been interested in regenerative treatments?',
        subtitle: 'This helps us understand your familiarity with these approaches',
        options: [
          { value: 'new', label: 'New to regenerative medicine', description: 'Just beginning to explore these treatment options' },
          { value: 'exploring', label: 'Researching (6+ months)', description: 'Have been learning about regenerative treatments' },
          { value: 'experienced', label: 'Some experience (1+ years)', description: 'Have tried some regenerative or wellness treatments' },
          { value: 'veteran', label: 'Experienced (3+ years)', description: 'Extensive experience with various regenerative approaches' }
        ]
      },
      {
        id: 'treatments',
        title: 'What wellness or regenerative treatments have you tried?',
        subtitle: 'Select all that apply - this helps us understand your experience level',
        isMultiple: true,
        options: [
          { value: 'hormone', label: 'Hormone Optimization', description: 'Hormone replacement therapy or optimization protocols' },
          { value: 'peptides', label: 'Peptide Therapies', description: 'Growth hormone peptides or other therapeutic peptides' },
          { value: 'iv', label: 'IV Therapies', description: 'Vitamin IVs, NAD+, or other intravenous treatments' },
          { value: 'supplements', label: 'Advanced Supplements', description: 'High-quality nutraceuticals or longevity supplements' },
          { value: 'lifestyle', label: 'Lifestyle Optimization', description: 'Biohacking, specialized diets, exercise protocols' },
          { value: 'none', label: 'No Previous Experience', description: 'This would be your first regenerative treatment' }
        ]
      }
    ];
  }

  if (cosmeticConditions.includes(conditionId)) {
    return [
      {
        id: 'concerns',
        title: 'What are your primary aesthetic concerns?',
        subtitle: 'Understanding your goals helps us provide appropriate recommendations',
        isMultiple: true,
        options: [
          { value: 'aging', label: 'Signs of Aging', description: 'Fine lines, wrinkles, age spots, or loss of elasticity' },
          { value: 'texture', label: 'Skin Texture', description: 'Rough texture, large pores, or uneven skin surface' },
          { value: 'scars', label: 'Scars or Marks', description: 'Acne scars, stretch marks, or other skin imperfections' },
          { value: 'pigmentation', label: 'Pigmentation Issues', description: 'Dark spots, melasma, or uneven skin tone' },
          { value: 'volume', label: 'Volume Loss', description: 'Loss of facial volume or skin firmness' },
          { value: 'preventive', label: 'Preventive Care', description: 'Maintaining healthy skin and preventing future aging' }
        ]
      },
      {
        id: 'duration',
        title: 'How long have you been considering aesthetic treatments?',
        subtitle: 'This helps us understand your journey with cosmetic procedures',
        options: [
          { value: 'new', label: 'New to aesthetic treatments', description: 'Just beginning to explore cosmetic options' },
          { value: 'researching', label: 'Researching (6+ months)', description: 'Have been learning about various treatment options' },
          { value: 'experienced', label: 'Some experience (1+ years)', description: 'Have tried some aesthetic treatments before' },
          { value: 'veteran', label: 'Experienced (3+ years)', description: 'Extensive experience with cosmetic procedures' }
        ]
      },
      {
        id: 'treatments',
        title: 'What aesthetic treatments have you tried?',
        subtitle: 'Select all that apply - this helps us understand your treatment history',
        isMultiple: true,
        options: [
          { value: 'injectables', label: 'Injectables', description: 'Botox, fillers, or other injectable treatments' },
          { value: 'laser', label: 'Laser Treatments', description: 'Laser resurfacing, IPL, or other light-based therapies' },
          { value: 'chemical', label: 'Chemical Peels', description: 'Professional chemical peels or acid treatments' },
          { value: 'skincare', label: 'Professional Skincare', description: 'Medical-grade skincare or dermatologist treatments' },
          { value: 'procedures', label: 'Other Procedures', description: 'Microneedling, radiofrequency, or other cosmetic procedures' },
          { value: 'none', label: 'No Previous Treatments', description: 'This would be your first aesthetic treatment' }
        ]
      }
    ];
  }

  // Default fallback (for other-condition or unmatched conditions)
  return [
    {
      id: 'severity',
      title: 'How would you rate the impact of your condition?',
      subtitle: 'This helps us understand how it affects your daily life',
      options: [
        { value: 'mild', label: 'Mild Impact', description: 'Condition is manageable and doesn\'t significantly interfere with daily activities' },
        { value: 'moderate', label: 'Moderate Impact', description: 'Condition sometimes limits your activities or quality of life' },
        { value: 'severe', label: 'Significant Impact', description: 'Condition substantially affects your daily functioning and well-being' }
      ]
    },
    {
      id: 'duration',
      title: 'How long have you been dealing with this condition?',
      subtitle: 'Duration helps determine the best treatment approach',
      options: [
        { value: 'recent', label: 'Recent (Under 6 months)', description: 'Condition started within the last few months' },
        { value: 'chronic', label: 'Chronic (6 months - 2 years)', description: 'Ongoing condition for several months to years' },
        { value: 'longterm', label: 'Long-term (2-5 years)', description: 'Persistent condition for multiple years' },
        { value: 'years', label: 'Many years (5+ years)', description: 'Long-standing condition lasting many years' }
      ]
    },
    {
      id: 'treatments',
      title: 'What treatments or approaches have you tried?',
      subtitle: 'Select all that apply - this helps us understand your treatment history',
      isMultiple: true,
      options: [
        { value: 'conventional', label: 'Conventional Medicine', description: 'Traditional medical treatments and medications' },
        { value: 'alternative', label: 'Alternative Therapies', description: 'Acupuncture, naturopathy, herbal treatments, etc.' },
        { value: 'lifestyle', label: 'Lifestyle Changes', description: 'Diet modifications, exercise, stress management' },
        { value: 'procedures', label: 'Medical Procedures', description: 'Surgeries, injections, or other interventional treatments' },
        { value: 'supportive', label: 'Supportive Care', description: 'Physical therapy, counseling, support groups' },
        { value: 'none', label: 'No Previous Treatment', description: 'This would be your first treatment approach' }
      ]
    }
  ];
};

export function FollowUpQuestionnaire({ selectedCondition, customDescription, onSubmit, onBack }: FollowUpQuestionnaireProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("fade-in");
  const [answers, setAnswers] = useState<{[key: string]: any}>({});



  const questions = getQuestionsForCondition(selectedCondition || "");
  const conditionName = conditions.find(c => c.id === selectedCondition)?.name || "your condition";

  // Initialize answers based on question structure
  useEffect(() => {
    if (selectedCondition) {
      const questionsForCondition = getQuestionsForCondition(selectedCondition);
      if (questionsForCondition && questionsForCondition.length > 0) {
        const initialAnswers: {[key: string]: any} = {};
        questionsForCondition.forEach(q => {
          if (q.isMultiple) {
            initialAnswers[q.id] = [];
          } else {
            initialAnswers[q.id] = "";
          }
        });
        setAnswers(initialAnswers);
        setCurrentStep(0); // Reset to first question when condition changes
      }
    }
  }, [selectedCondition]);

  // Early return after hooks if no condition selected
  if (!selectedCondition) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">No condition selected. Please go back and select a condition.</p>
        <button onClick={onBack} className="text-medical-blue hover:text-blue-700">
          Go Back
        </button>
      </div>
    );
  }
  
  // Early return after hooks if no questions available
  if (!questions || questions.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">No questions available for this condition. Please go back and select a different condition.</p>
        <button onClick={onBack} className="text-medical-blue hover:text-blue-700">
          Go Back
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  
  // Safety check for undefined currentQuestion
  if (!currentQuestion) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">Question not found. Please go back and try again.</p>
        <button onClick={onBack} className="text-medical-blue hover:text-blue-700">
          Go Back
        </button>
      </div>
    );
  }
  
  const isLastStep = currentStep === questions.length - 1;
  const isFirstStep = currentStep === 0;

  const handleAnswerChange = (questionId: string, value: any) => {
    if (currentQuestion.isMultiple) {
      setAnswers(prev => {
        const currentArray = prev[questionId] || [];
        return {
          ...prev,
          [questionId]: currentArray.includes(value) 
            ? currentArray.filter((v: any) => v !== value)
            : [...currentArray, value]
        };
      });
    } else {
      setAnswers(prev => ({
        ...prev,
        [questionId]: value
      }));
      
      // Auto-advance for single-choice questions after a brief delay
      setTimeout(() => {
        if (!isLastStep) {
          handleNext();
        } else {
          handleSubmit();
        }
      }, 800);
    }
  };

  const canProceed = () => {
    const currentAnswer = answers[currentQuestion.id];
    if (currentQuestion.isMultiple) {
      return currentAnswer && Array.isArray(currentAnswer) && currentAnswer.length > 0;
    }
    return currentAnswer !== "" && currentAnswer !== undefined;
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    if (isLastStep) {
      handleSubmit();
    } else {
      setIsAnimating(true);
      setAnimationClass("fade-out");
      
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setAnimationClass("fade-in");
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (isAnimating) return;
    
    if (isFirstStep) {
      onBack();
    } else {
      setIsAnimating(true);
      setAnimationClass("fade-out");
      
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        setAnimationClass("fade-in");
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleSubmit = () => {
    onSubmit({
      condition: selectedCondition,
      severity: answers.severity as "mild" | "moderate" | "severe",
      duration: answers.duration as "recent" | "chronic" | "longterm" | "years",
      treatments: answers.treatments,
      // Include all additional answer fields for different condition types
      concerns: answers.concerns,
      goals: answers.goals,
    });
  };

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-title-medium text-gray-900 mb-4" style={{ fontSize: '42px' }}>
            Tell us more about your {conditionName.toLowerCase()}
          </h2>
          <p className="text-lg text-neutral-500 mb-6">We'll personalize your treatment recommendations</p>
          


          {customDescription && (
            <div className="bg-blue-50 border border-blue-200 rounded-tr-xl rounded-bl-xl p-4 max-w-2xl mx-auto">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">Your Description:</h3>
              <p className="text-sm text-blue-800 italic">"{customDescription}"</p>
            </div>
          )}
        </div>

        {/* Question Card */}
        <div className={`bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto ${animationClass}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {currentQuestion.title}
            </h3>
            <p className="text-neutral-600">
              {currentQuestion.subtitle}
            </p>
          </div>

          {/* Answer Options */}
          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option) => {
              const currentAnswer = answers[currentQuestion.id];
              const isSelected = currentQuestion.isMultiple 
                ? (currentAnswer && Array.isArray(currentAnswer) && currentAnswer.includes(option.value))
                : currentAnswer === option.value;

              return (
                <label
                  key={option.value}
                  className={`block p-6 border-2 rounded-tr-xl rounded-bl-xl cursor-pointer transition-all duration-200 transform hover:scale-102 ${
                    isSelected 
                      ? 'border-medical-blue bg-blue-50 shadow-md' 
                      : 'border-neutral-200 hover:border-medical-blue hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start">
                    <input
                      type={currentQuestion.isMultiple ? "checkbox" : "radio"}
                      name={currentQuestion.id}
                      value={option.value}
                      checked={isSelected}
                      onChange={() => handleAnswerChange(currentQuestion.id, option.value)}
                      className="mt-1 mr-4 w-5 h-5 text-medical-blue"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-lg mb-1">
                        {option.label}
                      </div>
                      <div className="text-neutral-600">
                        {option.description}
                      </div>
                    </div>
                  </div>
                </label>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
            <button
              onClick={handlePrevious}
              className="custom-button"
            >
              <span className="button_top">
                {isFirstStep ? 'Back to Conditions' : 'Previous'}
              </span>
            </button>

            <div className="flex items-center gap-2 text-sm text-neutral-500">
              {currentStep + 1} of {questions.length}
            </div>

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`custom-button ${canProceed() ? 'primary' : ''}`}
              style={{ opacity: canProceed() ? 1 : 0.5 }}
            >
              <span className="button_top">
                Next
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}