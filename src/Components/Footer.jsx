import React from "react";
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-6">
          {/* Left Section */}
          <div>
            <h3 className="font-semibold text-white mb-3">GET INSPIRED</h3>
            <ul className="space-y-2">
              {["Photos", "Real Weddings", "Blog"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="font-semibold text-white mb-3">COMPANY</h3>
            <ul className="space-y-2">
              {[
                "Partner Login", "FAQ", "Terms & Conditions", "Privacy Policy",
                "Newsroom", "Testimonials", "List your Business", "Deals",
                "Non-Partner Listing", "Responsible Disclosure"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="md:text-right text-center">
            <h3 className="font-semibold text-white mb-3">BanquetHalls.co</h3>
            <p className="text-gray-400">Call our 24-hour helpline</p>
            <p className="text-lg font-bold text-white mt-2">764567377</p>
            <p className="mt-2">
              <a href="mailto:info.weddingz@oyorooms.com" className="text-blue-400 hover:underline">
                info.weddingz@oyorooms.com
              </a>
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          {[FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaYoutube].map((Icon, index) => (
            <a key={index} href="#" className="text-gray-400 hover:text-white">
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            "https://upload.wikimedia.org/wikipedia/commons/0/04/MasterCard-logo.png",
            "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
            "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
            "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d8/Discover_Card_logo.svg",
          ].map((src, index) => (
            <img key={index} src={src} alt="Payment method" className="h-8 w-auto" />
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs mt-6">
          © {new Date().getFullYear()} Banquet Halls. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;