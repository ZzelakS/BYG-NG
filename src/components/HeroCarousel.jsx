import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/carousel.jpg";
import image2 from "../assets/carousel1.jpg";
import image3 from "../assets/carousel2.jpg";
import image4 from "../assets/carousel3.jpg";

const slides = [
  { id: 1, image: image1},
  { id: 2, image: image2},
  { id: 3, image: image3},
  { id: 4, image: image4},
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) {
      prevSlide();
    } else if (info.offset.x < -50) {
      nextSlide();
    }
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <div className="relative w-full h-full flex">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slides[currentIndex].id}
            className="absolute inset-0 w-full h-full"
            initial={{ x: direction === 1 ? "100%" : "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: direction === 1 ? "-100%" : "100%" }}
            transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <img src={slides[currentIndex].image} alt={slides[currentIndex].title} className="w-full h-full object-cover" />
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-6">
              <h2 className="text-3xl md:text-5xl font-bold">{slides[currentIndex].title}</h2>
              <p className="mt-2 text-lg md:text-xl">{slides[currentIndex].description}</p>
            </div> */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      {/* <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-900 bg-opacity-50 text-white rounded-full hover:bg-opacity-80 transition">
        <ChevronLeft size={30} />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-900 bg-opacity-50 text-white rounded-full hover:bg-opacity-80 transition">
        <ChevronRight size={30} />
      </button> */}

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition ${currentIndex === index ? "bg-white" : "bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
