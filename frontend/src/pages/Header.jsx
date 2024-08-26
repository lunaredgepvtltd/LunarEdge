import React, { useState, useEffect } from "react";
import logo from "../assets/Lunaredge.png";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import "../App.css";

const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Handle form toggles
  const handleButton = () => setShowForm(!showForm);
  const closeForm = () => setShowForm(false);

  // Mobile-menu toggles
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const changeNav = () => {
    if (window.scrollY >= 50) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    // Check if the device is touch-enabled
    const isTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouchScreen);
  }, []);

  const handleDropdownToggle = (dropdownName) => {
    if (isTouchDevice) {
      setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  const handleMouseEnter = (dropdownName) => {
    if (!isTouchDevice) {
      setOpenDropdown(dropdownName);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setOpenDropdown(null);
    }
  };

  return (
    <div className="w-full h-[90px] md:h-[125px] fixed z-50 pt-3 px-3 md:px-5 md:pt-6">
      <div className="box flex bg-white h-full w-full rounded-xl md:rounded-3xl justify-between items-center px-4 xl:px-10">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 mt-4">
          <img src={logo} alt="Company Logo" className="h-auto w-[80px] pt-[5px] md:w-24 md:pt-3" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden block text-black text-xl" onClick={toggleMenu}>
          {menuOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>

        {/* Nav Links for Desktop */}
        <ul className="hidden lg:flex space-x-4 items-center">
          <li>
            <Link to="/" className="h-full relative rounded-full text-black text-lg hover:text-white hover:bg-[#616161] p-3 px-6 cursor-pointer transition-all duration-300" onClick={()=>{handleDropdownToggle()}}>
              Home
            </Link>
          </li>

          {/* About Us Dropdown */}
          <li
            className="h-full relative flex items-center px-2 py-4 cursor-pointer transition-all duration-300"
            onClick={() => handleDropdownToggle("aboutUs")}
            onMouseEnter={!isTouchDevice ? () => handleMouseEnter("aboutUs") : null}
            onMouseLeave={!isTouchDevice ? handleMouseLeave : null}
          >
            <div className="flex items-center justify-between rounded-full p-3">
              <span className="text-lg text-black">About LunarEdge</span>
              <IoIosArrowDown />
            </div>
            {openDropdown === "aboutUs" && (
              <ul className="absolute top-[63px] left-0 rounded-lg shadow-lg bg-[#292828] w-48 pt-3 pb-3">
                <li>
                  <Link to="/aboutLunarEdge/aboutUs" className="block px-4 py-2 text-white hover:text-red-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/common" className="block px-4 py-2 text-white hover:text-red-500">
                    Digital Innovators
                  </Link>
                </li>
                <li>
                  <Link to="/common" className="block px-4 py-2 text-white hover:text-red-500">
                    Our Clients
                  </Link>
                </li>
                <li>
                  <Link to="/common" className="block px-4 py-2 text-white hover:text-red-500">
                    Careers
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Services Dropdown */}
          <li
            className="h-full relative flex items-center px-2 py-4 cursor-pointer transition-all duration-300"
            onClick={() => handleDropdownToggle("services")}
            onMouseEnter={!isTouchDevice ? () => handleMouseEnter("services") : null}
            onMouseLeave={!isTouchDevice ? handleMouseLeave : null}
          >
            <div className="flex items-center justify-between rounded-full p-3">
              <span className="text-lg text-black">Services</span>
              <IoIosArrowDown />
            </div>
            {openDropdown === "services" && (
              <ul className="absolute top-[63px] left-0 rounded-lg shadow-lg bg-[#292828] w-48 pt-3 pb-3">
                <li>
                  <Link to="/common" className="block px-4 py-2 text-white hover:text-red-500">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/common" className="block px-4 py-2 text-white hover:text-red-500">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link to="/common" className="block px-4 py-2 text-white hover:text-red-500">
                    IT Consulting
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Industries Dropdown */}
          <li
            className="h-full relative flex items-center px-2 py-4 cursor-pointer transition-all duration-300"
            onClick={() => handleDropdownToggle("industries")}
            onMouseEnter={!isTouchDevice ? () => handleMouseEnter("industries") : null}
            onMouseLeave={!isTouchDevice ? handleMouseLeave : null}
          >
            <div className="flex items-center justify-between rounded-full p-3">
              <span className="text-lg text-black">Industries</span>
              <IoIosArrowDown />
            </div>
            {openDropdown === "industries" && (
              <ul className="absolute top-[63px] left-0 rounded-lg shadow-lg bg-[#292828] w-40 pt-3 pb-3">
                <li>
                  <Link to="/common" className="block px-4 py-2 text-white hover:text-red-500">
                    Education
                  </Link>
                </li>
                <li>
                  <Link to="/common" className="block px-4 py-2 text-white hover:text-red-500">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link to="/common" className="block px-4 py-2 text-white hover:text-red-500">
                    Ecommerce
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Contact Us */}
        <div className="lg:block hidden">
          <button
            className="rounded-full py-4 px-8 text-black text-md hover:bg-[#703299] border border-[#703299] hover:text-white hover:shadow-md hover:bg-gradient-to-r from-[#386bb7] to-[#e24c4a] transition-all duration-100"
            onClick={handleButton}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-auto bg-white z-40 lg:hidden flex flex-col transition-all duration-500 overflow-auto pb-5 rounded-b-lg">
            <div className="flex justify-between items-center p-2">
              <Link to="/">
                <img src={logo} alt="LunarEdge" className="h-auto w-[80px]" />
              </Link>
              <button className="text-4xl" onClick={toggleMenu}>
                <IoIosClose />
              </button>
            </div>
            <hr />
            <ul className="flex flex-col items-start mt-3 pl-4">
              <li className="py-2">
                <Link to="/common" className="text-md text-[#082847] hover:underline">
                  About Us
                </Link>
              </li>
              <li className="py-2">
                <Link to="/common" className="text-md text-[#082847] hover:underline">
                  Services
                </Link>
              </li>
              <li className="py-2">
                <Link to="/common" className="text-md text-[#082847] hover:underline">
                  Industries
                </Link>
              </li>
              <li className="py-2">
                <Link to="/common" className="text-md text-[#082847] hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
