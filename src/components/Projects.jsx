import React from "react";
import { motion } from "framer-motion";
import projects from "../files/projects-data"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="bg-lightGray text-black py-16 px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-accent mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-secondary text-white rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent flex items-center gap-2 hover:underline"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
