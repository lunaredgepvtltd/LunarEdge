import React from "react";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center bg-gray-200  dark:bg-[#131313]">
      <div className="text-center flex flex-col justify-center gap-8 p-8 mt-[30%] md:mt-[8%] mb-[3%] bg-white shadow-xl rounded-lg max-w-4xl mx-4 border border-gray-300 dark:bg-black ">
        <div className="mb-4">
          <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-300">
            Cookies
          </h1>
          <p className="text-md md:text-xl text-gray-700 dark:text-gray-300">
            <ul>
              <li className="main-list">
                <b className="privacy-heading">Introduction</b> <br />
                Below is information about how Lunar Edge and its affiliates
                (“we”) use cookies and other similar technology on this website.
                This policy is effective as of July 1, 2024. Please note that
                this privacy statement will be updated from time to time. <br />{" "}
                <br /> We can place cookies and other similar technology on your
                device, including mobile device, in accordance with your
                preferences set on our cookie consent manager. Depending on your
                settings in our cookie consent manager on your mobile device,
                the following information may be collected through cookies or
                similar technology: your unique device identifier, mobile device
                IP address, information about your device’s operating system,
                mobile carrier and your location information (to the extent
                permissible under applicable law).
              </li>
              <li className="main-list">
                <b className="privacy-heading">What are cookies?</b>
              </li>
              <li>
                Cookies are text files containing small amounts of information
                which are downloaded to your computer or mobile device when you
                visit a site and allow a site to recognize your device. Cookies
                managed by Lunar Edge only are called “first party cookies”
                whereas cookies from third parties are called “third party
                cookies” as explained below.
              </li>
              <li className="main-list">
                <b className="privacy-heading">
                  Why do we use cookies and similar technologies?
                </b>
              </li>
              <li>
                Cookies do a lot of different jobs, such as letting you navigate
                between pages efficiently, remembering your preferences and
                generally improving the user experience. They can also help to
                ensure that the advertisements you see online are more relevant
                to you and your interests. In addition, cookies can help us to
                analyze the use of our websites and online content (analytics
                cookies) and they can also facilitate/track the interaction on
                our websites and online content with social media (e.g. links to
                social media sites, like buttons, etc.).
              </li>
              <li className="main-list">
                <b className="privacy-heading">
                  Does Lunar Edge use cookies for marketing and analytics?
                </b>
              </li>
              <li>
                Yes, we may use information collected from our cookies to
                identify user behavior and to serve content and offers based on
                your profile, and for the other purposes described below, to the
                extent legally permissible in certain jurisdictions.
              </li>
              <br />
              <li>
                In other cases, we can associate cookie information (including
                information from cookies placed via our advertisements on third
                party sites) with an identifiable individual. For example:
              </li>
              <br />
              <li>
                If we send you a targeted email which includes web beacons,
                cookies or similar technologies we will know whether you open,
                read, or delete the message.
              </li>
              <br />
              <li>
                When you click a link in a marketing e-mail you receive from
                Lunar Edge, we will also use a cookie to log what pages you view
                and what content you download from our websites, even if you are
                not registered at or signed into our site.
              </li>
              <li>
                Combining and analyzing personal data – As described above, we
                may combine data from publicly available sources, and from our
                different e-mail, website, and personal interactions with you
                (this includes information collected across our different
                websites )such as our careers and corporate sites and
                information collected on to our sites or connect to our sites
                using your social media credentials (such as LinkedIn). We
                combine this data to better assess your experience with Lunar
                Edge and to perform the other activities described throughout
                our privacy policy.
              </li>
              <li className="main-list">
                <b className="privacy-heading">
                  Do you use any cookies from third party companies?
                </b>
              </li>
              <li>
                Some cookies, web beacons and other tracking and storage
                technologies that we use are from third party companies (third
                party cookies), such as Facebook, Microsoft, , Twitter,
                Instagram, and Linkedin Analytics to provide us with web
                analytics and intelligence about our sites which may also be
                used to provide measurement services and target ads. These
                companies use programming code to collect information about your
                interaction with our sites, such as the pages you visit, the
                links you click on and how long you are on our sites. This code
                is only active while you are on an Lunar Edge website.
              </li>
              <li className="main-list">
                <b className="privacy-heading">
                  Does Lunar Edge use any tracking technologies similar to
                  cookies?
                </b>
              </li>
              <li>
                We may also use web beacons (including conversion pixels) or
                other technologies for similar purposes as above and we may
                include these on our sites, in marketing e-mail messages or our
                affiliated websites, to determine whether messages have been
                opened and links clicked on. Web beacons do not place
                information on your device, but they may work in conjunction
                with cookies to monitor website activity. The information
                provided below about cookies also applies to web beacons and
                similar technologies. Conversion pixels are small codes located
                on a particular web page which are triggered when someone visits
                a page resulting in an increase in the conversion count.
              </li>
              <li className="main-list">
                <b className="privacy-heading">
                  What if I don’t want cookies or similar tracking technologies?
                </b>
              </li>
              <li>
                You can adjust your cookie settings through our cookie consent
                manager. If you want to remove existing cookies from your
                device, you can do this using your browser options. If you want
                to block future cookies being placed on your device you can use
                our cookie consent manager.
              </li>
              <br />
              <li>
                Please bear in mind that deleting and blocking cookies may have
                an impact on your user experience.
              </li>
              <br />
              
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

export default Cookies;

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
