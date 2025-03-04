import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import weddingtestimonial from "../assets/weddingtestimonial.jpg";
import Footer from "../Components/Footer";
import weddingdecor5 from "../assets/weddingdecor5.jpeg";
import ImageCorosal2 from "../Components/ImageCorosal2";

// Navigation Links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Venues", path: "/Venues" },
  { name: "Photos", path: "/Photos" },
  { name: "Testimonials", path: "/Testimonials" },
  { name: "Why Us", path: "/WhyUs" },
];
const Images = () => {
  const [isOpen, setIsOpen] = useState(false);

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

      {/* Hero Section */}
      <div className="relative min-h-[75vh] flex items-center justify-center text-white text-center px-6">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={weddingdecor5}
            alt="background"
            className="w-full h-full object-cover brightness-100"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl ">Our Event Photos</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Relive unforgettable moments through our event snapshots!
          </p>
        </div>
      </div>
      {/* Image Carosal section */}
      <ImageCorosal2 />
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Images;