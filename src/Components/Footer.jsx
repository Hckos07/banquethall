import React from "react";
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm py-10">
      <div className="max-w-7xl mx-auto px-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-6">
          {/* Left Section */}
          <div>
            <h3 className="font-semibold text-white mb-3">GET INSPIRED</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Photos</a></li>
              <li><a href="#" className="hover:underline">Real Weddings</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="font-semibold text-white mb-3">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Partner Login</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
              <li><a href="#" className="hover:underline">List your Business</a></li>
              <li><a href="#" className="hover:underline">Deals</a></li>
              <li><a href="#" className="hover:underline">Non-Partner Listing</a></li>
              <li><a href="#" className="hover:underline">Responsible Disclosure</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="text-right">
            <h3 className="font-semibold text-white mb-3">Weddingz.in</h3>
            <p className="text-gray-400">Call our 24-hour helpline</p>
            <p className="text-lg font-bold text-white mt-2">76-66-77-88-99</p>
            <p className="mt-2">
              <a href="mailto:info.weddingz@oyorooms.com" className="text-blue-400 hover:underline">
                info.weddingz@oyorooms.com
              </a>
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-5 mt-6">
          <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaPinterest size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={24} /></a>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center space-x-3 mt-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/MasterCard-logo.png" alt="MasterCard" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Discover_Card_logo.svg" alt="Discover" className="h-6" />
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs mt-6">
          © WeddingZ 2019. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;