import React from 'react';

const HowWeDo = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-purple-200 min-h-screen py-10">
      <h1 className="text-3xl font-bold mb-10">How we do</h1>
      <div className="space-y-10 max-w-md">
        {/* Step 1 */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full"></div>
          <div className="flex-1 bg-gray-400 rounded-lg p-4 text-white font-semibold">
            Initial Consultation and Requirement Gathering
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="border-dotted border-l-4 border-black h-10"></div>
        </div>
        {/* Step 2 */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-gray-400 rounded-lg p-4 text-white font-semibold">
            Proposal and Project Planning
          </div>
          <div className="w-16 h-16 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full"></div>
        </div>
        <div className="flex items-center justify-center">
          <div className="border-dotted border-l-4 border-black h-10"></div>
        </div>
        {/* Step 3 */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full"></div>
          <div className="flex-1 bg-gray-400 rounded-lg p-4 text-white font-semibold">
            Design and Prototyping
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="border-dotted border-l-4 border-black h-10"></div>
        </div>
        {/* Step 4 */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-gray-400 rounded-lg p-4 text-white font-semibold">
            Quality Assurance and Testing
          </div>
          <div className="w-16 h-16 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full"></div>
        </div>
        <div className="flex items-center justify-center">
          <div className="border-dotted border-l-4 border-black h-10"></div>
        </div>
        {/* Step 5 */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full"></div>
          <div className="flex-1 bg-gray-400 rounded-lg p-4 text-white font-semibold">
            Deployment and Implementation
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="border-dotted border-l-4 border-black h-10"></div>
        </div>
        {/* Step 6 */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-gray-400 rounded-lg p-4 text-white font-semibold">
            Post-Deployment Support
          </div>
          <div className="w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDo;
