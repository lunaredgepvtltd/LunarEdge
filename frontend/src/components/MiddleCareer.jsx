import React from 'react';

const MiddleCareer = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl px-4 py-8">
        <h1 className="text-center text-4xl font-semibold text-gray-100 mb-8">Openings</h1>
        
        <div className="space-y-6">
          {/* First Job Opening */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">UI/UX Designer</h2>
              <div className="flex space-x-4 mt-2 text-gray-600">
                <div className="flex items-center">
                  <span className="mr-2">&#x1F4BC;</span> 2-5 years
                </div>
                <div className="flex items-center">
                  <span className="mr-2">&#x1F4BB;</span> On-site
                </div>
                <div className="flex items-center">
                  <span className="mr-2">&#x1F4CD;</span> Jaipur
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold">
              APPLY
            </button>
          </div>

          {/* Second Job Opening */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Digital Marketing Content Writer</h2>
              <div className="flex space-x-4 mt-2 text-gray-600">
                <div className="flex items-center">
                  <span className="mr-2">&#x1F4BC;</span> 2+ years
                </div>
                <div className="flex items-center">
                  <span className="mr-2">&#x1F4BB;</span> On-site
                </div>
                <div className="flex items-center">
                  <span className="mr-2">&#x1F4CD;</span> Jaipur
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold">
              APPLY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleCareer;
