import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { ConditionSelector } from "@/components/quiz/condition-selector";
import { FollowUpQuestionnaire } from "@/components/quiz/follow-up-questionnaire";
import { LoadingState } from "@/components/quiz/loading-state";
import { PersonalizedResults } from "@/components/quiz/personalized-results";
import { ContactCapture } from "@/components/quiz/contact-capture";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { VoiceChat } from "@/components/voice-chat/VoiceChat";
import { Plasma } from "@/components/plasma/Plasma";
import { QuizFormData, EducationalContent } from "@/lib/types";
import { educationalContent } from "@/data/educational-content";
import { apiRequest } from "@/lib/queryClient";
import heroImage from "@assets/stardak_A_woman_of_30_with_a_narrow_face_the_womans_palms_are_75b894eb-a642-445e-ab34-f8c61c2086d7_1_1756581952666.png";
import logo from "@assets/newstemcelllogo_1757155983144.png";
import footerLogo from "@assets/stemlog-white_1756400363335.png";
import doctorImage from "@assets/doctor_1756742974709.png";
import lauraImage from "@assets/Laura_1755085870129.jpg";
import julianaImage from "@assets/Juliana_1755085885206.jpg";
import danielaImage from "@assets/Daniela-V2_1755085901612.jpg";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCondition, setSelectedCondition] = useState<string>("");
  const [customDescription, setCustomDescription] = useState<string>("");
  const [quizData, setQuizData] = useState<QuizFormData | null>(null);
  const [aiGeneratedContent, setAiGeneratedContent] = useState<EducationalContent | null>(null);
  const [contactData, setContactData] = useState<{ userName: string; userEmail: string; emailConsent: boolean } | null>(null);
  const [openFaqItems, setOpenFaqItems] = useState<Set<number>>(new Set());


  const submitQuizMutation = useMutation({
    mutationFn: async (data: QuizFormData) => {
      const response = await apiRequest("POST", "/api/quiz-responses", data);
      return response.json();
    },
    onSuccess: () => {
      // Don't automatically move to results - wait for AI content
    },
  });

  const generateContentMutation = useMutation({
    mutationFn: async (data: QuizFormData) => {
      console.log("Sending data to API:", data);
      const response = await apiRequest("POST", "/api/generate-content", data);
      return response.json();
    },
    onSuccess: (content) => {
      setAiGeneratedContent(content);
      // Move to contact capture after AI content is ready
      setCurrentStep(7);
    },
    onError: (error) => {
      console.error("Failed to generate AI content:", error);
      // Move to contact capture with fallback content if AI generation fails
      setCurrentStep(7);
    },
  });

  const submitLeadMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; source: string; description?: string }) => {
      const response = await apiRequest("POST", "/api/submit-lead", data);
      return response.json();
    },
    onSuccess: () => {
      console.log("Contact data successfully submitted to Google Sheets");
    },
    onError: (error) => {
      console.error("Failed to submit contact data to Google Sheets:", error);
    }
  });

  const sendEmailMutation = useMutation({
    mutationFn: async (data: { email: string; userName: string; reportContent: any; conditionName?: string }) => {
      const response = await apiRequest("POST", "/api/send-report-email", data);
      return response.json();
    },
    onSuccess: (result) => {
      console.log("Report email sent successfully:", result.messageId);
    },
    onError: (error) => {
      console.error("Failed to send report email:", error);
    }
  });

  const handleConditionSelect = (condition: string, description?: string) => {
    setSelectedCondition(condition);
    if (description) {
      setCustomDescription(description);
      // If user provided a custom description, skip questionnaire and go straight to generating report
      const customQuizData: QuizFormData = {
        condition: "custom",
        severity: "moderate" as const,
        duration: "chronic" as const,
        treatments: [],
        customDescription: description
      };
      setQuizData(customQuizData);
      setTimeout(() => {
        setCurrentStep(6); // Go to loading state
        submitQuizMutation.mutate(customQuizData);
        generateContentMutation.mutate(customQuizData);
      }, 500);
    } else {
      // Regular flow for predefined conditions
      setTimeout(() => {
        setCurrentStep(2);
        // Scroll to questionnaire section after step transition
        setTimeout(() => {
          const questionnaireElement = document.getElementById('questionnaire-section');
          if (questionnaireElement) {
            questionnaireElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
      }, 500);
    }
  };

  const handleQuestionnaireSubmit = (data: QuizFormData) => {
    // Just store the data and move to the optional details step
    setQuizData(data);
    setCurrentStep(5);
  };

  const handleContactSubmit = (contact: { userName: string; userEmail: string; emailConsent: boolean }) => {
    setContactData(contact);
    
    // Create description from quiz data
    let description = '';
    let conditionName = '';
    if (quizData) {
      if (quizData.customDescription) {
        // Use custom description if provided
        description = quizData.customDescription;
        conditionName = 'Custom Condition';
      } else if (quizData.condition && quizData.condition !== 'custom') {
        // Use condition name for predefined conditions
        conditionName = quizData.condition.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        description = conditionName;
      }
      
      // Add additional context if available
      if (quizData.concerns && quizData.concerns.length > 0) {
        description += description ? ` - Concerns: ${quizData.concerns.join(', ')}` : `Concerns: ${quizData.concerns.join(', ')}`;
      }
      
      if (quizData.goals && quizData.goals.length > 0) {
        description += description ? ` - Goals: ${quizData.goals.join(', ')}` : `Goals: ${quizData.goals.join(', ')}`;
      }
    }
    
    // Submit contact data to Google Sheets with description
    submitLeadMutation.mutate({
      name: contact.userName,
      email: contact.userEmail,
      source: 'Quiz Report',
      description: description || 'No description provided'
    });
    
    // Send personalized report email if consent given and AI content available
    if (contact.emailConsent && aiGeneratedContent) {
      sendEmailMutation.mutate({
        email: contact.userEmail,
        userName: contact.userName,
        reportContent: aiGeneratedContent,
        conditionName: conditionName || 'Your Condition'
      });
    }
    
    // Move to final results page
    setCurrentStep(8);
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setSelectedCondition("");
    setCustomDescription("");
    setQuizData(null);
    setAiGeneratedContent(null);
    setContactData(null);
  };

  const toggleFaqItem = (index: number) => {
    setOpenFaqItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const faqData = [
    {
      question: "What is the Free Customized Stem Cell Report?",
      answer: "The report is a personalized, evidence-based guide to help you understand whether stem cell and regenerative treatments may be relevant for your condition. It's designed to cut through hype, misinformation, and confusion, giving you a clear overview of where the science is strongest — and where it isn't."
    },
    {
      question: "How does the AI create my personalized report?",
      answer: [
        "We've trained our AI system on thousands of peer-reviewed medical studies, clinical guidelines, and expert insights in regenerative medicine. Dr. Daisy McCarthy, a Harvard-trained anesthesiologist and regenerative medicine specialist, worked closely with our team to guide and supervise the process.",
        "When you complete the free assessment, the AI analyzes your responses and generates a tailored overview of how regenerative therapies may (or may not) relate to your specific condition."
      ]
    },
    {
      question: "Why should I trust this information?",
      answer: [
        "Unlike marketing materials from clinics, this report is built around independent research and evidence, not sales. Every recommendation is reviewed and framed under the supervision of Dr. Daisy McCarthy to ensure accuracy and balance.",
        "Our goal is education first — not pushing you into treatment."
      ]
    },
    {
      question: "Is this medical advice?",
      answer: "No. This tool is for educational purposes only. It does not diagnose, treat, or recommend specific therapies. Always consult a qualified healthcare professional before making any medical decisions."
    },
    {
      question: "What conditions can the report cover?",
      answer: "We currently provide personalized information for:",
      list: [
        "• **Pain & Orthopedic Conditions** (joint pain, musculoskeletal injuries, chronic pain)",
        "• **Autoimmune & Inflammatory Conditions** (immune system disorders, inflammation)",
        "• **Neurological Disorders** (brain, spine, and nervous system conditions)",
        "• **Metabolic & Systemic Conditions** (diabetes, hormonal disorders, systemic health)",
        "• **Regenerative & Longevity Treatments** (anti-aging, wellness optimization, performance)",
        "• **Cosmetic Uses** (aesthetic treatments, skin rejuvenation)"
      ]
    },
    {
      question: "Will the report tell me if stem cell therapy will cure my condition?",
      answer: "No. Stem cell and regenerative treatments are still evolving, and results vary widely. The report will explain:",
      list: [
        "• Where research shows potential benefits",
        "• Where evidence is limited or uncertain",
        "• What questions to ask any provider before considering treatment",
        "• Alternatives or complementary approaches worth exploring"
      ]
    },
    {
      question: "How much does it cost?",
      answer: "The customized report is completely free. We believe every patient deserves access to unbiased, evidence-based education before spending money or hope on treatments."
    },
    {
      question: "What makes this different from Googling my condition?",
      answer: "A web search can overwhelm you with marketing claims, outdated studies, or conflicting opinions. Our system filters through peer-reviewed research and clinical experience, presenting information in a clear, structured, and personalized way — so you can focus on what matters for your condition."
    },
    {
      question: "What's the next step after I read my report?",
      answer: "Use it as a starting point. Bring it to your healthcare provider, ask questions, and explore whether regenerative treatments are right for you. The most important outcome of the report is clarity — so you can make decisions with confidence, not confusion."
    }
  ];

  const handleBack = () => {
    setCurrentStep(1);
  };

  const getEducationalContent = (): EducationalContent => {
    // Use AI-generated content if available
    if (aiGeneratedContent) {
      return aiGeneratedContent;
    }
    
    // Fallback to static content
    if (!quizData) return educationalContent["other"];
    return educationalContent[quizData.condition] || educationalContent["other"];
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e4e2dd' }}>
      {/* Header - Hide on report page (step 8) */}
      {currentStep !== 8 && (
        <header className="shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <img 
                src={logo} 
                alt="FreeStemCellReport.com" 
                className="max-w-[225px] h-auto"
              />
              
              {/* Navigation Menu */}
              <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
              >
                Learn
              </button>
              <button 
                onClick={() => document.getElementById('voice-chat-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
              >
                Ask AI
              </button>
              <button 
                onClick={() => document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
              >
                Assessment
              </button>
              <a 
                href="/about-doctor" 
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
              >
                Dr. McCarthy
              </a>
              <a 
                href="/stem-cells-colombia" 
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
              >
                Stem Cells Colombia
              </a>
              {currentStep === 1 && (
                <button 
                  onClick={() => document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
                >
                  FAQ
                </button>
              )}
            </nav>
          </div>
        </div>
      </header>
      )}

      {/* Hero Section - Only show before report page */}
      {currentStep < 8 && (
      <section className="relative bg-gray-900 text-white shadow-2xl">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Woman with glowing cellular network patterns representing regenerative medicine and healing" 
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
          <div className="absolute inset-0 opacity-30">
            <Plasma 
              color="#4F46E5"
              speed={0.3}
              direction="forward"
              scale={1.2}
              opacity={0.6}
              mouseInteractive={false}
            />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="font-title-medium mb-6 leading-tight text-white">
              <span style={{ fontSize: '63px', lineHeight: '0.9' }}>Are stem cells right for you?</span>
              <br />
              <span style={{ fontSize: '32px', lineHeight: '0.9' }}>Find out in a few minutes with a free customised stem cell report.</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto">
              This groundbreaking personalised report explains how regenerative treatments work, where they may be useful for you, and the key questions to ask before making any decision. <Link href="/stem-cells-colombia" className="underline hover:text-blue-200">Looking for options? Start with a free report</Link> that explains costs and key questions.
            </p>
            
            {/* Doctor Credentials Banner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 max-w-4xl mx-auto">
              <p className="text-white/90 text-center mb-2 font-medium">Supervised by Dr. Daisy McCarthy, MD</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
                <span className="flex items-center">🎓 Harvard University Training</span>
                <span className="flex items-center">🏆 15+ Years Experience</span>
                <span className="flex items-center">🔬 ISSCA Certified</span>
                <span className="flex items-center">📚 Published Researcher</span>
              </div>
            </div>
            <div className="flex justify-center">
              <button 
                onClick={() => document.getElementById('custom-description-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="custom-button primary"
              >
                <span className="button_top">Start Your Free Assessment</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Video Section - Hide on report page */}
      {currentStep !== 8 && (
      <section id="video-section" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-title-medium text-gray-900 mb-4">
              Learn About Stem Cell Therapy
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-4">
              Watch Dr. McCarthy explain how stem cell therapy works and discover if it could be right for you.
            </p>
            
            {/* Doctor Info Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 max-w-2xl mx-auto mb-6">
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={doctorImage} 
                  alt="Dr. Daisy McCarthy" 
                  className="w-16 h-16 rounded-full border-2 border-medical-blue"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Dr. Daisy McCarthy, MD</h3>
                  <p className="text-sm text-gray-600">Anesthesiologist & Regenerative Medicine Specialist</p>
                  <div className="flex items-center space-x-3 mt-1 text-xs text-gray-500">
                    <span>Harvard Trained</span>
                    <span>•</span>
                    <span>15+ Years Experience</span>
                    <span>•</span>
                    <a href="/about-doctor" className="text-medical-blue hover:text-blue-700 underline">Full Bio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <wistia-player media-id="vuknydy1e3" aspect="1.7777777777777777"></wistia-player>
          </div>
        </div>
      </section>
      )}

      {/* Voice Chat Section - Hide on report page */}
      {currentStep !== 8 && (
      <section id="voice-chat-section" className="py-16 bg-white relative overflow-hidden">
        {/* Plasma Background */}
        <div className="absolute inset-0 opacity-30">
          <Plasma 
            color="#4F46E5"
            speed={0.3}
            direction="forward"
            scale={1.2}
            opacity={0.6}
            mouseInteractive={true}
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <VoiceChat className="mx-auto max-w-2xl" />
        </div>
      </section>
      )}

      {/* Main Content */}
      <main id="quiz-section" className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Indicator - positioned to overlap hero by 30px - Only show after step 1 but not on results */}
        {currentStep > 1 && currentStep < 8 && (
          <div className="mb-8 relative -mt-8 z-20 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white">
              <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
                <ProgressIndicator currentStep={currentStep} totalSteps={8} />
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <ConditionSelector 
            onSelectCondition={handleConditionSelect} 
            selectedCondition={selectedCondition}
          />
        )}

        {currentStep === 2 && (
          <div id="questionnaire-section">
            <FollowUpQuestionnaire
              selectedCondition={selectedCondition}
              customDescription={customDescription}
              onSubmit={handleQuestionnaireSubmit}
              onBack={handleBack}
            />
          </div>
        )}

        {currentStep === 5 && (
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-title-medium text-gray-900 mb-4">Almost there!</h2>
            <p className="text-lg text-neutral-600 mb-8">
              To give you the most accurate recommendation, please share any extra details about your condition or symptoms. (Optional, but it really helps.)
            </p>
            
            <div className="bg-white rounded-tr-xl rounded-bl-xl shadow-md p-6 mb-8">
              <textarea
                value={customDescription}
                onChange={(e) => setCustomDescription(e.target.value)}
                placeholder="Share any additional details about your symptoms, pain patterns, activities that worsen/improve your condition, or specific concerns you'd like addressed..."
                className="w-full min-h-[120px] p-4 border border-neutral-200 rounded-tr-xl rounded-bl-xl focus:border-medical-blue focus:ring-1 focus:ring-medical-blue resize-none"
                maxLength={1000}
              />
              <div className="flex items-center justify-between text-sm text-neutral-500 mt-2">
                <span>This helps us provide more personalized recommendations</span>
                <span>{customDescription.length}/1000</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setCurrentStep(2)}
                className="custom-button"
              >
                <span className="button_top">Back</span>
              </button>
              
              <button
                onClick={() => {
                  setCurrentStep(6);
                  // Trigger the AI generation and submission
                  if (quizData) {
                    const completeData = {
                      ...quizData,
                      customDescription: customDescription || undefined
                    };
                    submitQuizMutation.mutate(completeData);
                    generateContentMutation.mutate(completeData);
                  }
                }}
                className="custom-button primary"
              >
                <span className="button_top">Get My Results</span>
              </button>
            </div>
          </div>
        )}

        {currentStep === 6 && (
          <div id="loading-section">
            <LoadingState />
          </div>
        )}

        {currentStep === 7 && (
          <ContactCapture
            onSubmit={handleContactSubmit}
            onBack={() => setCurrentStep(6)}
          />
        )}

        {currentStep === 8 && (
          <PersonalizedResults
            content={getEducationalContent()}
            onRestart={handleRestart}
            userName={contactData?.userName}
          />
        )}
      </main>

      {/* FAQ Section - Only show on home page */}
      {currentStep === 1 && (
      <section id="faq-section" className="py-16 bg-gray-50 rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-title-medium text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => {
              const isOpen = openFaqItems.has(index);
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleFaqItem(index)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <div className={`transition-all duration-200 ease-in-out ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      {Array.isArray(faq.answer) ? (
                        faq.answer.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-700 leading-relaxed mb-3">
                          {faq.answer}
                        </p>
                      )}
                      
                      {faq.list && (
                        <ul className="text-gray-700 leading-relaxed space-y-2 ml-4">
                          {faq.list.map((item, lIndex) => (
                            <li key={lIndex} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      )}


      {/* Doctor Expertise Section */}
      <section className="py-16 bg-white rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-8 shadow-lg">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-title-medium text-gray-900 mb-4">
              Why Trust Dr. Daisy McCarthy?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your personalized report is supervised by a leading expert in regenerative medicine with international training and over 15 years of clinical experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={doctorImage} 
                alt="Dr. Daisy McCarthy - Regenerative Medicine Specialist" 
                className="w-64 h-64 object-cover rounded-full mx-auto border-4 border-medical-blue shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">🎓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Harvard University Training</h3>
                  <p className="text-gray-600 text-sm">Advanced Facial Ultrasound certification from Harvard Medical School</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">🔬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">ISSCA Certified</h3>
                  <p className="text-gray-600 text-sm">International Society for Stem Cell Application member and certified practitioner</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">🏆</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Award-Winning Researcher</h3>
                  <p className="text-gray-600 text-sm">First place in national medical research, published in international journals</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">🌟</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">15+ Years Clinical Experience</h3>
                  <p className="text-gray-600 text-sm">Specialist in Pain Management, Regenerative Medicine, and Aesthetic Medicine</p>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="/about-doctor" 
                  className="custom-button primary inline-block"
                  data-testid="button-learn-more-doctor"
                >
                  <span className="button_top">Learn More About Dr. McCarthy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-50 rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Stem cell and regenerative therapies are complex, and the evidence can vary depending on the condition. This tool is designed to cut through the noise and give you a personalized overview of where treatments may help, where they may not, and what alternatives are worth considering. Think of it as a starting point — a way to get clarity before you invest time, money, or hope.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16 rounded-2xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <img 
                  src={footerLogo} 
                  alt="Stem Cell Report" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm">Leading stem cell therapy clinic providing personalized treatment and educational resources for optimal patient outcomes.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/#faq-section" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/about-doctor" className="hover:text-white transition-colors">About Dr. McCarthy</a></li>
                <li><a href="/stem-cells-colombia" className="hover:text-white transition-colors">Stem Cells Colombia</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/#quiz-section" className="hover:text-white transition-colors">Free Assessment</a></li>
                <li><a href="https://calendly.com/bennvb12/new-meeting" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book Consultation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/medical-disclaimer" className="hover:text-white transition-colors">Medical Disclaimer</a></li>
                <li><a href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Colombia Stem Cell Clinic. All rights reserved. This platform provides educational information only and is not intended as medical advice.</p>
          </div>
        </div>
      </footer>
      
      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}
