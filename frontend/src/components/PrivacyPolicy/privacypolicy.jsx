import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center bg-gray-200 dark:bg-[#131313]">
      <div className="text-center flex flex-col justify-center gap-8 p-8 md:p-14 mt-[30%] md:mt-[8%] mb-[3%] bg-white shadow-xl rounded-lg max-w-4xl mx-4 border border-gray-500 dark:bg-black">
        <div className="mb-4">
          <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-300">
            Privacy Policy
          </h1>
          <p className="text-md md:text-xl text-gray-700 dark:text-gray-300">
            <ul>
              <li className="main-list">
                <b className="privacy-heading">Introduction</b> <br /> We at Lunar Edge is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website{" "}
                <a href="https://lunaredge.in/" className="text-blue-500">
                  https://lunaredge.in/
                </a>{" "}
                , use our services, or engage with us in any other way.
              </li>
              <li className="main-list">
                <b className="privacy-heading">Information We Collect</b>
              </li>
              <li>
                We may collect the following types of information:
                <ul className="ul-list">
                  <li>
                    Personal Information: This includes your name, email
                    address, phone number, and any other information you provide
                    us when you create an account, or contact us.
                  </li>
                  <li>
                    Usage Data: We collect information about how you use our
                    website and services, such as your IP address, browser type,
                    pages visited, and the time and date of your visits.
                  </li>
                  <li>
                    Cookies and Tracking Technologies: We use cookies and
                    similar tracking technologies to monitor activity on our
                    website and store certain information.
                  </li>
                </ul>
              </li>
              <li className="main-list">
                <b className="privacy-heading">How We Use Your Information</b>
              </li>
              <li>
                We may use the information we collect for various purposes,
                including:
                <ul className="ul-list">
                  <li>To provide, maintain, and improve our services</li>
                  <li>
                    To communicate with you, including responding to your
                    inquiries
                  </li>
                  <li>
                    To monitor and analyze usage and trends to improve user
                    experience
                  </li>
                  <li>
                    To comply with legal obligations and protect our rights
                  </li>
                </ul>
              </li>
              <li className="main-list">
                <b className="privacy-heading">Disclosure of Your Information</b>
              </li>
              <li>
                We may share your information in the following situations:
                <ul className="ul-list">
                  <li>
                    With Service Providers: We may share your information with
                    third-party vendors, contractors, and service providers to
                    facilitate our services.
                  </li>
                  <li>
                    For Legal Reasons: We may disclose your information if
                    required to do so by law or in response to valid requests by
                    public authorities.
                  </li>
                  <li>
                    Business Transfers: If we are involved in a merger,
                    acquisition, or asset sale, your personal information may be
                    transferred.
                  </li>
                </ul>
              </li>
              <li className="main-list">
                <b className="privacy-heading">Security of Your Information</b>
              </li>
              <li>
                We take the security of your personal information seriously and
                implement appropriate technical and organizational measures to
                protect it. However, no method of transmission over the Internet
                or method of electronic storage is secure.
              </li>
              <li className="main-list">
                <b className="privacy-heading">Your Rights</b>
              </li>
              <li>
                Depending on your jurisdiction, you may have the following
                rights regarding your personal information:
                <ul className="ul-list">
                  <li>The right to access</li>
                  <li>The right to rectification</li>
                  <li> The right to restrict processing</li>
                  <li> The right to data portability</li>
                  <li> The right to object</li>
                </ul>
              </li>
              <li>
                To exercise these rights, please contact us using the contact
                information provided below.
              </li>
              <li className="main-list">
                <b className="privacy-heading">Third-Party Links</b>
              </li>
              <li>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of those websites. We
                encourage you to read the privacy policies of any third-party
                sites you visit.
              </li>
              <li className="main-list">
                <b className="privacy-heading">Changes to This Privacy Policy</b>
              </li>
              <li>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the effective date. You are advised to
                review this Privacy Policy periodically for any changes.
              </li>
              <li className="main-list">
                <b className="privacy-heading">Contact Us</b>
              </li>
              <li className="contact-list">
                If you have any questions , Please Contact Us:
                <br />
                <ul>
                  <li>
                    <p>
                      <b>Address</b>
                      <br /> 203, Manglam, Signature Tower, Lal Kothi
                      <br /> Gandhi Nagar, Jaipur
                      <br /> Rajasthan - 302015
                    </p>
                    <p>
                      <b>Email</b>
                      <br />
                      info@lunaredge.in{" "}
                    </p>
                    <p>
                      <b>Contact No</b>
                      <br />
                      Office: 0141-4512611 <br />
                      Sandeep Katariya: +91-9829011076 <br></br>Sanjeev Ola:
                      +91-7760701155
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
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

export default PrivacyPolicy;

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Meteors from "../Meteors.tsx";
// import Particles from "../Particles.tsx";

// const Common = () => {
//   return (
//     <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-500 relative overflow-hidden">
//       <Meteors />
//       <Particles/>

//       {/* Floating Moons */}
//       <motion.div
//         className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gray-300 shadow-2xl opacity-70"
//         animate={{ x: [-20, 20, -20], y: [20, -20, 20] }}
//         transition={{ duration: 12, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gray-400 shadow-xl opacity-50"
//         animate={{ x: [30, -30, 30], y: [-30, 30, -30] }}
//         transition={{ duration: 15, repeat: Infinity }}
//       />

//       {/* Main Content Overlay */}
//       <motion.div
//         className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center gap-8 p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl rounded-full max-w-lg mx-auto z-10"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.8 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-pulse">
//           🌙 Under the Moonlight!
//         </h1>
//         <p className="text-lg md:text-xl text-gray-300 mb-6">
//           Our site is orbiting new horizons. We’ll be back soon with something stellar!
//         </p>
//         <motion.div whileHover={{ scale: 1.05 }} className="mx-auto">
//           <Link
//             to="/"
//             className="inline-block px-6 py-3 bg-indigo-700 text-white text-lg font-medium rounded-lg hover:bg-indigo-800 transition-all duration-300"
//           >
//             Return to Earth
//           </Link>
//         </motion.div>
//       </motion.div>

//       {/* Twinkling Footer */}
//       <motion.div
//         className="absolute bottom-0 w-full h-16 bg-gradient-to-r from-gray-800 to-indigo-800 flex justify-center items-center"
//         animate={{ opacity: [0.7, 1, 0.7] }}
//         transition={{ duration: 3, repeat: Infinity }}
//       >
//         <p className="text-gray-400 text-sm">© 2024 LunarEdge. All Rights Reserved.</p>
//       </motion.div>

//     </div>
//   );
// };

// export default Common;
