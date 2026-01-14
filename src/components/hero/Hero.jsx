import React, { useState, useEffect } from "react";
import { ChevronRight, Star, Award, Shield, Clock, Building, Home, Wrench, HardHat, Construction, ChevronLeft } from "lucide-react";
import banner01 from '../../assets/images/work2.jpeg'
import banner02 from '../../assets/images/homebanner.jpeg'
import banner03 from '../../assets/images/construction.jpg'
import banner04 from '../../assets/images/work2.jpeg'
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Construction-themed slider images
  const sliderImages = [
    banner01, 
    banner02, 
    banner03, 
    banner04, 
    banner01,
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const handleGetQuote = () => {
    console.log('Navigate to /contact');
    // In your actual app: navigate('/contact');
  };

  const handleViewProjects = () => {
    console.log('Navigate to /projects');
    // In your actual app: navigate('/projects');
  };

  // Construction service icons
  const serviceIcons = [
    { icon: <Home className="w-4 h-4 text-white" />, label: "Residential" },
    { icon: <Building className="w-4 h-4 text-white" />, label: "Commercial" },
    { icon: <Wrench className="w-4 h-4 text-white" />, label: "Renovations" },
    { icon: <Construction className="w-4 h-4 text-white" />, label: "Roads" },
    { icon: <HardHat className="w-4 h-4 text-white" />, label: "Consulting" },
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden min-h-screen flex items-center pt-16">
      {/* Image Slider Background */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-900/80 to-blue-900/85 z-10"></div>
        
        {/* Slider Images */}
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Construction Slide ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.4) saturate(1.2) contrast(1.1)' }}
            />
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-orange-600/40 backdrop-blur-sm p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-orange-600/40 backdrop-blur-sm p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-orange-600 w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated floating construction elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-12 left-8 animate-pulse">
          <HardHat className="w-6 h-6 text-orange-600/30" />
        </div>
        <div className="absolute top-32 right-16 animate-pulse delay-300">
          <Building className="w-5 h-5 text-white/30" />
        </div>
        <div className="absolute bottom-32 left-16 animate-pulse delay-500">
          <Home className="w-6 h-6 text-orange-600/30" />
        </div>
        <div className="absolute top-48 right-1/4 animate-pulse delay-700">
          <Construction className="w-5 h-5 text-white/30" />
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 py-16">
        <div className="text-center">
          {/* Trust Badge - Construction Theme */}
          <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-orange-600/30 backdrop-blur-sm border border-orange-600/50 rounded-full mb-4 animate-fade-in">
            <Shield className="w-3 h-3 text-orange-500" />
            <span className="text-orange-200 text-xs font-bold">
              Licensed & Certified Construction Professionals
            </span>
            <Shield className="w-3 h-3 text-orange-500" />
          </div>

          {/* Main Heading with Animation */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 animate-slide-up">
            <span className="block text-white drop-shadow-lg">
              Building Zimbabwe's Future with
            </span>
            <span className="block text-orange-500 mt-1 text-4xl sm:text-5xl lg:text-6xl drop-shadow-lg">
              Excellence & Integrity
            </span>
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 my-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>

          {/* Subheading */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in-delay drop-shadow">
            BuagoPula Construction delivers premium construction services across Zimbabwe. 
            From residential homes to commercial complexes and infrastructure development, 
            we build with quality, precision, and commitment to excellence.
            <span className="block mt-2 text-orange-200 text-sm font-bold">
              Serving Harare & Beyond • Project Management • Custom Solutions
            </span>
          </p>

          {/* Services Icons */}
          <div className="flex justify-center gap-3 mb-6 animate-fade-in-delay flex-wrap">
            {serviceIcons.map((service, index) => (
              <div 
                key={index}
                className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full hover:bg-orange-600/30 transition-colors duration-300"
              >
                {service.icon}
                <span className="text-xs text-white font-medium">{service.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 animate-fade-in-delay-2">
            <button
              className="group inline-flex items-center justify-center px-6 py-3 bg-green-800 text-white font-bold rounded-lg hover:bg-green-900 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-105 text-sm"
              onClick={handleGetQuote}
            >
              GET FREE QUOTE
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleViewProjects}
              className="inline-flex items-center justify-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-orange-600 text-orange-800 font-bold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105 text-sm"
            >
              VIEW OUR PROJECTS
            </button>
          </div>

          {/* Stats Section with Glass Effect */}
          <div className="inline-flex bg-white/90 backdrop-blur-md rounded-xl p-4 border border-white/30 shadow-2xl">
            <div className="grid grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group cursor-default">
                <div className="flex items-center justify-center gap-1 mb-1 group-hover:scale-110 transition-transform">
                  <p className="text-2xl sm:text-3xl font-bold text-blue-900">250+</p>
                </div>
                <p className="text-xs text-gray-700 font-semibold">
                  Completed Projects
                </p>
              </div>
              <div className="text-center group cursor-default border-x border-gray-300 px-6">
                <div className="flex items-center justify-center gap-1 mb-1 group-hover:scale-110 transition-transform">
                  <p className="text-2xl sm:text-3xl font-bold text-blue-900">15+</p>
                  <Award className="w-4 h-4 text-orange-600" />
                </div>
                <p className="text-xs text-gray-700 font-semibold">
                  Years Experience
                </p>
              </div>
              <div className="text-center group cursor-default">
                <div className="flex items-center justify-center gap-1 mb-1 group-hover:scale-110 transition-transform">
                  <p className="text-2xl sm:text-3xl font-bold text-blue-900">98%</p>
                  <Shield className="w-4 h-4 text-orange-600" />
                </div>
                <p className="text-xs text-gray-700 font-semibold">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-gray-300/50 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-gray-200 mb-3">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-3 h-3 text-orange-500 fill-orange-500"
                    />
                  ))}
                </div>
                <span className="font-semibold">Rated 4.9/5 by Clients</span>
              </div>
              <span className="hidden sm:inline text-orange-500">•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-orange-500" />
                <span className="font-semibold">On-Time Project Delivery</span>
              </div>
            </div>
            
            {/* Contact Information - BuagoPula Construction */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs">
              <span className="text-orange-500 font-bold">
                BUAGOPULA CONSTRUCTION
              </span>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a 
                href="tel:+263773927966"
                className="text-orange-200 hover:text-white transition-colors font-semibold hover:underline"
              >
                +263 77 392 7966
              </a>
              <span className="hidden sm:inline text-gray-400">•</span>
              {/* <span className="text-gray-200 font-semibold">
                108 Central Avenue, Harare
              </span> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent z-20"></div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }

        .drop-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        }

        .drop-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
};

export default Hero;