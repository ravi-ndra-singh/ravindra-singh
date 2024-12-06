import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRobot, FaPalette, FaCogs, FaBrain, FaCube } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const skills = {
  "Programming": ["Python", "C/C++", "JavaScript", "Embedded C"],
  "Robotics": ["ROS", "Arduino", "Raspberry Pi", "Gazebo", "MATLAB"],
  "Development": ["AWS", "Unreal Engine", "Web Development", "App Development"],
  "3D Modeling": ["Blender", "Fusion 360"],
  "AI ML": ["Artificial Intelligence", "Machine Learning", "Computer Vision"],
  "Design": ["Figma", "Photoshop", "Canva", "Video Editing"],
  "Soft Skills": ["Leadership", "Team Management", "Communication", "Problem Solving"],
};

const categoryIcons = {
  "Programming": <FaCode className="text-3xl text-accent" />,
  "Robotics": <FaRobot className="text-3xl text-accent" />,
  "Development": <FaCogs className="text-3xl text-accent" />,
  "3D Modeling": <FaCube className="text-3xl text-accent" />, 
  "AI ML": <FaBrain className="text-3xl text-accent" />,
  "Design": <FaPalette className="text-3xl text-accent" />,
  "Soft Skills": <FaPerson className="text-3xl text-accent" />,
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-br from-accent to-secondary text-white py-16 px-8 md:px-16 lg:px-24">
      <div className="text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Skills
        </motion.h2>
      </div>

      {/* Skill Categories */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-4">
              {categoryIcons[category]}
              <h3 className="text-2xl font-bold text-accent">{category}</h3>
            </div>
            <ul className="space-y-2">
              {skillList.map((skill, idx) => (
                <li
                  key={idx}
                  className="text-lg font-medium text-gray-800 bg-lightGray px-4 py-2 rounded-lg shadow"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
