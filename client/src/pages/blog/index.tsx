import { Link } from "wouter";
import logo from "@assets/newstemcelllogo_1757155983144.png";
import footerLogo from "@assets/stemlog-white_1756400363335.png";

export default function BlogIndex() {
  const blogPosts = [
    {
      slug: "stem-cell-tourism-colombia-what-you-need-to-know",
      title: "Stem Cell Tourism to Colombia: What You Need to Know",
      excerpt: "Colombia has become a popular destination for regenerative medicine. Learn about the regulations, costs, and key questions to ask before making any decisions.",
      date: "2024-12-20",
      readTime: "7 min read"
    },
    {
      slug: "comparing-stem-cell-costs-colombia-vs-usa",
      title: "Comparing Stem Cell Treatment Costs: Colombia vs USA",
      excerpt: "A comprehensive cost comparison of stem cell treatments between Colombia and the United States, including factors that affect pricing.",
      date: "2024-12-18",
      readTime: "5 min read"
    },
    {
      slug: "safety-checklist-stem-cell-clinics-colombia",
      title: "Safety Checklist for Stem Cell Clinics in Colombia",
      excerpt: "Essential safety factors to evaluate when considering stem cell therapy in Colombia, from licensing to laboratory standards.",
      date: "2024-12-15",
      readTime: "6 min read"
    },
    {
      slug: "bogota-medellin-cali-best-cities-stem-cell-treatment",
      title: "Bogotá vs Medellín vs Cali: Best Cities for Stem Cell Treatment",
      excerpt: "Compare the three major Colombian cities for stem cell therapy, including medical infrastructure and patient experiences.",
      date: "2024-12-12",
      readTime: "8 min read"
    }
  ];

  return (
    <>
      {/* SEO Head Elements */}
      <title>Stem Cell Therapy Blog - Colombia Guide, Costs, Safety</title>
      <meta name="description" content="Expert insights on stem cell therapy, with focus on Colombia treatments, costs, safety, and regulations. Educational content from Dr. McCarthy." />
      <link rel="canonical" href="https://www.freestemcellreport.com/blog" />

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
                <Link href="/stem-cells-colombia" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">Stem Cells Colombia</Link>
                <span className="text-medical-blue font-medium">Blog</span>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-title-medium mb-6">
              Stem Cell Education Blog
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Expert insights and educational content about stem cell therapy, with special focus on Colombia treatments, costs, and safety considerations.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {post.date} • {post.readTime}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-medical-blue transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-medical-blue hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Educational Notice */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-blue-800 mb-4">
              <strong>Educational Content:</strong> All blog posts provide educational information only and do not constitute medical advice.
            </p>
            <Link href="/#quiz-section" className="custom-button primary" data-testid="button-get-report">
              <span className="button_top">Get Your Free Personalised Report</span>
            </Link>
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
                    alt="Free Stem Cell Report" 
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
                  <li><span className="text-white">Education Blog</span></li>
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
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}