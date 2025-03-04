import React from "react";
import { ClipboardList, Handshake, Map, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import Footer from "../Components/Footer";
import ImageCarousel from "../Components/ImageCorosal";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import Navbar from "../Components/Navbar"; 
import faridabad from "../assets/faridabad.webp";
import noida from "../assets/noida.jpg";
import southDelhi1 from "../assets/southdelhi1.jpg";
import gurgao from "../assets/gurgao.png";
import decor from "../assets/decor01.jpeg";
import destinationwedding from "../assets/destinationwedding.webp"
import weddecor from "../assets/weddecor.png";
import makeup from "../assets/makeup02.jpeg";


const cityData = [
  {
    name: "Faridabad",
    image: faridabad, // Replace with actual image
  },
  {
    name: "Noida",
    image: noida, // Replace with actual image
  },
  {
    name: "South Delhi",
    image: southDelhi1, // Replace with actual image
  },
  {
    name: "Gurgaon",
    image: gurgao, // Replace with actual image
  },
];

const steps = [
  {
    id: 1,
    icon: <ClipboardList size={48} className="text-white" />,
    title: "Discover & Shortlist Venues",
    description: "Input your requirements & see our recommendations & prices.",
  },
  {
    id: 2,
    icon: <Handshake size={48} className="text-white" />,
    title: "Guided Visits",
    description: "Visit venues on your own or with our venue expert.",
  },
  {
    id: 3,
    icon: <Map size={48} className="text-white" />,
    title: "Book Venue",
    description: "Get final quotes (upto 30% off) and book your venue.",
  },
  {
    id: 4,
    icon: <Users size={48} className="text-white" />,
    title: "Book Vendors",
    description: "Meet our trusted vendors and book them at your ease.",
  },
];

const images = [
  { src: noida, title: "Destination Weddings" },
  { src: noida, title: "Photography" },
  { src: noida, title: "Decor" },
  { src: noida, title: "Bridal Jewellery" },
];

const App = () => {

  const socialMedia = [
    {
      platform: "Instagram",
      username: "@banquethalls.co",
      image: decor,
      profileUrl: "https://www.instagram.com/banquethall.co/?hl=en",
      actionText: "Follow",
      bgColor: "bg-gradient-to-r from-pink-500 to-purple-500",
    },
    {
      platform: "Facebook",
      username: "@banquethalls.co",
      image: destinationwedding,
      profileUrl: "https://www.facebook.com/profile.php?id=61573440526154",
      actionText: "Like Page",
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
    },
    {
      platform: "Pinterest",
      username: "@banquethalls.co",
      image: weddecor,
      profileUrl: "https://www.pinterest.com/banquethallco/?actingBusinessId=1104859858492208666",
      actionText: "Pin It",
      bgColor: "bg-gradient-to-r from-red-500 to-red-700",
    },
    {
      platform: "Snapchat",
      username: "@banquethalls.co",
      image: makeup,
      profileUrl: "",
      actionText: "Scan & Add",
      bgColor: "bg-gradient-to-r from-yellow-400 to-yellow-500",
    },
  ];

  return (
    <div>
      <Navbar />
      
      <section className="text-center my-12 px-6">
        {/* Title & Description */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Hassle Free Planning & Booking at Our Guaranteed Best Prices.
        </h2>
        <p className="text-gray-600 mt-2">
          2000+ Events Organized till Date ● Present in 4 Cities ● Over 50+ Wedding Venues & Vendors
        </p>

        {/* Subheading */}
        <h3 className="text-2xl font-bold text-gray-900 mt-8">
          Browse Wedding Venues and Vendors
        </h3>

        {/* City Grid */}
        <div className="grid items-center justify-center md:grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-6 mt-8">
          {cityData.map((city, index) => (
            <div key={index} className="text-center flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-103">
              {/* Image with hover effect */}
              <img
                src={city.image}
                alt={city.name}
                className="w-[360px] h-[360px] object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              />

              {/* City Name */}
              <h4 className="mt-3 text-xl font-bold text-gray-800 tracking-wide">{city.name}</h4>

              {/* Links */}
              <div className="flex justify-center space-x-2 mt-2">
                <a href="#" className="text-red-500 font-medium underline hover:text-red-700 transition-colors duration-300">
                  Banquet Halls
                </a>
                <span className="text-gray-400">|</span>
                <a href="#" className="text-red-500 font-medium underline hover:text-red-700 transition-colors duration-300">
                  Vendors
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="text-center py-12">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How it Works</h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-[repeat(7,auto)] items-center gap-6 md:gap-8 px-4 mt-8">
          {steps.map((step, index) => (
            <>
              {/* Step Item */}
              <div key={step.id} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 flex items-center justify-center bg-red-500 rounded-full shadow-lg transition-transform transform hover:scale-110">
                  {step.icon}
                </div>

                {/* Title */}
                <h4 className="mt-4 text-lg font-semibold text-gray-800">{step.title}</h4>

                {/* Description */}
                <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
              </div>

              {/* Arrow (Only Rendered Between Steps) */}
              {index < steps.length - 1 && (
                <span className="hidden md:block text-gray-400 text-4xl justify-self-center">
                  ➜
                </span>
              )}
            </>
          ))}
        </div>
      </section>
      {/* image carosal needs to be put here */}
      <ImageCarousel/>
      
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-8">
          Connect with Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {socialMedia.map((social, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Social Media Header */}
              <div className="flex items-center space-x-4 p-4 bg-opacity-10">
                {/* Social Media Icon using react-social-icons */}
                <SocialIcon url={social.profileUrl} style={{ width: 50, height: 50 }} />

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{social.username}</h3>
                  <p className="text-sm text-gray-500">On {social.platform}</p>
                </div>
              </div>

              {/* Image Content */}
              <img
                src={social.image}
                alt={social.platform}
                className="w-full h-48 object-cover"
              />

              {/* Follow Button */}
              <div className="p-4">
                <a href={social.profileUrl} target="_blank" rel="noopener noreferrer">
                  <button
                    className={`w-full text-white font-bold py-3 rounded-full flex items-center justify-center space-x-2 ${social.bgColor} transition hover:opacity-90`}
                  >
                    <span>{social.actionText}</span>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">

          {/* Left Section - Call Us */}
          <div className="text-center md:text-left space-y-6">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <FaPhoneAlt className="text-red-500 text-4xl" />
              <h2 className="text-3xl font-bold">
                CALL US: <span className="text-red-500">+91 9266 948 375</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm">Available 24/7 - Call now for assistance</p>

            {/* OR Divider */}
            <div className="flex items-center justify-center md:justify-start my-6">
              <span className="border border-white px-6 py-2 rounded-full text-lg text-white">
                OR
              </span>
            </div>

            {/* Call Back Offer */}
            <h3 className="text-2xl font-bold">
              <span className="text-red-500">HAVE US CALL YOU</span> & GET UP TO{" "}
              <span className="text-white">30% OFF</span>
            </h3>

            {/* Call to Action Button */}
            <button className="mt-4 px-8 py-3 bg-red-500 text-white rounded-full text-lg font-semibold transition-transform transform hover:scale-110 shadow-lg">
              Request a Call Back
            </button>
          </div>

          {/* Right Section - Key Points */}
          <div className="text-left">
            <ul className="space-y-5">
              {[
                "India's Largest Wedding Company",
                "Find, Compare, and Book Wedding Venues & Services",
                "Best Prices Guaranteed",
                "Find Inspiration, Ideas, and Insights for Your Wedding",
              ].map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FaCheckCircle className="text-red-500 text-2xl mt-1" />
                  <p className="text-lg">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
      </div>
  );
};

export default App;