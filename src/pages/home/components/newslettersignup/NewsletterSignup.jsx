import React, { useState } from "react";
import {
  Mail,
  Check,
  Building,
  Home,
  HardHat,
  Construction,
  Bell,
  Star,
  Award,
  Shield,
  Phone,
  MapPin,
} from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      // Reset after success message
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setConsent(false);
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section 
        className="py-8 lg:py-10 px-3 relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.navy}, ${colors.navyLight}, ${colors.navy})`
        }}
      >
        <div className="absolute inset-0">
          <div 
            className="absolute top-6 left-6 w-24 h-24 rounded-full blur-xl animate-pulse"
            style={{ backgroundColor: `${colors.orange}33` }}
          ></div>
          <div 
            className="absolute bottom-12 right-12 w-20 h-20 rounded-full blur-xl animate-bounce"
            style={{ backgroundColor: `${colors.forest}33` }}
          ></div>
        </div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div 
            className="rounded-xl p-4 md:p-6 shadow-lg"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, ${colors.orange}, ${colors.orangeDark})`
              }}
            >
              <Award className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              Welcome to BuagoPula Construction Updates!
            </h2>

            <p className="text-sm mb-4" style={{ color: '#E5E7EB' }}>
              Thank you for subscribing! You'll now receive exclusive construction insights, 
              project updates, and industry trends from Zimbabwe's trusted construction partner.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <div className="flex items-center space-x-1" style={{ color: '#D1D5DB' }}>
                <Bell className="w-4 h-4" style={{ color: colors.orange }} />
                <span>Project Updates & Insights</span>
              </div>
              <div className="flex items-center space-x-1" style={{ color: '#D1D5DB' }}>
                <Building className="w-4 h-4" style={{ color: colors.orange }} />
                <span>Industry Trends & Tips</span>
              </div>
              <div className="flex items-center space-x-1" style={{ color: '#D1D5DB' }}>
                <HardHat className="w-4 h-4" style={{ color: colors.orange }} />
                <span>Exclusive Service Offers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="py-8 lg:py-10 px-3 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${colors.navy}, ${colors.navyLight}, ${colors.navy})`
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-64 h-64 rounded-full blur-2xl"
          style={{ backgroundColor: `${colors.orange}1A` }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-2xl"
          style={{ backgroundColor: `${colors.forest}1A` }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Building className="w-48 h-48" style={{ color: 'rgba(255, 255, 255, 0.05)' }} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          className="rounded-xl shadow-lg overflow-hidden"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="lg:flex">
            {/* Left Panel - Construction Focused */}
            <div 
              className="lg:w-2/5 p-4 md:p-6 text-white relative"
              style={{ 
                background: `linear-gradient(135deg, ${colors.orange}, ${colors.orangeDark})`
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow"
                    style={{ backgroundColor: 'white' }}
                  >
                    <Award className="w-5 h-5" style={{ color: colors.orange }} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold">Construction Industry Insider</h2>
                </div>

                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#FED7AA' }}>
                  Get exclusive access to project insights, construction trends, industry updates, 
                  and special offers from Zimbabwe's trusted construction experts.
                </p>

                {/* Service Icons */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  <div 
                    className="flex items-center gap-1 px-2 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <Home className="w-3 h-3" />
                    <span className="text-xs">Residential</span>
                  </div>
                  <div 
                    className="flex items-center gap-1 px-2 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <Building className="w-3 h-3" />
                    <span className="text-xs">Commercial</span>
                  </div>
                  <div 
                    className="flex items-center gap-1 px-2 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <Construction className="w-3 h-3" />
                    <span className="text-xs">Infrastructure</span>
                  </div>
                  <div 
                    className="flex items-center gap-1 px-2 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <HardHat className="w-3 h-3" />
                    <span className="text-xs">Consulting</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'white' }}
                    >
                      <Building className="w-3 h-3" style={{ color: colors.orange }} />
                    </div>
                    <span className="text-sm">Exclusive construction insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'white' }}
                    >
                      <Bell className="w-3 h-3" style={{ color: colors.orange }} />
                    </div>
                    <span className="text-sm">Project updates & case studies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'white' }}
                    >
                      <Award className="w-3 h-3" style={{ color: colors.orange }} />
                    </div>
                    <span className="text-sm">Industry trends & best practices</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'white' }}
                    >
                      <Shield className="w-3 h-3" style={{ color: colors.orange }} />
                    </div>
                    <span className="text-sm">Special service offers & packages</span>
                  </div>
                </div>

                <p className="text-xs" style={{ color: '#FED7AA' }}>
                  Join <span style={{ fontWeight: 'bold', color: 'white' }}>250+</span> construction clients across Zimbabwe
                </p>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div 
              className="lg:w-3/5 p-4 md:p-6 relative"
              style={{ 
                backgroundColor: colors.offWhite
              }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.orange}, ${colors.orangeDark})`
                  }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: colors.navy }}>
                  Get Construction Industry Updates
                </h3>
              </div>

              <p className="mb-4 text-sm" style={{ color: colors.grayDark }}>
                Subscribe for exclusive construction insights, project updates, industry trends, 
                and special offers from BuagoPula Construction.
              </p>

              {/* Error Message */}
              {error && (
                <div 
                  className="mb-4 p-3 rounded-lg"
                  style={{ 
                    backgroundColor: '#FEF2F2',
                    border: '1px solid #FECACA'
                  }}
                >
                  <p className="text-xs" style={{ color: '#DC2626' }}>{error}</p>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label 
                    className="block text-xs font-bold mb-1"
                    style={{ color: colors.navy }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 transition-all"
                    style={{ 
                      borderColor: colors.grayLight,
                      color: colors.grayDark
                    }}
                    placeholder="your@email.com"
                    disabled={isLoading}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="h-4 w-4 border-gray-300 rounded focus:ring-2 mt-0.5"
                    style={{ 
                      color: colors.orange,
                      borderColor: colors.gray
                    }}
                    disabled={isLoading}
                  />
                  <label 
                    className="text-xs leading-relaxed"
                    style={{ color: colors.grayDark }}
                  >
                    I agree to receive construction updates, industry insights, and promotions from BuagoPula Construction.{" "}
                    <span style={{ color: colors.orange, fontWeight: '600' }}>Unsubscribe anytime.</span>
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !email || !consent}
                  className="w-full text-white font-bold py-2.5 rounded-lg text-sm disabled:opacity-60 transition-all duration-300 focus:outline-none focus:ring-1 hover:scale-105 shadow"
                  style={{ 
                    backgroundColor: colors.forest,
                    boxShadow: `0 4px 14px ${colors.forest}40`
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading && email && consent) {
                      e.currentTarget.style.backgroundColor = colors.forestDark;
                      e.currentTarget.style.boxShadow = `0 6px 20px ${colors.forest}60`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isLoading && email && consent) {
                      e.currentTarget.style.backgroundColor = colors.forest;
                      e.currentTarget.style.boxShadow = `0 4px 14px ${colors.forest}40`;
                    }
                  }}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-1">
                      <div 
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                      ></div>
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    "Subscribe for Construction Updates"
                  )}
                </button>
              </div>

              {/* Construction Benefits */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs" style={{ color: colors.gray }}>
                <div className="flex items-center space-x-1">
                  <Home className="w-3 h-3" style={{ color: colors.orange }} />
                  <span>Residential Projects</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Building className="w-3 h-3" style={{ color: colors.orange }} />
                  <span>Commercial Construction</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Construction className="w-3 h-3" style={{ color: colors.orange }} />
                  <span>Infrastructure Updates</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bell className="w-3 h-3" style={{ color: colors.orange }} />
                  <span>Industry Trends</span>
                </div>
              </div>

              <p className="mt-4 text-xs flex items-center" style={{ color: colors.gray }}>
                <Shield className="w-3 h-3 mr-1" style={{ color: colors.forest }} />
                Your privacy is important. We'll never share your email or spam you.
              </p>

              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t" style={{ borderColor: colors.grayLight }}>
                <div className="text-xs" style={{ color: colors.grayDark }}>
                  <p className="font-medium mb-1">BuagoPula Construction</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3" style={{ color: colors.orange }} />
                      +263 77 392 7966
                    </span>
                    <span className="hidden sm:inline" style={{ color: colors.gray }}>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" style={{ color: colors.orange }} />
                      108 Central Ave, Harare
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Snippet */}
        <div className="mt-4 text-center">
          <div 
            className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              color: '#E5E7EB'
            }}
          >
            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-3 h-3 fill-current" 
                    style={{ color: colors.orange }}
                  />
                ))}
              </div>
              <span className="font-semibold ml-1">Rated 4.9/5</span>
            </div>
            <span style={{ color: colors.orange }}>•</span>
            <span>Trusted across Zimbabwe since 2009</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;