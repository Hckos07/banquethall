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
import jewe1 from "../assets/jewellery/jewe1.jpg";
import jewe2 from "../assets/jewellery/jewe2.jpg";
import jewe3 from "../assets/jewellery/jewe3.jpg";
import jewe4 from "../assets/jewellery/jewe4.jpg";
import jewe6 from "../assets/jewellery/jewe6.jpg";
import jewe7 from "../assets/jewellery/jewe7.jpg";
import jewe8 from "../assets/jewellery/jewe8.jpg";
import jewe9 from "../assets/jewellery/jewe9.jpg";
import jewe10 from "../assets/jewellery/jewe10.jpg";
import jewe11 from "../assets/jewellery/jewe11.jpg";
import jewe12 from "../assets/jewellery/jewe12.jpg";
import jewe13 from "../assets/jewellery/jewe13.jpg";
import jewe15 from "../assets/jewellery/jewe15.jpg";
import jewe16 from "../assets/jewellery/jewe16.jpg";
import jewe17 from "../assets/jewellery/jewe17.jpg";
import jewe18 from "../assets/jewellery/jewe18.jpg";
import makeup1 from "../assets/makeup/makeup1.jpg";
import makeup2 from "../assets/makeup/makeup2.jpg";
import makeup3 from "../assets/makeup/makeup3.jpg";
import makeup4 from "../assets/makeup/makeup4.jpg";
import makeup5 from "../assets/makeup/makeup5.jpg";
import makeup6 from "../assets/makeup/makeup6.jpg";
import makeup7 from "../assets/makeup/makeup7.jpg";
import makeup8 from "../assets/makeup/makeup8.jpg";
import makeup9 from "../assets/makeup/makeup9.jpg";
import makeup10 from "../assets/makeup/makeup10.jpg";
import makeup11 from "../assets/makeup/makeup11.jpg";
import makeup12 from "../assets/makeup/makeup12.jpg";
import makeup13 from "../assets/makeup/makeup13.jpg";
import makeup14 from "../assets/makeup/makeup14.jpg";
import makeup15 from "../assets/makeup/makeup15.jpg";
import makeup16 from "../assets/makeup/makeup16.jpg";
import makeup17 from "../assets/makeup/makeup17.jpg";
import makeup18 from "../assets/makeup/makeup18.jpg";
import mehndi1 from "../assets/mehndi/mehndi1.jpg";
import mehndi2 from "../assets/mehndi/mehndi2.jpg";
import mehndi3 from "../assets/mehndi/mehndi3.jpg";
import mehndi4 from "../assets/mehndi/mehndi4.jpg";
import mehndi5 from "../assets/mehndi/mehndi5.jpg";
import mehndi6 from "../assets/mehndi/mehndi6.jpg";
import mehndi7 from "../assets/mehndi/mehndi7.jpg";
import mehndi8 from "../assets/mehndi/mehndi8.jpg";
import mehndi9 from "../assets/mehndi/mehndi9.jpg";
import mehndi10 from "../assets/mehndi/mehndi10.jpg";
import mehndi11 from "../assets/mehndi/mehndi11.jpg";
import mehndi12 from "../assets/mehndi/mehndi12.jpg";
import mehndi13 from "../assets/mehndi/mehndi13.jpg";
import mehndi14 from "../assets/mehndi/mehndi14.jpg";
import mehndi15 from "../assets/mehndi/mehndi15.jpg";
import mehndi16 from "../assets/mehndi/mehndi16.jpg";
import mehndi17 from "../assets/mehndi/mehndi17.jpg";
import mehndi18 from "../assets/mehndi/mehndi18.jpg";
import mehndi19 from "../assets/mehndi/mehndi19.jpg";
import mehndi20 from "../assets/mehndi/mehndi20.jpg";
import dest1 from "../assets/destination/dest1.jpg";
import dest2 from "../assets/destination/dest2.jpg";
import dest3 from "../assets/destination/dest3.jpg";
import dest4 from "../assets/destination/dest4.jpg";
import dest5 from "../assets/destination/dest5.jpg";
import dest6 from "../assets/destination/dest6.jpg";
import dest7 from "../assets/destination/dest7.jpg";
import dest8 from "../assets/destination/dest8.jpg";
import dest9 from "../assets/destination/dest9.jpg";
import dest10 from "../assets/destination/dest10.jpg";
import dest11 from "../assets/destination/dest11.jpg";
import dest12 from "../assets/destination/dest12.jpg";
import dest13 from "../assets/destination/dest13.jpg";
import dest14 from "../assets/destination/dest14.jpg";
import dest16 from "../assets/destination/dest16.jpg";
import dest17 from "../assets/destination/dest17.jpg";

// Image categories with related images
const imageCategories = [
  { title: "Bridalwear", src: bridalwear, relatedImages: [bride1,bride2,bride3,bride4,bride5,bride6,bride7,bride8,bride9,bride10,bride11,bride12,bride13,bride14,bride15] },
  { title: "Decor", src: decor01, relatedImages: [decor1,decor2,decor3,decor4,decor5,decor6, decor7, decor9,decor11,decor9,decor12] },
  { title: "Jewellery", src: jewellery, relatedImages: [jewe1,jewe2,jewe3,jewe4,jewe6,jewe7,jewe11,jewe12,jewe10,jewe8,jewe9,jewe13,jewe15,jewe16,jewe17,jewe18] },
  { title: "Makeup", src: makeup, relatedImages: [ makeup2, makeup3, makeup5, makeup6, makeup7, makeup8, makeup9, makeup10, makeup11, makeup12, makeup13, makeup14, makeup15, makeup16, makeup17, makeup18] },
  { title: "Mehndi", src: mehendi, relatedImages: [mehndi1, mehndi2, mehndi3, mehndi4, mehndi5, mehndi6, mehndi7, mehndi8, mehndi9, mehndi10, mehndi11, mehndi12, mehndi13, mehndi14, mehndi15, mehndi16, mehndi17, mehndi18, mehndi19, mehndi20] },
  { title: "Destination Wedding", src: destinationwedding, relatedImages: [dest1, dest2, dest3, dest4, dest5, dest6, dest7, dest8, dest9, dest10, dest11, dest12, dest13, dest14, dest16, dest17] },
];

// All images to display initially
const allImages = [
  decor6, decor2, decor3, decor4, decor5, decor1, decor7, decor9, decor11, decor8, decor10, decor12, bride1, bride2, bride3, bride4, bride5, bride6, bride7, bride8, bride9, bride10, bride11, bride12, bride13, bride14, bride15, jewe1, jewe2, jewe3, jewe4, jewe6, jewe7, jewe11, jewe12, jewe10, jewe8, jewe9, jewe13, jewe15, jewe16, jewe17, jewe18, makeup2, makeup3, makeup5, makeup6, makeup7, makeup8, makeup9, makeup10, makeup11, makeup12, makeup13, makeup14, makeup15, makeup16, makeup17, makeup18, mehndi1, mehndi2, mehndi3, mehndi4, mehndi5, mehndi6, mehndi7, mehndi8, mehndi9, mehndi10, mehndi11, mehndi12, mehndi13, mehndi14, mehndi15, mehndi16, mehndi17, mehndi18, mehndi19, mehndi20, dest1, dest2, dest3, dest4, dest5, dest6, dest7, dest8, dest9, dest10, dest11, dest12, dest13, dest14, dest16, dest17
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