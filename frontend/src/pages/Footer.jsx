import React from "react";
import MyImage from "../assets/MyImage.gif";
import { BsWhatsapp } from "react-icons/bs";
export const Footer = () => {
  return (
    <footer class=" bg-[#bfbdbd] bg-opacity-70 lg:grid lg:grid-cols-5 dark:bg-gray-900 mt-40">
      <div class="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          className="z-5"
          src={MyImage}
          alt="please reload"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <p className="absolute bottom-0 ml-24 mb-9  text-black text-4xl animated-text">
          Smart Innovation Meets Infinity
        </p>
      </div>

      <div class="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 ">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span class="text-sm uppercase tracking-wide text-gray-700 dark:text-gray-400">
                Call us
              </span>

              <a
                href="#"
                class="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl dark:text-white"
              >
                0141-4512611
              </a>
            </p>

            <ul>
              <br></br>
              <li className="flex gap-2 items-center">
               <div className="mb-[2px]"> <BsWhatsapp /> </div>
                <p>+91-9829011076<span className="font-semibold"> [Sandeep Katariya]</span></p>
                </li>
                <li className="flex gap-2 items-center"> 
                  <div > <BsWhatsapp /> </div>  
                   <p>+91-9829011076<span className="font-semibold"> [Sanjeev Ola]</span></p>
                </li>
            </ul>

          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p class="font-medium text-gray-900 dark:text-white">Services</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                   Web Development
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Mobile App Development
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    IT Consulting
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                   Game Development
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Hardware Solutions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="font-medium text-gray-900 dark:text-white">Company</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Meet the Team
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-12 border-t border-gray-100 pt-12 dark:border-gray-800">
          <div class="sm:flex sm:items-center sm:justify-between">
            <ul class="flex flex-wrap gap-4 text-xs">
              <li>
                <a
                  href="#"
                  class="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Cookies
                </a>
              </li>
            </ul>

            <p class="mt-8 text-xs text-gray-500 sm:mt-0 dark:text-gray-400">
              &copy; 2024.LunarEdge IT Services Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
