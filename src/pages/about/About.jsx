import React, { useState } from "react";
import { 
  Building, Home, HardHat, Construction, 
  Award, Users, Clock, MapPin, Phone, Mail, 
  Instagram, Facebook, Linkedin, ChevronRight,
  Shield, Zap, Check, Briefcase, Wrench, Star
} from "lucide-react";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";

import { useNavigate } from "react-router-dom";

// Import images - update these paths as needed
import AboutHero from "../../assets/images/fla18.jpeg";
import FounderImage from "../../assets/images/b01.jpg";
import TeamImage from "../../assets/images/b02.jpg";
import ProjectImage from "../../assets/images/b03.jpg";

const About = () => {
  const navigate = useNavigate();
  const [activeStory, setActiveStory] = useState("beginning");

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

  const teamMembers = [
    {
      id: 1,
      name: "James Makoni",
      role: "Founder & CEO",
      bio: "15+ years experience in construction management and civil engineering.",
      expertise: ["Project Management", "Structural Engineering", "Quality Control"],
      image: FounderImage
    },
    {
      id: 2,
      name: "Sarah Chikwava",
      role: "Head of Operations",
      bio: "12 years experience in construction operations and site management.",
      expertise: ["Site Management", "Safety Compliance", "Team Leadership"],
      image: TeamImage
    },
    {
      id: 3,
      name: "Thomas Mapfumo",
      role: "Senior Project Manager",
      bio: "Specializes in large-scale commercial and infrastructure projects.",
      expertise: ["Commercial Construction", "Infrastructure", "Budget Control"],
      image: ProjectImage
    }
  ];

  const storyTimeline = [
    {
      year: "2009",
      title: "The Beginning",
      description: "Founded as a small residential construction company in Harare.",
      icon: <Home className="w-4 h-4" />
    },
    {
      year: "2014",
      title: "Expansion",
      description: "Expanded into commercial construction and project management.",
      icon: <Building className="w-4 h-4" />
    },
    {
      year: "2018",
      title: "Infrastructure Division",
      description: "Established road and infrastructure development services.",
      icon: <Construction className="w-4 h-4" />
    },
    {
      year: "2023",
      title: "National Recognition",
      description: "Recognized as one of Zimbabwe's top construction companies.",
      icon: <Award className="w-4 h-4" />
    }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity & Quality",
      description: "We deliver projects with uncompromising quality and transparency."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Craftsmanship",
      description: "Skilled professionals using premium materials and modern techniques."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Partnership",
      description: "Collaborative approach to understand and exceed client expectations."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery",
      description: "Committed to delivering projects on schedule, every time."
    }
  ];

  const services = [
    { icon: <Home className="w-4 h-4" />, name: "Residential", count: "150+ Projects" },
    { icon: <Building className="w-4 h-4" />, name: "Commercial", count: "50+ Projects" },
    { icon: <Wrench className="w-4 h-4" />, name: "Renovations", count: "80+ Projects" },
    { icon: <Construction className="w-4 h-4" />, name: "Infrastructure", count: "30+ Projects" },
    { icon: <HardHat className="w-4 h-4" />, name: "Consulting", count: "Expert Team" },
    { icon: <Briefcase className="w-4 h-4" />, name: "Management", count: "Complete Service" },
  ];

  const statistics = [
    { number: "250+", label: "Projects Completed", icon: <Building className="w-4 h-4" /> },
    { number: "15+", label: "Years Experience", icon: <Clock className="w-4 h-4" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-4 h-4" /> },
    { number: "50+", label: "Expert Team", icon: <Users className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { platform: "Facebook", url: "https://facebook.com/buagopulaconstruction", icon: <Facebook className="w-4 h-4" /> },
    { platform: "Instagram", url: "https://instagram.com/buagopulaconstruction", icon: <Instagram className="w-4 h-4" /> },
    { platform: "LinkedIn", url: "https://linkedin.com/company/buagopula", icon: <Linkedin className="w-4 h-4" /> },
  ];

  const handleGetQuote = () => {
    navigate("/contact");
  };

  const handleContact = () => {
    window.location.href = 'tel:+263773927966';
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-14" style={{ backgroundColor: colors.offWhite }}>
        {/* Hero Section */}
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${AboutHero})`,
              filter: "brightness(0.3)"
            }}
          />
          <div className="relative z-10 h-full flex items-center justify-center text-center px-3">
            <div>
              <div 
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full mb-3 border"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <Building className="w-3.5 h-3.5" style={{ color: colors.orange }} />
                <span 
                  className="text-xs font-semibold"
                  style={{ color: colors.orange }}
                >
                  OUR COMPANY
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                About BuagoPula Construction
              </h1>
              <p className="text-sm max-w-2xl mx-auto" style={{ color: '#E5E7EB' }}>
                Building Zimbabwe's future with excellence, quality, and integrity
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-3 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div 
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full mb-3 shadow-sm"
                style={{ 
                  backgroundColor: 'white',
                  border: `1px solid ${colors.grayLight}`
                }}
              >
                <Building className="w-3.5 h-3.5" style={{ color: colors.orange }} />
                <span 
                  className="text-xs font-semibold"
                  style={{ color: colors.orangeDark }}
                >
                  WELCOME
                </span>
              </div>
              
              <h2 
                className="text-xl sm:text-2xl font-bold mb-3"
                style={{ color: colors.navy }}
              >
                Building Excellence Since 2009
              </h2>
              
              <p 
                className="text-sm mb-3"
                style={{ color: colors.grayDark }}
              >
                Founded in Harare, BuagoPula began with a vision to transform Zimbabwe's construction industry with quality workmanship and reliable service.
              </p>
              
              <p 
                className="text-sm mb-4"
                style={{ color: colors.grayDark }}
              >
                Today, we're a trusted partner for residential, commercial, and infrastructure projects across Zimbabwe, delivering excellence in every build.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={handleGetQuote}
                  className="px-5 py-2.5 font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
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
                  GET FREE QUOTE
                </button>
                <button 
                  onClick={() => navigate("/projects")}
                  className="px-5 py-2.5 font-semibold rounded-lg transition-all duration-300 text-sm"
                  style={{ 
                    backgroundColor: 'white',
                    border: `1px solid ${colors.orange}`,
                    color: colors.orangeDark
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.grayLight;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                  }}
                >
                  VIEW PROJECTS
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {statistics.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  style={{ 
                    border: `1px solid ${colors.grayLight}`
                  }}
                >
                  <div 
                    className="mb-1.5 flex justify-center"
                    style={{ color: colors.orange }}
                  >
                    {stat.icon}
                  </div>
                  <div 
                    className="text-xl font-bold mb-0.5"
                    style={{ color: colors.navy }}
                  >
                    {stat.number}
                  </div>
                  <p 
                    className="text-xs"
                    style={{ color: colors.grayDark }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Story Timeline */}
        <div 
          className="py-8"
          style={{ 
            background: `linear-gradient(135deg, ${colors.grayLight}, white)`
          }}
        >
          <div className="max-w-7xl mx-auto px-3">
            <div className="text-center mb-6">
              <h2 
                className="text-xl sm:text-2xl font-bold mb-2"
                style={{ color: colors.navy }}
              >
                Our Journey
              </h2>
              <p 
                className="text-sm max-w-2xl mx-auto"
                style={{ color: colors.grayDark }}
              >
                From a small construction team to a nationally recognized company
              </p>
            </div>

            <div className="space-y-4">
              {storyTimeline.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm"
                  style={{ 
                    border: `1px solid ${colors.grayLight}`
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div style={{ color: colors.orange }}>
                      {item.icon}
                    </div>
                    <div>
                      <span 
                        className="font-bold text-sm"
                        style={{ color: colors.orange }}
                      >
                        {item.year}
                      </span>
                      <h3 
                        className="text-base font-bold"
                        style={{ color: colors.navy }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p 
                    className="text-xs"
                    style={{ color: colors.grayDark }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="max-w-7xl mx-auto px-3 py-8">
          <div className="text-center mb-6">
            <h2 
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ color: colors.navy }}
            >
              Our Core Values
            </h2>
            <p 
              className="text-sm max-w-2xl mx-auto"
              style={{ color: colors.grayDark }}
            >
              Principles that guide every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{ 
                  border: `1px solid ${colors.grayLight}`
                }}
              >
                <div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.grayLight}, white)`,
                    color: colors.orange
                  }}
                >
                  {value.icon}
                </div>
                <h3 
                  className="text-sm font-bold mb-1.5"
                  style={{ color: colors.navy }}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-xs"
                  style={{ color: colors.grayDark }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div 
          className="py-8"
          style={{ 
            background: `linear-gradient(135deg, ${colors.navy}, ${colors.navyLight})`
          }}
        >
          <div className="max-w-7xl mx-auto px-3">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Leadership Team</h2>
              <p 
                className="text-sm max-w-2xl mx-auto"
                style={{ color: '#D1D5DB' }}
              >
                Experienced professionals dedicated to construction excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="rounded-lg overflow-hidden hover:transition-all duration-200"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-white mb-1">{member.name}</h3>
                    <p 
                      className="text-xs font-medium mb-2"
                      style={{ color: colors.orange }}
                    >
                      {member.role}
                    </p>
                    <p 
                      className="text-xs mb-3"
                      style={{ color: '#E5E7EB' }}
                    >
                      {member.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-xs rounded-full border"
                          style={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: '#D1D5DB',
                            borderColor: 'rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="max-w-7xl mx-auto px-3 py-8">
          <div className="text-center mb-6">
            <h2 
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ color: colors.navy }}
            >
              Our Expertise
            </h2>
            <p 
              className="text-sm max-w-2xl mx-auto"
              style={{ color: colors.grayDark }}
            >
              Comprehensive construction services for every project need
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-lg shadow-sm text-center hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                style={{ 
                  border: `1px solid ${colors.grayLight}`
                }}
              >
                <div 
                  className="mb-1.5"
                  style={{ color: colors.navy }}
                >
                  {service.icon}
                </div>
                <h3 
                  className="text-xs font-bold mb-0.5"
                  style={{ color: colors.navy }}
                >
                  {service.name}
                </h3>
                <p 
                  className="text-xs"
                  style={{ color: colors.gray }}
                >
                  {service.count}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Office Location */}
        <div 
          className="py-8"
          style={{ 
            background: `linear-gradient(135deg, ${colors.grayLight}, white)`
          }}
        >
          <div className="max-w-7xl mx-auto px-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div 
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full mb-3 shadow-sm"
                  style={{ 
                    backgroundColor: 'white',
                    border: `1px solid ${colors.grayLight}`
                  }}
                >
                  <MapPin className="w-3.5 h-3.5" style={{ color: colors.orange }} />
                  <span 
                    className="text-xs font-semibold"
                    style={{ color: colors.orangeDark }}
                  >
                    OUR OFFICE
                  </span>
                </div>
                
                <h2 
                  className="text-xl sm:text-2xl font-bold mb-3"
                  style={{ color: colors.navy }}
                >
                  Visit Our Office
                </h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5" style={{ color: colors.orange }} />
                    <div>
                      <p 
                        className="font-medium text-sm"
                        style={{ color: colors.navy }}
                      >
                        Address
                      </p>
                      <p 
                        className="text-xs"
                        style={{ color: colors.grayDark }}
                      >
                        108 Central Avenue, Harare, Zimbabwe
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 mt-0.5" style={{ color: colors.orange }} />
                    <div>
                      <p 
                        className="font-medium text-sm"
                        style={{ color: colors.navy }}
                      >
                        Phone
                      </p>
                      <a 
                        href="tel:+263773927966" 
                        className="font-medium text-sm"
                        style={{ color: colors.orange }}
                      >
                        +263 77 392 7966
                      </a>
                      <p className="text-xs mt-0.5" style={{ color: colors.gray }}>
                        Alt: +260 97 223 2866
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Mail className="w-4 h-4 mt-0.5" style={{ color: colors.orange }} />
                    <div>
                      <p 
                        className="font-medium text-sm"
                        style={{ color: colors.navy }}
                      >
                        Email
                      </p>
                      <a 
                        href="mailto:buagopulaproperties@gmail.com" 
                        className="font-medium text-sm"
                        style={{ color: colors.orange }}
                      >
                        buagopulaproperties@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 mt-0.5" style={{ color: colors.orange }} />
                    <div>
                      <p 
                        className="font-medium text-sm"
                        style={{ color: colors.navy }}
                      >
                        Hours
                      </p>
                      <p 
                        className="text-xs"
                        style={{ color: colors.grayDark }}
                      >
                        Mon-Sat: 8:00 AM - 6:00 PM
                      </p>
                      <p 
                        className="text-xs"
                        style={{ color: colors.gray }}
                      >
                        By appointment only
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleContact}
                    className="px-4 py-2 font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
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
                    Call Now
                  </button>
                  
                  <button 
                    onClick={() => navigate("/contact")}
                    className="px-4 py-2 font-semibold rounded-lg transition-all duration-300 text-sm"
                    style={{ 
                      backgroundColor: 'white',
                      border: `1px solid ${colors.orange}`,
                      color: colors.orangeDark
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.grayLight;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    GET QUOTE
                  </button>
                </div>
              </div>
              
              <div 
                className="bg-white p-4 rounded-lg shadow-md"
                style={{ 
                  border: `1px solid ${colors.grayLight}`
                }}
              >
                <h3 
                  className="text-base font-bold mb-3"
                  style={{ color: colors.navy }}
                >
                  Connect With Us
                </h3>
                <p 
                  className="text-xs mb-4"
                  style={{ color: colors.grayDark }}
                >
                  Follow our latest projects and industry insights
                </p>
                
                <div className="space-y-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded hover:transition-colors group"
                      style={{ 
                        backgroundColor: colors.grayLight
                      }}
                    >
                      <div style={{ color: colors.orange }}>
                        {social.icon}
                      </div>
                      <span 
                        className="font-medium text-sm"
                        style={{ color: colors.navy }}
                      >
                        Follow on {social.platform}
                      </span>
                      <ChevronRight 
                        className="w-3 h-3 ml-auto group-hover:transition-colors"
                        style={{ color: colors.gray }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-7xl mx-auto px-3 py-8">
          <div 
            className="rounded-xl p-6 text-center text-white shadow-xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.navy}, ${colors.navyLight})`
            }}
          >
            <div 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Building className="w-6 h-6 text-white" />
            </div>
            
            <h2 className="text-xl font-bold mb-2">
              Ready to Build Your Vision?
            </h2>
            
            <p 
              className="text-sm mb-4 max-w-2xl mx-auto"
              style={{ color: '#E5E7EB' }}
            >
              Partner with Zimbabwe's trusted construction experts for quality, reliability, and excellence
            </p>

            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <button 
                onClick={handleGetQuote}
                className="px-4 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center"
                style={{ 
                  backgroundColor: 'white',
                  color: colors.navy
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.grayLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                }}
              >
                GET FREE QUOTE
                <ChevronRight className="ml-1.5 w-3.5 h-3.5" />
              </button>
              
              <button 
                onClick={handleContact}
                className="px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 inline-flex items-center justify-center"
                style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid white',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                Call +263 77 392 7966
              </button>
            </div>
            
            <p 
              className="mt-4 text-xs"
              style={{ color: '#D1D5DB' }}
            >
              Serving Zimbabwe since 2009
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;