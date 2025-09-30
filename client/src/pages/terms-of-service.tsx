import { Link } from "wouter";
import logo from "@assets/newstemcelllogo_1757155983144.png";
import footerLogo from "@assets/stemlog-white_1756400363335.png";

export default function TermsOfService() {
  return (
    <>
      {/* SEO Head Elements */}
      <title>Terms of Service - FreeStemCellReport.com</title>
      <meta name="description" content="Terms of service for FreeStemCellReport.com outlining the conditions for using our educational platform and services." />
      <link rel="canonical" href="https://www.freestemcellreport.com/terms-of-service" />
      
      <div className="min-h-screen" style={{ backgroundColor: '#e4e2dd' }}>
        {/* Header */}
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
              
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">Home</Link>
                <Link href="/about-doctor" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">Dr. McCarthy</Link>
                <Link href="/stem-cells-colombia" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">Stem Cells Colombia</Link>
                <span className="text-medical-blue font-medium">Terms of Service</span>
              </nav>
            </div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-medical-blue">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900">Terms of Service</li>
          </ol>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 className="text-4xl font-title-medium text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using FreeStemCellReport.com (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these Terms of Service, do not use this Service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Description of Service</h2>
              <p className="text-gray-700 mb-4">FreeStemCellReport.com provides:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Educational information about stem cell therapy and regenerative medicine</li>
                <li>Personalized assessment tools to generate educational reports</li>
                <li>Resources and guidance for patients considering treatment options</li>
                <li>Connection to qualified medical professionals for consultations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Educational Purpose Only</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-gray-700 font-medium">
                  <strong>IMPORTANT:</strong> All content on this website is for educational and informational purposes only. This Service does not provide medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Responsibilities</h2>
              <p className="text-gray-700 mb-4">By using our Service, you agree to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Provide accurate and truthful information when completing assessments</li>
                <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
                <li>Not transmit any material that is defamatory, offensive, or otherwise objectionable</li>
                <li>Respect the intellectual property rights of FreeStemCellReport.com and others</li>
                <li>Not attempt to gain unauthorized access to any portion of the Service</li>
                <li>Understand that generated reports are educational tools, not medical advice</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-6">
                Your privacy is important to us. Please review our <Link href="/privacy-policy" className="text-medical-blue hover:text-blue-700 underline">Privacy Policy</Link>, which also governs your use of the Service, to understand our practices regarding the collection and use of your personal information.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">The Service and its original content, features, and functionality are and will remain the exclusive property of FreeStemCellReport.com and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Prohibited Uses</h2>
              <p className="text-gray-700 mb-4">You may not use our Service:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To collect or track the personal information of others</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To interfere with or circumvent the security features of the Service</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Disclaimer of Medical Advice</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <p className="text-gray-700">
                  <strong>NO MEDICAL ADVICE:</strong> The information on this website is not intended or implied to be a substitute for professional medical advice, diagnosis, or treatment. All content is for general informational purposes only. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-6">
                Our Service may contain links to third-party websites or services that are not owned or controlled by FreeStemCellReport.com. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Disclaimers and Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, this Company:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Excludes all representations and warranties relating to this website and its contents</li>
                <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
                <li>Does not warrant that the Service will be uninterrupted or error-free</li>
                <li>Makes no representations about the accuracy or completeness of the content</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Indemnification</h2>
              <p className="text-gray-700 mb-6">
                You agree to defend, indemnify, and hold harmless FreeStemCellReport.com and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Termination</h2>
              <p className="text-gray-700 mb-6">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These Terms shall be interpreted and governed by the laws of the United States, without regard to conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in the United States.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@freestemcellreport.com<br/>
                  <strong>Address:</strong> FreeStemCellReport.com Legal Team<br/>
                  Educational Platform Division<br/>
                  United States
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="mb-4">
                  <img 
                    src={footerLogo} 
                    alt="FreeStemCellReport.com" 
                    className="h-16 w-auto"
                  />
                </div>
                <p className="text-gray-300 text-sm">
                  Educational information about stem cell therapy options and regenerative medicine.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/" className="hover:text-white transition-colors">Free Assessment</Link></li>
                  <li><Link href="/about-doctor" className="hover:text-white transition-colors">About Dr. McCarthy</Link></li>
                  <li><Link href="/stem-cells-colombia" className="hover:text-white transition-colors">Stem Cells Colombia</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Learn More</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/" className="hover:text-white transition-colors">FAQ</Link></li>
                  <li><a href="https://calendly.com/bennvb12/new-meeting" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book Consultation</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><span className="text-white">Terms of Service</span></li>
                  <li><Link href="/medical-disclaimer" className="hover:text-white transition-colors">Medical Disclaimer</Link></li>
                  <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} FreeStemCellReport.com. All rights reserved.</p>
              <p className="mt-2">This platform provides educational information only and is not intended as medical advice.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}