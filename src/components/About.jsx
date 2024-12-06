import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-lightGray py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center w-full px-6 md:px-12 lg:px-24">
        {/* Left Section - Rotated About Me */}
        <motion.div
          className="md:col-span-3 flex justify-center items-center py-16 md:py-48 bg-secondary w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white transform rotate-0 md:-rotate-90 whitespace-nowrap">
            About Me
          </h2>
        </motion.div>

        {/* Right Section - Content */}
        <motion.div
          className="md:col-span-9 text-left md:px-8 lg:px-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
          I am Ravindra Singh, Co-founder and CTO at StellaNex, where I am on a mission to revolutionize education through the transformative power of robotics. At StellaNex, we believe in empowering the next generation with cutting-edge technology that makes learning not just more engaging but truly transformative.
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-black leading-relaxed">
          With a strong foundation as a robotics engineer, I bring technical expertise and a passion for innovation to the table. My journey in robotics has been driven by the desire to solve complex challenges and create impactful solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
