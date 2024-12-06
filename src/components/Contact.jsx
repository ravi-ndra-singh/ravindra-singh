import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaCode } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-darkGray text-white py-16 px-8 md:px-16 lg:px-24"
    >
      {/* Contact Me Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-4">
          Contact Me
        </h2>
        <p className="text-lg md:text-xl text-lightGray leading-relaxed">
          I would love to hear from you! Whether you have a project idea, a
          collaboration proposal, or just want to connect, feel free to reach out.
        </p>
      </motion.div>

      {/* Contact Form and Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <motion.form
            action="mailto:hello.ravindra101@gmail.com"
            method="POST"
            encType="multipart/form-data"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {/* Name */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="name" className="text-lg font-medium text-lightGray">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                className="px-4 py-2 mt-2 rounded-lg border border-gray-300 text-black"
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="email" className="text-lg font-medium text-lightGray">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                className="px-4 py-2 mt-2 rounded-lg border border-gray-300 text-black"
                required
              />
            </motion.div>

            {/* Message */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <label htmlFor="message" className="text-lg font-medium text-lightGray">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here"
                className="px-4 py-2 mt-2 rounded-lg border border-gray-300 text-black"
                required
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="flex justify-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-dark transition-colors"
              >
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-lightGray mb-4">
            Or Reach Me At
          </h3>
          <p className="text-lg text-lightGray">
            Email:{" "}
            <a
              href="mailto:hello.ravindra101@gmail.com"
              className="text-accent hover:underline"
            >
              hello.ravindra101@gmail.com
            </a>
          </p>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-8">
            <a href="https://www.instagram.com/ravi.ndra_singh/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
            <a href="https://www.linkedin.com/in/ravi-ndra-singh/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
          </div>
        </motion.div>
      </div>
      <p className="text-center">© Ravindra Singh</p>
    </section>
  );
};

export default Contact;
