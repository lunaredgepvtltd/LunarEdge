import React from "react";
import { Link } from "react-router-dom";

const Tnc = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center bg-gray-200 dark:bg-[#131313]">
      <div className="text-center flex flex-col justify-center gap-8 p-8 md:p-14 mt-[30%] md:mt-[8%] mb-[3%]  bg-white shadow-xl rounded-lg max-w-4xl mx-4 border border-gray-300 dark:bg-black">
        <div className="mb-4">
          <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-300">
            Terms and Conditions
          </h1>
          <p className="text-md md:text-xl text-gray-700 dark:text-gray-300">
            <ul>
              <li className="main-list">
                <b className="privacy-heading">Introduction</b> <br /> We at
                Lunar Edge, These Terms and Conditions (“Terms”) govern your use
                of our website{" "}
                <a href="https://lunaredge.in/" className="text-blue-500">
                  https://lunaredge.in/
                </a>
              </li>
              <li className="main-list">
                <b className="privacy-heading">Acceptance of Terms</b>
              </li>
              <li>
                By accessing our Services, you confirm that you have read,
                understood, and agree to these Terms. If you do not agree,
                please do not use our Services.
              </li>
              <li className="main-list">
                <b className="privacy-heading">Changes to Terms</b>
              </li>
              <li>
                We may revise these Terms at any time. We will notify you of any
                changes by posting the new Terms on this page with a new
                effective date. Your continued use of the Services after any
                changes indicates your acceptance of the new Terms.
              </li>
              <li className="main-list">
                <b className="privacy-heading">User Conduct</b>
              </li>
              <li>
                You agree not to:
                <ul className="ul-list">
                  <li>Use the Services for any unlawful purpose.</li>
                  <li>
                    Interfere with or disrupt the security, integrity, or
                    performance of the Services.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to the Services or its
                    related systems or networks.
                  </li>
                  <li>Transmit any viruses, malware, or other harmful code.</li>
                </ul>
              </li>
              <li className="main-list">
                <b className="privacy-heading">Intellectual Property</b>
              </li>
              <li>
                All content and materials available on the Services, including
                text, graphics, logos, and software, are the property of Lunar
                Edge IT Services or its licensors and are protected by copyright
                and other intellectual property laws. You may not reproduce,
                distribute, modify, or create derivative works without our
                express written permission.
              </li>
              <li className="main-list">
                <b className="privacy-heading">Third-Party Links</b>
              </li>
              <li>
                Our Services may contain links to third-party websites. We do
                not endorse or assume any responsibility for the content or
                practices of these sites. Your use of any third-party websites
                is at your own risk.
              </li>
              <li className="main-list">
                <b className="privacy-heading">Disclaimers</b>
              </li>
              <li>
                The Services are provided on an “as-is” and “as-available”
                basis. We make no representations or warranties of any kind,
                express or implied, regarding the operation of the Services or
                the information, content, materials, or products included
                therein. To the fullest extent permissible by law, we disclaim
                all warranties.
              </li>
              <li className="main-list">
                <b className="privacy-heading"> Limitation of Liability</b>
              </li>
              <li>
                In no event shall Lunar Edge or its affiliates be liable for any
                indirect, incidental, special, consequential, or punitive
                damages arising from or related to your use of the Services,
                even if we have been advised of the possibility of such damages.
              </li>
              <li className="main-list">
                <b className="privacy-heading">Indemnification</b>
              </li>
              <li>
                You agree to indemnify, defend, and hold harmless Lunar Edge,
                its affiliates, and their respective officers, directors,
                employees, and agents from any claims, losses, liabilities,
                damages, costs, or expenses (including reasonable attorneys’
                fees) arising out of or related to your use of the Services or
                your violation of these Terms.
              </li>
              <li className="main-list">
                <b className="privacy-heading">Governing Law</b>
              </li>
              <li>
                These Terms shall be governed by and construed in accordance
                with the laws, without regard to its conflict of law principles.
                Any disputes arising from these Terms shall be resolved in the
                courts located in [Your Location].
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

export default Tnc;

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
