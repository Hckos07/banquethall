import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaStarHalfAlt, FaRegStar, FaStar, FaPhone, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import Footer from "../Components/Footer";
import hotelgrand1 from "/src/assets/Venuesphotos/hotelgrandgihway1.jpeg";
import hotelgrand2 from "/Users/hckos/Desktop/banquethall 2/src/assets/Venuesphotos/hotelgrandgihway2.jpeg";
import hotelgrand3 from "/Users/hckos/Desktop/banquethall 2/src/assets/Venuesphotos/hotelgrandgihway3.jpeg";
import hotelgrand4 from "/Users/hckos/Desktop/banquethall 2/src/assets/Venuesphotos/hotelgrandgihway4.jpeg";
import hotelgrand5 from "/Users/hckos/Desktop/banquethall 2/src/assets/Venuesphotos/hotelgrandgihway5.jpeg";
import hotelgrand6 from "/Users/hckos/Desktop/banquethall 2/src/assets/Venuesphotos/hotelgrandgihway6.jpeg";
import hotelgrand7 from "/Users/hckos/Desktop/banquethall 2/src/assets/Venuesphotos/hotelgrandgihway7.jpeg";
import customerimage from "../assets/customerimage.svg"

const reviews = [
  {
    "name": "Dev",
    "verified": true,
    "rating": 5,
    "eventDate": "16 Feb 2024",
    "pax": 140,
    "review": "Very beautiful service and quality in Grand highway. Specially thanks❤ for Vivek ji"
  },
  {
    "name": "Himanshu",
    "verified": true,
    "rating": 4,
    "eventDate": "08 Feb 2024",
    "pax": 50,
    "review": "Great experience, but there were a few minor issues."
  },
  {
    "name": "Rahul",
    "verified": true,
    "rating": 5,
    "eventDate": "09 Feb 2024",
    "pax": 200,
    "review": "Service was okay, but could be improved."
  }
];

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

const Queenlawnandbanquet = () => {
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

  const [showMore, setShowMore] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 10 || isNaN(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    console.log("Customer Phone:", phone);
    alert("Your request has been submitted!");
    setPhone(""); // Reset field after submission
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
              ⭐ 4.7/5 | 3
            </span>
            <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
              Bh Managed
            </span>
          </div>

          {/* Venue Name & Location */}
          <h2 className="text-2xl font-bold mt-2">
            Queens Lawn And Banquets, Sector 16, Faridabad
          </h2>
          <p className="text-gray-600 mt-1">
            Queens Lawn and Banquets, Sector 16A, Faridabad, Haryana 121002 
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
                <s className="text-red-500 text-xl">₹750</s> /Plate
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-700">🍗 Non-Vegetarian</span>
              <span className="text-gray-900">
                <s className="text-red-500 text-xl">₹1000</s> /Plate
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

      <div className="my-auto mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-2">About this venue</h2>
        <p className="text-gray-700 mb-2">
          If you are looking for a venue that exudes style and can take your celebrations a notch higher, Queens Lawn And Banquets Faridabad is made for you!
          {showMore && (
            <span>
              <p>
                The party areas at Queens Lawn And Banquets, Sector 16, Faridabad, can be customized to a desired space that resonates well with your style and the event's theme. The verdant capacity of the banquet and lawn make it perfect for weddings, receptions, pre-wedding ceremonies, engagement functions, birthday parties, anniversaries, reunions, and family events, promotion parties, and corporate events like meetings, seminars, conferences, presentations, and product launches. 
              </p>
            </span>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-600 font-medium ml-1"
          >
            {showMore ? " Show less" : " Read more"}
          </button>
        </p>
        <div className="flex items-center space-x-3 mt-4">
          <span className="text-lg font-semibold">Call Queen Lawn and Banquet</span>
          <FaPhone className="text-green-500 text-2xl" />
        </div>
        <p className="text-gray-800 text-lg mt-1">+91-8375967071</p>
        <div className="mt-4 p-3 border border-blue-400 bg-blue-100 text-blue-600 rounded-lg flex items-center space-x-2">
          <span className="text-lg font-semibold">⚡ Hurry UP! This Venue Is In High Demand</span>
        </div>
      </div>

      {/* reviews section */}

      <div className="bg-gradient-to-r bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4"> Ratings & Reviews</h2>

        {/* Overall Rating Section */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-4xl font-bold text-green-600">4.7</span>
          <div className="flex space-x-1">{renderStars(4.7)}</div>
          <span className="text-gray-600">3 Ratings & Reviews</span>
        </div>

        {/* Individual Reviews */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-5 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg font-semibold text-gray-900">{review.name}</span>
                {review.verified && <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded-full">✔ Verified</span>}
                <span className="flex space-x-1">{renderStars(review.rating)}</span>
                <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-md">{review.rating}/5</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                Event Date: {review.eventDate} | PAX: {review.pax}
              </p>
              <p className="text-gray-700 mt-3">{review.review}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* maps section */}

      <div className="p-6 bg-white">
        {/* Venue Address Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">📍 Venue Address</h2>
        <p className="text-gray-700 mb-4">
          Queens Lawn and Banquet, Faridabad, Haryana 121006
          <a
            href="https://www.google.co.in/maps/place/Queens+Lawn+and+Banquet/@28.4067436,77.3091831,17z/data=!3m1!4b1!4m6!3m5!1s0x390cdd0dc22c333f:0xed2933efecdac95e!8m2!3d28.4067436!4d77.311758!16s%2Fg%2F11j8rjn885?entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline ml-2"
          >
            Get Directions →
          </a>
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Google Maps Embed for Queens Lawn and Banquet, Faridabad */}
          <div className="rounded-lg overflow-hidden border shadow-lg">
            <iframe
              title="Google Maps"
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4383.327361352991!2d77.3091831!3d28.4067436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd0dc22c333f%3A0xed2933efecdac95e!2sQueens%20Lawn%20and%20Banquet!5e0!3m2!1sen!2sin!4v1710172592489"
            ></iframe>
          </div>

          {/* Schedule Visit Section */}
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">🗓️ Schedule a visit to the venue</h3>
            <div className="mt-4">
              <input
                type="date"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
              />
            </div>
            <div className="mt-3">
              <input
                type="time"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
              />
            </div>
            <button
              className="w-full mt-5 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Schedule Visit
            </button>
          </div>
        </div>
      </div>


      {/* About this venue */}

      <div className="my-auto mx-auto mt-7 pb-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Venue Expert Notes</h2>
        <p className="text-gray-700 mb-2">
          Queens Lawn And Banquets, Sector 16 Faridabad is a gorgeous venue where you can opt to host all kinds of events without any problems.
          {showMore && (
            <span>
              This venue is located an hour away from Indira Gandhi International Airport, which makes the commute to this venue very convenient for all. Also, all your catering, decor-related needs for your events, would be looked after by the staff present in-house. A parking space is provided for your convenience. So what are you waiting for? Book Queens Lawn And Banquets, Faridabad now!
            </span>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-600 font-medium ml-1"
          >
            {showMore ? " Show less" : " Read more"}
          </button>
        </p>
      </div>

      {/* Venue Details */}

      <div className="p-6 bg-white">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Features of venue</h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 text-gray-800">
          <ul className="space-y-3">
            <li>• Parking area for your convenience</li>
            <li>• Located 4.6 km away from Faridabad Railway Station</li>
          </ul>
          <ul className="space-y-3">
            <li>• In-house caterers and decorators for enhanced services</li>
            <li>• Serves both veg and non-veg food</li>
          </ul>
        </div>
      </div>


      {/* venue policies section */}

      <div className="p-6 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">📜 Venue Policies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Timings & Slots */}
          <div className="bg-white p-4 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">⏰ Timings & Slots</h3>
            <p className="text-gray-600">(Venue closes at 12:00 AM)</p>
            <p className="text-gray-700"><strong>Morning:</strong> 10:00 AM - 6:00 PM</p>
            <p className="text-gray-700"><strong>Evening:</strong> 7:00 PM - 12:00 AM</p>
          </div>

          {/* Taxes */}
          <div className="bg-white p-4 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">💰 Taxes</h3>
            <p className="text-gray-700">Taxes F&B: 18.00%</p>
          </div>

          {/* Lodging */}
          <div className="bg-white p-4 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">🏨 Lodging</h3>
            <p className="text-gray-700">No rooms available</p>
          </div>

          {/* Changing Room */}
          <div className="bg-white p-4 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">🚪 Changing Room</h3>
            <p className="text-gray-700"><strong>No. of complimentary rooms:</strong> 2</p>
            <p className="text-gray-700">A/C Changing Room</p>
          </div>

          {/* Parking */}
          <div className="bg-white p-4 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">🚗 Parking</h3>
            <p className="text-gray-700">Valet provided by venue</p>
            <p className="text-gray-700">Parking space for 200 vehicles</p>
          </div>

          {/* Alcohol */}
          <div className="bg-white p-4 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">🍾 Alcohol</h3>
            <p className="text-gray-700">Alcohol allowed at the venue</p>
            <p className="text-gray-700">Outside alcohol allowed at the venue</p>
            <p className="text-gray-700">Corkage costs applicable</p>
          </div>

          {/* Food */}
          <div className="bg-white p-4 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">🍽️ Food</h3>
            <p className="text-gray-700">Food provided by the venue</p>
            <p className="text-gray-700">Outside catering allowed</p>
            <p className="text-gray-700">Non-veg allowed</p>
          </div>

          {/* Decoration */}
          <div className="bg-white p-4 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">🎨 Decoration</h3>
            <p className="text-gray-700">No outside decorators allowed</p>
            <p className="text-gray-700">Decor provided by the venue</p>
          </div>

          {/* Advance Payment */}
          <div className="bg-white p-4 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">💳 Advance Payment</h3>
            <p className="text-gray-700">25% at the time of booking</p>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white p-4 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">❌ Cancellation</h3>
            <p className="text-gray-700">Non-cancellable</p>
          </div>

          {/* Other Policies */}
          <div className="bg-white p-4 col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">📌 Other Policies</h3>
            <ul className="text-gray-700 list-disc pl-5">
              <li>No music allowed late</li>
              <li>Halls are air-conditioned</li>
              <li>Ample parking available</li>
              <li>Baraat allowed</li>
              <li>Firecrackers allowed</li>
              <li>Hawan allowed</li>
              <li>Overnight wedding allowed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* call us section */}
          <form />
      <div className="bg-gray-50 p-6 mb-8 rounded-lg shadow-md max-w-7xl mx-auto mt-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Form */}
          <div className="md:w-2/3 space-y-3">
            <h2 className="text-2xl font-bold">Have us call you!</h2>
            <p className="text-gray-600">
              Please provide us with your contact number (10 digit mobile number)
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex items-center gap-3 mt-3">
              <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                <span className="px-3 bg-gray-200 flex items-center">+91</span>
                <input
                  type="text"
                  maxLength="10"
                  className="p-2 w-full outline-none"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="border border-pink-500 text-pink-500 px-5 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition"
              >
                Submit
              </button>
            </form>

            {/* Terms */}
            <p className="text-sm text-gray-600">
              By submitting this form you agree to our{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Terms and Conditions
              </a>
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="hidden md:block md:w-1/3">
            <img
              src={customerimage}
              alt="Call support illustration"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Footer section */}
      <Footer />
    </>
  );
};

export default Queenlawnandbanquet;