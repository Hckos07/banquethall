import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import weddingh1 from "../assets/weddingh1.jpg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-50 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <NavLink to="/">
            <img src={logo} alt="company logo" className="w-auto h-12" />
          </NavLink>

          {/* Desktop Links */}
          <div className="text-xl hidden md:flex space-x-6">
            <NavLink to="/" className="text-gray-600 hover:text-blue-600 transition-all">
              Home
            </NavLink>
            <NavLink to="/venues" className="text-gray-600 hover:text-blue-600 transition-all">
              Venues
            </NavLink>
            <NavLink to="/RealWeddings" className="text-gray-600 hover:text-blue-600 transition-all">
              RealWeddings
            </NavLink>
            <NavLink to="/Photos" className="text-gray-600 hover:text-blue-600 transition-all">
              Photos
            </NavLink>
            <NavLink to="/Testimonials" className="text-gray-600 hover:text-blue-600 transition-all">
              Testimonials
            </NavLink>
            <NavLink to="/Why Us" className="text-gray-600 hover:text-blue-600 transition-all">
              Why Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleNavbar} className="text-gray-700">
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-6">
            <NavLink to="/" className="text-gray-700 text-lg hover:text-blue-600 transition-all" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/venues" className="text-gray-600 hover:text-blue-600 transition-all">
              Venues
            </NavLink>
            <NavLink to="/RealWeddings" className="text-gray-600 hover:text-blue-600 transition-all">
              RealWeddings
            </NavLink>
            <NavLink to="/Photos" className="text-gray-600 hover:text-blue-600 transition-all">
              Photos
            </NavLink>
            <NavLink to="/Testimonials" className="text-gray-600 hover:text-blue-600 transition-all">
              Testimonials
            </NavLink>
            <NavLink to="/Why Us" className="text-gray-600 hover:text-blue-600 transition-all">
              Why Us
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-16"></div>

      {/* Hero Section with Overlay */}
      <div className="relative h-screen flex items-center justify-center text-white text-center pt-16">
        {/* Overlay Image */}
        <div className="absolute inset-0">
          <img
            src={weddingh1}
            alt="Wedding Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Plan Your Wedding With Us.</h1>
          <select className="mt-7 px-4 py-2 text-black rounded bg-white">
            <option>Select City</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Nav;