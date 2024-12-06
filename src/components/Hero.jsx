import React from "react";
import { motion } from "framer-motion";
import photo from "../assets/photo.png"; // Import your photo

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-accent to-secondary h-screen flex items-center px-6 sm:px-8 md:px-16 lg:px-24">
      {/* Container with grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        {/* Left Section - Information */}
        <div className="text-left">
          {/* Name and Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            HI, THERE!
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            I'm Ravindra
          </motion.h1>
          <motion.p
            className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-lightGray leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Director & CTO @ StellaNex | Robotics Engineer
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 border-2 rounded-full text-white font-medium hover:bg-accent transition hover:shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-secondary rounded-full text-white font-medium hover:bg-accent transition hover:shadow-lg"
            >
              Connect with me
            </a>
          </motion.div>
        </div>

        {/* Right Section - Full Image */}
        <motion.div
          className="relative flex justify-center items-center w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-lg">
            <img
              src={photo} // Using the imported photo
              alt="Ravindra Singh"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
