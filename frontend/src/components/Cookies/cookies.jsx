import React from "react";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="text-center flex flex-col justify-center gap-8 p-8 md:p-14 bg-white shadow-xl rounded-lg max-w-4xl mx-4 border border-gray-300">
        <div className="mb-4">
          <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
            Cookies
          </h1>
          <p className="text-md md:text-xl text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor enim non neque condimentum imperdiet. Pellentesque eget nibh libero. Quisque vitae nisi quis sapien porttitor dignissim eu vitae lacus. Duis bibendum nisi ut dolor pulvinar facilisis quis in nunc. Vestibulum sit amet ipsum malesuada, dignissim erat vel, tincidunt quam. Nullam hendrerit condimentum est, mattis rutrum erat ullamcorper sed. Aliquam vulputate dolor consectetur mauris malesuada consectetur. Curabitur consectetur felis vitae mollis sodales. Duis quam sem, commodo sit amet sagittis at, luctus ac ante. Nunc sit amet est non arcu hendrerit rhoncus vitae et diam. In blandit lorem vel sodales tempus. Maecenas nec turpis sed risus viverra convallis id non orci. Nunc elementum turpis id nisl suscipit malesuada. Vivamus eu ultricies arcu.
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
