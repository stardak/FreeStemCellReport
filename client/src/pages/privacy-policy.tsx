import { Link } from "wouter";
import logo from "@assets/newstemcelllogo_1757155983144.png";
import footerLogo from "@assets/stemlog-white_1756400363335.png";

export default function PrivacyPolicy() {
  return (
    <>
      {/* SEO Head Elements */}
      <title>Privacy Policy - FreeStemCellReport.com</title>
      <meta name="description" content="Privacy policy for FreeStemCellReport.com explaining how we collect, use, and protect your personal information." />
      <link rel="canonical" href="https://www.freestemcellreport.com/privacy-policy" />
      
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
                <span className="text-medical-blue font-medium">Privacy Policy</span>
              </nav>
            </div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-medical-blue">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900">Privacy Policy</li>
          </ol>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 className="text-4xl font-title-medium text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-6">
                FreeStemCellReport.com ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address when you request reports or consultations</li>
                <li><strong>Health Information:</strong> Condition details, symptoms, and treatment history you voluntarily share in assessments</li>
                <li><strong>Communication Data:</strong> Messages you send through our contact forms or voice chat</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, and navigation patterns</li>
                <li><strong>Device Information:</strong> Browser type, operating system, device characteristics</li>
                <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                <li><strong>Cookies:</strong> Small data files stored on your device (see our Cookie Policy)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Generate personalized educational reports about stem cell therapy</li>
                <li>Send requested information via email using Mailgun services</li>
                <li>Improve our website content and user experience</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns to enhance our educational resources</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information. We may share information in these limited circumstances:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party services like Mailgun for email delivery and Google Sheets for data storage</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                <li><strong>Safety and Security:</strong> To protect rights, property, or safety of our users or others</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Storage and Security</h2>
              <p className="text-gray-700 mb-4">We implement appropriate security measures to protect your information:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Secure transmission protocols (SSL/TLS) for data in transit</li>
                <li>Access controls and authentication for data at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 mb-6">
                We use cookies and similar technologies to enhance your experience. For detailed information about our cookie practices, please see our <Link href="/cookie-policy" className="text-medical-blue hover:text-blue-700 underline">Cookie Policy</Link>.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">Our website integrates with third-party services:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Mailgun:</strong> For email delivery (subject to Mailgun's privacy policy)</li>
                <li><strong>Google Services:</strong> For data storage and analytics</li>
                <li><strong>Calendly:</strong> For consultation scheduling</li>
                <li><strong>OpenAI:</strong> For generating educational content</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">International Data Transfers</h2>
              <p className="text-gray-700 mb-6">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Retention</h2>
              <p className="text-gray-700 mb-6">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@freestemcellreport.com<br/>
                  <strong>Address:</strong> FreeStemCellReport.com Privacy Team<br/>
                  Educational Content Division<br/>
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
                  <li><span className="text-white">Privacy Policy</span></li>
                  <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
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