import React, { useState, useEffect } from 'react';
import { Building, Home, Wrench, HardHat, Construction, Shield, Clock, Star, Award, Zap } from 'lucide-react';

const FeaturedServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [hoveredService, setHoveredService] = useState(null);

  // Construction services data with Unsplash images
  const services = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      badge: "Residential",
      icon: <Home className="w-5 h-5" />,
      title: "Residential Construction",
      description: "Custom homes and residential developments",
      price: "Custom Quote",
      features: ["Design & Build", "Quality Materials", "Timely Delivery", "Warranty Included"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      badge: "Commercial",
      icon: <Building className="w-5 h-5" />,
      title: "Commercial Buildings",
      description: "Office complexes and commercial spaces",
      price: "Project Based",
      features: ["Modern Design", "Energy Efficient", "Code Compliant", "Turnkey Solutions"]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
      badge: "Renovations",
      icon: <Wrench className="w-5 h-5" />,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces to modern standards",
      price: "From $15,000",
      features: ["Structural Upgrades", "Modern Finishes", "Minimal Disruption", "Quality Workmanship"]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      badge: "Infrastructure",
      icon: <Construction className="w-5 h-5" />,
      title: "Road & Infrastructure",
      description: "Road construction and civil engineering",
      price: "Contract Based",
      features: ["Heavy Equipment", "Quality Materials", "Safety Standards", "Durable Results"]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      badge: "Consulting",
      icon: <HardHat className="w-5 h-5" />,
      title: "Project Management",
      description: "Professional construction consulting",
      price: "From $2,500",
      features: ["Budget Control", "Timeline Management", "Quality Assurance", "Risk Mitigation"]
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      badge: "Custom",
      icon: <Award className="w-5 h-5" />,
      title: "Custom Construction Solutions",
      description: "Tailored solutions for unique projects",
      price: "Custom Quote",
      features: ["Unique Designs", "Specialized Materials", "Expert Planning", "Premium Quality"]
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80",
      badge: "Fast Track",
      icon: <Zap className="w-5 h-5" />,
      title: "Accelerated Construction",
      description: "Fast-track projects without compromising quality",
      price: "Premium Rate",
      features: ["Expedited Timeline", "Efficient Planning", "24/7 Operations", "Quality Guaranteed"]
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      badge: "Turnkey",
      icon: <Shield className="w-5 h-5" />,
      title: "Turnkey Projects",
      description: "Complete construction from concept to completion",
      price: "Full Package",
      features: ["End-to-End Service", "Single Point Contact", "Warranty Coverage", "Post-Construction Support"]
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, services.length - itemsToShow);
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsToShow, services.length]);

  const getBadgeColor = (badge) => {
    const colors = {
      'Residential': 'bg-blue-900 text-white',
      'Commercial': 'bg-orange-600 text-white',
      'Renovations': 'bg-green-800 text-white',
      'Infrastructure': 'bg-gray-800 text-white',
      'Consulting': 'bg-orange-800 text-white',
      'Custom': 'bg-gradient-to-r from-blue-900 to-blue-700 text-white',
      'Fast Track': 'bg-green-600 text-white',
      'Turnkey': 'bg-gradient-to-r from-orange-600 to-orange-800 text-white'
    };
    return colors[badge] || 'bg-blue-900 text-white';
  };

  const maxIndex = Math.max(0, services.length - itemsToShow);

  const handleGetQuote = (serviceId) => {
    console.log('Navigate to contact with service:', serviceId);
    // In your actual app: navigate('/contact', { state: { service: serviceId } });
  };

  const handleViewAll = () => {
    console.log('Navigate to services page');
    // In your actual app: navigate('/services');
  };

  const handleContact = () => {
    console.log('Navigate to contact page');
    // In your actual app: navigate('/contact');
  };

  return (
    <section className="py-8 lg:py-12 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full mb-3">
            <Award className="w-4 h-4 text-orange-600" />
            <span className="text-orange-800 text-xs font-bold">OUR CORE SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
            Professional Construction Services
          </h2>
          <p className="text-sm text-gray-700 max-w-2xl mx-auto">
            From residential homes to commercial complexes and infrastructure development, 
            we deliver quality construction solutions across Zimbabwe with precision and expertise
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
            }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 group"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 sm:h-72">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ filter: 'brightness(0.85)' }}
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${getBadgeColor(service.badge)} flex items-center gap-1`}>
                        {service.icon}
                        <span>{service.badge}</span>
                      </span>
                    </div>
                    
                    {/* Price Tag */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-sm font-bold px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-900 rounded-full">
                        {service.price}
                      </span>
                    </div>
                    
                    {/* Service Details Overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/80 to-transparent flex flex-col items-center justify-end pb-6 transition-all duration-300 px-4"
                      style={{
                        opacity: hoveredService === service.id ? 1 : 0.85,
                      }}
                    >
                      <div className="w-full text-center mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                          <div className="text-white">
                            {service.icon}
                          </div>
                        </div>
                        <h3 className="text-white text-lg font-bold mb-1">
                          {service.title}
                        </h3>
                        <p className="text-orange-200 text-sm mb-3">
                          {service.description}
                        </p>
                        
                        {/* Features List */}
                        <div className="grid grid-cols-2 gap-1 mb-4">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                              <span className="text-orange-100 text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <button 
                          className="px-5 py-2 bg-green-800 text-white font-bold rounded-lg text-sm hover:bg-green-900 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-105"
                          onClick={() => handleGetQuote(service.id)}
                        >
                          GET QUOTE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'w-8 bg-gradient-to-r from-orange-600 to-orange-800' 
                  : 'w-1.5 bg-gray-300 hover:bg-orange-600/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8">
          <div className="bg-gray-100 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Ready to Build Your Vision?</h3>
            <p className="text-gray-700 text-sm mb-4 max-w-xl mx-auto">
              Contact us today for a free consultation and customized quote. Our team of experienced 
              construction professionals is ready to bring your project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleContact}
                className="px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all duration-300 text-sm"
              >
                REQUEST CONSULTATION
              </button>
              <button
                onClick={handleViewAll}
                className="px-6 py-3 border-2 border-orange-600 text-orange-800 font-bold rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300 text-sm"
              >
                VIEW ALL SERVICES
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-gray-700 mt-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-orange-600" />
              <span className="font-semibold">Timely Project Delivery</span>
            </div>
            <div className="hidden sm:block text-gray-400">•</div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-orange-600" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="hidden sm:block text-gray-400">•</div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-orange-600" />
              <span className="font-semibold">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;