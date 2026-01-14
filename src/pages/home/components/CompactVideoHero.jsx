import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Award, Building, Home, Construction, HardHat, MapPin, Clock, Shield, Star, ChevronDown } from 'lucide-react';

const ConstructionVideoHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleGetQuote = () => {
    console.log('Navigate to /contact');
  };

  const handleViewProjects = () => {
    console.log('Navigate to /projects');
  };

  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' });
  };

  return (
    <section className="relative h-[75vh] min-h-[500px] overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      {/* Background Video */}
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
          style={{ filter: 'brightness(0.5) saturate(1.1) contrast(1.05)' }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-construction-site-time-lapse-9032/1080p.mp4" type="video/mp4"/>
        </video>

        {/* Modern Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-900/60 to-blue-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-transparent to-blue-950/40"></div>

        {/* Top Trust Bar */}
        <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-b from-blue-950/80 to-transparent backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-3 py-2">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-3 h-3 text-orange-400" />
                </div>
                <span className="text-xs text-white font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Clock className="w-3 h-3 text-green-400" />
                </div>
                <span className="text-xs text-white font-semibold">On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Award className="w-3 h-3 text-amber-400" />
                </div>
                <span className="text-xs text-white font-semibold">15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-5xl mx-auto px-3 md:px-6 text-center">
            
            {/* Premium Badge */}
            <div className="inline-flex items-center mb-4 bg-gradient-to-r from-orange-500/30 to-amber-500/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-orange-400/40 shadow-md">
              <Award className="w-3 h-3 text-orange-300 mr-1.5" />
              <span className="text-xs font-bold text-white tracking-wide">PREMIUM CONSTRUCTION SERVICES</span>
              <Award className="w-3 h-3 text-orange-300 ml-1.5" />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-snug">
              <span className="block text-white drop-shadow-xl">
                Building Zimbabwe's
              </span>
              <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent mt-1 drop-shadow-xl">
                Future with Excellence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-gray-200 mb-4 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow">
              Transform your vision into reality with Zimbabwe's most trusted construction partner
            </p>

            {/* Service Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="group bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 hover:bg-orange-500/30 hover:border-orange-400/50 transition-all duration-200 cursor-default">
                <div className="flex items-center gap-1.5">
                  <Home className="w-3 h-3 text-white group-hover:text-orange-300 transition-colors" />
                  <span className="text-xs text-white font-semibold">Residential</span>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 hover:bg-orange-500/30 hover:border-orange-400/50 transition-all duration-200 cursor-default">
                <div className="flex items-center gap-1.5">
                  <Building className="w-3 h-3 text-white group-hover:text-orange-300 transition-colors" />
                  <span className="text-xs text-white font-semibold">Commercial</span>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 hover:bg-orange-500/30 hover:border-orange-400/50 transition-all duration-200 cursor-default">
                <div className="flex items-center gap-1.5">
                  <Construction className="w-3 h-3 text-white group-hover:text-orange-300 transition-colors" />
                  <span className="text-xs text-white font-semibold">Infrastructure</span>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 hover:bg-orange-500/30 hover:border-orange-400/50 transition-all duration-200 cursor-default">
                <div className="flex items-center gap-1.5">
                  <HardHat className="w-3 h-3 text-white group-hover:text-orange-300 transition-colors" />
                  <span className="text-xs text-white font-semibold">Project Management</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <button 
                onClick={handleGetQuote}
                className="group relative bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-2.5 px-6 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30 overflow-hidden"
              >
                <span className="relative z-10 text-sm flex items-center gap-1.5">
                  <HardHat className="w-4 h-4" />
                  GET FREE QUOTE
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
              
              <button 
                onClick={handleViewProjects}
                className="group bg-white/15 backdrop-blur-md hover:bg-white/25 text-white font-bold py-2.5 px-6 rounded-full border border-white/40 hover:border-orange-400 transition-all duration-200 transform hover:scale-105 shadow text-sm"
              >
                <span className="flex items-center gap-1.5">
                  <Building className="w-4 h-4 group-hover:text-orange-300 transition-colors" />
                  VIEW PROJECTS
                </span>
              </button>
            </div>

            {/* Contact & Rating Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2.5 border border-white/20 inline-block shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-white font-semibold">4.9/5 Rating</span>
                </div>
                <div className="hidden md:block h-4 w-px bg-white/30"></div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-orange-400" />
                  <span className="text-xs text-white font-semibold">108 Central Ave, Harare</span>
                </div>
                <div className="hidden md:block h-4 w-px bg-white/30"></div>
                <a 
                  href="tel:+263773927966"
                  className="flex items-center gap-1.5 hover:text-orange-300 transition-colors"
                >
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">📞</span>
                  </div>
                  <span className="text-xs text-white font-bold">+263 77 392 7966</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large Center Play Button (when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center z-25 pointer-events-none">
            <button
              onClick={togglePlay}
              className="pointer-events-auto group relative bg-gradient-to-br from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white p-5 rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-orange-500/30"
            >
              <Play className="w-8 h-8 fill-current translate-x-0.5" />
              
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </button>
          </div>
        )}

        {/* Video Controls - Bottom Right */}
        <div className="absolute bottom-4 right-4 flex gap-2 z-30">
          <button
            onClick={togglePlay}
            className="group bg-blue-900/80 backdrop-blur-md hover:bg-orange-500 text-white p-2 rounded-full border border-white/30 hover:border-orange-400 transition-all duration-200 transform hover:scale-110 shadow"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 fill-current" />
            )}
          </button>
          
          <button
            onClick={toggleMute}
            className="group bg-blue-900/80 backdrop-blur-md hover:bg-orange-500 text-white p-2 rounded-full border border-white/30 hover:border-orange-400 transition-all duration-200 transform hover:scale-110 shadow"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-white animate-bounce cursor-pointer hover:text-orange-400 transition-colors"
          aria-label="Scroll down"
        >
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-xs">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 right-8 w-16 h-16 border border-orange-400/20 rounded-full animate-float-slow">
          <Building className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-orange-400/30" />
        </div>
        <div className="absolute bottom-1/4 left-12 w-12 h-12 border border-blue-400/20 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}>
          <Home className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-blue-400/30" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-orange-500/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-blue-500/10 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 to-transparent py-2 z-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-gray-300">
            <span className="font-semibold text-orange-400 text-xs">BUAGOPULA CONSTRUCTION</span>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-xs">Email: buagopulaproperties@gmail.com</span>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-xs">250+ Projects</span>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-xs">98% Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(5deg);
          }
          75% {
            transform: translateY(-8px) rotate(-5deg);
          }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ConstructionVideoHero;