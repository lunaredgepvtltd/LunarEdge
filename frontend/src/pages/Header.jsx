// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import logo from '../assets/Lunaredge.png'; // Update the path to your logo
import '../App.css'
import { IoIosArrowDown } from "react-icons/io";
import ContactForm from './ContactForm';


const Header = () => {

  const [scrollNav, setScrollNav] = useState(false);

  const [showForm, setShowForm] = useState(false)

  // handle show button 

  const handleButton = () => {
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
  }

  const changeNav = () => {
    if (window.scrollY >= 50) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);


  return (
    <div className={`fixed w-full top-0 left-0 z-50 h-32 bg-[#0e353b]  transition-all duration-300  ${scrollNav ? 'bg-[#0e353b] bg-opacity-60 shadow-2xl ' : 'bg-transparent shadow-none'
      } `}>
      <div className="container mx-auto flex justify-around items-center h-full">
        {/* Logo */}
        <div className='mt-4'>
          <img src={logo} alt="Company Logo" className="h-[192px] w-[178px]" />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-4 items-center justify-center h-full">

          {/* about us  */}
          <li className=' h-full'>

            <div className='relative h-full hover:bg-[#082847] group flex items-center p-3 cursor-pointer transition-all duration-300'>
              <div className='flex gap-1 items-center justify-center'>
                <a href='/aboutus' className=" text-xl cursor-pointer  text-white group-hover:text-white">About Us</a>
                <span className='text-lg group-hover:text-white mt-1'><IoIosArrowDown /></span>
              </div>

              {/* lists of about  */}
              <ul className=' absolute  mt-2 top-[70px] -left-14 rounded-lg shadow-lg transition-opacity duration-500 invisible group-hover:visible group-hover:opacity-100 bg-white w-60 pt-10 pb-3'>
                <li>
                  <a href="/digital-innovators" className='block state px-4 py-2  text-[#082847] hover:underline underline-offset-2'>Digital innovators</a>
                </li>
                <li><a href="/clients" className='block px-4 py-2  text-[#082847] hover:underline underline-offset-2'>Our clients</a></li>
                <li><a href="/careers" className='block px-4 py-2  text-[#082847] hover:underline underline-offset-2'>careers</a></li>
              </ul>
            </div>


          </li>

          {/* Services  */}
          <li className='h-full'>
            <div className='relative h-full hover:bg-[#082847] group flex items-center p-3 cursor-pointer transition-all duration-300' >

              <div className='flex gap-1 items-center justify-center'>
                <a href='/services' className=" text-xl cursor-pointer  text-white group-hover:text-white">Services</a>
                <span className='text-lg group-hover:text-white mt-1'><IoIosArrowDown /></span>
              </div>

              <ul className='absolute mt-2 top-[70px] -left-56 rounded-lg shadow-lg transition-opacity duration-500 invisible group-hover:visible group-hover:opacity-100 bg-white  w-[1000px] pt-10 p-6  flex justify-between items-center gap-2'>


                <li>
                  <ul>
                    <li><a href="/digital-innovators" className='block px-4 py-2 hover:underline underline-offset-2 text-[#082847] '>Web Development</a></li>
                    <li><a href="/clients" className='block px-4 py-2 hover:underline underline-offset-2 text-[#082847]'>Mobile App Development</a></li>
                    <li><a href="/careers" className='block px-4 py-2 hover:underline underline-offset-2 text-[#082847]'>IT Consulting</a></li>
                  </ul>
                </li>


                <li>
                  <ul>
                    <li><a href="/digital-innovators" className='block px-4 py-2 hover:underline underline-offset-2 text-[#082847]'>Cloud Solutions</a></li>
                    <li><a href="/clients" className='block px-4 py-2 hover:underline underline-offset-2 text-[#082847]'>Cybersecurity Services</a></li>
                    <li><a href="/careers" className='block px-4 py-2 hover:underline underline-offset-2 text-[#082847]'>Agriculture Technology Solutions</a></li>
                  </ul>
                </li>


                <li>
                  <ul>
                    <li><a href="/digital-innovators" className='block px-4 py-2 hover:underline underline-offset-2 text-[#082847]'>Banking and Financial Services</a></li>
                    <li><a href="/clients" className='block px-4 py-2 hover:underline underline-offset-2 text-[#082847]'>Education Solutions</a></li>
                    <li><a href="/careers" className='block px-4 py-2 hover:underline underline-offset-2 text-[#082847]'>Ai and Machine learning</a></li>
                  </ul>
                </li>


              </ul>

            </div>

            {/* lists inside services  */}



          </li>

          {/* Industries  */}


          <li className='h-full'>
            <div className='relative h-full hover:bg-[#082847] group flex items-center p-3 cursor-pointer transition-all duration-300'>
              <div className='flex gap-1 items-center justify-center'>
                <a href='/aboutus' className=" text-xl cursor-pointer  text-white group-hover:text-white">Industries</a>
                <span className='text-lg group-hover:text-white mt-1'><IoIosArrowDown /></span>
              </div>

              {/* lists of about  */}
              <ul className=' absolute  mt-2 top-[70px] -left-14 rounded-lg shadow-lg transition-opacity duration-500 invisible group-hover:visible group-hover:opacity-100 bg-white w-60 pt-10 pb-3'>
                <li><a href="/digital-innovators" className='block state px-4 py-2  text-[#082847] hover:underline underline-offset-2'>Education</a></li>
                <li><a href="/clients" className='block px-4 py-2  text-[#082847] hover:underline underline-offset-2'>Healthcare</a></li>
                <li><a href="/careers" className='block px-4 py-2  text-[#082847] hover:underline underline-offset-2'>Ecommerce</a></li>
                <li><a href="/careers" className='block px-4 py-2  text-[#082847] hover:underline underline-offset-2'>Banking</a></li>

              </ul>
            </div>


          </li>


          {/* contact us  */}
          <li>

            <div className=''>
              <button className='bg-black rounded-md p-3 text-white text-md hover:bg-gray-600 transition-all duration-300' onClick={handleButton}>Contact Us</button>
            </div>
          </li>

        </ul>


      </div>

      {showForm && <ContactForm onClose={closeForm} />}
    </div>
  );
};

export default Header;


















