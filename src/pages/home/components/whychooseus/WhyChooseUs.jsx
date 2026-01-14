import React from 'react';
import { Shield, Award, Clock, Building, Home, HardHat, Construction, Wrench, Star, MapPin } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Quality Construction",
      description: "Premium materials and expert workmanship for durable, long-lasting structures.",
      icon: <Award className="w-8 h-8" />,
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-100",
      bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      hasImage: true
    },
    {
      id: 2,
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver projects on schedule, every time.",
      icon: <Clock className="w-8 h-8" />,
      color: "text-green-800",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      borderColor: "border-emerald-100",
      bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      hasImage: true
    },
    {
      id: 3,
      title: "Licensed & Insured",
      description: "Fully licensed construction company with comprehensive insurance coverage.",
      icon: <Shield className="w-8 h-8" />,
      color: "text-blue-900",
      bgColor: "bg-gradient-to-br from-blue-50 to-sky-50",
      borderColor: "border-blue-100",
      bgImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      hasImage: true
    },
    {
      id: 4,
      title: "Custom Solutions",
      description: "Tailored construction approaches to meet unique project requirements.",
      icon: <Building className="w-8 h-8" />,
      color: "text-orange-800",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-100",
      bgImage: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80",
      hasImage: true
    },
    {
      id: 5,
      title: "Site Management",
      description: "Professional site supervision and safety protocols on every project.",
      icon: <HardHat className="w-8 h-8" />,
      color: "text-gray-800",
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      bgImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      hasImage: true
    },
    {
      id: 6,
      title: "15+ Years Experience",
      description: "Proven track record with extensive construction expertise across Zimbabwe.",
      icon: <Construction className="w-8 h-8" />,
      color: "text-blue-700",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      bgImage: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80",
      hasImage: true
    },
    {
      id: 7,
      title: "Comprehensive Services",
      description: "End-to-end construction solutions from planning to completion.",
      icon: <Wrench className="w-8 h-8" />,
      color: "text-green-900",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      bgImage: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80",
      hasImage: true
    },
    {
      id: 8,
      title: "Client Collaboration",
      description: "We work closely with clients to ensure their vision becomes reality.",
      icon: <Home className="w-8 h-8" />,
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-100",
      bgImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      hasImage: true
    },
  ];

  const stats = [
    { number: "250+", label: "Completed Projects" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Team Members" },
  ];

  const handleQuote = () => {
    console.log('Navigate to contact page');
    // In your actual app: navigate('/contact');
  };

  const handleProjects = () => {
    console.log('Navigate to projects page');
    // In your actual app: navigate('/projects');
  };

  return (
    <section className="py-8 lg:py-12 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full mb-3 shadow-sm">
            <Award className="w-4 h-4 text-orange-600" />
            <span className="text-orange-800 text-xs font-bold">WHY CHOOSE BUAGOPULA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">
            Building Trust, Delivering Excellence
          </h2>
          <p className="text-sm text-gray-700 max-w-2xl mx-auto">
            As Zimbabwe's trusted construction partner, we combine expertise, integrity, and innovation 
            to deliver exceptional results that stand the test of time
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-1">
                {stat.number}
              </div>
              <div className="text-xs font-medium text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-xl overflow-hidden border hover:border-orange-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: feature.borderColor }}
            >
              {/* Background Image with Overlay */}
              {feature.hasImage && (
                <>
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.bgImage})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-blue-900/80"></div>
                </>
              )}

              {/* Content */}
              <div className={`relative z-10 p-4 ${feature.hasImage ? 'text-white' : ''}`}>
                <div 
                  className={`${feature.hasImage ? 'bg-white/20 backdrop-blur-sm border-white/30' : `${feature.bgColor} ${feature.borderColor}`} ${feature.hasImage ? 'text-white' : feature.color} rounded-lg p-3 mb-3 inline-flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg border`}
                >
                  {feature.icon}
                </div>
                <h3 className={`text-base font-bold mb-2 transition-colors ${feature.hasImage ? 'text-white' : 'text-blue-900 group-hover:text-orange-600'}`}>
                  {feature.title}
                </h3>
                <p className={`text-xs leading-relaxed ${feature.hasImage ? 'text-gray-100' : 'text-gray-700'}`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-6 md:p-8 lg:p-10 text-center text-white overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Construction className="w-24 h-24 text-white/20" />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex justify-center mb-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                <Award className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
              Ready to Build Your Vision?
            </h3>
            <p className="text-sm md:text-base text-gray-200 mb-6 max-w-2xl mx-auto">
              Partner with Zimbabwe's trusted construction experts for quality, reliability, and excellence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                className="inline-flex items-center justify-center px-6 py-3 bg-green-800 text-white font-bold rounded-lg hover:bg-green-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
                onClick={handleQuote}
              >
                GET FREE QUOTE
              </button>
              <button 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/20 hover:border-white/80 transition-all duration-300 hover:scale-105 text-sm"
                onClick={handleProjects}
              >
                VIEW OUR PROJECTS
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="mt-6 text-xs text-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <p className="font-medium">
                  Call now for consultation: 
                  <a href="tel:+263773927966" className="ml-1 text-white font-bold hover:underline">
                    +263 77 392 7966
                  </a>
                </p>
                <span className="hidden sm:inline text-gray-400">•</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>108 Central Avenue, Harare, Zimbabwe</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Snippet */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-1 text-sm text-gray-700">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-orange-600 fill-orange-600" />
              ))}
            </div>
            <span className="font-semibold ml-1">4.9/5 from 150+ client reviews</span>
            <span className="text-gray-400 mx-2">•</span>
            <span>Trusted across Zimbabwe since 2009</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;