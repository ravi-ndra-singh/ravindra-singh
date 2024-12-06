import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa"; // Importing an icon for the button

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className={`fixed bottom-6 right-6 z-50 ${isVisible ? "block" : "hidden"}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={scrollToTop}
        className="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
    </motion.div>
  );
};

export default ScrollToTop;
