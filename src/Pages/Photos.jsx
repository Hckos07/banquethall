import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import bridalwear from "../assets/bridalwear01.jpeg";
import decor from "../assets/decor01.jpeg";
import Ideas from "../assets/ideas.jpeg";
import jewellery from "../assets/jewellery01.jpeg";
import makeup from "../assets/makeup02.jpeg";
import mehendi from "../assets/mehendi03.jpeg";
import destinationwedding from "../assets/destinationwedding.webp";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Photo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  // Favorite categories with links
  const favourites = [
    { title: "BRIDAL WEAR", image: bridalwear, path: "/images" },
    { title: "DECOR", image: decor, path: "/images" },
    { title: "BRIDAL JEWELLERY", image: jewellery, path: "/images" },
    { title: "BRIDAL MAKEUP", image: makeup, path: "/images" },
    { title: "BRIDAL MEHENDI", image: mehendi, path: "/images" },
    { title: "DESTINATION WEDDING", image: destinationwedding, path: "/ima" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-50 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <NavLink to="/">
            <img src={logo} alt="Company Logo" className="w-auto h-12" />
          </NavLink>

          <div className="hidden md:flex space-x-6 text-lg">
            {navLinks.map(({ name, path }, index) => (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-blue-600 transition-all ${isActive ? "font-bold text-blue-600" : ""}`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>

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

      <div className="h-20"></div>

      <div className="relative min-h-[75vh] flex items-center justify-center text-white text-center px-6">
        <div className="absolute inset-0">
          <img src={Ideas} alt="Wedding Background" className="w-full h-full object-cover brightness-110" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">PHOTOS</h1>
          <p className="mt-4 text-lg md:text-xl">Get Inspired from Real Weddings with us.</p>
        </div>
      </div>

      <div className="container mx-auto py-10 px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Our Favourites</h2>
          <p className="text-gray-500 italic">Top <span className="text-red-500 font-semibold">picks</span> for wedding ideas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favourites.map((item, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={item.path}>
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.h3 className="text-white text-xl font-semibold px-4 py-2 rounded-md">{item.title}</motion.h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Photo;
