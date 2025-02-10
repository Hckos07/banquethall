import React from "react";
import { FaPhoneAlt, FaStar, FaCheckSquare, FaVideo } from "react-icons/fa";

const VenueCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      {/* Image Section */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/600x300" // Replace with actual venue image URL
          alt="Grand Vilas"
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
          ✅ Wz Managed
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Venue Name & Rating */}
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold">Grand Vilas</h2>
          <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-lg text-sm">
            <FaStar className="mr-1" /> 4.8 / 5
          </div>
        </div>

        {/* Address */}
        <p className="text-gray-500 text-sm">Grand Vilas, Sector 116, Noida, Uttar Pradesh</p>

        {/* Availability & Contact */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded">50 Pax Packages Available</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded">100-400 Guests</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm flex items-center">
            <FaPhoneAlt className="mr-2" /> +91-8048894481
          </span>
        </div>

        {/* Venue Description */}
        <p className="text-gray-600 text-sm mt-3">
          If you are looking for a grand wedding venue in Noida that...
          <span className="text-blue-500 cursor-pointer"> Read more</span>
        </p>

        {/* Venue Tags */}
        <div className="flex gap-2 mt-3">
          <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">Cocktail Venues</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">Banquet Halls</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">Wedding Lawns</span>
        </div>

        {/* Pricing & Buttons */}
        <div className="flex justify-between items-center mt-4">
          {/* Vegetarian Price */}
          <div className="flex items-center">
            <FaCheckSquare className="text-green-600 mr-2" />
            <span className="text-gray-600 text-sm">Vegetarian</span>
            <span className="ml-3 text-gray-400 text-lg line-through">₹2200</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="border border-red-500 text-red-500 px-4 py-2 flex items-center rounded-md hover:bg-red-500 hover:text-white transition duration-300">
              <FaVideo className="mr-2" /> Video Tour
            </button>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md text-lg font-bold hover:bg-red-600 transition duration-300">
              See Prices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;