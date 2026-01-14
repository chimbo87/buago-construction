import { useState } from 'react';
import { Building, Home, HardHat, Construction, Phone, MessageCircle, Clock, Award, Shield, Wrench, MapPin, Mail } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Color palette
  const colors = {
    navy: '#0A2342',
    navyLight: '#1E3A5F',
    orange: '#CC5500',
    orangeDark: '#B3541E',
    forest: '#047857',
    forestDark: '#065F46',
    gray: '#6B7280',
    grayDark: '#4B5563',
    grayLight: '#F3F4F6',
    offWhite: '#F9FAFB',
  };

  const faqs = [
    {
      question: "How do I get started with a construction project?",
      answer: "Contact us for a free consultation. We'll discuss your requirements, budget, and timeline, then provide a detailed proposal including design concepts, materials, and construction schedule."
    },
    {
      question: "What types of construction projects do you specialize in?",
      answer: "We specialize in Residential Construction (homes, extensions), Commercial Construction (office buildings, retail spaces), Renovations & Remodeling, Road & Infrastructure Development, Project Management, and Custom Construction Solutions."
    },
    {
      question: "How long does a typical construction project take?",
      answer: "Timelines vary based on project scope. A residential home takes 6-12 months, commercial buildings 8-18 months, renovations 2-6 months. We provide detailed timelines in our proposals and maintain regular progress updates."
    },
    {
      question: "Do you handle permits and regulatory approvals?",
      answer: "Yes, we manage all necessary permits, zoning approvals, and regulatory compliance for your project. Our team is experienced with Zimbabwe's building regulations and municipal requirements."
    },
    {
      question: "What is your payment structure?",
      answer: "We typically work with milestone-based payments: 20% deposit, 30% after foundation, 30% after roofing, and 20% upon completion. We offer flexible payment plans and accept bank transfers, cash, and mobile money."
    },
    {
      question: "Do you provide warranties for your work?",
      answer: "Yes, we provide comprehensive warranties: 10-year structural warranty, 5-year workmanship warranty, and 2-year mechanical/electrical warranty. All warranties are documented in our contracts."
    },
    {
      question: "Can you work with my existing architect or designer?",
      answer: "Absolutely! We collaborate seamlessly with architects, designers, and engineers. We can work from existing plans or help you find the right professionals for your project."
    },
    {
      question: "How do you ensure quality during construction?",
      answer: "We implement rigorous quality control: daily site inspections, material testing, certified craftsmen, and project managers overseeing every phase. We use premium materials and follow international construction standards."
    },
    {
      question: "Do you provide emergency repair services?",
      answer: "Yes, we offer emergency construction and repair services for urgent situations. Our rapid response team is available 24/7 for structural emergencies, storm damage, and urgent repairs."
    },
    {
      question: "What areas in Zimbabwe do you serve?",
      answer: "We serve Harare and surrounding areas primarily, with nationwide projects for commercial and infrastructure work. We've completed projects across Zimbabwe including Bulawayo, Mutare, and Gweru."
    }
  ];

  const serviceIcons = [
    { icon: <Home className="w-5 h-5" style={{ color: colors.navy }} />, label: "Residential" },
    { icon: <Building className="w-5 h-5" style={{ color: colors.navy }} />, label: "Commercial" },
    { icon: <Wrench className="w-5 h-5" style={{ color: colors.navy }} />, label: "Renovations" },
    { icon: <Construction className="w-5 h-5" style={{ color: colors.navy }} />, label: "Infrastructure" },
  ];

  const handleContactSupport = () => {
    window.location.href = 'tel:+263773927966';
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:buagopulaproperties@gmail.com';
  };

  return (
    <section 
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ 
        background: `linear-gradient(to bottom, ${colors.offWhite}, ${colors.grayLight})`
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3 shadow-sm"
            style={{ 
              backgroundColor: 'white',
              border: `1px solid ${colors.grayLight}`
            }}
          >
            <Award className="w-4 h-4" style={{ color: colors.orange }} />
            <span 
              className="text-xs font-bold"
              style={{ color: colors.orangeDark }}
            >
              CONSTRUCTION FAQ
            </span>
          </div>
          
          <h2 
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: colors.navy }}
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="text-sm max-w-2xl mx-auto"
            style={{ color: colors.grayDark }}
          >
            Get answers to common questions about construction projects, services, and working with BuagoPula.
          </p>
        </div>

        {/* Service Icons */}
        <div className="flex justify-center gap-3 mb-8">
          {serviceIcons.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.grayLight}, white)`,
                  border: `1px solid ${colors.grayLight}`
                }}
              >
                {service.icon}
              </div>
              <span 
                className="text-xs mt-1 font-medium"
                style={{ color: colors.grayDark }}
              >
                {service.label}
              </span>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              style={{ 
                border: `1px solid ${colors.grayLight}`
              }}
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left font-semibold hover:transition-colors duration-200 group"
                onClick={() => toggleFAQ(index)}
                style={{ 
                  color: colors.navy,
                  backgroundColor: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.grayLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                }}
              >
                <div className="flex items-start">
                  <div 
                    className="flex items-center justify-center w-6 h-6 rounded-full mr-3 flex-shrink-0 transition-colors"
                    style={{ 
                      backgroundColor: colors.grayLight
                    }}
                  >
                    <span 
                      className="text-xs font-bold"
                      style={{ color: colors.orange }}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-sm text-left">{faq.question}</span>
                </div>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 flex-shrink-0 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: colors.orange }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div 
                  className="px-4 pb-4 ml-9"
                  style={{ color: colors.grayDark }}
                >
                  <p className="text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <div 
            className="rounded-2xl p-6 shadow-sm"
            style={{ 
              background: `linear-gradient(135deg, ${colors.grayLight}, white)`,
              border: `1px solid ${colors.grayLight}`
            }}
          >
            <div className="flex justify-center mb-4">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.navy}, ${colors.navyLight})`
                }}
              >
                <MessageCircle className="w-7 h-7" style={{ color: 'white' }} />
              </div>
            </div>
            
            <h3 
              className="text-lg font-bold mb-2"
              style={{ color: colors.navy }}
            >
              Need More Information?
            </h3>
            
            <p 
              className="text-sm mb-4 max-w-md mx-auto"
              style={{ color: colors.grayDark }}
            >
              Our construction experts are here to answer all your questions and help plan your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={handleContactSupport}
                className="inline-flex items-center justify-center font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 text-sm shadow-lg hover:scale-105"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.forest}, ${colors.forestDark})`,
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${colors.forestDark}, #065F46)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${colors.forest}, ${colors.forestDark})`;
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call +263 77 392 7966
              </button>
              
              <button 
                onClick={handleEmailContact}
                className="inline-flex items-center justify-center font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 text-sm shadow-sm hover:shadow-md hover:scale-105"
                style={{ 
                  backgroundColor: 'white',
                  border: `2px solid ${colors.orange}`,
                  color: colors.orangeDark
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.grayLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email for Quote
              </button>
            </div>

            {/* Quick Info */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center justify-center gap-1">
                <Clock className="w-3 h-3" style={{ color: colors.orange }} />
                <span style={{ color: colors.grayDark }}>Mon-Sat: 8AM-6PM</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" style={{ color: colors.orange }} />
                <span style={{ color: colors.grayDark }}>Licensed & Insured</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Award className="w-3 h-3" style={{ color: colors.orange }} />
                <span style={{ color: colors.grayDark }}>Free Consultations</span>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div 
            className="mt-6 text-xs"
            style={{ color: colors.gray }}
          >
            <p className="flex items-center justify-center gap-1">
              <MapPin className="w-3 h-3" style={{ color: colors.orange }} />
              Serving Zimbabwe • Based at 108 Central Avenue, Harare
            </p>
            <p className="mt-1">
              Email: buagopulaproperties@gmail.com • Alt: +260 97 223 2866
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;