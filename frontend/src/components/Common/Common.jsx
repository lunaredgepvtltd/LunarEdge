import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations

const Common = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 relative overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white opacity-20"
        animate={{ x: [-50, 100, -50], y: [100, -50, 100] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white opacity-10"
        animate={{ x: [100, -50, 100], y: [-50, 100, -50] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center gap-8 p-8 bg-white shadow-xl rounded-lg max-w-lg mx-auto z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-pulse">
          🚧 Work in Progress!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 transition-colors duration-300 hover:text-gray-900">
          Our website is currently under construction. We are excited to share
          the new experience with you. Stay tuned for updates!
        </p>
        <Link
          to="/"
          className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 border border-purple-600 mx-auto transition-all duration-300 w-full md:w-[50%] inline-block text-center transform transition-transform duration-300 hover:scale-105"
        >
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
};

export default Common;
