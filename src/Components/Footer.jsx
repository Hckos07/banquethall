import React from "react";
import {
  FaFacebookF,
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
          {/* Left Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get Inspired</h3>
            <ul className="space-y-2">
              <li>
                <a href="/photos" className="text-gray-400 hover:text-white transition">Photos</a>
              </li>
              <li>
                <a href="/images" className="text-gray-400 hover:text-white transition">Images</a>
              </li>
            </ul>

            {/* Map Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Our Location</h3>
              <iframe
                title="Company Location"
                width="100%"
                height="150"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                className="rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.020126454377!2d77.2565615775865!3d28.535516959635803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a853b4c221%3A0x9a4c8490b7fbd22b!2sKalkaji%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1708888888888"
                allowFullScreen
              ></iframe>
              <p className="flex items-center space-x-2 text-gray-400 mt-3">
                <FaMapMarkerAlt className="text-red-500" />
                <span>39/1100, L1, Kalkaji, New Delhi-110019</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", link: "/" },
                { name: "Why Us", link: "/whyus" },
                { name: "Venues", link: "/venues" },
                { name: "Testimonials", link: "/testimonials" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Section */}
          <div className="md:text-right text-center">
            <h3 className="text-lg font-semibold text-white mb-4">BanquetHalls.co</h3>
            <p className="text-gray-400">Reach out to us anytime</p>

            {/* Phone & Email */}
            <div className="mt-4 space-y-2">
              <p className="flex items-center justify-center md:justify-end space-x-2">
                <FaPhoneAlt className="text-green-400" />
                <span className="text-lg font-semibold">+91 8375967071</span>
              </p>
              <p className="flex items-center justify-center md:justify-end space-x-2">
                <FaEnvelope className="text-blue-400" />
                <span className="text-lg">banquethall.co@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-5 mt-8">
          {[
            { Icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61573440526154" },
            { Icon: FaPinterest, link: "https://www.pinterest.com/banquethallco/?actingBusinessId=1104859858492208666" },
            { Icon: FaInstagram, link: "https://www.instagram.com/banquethall.co/?hl=en" },
            { Icon: FaYoutube, link: "https://www.youtube.com/yourchannel" },
          ].map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition transform hover:scale-110"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
            "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
            "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg",
          ].map((src, index) => (
            <img key={index} src={src} alt="Payment method" className="h-7 w-auto" />
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs mt-8">
          © {new Date().getFullYear()} Banquet Halls. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;