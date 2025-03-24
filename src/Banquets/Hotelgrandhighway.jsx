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
    name: "piyush",
    verified: true,
    rating: 5,
    eventDate: "16 Feb 2023",
    pax: 140,
    review: "Very beautiful service and quality in Grand highway. Specially thanks❤ for Vivek ji",
  },
  {
    name: "Verified User",
    verified: true,
    rating: 3,
    eventDate: "08 Feb 2023",
    pax: 50,
    review: "Great experience, but there were a few minor issues.",
  },
  {
    name: "Verified User",
    verified: true,
    rating: 2,
    eventDate: "09 Feb 2023",
    pax: 200,
    review: "Service was okay, but could be improved.",
  },
  {
    name: "Verified User",
    verified: true,
    rating: 1,
    eventDate: "10 Feb 2023",
    pax: 150,
    review: "Everything was very suspicious, lots of communication issues...",
  },
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 2; // Number of images visible at once

  // Ensure the index loops within the range
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerSlide) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerSlide < 0 ? images.length - itemsPerSlide : prev - itemsPerSlide
    );
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
        <div className="relative w-full overflow-hidden">
          {/* Image Container */}
          <div className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className="w-1/3 h-96 object-cover flex-shrink-0"
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
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

      <div className="my-auto mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-2">About this venue</h2>
        <p className="text-gray-700 mb-2">
          Hotel Grand Highway, Faridabad, is the right place for you if you are looking for a small and cozy place to host your functions. You will find this hotel located off Mathura Road, only a minute away 
          {showMore && (
            <span>
              from Escorts Mujesar Metro Station and 3 minutes away from Faridabad New Town Railway Station, which makes it easily accessible for all. It is home to a couple of banquet halls that can each hold a mid-sized gathering of guests and hence the hotel is ideal for weddings, receptions, engagement functions, cocktail parties, birthday parties, anniversaries, reunions, kitty parties, family events, promotion parties, farewell parties, and corporate events like seminars, conferences, presentations, and meetings.
              Hotel Grand Highway, Mathura Road, Faridabad, has chefs that make sure you and your guest are treated to the best vegetarian and non-vegetarian delicacies. The decor here is looked after by a team of experts present at the hotel, and they deliver impressive decor and set-up for your functions. The hotel also looks after the comfort of your outstation guests by offering its relaxing rooms decked up with all the basic amenities. The highly-trained staff here will ensure that you and all of your guests are extremely comfortable here by looking into the smallest of your requirements. Parking space is also available for a limited number of vehicles here.
              So come and have a memorable time at Hotel Grand Highway, Faridabad.
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
          <span className="text-lg font-semibold">Call Hotel Grand Highway</span>
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
          <span className="text-4xl font-bold text-green-600">3.4</span>
          <div className="flex space-x-1">{renderStars(3.4)}</div>
          <span className="text-gray-600">55 Ratings & Reviews</span>
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

      <div className="p-6 bg-gray-50">
        {/* Venue Address Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">📍 Venue Address</h2>
        <p className="text-gray-700 mb-4">
          Hotel Grand Highway, Escorts Mujesar Metro Station, Plot No. 3, DLF Sector-11,
          Haryana, Sector 11, Pocket A, Faridabad, Haryana 121006
          <a
            href="https://www.google.co.in/maps/place/Hotel+grand+highway/@28.3693512,77.3126315,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline ml-2"
          >
            Get Directions →
          </a>
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Google Maps Embed (Without API Key) */}
          <div className="rounded-lg overflow-hidden border shadow-lg">
            <iframe
              title="Google Maps"
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7000.0000000000005!2d77.3126315!3d28.3693512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdda860b5a43b%3A0x6570872dc7ba3f81!2sHotel%20Grand%20Highway!5e0!3m2!1sen!2sin!4v1710172592489"
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
        <h2 className="text-2xl font-bold mb-2">Venue Expert notes</h2>
        <p className="text-gray-700 mb-2">
          Hotel Grand Highway, Faridabad, is an elegant hotel located off Mathura Road, promising comfort and excellent services at very pocket-friendly prices. It offers a couple of spacious banquet halls
          {showMore && (
            <span>
              that are ideal for a range of events, from weddings, receptions, sangeet, and engagement functions, to birthday parties, anniversaries, promotion and farewell parties, to even corporate seminars, meetings, and conferences. Located at a well-connected place, the hotel offers ease of commute to everyone regardless of their choice of transport. Catering, decor, and alcohol are all taken care of by the in-house teams. The staff here will make sure that your event is a well organized, classy affair. Cozy lodging rooms, a complimentary changing room with the hall, and parking space are added perks. Book Hotel Grand Highway for a memorable experience.
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
          <li>• Serves both veg and non-veg food</li>
          <li>• In-house decor and catering services provided</li>
        </ul>
        <ul className="space-y-3">
          <li>• Located only a minute away from Escorts Mujesar Metro Station</li>
          <li>• Parking space and changing rooms available</li>
        </ul>
      </div>
      </div>
      

      {/* venue policies section */}

      <div className="p-6 bg-white">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Venue policies</h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8 text-gray-800">

          {/* Column 1 */}
          <div>
            <h3 className="font-semibold">Timings & Slots <span className="text-gray-500 text-sm">(Venue close at 6:00 AM)</span></h3>
            <p className="mt-1"><strong>Morning</strong> <br /> 9:30 AM - 6:00 PM</p>
            <p className="mt-1"><strong>Evening</strong> <br /> 7:00 PM - 6:00 AM</p>

            <h3 className="font-semibold mt-4">Taxes</h3>
            <ul className="list-disc list-inside">
              <li>Taxes F&B : 18.00 %</li>
            </ul>

            <h3 className="font-semibold mt-4">Lodging</h3>
            <ul className="list-disc list-inside">
              <li>Rooms Available</li>
              <li>No. of rooms: 22</li>
              <li>Average price of room: Rs. 1000 /-</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold">Changing Room at</h3>
            <ul className="list-disc list-inside">
              <li>No. of complimentary changing rooms: 2</li>
              <li>Changing Room A/C</li>
            </ul>

            <h3 className="font-semibold mt-4">Parking At</h3>
            <ul className="list-disc list-inside">
              <li>No Valet provided by venue</li>
              <li>Parking space available for 25 vehicles</li>
            </ul>

            <h3 className="font-semibold mt-4">Alcohol</h3>
            <ul className="list-disc list-inside">
              <li>Alcohol allowed at the venue</li>
              <li>Outside alcohol allowed at the venue</li>
              <li>No corkage costs applicable</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold">Advance</h3>
            <ul className="list-disc list-inside">
              <li>25% at the time of booking</li>
            </ul>

            <h3 className="font-semibold mt-4">Cancellation</h3>
            <ul className="list-disc list-inside">
              <li>Non cancellable</li>
            </ul>

            <h3 className="font-semibold mt-4">Food</h3>
            <ul className="list-disc list-inside">
              <li>Food provided by the venue</li>
              <li>No outside food/caterer allowed at the venue</li>
              <li>Non-Veg allowed at the venue</li>
            </ul>

            <h3 className="font-semibold mt-4">Decoration</h3>
            <ul className="list-disc list-inside">
              <li>No Outside decorators allowed</li>
              <li>Decor provided by the venue</li>
            </ul>

            <h3 className="font-semibold mt-4">Other Policies</h3>
            <ul className="list-disc list-inside">
              <li>No Music allowed late</li>
              <li>Halls are air conditioned</li>
              <li>Ample parking</li>
              <li>Baarat allowed</li>
              <li>Fire crackers allowed</li>
              <li>Hawan allowed</li>
              <li>Overnight wedding allowed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* call us section */}

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

export default Photo;