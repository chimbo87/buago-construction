import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, X, Grid, Film, Building, Home, Construction, HardHat } from "lucide-react";
import Project01 from "../../../assets/images/fla02.jpeg";
import Project02 from "../../../assets/images/fla32.jpeg";
import Project03 from "../../../assets/images/fla15.jpeg";
import Project04 from "../../../assets/images/fla26.jpeg";
import Project05 from "../../../assets/images/fla42.jpeg";
import Project06 from "../../../assets/images/fla22.jpeg";
import Project07 from "../../../assets/images/fla19.jpeg";
import Project08 from "../../../assets/images/fla39.jpeg";

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const videoRef = useRef(null);

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

  const videoData = [
    {
      id: 1,
      title: "Residential Construction Process",
      category: "residential",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-construction-site-crane-9048-large.mp4",
      thumbnail: Project01,
      duration: "2:15",
      views: "3.2k",
      date: "2024-01-15",
      description: "Complete home construction from foundation to finishing"
    },
    {
      id: 2,
      title: "Commercial Building Construction",
      category: "commercial",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-construction-site-building-construction-9049-large.mp4",
      thumbnail: Project02,
      duration: "1:45",
      views: "2.8k",
      date: "2024-01-10",
      description: "Multi-storey commercial complex development"
    },
    {
      id: 3,
      title: "Road Construction & Paving",
      category: "infrastructure",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-road-construction-9050-large.mp4",
      thumbnail: Project03,
      duration: "1:55",
      views: "2.1k",
      date: "2024-01-05",
      description: "Modern road construction techniques and equipment"
    },
    {
      id: 4,
      title: "Home Renovation Transformation",
      category: "renovation",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-construction-workers-working-9051-large.mp4",
      thumbnail: Project04,
      duration: "2:30",
      views: "1.9k",
      date: "2024-01-03",
      description: "Complete home renovation and modernization"
    },
    {
      id: 5,
      title: "Project Site Management",
      category: "management",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-construction-site-survey-9052-large.mp4",
      thumbnail: Project05,
      duration: "3:05",
      views: "1.7k",
      date: "2023-12-28",
      description: "Professional construction site supervision and management"
    },
    {
      id: 6,
      title: "Foundation Work & Excavation",
      category: "residential",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-excavator-digging-9053-large.mp4",
      thumbnail: Project06,
      duration: "1:40",
      views: "2.4k",
      date: "2023-12-25",
      description: "Ground preparation and foundation construction"
    },
    {
      id: 7,
      title: "Steel Structure Assembly",
      category: "commercial",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-steel-structure-construction-9054-large.mp4",
      thumbnail: Project07,
      duration: "2:20",
      views: "1.5k",
      date: "2023-12-20",
      description: "Industrial steel structure construction process"
    },
    {
      id: 8,
      title: "Project Completion & Handover",
      category: "management",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-finished-building-9055-large.mp4",
      thumbnail: Project08,
      duration: "1:50",
      views: "1.8k",
      date: "2023-12-15",
      description: "Final inspection and project handover process"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", count: videoData.length, icon: <Building className="w-3 h-3" /> },
    { id: "residential", name: "Residential", count: videoData.filter(v => v.category === "residential").length, icon: <Home className="w-3 h-3" /> },
    { id: "commercial", name: "Commercial", count: videoData.filter(v => v.category === "commercial").length, icon: <Building className="w-3 h-3" /> },
    { id: "infrastructure", name: "Infrastructure", count: videoData.filter(v => v.category === "infrastructure").length, icon: <Construction className="w-3 h-3" /> },
    { id: "renovation", name: "Renovations", count: videoData.filter(v => v.category === "renovation").length, icon: <HardHat className="w-3 h-3" /> },
    { id: "management", name: "Management", count: videoData.filter(v => v.category === "management").length, icon: <Film className="w-3 h-3" /> },
  ];

  const filteredVideos = selectedCategory === "all" 
    ? videoData 
    : videoData.filter(video => video.category === selectedCategory);

  const handleVideoClick = (video, index) => {
    setSelectedVideo(video);
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filteredVideos.length;
    const nextVideo = filteredVideos[nextIndex];
    setSelectedVideo(nextVideo);
    setCurrentIndex(nextIndex);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + filteredVideos.length) % filteredVideos.length;
    const prevVideo = filteredVideos[prevIndex];
    setSelectedVideo(prevVideo);
    setCurrentIndex(prevIndex);
    setIsPlaying(true);
  };

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedVideo) return;
      
      switch(e.key) {
        case 'Escape':
          handleCloseModal();
          break;
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case ' ':
          e.preventDefault();
          togglePlay();
          break;
        case 'm':
        case 'M':
          toggleMute();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo, isPlaying, isMuted]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <>
      <section 
        className="py-6 lg:py-8 px-2 sm:px-3"
        style={{ 
          background: `linear-gradient(to bottom, ${colors.offWhite}, ${colors.grayLight})`
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <div 
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full mb-2 shadow-sm"
              style={{ 
                backgroundColor: 'white',
                border: `1px solid ${colors.grayLight}`
              }}
            >
              <Film className="w-3.5 h-3.5" style={{ color: colors.orange }} />
              <span 
                className="text-xs font-semibold"
                style={{ color: colors.orangeDark }}
              >
                CONSTRUCTION VIDEOS
              </span>
            </div>
            <h2 
              className="text-xl sm:text-2xl font-bold mb-1"
              style={{ color: colors.navy }}
            >
              Construction Projects in Action
            </h2>
            <p 
              className="text-xs max-w-2xl mx-auto"
              style={{ color: colors.grayDark }}
            >
              Watch behind the scenes of our construction projects and building processes
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all flex items-center gap-1 ${
                    selectedCategory === category.id
                      ? "text-white shadow-md"
                      : "bg-white border text-gray-700 hover:bg-gray-50"
                  }`}
                  style={selectedCategory === category.id ? {
                    backgroundColor: colors.orange,
                    background: `linear-gradient(135deg, ${colors.orange}, ${colors.orangeDark})`
                  } : {
                    backgroundColor: 'white',
                    border: `1px solid ${colors.grayLight}`
                  }}
                >
                  {category.icon}
                  {category.name}
                  <span 
                    className="text-[10px] opacity-75"
                    style={selectedCategory === category.id ? {color: 'rgba(255,255,255,0.9)'} : {color: colors.gray}}
                  >
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded ${
                  viewMode === "grid"
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                style={viewMode === "grid" ? {backgroundColor: colors.orange} : {}}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded ${
                  viewMode === "list"
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                style={viewMode === "list" ? {backgroundColor: colors.orange} : {}}
              >
                <Film className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Video Grid/List */}
          {filteredVideos.length === 0 ? (
            <div className="text-center py-8">
              <Film className="w-12 h-12 mx-auto mb-2" style={{ color: colors.grayLight }} />
              <p 
                className="text-sm"
                style={{ color: colors.gray }}
              >
                No construction videos found.
              </p>
            </div>
          ) : (
            <div className={`
              ${viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" 
                : "space-y-3"
              }
            `}>
              {filteredVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={`
                    group cursor-pointer transition-all duration-200 hover:-translate-y-0.5
                    ${viewMode === "grid" 
                      ? "bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden" 
                      : "flex items-center gap-3 bg-white rounded-lg shadow-md hover:shadow-lg p-3"
                    }
                  `}
                  style={{ border: `1px solid ${colors.grayLight}` }}
                  onClick={() => handleVideoClick(video, index)}
                >
                  {/* Thumbnail */}
                  <div className={`
                    relative overflow-hidden
                    ${viewMode === "grid" ? "aspect-video" : "w-32 h-20 flex-shrink-0 rounded"}
                  `}>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Play Button Overlay */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ backgroundColor: `${colors.navy}80` }}
                    >
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
                      >
                        <Play className="w-5 h-5 fill-current ml-0.5" style={{ color: colors.orange }} />
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div 
                      className="absolute bottom-1.5 right-1.5 text-white text-[10px] px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
                    >
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className={`${viewMode === "grid" ? "p-3" : "flex-1"}`}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 
                        className="font-semibold text-sm line-clamp-1"
                        style={{ color: colors.navy }}
                      >
                        {video.title}
                      </h3>
                      {viewMode === "grid" && (
                        <span 
                          className="text-[10px]"
                          style={{ color: colors.gray }}
                        >
                          {formatDate(video.date)}
                        </span>
                      )}
                    </div>
                    
                    <p 
                      className="text-xs mb-1.5 line-clamp-2"
                      style={{ color: colors.grayDark }}
                    >
                      {video.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-2">
                        <span 
                          className="flex items-center gap-0.5"
                          style={{ color: colors.gray }}
                        >
                          <Play className="w-2.5 h-2.5" />
                          {video.views} views
                        </span>
                        <span 
                          className="px-1.5 py-0.5 rounded-full"
                          style={{ 
                            backgroundColor: `${colors.orange}15`,
                            color: colors.orangeDark
                          }}
                        >
                          {video.category}
                        </span>
                      </div>
                      {viewMode === "list" && (
                        <span style={{ color: colors.gray }}>{formatDate(video.date)}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-3 right-3 z-50 p-1.5 rounded-full"
            style={{ 
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 z-50 p-2 rounded-full hidden sm:block"
            style={{ 
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 z-50 p-2 rounded-full hidden sm:block"
            style={{ 
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Video Container */}
          <div className="relative w-full max-w-4xl">
            {/* Video Player */}
            <div className="relative rounded-lg overflow-hidden bg-black">
              <video
                ref={videoRef}
                className="w-full max-h-[60vh]"
                autoPlay
                muted={isMuted}
                onEnded={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls={false}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Video Controls */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-3"
                style={{ 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="text-white hover:transition-colors"
                      onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5 fill-current" />
                      )}
                    </button>
                    
                    <button
                      onClick={toggleMute}
                      className="text-white hover:transition-colors"
                      onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                    
                    <span className="text-white text-xs">
                      {currentIndex + 1} / {filteredVideos.length}
                    </span>
                  </div>
                  
                  <div className="text-white text-xs hidden sm:block">
                    <span 
                      className="px-1 rounded mx-0.5"
                      style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                    >
                      Space
                    </span> play/pause • 
                    <span 
                      className="px-1 rounded mx-0.5"
                      style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                    >
                      M
                    </span> mute • 
                    <span 
                      className="px-1 rounded mx-0.5"
                      style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                    >
                      ESC
                    </span> close
                  </div>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-3 text-white">
              <h2 className="text-lg font-bold mb-1.5">{selectedVideo.title}</h2>
              <p 
                className="text-sm mb-2"
                style={{ color: '#D1D5DB' }}
              >
                {selectedVideo.description}
              </p>
              
              <div className="flex items-center justify-between text-xs" style={{ color: '#9CA3AF' }}>
                <div className="flex items-center gap-3">
                  <span>{selectedVideo.views} views</span>
                  <span>{formatDate(selectedVideo.date)}</span>
                  <span>{selectedVideo.duration}</span>
                </div>
                <span 
                  className="px-1.5 py-0.5 rounded-full"
                  style={{ 
                    backgroundColor: `${colors.orange}30`,
                    color: colors.orange
                  }}
                >
                  {selectedVideo.category}
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 overflow-x-auto">
              <div className="flex gap-1.5 pb-1.5">
                {filteredVideos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => {
                      setSelectedVideo(video);
                      setCurrentIndex(index);
                      setIsPlaying(true);
                    }}
                    className={`flex-shrink-0 w-20 h-14 rounded overflow-hidden border transition-all ${
                      currentIndex === index 
                        ? 'ring-1' 
                        : 'border-transparent hover:border-white'
                    }`}
                    style={currentIndex === index ? {
                      borderColor: colors.orange,
                      boxShadow: `0 0 0 1px ${colors.orange}`
                    } : {
                      borderColor: 'transparent'
                    }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      {currentIndex === index && (
                        <div 
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ backgroundColor: `${colors.orange}20` }}
                        >
                          <Play className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        video::-webkit-media-controls {
          display: none !important;
        }
      `}</style>
    </>
  );
};

export default VideoGallery;