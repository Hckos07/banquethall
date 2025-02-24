import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import logo from "../assets/logo.png";
import weddingtestimonial from "../assets/weddingtestimonial.jpg";
import Footer from "../Components/Footer";

// Testimonial Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="border rounded-lg shadow-md max-w-md p-5">
      {/* Top Header with Quote Icon & Title */}
      <div className="bg-gray-100 px-4 py-2 flex items-center font-semibold text-gray-800">
        <FaQuoteLeft className="mr-2 text-xl text-gray-500" />
        {testimonial.title}
      </div>

      {/* Rating, Date, and Review */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          {/* Star Rating */}
          <div className="text-yellow-500 text-lg">★★★★★</div>
          <span className="text-gray-400 text-sm">{testimonial.date}</span>
        </div>

        {/* Review Text */}
        <p className="mt-2 text-gray-700">{testimonial.review}</p>

        {/* Divider */}
        <hr className="my-3" />

        {/* User Details */}
        <p className="font-bold">By: {testimonial.name}</p>
        <p className="text-sm text-gray-600">Booked: {testimonial.booked}</p>
        <p className="text-sm text-gray-600">Event: {testimonial.event}</p>
        <p className="text-sm text-gray-600">Booking Date: {testimonial.bookingDate}</p>
      </div>

      {/* Bottom Quote Icon */}
      <div className="text-right text-gray-500 p-2">
        <FaQuoteRight />
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  // Sample Testimonial Data
  const testimonials = [
    {
      title: "Good",
      review: "Excellent",
      name: "Dr Rishika",
      booked: "Doab Vilas",
      event: "Wedding",
      bookingDate: "Feb. 10, 2020",
      date: "July 12, 2020",
    },
    {
      title: "Mind Blowing Services",
      review: "It was an awesome experience at Clarion Inn Sevilla. Our guests appreciated the food, service decoration, and hospitality.",
      name: "Oshin",
      booked: "Clarion Inn Sevilla",
      event: "Wedding",
      bookingDate: "Dec. 18, 2019",
      date: "July 2, 2020",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  );
};

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
            src={weddingtestimonial}
            alt="background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl ">Meet Our Customers</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Meet our wonderful customers and learn the magical journey they went through, with us.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Photo;