import { ArrowLeft, Award, BookOpen, Users, Microscope, Stethoscope, GraduationCap, Trophy, UserCheck } from "lucide-react";
import { Link } from "wouter";
import doctorImage from "@assets/doctor_1756742974709.png";
import footerLogo from "@assets/stemlog-white_1756400363335.png";
import logo from "@assets/newstemcelllogo_1757155983144.png";

export default function AboutDoctor() {
  return (
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
            
            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">
                Home
              </Link>
              <span className="text-medical-blue font-medium">About Dr. McCarthy</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-white hover:text-blue-200 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-title-medium mb-6">
                Meet Dr. Daisy McCarthy
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                Anesthesiologist with over 15 years of experience, specialist in Pain Management and Palliative Care, with advanced training in Regenerative Medicine and Aesthetic Medicine.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span className="text-sm">Harvard University</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="text-sm">ISSCA Certified</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Microscope className="w-5 h-5 mr-2" />
                  <span className="text-sm">15+ Years Experience</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={doctorImage} 
                  alt="Dr. Daisy McCarthy - Regenerative Medicine Specialist" 
                  className="w-80 h-80 object-cover rounded-full border-4 border-white shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-title-medium text-gray-900 mb-6">
              Professional Profile
            </h2>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dr. Daisy McCarthy is an accomplished anesthesiologist with over 15 years of experience, specializing in Pain Management and Palliative Care. She has completed advanced training in Aesthetic Medicine, Regenerative Medicine, Orthomolecular and Bioregulatory Medicine.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. McCarthy has completed international training in neuromodulation, interventional pain management, regenerative therapies (PRP, stem cells, exosomes, platelet lysate), as well as high-frequency musculoskeletal and facial ultrasound and bioidentical hormone therapy.
            </p>
          </div>

          {/* Current Focus Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pain Management</h3>
              <p className="text-gray-600">Comprehensive management of chronic musculoskeletal and oncologic pain using minimally invasive, ultrasound-guided procedures.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regenerative Medicine</h3>
              <p className="text-gray-600">Advanced regenerative therapies and longevity protocols using cutting-edge stem cell and exosome treatments.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Aesthetic Medicine</h3>
              <p className="text-gray-600">Advanced aesthetic medicine and non-invasive rejuvenation procedures with precision ultrasound guidance.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Research & Teaching</h3>
              <p className="text-gray-600">Active in teaching, research, and the development of innovative treatment protocols for regenerative medicine.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training & Education</h3>
              <p className="text-gray-600">Training of physicians in applied ultrasound and regenerative medicine techniques worldwide.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clinical Excellence</h3>
              <p className="text-gray-600">First place in national specialty exams and multiple academic achievements in medical research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Background */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-title-medium text-gray-900 mb-6">
              Academic Background & Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dr. McCarthy's extensive education spans multiple countries and prestigious institutions, reflecting her commitment to staying at the forefront of medical innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Advanced Training */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Training & Specializations</h3>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Facial Ultrasound</h4>
                    <p className="text-gray-600">Harvard University, Boston, USA</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Regenerative Medicine and Stem Cells</h4>
                    <p className="text-gray-600">ISSCA, Cancun, Mexico</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fellowship in Pain Management and Palliative Care</h4>
                    <p className="text-gray-600">Instituto Nacional de Ciencias Médicas, UNAM, Mexico City</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Interventional Pain Management</h4>
                    <p className="text-gray-600">Dallas, USA</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Neuromodulation Techniques</h4>
                    <p className="text-gray-600">Valencia, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Additional Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Medical Education & Specializations</h3>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Doctor of Medicine and Surgery</h4>
                    <p className="text-gray-600">Universidad Pontificia Bolivariana, Colombia</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Specialist in Anesthesiology</h4>
                    <p className="text-gray-600">Universidad Pontificia Bolivariana, Colombia</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Specialization in Aesthetic Medicine</h4>
                    <p className="text-gray-600">ACICME, Medellín, Colombia</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Bioregulatory Medicine</h4>
                    <p className="text-gray-600">Universidad Pontificia Bolivariana, Colombia</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Orthomolecular Medicine</h4>
                    <p className="text-gray-600">Juan N. Corpas University, Bogotá, Colombia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-title-medium text-gray-900 mb-6">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Over 15 years of clinical excellence across multiple prestigious medical institutions and specialized centers.
            </p>
          </div>

          <div className="space-y-8">
            {/* Current Position */}
            <div className="bg-gray-900 rounded-xl p-8 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">YOU Medicine</h3>
                  <p className="text-blue-100">Specialist in Pain and Regenerative Medicine</p>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2 text-sm font-medium">
                  2024 – Present
                </div>
              </div>
              <ul className="space-y-2 text-blue-100">
                <li>• Diagnosis and treatment of chronic musculoskeletal and oncologic pain</li>
                <li>• Ultrasound-guided procedures for spine, joints, and facial aesthetics</li>
                <li>• Regenerative biological therapies and advanced treatment protocols</li>
                <li>• Advanced aesthetic medicine and longevity protocols</li>
                <li>• Training of physicians in applied ultrasound techniques</li>
              </ul>
            </div>

            {/* Previous Positions */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Oncology Center of Antioquia</h3>
                    <p className="text-gray-600">Head of Pain Medicine and Palliative Care</p>
                  </div>
                  <div className="bg-gray-200 rounded-lg px-3 py-1 text-sm font-medium text-gray-700">
                    2015 – 2024
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Led department operations and patient care protocols</li>
                  <li>• Specialized in oncologic pain management</li>
                  <li>• Advanced fluoroscopy and ultrasound-guided procedures</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Instituto Colombiano del Dolor</h3>
                    <p className="text-gray-600">Anesthesiologist – Pain Medicine</p>
                  </div>
                  <div className="bg-gray-200 rounded-lg px-3 py-1 text-sm font-medium text-gray-700">
                    2015 – 2025
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Chronic non-oncologic pain management</li>
                  <li>• Radiofrequency and diagnostic block procedures</li>
                  <li>• Advanced interventional pain techniques</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Clarius Ultrasound</h3>
                    <p className="text-gray-600">Lecturer and Trainer</p>
                  </div>
                  <div className="bg-gray-200 rounded-lg px-3 py-1 text-sm font-medium text-gray-700">
                    2024 – 2025
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• International training in ultrasound techniques</li>
                  <li>• High-frequency musculoskeletal imaging</li>
                  <li>• Facial ultrasound applications</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Multiple Clinical Positions</h3>
                    <p className="text-gray-600">Anesthesiologist</p>
                  </div>
                  <div className="bg-gray-200 rounded-lg px-3 py-1 text-sm font-medium text-gray-700">
                    2009 – 2014
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Clínica Noel & Clínica El Rosario, Medellín</li>
                  <li>• Clinical Research Coordinator at CORBIC</li>
                  <li>• Emergency Physician training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Research & Publications */}
            <div>
              <h2 className="text-3xl font-title-medium text-gray-900 mb-8">Research & Publications</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">International Journal Publications</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Ultrasound Evaluation of Subepidermal Low Echogenic Band (SLEB) in Facial Procedures - International Journal of Biomedical Research</li>
                    <li>• Hereditary Cancer Syndrome - Revista Algos, 2015</li>
                    <li>• COX-2 Inhibitors in Sports Medicine - Revista Medlife, 2014</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">Award-Winning Research</h3>
                  <div className="flex items-center space-x-3 mb-3">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium text-gray-900">First Prize Winner 2010</span>
                  </div>
                  <p className="text-gray-600">Spontaneous Bacterial Peritonitis in Cirrhotic Patients - REDCOLSI medical research seedbeds competition</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">International Clinical Trials</h3>
                  <p className="text-gray-600 mb-2">Active participation in multicenter clinical trials:</p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• TRA 2P Study</li>
                    <li>• MK-0736 Clinical Trial</li>
                    <li>• IMPROVE-IT Trial</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Academic Achievements & Memberships */}
            <div>
              <h2 className="text-3xl font-title-medium text-gray-900 mb-8">Achievements & Memberships</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Academic Excellence</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <span className="text-gray-600">First place - National Anesthesiology Specialty Exam (2010)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-600">Honorable Mention - Aesthetic Medicine Specialization (2025)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">First place - Medical Research Seedbeds (2010)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Professional Memberships</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-medical-blue rounded-full"></div>
                      <span className="text-gray-600">International Society for Stem Cell Application (ISSCA)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Latin American Pain Society</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">Hispanic American Medical Association of Houston</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-600">Colombian Association of Aesthetic Medicine</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Certifications</h3>
                  <div className="flex items-center space-x-3">
                    <UserCheck className="w-5 h-5 text-red-500" />
                    <span className="text-gray-600">Certified Instructor - BLS and ACLS (Salamandra Foundation)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-title-medium text-white mb-6 drop-shadow-lg">
            Experience the Difference of Expert Care
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
            With Dr. McCarthy's extensive training, international experience, and commitment to cutting-edge regenerative medicine, you can trust that you're in the hands of a true expert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/bennvb12/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-button primary"
              data-testid="button-book-consultation"
            >
              <span className="button_top">Schedule Your Consultation</span>
            </a>
            <Link href="/" className="custom-button">
              <span className="button_top">Get Your Free Assessment</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data - Person Schema for Dr. McCarthy */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dr. Daisy McCarthy, MD",
          "jobTitle": "Anesthesiologist and Regenerative Medicine Specialist",
          "affiliation": {
            "@type": "Organization",
            "name": "Free Stem Cell Report"
          },
          "alumniOf": [{"@type": "CollegeOrUniversity", "name": "Harvard University"}],
          "url": "https://www.freestemcellreport.com/about-doctor",
          "image": "https://www.freestemcellreport.com/assets/dr-mccarthy.jpg",
          "knowsAbout": ["regenerative medicine", "pain management", "cellular therapy", "stem cells"]
        })}
      </script>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16 rounded-2xl mx-4 sm:mx-6 lg:mx-8">
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
              <p className="text-gray-300">
                Get your free personalized stem cell report and discover if regenerative medicine is right for you.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">Free Assessment</Link></li>
                <li><span className="text-white">About Dr. McCarthy</span></li>
                <li><a href="https://calendly.com/bennvb12/new-meeting" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book Consultation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Learn More</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">Stem Cell Education</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Treatment Options</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-300 mb-2">
                Ready to explore your options?
              </p>
              <a 
                href="https://calendly.com/bennvb12/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medical-blue hover:text-blue-400 transition-colors font-medium"
              >
                Schedule a consultation →
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 FreeStemCellReport.com. All rights reserved.</p>
            <p className="mt-2 text-sm">This tool is for educational purposes only and does not constitute medical advice. Always consult with a qualified healthcare professional before making any medical decisions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}