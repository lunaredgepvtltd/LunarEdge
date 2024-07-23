// src/components/Navbar.js
import React from 'react';
import logo from '../assets/Lunaredge.png'; // Update the path to your logo
import '../App.css'

const Header = () => {
  return (
    <nav className="shadow-md fixed w-full top-10 left-0 z-50 h-20 bg-white transition-all duration-300  ">
      <div className="container mx-auto flex justify-around items-center h-full">
        {/* Logo */}
        <div className='mt-4'>
          <img src={logo} alt="Company Logo" className="h-[136px] w-[117px]" />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-4 items-center">
          <li className='relative group'>
           <a  className=" text-xl cursor-pointer hover:underline underline-offset-4 pl-6 text-[#082847]">About Us</a>
           {/* lists of about  */}
           <ul className=' absolute right-0 left-0 mt-2 top-1 rounded-lg shadow-lg transition-opacity duration-500 invisible group-hover:visible group-hover:opacity-100 bg-white w-60 pt-10 pb-3'>
             <li><a href="/digital-innovators" className='block px-4 py-2 hover:underline underline-offset-4 text-[#082847]'>Digital innovators</a></li>
             <li><a href="/clients" className='block px-4 py-2 hover:underline underline-offset-4 text-[#082847]'>Our clients</a></li>
             <li><a href="/careers" className='block px-4 py-2 hover:underline underline-offset-4 text-[#082847]'>careers</a></li>
           </ul>
          </li>
          {/* Services  */}
          <li className='relative group'>
          <a  className=" text-xl cursor-pointer hover:underline underline-offset-4 pl-6 text-[#082847]"> Our Services</a>
          {/* lists inside services  */}
          <div>
            
          </div>
          </li>
          <li>
            <a href="/about" className="  text-xl  hover:underline underline-offset-4 pl-8 text-[#082847]">Industries</a>
          </li>
          <li>
            <a href="/about" className="  text-xl  hover:underline underline-offset-4 pl-8 text-[#082847]">Our Processes</a>
          </li>
          <li>
            <a href="/contact" className=" text-xl  hover:underline underline-offset-4 pl-8 text-[#082847]">Contact Us</a>
          </li>
          {/* <li className="relative group">
            <a href="#" className="text-white text-xl hover:text-gray-300 focus:outline-none">
              More
            </a>
            <ul className="absolute right-0 top-4 mt-2 bg-white text-black shadow-lg rounded-lg w-48 opacity-0 transition-opacity duration-500  invisible group-hover:opacity-100 group-hover:visible pt-5 cursor-pointer">
              <li>
                <a href="/careers" className="block px-4 py-2 hover:bg-gray-200">Careers</a>
              </li>
              <li>
                <a href="/events" className="block px-4 py-2 hover:bg-gray-200">Events</a>
              </li>
            </ul>
          </li> */}
        </ul>

      </div>
    </nav>
  );
};

export default Header;




<ul className='absolute right-0 left-0 mt-2 top-4  pt-5 bg-white text-black shadow-lg rounded-lg opacity-0 transition-opacity duration-500 invisible group-hover:opacity-100 group-hover:visible cursor-pointer w-48 pl-3 '>
            <li>
              <a href="" className='block px-4 py-2 hover:bg-gray-200 hover:underline underline-offset-4'>first</a>
            </li>
            <li>
              <a href="" className='block px-4 py-2 hover:bg-gray-200 hover:underline underline-offset-4'>second</a>
            </li>
            <li>
              <a href="" className='block px-4 py-2 hover:bg-gray-200 hover:underline underline-offset-4'>third</a>
            </li>
            <li>
              <a href="" className='block px-4 py-2 hover:bg-gray-200 hover:underline underline-offset-4'>fourth</a>
            </li>
          </ul>