import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bridalwear from "../assets/bridalwear01.jpeg";
import decor from "../assets/decor01.jpeg";
import ideas from "../assets/ideas.jpeg";
import jewellery from "../assets/jewellery01.jpeg";
import makeup from "../assets/makeup02.jpeg";
import mehendi from "../assets/mehendi03.jpeg";

const ImageCarousel = () => {
  const images = [
    {
      src: bridalwear,
      title: "Wedding Decor",
      link: "/decor",
    },
    {
      src: "https://via.placeholder.com/800x400/33FF57/ffffff?text=Luxury+Venues",
      title: "Luxury Venues",
      link: "/venues",
    },
    {
      src: "https://via.placeholder.com/800x400/3357FF/ffffff?text=Catering+Services",
      title: "Catering Services",
      link: "/catering",
    },
    {
      src: "https://via.placeholder.com/800x400/FFFF33/000000?text=Bridal+Wear",
      title: "Bridal Wear",
      link: "/bridal-wear",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollInterval = 3000; // Auto-scroll every 3 seconds
  let autoScroll;

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Auto-scroll effect
  useEffect(() => {
    autoScroll = setInterval(nextSlide, autoScrollInterval);
    return () => clearInterval(autoScroll); // Cleanup interval
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden py-10">
      {/* Image Wrapper */}
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="min-w-full flex-none relative group">
            <a href={img.link} target="_blank" rel="noopener noreferrer">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-[350px] object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-bold tracking-wide">{img.title}</span>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-60 text-white rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 z-10"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-60 text-white rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 z-10"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-red-500 w-6" : "bg-gray-400"
              }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;