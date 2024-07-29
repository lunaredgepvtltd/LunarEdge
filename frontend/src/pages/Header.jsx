import React, { useEffect, useState } from "react";
import logo from "../assets/Lunaredge.png";
import "../App.css";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import ContactForm from "./ContactForm";

const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleButton = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeNav = () => {
    if (window.scrollY >= 50) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 h-24 md:h-32 bg-[#0e353b] transition-all duration-300 ${
        scrollNav ? "bg-opacity-70 shadow-2xl" : "bg-opacity-100"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-0">
        {/* Logo */}
        <div className="mt-4">
          <img src={logo} alt="Company Logo" className="w-[109px] h-auto md:h-[192px] md:w-[178px]" />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {menuOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>

        {/* Nav Links for Desktop */}
        <ul className={`hidden md:flex space-x-4 items-center`}>
          {/* About Us */}
          <li className="h-full relative hover:bg-[#082847] group flex items-center p-3 cursor-pointer transition-all duration-300">
            <a href="/aboutus" className="text-xl text-white group-hover:text-white">About Us</a>
            <span className="text-lg text-white group-hover:text-white mt-1">
              <IoIosArrowDown />
            </span>
            <ul className="absolute mt-2 top-[40px] left-0 rounded-lg shadow-lg transition-opacity duration-500 invisible group-hover:visible group-hover:opacity-100 bg-white w-48 pt-3 pb-3">
              <li>
                <a href="/digital-innovators" className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2">Digital Innovators</a>
              </li>
              <li>
                <a href="/clients" className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2">Our Clients</a>
              </li>
              <li>
                <a href="/careers" className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2">Careers</a>
              </li>
            </ul>
          </li>

          {/* Services */}
          <li className="h-full relative hover:bg-[#082847] group flex items-center p-3 cursor-pointer transition-all duration-300">
            <a href="/services" className="text-xl text-white group-hover:text-white">Services</a>
            <span className="text-lg text-white group-hover:text-white mt-1">
              <IoIosArrowDown />
            </span>
            <ul className="absolute mt-2 top-[40px] left-0 rounded-lg shadow-lg transition-opacity duration-500 invisible group-hover:visible group-hover:opacity-100 bg-white w-48 pt-3 pb-3">
              <li>
                <a href="/web-development" className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2">Web Development</a>
              </li>
              <li>
                <a href="/mobile-app-development" className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2">Mobile App Development</a>
              </li>
              <li>
                <a href="/it-consulting" className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2">IT Consulting</a>
              </li>
            </ul>
          </li>

          {/* Industries */}
          <li className="h-full relative hover:bg-[#082847] group flex items-center p-3 cursor-pointer transition-all duration-300">
            <a href="/industries" className="text-xl text-white group-hover:text-white">Industries</a>
            <span className="text-lg text-white group-hover:text-white mt-1">
              <IoIosArrowDown />
            </span>
            <ul className="absolute mt-2 top-[40px] left-0 rounded-lg shadow-lg transition-opacity duration-500 invisible group-hover:visible group-hover:opacity-100 bg-white w-48 pt-3 pb-3">
              <li>
                <a href="/education" className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2">Education</a>
              </li>
              <li>
                <a href="/healthcare" className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2">Healthcare</a>
              </li>
              <li>
                <a href="/ecommerce" className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2">Ecommerce</a>
              </li>
            </ul>
          </li>

          {/* Contact Us */}
          <li>
            <button
              className="bg-black rounded-md p-3 text-white text-md hover:bg-gray-600 transition-all duration-300"
              onClick={handleButton}
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-auto bg-white z-40 md:hidden flex flex-col">
            <button className="self-end p-4 text-2xl" onClick={toggleMenu}>
              <IoIosClose />
            </button>
            <ul className="flex flex-col items-center mt-10">
              <li className="py-2">
                <a href="/aboutus" className="text-xl text-[#082847] hover:underline" onClick={toggleMenu}>
                  About Us
                </a>
              </li>
              <li className="py-2">
                <a href="/services" className="text-xl text-[#082847] hover:underline" onClick={toggleMenu}>
                  Services
                </a>
              </li>
              <li className="py-2">
                <a href="/industries" className="text-xl text-[#082847] hover:underline" onClick={toggleMenu}>
                  Industries
                </a>
              </li>
              <li className="py-2">
                <button className="bg-black text-white p-3 rounded-md" onClick={() => {
                  handleButton();
                  toggleMenu();
                }}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {showForm && <ContactForm onClose={closeForm} />}
    </div>
  );
};

export default Header;
