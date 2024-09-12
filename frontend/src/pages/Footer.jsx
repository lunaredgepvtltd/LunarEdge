import React from "react";
import MyImage from "../assets/MyImage.gif";
import { BsWhatsapp } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
 const Footer = () => {

    // scrolling-down-to-sevice-box 

    const isExtraSmallDevice = useMediaQuery({ maxWidth: 599 });
    const isSmallDevice = useMediaQuery({ minWidth: 600, maxWidth: 767 });
    const isMediumDevice = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isLargeDevice = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
    const isExtraLargeDevice = useMediaQuery({ minWidth: 1200 });

    const navigate = useNavigate();
  
    const handleServiceClick = ()=>{
      
      navigate('/')
  
      setTimeout(() => {
        if(isExtraSmallDevice){
          window.scrollTo(0, 3000);
         }
         else if(isSmallDevice){
          
          window.scrollTo(0, 2600);
         }
         else if(isMediumDevice){

          
          window.scrollTo(0, 2500);
         }
         else if(isLargeDevice){
          window.scrollTo(0, 2650);
         }
         else{
          window.scrollTo(0,3200);
         }
      }, 200);
    }

    
  const handleAboutClick = ()=>{
    navigate('/')
    setTimeout(() => {
      if(isExtraSmallDevice){
        window.scrollTo(0, 550);
       }
       else if(isSmallDevice){
        window.scrollTo(0,580 );
       }
       else if(isMediumDevice){
        window.scrollTo(0,700 );
       }
       else if(isLargeDevice){
        window.scrollTo(0,700 );
       }
       else{
        window.scrollTo(0,900);
       }  
    }, 200);
  }

  // scroll-code-ends 
  return (
    <footer className="bg-[#222222]  lg:grid lg:grid-cols-5 border-t-2 border-black  ">
      <div className=" hidden relative lg:block  lg:col-span-2 lg:h-full">
        <img
          className="z-5 absolute inset-0 h-[150px] md:h-full w-full object-cover"
          src={MyImage}
          alt="please reload"
        />
        {/* <p className=" hidden 2xl:block text-3xl absolute bottom-0 mx-auto mb-9 text-black  whitespace-nowrap">
          Smart Innovation Meets Infinity
        </p> */}
      </div>

      <div className="px-3 py-3 md:py-6 sm:px-6 lg:col-span-3 lg:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-sm uppercase tracking-wide text-white ">
                Call us
              </span>
              <a
                href="tel:0141-4512611"
                className="block text-2xl font-medium text-gray-300 hover:opacity-75 sm:text-3xl "
              >
                0141-4512611
              </a>
            </p>

            <ul className="text-sm">
              <br />
              <li className="flex gap-2 items-center">
                <div className="mb-[2px]">
                  <BsWhatsapp className="text-green-600" />
                </div>
                <p className="text-[#4688eb] hover:underline underline-offset-2 transition-all duration-300 whitespace-nowrap">
                  <a href="https://wa.me/919829011076" target="_blank" >
                    +91-9829011076
                  </a>
                </p>
                <span className="font-semibold text-gray-300 whitespace-nowrap"> [Sandeep Katariya]</span>
              </li>
              <li className="flex gap-2 items-center">
                <div>
                  <BsWhatsapp className="text-green-600" />
                </div>
                <p className="text-[#4688eb] hover:underline underline-offset-2 transition-all duration-300">
                  <a href="https://wa.me/917760701155" target="_blank">
                    +91-7760701155
                  </a>
                </p>
                <span className="font-semibold text-gray-300"> [Sanjeev Ola]</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  px-4">
            <div className="hidden md:block">
              <p className="font-medium text-gray-100 ">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    to="/career"
                    className="text-gray-300 transition hover:opacity-75 "
                  >
                    Career
                  </Link>
                </li>
                <li>
                  {/* <Link
                    to="/services"
                    className="text-gray-300 transition hover:opacity-75 "
                  >
                     Services
                  </Link> */}

                  {/* temporary-service-code  */}
                  <p
                    onClick={handleServiceClick}
                    className="text-gray-300 transition hover:opacity-75 cursor-pointer"
                  >
                     Services
                  </p>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/lunaredge/" target="_blank"
                    className="text-gray-300 transition hover:opacity-75 "
                  >
                     LinkedIn
                  </Link>
                </li>
                
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-100">
                Company
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  {/* <Link
                    to="/AboutLunarEdge/AboutUs"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    About
                  </Link> */}
                   {/* temporary-service-code  */}
                   <p
                    onClick={handleAboutClick}
                    className="text-gray-300 transition hover:opacity-75 cursor-pointer"
                  >
                     About
                  </p>
                </li>
                <li>
                  <Link
                    to="/common"
                    className="text-gray-300 transition hover:opacity-75 "
                  >
                    Meet the Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" mt-2 md:mt-4 border-t border-gray-200 pt-2 md:pt-4 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <Link
                  to="/common"
                  className="text-gray-300 transition hover:opacity-75 "
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/common"
                  className="text-gray-300 transition hover:opacity-75 "
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/common"
                  className="text-gray-300 transition hover:opacity-75 "
                >
                  Cookies
                </Link>
              </li>
            </ul>

            <p className=" mt-3 md:mt-6 text-xs text-gray-300 sm:mt-0 ">
              &copy; 2024. LunarEdge IT Services Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer