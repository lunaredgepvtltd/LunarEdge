import React, { useEffect, useState } from "react";
import logo from "../assets/Lunaredge.png";
import "../App.css";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import LunaredgeLogo from "../assets/Lunaredge.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import dark from "../assets/dark.png";
import light from "../assets/light.png";

const Header = ({ toggleDarkMode, theme }) => {
  // State to manage mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  // State to control header visibility on scroll
  const [showHeader, setShowHeader] = useState(true);

  // State to store the last scroll position
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to control the visibility of the header on scroll
  const controlHeader = () => {
    if (window.scrollY > 300) {
      setMenuOpen(false); // Close the menu if scrolled more than 300px
    }
    if (window.scrollY > lastScrollY) {
      setShowHeader(false); // Hide header on scroll down
    } else {
      setShowHeader(true); // Show header on scroll up
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  // Attach scroll event listener when component mounts, cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  // Function to handle logo click and scroll to the top
  const handleLogoClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  };

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle smooth scrolling to a specific section
  const scrollToSection = (e, section) => {
    e.preventDefault(); 
    const sectionElement = document.querySelector(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
    }
  };

  return (
    <>
      {/* Header Wrapper */}
      <div className="w-full h-[75px] md:h-[90px] fixed z-50">
        <div
          className={`${
            showHeader ? "header-visible" : "header-hidden"
          } box flex bg-gradient-to-r from-white to-[#A6A6A6] h-full w-full justify-between items-center px-4 xl:px-10 dark:from-black dark:to-[#737373]`}
        >
          {/* Logo */}
          <Link to={"/"} className="flex-shrink-0" onClick={handleLogoClick}>
            <img
              src={logo}
              alt="Company Logo"
              className="h-auto w-[80px] pt-[4px] md:w-[108px] hidden"
            />
          </Link>

          {/* Dark/Light mode toggle for mobile */}
          <div className="flex gap-3 items-center">
            <div className="relative lg:hidden">
              <img
                src={light}
                alt="light-logo"
                onClick={toggleDarkMode}
                className={`w-[45px] drop-shadow-[1px_1px_1pxrgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 absolute right-0 z-10 ${
                  theme ? "opacity-100" : "opacity-10"
                }`}
              />
              <img
                src={dark}
                alt="dark-logo"
                onClick={toggleDarkMode}
                className="w-[45px] drop-shadow-[1px_1px_1pxrgba(0,0,0,0.1)] cursor-pointer transition-all duration-300"
              />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden block text-black text-3xl"
              onClick={toggleMenu}
            >
              <IoIosMenu />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="w-[40%] hidden lg:flex items-center justify-between">
            {/* Services Link */}
            <li className="relative group">
              <Link
                to="/services"
                className="text-lg text-black dark:text-white relative"
              >
                Services
              </Link>
              <div className="absolute bottom-0 left-0 w-0 h-[1.3px] py-[1px] rounded-md bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></div>
            </li>

            {/* Industries Link */}
            <li className="relative group h-full cursor-pointer transition-all duration-300">
              <div className="flex items-center rounded-full">
                <Link
                  to={"/common"}
                  className="text-lg text-black dark:text-white"
                >
                  Industries
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[1.3px] py-[1px] rounded-md bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></div>
            </li>

            {/* About Us Link */}
            <li className="h-full relative group cursor-pointer transition-all duration-300">
              <div className="flex items-center justify-between rounded-full">
                <a
                  className="text-lg text-black dark:text-white"
                  onClick={(e) => {
                    navigate("/");
                    setTimeout(() => {
                      scrollToSection(e, "#aboutUs");
                    }, 1000);
                  }}
                >
                  About LunarEdge
                </a>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[1.3px] py-[1px] rounded-md bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></div>
            </li>

            {/* Career Link */}
            <li className="relative group">
              <Link
                to="/career"
                className="h-full  rounded-full text-black dark:text-white text-lg cursor-pointer "
                onClick={() => handleDropdownToggle()}
              >
                Career
              </Link>
              <div className="absolute bottom-0 left-0 w-0 h-[1.3px] py-[1px] rounded-md bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></div>
            </li>
          </ul>

          {/* Contact Us Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/contactus">
              <button
                className="rounded-full py-3 px-6 text-base border-[#703299] text-white bg-gradient-to-r from-[#ff5757] to-[#8c52ff] hover:shadow-sm"
              >
                Contact Us
              </button>
            </Link>

            {/* Dark/Light mode toggle for desktop */}
            <div className="p-6">
              <div className="relative">
                <img
                  src={light}
                  alt="light-logo"
                  onClick={toggleDarkMode}
                  className={`w-[50px] h-[25px] drop-shadow-[1px_1px_1pxrgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 absolute right-0 z-10 ${
                    theme ? "opacity-100" : "opacity-10"
                  }`}
                />
                <img
                  src={dark}
                  alt="dark-logo"
                  onClick={toggleDarkMode}
                  className="w-[50px] h-[25px] cursor-pointer transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              className="fixed top-0 left-0 w-full h-auto bg-white z-40 lg:hidden flex flex-col transition-all duration-500 overflow-auto pb-5 rounded-b-lg"
              data-aos="fade-down"
              data-aos-duration="200"
            >
              {/* Mobile menu header */}
              <div className="flex justify-between items-center p-5">
                <Link to={"/"}>
                  <img
                    src={LunaredgeLogo}
                    alt="lunarEdge"
                    className="h-auto w-[80px] hidden"
                  />
                </Link>

                {/* Close mobile menu */}
                <button className="text-4xl text-black" onClick={toggleMenu}>
                  <IoIosClose />
                </button>
              </div>
              <hr />

              {/* Mobile menu links */}
              <ul className="w-35 flex flex-col items-start mt-3 pl-4 transition-all duration-300">
                {/* Services Link */}
                <li className="w-35 py-1 flex flex-col gap-1 cursor-pointer transition-all duration-700 mr-1">
                  <div className="flex gap-1 mr-2 items-center">
                    <Link
                      className="text-md text-[#082847] hover:underline"
                      onClick={() => {
                        toggleMenu();
                      }}
                      to="/services"
                    >
                      Services
                    </Link>
                  </div>
                </li>

                {/* Industries Link */}
                <li className="w-35 py-1 flex flex-col gap-1 cursor-pointer transition-all duration-700">
                  <div className="flex gap-1 items-center">
                    <Link
                      onClick={toggleMenu}
                      to={"/common"}
                      className="text-md text-[#082847] hover:underline"
                    >
                      Industries
                    </Link>
                  </div>
                </li>

                {/* About Us Link */}
                <li className="py-1 flex flex-col gap-1 items-center cursor-pointer transition-all duration-700">
                  <div className="flex gap-1 items-center">
                    <a
                      className="text-md text-[#082847] hover:underline"
                      onClick={(e) => {
                        toggleMenu();
                        setTimeout(() => {
                          scrollToSection(e, "#aboutUs");
                        }, 100);
                      }}
                    >
                      About LunarEdge
                    </a>
                  </div>
                </li>

                {/* Career Link */}
                <li className="py-1 text-[#082847]">
                  <Link onClick={toggleMenu} to={"/career"}>
                    Career
                  </Link>
                </li>

                {/* Contact Us Button */}
                <li className="py-2 items-center">
                  <Link to="/contactus">
                    <button
                      className="bg-black text-white p-2 md:p-3 rounded-md"
                      onClick={() => {
                        toggleMenu();
                      }}
                    >
                      Contact Us
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Logo */}
        <div className="fixed top-2 text-left ml-4 lg:ml-10">
          <Link to={"/"} className="flex-shrink-0" onClick={handleLogoClick}>
            <img
              src={logo}
              alt="Company Logo"
              className="h-auto w-[80px] pt-[4px] md:w-[108px]"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
