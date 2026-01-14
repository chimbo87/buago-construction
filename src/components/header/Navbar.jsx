import React, { useState } from "react";
import { Menu, X, ChevronDown, Phone, MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../../assets/icons/buaglo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Main navigation links for BuagoPula Construction
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  // Services dropdown links for construction services
  const servicesDropdownLinks = [
    { name: "Residential Construction", path: "/services/residential" },
    { name: "Commercial Construction", path: "/services/commercial" },
    { name: "Renovations & Remodeling", path: "/services/renovations" },
    { name: "Road & Infrastructure", path: "/services/infrastructure" },
    { name: "Project Management", path: "/services/management" },
    { name: "Custom Solutions", path: "/services/custom" },
  ];

  // Social media links for construction business
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-4 h-4" />,
      url: "https://facebook.com/buagopulaconstruction",
      color: "hover:bg-blue-50"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-4 h-4" />,
      url: "https://instagram.com/buagopulaconstruction",
      color: "hover:bg-orange-50"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      url: "https://linkedin.com/company/buagopula",
      color: "hover:bg-blue-50"
    }
  ];

  // Business Logo Component for BuagoPula
  const BusinessLogo = () => (
    <div className="flex items-center cursor-pointer select-none">
      <img 
        src={logo} 
        alt='BuagoPula Construction Logo' 
        className="h-14 w-auto object-cover"
      />
      <div className="flex flex-row ml-2">
        <span className="text-blue-500 font-bold text-lg leading-tight">Buago</span>
        <span className="text-orange font-bold text-lg leading-tight">Pula</span>
        {/* <span className="text-gray-dark text-xs font-medium">CONSTRUCTION</span> */}
      </div>
    </div>
  );

  // Contact info component for desktop
  const ContactInfo = () => (
    <div className="hidden lg:flex flex-col space-y-1 mr-4">
      {/* <div className="flex items-center space-x-2">
        <Phone size={14} className="text-orange" />
        <div className="flex flex-col">
          <span className="text-xs font-medium text-navy">+263 77 392 7966</span>
          <span className="text-xs text-gray-dark">+260 97 223 2866</span>
        </div>
      </div> */}
      <div className="flex items-start space-x-2">
        <MapPin size={14} className="text-orange mt-0.5 flex-shrink-0" />
        <span className="text-xs text-gray-dark">108 Central Avenue, Harare, Zimbabwe</span>
      </div>
    </div>
  );

  const handleSocialClick = (url, e) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className="bg-navy shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-navy-light">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Top Contact Bar */}
        <div className="hidden md:flex justify-between items-center py-2 border-b border-gray-light/10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={12} className="text-orange" />
              <span className="text-xs text-white">+263 77 392 7966</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={12} className="text-orange" />
              <span className="text-xs text-white">buagopulaproperties@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs text-gray-light">Follow Us:</span>
            <div className="flex items-center space-x-1">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={(e) => handleSocialClick(social.url, e)}
                  className="p-1 text-gray-light hover:text-orange transition-colors duration-200"
                  aria-label={`Visit our ${social.name}`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer flex items-center"
            onClick={() => navigate("/")}
          >
            <div className="transition-all duration-300 hover:scale-105 flex items-center">
              <BusinessLogo />
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-baseline space-x-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || 
                  (link.hasDropdown && location.pathname.startsWith('/services/'));
                
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => navigate(link.path)}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                          isActive
                            ? "text-orange bg-navy-light"
                            : "text-white hover:text-orange hover:bg-navy-light"
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Services Dropdown Menu */}
                      {isServicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-light z-50">
                          {servicesDropdownLinks.map((dropdownLink) => (
                            <button
                              key={dropdownLink.name}
                              onClick={() => {
                                navigate(dropdownLink.path);
                                setIsServicesDropdownOpen(false);
                              }}
                              className="block w-full text-left px-4 py-2.5 text-sm text-gray-dark hover:text-orange hover:bg-orange-50 transition-colors duration-200 border-l-4 border-transparent hover:border-orange"
                            >
                              {dropdownLink.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <button
                    key={link.name}
                    onClick={() => navigate(link.path)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-orange bg-navy-light"
                        : "text-white hover:text-orange hover:bg-navy-light"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop Right - Contact Info & Get Quote */}
          <div className="hidden md:flex items-center space-x-3">
            <ContactInfo />
            
            <button
              onClick={() => navigate("/contact")}
              className="bg-forest text-white px-5 py-2.5 rounded-lg font-bold hover:bg-forest-dark transition-all duration-200 shadow hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
            >
              GET QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-1">
            <button
              onClick={() => navigate("/contact")}
              className="bg-orange text-white px-3 py-1.5 rounded-md font-bold text-xs mr-2"
            >
              QUOTE
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-orange hover:bg-navy-light rounded-md transition-colors duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-1 pb-2 space-y-0.5 bg-white border-t border-gray-light">
          {/* Contact Info in Mobile Menu */}
          <div className="px-3 py-3 bg-gray-light rounded-lg mx-2 my-2">
            <div className="flex items-center space-x-2 text-navy mb-2">
              <Phone size={16} className="text-orange" />
              <div className="flex flex-col">
                <span className="text-sm font-bold">+263 77 392 7966</span>
                <span className="text-xs text-gray-dark">+260 97 223 2866</span>
              </div>
            </div>
            <div className="flex items-start space-x-2 text-gray-dark mb-2">
              <MapPin size={16} className="text-orange mt-0.5 flex-shrink-0" />
              <span className="text-sm">108 Central Avenue, Harare</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-dark">
              <Mail size={16} className="text-orange" />
              <span className="text-sm">buagopulaproperties@gmail.com</span>
            </div>
          </div>

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            
            if (link.hasDropdown) {
              return (
                <div key={link.name}>
                  <button
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-orange bg-orange-50 font-bold"
                        : "text-gray-dark hover:text-orange hover:bg-orange-50"
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesDropdownOpen && (
                    <div className="ml-4 mt-1 space-y-0.5 bg-gray-light rounded-lg p-2">
                      {servicesDropdownLinks.map((dropdownLink) => (
                        <button
                          key={dropdownLink.name}
                          onClick={() => {
                            navigate(dropdownLink.path);
                            setIsMenuOpen(false);
                            setIsServicesDropdownOpen(false);
                          }}
                          className="block w-full text-left px-3 py-2 rounded text-sm text-gray-dark hover:text-orange hover:bg-orange-50 transition-colors duration-200 border-l-2 border-transparent hover:border-orange"
                        >
                          {dropdownLink.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            
            return (
              <button
                key={link.name}
                onClick={() => {
                  navigate(link.path);
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 w-full text-left ${
                  isActive
                    ? "text-orange bg-orange-50 font-bold"
                    : "text-gray-dark hover:text-orange hover:bg-orange-50"
                }`}
              >
                {link.name}
              </button>
            );
          })}
          
          {/* Mobile Social Media Links */}
          <div className="px-3 py-3 border-t border-gray-light">
            <p className="text-xs text-gray-dark mb-3 font-medium">FOLLOW US</p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={(e) => handleSocialClick(social.url, e)}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-gray-light hover:bg-gray-200 text-gray-dark ${social.color}`}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="pt-2 pb-1 px-2">
            <button
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
              className="w-full bg-forest text-white px-4 py-3 rounded-lg font-bold hover:bg-forest-dark transition-all duration-200 shadow text-sm"
            >
              REQUEST A FREE QUOTE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;