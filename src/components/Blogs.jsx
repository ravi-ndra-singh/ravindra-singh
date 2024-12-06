import React from "react";
import { motion } from "framer-motion";
import blogs from "../files/blogs-data"

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="bg-white text-black py-16 px-8 md:px-16 lg:px-24"
    >
      {/* Blogs Section Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-4">
          Latest Blogs
        </h2>
        <p className="text-lg md:text-xl text-black leading-relaxed">
          Stay updated with my latest thoughts on robotics, programming, AI, and 3D modeling.
        </p>
      </motion.div>

      {/* Blogs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="bg-lightGray p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-accent mb-4">{blog.title}</h3>
            <p className="text-lg text-black mb-4">{blog.description}</p>
            <a
              href={blog.link}
              className="text-accent font-semibold hover:underline"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
