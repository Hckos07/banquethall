import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Close icon
import decor01 from "../assets/decor01.jpeg";
import bridalwear from "../assets/bridalwear01.jpeg";
import jewellery from "../assets/jewellery01.jpeg";
import makeup from "../assets/makeup02.jpeg";
import mehendi from "../assets/mehendi03.jpeg";
import destinationwedding from "../assets/destinationwedding.webp"
import decor1 from "../assets/decor/decor1.jpeg";
import decor2 from "../assets/decor/decor2.jpeg";
import decor3 from "../assets/decor/decor3.jpeg";
import decor4 from "../assets/decor/decor4.jpeg";
import decor5 from "../assets/decor/decor5.jpeg";
import decor6 from "../assets/decor/decor6.jpeg";
import decor7 from "../assets/decor/decor7.jpeg";
import decor8 from "../assets/decor/decor8.jpeg";
import decor9 from "../assets/decor/decor9.jpeg";
import decor10 from "../assets/decor/decor10.jpeg";
import decor11 from "../assets/decor/decor11.jpeg";
import decor12 from "../assets/decor/decor12.jpeg";
import bride1 from "../assets/bride/bride1.jpg";
import bride2 from "../assets/bride/bride2.jpg";
import bride3 from "../assets/bride/bride3.jpg";
import bride4 from "../assets/bride/bride4.jpg";
import bride5 from "../assets/bride/bride5.jpg";
import bride6 from "../assets/bride/bride6.jpg";
import bride7 from "../assets/bride/bride7.jpg";
import bride8 from "../assets/bride/bride8.jpg";
import bride9 from "../assets/bride/bride9.jpg";
import bride10 from "../assets/bride/bride10.jpg";
import bride11 from "../assets/bride/bride11.jpg";
import bride12 from "../assets/bride/bride12.jpg";
import bride13 from "../assets/bride/bride13.jpg";
import bride14 from "../assets/bride/bride14.jpg";
import bride15 from "../assets/bride/bride15.jpg";

// Image categories with related images
const imageCategories = [
  { title: "Bridalwear", src: bridalwear, relatedImages: [bride1,bride2,bride3,bride4,bride5,bride6,bride7,bride8,bride9,bride10,bride11,bride12,bride13,bride14,bride15] },
  { title: "Decor", src: decor01, relatedImages: [decor1,decor2,decor3,decor4,decor5,decor6, decor7, decor9,decor11,decor9,decor12] },
  { title: "Jewellery", src: jewellery, relatedImages: [] },
  { title: "Makeup", src: makeup, relatedImages: [] },
  { title: "Mehndi", src: mehendi, relatedImages: [] },
  { title: "Destination Wedding", src: destinationwedding, relatedImages: [] },
];

// All images to display initially
const allImages = [
  decor6, decor2, decor3, decor4, decor5, decor1, decor7, decor9, decor11, decor8, decor10, decor12,bride1, bride2, bride3, bride4, bride5, bride6, bride7, bride8, bride9, bride10, bride11, bride12, bride13, bride14, bride15
];

const ImageGallery = () => {
  const [filteredImages, setFilteredImages] = useState(allImages);
  const [modalImage, setModalImage] = useState(null);

  const handleTileClick = (images) => {
    setFilteredImages(JSON.stringify(filteredImages) === JSON.stringify(images) ? allImages : images);
  };

  return (
    <div className="w-full px-6 py-12">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Our Photography Gallery
      </motion.h2>

      {/* Category Tiles */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {imageCategories.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer group shadow-xl"
            onClick={() => handleTileClick(item.relatedImages)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Main Tile Image */}
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-opacity duration-300"
            />

            {/* Title Overlay */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center text-lg font-semibold py-2">
              {item.title}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <div className="w-full border-t-2 border-gray-300 mb-8"></div>

      {/* Display Images */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setModalImage(image)}
          >
            <img src={image} alt="Filtered" className="w-full h-auto object-cover" />
          </motion.div>
        ))}
      </motion.div>

      {/* Fullscreen Image Model */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
          >
            <motion.div
              className="relative rounded-lg shadow-2xl p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
            >
              <button
                className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2"
                onClick={() => setModalImage(null)}
              >
                <X size={24} />
              </button>
              <img src={modalImage} alt="Enlarged" className="max-w-full max-h-[80vh] rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;