import React from "react";
import { ClipboardList, Handshake, Map, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar"; 
import faridabad from "../assets/faridabad.webp";
import noida from "../assets/noida.jpg";
import southDelhi1 from "../assets/southdelhi1.jpg";
import gurgao from "../assets/gurgao.png";

const cityData = [
  {
    name: "Faridabad",
    image: faridabad, // Replace with actual image
  },
  {
    name: "Noida",
    image: noida, // Replace with actual image
  },
  {
    name: "South Delhi",
    image: southDelhi1, // Replace with actual image
  },
  {
    name: "Gurgaon",
    image: gurgao, // Replace with actual image
  },
];

const steps = [
  {
    id: 1,
    icon: <ClipboardList size={48} className="text-white" />,
    title: "Discover & Shortlist Venues",
    description: "Input your requirements & see our recommendations & prices.",
  },
  {
    id: 2,
    icon: <Handshake size={48} className="text-white" />,
    title: "Guided Visits",
    description: "Visit venues on your own or with our venue expert.",
  },
  {
    id: 3,
    icon: <Map size={48} className="text-white" />,
    title: "Book Venue",
    description: "Get final quotes (upto 30% off) and book your venue.",
  },
  {
    id: 4,
    icon: <Users size={48} className="text-white" />,
    title: "Book Vendors",
    description: "Meet our trusted vendors and book them at your ease.",
  },
];

const images = [
  { src: "https://via.placeholder.com/400", title: "Destination Weddings" },
  { src: "https://via.placeholder.com/400", title: "Photography" },
  { src: "https://via.placeholder.com/400", title: "Decor" },
  { src: "https://via.placeholder.com/400", title: "Bridal Jewellery" },
];


const App = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <Navbar />
      <section className="text-center my-12 px-6">
        {/* Title & Description */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Hassle Free Planning & Booking at Our Guaranteed Best Prices.
        </h2>
        <p className="text-gray-600 mt-2">
          800+ Events Organized till Date ● Present in 4+ Cities ● Over 500+ Wedding Venues & Vendors
        </p>

        {/* Subheading */}
        <h3 className="text-2xl font-bold text-gray-900 mt-8">
          Browse Wedding Venues and Vendors
        </h3>

        {/* City Grid */}
        <div className="grid items-center justify-center md:grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-6 mt-8">
          {cityData.map((city, index) => (
            <div key={index} className="text-center flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-103">
              {/* Image with hover effect */}
              <img
                src={city.image}
                alt={city.name}
                className="w-[360px] h-[360px] object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              />

              {/* City Name */}
              <h4 className="mt-3 text-xl font-bold text-gray-800 tracking-wide">{city.name}</h4>

              {/* Links */}
              <div className="flex justify-center space-x-2 mt-2">
                <a href="#" className="text-red-500 font-medium underline hover:text-red-700 transition-colors duration-300">
                  Banquet Halls
                </a>
                <span className="text-gray-400">|</span>
                <a href="#" className="text-red-500 font-medium underline hover:text-red-700 transition-colors duration-300">
                  Vendors
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="text-center py-12">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How it Works</h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-[repeat(7,auto)] items-center gap-6 md:gap-8 px-4 mt-8">
          {steps.map((step, index) => (
            <>
              {/* Step Item */}
              <div key={step.id} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 flex items-center justify-center bg-red-500 rounded-full shadow-lg transition-transform transform hover:scale-110">
                  {step.icon}
                </div>

                {/* Title */}
                <h4 className="mt-4 text-lg font-semibold text-gray-800">{step.title}</h4>

                {/* Description */}
                <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
              </div>

              {/* Arrow (Only Rendered Between Steps) */}
              {index < steps.length - 1 && (
                <span className="hidden md:block text-gray-400 text-4xl justify-self-center">
                  ➜
                </span>
              )}
            </>
          ))}
        </div>
      </section>
      <div className="relative w-full max-w-5xl mx-auto pb-10">
        <h2 className="text-3xl text-center font-bold text-gray-800 mt-10 mb-10 ">Wedding Photos</h2>
        <div className="relative flex items-center overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md text-gray-600 hover:bg-gray-200"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Image Slider */}
          <div className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((img, index) => (
              <div key={index} className="w-full flex-none relative">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-[250px] object-cover rounded-lg my-10"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md text-gray-600 hover:bg-gray-200"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;