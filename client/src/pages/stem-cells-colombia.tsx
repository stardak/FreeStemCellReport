import { useState } from "react";
import { ChevronDown, MapPin, DollarSign, Shield, FileText, Phone, Heart } from "lucide-react";
import { Link } from "wouter";
import doctorImage from "@assets/doctor_1756742974709.png";
import logo from "@assets/newstemcelllogo_1757155983144.png";
import footerLogo from "@assets/stemlog-white_1756400363335.png";

export default function StemCellsColombia() {
  const [openFaqItems, setOpenFaqItems] = useState<Set<number>>(new Set());

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
      question: "Is stem cell therapy legal in Colombia?",
      answer: "Colombia regulates medical practice and advanced therapies. Availability varies by indication and clinic. This site provides education only - talk to a qualified clinician before any decision."
    },
    {
      question: "How much does stem cell treatment cost in Colombia?",
      answer: "Costs can vary widely by condition and protocol. Patients research ranges that are often lower than US prices. Your free report outlines typical ranges and questions to ask a provider."
    },
    {
      question: "How does the free report help with Colombia research?",
      answer: "The report provides personalized information about your condition, treatment evidence, key questions to ask providers, and factors that affect success rates - all valuable when researching options in Colombia or anywhere else."
    },
    {
      question: "What should I ask stem cell clinics?",
      answer: "Key questions include: What specific cells are used? What is the evidence for my condition? What are realistic outcomes? What follow-up is provided? Your free report includes a comprehensive question list."
    },
    {
      question: "Are stem cell treatments in Colombia FDA approved?",
      answer: "Most stem cell treatments are not FDA approved and are considered experimental. Colombian regulations differ from US regulations. Always verify the legal status of any treatment."
    }
  ];

  const conditions = [
    { name: "Joint Pain & Arthritis", link: "/#quiz-section" },
    { name: "Back & Spine Issues", link: "/#quiz-section" },
    { name: "Sports Injuries", link: "/#quiz-section" },
    { name: "Autoimmune Conditions", link: "/#quiz-section" },
    { name: "Neurological Disorders", link: "/#quiz-section" },
    { name: "Anti-Aging & Wellness", link: "/#quiz-section" }
  ];

  return (
    <>
      {/* SEO Head Elements */}
      <title>Stem Cells in Colombia - Free Personalised Report, Costs, Clinics, Safety</title>
      <meta name="description" content="Considering stem cell therapy in Colombia? Start with a free personalised report that explains options, evidence, typical costs, and key questions to ask." />
      <link rel="canonical" href="https://www.freestemcellreport.com/stem-cells-colombia" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Stem Cells in Colombia - Free Personalised Report, Costs, Clinics, Safety" />
      <meta property="og:description" content="Considering stem cell therapy in Colombia? Start with a free personalised report that explains options, evidence, typical costs, and key questions to ask." />
      <meta property="og:url" content="https://www.freestemcellreport.com/stem-cells-colombia" />
      <meta property="og:image" content="https://www.freestemcellreport.com/assets/og/og-colombia.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:title" content="Stem Cells in Colombia - Free Personalised Report, Costs, Clinics, Safety" />
      <meta property="twitter:description" content="Considering stem cell therapy in Colombia? Start with a free personalised report that explains options, evidence, typical costs, and key questions to ask." />
      <meta property="twitter:image" content="https://www.freestemcellreport.com/assets/og/og-colombia.jpg" />
      
      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href="https://www.freestemcellreport.com/stem-cells-colombia" />
      <link rel="alternate" hrefLang="es" href="https://www.freestemcellreport.com/es/celulas-madre-colombia" />
      <link rel="alternate" hrefLang="x-default" href="https://www.freestemcellreport.com/stem-cells-colombia" />
      
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.freestemcellreport.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Stem Cells in Colombia",
              "item": "https://www.freestemcellreport.com/stem-cells-colombia"
            }
          ]
        })}
      </script>

      <div className="min-h-screen" style={{ backgroundColor: '#e4e2dd' }}>
        {/* Header */}
        <header className="shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/">
                <img 
                  src={logo} 
                  alt="Free Stem Cell Report" 
                  className="max-w-[225px] h-auto cursor-pointer"
                />
              </Link>
              
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">Home</Link>
                <Link href="/about-doctor" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">Dr. McCarthy</Link>
                <span className="text-medical-blue font-medium">Stem Cells Colombia</span>
                <Link href="/#faq-section" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">FAQ</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-medical-blue">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900">Stem Cells in Colombia</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-title-medium mb-6">
              Stem Cells in Colombia: Complete Guide
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Colombia is a popular destination for regenerative medicine. Before you spend time or money, get a free personalised report that explains where treatments may help, where evidence is limited, typical costs in Colombia, and the key questions to ask any provider.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#quiz-section" className="custom-button primary" data-testid="button-free-report">
                <span className="button_top">Get My Free Report</span>
              </Link>
              <a 
                href="https://calendly.com/bennvb12/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-button"
                data-testid="button-consultation"
              >
                <span className="button_top">Book a Telehealth Call With Dr. McCarthy</span>
              </a>
            </div>
            <p className="text-sm mt-4 text-blue-200">Educational only, not medical advice.</p>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Why Colombia Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-title-medium text-gray-900 mb-6 flex items-center">
              <MapPin className="w-8 h-8 mr-3 text-medical-blue" />
              Why Patients Look at Colombia for Stem Cell Therapy
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-medical-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Major Cities:</strong> Bogotá, Medellín, and Cali host established medical centers with international accreditation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-medical-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Lower Costs:</strong> Treatment prices often significantly below US and European rates</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-medical-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Medical Tourism:</strong> Growing infrastructure for international patients seeking regenerative treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-medical-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Availability:</strong> Some treatments available in Colombia may have limited access elsewhere</span>
                </li>
              </ul>
            </div>
          </section>


          {/* Regulations Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-title-medium text-gray-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 mr-3 text-blue-500" />
              Regulations and Safety in Colombia
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Framework</h3>
                  <p className="text-gray-700 mb-4">
                    Colombia's health ministry (INVIMA) regulates medical devices and biological products. Regenerative medicine falls under specific guidelines that continue evolving.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What to Verify</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Clinic licensing and physician credentials</li>
                    <li>• Laboratory accreditation for cell processing</li>
                    <li>• Patient safety protocols and infection control</li>
                    <li>• Insurance coverage and emergency procedures</li>
                    <li>• Clear informed consent process</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> Regulatory standards vary between countries. What's available in Colombia may not be approved elsewhere. Research thoroughly and consult local medical professionals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conditions Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-title-medium text-gray-900 mb-6 flex items-center">
              <Heart className="w-8 h-8 mr-3 text-red-500" />
              What Conditions People Research Most
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <p className="text-gray-700 mb-6">
                Patients commonly research stem cell options in Colombia for these conditions. Each links to our assessment to help you understand the current evidence:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {conditions.map((condition, index) => (
                  <Link 
                    key={index}
                    href={condition.link}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-medical-blue transition-colors"
                  >
                    <span className="text-gray-900 font-medium">{condition.name}</span>
                    <span className="ml-auto text-medical-blue">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* How Report Helps Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-title-medium text-gray-900 mb-6 flex items-center">
              <FileText className="w-8 h-8 mr-3 text-purple-500" />
              How the Free Report Helps
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Evidence Summary:</strong> Current research status for your specific condition</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Questions List:</strong> Essential questions to ask any Colombia-based provider</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Cost Guidance:</strong> What to expect and how to compare quotes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Safety Checklist:</strong> Red flags and quality indicators to assess</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Alternative Options:</strong> Other treatments worth considering first</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  Goal: Give you clarity and confidence before making any decisions or financial commitments.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-title-medium text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => {
                const isOpen = openFaqItems.has(index);
                return (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => toggleFaqItem(index)}
                      className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
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
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Next Steps Section */}
          <section className="mb-12">
            <div className="bg-gray-900 rounded-xl p-8 text-white text-center">
              <h2 className="text-3xl font-title-medium mb-6">
                Ready to Learn More?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Get your personalised report or speak directly with Dr. McCarthy about your questions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#quiz-section" className="custom-button primary" data-testid="button-start-assessment">
                  <span className="button_top">Start the Free Assessment</span>
                </Link>
                <a 
                  href="https://calendly.com/bennvb12/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-button"
                  data-testid="button-book-call"
                >
                  <span className="button_top">Book a Telehealth Call With Dr. McCarthy</span>
                </a>
              </div>
              <p className="text-sm mt-4 text-blue-200">
                The call is educational only, not medical advice.
              </p>
            </div>
          </section>

          {/* Doctor Info Card */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center space-x-6">
                <img 
                  src={doctorImage} 
                  alt="Dr. Daisy McCarthy, MD - Regenerative Medicine Specialist supervising stem cell reports for Colombia patients" 
                  className="w-24 h-24 rounded-full border-2 border-medical-blue"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Dr. Daisy McCarthy, MD</h3>
                  <p className="text-gray-600 mb-3">
                    Harvard-trained anesthesiologist and regenerative medicine specialist supervising all educational content.
                  </p>
                  <Link href="/about-doctor" className="text-medical-blue hover:text-blue-700 font-medium">
                    View Full Bio →
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="mb-4">
                  <img 
                    src={footerLogo} 
                    alt="Free Stem Cell Report" 
                    className="h-16 w-auto"
                  />
                </div>
                <p className="text-gray-300 text-sm">
                  Educational information about stem cell therapy options, including guidance for patients considering treatments in Colombia.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/" className="hover:text-white transition-colors">Free Assessment</Link></li>
                  <li><Link href="/about-doctor" className="hover:text-white transition-colors">About Dr. McCarthy</Link></li>
                  <li><span className="text-white">Stem Cells Colombia Guide</span></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Learn More</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/#faq-section" className="hover:text-white transition-colors">FAQ</Link></li>
                  <li><a href="https://calendly.com/bennvb12/new-meeting" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book Consultation</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Disclaimer</h4>
                <p className="text-gray-300 text-sm">
                  This tool provides educational information only and does not constitute medical advice. Always consult with qualified healthcare professionals.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
              <p>&copy; 2024 Free Stem Cell Report. All rights reserved.</p>
              <p className="mt-2">Educational content for patients considering regenerative medicine options, including stem cell therapy in Colombia.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}