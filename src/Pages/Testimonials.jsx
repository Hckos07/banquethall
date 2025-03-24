import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import weddingtestimonial from "../assets/weddingtestimonial.jpg";
import Footer from "../Components/Footer";

// Testimonial Component
const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="bg-white border rounded-lg shadow-md p-6 flex flex-col justify-between w-full max-w-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Top Header with Quote Icon & Title */}
      <div className="bg-gray-100 px-4 py-2 flex items-center font-semibold text-gray-800 rounded-t-lg">
        <FaQuoteLeft className="mr-2 text-xl text-gray-500" />
        {testimonial.title}
      </div>

      {/* Rating, Date, and Review */}
      <div className="p-4 flex-grow">
        <div className="flex items-center justify-between">
          {/* Star Rating */}
          <div className="text-yellow-500 text-lg">★★★★★</div>
          <span className="text-gray-400 text-sm">{testimonial.date}</span>
        </div>

        {/* Review Text */}
        <p className="mt-2 text-gray-700">{testimonial.review}</p>
      </div>

      {/* User Details */}
      <div className="p-4 bg-gray-50 rounded-b-lg">
        <p className="font-bold">By: {testimonial.name}</p>
        <p className="text-sm text-gray-600">Booked: {testimonial.booked}</p>
        <p className="text-sm text-gray-600">Event: {testimonial.event}</p>
        <p className="text-sm text-gray-600">Booking Date: {testimonial.bookingDate}</p>
      </div>

      {/* Bottom Quote Icon */}
      <div className="text-right text-gray-500 p-2">
        <FaQuoteRight />
      </div>
    </motion.div>
  );
};


const TestimonialsSection = () => {
  // Sample Testimonial Data
  const testimonials = [
    {
      title: "A Dream Come True!",
      review: "The entire team made our wedding absolutely magical. The decorations and catering were beyond our expectations!",
      name: "Aarav & Meera",
      booked: "Grand Hyatt Ballroom",
      event: "Wedding",
      bookingDate: "Jan. 5, 2024",
      date: "Feb. 12, 2024",
    },
    {
      title: "Absolutely Stunning!",
      review: "The birthday party was perfectly organized, and the kids loved every moment of it. Thank you for making it special!",
      name: "Riya Kapoor",
      booked: "Sunset Banquets",
      event: "Birthday Party",
      bookingDate: "Feb. 20, 2024",
      date: "March 5, 2024",
    },
    {
      title: "An Unforgettable Evening",
      review: "Our corporate gala dinner was handled with such professionalism. The venue, food, and ambiance were top-notch!",
      name: "Vikram Joshi",
      booked: "The Oberoi Grand",
      event: "Corporate Event",
      bookingDate: "March 10, 2024",
      date: "April 2, 2024",
    },
    {
      title: "Magical Wedding Reception",
      review: "The team went above and beyond to make our reception breathtakingly beautiful. Highly recommended!",
      name: "Simran & Raj",
      booked: "Taj Mahal Palace",
      event: "Wedding Reception",
      bookingDate: "April 18, 2024",
      date: "May 1, 2024",
    },
    {
      title: "Perfect Anniversary Celebration",
      review: "The candlelight dinner setup was just perfect. The ambiance was romantic, and the service was flawless!",
      name: "Neha Sharma",
      booked: "Lakeview Resort",
      event: "Anniversary Celebration",
      bookingDate: "May 22, 2024",
      date: "June 5, 2024",
    },
    {
      title: "Luxury Baby Shower Event",
      review: "The decorations, food, and arrangements were so elegant. Thank you for making this day special!",
      name: "Pooja Mehta",
      booked: "Royal Orchid Hotel",
      event: "Baby Shower",
      bookingDate: "June 10, 2024",
      date: "June 25, 2024",
    },
    {
      title: "Flawless Corporate Meet",
      review: "Our business conference was seamless! The team ensured everything ran smoothly from start to finish.",
      name: "Anil Khanna",
      booked: "JW Marriott",
      event: "Corporate Conference",
      bookingDate: "July 8, 2024",
      date: "July 20, 2024",
    },
    {
      title: "Glamorous Engagement Party",
      review: "The engagement setup was breathtaking! The decor and ambiance created the perfect evening for us.",
      name: "Priya & Karan",
      booked: "The Leela Palace",
      event: "Engagement Party",
      bookingDate: "Aug. 15, 2024",
      date: "Aug. 30, 2024",
    },
    {
      title: "Best Sweet 16 Party Ever!",
      review: "The theme, music, and entire event were a hit! My daughter and her friends had the best time.",
      name: "Sneha Verma",
      booked: "Renaissance Hotel",
      event: "Sweet 16 Party",
      bookingDate: "Sept. 1, 2024",
      date: "Sept. 15, 2024",
    },
    {
      title: "Well-Planned Cultural Event",
      review: "The attention to detail was fantastic. Our traditional function was beautifully executed.",
      name: "Rahul Bansal",
      booked: "Heritage Hall",
      event: "Cultural Function",
      bookingDate: "Oct. 5, 2024",
      date: "Oct. 20, 2024",
    },
    {
      title: "Outstanding College Farewell",
      review: "The farewell event was amazing, with excellent lighting, stage setup, and organization. Thanks for making it memorable!",
      name: "Siddharth Patel",
      booked: "The Imperial Banquet",
      event: "College Farewell",
      bookingDate: "Nov. 10, 2024",
      date: "Nov. 25, 2024",
    },
    {
      title: "Best Destination Wedding Ever!",
      review: "From the beachside mandap to the stunning decor, our wedding was straight out of a fairy tale.",
      name: "Ishita & Rohan",
      booked: "Goa Beach Resort",
      event: "Destination Wedding",
      bookingDate: "Dec. 1, 2024",
      date: "Dec. 20, 2024",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <motion.h2
        className="text-center text-3xl font-semibold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Our Clients Say
      </motion.h2>

      {/* Grid Layout */}
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </div>
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
          <div className="absolute inset-0 bg-black/00"></div>
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