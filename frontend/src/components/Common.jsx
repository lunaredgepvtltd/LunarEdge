import React from "react";
import { Link } from "react-router-dom";

const Common = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="text-center flex flex-col justify-center gap-8 p-8 md:p-14 bg-white shadow-xl rounded-lg max-w-4xl mx-4 border border-gray-300">
        <div className="mb-4">
          <h1 className="text-2xl md:text-6xl font-bold text-gray-900 mb-4">
            🚧 Work in Progress!
          </h1>
          <p className="text-md md:text-xl text-gray-700">
            Our website is currently under construction. We are excited to share
            the new experience with you. Stay tuned for updates!
          </p>
        </div>
        <Link
          to="/"
          className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 border border-purple-600 mx-auto transition-all duration-300 w-full md:w-[50%] inline-block text-center"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Common;
