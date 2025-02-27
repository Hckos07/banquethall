import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Handshake, ShoppingBag, PiggyBank } from "lucide-react";
import { motion } from "framer-motion";
import Statistics from "../Components/Statistics";
import logo from "../assets/logo.png";
import bwdisrupt from "../assets/bwdisrupt.jpg";
import dealcurry from "../assets/dealcurry.png";
import vccircle from "../assets/vccircle.png";
import entrepreneur from "../assets/entrepreneur.jpg";
import pocketnewsalert from "../assets/pocketnewsalert.png";
import yourstory from "../assets/yourstory.png";
import etlogo from "../assets/etlogo.jpeg";
import iamwire from "../assets/iamwire.png";
import whywedding from "../assets/whywedding.jpg";
import Footer from "../Components/Footer";


const Whyus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Venues", path: "/Venues" },
    { name: "Photos", path: "/Photos" },
    { name: "Testimonials", path: "/Testimonials" },
    { name: "Why Us", path: "/WhyUs" },
  ];

  const featuredArticles = [
    {
      logo: pocketnewsalert,
      title: "Banquethalls.co - the first online wedding company to complete 1000 Weddings",
      source: "Pocketnewsalert.com",
      date: "14 June 2023",
    },
    {
      logo: bwdisrupt,
      title: "Banquethalls.co - An Online Marketplace for Wedding Services",
      source: "Business World",
      date: "21 April 2023",
    },
    {
      logo: entrepreneur,
      title: "How This Startup Is Fighting It Out In The Disorganized Business Of Wedding Planning",
      source: "Entrepreneur India",
      date: "11 June 2023",
    },
    {
      logo: yourstory,
      title: "Within two months of raising $1L, Banquethalls.co raises another round of funding",
      source: "YourStory",
      date: "9 February 2023",
    },
    {
      logo: vccircle,
      title: "Exclusive: Banquethalls.co gets pre-Series A funding from Sixth Sense Ventures",
      source: "VCCircle",
      date: "9 February 2023",
    },
    {
      logo: etlogo,
      title: "Banquethalls.co raises undisclosed funding from Sixth Sense Ventures",
      source: "etlogo",
      date: "9 February 2023",
    },
    {
      logo: iamwire,
      title: "Banquethalls.co Raises Pre Series A Round of Funding",
      source: "iamwire",
      date: "9 February 2023",
    },
    {
      logo: dealcurry,
      title: "Within two months of raising $1L, Banquethalls.co raises another round of funding",
      source: "YourStory",
      date: "9 February 2023",
    },
  ];
  
  
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
            src={whywedding}
            alt="Wedding Background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">Why book with Banquethall.in</h1>
          <p className="mt-4 text-lg md:text-xl">
            2,000+ events organized till date
          </p>
        </div>
      </div>

      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Card 1 */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-red-500 rounded-full">
                <Handshake size={40} color="white" />
              </div>
              <h3 className="text-xl font-semibold">Delivery of Commitments</h3>
              <p className="text-gray-600">
                Our team ensures that all the services are delivered as committed to ensure a hassle-free experience for you.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-red-500 rounded-full">
                <ShoppingBag size={40} color="white" />
              </div>
              <h3 className="text-xl font-semibold">One-Stop Shop</h3>
              <p className="text-gray-600">
                No need to run around for your wedding services - Book our trusted vendors under one roof.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-red-500 rounded-full">
                <PiggyBank size={40} color="white" />
              </div>
              <h3 className="text-xl font-semibold">Guaranteed Best Prices</h3>
              <p className="text-gray-600">
                We guarantee our prices for venue and non-venue services. <span className="text-red-500 font-semibold">Up to 30% off.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-center mb-8"
          >
            Featured On
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center bg-white shadow-lg rounded-lg p-6"
              >
                <img src={article.logo} alt={article.source} className="w-20 h-20 object-contain mr-6" />
                <div>
                  <h3 className="text-lg font-semibold">{article.title}</h3>
                  <p className="text-gray-500">{article.source}</p>
                  <p className="text-gray-400 text-sm">{article.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Statistics />

      <Footer />
    </>
  );
};

export default Whyus;