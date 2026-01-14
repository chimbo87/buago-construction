import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Building, Home, HardHat, Construction, Phone, Mail, MapPin, Award, Shield, Wrench } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

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

  // Show WhatsApp button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // WhatsApp contact function
  const contactOnWhatsApp = () => {
    const phoneNumber = "263773927966";
    const message = "Hello BuagoPula Construction! I saw your website and I'm interested in your construction services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const contactOnDeveloper = () => {
    const phoneNumber = "27656754243";
    const message = "Hello MARANGASEI-TECH! I saw the website you built for BuagoPula Construction and I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  // Social media links - construction focused
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/buagopulaconstruction",
      icon: <FaFacebookF className="h-5 w-5" />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/buagopulaconstruction",
      icon: <FaInstagram className="h-5 w-5" />
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/buagopula",
      icon: <FaLinkedin className="h-5 w-5" />
    },
    {
      name: "WhatsApp",
      url: "#",
      icon: <FaWhatsapp className="h-5 w-5" />,
      onClick: contactOnWhatsApp
    }
  ];

  return (
    <>
      {/* WhatsApp Floating Button */}
      {isVisible && (
        <button
          onClick={contactOnWhatsApp}
          className="fixed bottom-16 right-6 z-50 text-white py-2 px-5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
          style={{ 
            backgroundColor: colors.forest,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.forestDark;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.forest;
          }}
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-semibold whitespace-nowrap">
            GET QUOTE ON WHATSAPP
          </span>
        </button>
      )}

      <footer 
        className="text-white"
        style={{ 
          background: `linear-gradient(135deg, ${colors.navy}, ${colors.navyLight})`
        }}
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 cursor-pointer select-none mb-4">
                <Building className="w-8 h-8" style={{ color: colors.orange }} />
                <div className="flex flex-col leading-none">
                  <span className="text-white font-bold text-xl tracking-tight">
                    BuagoPula
                  </span>
                  <span className="text-orange-300 font-semibold text-sm tracking-tight">
                    CONSTRUCTION
                  </span>
                </div>
              </div>

              <p className="mb-4 text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                Zimbabwe's trusted construction partner for residential, commercial, and infrastructure projects. Building with quality, precision, and commitment to excellence since 2009.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div 
                  className="flex items-center text-sm hover:transition-colors"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+263773927966">+263 77 392 7966</a>
                </div>
                <div 
                  className="flex items-center text-sm hover:transition-colors"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+260972232866">+260 97 223 2866</a>
                </div>
                <div 
                  className="flex items-center text-sm hover:transition-colors"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:buagopulaproperties@gmail.com">buagopulaproperties@gmail.com</a>
                </div>
                <div className="flex items-start text-sm" style={{ color: '#D1D5DB' }}>
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>108 Central Avenue, Harare, Zimbabwe</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={social.onClick || (() => window.open(social.url, '_blank'))}
                    className="transition-colors duration-300"
                    style={{ color: '#D1D5DB' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 
                className="text-lg font-semibold mb-4 flex items-center gap-2"
                style={{ color: colors.orange }}
              >
                <HardHat className="w-5 h-5" />
                Our Services
              </h3>
              <ul className="space-y-3">
                <li 
                  className="flex items-center text-sm cursor-pointer hover:transition-colors"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  <Home className="w-4 h-4 mr-2" />
                  Residential Construction
                </li>
                <li 
                  className="flex items-center text-sm cursor-pointer hover:transition-colors"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  <Building className="w-4 h-4 mr-2" />
                  Commercial Construction
                </li>
                <li 
                  className="flex items-center text-sm cursor-pointer hover:transition-colors"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  <Wrench className="w-4 h-4 mr-2" />
                  Renovations & Remodeling
                </li>
                <li 
                  className="flex items-center text-sm cursor-pointer hover:transition-colors"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  <Construction className="w-4 h-4 mr-2" />
                  Road & Infrastructure
                </li>
                <li 
                  className="flex items-center text-sm cursor-pointer hover:transition-colors"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  <Award className="w-4 h-4 mr-2" />
                  Project Management
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: colors.orange }}
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => window.location.href = '/about'}
                    className="text-sm hover:transition-colors"
                    style={{ color: '#D1D5DB' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.location.href = '/projects'}
                    className="text-sm hover:transition-colors"
                    style={{ color: '#D1D5DB' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                  >
                    Our Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="text-sm hover:transition-colors"
                    style={{ color: '#D1D5DB' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                  >
                    Get Quote
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.location.href = '/services'}
                    className="text-sm hover:transition-colors"
                    style={{ color: '#D1D5DB' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.location.href = '/testimonials'}
                    className="text-sm hover:transition-colors"
                    style={{ color: '#D1D5DB' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="text-sm hover:transition-colors"
                    style={{ color: '#D1D5DB' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: colors.orange }}
              >
                Stay Updated
              </h3>
              <p 
                className="mb-4 text-sm"
                style={{ color: '#D1D5DB' }}
              >
                Subscribe for construction insights, project updates, industry trends, and special offers.
              </p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-sm"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white'
                  }}
                />
                <button
                  onClick={handleSubscribe}
                  className="px-4 py-2 font-semibold rounded-md transition-colors duration-300 text-sm shadow-lg hover:scale-105"
                  style={{ 
                    backgroundColor: colors.forest,
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.forestDark;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.forest;
                  }}
                >
                  Subscribe Now
                </button>
              </div>
              
              {/* Trust Badge */}
              <div 
                className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Shield className="w-4 h-4" style={{ color: colors.orange }} />
                <span className="text-xs" style={{ color: '#D1D5DB' }}>
                  <span style={{ color: colors.orange, fontWeight: 'bold' }}>250+</span> Successful Projects
                </span>
              </div>
            </div>
          </div>

          {/* Service Areas & Guarantees */}
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span 
                  className="text-sm font-semibold"
                  style={{ color: colors.orange }}
                >
                  Service Areas:
                </span>
                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  <span 
                    className="px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: colors.orange
                    }}
                  >
                    Harare
                  </span>
                  <span 
                    className="px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: colors.orange
                    }}
                  >
                    Bulawayo
                  </span>
                  <span 
                    className="px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: colors.orange
                    }}
                  >
                    Mutare
                  </span>
                  <span 
                    className="px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: colors.orange
                    }}
                  >
                    Gweru
                  </span>
                  <span 
                    className="px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: colors.orange
                    }}
                  >
                    Nationwide
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div 
                  className="text-white px-3 py-1 rounded-md text-xs font-bold"
                  style={{ backgroundColor: colors.forest }}
                >
                  LICENSED & INSURED
                </div>
                <div 
                  className="text-white px-3 py-1 rounded-md text-xs font-bold"
                  style={{ backgroundColor: colors.orange }}
                >
                  FREE CONSULTATION
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="py-4"
          style={{ backgroundColor: colors.navy }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p 
                className="text-sm"
                style={{ color: colors.gray }}
              >
                © {new Date().getFullYear()} BuagoPula Construction. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-2 md:mt-0">
                <button
                  onClick={() => window.location.href = '/privacy'}
                  className="text-sm hover:transition-colors"
                  style={{ color: colors.gray }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.gray}
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => window.location.href = '/terms'}
                  className="text-sm hover:transition-colors"
                  style={{ color: colors.gray }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.gray}
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => window.location.href = '/refund'}
                  className="text-sm hover:transition-colors"
                  style={{ color: colors.gray }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.gray}
                >
                  Refund Policy
                </button>
              </div>
            </div>
            
            {/* Crafted by MARANGASEI-TECH */}
            <div 
              className="mt-3 pt-3 text-center"
              style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}
            >
              <button
                onClick={contactOnDeveloper}
                className="text-xs transition-colors duration-300 hover:underline inline-flex items-center gap-1"
                style={{ color: colors.gray }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.gray}
              >
                <Building className="w-3 h-3" />
                Professional website crafted by MARANGASEI-TECH
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;