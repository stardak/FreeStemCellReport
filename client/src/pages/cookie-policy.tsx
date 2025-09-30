import { Link } from "wouter";
import logo from "@assets/newstemcelllogo_1757155983144.png";
import footerLogo from "@assets/stemlog-white_1756400363335.png";

export default function CookiePolicy() {
  return (
    <>
      {/* SEO Head Elements */}
      <title>Cookie Policy - FreeStemCellReport.com</title>
      <meta name="description" content="Cookie policy for FreeStemCellReport.com explaining how we use cookies and similar technologies to enhance your experience." />
      <link rel="canonical" href="https://www.freestemcellreport.com/cookie-policy" />
      
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
                <span className="text-medical-blue font-medium">Cookie Policy</span>
              </nav>
            </div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-medical-blue">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900">Cookie Policy</li>
          </ol>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 className="text-4xl font-title-medium text-gray-900 mb-6">Cookie Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 mb-6">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                FreeStemCellReport.com uses cookies and similar technologies to enhance your experience on our website, understand how you use our services, and improve our content. We use cookies for the following purposes:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 mb-4">These cookies are necessary for the website to function properly. They include:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Session Management:</strong> To maintain your session as you navigate through our assessment</li>
                <li><strong>Security:</strong> To protect against fraudulent activity and ensure secure connections</li>
                <li><strong>Load Balancing:</strong> To distribute user requests across our servers for optimal performance</li>
                <li><strong>Form Data:</strong> To remember information you've entered in assessment forms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Analytics Cookies</h3>
              <p className="text-gray-700 mb-4">These cookies help us understand how visitors interact with our website:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Usage Analytics:</strong> To count visits and traffic sources to improve website performance</li>
                <li><strong>Page Views:</strong> To understand which pages are most and least popular</li>
                <li><strong>User Journey:</strong> To see how visitors move around the site</li>
                <li><strong>Error Tracking:</strong> To identify and fix technical issues</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Functional Cookies</h3>
              <p className="text-gray-700 mb-4">These cookies enable enhanced functionality and personalization:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Language Preferences:</strong> To remember your language selection (English/Spanish)</li>
                <li><strong>Assessment Progress:</strong> To save your progress through our multi-step assessment</li>
                <li><strong>User Preferences:</strong> To remember settings and choices you've made</li>
                <li><strong>Chat History:</strong> To maintain context in our AI voice chat feature</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Third-Party Cookies</h3>
              <p className="text-gray-700 mb-4">We use services from trusted third parties that may set their own cookies:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Calendly:</strong> For scheduling consultations with Dr. McCarthy</li>
                <li><strong>Wistia:</strong> For video content and analytics</li>
                <li><strong>Google Services:</strong> For analytics and form submissions</li>
                <li><strong>Mailgun:</strong> For email delivery tracking</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types of Information Collected</h2>
              <p className="text-gray-700 mb-4">Through cookies and similar technologies, we may collect:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Information about your device (browser type, operating system)</li>
                <li>Your IP address and general geographic location</li>
                <li>Pages you visit and time spent on each page</li>
                <li>Links you click and features you use</li>
                <li>Referring website information</li>
                <li>Search terms that led you to our website</li>
                <li>Assessment progress and preferences</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookie Duration</h2>
              <p className="text-gray-700 mb-4">Cookies may be either:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
              </ul>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Cookie Retention Periods</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Essential cookies: Session or up to 1 year</li>
                  <li>Analytics cookies: Up to 2 years</li>
                  <li>Functional cookies: Up to 1 year</li>
                  <li>Third-party cookies: Varies by provider</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Managing Your Cookie Preferences</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Browser-Specific Instructions</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Impact of Disabling Cookies</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-800">
                  <strong>Please note:</strong> Disabling certain cookies may affect the functionality of our website. Essential cookies are required for the site to work properly, and disabling them may prevent you from using key features like our assessment tool.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Cookie Policies</h2>
              <p className="text-gray-700 mb-4">
                For more information about how third-party services use cookies, please review their privacy policies:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-medical-blue hover:text-blue-700 underline">Calendly Privacy Policy</a></li>
                <li><a href="https://wistia.com/privacy" target="_blank" rel="noopener noreferrer" className="text-medical-blue hover:text-blue-700 underline">Wistia Privacy Policy</a></li>
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-medical-blue hover:text-blue-700 underline">Google Privacy Policy</a></li>
                <li><a href="https://www.mailgun.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-medical-blue hover:text-blue-700 underline">Mailgun Privacy Policy</a></li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Do Not Track</h2>
              <p className="text-gray-700 mb-6">
                Some browsers offer a "Do Not Track" option that sends a signal to websites you visit indicating that you do not want your online activity to be tracked. Currently, there is no standard way for websites to respond to these signals, and we do not respond to Do Not Track signals at this time.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mobile Devices</h2>
              <p className="text-gray-700 mb-6">
                When you use our website on mobile devices, we may collect information through mobile device identifiers and similar technologies. You can manage these through your device settings or by adjusting your browser preferences.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Updates to This Cookie Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will update the "Last updated" date at the top of this policy when we make changes.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> cookies@freestemcellreport.com<br/>
                  <strong>Address:</strong> FreeStemCellReport.com Cookie Policy Team<br/>
                  Technical Operations Division<br/>
                  United States
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Additional Resources</h2>
              <p className="text-gray-700 mb-4">
                For more information about cookies and online privacy, you may visit:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-medical-blue hover:text-blue-700 underline">All About Cookies</a></li>
                <li><a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank" rel="noopener noreferrer" className="text-medical-blue hover:text-blue-700 underline">ICO Cookies Guidance</a></li>
                <li><a href="https://www.cookiepolicy.org/" target="_blank" rel="noopener noreferrer" className="text-medical-blue hover:text-blue-700 underline">Cookie Policy Generator</a></li>
              </ul>
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
                  <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link href="/medical-disclaimer" className="hover:text-white transition-colors">Medical Disclaimer</Link></li>
                  <li><span className="text-white">Cookie Policy</span></li>
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