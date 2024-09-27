import React from "react";

const TransformingBusinessSection = () => {

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-pink-200 flex flex-col items-center justify-center relative">
      
      <div className="w-full h-auto">
        {/* First row */}
        <div className="w-[95%] h-auto mx-auto flex items-center justify-between">
          <div className="bg-white rounded-full h-20 w-20 lg:h-36 lg:w-36"></div>
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-4">
              TRANSFORMING BUSINESSES THROUGH TECHNOLOGY
            </h1>
            <p className="text-xl md:text-2xl text-center mb-2">
              We harness the latest tools to deliver exceptional results
            </p>
          </div>
          <div className="bg-white rounded-full h-20 w-20 lg:h-36 lg:w-36"></div>
        </div>
        {/* Second row */}
        <div className="w-[75%] h-auto mx-auto flex items-center justify-between bg-b">
          <div className="bg-white rounded-full h-20 w-20 lg:h-36 lg:w-36"></div>
          <div className="bg-white rounded-full h-20 w-20 lg:h-36 lg:w-36"></div>
        </div>
        {/* Third row */}
        <div className="w-[64%] h-auto mx-auto flex items-center justify-between">
          <div className="bg-white rounded-full h-20 w-20 lg:h-36 lg:w-36"></div>
          <div className="bg-white rounded-full h-20 w-20 lg:h-36 lg:w-36"></div>
        </div>
        {/* Fourth row */}
        <div className="w-[47%] h-auto mx-auto flex items-center justify-between">
          <div className="bg-white rounded-full h-20 w-20 lg:h-36 lg:w-36"></div>
          <div className="bg-white rounded-full h-20 w-20 lg:h-36 lg:w-36"></div>
        </div>
        {/* Fifth row */}
        <div className="w-[22%] h-auto mx-auto flex gap-2 relative items-center justify-between">
          <div className="bg-white rounded-full h-20 w-20 lg:h-36 lg:w-36"></div>
          <div className="bg-white rounded-full h-20 w-20 lg:h-36 lg:w-36"></div>
        </div>
      </div>

    </div>
  );
};

export default TransformingBusinessSection;
