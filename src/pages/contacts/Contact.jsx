import React, { useState } from "react";
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, 
  Check, Send, Sparkles, Award, Calendar,
  Facebook, Instagram, Linkedin, ChevronRight, Home, Building, Wrench, Car, ClipboardCheck, Settings
} from "lucide-react";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    projectDate: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    { value: "residential", label: "Residential Construction", icon: <Home className="w-4 h-4" /> },
    { value: "commercial", label: "Commercial Construction", icon: <Building className="w-4 h-4" /> },
    { value: "renovations", label: "Renovations & Remodeling", icon: <Wrench className="w-4 h-4" /> },
    { value: "infrastructure", label: "Car & Infrastructure", icon: <Car className="w-4 h-4" /> },
    { value: "project-management", label: "Project Management", icon: <ClipboardCheck className="w-4 h-4" /> },
    { value: "custom-solutions", label: "Custom Solutions", icon: <Settings className="w-4 h-4" /> },
    { value: "consultation", label: "Free Consultation", icon: <MessageCircle className="w-4 h-4" /> },
    { value: "quote", label: "Get a Quote", icon: <Send className="w-4 h-4" /> },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      details: "+263 77 392 7966",
      action: "tel:+263773927966",
      description: "Primary contact",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Alternative Number",
      details: "+260 97 223 2866",
      action: "tel:+260972232866",
      description: "Secondary contact",
      color: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      details: "buagopulaproperties@gmail.com",
      action: "mailto:buagopulaproperties@gmail.com",
      description: "Response within 24 hours",
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
      iconColor: "text-gray-600"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Our Location",
      details: "108 Central Avenue",
      action: "https://maps.google.com/?q=108+Central+Avenue+Harare+Zimbabwe",
      description: "Harare, Zimbabwe",
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      iconColor: "text-emerald-600"
    }
  ];

  const socialLinks = [
    {
      platform: "Facebook",
      url: "#",
      icon: <Facebook className="w-4 h-4" />,
      color: "hover:bg-blue-600 hover:text-white",
      textColor: "text-blue-600",
      handle: "@BuagoPulaProperties"
    },
    {
      platform: "Instagram",
      url: "#",
      icon: <Instagram className="w-4 h-4" />,
      color: "hover:bg-orange-600 hover:text-white",
      textColor: "text-orange-600",
      handle: "@BuagoPula_Const"
    },
    {
      platform: "LinkedIn",
      url: "#",
      icon: <Linkedin className="w-4 h-4" />,
      color: "hover:bg-blue-700 hover:text-white",
      textColor: "text-blue-700",
      handle: "BuagoPula Construction"
    }
  ];

  const frequentlyAsked = [
    {
      question: "How long does a typical construction project take?",
      answer: "Timelines vary by project size. Residential: 6-12 months, Commercial: 12-24 months. We provide detailed schedules."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We provide free initial consultations and site assessments for all projects."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Harare and surrounding areas, with project management available nationwide."
    },
    {
      question: "What payment terms do you offer?",
      answer: "Flexible payment plans, progress billing, and various financing options available."
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        projectDate: "",
        message: ""
      });
      setSelectedService("");
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleServiceClick = (serviceValue) => {
    setSelectedService(serviceValue);
    setFormData(prev => ({ ...prev, service: serviceValue }));
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+263773927966';
  };

  const handleWhatsApp = () => {
    const message = `Hello BuagoPula! I'm interested in your construction services.`;
    window.open(`https://wa.me/263773927966?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
  <>
  <Navbar/>
  <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] pt-10">
      {/* Hero Section with Construction Background */}
      <div 
        className="relative overflow-hidden py-16 px-4"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay with Navy Blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2342]/90 via-[#1E3A5F]/85 to-[#0A2342]/90"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-3 shadow-lg">
                <Building className="w-3.5 h-3.5 text-white" />
                <span className="text-white text-xs font-semibold">BUAGO PULA CONSTRUCTION</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                Building Excellence, Creating Legacies
              </h1>
              
              <p className="text-base md:text-lg text-gray-100 mb-6">
                Professional construction services in Zimbabwe - From residential homes to commercial complexes and infrastructure development
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleCallNow}
                  className="px-6 py-3 bg-white text-[#0A2342] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center text-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Free Consultation
                </button>
                
                <button
                  onClick={handleWhatsApp}
                  className="px-6 py-3 bg-[#047857] text-white font-semibold rounded-lg hover:bg-[#065F46] transition-all duration-300 shadow-xl inline-flex items-center text-sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Inquiry
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 md:w-64 md:h-64 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl">
                  <div className="text-center">
                    <Building className="w-16 h-16 text-white mx-auto mb-3 drop-shadow-lg" />
                    <Wrench className="w-12 h-12 text-gray-200 mx-auto drop-shadow-lg" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-3 shadow-xl">
                  <Award className="w-6 h-6 text-[#CC5500]" />
                </div>
                <div className="absolute -bottom-2 -left-2 bg-[#CC5500] rounded-full p-3 shadow-xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-3`}>
                <div className={item.iconColor}>
                  {item.icon}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
              {item.action ? (
                <a
                  href={item.action}
                  className="text-sm font-semibold text-gray-900 hover:text-[#CC5500] transition-colors block mb-1"
                >
                  {item.details}
                </a>
              ) : (
                <p className="text-sm font-semibold text-gray-900 mb-1">{item.details}</p>
              )}
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Form with Background */}
          <div className="lg:col-span-2">
            <div 
              className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-gray-100 rounded-full -mr-32 -mt-32 opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-50 to-gray-100 rounded-full -ml-24 -mb-24 opacity-30"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0A2342] to-[#1E3A5F] rounded-lg flex items-center justify-center shadow-lg">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Request a Project Quote</h2>
                    <p className="text-gray-600 text-sm">We'll respond within 24 hours with a detailed proposal</p>
                  </div>
                </div>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-5 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">Request Sent Successfully!</h3>
                        <p className="text-gray-600 text-xs">Our project manager will contact you shortly.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:border-transparent transition-all text-sm bg-white"
                        placeholder="Full name"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:border-transparent transition-all text-sm bg-white"
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:border-transparent transition-all text-sm bg-white"
                        placeholder="+263 77 392 7966"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Project Start Date
                      </label>
                      <input
                        type="date"
                        name="projectDate"
                        value={formData.projectDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:border-transparent transition-all text-sm bg-white"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      What service are you interested in? *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {services.map((service) => (
                        <button
                          key={service.value}
                          type="button"
                          onClick={() => handleServiceClick(service.value)}
                          className={`px-3 py-2 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1 ${
                            selectedService === service.value
                              ? 'bg-gradient-to-r from-[#0A2342] to-[#1E3A5F] text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                          disabled={isSubmitting}
                        >
                          {service.icon}
                          {service.label}
                        </button>
                      ))}
                    </div>
                    <input
                      type="hidden"
                      name="service"
                      value={selectedService}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:border-transparent transition-all resize-none text-sm bg-white"
                      placeholder="Tell us about your project - size, location, budget, timeline, and any specific requirements..."
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-[#0A2342] to-[#1E3A5F] text-white font-semibold rounded-lg hover:from-[#0A2342] hover:to-[#0A2342]/90 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Project Request
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Social Media with Background */}
            <div 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative overflow-hidden"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%), url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">Follow Our Projects</h3>
              <p className="text-gray-600 text-sm mb-4">
                See our latest construction projects, behind-the-scenes, and company updates
              </p>
              
              <div className="space-y-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:shadow-md transition-all duration-300 ${social.color}`}
                  >
                    <div className={social.textColor}>
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{social.platform}</p>
                      <p className="text-xs text-gray-500">{social.handle}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Help */}
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#0A2342] to-[#1E3A5F] rounded-lg flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Project FAQs</h3>
                  <p className="text-gray-600 text-xs">Common questions answered</p>
                </div>
              </div>

              <div className="space-y-3">
                {frequentlyAsked.map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-blue-100">
                    <p className="font-medium text-gray-900 text-sm mb-1">{item.question}</p>
                    <p className="text-gray-600 text-xs">{item.answer}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={handleCallNow}
                className="w-full mt-4 py-2.5 bg-gradient-to-r from-[#0A2342] to-[#1E3A5F] text-white font-semibold rounded-lg hover:from-[#0A2342] hover:to-[#0A2342]/90 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                <Phone className="inline w-4 h-4 mr-2" />
                Call for Immediate Consultation
              </button>
            </div>

            {/* Office Location with Background */}
            <div 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative overflow-hidden"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Headquarters</h3>
              <div 
                className="aspect-video rounded-lg mb-4 flex items-center justify-center relative"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-[#0A2342]/60 rounded-lg"></div>
                <div className="text-center relative z-10">
                  <Building className="w-8 h-8 text-white mx-auto mb-2 drop-shadow-lg" />
                  <p className="text-white font-semibold text-sm drop-shadow">108 Central Avenue</p>
                  <p className="text-gray-200 text-xs drop-shadow">Harare, Zimbabwe</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=108+Central+Avenue+Harare+Zimbabwe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-white border-2 border-[#CC5500] text-[#CC5500] font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 flex items-center justify-center text-sm"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions to Office
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with Construction Background */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div 
          className="rounded-2xl p-8 text-center text-white shadow-2xl relative overflow-hidden"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2342]/95 via-[#1E3A5F]/95 to-[#0A2342]/95"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 shadow-xl">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Start Your Construction Project
            </h2>
            
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto text-base">
              From concept to completion - Let's build your vision together with professional project management
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={handleCallNow}
                className="bg-white text-[#0A2342] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-all duration-200 inline-flex items-center justify-center shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Site Visit
              </button>
              
              <button 
                onClick={handleWhatsApp}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all duration-200 inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp for Quick Quote
              </button>
            </div>
            
            <div className="mt-5 text-sm text-gray-200">
              <p>Free site assessments • Serving Harare and nationwide projects • Licensed & Insured</p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Info Footer */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm text-gray-600">
          <div className="flex items-center justify-center gap-2">
            <Award className="w-5 h-5 text-[#CC5500]" />
            <span className="font-medium">Licensed & Certified</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Check className="w-5 h-5 text-[#047857]" />
            <span className="font-medium">Quality Guaranteed</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 text-[#0A2342]" />
            <span className="font-medium">On-Time Delivery</span>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default Contact;