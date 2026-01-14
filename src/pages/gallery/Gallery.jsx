import React, { useState } from "react";
import ImageGallery from "./components/ImageGallery";
import VideoGallery from "./components/VideoGallery";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";

function Gallery() {
  const [activeTab, setActiveTab] = useState("images");

  return (
    <>
      <Navbar />
      <div className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {/* <div className="relative text-center mb-8 mt-14 py-16 px-4 rounded-2xl overflow-hidden">
       
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519657337289-077653f724ed?w=1920&q=80')",
              }}
            ></div>

         
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                Our Gallery
              </h1>
              <p className="text-gray-100 text-sm sm:text-base drop-shadow">
                Explore our stunning wedding cakes and beauty transformations
              </p>
            </div>
          </div> */}

          {/* Tabs */}
          <div className="flex justify-center mb-8 mt-14">
            <div className="inline-flex bg-white rounded-lg shadow-md p-1 border border-pink-200">
              <button
                onClick={() => setActiveTab("images")}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "images"
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-pink-600"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Photos</span>
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "videos"
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-pink-600"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>Videos</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="transition-all duration-300">
            {activeTab === "images" && <ImageGallery />}
            {activeTab === "videos" && <VideoGallery />}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Gallery;
