import React from "react";
import MyImage from "../assets/MyImage.gif";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
 const Footer = () => {
  return (
    <footer className="bg-[#222222]  lg:grid lg:grid-cols-5  md:mt-0  ">
      <div className=" hidden relative md:block  lg:col-span-2 lg:h-full">
        <img
          className="z-5 absolute inset-0 h-[150px] md:h-full w-full object-cover"
          src={MyImage}
          alt="please reload"
        />
        <p className="absolute bottom-0 ml-24 mb-9 text-black text-4xl animated-text">
          Smart Innovation Meets Infinity
        </p>
      </div>

      <div className="px-4 py-8 md:py-16 sm:px-6 lg:col-span-3 lg:px-8">
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

            <ul>
              <br />
              <li className="flex gap-2 items-center">
                <div className="mb-[2px]">
                  <BsWhatsapp className="text-green-600" />
                </div>
                <p className="text-[#4688eb] hover:underline underline-offset-2 transition-all duration-300">
                  <a href="https://wa.me/919829011076" target="_blank">
                    +91-9829011076
                  </a>
                </p>
                <span className="font-semibold text-gray-300"> [Sandeep Katariya]</span>
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="hidden md:block">
              <p className="font-medium text-gray-100 ">
                Services
              </p>
              <ul className="mt-6 space-y-3 md:space-y-4 text-sm">
                <li>
                  <Link
                    to="/common"
                    className="text-gray-300 transition hover:opacity-75 "
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/common"
                    className="text-gray-300 transition hover:opacity-75 "
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/common"
                    className="text-gray-300 transition hover:opacity-75 "
                  >
                    IT Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/common"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    Game Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/common"
                    className="text-gray-300 transition hover:opacity-75 "
                  >
                    Hardware Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-100">
                Company
              </p>
              <ul className="mt-6 space-y-3 md:space-y-4 text-sm">
                <li>
                  <Link
                    to="/common"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    About
                  </Link>
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

        <div className=" mt-5 md:mt-12 border-t border-gray-100 pt-6 md:pt-12 ">
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

            <p className=" mt-3 md:mt-8 text-xs text-gray-300 sm:mt-0 ">
              &copy; 2024. LunarEdge IT Services Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer