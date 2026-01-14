import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Building, Home, HardHat, Construction, Wrench } from "lucide-react";
import Project01 from "../../../assets/images/work2.jpeg";
import Project02 from "../../../assets/images/work3.jpeg";
import Project03 from "../../../assets/images/work4.jpeg";
import Project04 from "../../../assets/images/work5.jpeg";
import Project05 from "../../../assets/images/work6.jpeg";
import Project06 from "../../../assets/images/work8.jpeg";
import Project07 from "../../../assets/images/work7.jpeg";
import Project08 from "../../../assets/images/work9.jpeg";
import Project09 from "../../../assets/images/work10.jpeg";
import Project10 from "../../../assets/images/work11.jpeg";
import Project11 from "../../../assets/images/work12.jpeg";
import Project12 from "../../../assets/images/work13.jpeg";

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

// Construction gallery data
const galleryData = [
  { 
    id: 1, 
    name: "Modern Residential Home", 
    image: Project01,
    category: "residential",
    description: "Completed 2023 - Harare"
  },
  { 
    id: 2, 
    name: "Commercial Office Complex", 
    image: Project02,
    category: "commercial",
    description: "Completed 2022 - Harare CBD"
  },
  { 
    id: 3, 
    name: "Home Renovation Project", 
    image: Project03,
    category: "renovation",
    description: "Complete Transformation - Borrowdale"
  },
  { 
    id: 4, 
    name: "Road Construction", 
    image: Project04,
    category: "infrastructure",
    description: "Urban Road Development"
  },
  { 
    id: 5, 
    name: "Custom Luxury Home", 
    image: Project05,
    category: "residential",
    description: "Architectural Design - Glen Lorne"
  },
  { 
    id: 6, 
    name: "Shopping Complex", 
    image: Project06,
    category: "commercial",
    description: "Multi-storey Development"
  },
  { 
    id: 7, 
    name: "Industrial Warehouse", 
    image: Project07,
    category: "commercial",
    description: "Completed 2024 - Willowvale"
  },
  { 
    id: 8, 
    name: "Bridge Construction", 
    image: Project08,
    category: "infrastructure",
    description: "Rural Infrastructure Project"
  },
  { 
    id: 9, 
    name: "Office Interior Renovation", 
    image: Project09,
    category: "renovation",
    description: "Modern Workspace Design"
  },
  { 
    id: 10, 
    name: "Gated Community Development", 
    image: Project10,
    category: "residential",
    description: "Multi-unit Housing Project"
  },
  { 
    id: 11, 
    name: "Hospital Extension", 
    image: Project11,
    category: "commercial",
    description: "Healthcare Facility Expansion"
  },
  { 
    id: 12, 
    name: "School Building", 
    image: Project12,
    category: "commercial",
    description: "Educational Facility Construction"
  },
];

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleItems, setVisibleItems] = useState(8);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: "all", name: "All Projects", icon: <Building className="w-3 h-3" /> },
    { id: "residential", name: "Residential", icon: <Home className="w-3 h-3" /> },
    { id: "commercial", name: "Commercial", icon: <Building className="w-3 h-3" /> },
    { id: "renovation", name: "Renovations", icon: <Wrench className="w-3 h-3" /> },
    { id: "infrastructure", name: "Infrastructure", icon: <Construction className="w-3 h-3" /> },
  ];

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : <Building className="w-3 h-3" />;
  };

  const filteredItems = selectedCategory === "all" 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  const loadMore = () => {
    setVisibleItems(prev => prev + 4);
  };

  const handleImageClick = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
    setCurrentIndex(prevIndex);
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
              <span 
                className="text-xs font-semibold"
                style={{ color: colors.orangeDark }}
              >
                OUR PROJECT PORTFOLIO
              </span>
            </div>
            <h2 
              className="text-xl sm:text-2xl font-bold mb-1"
              style={{ color: colors.navy }}
            >
              Construction Projects Gallery
            </h2>
            <p 
              className="text-xs max-w-2xl mx-auto"
              style={{ color: colors.grayDark }}
            >
              Browse through our completed residential, commercial, and infrastructure projects across Zimbabwe
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-4">
            <div className="flex overflow-x-auto gap-1.5 pb-1.5 justify-start md:justify-center md:flex-wrap scrollbar-hide px-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setVisibleItems(8);
                  }}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all whitespace-nowrap flex-shrink-0 flex items-center gap-1 ${
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
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          {filteredItems.length === 0 ? (
            <div 
              className="text-center py-6"
              style={{ color: colors.gray }}
            >
              <p className="text-xs">No projects found in this category.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                {filteredItems.slice(0, visibleItems).map((item, index) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden group cursor-pointer hover:-translate-y-0.5"
                    style={{ 
                      border: `1px solid ${colors.grayLight}`
                    }}
                    onClick={() => handleImageClick(item, index)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Category Badge */}
                      <div 
                        className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-white text-[9px] font-medium shadow-sm"
                        style={{ backgroundColor: colors.orange }}
                      >
                        <div className="flex items-center gap-0.5">
                          {getCategoryIcon(item.category)}
                          <span>
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                        </div>
                      </div>
                      {/* Overlay on hover */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ backgroundColor: `${colors.navy}80` }}
                      >
                        <div className="absolute bottom-2 left-2 right-2">
                          <p 
                            className="text-white text-xs font-medium truncate"
                          >
                            {item.name}
                          </p>
                          <p 
                            className="text-xs mt-0.5"
                            style={{ color: colors.orange }}
                          >
                            {item.description}
                          </p>
                          <p 
                            className="text-white/80 text-[9px] mt-0.5"
                          >
                            Click to view details
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item Name */}
                    <div className="p-2">
                      <h3 
                        className="font-medium text-xs truncate"
                        style={{ color: colors.navy }}
                      >
                        {item.name}
                      </h3>
                      <p 
                        className="text-[10px] mt-0.5 truncate"
                        style={{ color: colors.gray }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {visibleItems < filteredItems.length && (
                <div className="text-center mt-6">
                  <button
                    onClick={loadMore}
                    className="px-5 py-1.5 font-semibold rounded-lg transition-all shadow-md hover:shadow-lg text-xs"
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
                    LOAD MORE PROJECTS
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Full Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-2 right-2 text-white hover:transition-colors z-50"
            style={{ color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:transition-colors z-50 p-1.5 rounded-full"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              color: 'white'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:transition-colors z-50 p-1.5 rounded-full"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              color: 'white'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.orange}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-4xl max-h-[80vh] w-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="w-full h-full object-contain max-h-[70vh] rounded"
            />
            
            {/* Image Info */}
            <div 
              className="absolute bottom-0 left-0 right-0 p-4 text-white rounded-b"
              style={{ 
                background: `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)`
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 
                    className="text-lg font-bold mb-0.5"
                  >
                    {selectedImage.name}
                  </h3>
                  <p 
                    className="text-sm mb-1"
                    style={{ color: colors.orange }}
                  >
                    {selectedImage.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div 
                      className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                      style={{ 
                        backgroundColor: colors.orange,
                        color: 'white'
                      }}
                    >
                      {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                    </div>
                  </div>
                </div>
                <p 
                  className="text-xs"
                  style={{ color: '#D1D5DB' }}
                >
                  Project {currentIndex + 1} of {filteredItems.length}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1.5 px-2 overflow-x-auto">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedImage(item);
                  setCurrentIndex(index);
                }}
                className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border transition-all ${
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
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal-enter {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ImageGallery;