import React from 'react';
import { FiPhoneCall } from "react-icons/fi";


function ContactUs() {
  return (
    <div className="bg-custom-gradient py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How we can help you?</h2>
        <h3 className="text-2xl font-semibold mb-12">CONTACT US</h3>
        <div className="flex flex-wrap justify-center w-[70%] mx-auto">
          {/* Phone */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gradient-to-r from-pink-400 to-yellow-300 rounded-lg py-8 px-16 shadow-lg">
              <div className="text-4xl text-gray-800 rounded-full  mx-auto mb-4 h-16 w-16 flex items-center justify-center">
              <FiPhoneCall />
              </div>
              <p className="text-gray-800">0141-4512611 (Office)</p>
              <p className="text-gray-800">+91-9829011076 (Sandeep Katariya)</p>
              <p className="text-gray-800">+91-7760701155 (Sanjeev Ola)</p>
            </div>
          </div>
          {/* Location */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gradient-to-r from-pink-400 to-yellow-300 rounded-lg p-8 shadow-lg">
              <div className="text-4xl text-gray-800 rounded-full  mx-auto mb-4 h-16 w-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-800">
                203, Manglam, Signature Tower , Lal Kothi, Gandhi Nagar, Jaipur,
                Rajasthan - 302015
              </p>
            </div>
          </div>
          {/* Email */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gradient-to-r from-pink-400 to-yellow-300 rounded-lg p-8 shadow-lg">
              <div className="text-4xl text-gray-800 rounded-full  mx-auto mb-4 h-16 w-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-800">info@lunaredge.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;