import React, { useState } from "react";
import { 
  Home, Building, Wrench, Car, ClipboardCheck, 
  Star, Check, ChevronRight, Phone, MapPin, 
  Calendar, Award, Shield, Zap, Truck, Users,
  Mail, HardHat, Briefcase, Settings, Hammer,
  Eye, Clock, Target, DollarSign, ThumbsUp,
  PhoneCall, MessageCircle, FileText, Download,
  Map, CheckCircle, ArrowRight
} from "lucide-react";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import Project1 from "../../assets/images/work1.jpeg";
import Project2 from "../../assets/images/work2.jpeg";
import Project3 from "../../assets/images/work3.jpeg";
import Team1 from "../../assets/images/work4.jpeg";
import Team2 from "../../assets/images/work5.jpeg";
import Team3 from "../../assets/images/work6.jpeg";

import ResidentialImg from "../../assets/images/work7.jpeg";
import CommercialImg from "../../assets/images/work8.jpeg";
import RenovationImg from "../../assets/images/work9.jpeg";
import RoadConstructionImg from "../../assets/images/work10.jpeg";
import ProjectManagementImg from "../../assets/images/work11.jpeg";
import CustomSolutionsImg from "../../assets/images/fla30.jpeg";

const Services = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState("all");
  const [activeTab, setActiveTab] = useState("services");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredTeam, setHoveredTeam] = useState(null);

  // Color variables based on your palette
  const colors = {
    navy: {
      primary: "#0A2342",
      light: "#1E3A5F",
      gradient: "from-[#0A2342] to-[#1E3A5F]"
    },
    orange: {
      primary: "#CC5500",
      light: "#B3541E",
      gradient: "from-[#CC5500] to-[#B3541E]"
    },
    gray: {
      primary: "#6B7280",
      dark: "#4B5563",
      light: "#9CA3AF"
    },
    green: {
      primary: "#047857",
      dark: "#065F46",
      gradient: "from-[#047857] to-[#065F46]"
    },
    background: {
      offWhite: "#F9FAFB",
      lightGray: "#F3F4F6"
    }
  };

  // Service Categories
  const serviceCategories = [
    {
      id: "residential",
      name: "Residential Construction",
      icon: <Home className="w-6 h-6" />,
      description: "Custom homes & residential developments",
      color: colors.navy.gradient,
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      count: "50+ Projects"
    },
    {
      id: "commercial",
      name: "Commercial Construction",
      icon: <Building className="w-6 h-6" />,
      description: "Office buildings & retail spaces",
      color: colors.orange.gradient,
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      count: "30+ Projects"
    },
    {
      id: "renovations",
      name: "Renovations & Remodeling",
      icon: <Wrench className="w-6 h-6" />,
      description: "Complete building transformations",
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      count: "40+ Projects"
    },
    {
      id: "infrastructure",
      name: "Road & Infrastructure",
      icon: <Car className="w-6 h-6" />,
      description: "Roads, bridges & public works",
      color: colors.green.gradient,
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      count: "25+ Projects"
    },
    {
      id: "management",
      name: "Project Management",
      icon: <ClipboardCheck className="w-6 h-6" />,
      description: "Professional construction oversight",
      color: "from-purple-600 to-indigo-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      count: "60+ Projects"
    },
    {
      id: "custom",
      name: "Custom Solutions",
      icon: <Settings className="w-6 h-6" />,
      description: "Tailored construction services",
      color: "from-amber-600 to-orange-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      count: "Custom"
    }
  ];

  // Services List
  const allServices = [
    {
      id: 1,
      category: "residential",
      name: "Custom Home Construction",
      description: "Luxury residential construction from design to completion",
      price: "From $150,000",
      features: ["Architectural design", "Quality materials", "Timely completion"],
      image: ResidentialImg,
      popular: true,
      duration: "6-12 months"
    },
    {
      id: 2,
      category: "residential",
      name: "Townhouse Development",
      description: "Multi-unit residential developments",
      price: "From $500,000",
      features: ["Multiple units", "Modern amenities", "Community planning"],
      image: ResidentialImg,
      popular: false,
      duration: "12-18 months"
    },
    {
      id: 3,
      category: "commercial",
      name: "Office Building Construction",
      description: "Modern office spaces and complexes",
      price: "From $1,000,000",
      features: ["Commercial zoning", "Parking facilities", "Utility systems"],
      image: CommercialImg,
      popular: true,
      duration: "12-18 months"
    },
    {
      id: 4,
      category: "commercial",
      name: "Retail & Shopping Centers",
      description: "Shopping malls and retail spaces",
      price: "From $2,000,000",
      features: ["Multiple tenants", "Parking solutions", "Security systems"],
      image: CommercialImg,
      popular: false,
      duration: "18-24 months"
    },
    {
      id: 5,
      category: "renovations",
      name: "Complete Home Renovation",
      description: "Total home remodeling and upgrades",
      price: "From $50,000",
      features: ["Interior redesign", "Structural upgrades", "Modern fixtures"],
      image: RenovationImg,
      popular: true,
      duration: "3-6 months"
    },
    {
      id: 6,
      category: "infrastructure",
      name: "Road Construction",
      description: "Complete road development projects",
      price: "From $500,000",
      features: ["Drainage systems", "Pavement design", "Safety features"],
      image: RoadConstructionImg,
      popular: true,
      duration: "6-9 months"
    }
  ];

  // Featured Projects
  const featuredProjects = [
    {
      id: 1,
      title: "Harare Central Business Complex",
      category: "Commercial",
      description: "15-story office building with retail spaces",
      image: Project1,
      year: "2023",
      budget: "$5.2M",
      duration: "18 months"
    },
    {
      id: 2,
      title: "Highland Park Residential Estate",
      category: "Residential",
      description: "Gated community with 50 luxury homes",
      image: Project2,
      year: "2022",
      budget: "$8.7M",
      duration: "24 months"
    },
    {
      id: 3,
      title: "City Road Network Upgrade",
      category: "Infrastructure",
      description: "Major road rehabilitation project",
      image: Project3,
      year: "2023",
      budget: "$3.5M",
      duration: "12 months"
    }
  ];

  // Service Packages
  const servicePackages = [
    {
      id: 1,
      name: "Starter Package",
      price: "From $250,000",
      services: ["Site preparation", "Basic structure", "Standard finishes", "Project management"],
      bestFor: "Small residential projects",
      popular: false,
      icon: <Home className="w-6 h-6" />
    },
    {
      id: 2,
      name: "Professional Package",
      price: "From $750,000",
      services: ["Architectural design", "Quality materials", "Full project management", "Quality assurance"],
      bestFor: "Commercial & medium projects",
      popular: true,
      icon: <Building className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Premium Enterprise",
      price: "From $1,500,000",
      services: ["Custom design", "Premium materials", "Full management", "24/7 support", "Extended warranty"],
      bestFor: "Large-scale developments",
      popular: false,
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  // Team Members
  const teamMembers = [
    {
      id: 1,
      name: "John Moyo",
      position: "Chief Executive Officer",
      experience: "20+ years",
      image: Team1,
      specialties: ["Project Management", "Business Strategy"]
    },
    {
      id: 2,
      name: "Sarah Chiwenga",
      position: "Head of Construction",
      experience: "15+ years",
      image: Team2,
      specialties: ["Structural Engineering", "Quality Control"]
    },
    {
      id: 3,
      name: "David Sibanda",
      position: "Senior Project Manager",
      experience: "12+ years",
      image: Team3,
      specialties: ["Infrastructure", "Commercial Projects"]
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Michael Chidzonga",
      company: "Heritage Properties Ltd",
      text: "BuagoPula delivered our commercial complex ahead of schedule while maintaining exceptional quality standards.",
      rating: 5,
      project: "CBD Office Tower"
    },
    {
      id: 2,
      name: "Grace Ndlovu",
      company: "Highland Estates",
      text: "Their attention to detail and professional management made our residential development project stress-free.",
      rating: 5,
      project: "Luxury Housing Estate"
    },
    {
      id: 3,
      name: "Tendai Mashavave",
      company: "City Council",
      text: "The road infrastructure project was completed with minimal disruption to public services. Highly recommended.",
      rating: 5,
      project: "Urban Road Network"
    }
  ];

  // Why Choose Us Features
  const businessFeatures = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Licensed & Insured",
      description: "Fully certified and bonded professionals"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "15+ Years Experience",
      description: "Established track record in Zimbabwe"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "On-Time Delivery",
      description: "95% projects delivered on schedule"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Quality Focus",
      description: "Highest industry standards maintained"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Transparent Pricing",
      description: "No hidden costs or surprises"
    },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      title: "Client Satisfaction",
      description: "98% client satisfaction rate"
    }
  ];

  // Process Steps
  const processSteps = [
    { step: "01", title: "Consultation", desc: "Initial meeting & needs assessment" },
    { step: "02", title: "Planning", desc: "Design & project blueprint" },
    { step: "03", title: "Approval", desc: "Permits & regulatory compliance" },
    { step: "04", title: "Construction", desc: "Quality execution phase" },
    { step: "05", title: "Inspection", desc: "Quality control & verification" },
    { step: "06", title: "Handover", desc: "Project delivery & documentation" }
  ];

  // Stats
  const stats = [
    { number: "150+", label: "Projects Completed", icon: <CheckCircle className="w-4 h-4" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-4 h-4" /> },
    { number: "50+", label: "Expert Team Members", icon: <Users className="w-4 h-4" /> },
    { number: "98%", label: "Client Satisfaction", icon: <ThumbsUp className="w-4 h-4" /> }
  ];

  const filteredServices = activeService === "all" 
    ? allServices 
    : allServices.filter(service => service.category === activeService);

  const handleServiceClick = (serviceId) => {
    navigate(`/quote?service=${serviceId}`);
  };

  const handlePackageClick = (packageId) => {
    navigate(`/quote?package=${packageId}`);
  };

  const handleContact = () => {
    window.location.href = 'tel:+263773927966';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:buagopulaproperties@gmail.com';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/263773927966';
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-14" style={{ backgroundColor: colors.background.offWhite }}>
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600')",
            }}
          >
            <div className="absolute inset-0" style={{ backgroundColor: colors.navy.primary, opacity: 0.7 }}></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center text-center px-3">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
                <HardHat className="w-4 h-4" style={{ color: colors.orange.primary }} />
                <span className="text-white text-xs font-semibold tracking-wider">BUILDING ZIMBABWE'S FUTURE SINCE 2008</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Professional Construction <span style={{ color: colors.orange.primary }}>Services</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                BuagoPula Construction delivers exceptional residential, commercial, and infrastructure projects across Zimbabwe
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={() => navigate('/quote')}
                  className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                  style={{ 
                    backgroundColor: colors.green.primary,
                    color: 'white',
                    backgroundImage: `linear-gradient(to right, ${colors.green.primary}, ${colors.green.dark})`
                  }}
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button 
                  onClick={handleContact}
                  className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 border-2 inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  style={{ 
                    borderColor: colors.orange.primary,
                    color: 'white'
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-3 py-8 -mt-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 text-center transform hover:-translate-y-1 transition-all duration-200"
                style={{ borderTop: `4px solid ${colors.orange.primary}` }}
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="mr-2" style={{ color: colors.navy.primary }}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold" style={{ color: colors.navy.primary }}>
                    {stat.number}
                  </div>
                </div>
                <div className="text-xs font-medium" style={{ color: colors.gray.dark }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Tabs */}
        <div className="max-w-7xl mx-auto px-3 py-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full mb-3"
                 style={{ backgroundColor: colors.navy.primary + '10' }}>
              <Briefcase className="w-4 h-4" style={{ color: colors.navy.primary }} />
              <span className="text-xs font-semibold" style={{ color: colors.navy.primary }}>OUR OFFERINGS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: colors.navy.primary }}>
              Comprehensive Construction Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From residential homes to large-scale infrastructure, we provide end-to-end construction solutions
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "services"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              style={{
                backgroundColor: activeTab === "services" ? colors.navy.primary : 'transparent'
              }}
            >
              Our Services
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "projects"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              style={{
                backgroundColor: activeTab === "projects" ? colors.navy.primary : 'transparent'
              }}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("packages")}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "packages"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              style={{
                backgroundColor: activeTab === "packages" ? colors.navy.primary : 'transparent'
              }}
            >
              Packages
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "team"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              style={{
                backgroundColor: activeTab === "team" ? colors.navy.primary : 'transparent'
              }}
            >
              Our Team
            </button>
          </div>

          {/* Services Tab Content */}
          {activeTab === "services" && (
            <>
              {/* Service Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {serviceCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`relative overflow-hidden rounded-xl p-5 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${category.bgColor} border hover:shadow-xl`}
                    style={{ 
                      borderColor: activeService === category.id ? colors.orange.primary : '#E5E7EB',
                      borderWidth: '2px'
                    }}
                    onClick={() => setActiveService(category.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`text-white w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.color}`}>
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold mb-1" style={{ color: colors.navy.primary }}>
                          {category.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">{category.description}</p>
                        <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold"
                              style={{ backgroundColor: colors.navy.primary + '10', color: colors.navy.primary }}>
                          {category.count}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* All Services Filter */}
              <div className="text-center mb-8">
                <button
                  onClick={() => setActiveService("all")}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    activeService === "all"
                      ? "text-white shadow-md"
                      : "bg-white border text-gray-700 hover:border-orange-300"
                  }`}
                  style={{
                    backgroundColor: activeService === "all" ? colors.orange.primary : 'white',
                    borderColor: activeService === "all" ? colors.orange.primary : colors.gray.primary,
                  }}
                >
                  View All Services
                </button>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {service.popular && (
                        <div className="absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full"
                             style={{ backgroundColor: colors.orange.primary, color: 'white' }}>
                          POPULAR
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="text-white text-sm font-medium">{service.duration}</div>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold" style={{ color: colors.navy.primary }}>{service.name}</h3>
                        {/* <span className="font-bold text-base" style={{ color: colors.green.dark }}>{service.price}</span> */}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      
                      <div className="mb-5">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-gray-700 text-sm mb-2">
                            <Check className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: colors.green.primary }} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => handleServiceClick(service.id)}
                        className="w-full text-white font-semibold py-3 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                        style={{ 
                          backgroundColor: colors.green.primary,
                          backgroundImage: `linear-gradient(to right, ${colors.green.primary}, ${colors.green.dark})`
                        }}
                      >
                        Get Detailed Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Projects Tab Content */}
          {activeTab === "projects" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white"
                           style={{ backgroundColor: colors.orange.primary }}>
                        {project.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-2" style={{ color: colors.navy.primary }}>
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-xs text-gray-500">Year</div>
                          <div className="font-semibold" style={{ color: colors.navy.primary }}>{project.year}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Budget</div>
                          <div className="font-semibold" style={{ color: colors.navy.primary }}>{project.budget}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Duration</div>
                          <div className="font-semibold" style={{ color: colors.navy.primary }}>{project.duration}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <button 
                  className="px-5 py-2.5 rounded-lg font-semibold border transition-all duration-200 hover:shadow-lg"
                  style={{ 
                    borderColor: colors.navy.primary,
                    color: colors.navy.primary,
                    backgroundColor: 'transparent'
                  }}
                >
                  View All Projects
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Packages Tab Content */}
          {activeTab === "packages" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {servicePackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 ${
                      pkg.popular 
                        ? "border-orange-300 transform hover:-translate-y-2" 
                        : "border-gray-200"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 left-0 right-0 py-2 text-center text-xs font-bold"
                           style={{ backgroundColor: colors.orange.primary, color: 'white' }}>
                        MOST POPULAR
                      </div>
                    )}
                    
                    <div className={`p-6 ${pkg.popular ? 'pt-10' : ''}`}>
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
                             style={{ backgroundColor: colors.navy.primary + '10', color: colors.navy.primary }}>
                          {pkg.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: colors.navy.primary }}>{pkg.name}</h3>
                        <div className="text-2xl font-bold mb-1" style={{ color: colors.orange.primary }}>{pkg.price}</div>
                        <p className="text-gray-500 text-sm">{pkg.bestFor}</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        {pkg.services.map((service, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="w-4 h-4 mr-3" style={{ color: colors.green.primary }} />
                            <span className="text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => handlePackageClick(pkg.id)}
                        className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                          pkg.popular
                            ? "text-white shadow-md hover:shadow-lg"
                            : "border hover:bg-gray-50"
                        }`}
                        style={{
                          backgroundColor: pkg.popular ? colors.green.primary : 'transparent',
                          borderColor: pkg.popular ? 'transparent' : colors.navy.primary,
                          color: pkg.popular ? 'white' : colors.navy.primary,
                          backgroundImage: pkg.popular ? `linear-gradient(to right, ${colors.green.primary}, ${colors.green.dark})` : 'none'
                        }}
                      >
                        Select Package
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5" style={{ color: colors.navy.primary }} />
                  <h3 className="text-lg font-bold" style={{ color: colors.navy.primary }}>Custom Package Options</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Need a custom solution? We can tailor a package specifically for your project requirements.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200"
                  style={{ 
                    backgroundColor: colors.navy.primary,
                    color: 'white'
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Request Custom Quote
                </button>
              </div>
            </div>
          )}

          {/* Team Tab Content */}
          {activeTab === "team" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    onMouseEnter={() => setHoveredTeam(member.id)}
                    onMouseLeave={() => setHoveredTeam(null)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="text-white text-sm">{member.experience} experience</div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-1" style={{ color: colors.navy.primary }}>
                        {member.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{member.position}</p>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="inline-block px-2 py-1 rounded-full text-xs"
                            style={{ 
                              backgroundColor: hoveredTeam === member.id 
                                ? colors.orange.primary + '20' 
                                : colors.navy.primary + '10',
                              color: hoveredTeam === member.id 
                                ? colors.orange.primary 
                                : colors.navy.primary
                            }}
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Our team of 50+ professionals brings diverse expertise to every project
                </p>
                <button 
                  className="px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                  style={{ 
                    backgroundColor: colors.navy.primary,
                    color: 'white'
                  }}
                >
                  Meet Full Team
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Why Choose Us */}
        <div className="max-w-7xl mx-auto px-3 py-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full mb-3"
                 style={{ backgroundColor: colors.orange.primary + '10' }}>
              <Star className="w-4 h-4" style={{ color: colors.orange.primary }} />
              <span className="text-xs font-semibold" style={{ color: colors.orange.primary }}>WHY CHOOSE US</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: colors.navy.primary }}>
              Building Excellence Since 2008
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We combine experience, innovation, and dedication to deliver exceptional construction results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {businessFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
                     style={{ backgroundColor: colors.navy.primary + '10', color: colors.navy.primary }}>
                  {feature.icon}
                </div>
                <h3 className="text-sm font-bold mb-1" style={{ color: colors.navy.primary }}>{feature.title}</h3>
                <p className="text-gray-600 text-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-3">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: colors.navy.primary }}>
                Client Testimonials
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear from our satisfied clients about their experience working with BuagoPula
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4" fill={colors.orange.primary} color={colors.orange.primary} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="font-semibold" style={{ color: colors.navy.primary }}>{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                    <div className="text-xs text-gray-500 mt-1">Project: {testimonial.project}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-12" style={{ backgroundColor: colors.navy.primary }}>
          <div className="max-w-7xl mx-auto px-3">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Our Construction Process
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                A structured approach that ensures quality, efficiency, and client satisfaction at every stage
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full text-lg font-bold mb-3 mx-auto group-hover:scale-110 transition-all duration-200"
                         style={{ 
                           backgroundColor: colors.orange.primary,
                           color: 'white'
                         }}>
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-7 left-full w-full h-0.5"
                           style={{ backgroundColor: colors.orange.primary + '50' }}></div>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-300 text-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-3 py-12">
          <div className="rounded-2xl p-8 text-center text-white shadow-2xl"
               style={{ 
                 backgroundColor: colors.navy.primary,
                 backgroundImage: `linear-gradient(135deg, ${colors.navy.primary}, ${colors.navy.light})`
               }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <PhoneCall className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold mb-3">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Let's build something great together!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <button 
                onClick={() => navigate('/quote')}
                className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center bg-white hover:bg-gray-50"
                style={{ color: colors.navy.primary }}
              >
                <FileText className="w-4 h-4 mr-2" />
                Get Free Quote
              </button>
              
              <button 
                onClick={handleContact}
                className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 border-2 inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20"
                style={{ borderColor: colors.orange.primary, color: 'white' }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call: +263 77 392 7966
              </button>

              <button 
                onClick={handleWhatsApp}
                className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 inline-flex items-center justify-center"
                style={{ backgroundColor: '#25D366', color: 'white' }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>108 Central Avenue, Harare, Zimbabwe</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+263 77 392 7966 / +260 97 223 2866</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>buagopulaproperties@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="max-w-4xl mx-auto px-3 py-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.navy.primary }}>
                Quick Inquiry
              </h3>
              <p className="text-gray-600">Fill out this form and we'll get back to you within 24 hours</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ borderColor: colors.gray.primary }}
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ borderColor: colors.gray.primary }}
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ borderColor: colors.gray.primary }}
              />
              <select 
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ borderColor: colors.gray.primary }}
              >
                <option>Select Service</option>
                <option>Residential Construction</option>
                <option>Commercial Construction</option>
                <option>Renovations & Remodeling</option>
                <option>Road & Infrastructure</option>
                <option>Project Management</option>
              </select>
              <textarea 
                placeholder="Project Details" 
                rows="3"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-5 md:col-span-2"
                style={{ borderColor: colors.gray.primary }}
              ></textarea>
            </div>
            <div className="mt-6 text-center">
              <button 
                className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 shadow-md hover:shadow-lg"
                style={{ 
                  backgroundColor: colors.green.primary,
                  backgroundImage: `linear-gradient(to right, ${colors.green.primary}, ${colors.green.dark})`
                }}
              >
                Submit Inquiry
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;