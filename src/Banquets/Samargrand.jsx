import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import Footer from "../Components/Footer";
import hotelgrand1 from "/Users/hckos/Desktop/banquethall 2/src/assets/Venuesphotos/hotelgrandgihway1.jpeg";
import hotelgrand2 from "/Users/hckos/Desktop/banquethall 2/src/assets/Venuesphotos/hotelgrandgihway2.jpeg";
import hotelgrand3 from "/Users/hckos/Desktop/banquethall 2/src/assets/Venuesphotos/hotelgrandgihway3.jpeg";
import hotelgrand4 from "/Users/hckos/Desktop/banquethall 2/src/assets/Venuesphotos/hotelgrandgihway4.jpeg";
import hotelgrand5 from "/Users/hckos/Desktop/banquethall 2/src/assets/Venuesphotos/hotelgrandgihway5.jpeg";
import hotelgrand6 from "/Users/hckos/Desktop/banquethall 2/src/assets/Venuesphotos/hotelgrandgihway6.jpeg";
import hotelgrand7 from "/Users/hckos/Desktop/banquethall 2/src/assets/Venuesphotos/hotelgrandgihway7.jpeg";


// Sample Images (Replace with actual URLs)
const images = [
  hotelgrand1,
  hotelgrand2,
  hotelgrand3,
  hotelgrand4,
  hotelgrand5,
  hotelgrand6,
  hotelgrand7,
];

const Photo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Venues", path: "/Venues" },
    { name: "Photos", path: "/Photos" },
    { name: "Testimonials", path: "/Testimonials" },
    { name: "Why Us", path: "/WhyUs" },
  ];

  // Image slider functions
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-50 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <NavLink to="/">
            <img src={logo} alt="Company Logo" className="w-auto h-12" />
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-lg">
            {navLinks.map(({ name, path }, index) => (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-blue-600 transition-all ${isActive ? "font-bold text-blue-600" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 transition-all hover:bg-blue-200 p-2 rounded-md"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-blue-50 shadow-md py-4">
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map(({ name, path }, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className="text-gray-600 hover:text-blue-600 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-20"></div>

      {/* Venue Gallery Section */}
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Slider */}
        <div className="relative w-full h-96">
          <img
            src={images[currentImage]}
            alt="Venue"
            className="w-full h-full object-cover"
          />
          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
        {/* Venue Info Section */}
        <div className="p-6">
          {/* Rating & Badge */}
          <div className="flex items-center space-x-3">
            <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm">
              ⭐ 3.4/5 | 55
            </span>
            <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
              Bh Managed
            </span>
          </div>

          {/* Venue Name & Location */}
          <h2 className="text-2xl font-bold mt-2">
            Hotel Grand Highway, Mathura Road, Faridabad
          </h2>
          <p className="text-gray-600 mt-1">
            Hotel Grand Highway, Escorts Mujesar Metro Station, Plot No. 3, DLF
            Sector-11, Haryana, Sector 11, Pocket A, Faridabad, Haryana 121006{" "}
          </p>

          {/* Tags */}
          <div className="flex space-x-2 mt-3">
            {["Wedding Hotels", "Banquet Halls", "Party Halls", "Marriage Halls"].map(
              (tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* Pricing Section */}
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Pricing</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-700">🥦 Vegetarian</span>
              <span className="text-gray-900">
                <s className="text-red-500 text-xl">₹700</s> /Plate
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-700">🍗 Non-Vegetarian</span>
              <span className="text-gray-900">
                <s className="text-red-500 text-xl">₹800</s> /Plate
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4 justify-end">
            <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold">
              See Prices
            </button>
            <button className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold">
              Venue Tour
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Photo;