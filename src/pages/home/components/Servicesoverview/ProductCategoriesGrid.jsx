import React from 'react';
import { ArrowRight, Building, Home, Wrench, HardHat, Construction, Shield, Clock, Award, Users, Map, Settings } from 'lucide-react';

const ServiceCategoriesGrid = () => {
  // Construction service categories with free images from Unsplash
  const categories = [
    {
      id: 1,
      title: "Residential Construction",
      description: "Custom homes and residential projects",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      icon: <Home className="w-5 h-5" />,
      items: "150+ Projects",
      path: "/services/residential",
      color: "from-blue-900/80 to-blue-700/80"
    },
    {
      id: 2,
      title: "Commercial Construction",
      description: "Office complexes and commercial buildings",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      icon: <Building className="w-5 h-5" />,
      items: "50+ Projects",
      path: "/services/commercial",
      color: "from-orange-600/80 to-orange-800/80"
    },
    {
      id: 3,
      title: "Renovation & Remodeling",
      description: "Modernize and upgrade existing structures",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
      icon: <Wrench className="w-5 h-5" />,
      items: "80+ Projects",
      path: "/services/renovations",
      color: "from-green-800/80 to-green-700/80"
    },
    {
      id: 4,
      title: "Road & Infrastructure",
      description: "Civil engineering and road construction",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      icon: <Construction className="w-5 h-5" />,
      items: "30+ Projects",
      path: "/services/infrastructure",
      color: "from-gray-800/80 to-gray-600/80"
    },
    {
      id: 5,
      title: "Project Management",
      description: "Professional construction consulting",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      icon: <HardHat className="w-5 h-5" />,
      items: "Expert Team",
      path: "/services/management",
      color: "from-orange-800/80 to-amber-700/80"
    },
    {
      id: 6,
      title: "Custom Solutions",
      description: "Tailored construction for unique needs",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      icon: <Settings className="w-5 h-5" />,
      items: "Specialized",
      path: "/services/custom",
      color: "from-blue-700/80 to-blue-900/80"
    },
    {
      id: 7,
      title: "Site Development",
      description: "Land preparation and site works",
      image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80",
      icon: <Map className="w-5 h-5" />,
      items: "Full Service",
      path: "/services/development",
      color: "from-orange-600/60 to-amber-600/80"
    },
    {
      id: 8,
      title: "Consultation Services",
      description: "Expert advice and planning",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      icon: <Users className="w-5 h-5" />,
      items: "Free Consult",
      path: "/services/consultation",
      color: "from-green-800/60 to-emerald-600/80"
    }
  ];

  const handleNavigation = (path) => {
    console.log(`Navigate to: ${path}`);
    // In your actual app, use: navigate(path);
  };

  return (
    <section className="py-8 lg:py-12 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full mb-3 shadow-sm">
            <Award className="w-4 h-4 text-orange-600" />
            <span className="text-orange-800 text-xs font-bold">PROFESSIONAL CONSTRUCTION SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">
            Our Construction Expertise
          </h2>
          <p className="text-sm text-gray-700 max-w-2xl mx-auto">
            From residential homes to large-scale infrastructure projects, discover our comprehensive 
            construction services delivering excellence across Zimbabwe
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-200 bg-white"
            >
              {/* Image Container */}
              <div 
                className="relative h-64 overflow-hidden"
                onClick={() => handleNavigation(category.path)}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
                    <div className="text-blue-900">
                      {category.icon}
                    </div>
                  </div>
                </div>
                
                {/* Items Count */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-xs font-bold text-white bg-blue-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {category.items}
                  </span>
                </div>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} via-transparent to-transparent`}></div>
              </div>

              {/* Content */}
              <div className="relative p-4">
                <h3 className="text-lg font-bold text-blue-900 mb-1">{category.title}</h3>
                <p className="text-gray-700 text-sm mb-3">{category.description}</p>
                
                {/* Explore Link */}
                <button
                  onClick={() => handleNavigation(category.path)}
                  className="w-full flex items-center justify-between text-orange-800 font-semibold group-hover:text-orange-600 transition-all duration-300"
                >
                  <span className="text-sm">View Details</span>
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
                
                {/* Service Features */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
                      <span>Quality Materials</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
                      <span>Timely Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <div className="inline-block bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl px-6 py-4 border border-orange-200">
            <p className="text-gray-700 text-sm font-medium mb-3">
              Need a comprehensive construction solution? Get our integrated service packages!
            </p>
            <button
              onClick={() => handleNavigation("/packages")}
              className="px-6 py-2 bg-green-800 text-white font-bold rounded-lg hover:bg-green-900 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-105 text-sm"
            >
              VIEW PACKAGE SOLUTIONS
            </button>
          </div>
          
          {/* Contact Info */}
          <div className="mt-6 text-sm text-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>Serving Harare and nationwide projects</span>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a 
                href="tel:+263773927966"
                className="text-orange-600 font-semibold hover:text-orange-800 transition-colors hover:underline"
              >
                Call +263 77 392 7966 for consultation
              </a>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a 
                href="mailto:buagopulaproperties@gmail.com"
                className="text-blue-900 font-medium hover:text-orange-600 transition-colors hover:underline"
              >
                Email for Quote
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-700">
              <Shield className="w-4 h-4 text-orange-600" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-700">
              <Clock className="w-4 h-4 text-orange-600" />
              <span>On-Time Completion</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-700">
              <Award className="w-4 h-4 text-orange-600" />
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoriesGrid;