import React, { useState } from "react";
import logo from "../assets/logo.png";
import VenueCard from "../Components/Venuecard";
import { FaPhoneAlt, FaUser, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const Noida = () => {
  const [location, setLocation] = useState(""); // State for search input
  const [showDropdown, setShowDropdown] = useState(false); // Toggle dropdown

  // Noida sector options
  const sectors = [
    "Sector 18", "Sector 62", "Sector 15", "Sector 50",
    "Sector 137", "Sector 76", "Sector 45", "Sector 128",
    "Sector 110", "Sector 93A"
  ];

  // Function to handle "Near Me" click
  const handleNearMeClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to access location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };


  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar & Search Bar */}
      <nav className="bg-black text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <h1 className="w-36 h-12">
            <img src={logo} alt="company logo" />
          </h1>

          {/* Contact & User Icon */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-400 text-lg" />
              <span className="text-sm text-gray-300">+91-8048069480</span>
            </div>
            <FaUser className="text-gray-400 text-lg cursor-pointer hover:text-red-500 transition duration-300" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-7xl mx-auto px-6 mt-4">
          <div className="flex bg-gray-900 rounded-lg p-2 items-center space-x-2 shadow-lg relative">
            {/* Search Input */}
            <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg flex-1">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search for Venue, Locality"
                className="bg-transparent text-white outline-none ml-2 flex-1"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Near Me Button */}
            <button
              onClick={handleNearMeClick}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-500 transition duration-300"
            >
              <FaMapMarkerAlt className="text-gray-300" />
              <span>Near Me</span>
            </button>

            {/* Locality Button with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-500 transition duration-300"
              >
                <FaMapMarkerAlt className="text-gray-300" />
                <span>Locality</span>
              </button>

              {/* Dropdown Options */}
              {showDropdown && (
                <div className="absolute top-12 left-0 bg-gray-800 text-white rounded-lg shadow-lg w-48 z-10">
                  {sectors.map((sector, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setLocation(sector);
                        setShowDropdown(false);
                      }}
                      className="block px-4 py-2 w-full text-left hover:bg-red-500 transition duration-300"
                    >
                      {sector}


                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-bold hover:bg-red-600 transition duration-300">
              Search
            </button>
          </div>
        </div>
      </nav>

      {/* Banquet Halls Section */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <h1 className="text-2xl font-bold">Banquet Halls in Noida (17 Venues)</h1>
        <div className="mt-6 grid gap-6">
          <VenueCard />
          <VenueCard />
          <VenueCard />
        </div>
      </div>
    </div>
  );
};

export default Noida;