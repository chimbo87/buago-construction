import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Building,
  Home,
  HardHat,
  Construction,
  Shield,
  Award,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import project01 from "../../../../assets/images/construction.jpg";
import project02 from "../../../../assets/images/homebanner.jpeg";
import project03 from "../../../../assets/images/work2.jpeg";
import project04 from "../../../../assets/images/fla34.jpeg";
import project05 from "../../../../assets/images/fla35.jpeg";
import project06 from "../../../../assets/images/fla36.jpeg";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  // Color palette
  const colors = {
    navy: "#0A2342",
    navyLight: "#1E3A5F",
    orange: "#CC5500",
    orangeDark: "#B3541E",
    forest: "#047857",
    forestDark: "#065F46",
    gray: "#6B7280",
    grayDark: "#4B5563",
    grayLight: "#F3F4F6",
    offWhite: "#F9FAFB",
  };

  const testimonials = [
    {
      id: 1,
      name: "James Chikwava",
      role: "Residential Construction Client",
      content:
        "BuagoPula built our dream home in Harare with exceptional quality and attention to detail. Their team was professional, on-time, and within budget. Highly recommended!",
      rating: 5,
      bgImage: project01,
      serviceIcon: <Home className="w-5 h-5" style={{ color: colors.navy }} />,
    },
    {
      id: 2,
      name: "Naledi Business Centre",
      role: "Commercial Building Project",
      content:
        "Our commercial complex was completed 3 weeks ahead of schedule. The quality of work is outstanding and their project management was excellent throughout.",
      rating: 5,
      bgImage: project02,
      serviceIcon: (
        <Building className="w-5 h-5" style={{ color: colors.navy }} />
      ),
    },
    {
      id: 3,
      name: "Thompson Family",
      role: "Home Renovation & Extension",
      content:
        "Complete renovation of our family home exceeded expectations. The team was clean, respectful, and delivered exactly what we envisioned. Truly professional.",
      rating: 5,
      bgImage: project03,
      serviceIcon: (
        <HardHat className="w-5 h-5" style={{ color: colors.navy }} />
      ),
    },
    {
      id: 4,
      name: "Zimbabwe Development Trust",
      role: "Infrastructure Project",
      content:
        "Road construction project completed with precision and durability. BuagoPula's expertise in infrastructure is unmatched in the region. Reliable partner.",
      rating: 5,
      bgImage: project04,
      serviceIcon: (
        <Construction className="w-5 h-5" style={{ color: colors.navy }} />
      ),
    },
    {
      id: 5,
      name: "Makoni Enterprises",
      role: "Project Management Client",
      content:
        "Their project management service saved us 20% on construction costs while maintaining top quality. Expert advice and flawless execution.",
      rating: 5,
      bgImage: project05,
      serviceIcon: <Award className="w-5 h-5" style={{ color: colors.navy }} />,
    },
    {
      id: 6,
      name: "Grace & Tendai",
      role: "Custom Home Construction",
      content:
        "From design to completion, BuagoPula delivered our unique custom home perfectly. Their attention to detail and customer service was exceptional.",
      rating: 5,
      bgImage: project06,
      serviceIcon: (
        <Shield className="w-5 h-5" style={{ color: colors.navy }} />
      ),
    },
  ];

  // Social media links for construction business
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/buagopulaconstruction",
      icon: Facebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/buagopulaconstruction",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/buagopula",
      icon: Linkedin,
    },
  ];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("");
  };

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying, isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? "fill-current" : ""}`}
        style={{
          color: index < rating ? colors.orange : colors.grayLight,
        }}
      />
    ));
  };

  const handleReadReviews = () => {
    navigate("/reviews");
  };

  const handleGetQuote = () => {
    navigate("/contact");
  };

  return (
    <section
      className="relative py-8 lg:py-12 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${colors.offWhite}, ${colors.grayLight})`,
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-64 h-64 rounded-full -translate-x-32 -translate-y-32 blur-2xl"
          style={{ backgroundColor: `${colors.orange}1A` }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full translate-x-32 translate-y-32 blur-2xl"
          style={{ backgroundColor: `${colors.navy}1A` }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Building
            className="w-48 h-48"
            style={{ color: `${colors.navy}1A` }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 shadow-lg"
            style={{
              background: `linear-gradient(to right, ${colors.navy}, ${colors.navyLight})`,
            }}
          >
            <Quote className="w-6 h-6" style={{ color: "#FFFFFF" }} />
          </div>

          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3 shadow-sm"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${colors.grayLight}`,
            }}
          >
            <Award className="w-4 h-4" style={{ color: colors.orange }} />
            <span
              className="text-xs font-bold"
              style={{ color: colors.orangeDark }}
            >
              CLIENT TESTIMONIALS
            </span>
          </div>

          <h2
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: colors.navy }}
          >
            What Our Clients Say About Us
          </h2>

          <p
            className="text-sm max-w-2xl mx-auto"
            style={{ color: colors.grayDark }}
          >
            Hear from satisfied clients across Zimbabwe who trusted BuagoPula
            Construction for their building projects
          </p>
        </div>

        {/* Main Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-12 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-105 transition-all duration-300 shadow-lg"
            style={{
              background: `linear-gradient(to right, ${colors.navy}, ${colors.navyLight})`,
              border: `1px solid ${colors.navy}`,
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-12 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-105 transition-all duration-300 shadow-lg"
            style={{
              background: `linear-gradient(to right, ${colors.orange}, ${colors.orangeDark})`,
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Card */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-3"
                  >
                    <div className="relative rounded-xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[350px] overflow-hidden group">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${testimonial.bgImage})`,
                        }}
                      />
                      {/* Gradient Overlay */}
                      <div
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${colors.navy}D9, ${colors.navyLight}B3, ${colors.navy}CC)`,
                        }}
                      />

                      {/* Service Icon */}
                      <div className="absolute top-4 right-4 z-10">
                        <div
                          className="bg-white/90 backdrop-blur-sm p-2 rounded-full"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                          }}
                        >
                          {testimonial.serviceIcon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col justify-center">
                        <div className="text-center">
                          {/* Stars */}
                          <div className="flex justify-center mb-4 space-x-0.5">
                            {renderStars(testimonial.rating)}
                          </div>

                          {/* Quote */}
                          <blockquote
                            className="text-base md:text-lg leading-relaxed mb-6 font-medium"
                            style={{ color: "#FFFFFF" }}
                          >
                            "{testimonial.content}"
                          </blockquote>

                          {/* Author */}
                          <div className="flex flex-col items-center">
                            <div className="relative mb-3">
                              <div
                                className="w-14 h-14 rounded-full flex items-center justify-center ring-2 shadow-lg"
                                style={{
                                  background: `linear-gradient(135deg, ${colors.orange}, ${colors.orangeDark})`,
                                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                                  borderColor: `${colors.orange}4D`,
                                }}
                              >
                                <span
                                  className="font-bold text-lg"
                                  style={{ color: "#FFFFFF" }}
                                >
                                  {getInitials(testimonial.name)}
                                </span>
                              </div>
                              <div
                                className="absolute -bottom-1 -right-1 rounded-full p-1 shadow-md"
                                style={{ backgroundColor: "#FFFFFF" }}
                              >
                                <div style={{ color: colors.orange }}>
                                  <Award className="w-3 h-3" />
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4
                                className="text-base font-bold"
                                style={{ color: "#FFFFFF" }}
                              >
                                {testimonial.name}
                              </h4>
                              <p
                                className="text-sm"
                                style={{ color: "#FED7AA" }}
                              >
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-8 h-1.5 shadow-lg"
                  : "w-2 h-2 hover:scale-125"
              }`}
              style={{
                backgroundColor:
                  currentIndex === index ? colors.orange : colors.grayLight,
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 max-w-md mx-auto">
          <div
            className="w-full h-1.5 rounded-full overflow-hidden"
            style={{ backgroundColor: colors.grayLight }}
          >
            <div
              className="h-full transition-all duration-300 ease-out"
              style={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                background: `linear-gradient(to right, ${colors.orange}, ${colors.orangeDark})`,
              }}
            />
          </div>
          <p
            className="text-center text-xs mt-2 font-medium"
            style={{ color: colors.grayDark }}
          >
            Testimonial {currentIndex + 1} of {testimonials.length}
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-6">
          <p className="text-sm mb-3" style={{ color: colors.grayDark }}>
            Follow our construction projects
          </p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full shadow-md text-gray-600 transition-all duration-300 hover:shadow-lg transform hover:scale-110"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: colors.grayDark,
                }}
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleReadReviews}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{
                background: `linear-gradient(to right, ${colors.navy}, ${colors.navyLight})`,
                color: "#FFFFFF",
              }}
            >
              Read More Reviews
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>

            <button
              onClick={handleGetQuote}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{
                backgroundColor: colors.forest,
                color: "#FFFFFF",
              }}
            >
              <HardHat className="mr-2 w-4 h-4" />
              GET FREE QUOTE
            </button>
          </div>

          <div className="mt-4">
            <p className="text-xs" style={{ color: colors.grayDark }}>
              Trusted by{" "}
              <span style={{ color: colors.orange, fontWeight: "bold" }}>
                250+
              </span>{" "}
              satisfied clients across Zimbabwe
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 text-xs">
              {["Residential", "Commercial", "Infrastructure"].map(
                (service, index) => (
                  <React.Fragment key={service}>
                    {index > 0 && (
                      <span style={{ color: colors.orange }}>•</span>
                    )}
                    <div className="flex items-center gap-1">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: colors.orange }}
                      ></div>
                      <span style={{ color: colors.gray }}>{service}</span>
                    </div>
                  </React.Fragment>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
