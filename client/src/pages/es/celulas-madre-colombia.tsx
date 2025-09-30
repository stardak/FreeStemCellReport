import { useState } from "react";
import { ChevronDown, MapPin, DollarSign, Shield, FileText, Phone, Heart } from "lucide-react";
import { Link } from "wouter";
import doctorImage from "@assets/doctor_1756742974709.png";
import logo from "@assets/newstemcelllogo_1757155983144.png";
import footerLogo from "@assets/stemlog-white_1756400363335.png";

export default function CelulasMadreColombia() {
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
      question: "¿Es legal la terapia con células madre en Colombia?",
      answer: "Colombia regula la práctica médica y las terapias avanzadas. La disponibilidad varía según la indicación y la clínica. Este sitio proporciona solo educación: hable con un médico calificado antes de tomar cualquier decisión."
    },
    {
      question: "¿Cuánto cuesta el tratamiento con células madre en Colombia?",
      answer: "Los costos pueden variar ampliamente según la condición y el protocolo. Los pacientes investigan rangos que a menudo son más bajos que los precios de EE.UU. Su reporte gratuito describe rangos típicos y preguntas para hacer a un proveedor."
    },
    {
      question: "¿Cómo ayuda el reporte gratuito con la investigación en Colombia?",
      answer: "El reporte proporciona información personalizada sobre su condición, evidencia de tratamientos, preguntas clave para hacer a proveedores, y factores que afectan las tasas de éxito - todo valioso al investigar opciones en Colombia o cualquier otro lugar."
    },
    {
      question: "¿Qué debo preguntar a las clínicas de células madre?",
      answer: "Preguntas clave incluyen: ¿Qué células específicas se usan? ¿Cuál es la evidencia para mi condición? ¿Cuáles son los resultados realistas? ¿Qué seguimiento se proporciona? Su reporte gratuito incluye una lista completa de preguntas."
    },
    {
      question: "¿Los tratamientos con células madre en Colombia están aprobados por la FDA?",
      answer: "La mayoría de los tratamientos con células madre no están aprobados por la FDA y se consideran experimentales. Las regulaciones colombianas difieren de las regulaciones estadounidenses. Siempre verifique el estado legal de cualquier tratamiento."
    }
  ];

  const conditions = [
    { name: "Dolor Articular y Artritis", link: "/#quiz-section" },
    { name: "Problemas de Espalda y Columna", link: "/#quiz-section" },
    { name: "Lesiones Deportivas", link: "/#quiz-section" },
    { name: "Condiciones Autoinmunes", link: "/#quiz-section" },
    { name: "Trastornos Neurológicos", link: "/#quiz-section" },
    { name: "Anti-envejecimiento y Bienestar", link: "/#quiz-section" }
  ];

  return (
    <>
      {/* SEO Head Elements */}
      <title>Células madre en Colombia - Guía y reporte gratuito</title>
      <meta name="description" content="Reporte personalizado y gratuito sobre terapias regenerativas en Colombia, opciones, costos y preguntas clave." />
      <link rel="canonical" href="https://www.freestemcellreport.com/es/celulas-madre-colombia" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Células madre en Colombia - Guía y reporte gratuito" />
      <meta property="og:description" content="Reporte personalizado y gratuito sobre terapias regenerativas en Colombia, opciones, costos y preguntas clave." />
      <meta property="og:url" content="https://www.freestemcellreport.com/es/celulas-madre-colombia" />
      <meta property="og:image" content="https://www.freestemcellreport.com/assets/og/og-colombia-es.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:title" content="Células madre en Colombia - Guía y reporte gratuito" />
      <meta property="twitter:description" content="Reporte personalizado y gratuito sobre terapias regenerativas en Colombia, opciones, costos y preguntas clave." />
      <meta property="twitter:image" content="https://www.freestemcellreport.com/assets/og/og-colombia-es.jpg" />
      
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
              "name": "Inicio",
              "item": "https://www.freestemcellreport.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Células madre en Colombia",
              "item": "https://www.freestemcellreport.com/es/celulas-madre-colombia"
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
                  alt="Reporte Gratuito de Células Madre" 
                  className="max-w-[225px] h-auto cursor-pointer"
                />
              </Link>
              
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">Inicio</Link>
                <Link href="/about-doctor" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">Dra. McCarthy</Link>
                <span className="text-medical-blue font-medium">Células Madre Colombia</span>
                <Link href="/#faq-section" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">FAQ</Link>
                <Link href="/stem-cells-colombia" className="text-gray-600 hover:text-gray-800 text-sm font-medium">English</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-medical-blue">Inicio</Link></li>
            <li>/</li>
            <li className="text-gray-900">Células madre en Colombia</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-title-medium mb-6">
              Células madre en Colombia: Guía completa
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Colombia es un destino popular para medicina regenerativa. Antes de invertir tiempo o dinero, obtén un reporte personalizado gratuito que explica dónde los tratamientos pueden ayudar, dónde la evidencia es limitada, costos típicos en Colombia, y las preguntas clave para cualquier proveedor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#quiz-section" className="custom-button primary" data-testid="button-free-report-es">
                <span className="button_top">Obtener Mi Reporte Gratuito</span>
              </Link>
              <a 
                href="https://calendly.com/bennvb12/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-button"
                data-testid="button-consultation-es"
              >
                <span className="button_top">Consulta Educativa con Dra. McCarthy</span>
              </a>
            </div>
            <p className="text-sm mt-4 text-blue-200">Solo educativo, no es consejo médico.</p>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Why Colombia Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-title-medium text-gray-900 mb-6 flex items-center">
              <MapPin className="w-8 h-8 mr-3 text-medical-blue" />
              Por qué los pacientes consideran Colombia para terapia con células madre
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-medical-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Ciudades principales:</strong> Bogotá, Medellín y Cali albergan centros médicos establecidos con acreditación internacional</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-medical-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Costos menores:</strong> Los precios de tratamiento a menudo significativamente por debajo de las tarifas de EE.UU. y Europa</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-medical-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Turismo médico:</strong> Infraestructura creciente para pacientes internacionales que buscan tratamientos regenerativos</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-medical-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Disponibilidad:</strong> Algunos tratamientos disponibles en Colombia pueden tener acceso limitado en otros lugares</span>
                </li>
              </ul>
            </div>
          </section>


          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-title-medium text-gray-900 mb-6">
              Preguntas frecuentes
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
                ¿Listo para aprender más?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Obten tu reporte personalizado o habla directamente con la Dra. McCarthy sobre tus preguntas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#quiz-section" className="custom-button primary" data-testid="button-start-assessment-es">
                  <span className="button_top">Comenzar Evaluación Gratuita</span>
                </Link>
                <a 
                  href="https://calendly.com/bennvb12/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-button"
                  data-testid="button-book-call-es"
                >
                  <span className="button_top">Reservar Consulta Virtual con Dra. McCarthy</span>
                </a>
              </div>
              <p className="text-sm mt-4 text-blue-200">
                La consulta es solo educativa, no es consejo médico.
              </p>
            </div>
          </section>

          {/* Doctor Info Card */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center space-x-6">
                <img 
                  src={doctorImage} 
                  alt="Dra. Daisy McCarthy, MD - Especialista en medicina regenerativa supervisando reportes de células madre para pacientes de Colombia" 
                  className="w-24 h-24 rounded-full border-2 border-medical-blue"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Dra. Daisy McCarthy, MD</h3>
                  <p className="text-gray-600 mb-3">
                    Anestesióloga entrenada en Harvard y especialista en medicina regenerativa supervisando todo el contenido educativo.
                  </p>
                  <Link href="/about-doctor" className="text-medical-blue hover:text-blue-700 font-medium">
                    Ver biografía completa →
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
                    alt="Reporte Gratuito de Células Madre" 
                    className="h-16 w-auto"
                  />
                </div>
                <p className="text-gray-300 text-sm">
                  Información educativa sobre opciones de terapia con células madre, incluyendo orientación para pacientes considerando tratamientos en Colombia.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/" className="hover:text-white transition-colors">Evaluación gratuita</Link></li>
                  <li><Link href="/about-doctor" className="hover:text-white transition-colors">Sobre Dra. McCarthy</Link></li>
                  <li><span className="text-white">Guía células madre Colombia</span></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Aprende más</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/#faq-section" className="hover:text-white transition-colors">FAQ</Link></li>
                  <li><a href="https://calendly.com/bennvb12/new-meeting" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Reservar consulta</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Descargo de responsabilidad</h4>
                <p className="text-gray-300 text-sm">
                  Esta herramienta proporciona información educativa únicamente y no constituye consejo médico. Siempre consulte con profesionales de la salud calificados.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
              <p>&copy; 2024 Reporte Gratuito de Células Madre. Todos los derechos reservados.</p>
              <p className="mt-2">Contenido educativo para pacientes considerando opciones de medicina regenerativa, incluyendo terapia con células madre en Colombia.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}