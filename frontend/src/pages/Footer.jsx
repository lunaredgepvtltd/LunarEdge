import React from 'react'
import MyImage from "../assets/MyImage.gif";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    
    <div className="flex flex-col lg:flex-row  h-[250px] lg:h-[250px]">
        <div className="p-12 bg-[#ffa9f9] lg:w-3/4 ">
          <div className="flex flex-wrap">
            
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0 ">
              <p className="text-xl font-medium text-black mb-4">
                Quick Links
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/career" className="hover:underline">
                    Career
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/lunaredge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <p className="text-xl font-medium text-gray-800 mb-4">Company</p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:underline">
                    Meet the Team
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/3">
              <p className="text-xl font-medium text-gray-800 mb-4">Call Us</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <BsWhatsapp className="text-green-600" />
                  <span>+91-9829011076 [Sandeep Katariya]</span>
                </li>
                <li className="flex items-center gap-2">
                  <BsWhatsapp className="text-green-600" />
                  <span>+91-7760701155 [Sanjeev Ola]</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/4 lg:w-[35%] h-auto hidden lg:block">
          <img
            src={MyImage}
            alt="Loading GIF"
            className="w-full h-full object-cover object-right  overflow-hidden md:h-[150px] lg:h-full"
          />
        </div>
      </div>
     
  )
}

export default Footer;



// import React from 'react';
// import MyImage from "../assets/MyImage.gif";
// import { BsWhatsapp } from "react-icons/bs";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="flex flex-col lg:flex-row h-auto lg:h-[250px]">
//       <div className="p-6 bg-[#ffa9f9] lg:w-3/4 ">
//         <div className="flex flex-wrap">
//           <div className="w-full lg:w-1/3 mb-6 lg:mb-0 ">
//             <p className="text-xl font-medium text-black mb-4">Quick Links</p>
//             <ul className="space-y-2 text-gray-600">
//               <li>
//                 <Link to="/career" className="hover:underline">Career</Link>
//               </li>
//               <li>
//                 <Link to="/services" className="hover:underline">Services</Link>
//               </li>
//               <li>
//                 <a
//                   href="https://www.linkedin.com/company/lunaredge/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:underline"
//                 >
//                   LinkedIn
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
//             <p className="text-xl font-medium text-gray-800 mb-4">Company</p>
//             <ul className="space-y-2 text-gray-600">
//               <li>
//                 <Link to="/about" className="hover:underline">About</Link>
//               </li>
//               <li>
//                 <Link to="/team" className="hover:underline">Meet the Team</Link>
//               </li>
//             </ul>
//           </div>

//           <div className="w-full lg:w-1/3">
//             <p className="text-xl font-medium text-gray-800 mb-4">Call Us</p>
//             <ul className="space-y-2 text-gray-600">
//               <li className="flex items-center gap-2">
//                 <BsWhatsapp className="text-green-600" />
//                 <span>+91-9829011076 [Sandeep Katariya]</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <BsWhatsapp className="text-green-600" />
//                 <span>+91-7760701155 [Sanjeev Ola]</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="w-full lg:w-1/4 h-auto hidden lg:block">
//         <img
//           src={MyImage}
//           alt="Loading GIF"
//           className="w-full h-full object-contain md:h-[150px] lg:h-full" // Adjust height for smaller screens
//         />
//       </div>
//     </div>
//   );
// }

// export default Footer;
