import React, { useEffect, useState } from "react";
import logo from "../assets/Lunaredge.png";
import "../App.css";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";

import LunaredgeLogo from "../assets/Lunaredge.png";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import dark from "../assets/dark.png";
import light from "../assets/light.png";

const Header = ({ toggleDarkMode, theme }) => {
  const [showForm, setShowForm] = useState(false); // State to show/hide contact form
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility
  const [isTouchDevice, setIsTouchDevice] = useState(false); // State to check if the device is touch-enabled
  const [openDropdown, setOpenDropdown] = useState(null); // State to manage which dropdown is open

  const navigate = useNavigate();

  const [showHeader, setShowHeader] = useState(true); // state to control visibility
  const [lastScrollY, setLastScrollY] = useState(0); // state to store last scroll position

  const scrollToAboutUs = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo(0, 750);
    }, 300);
  };

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false); // hide header on scroll down
    } else {
      setShowHeader(true); // show header on scroll up
    }
    setLastScrollY(window.scrollY); // update last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader); // cleanup
    };
  }, [lastScrollY]);

  // States for managing dropdowns in mobile menu
  const [aboutUs, setAboutUs] = useState(false);
  const [services, setServices] = useState(false);
  const [industries, setIndustries] = useState(false);

  // Handle dropdown toggles for mobile menu
  const handleAboutUs = () => {
    setAboutUs(!aboutUs);
    if (industries) {
      setIndustries(!industries);
    }
    if (services) {
      setServices(!services);
    }
  };

  // scrolling-down-to-sevice-box

  const isExtraSmallDevice = useMediaQuery({ maxWidth: 599 });
  const isSmallDevice = useMediaQuery({ minWidth: 600, maxWidth: 767 });
  const isMediumDevice = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isLargeDevice = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
  const isExtraLargeDevice = useMediaQuery({ minWidth: 1200 });

  const handleServiceClick = () => {
    navigate("/");

    setTimeout(() => {
      if (isExtraSmallDevice) {
        console.log("extra-small");
        toggleMenu();
        window.scrollTo(0, 3000);
      } else if (isSmallDevice) {
        console.log("small");
        toggleMenu();
        window.scrollTo(0, 2600);
      } else if (isMediumDevice) {
        console.log("medium");
        toggleMenu();
        window.scrollTo(0, 2500);
      } else if (isLargeDevice) {
        console.log("large");
        window.scrollTo(0, 2650);
      } else {
        console.log("extra-large");
        window.scrollTo(0, 3200);
      }
    }, 200);
  };

  const handleAboutClick = () => {
    navigate("/");
    setTimeout(() => {
      if (isExtraSmallDevice) {
        console.log("extra-small");
        toggleMenu();
        window.scrollTo(0, 550);
      } else if (isSmallDevice) {
        console.log("small");
        toggleMenu();
        window.scrollTo(0, 580);
      } else if (isMediumDevice) {
        console.log("medium");
        toggleMenu();
        window.scrollTo(0, 700);
      } else if (isLargeDevice) {
        console.log("large");
        window.scrollTo(0, 700);
      } else {
        console.log("extra-large");
        window.scrollTo(0, 900);
      }
    }, 200);
  };

  // scroll-code-ends

  const handleLogoClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleServices = () => {
    setServices(!services);
    if (aboutUs) {
      setAboutUs(!aboutUs);
    }
    if (industries) {
      setIndustries(!industries);
    }
  };

  const handleIndustries = () => {
    setIndustries(!industries);
    if (services) {
      setServices(!services);
    }
    if (aboutUs) {
      setAboutUs(!aboutUs);
    }
  };

  

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle mouse enter/leave for dropdowns
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

  useEffect(() => {
    // Check if the device is touch-enabled
    const isTouchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouchScreen);
  }, []);

  // Handle dropdown toggle on touch devices
  const handleDropdownToggle = (dropdownName) => {
    if (isTouchDevice) {
      setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  return (
    <>
      {" "}
      <div className="w-full h-[75px] md:h-[90px] fixed z-50">
        <div
          className={`${
            showHeader ? "header-visible" : "header-hidden"
          } box flex  bg-gradient-to-r from-white to-[#A6A6A6] h-full w-full justify-between items-center px-4 xl:px-10   dark:from-black dark:to-[#737373]`}
        >
          {/* Logo */}
          <Link to={"/"} className="flex-shrink-0 " onClick={handleLogoClick}>
            <img
              src={logo}
              alt="Company Logo"
              className="h-auto w-[80px] pt-[4px] md:w-[108px] hidden 
          "
            />
          </Link>
          <div className="flex gap-3 items-center" >
              <div className="relative lg:hidden">
                {console.log(theme)}
                <img
                  src={light}
                  alt="lignt-logo"
                  onClick={toggleDarkMode}
                  className={`w-[45px] drop-shadow-[1px_1px_1pxrgba(0,0,0,0.1)]  cursor-pointer transition-all duration-300 absolute right-0 z-10 ${
                    !theme ? "opacity-100" : "opacity-10"
                  }`}
                />

                <img
                  src={dark}
                  alt="lignt-logo"
                  onClick={toggleDarkMode}
                  className="w-[45px] drop-shadow-[1px_1px_1pxrgba(0,0,0,0.1)]  cursor-pointer transition-all duration-300 "
                />
              </div>
            

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden block text-black text-3xl"
            onClick={toggleMenu}
          >
             <IoIosMenu />
          </button>
          </div>

          {/* Nav Links for Desktop */}
          <ul className="w-[40%] hidden lg:flex  items-center justify-between">
            <li className="relative group">
              <Link
                to="/services"
                className="text-lg text-black dark:text-white relative"
              >
                Services
              </Link>

              <div className="absolute bottom-0 left-0 w-0 h-[1.3px] py-[1px] rounded-md bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></div>
            </li>

            {/* Industries Dropdown */}
            <li
              className="relative group h-full cursor-pointer transition-all duration-300"
              // onClick={() => handleDropdownToggle("industries")}
              // onMouseEnter={
              //   !isTouchDevice ? () => handleMouseEnter("industries") : null
              // }
              // onMouseLeave={!isTouchDevice ? handleMouseLeave : null}
            >
              <div className="flex items-center rounded-full">
                <Link
                  to={"/common"}
                  className="text-lg text-black dark:text-white "
                >
                  Industries
                </Link>
                {/* <IoIosArrowDown /> */}
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[1.3px] py-[1px] rounded-md bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></div>
              {openDropdown === "industries" && (
                <ul className="absolute top-[63px] left-0 rounded-lg shadow-lg bg-[#292828] w-40 pt-3 pb-3">
                  <li>
                    <Link
                      to="/common"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/common"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/common"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      Ecommerce
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* About Us Dropdown */}
            <li
              className="h-full relative group cursor-pointer transition-all duration-300"
              // onClick={() => handleDropdownToggle("aboutUs")}
              // onMouseEnter={
              //   !isTouchDevice ? () => handleMouseEnter("aboutUs") : null
              // }
              // onMouseLeave={!isTouchDevice ? handleMouseLeave : null}
            >
              <div className="flex items-center justify-between rounded-full">
                <span
                  className="text-lg text-black dark:text-white"
                  onClick={scrollToAboutUs}
                >
                  About LunarEdge
                </span>
                {/* <IoIosArrowDown /> */}
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-[1.3px] py-[1px] rounded-md bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></div>

              {openDropdown === "aboutUs" && (
                <ul className="absolute top-[63px] left-0 rounded-lg shadow-lg bg-[#292828] w-48 pt-3 pb-3">
                  <li>
                    {/* <Link
                  to="/aboutLunarEdge/aboutUs" 
                  className="block px-4 py-2 text-white hover:text-red-500"
                >
                  About Us
                </Link> */}

                    {/* Temporary-about-us  */}
                    <p
                      className="block px-4 py-2 text-white hover:text-red-500"
                      onClick={handleAboutClick}
                    >
                      About Us
                    </p>
                  </li>
                  <li>
                    <Link
                      to="/common"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      Digital Innovators
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/common"
                      className="block px-4 py-2 text-white hover:text-red-500"
                    >
                      Our Clients
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* career */}
            <li className="relative group ">
              <Link
                to="/common"
                className="h-full  rounded-full text-black dark:text-white text-lg cursor-pointer "
                onClick={() => handleDropdownToggle()}
              >
                Career
              </Link>
              <div className="absolute bottom-0 left-0 w-0 h-[1.3px] py-[1px] rounded-md bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></div>
            </li>
      
          </ul>

          {/* Contact Us Button */}
          <div className="hidden lg:flex items-center  ">
            <Link to="/contactus">
              <button
                className="rounded-full py-3 px-6 text-base  border-[#703299] text-white bg-gradient-to-r
         from-[#ff5757] to-[#8c52ff] hover:shadow-sm"
              >
                Contact Us
              </button>
            </Link>
            <div className="p-6">
              <div className="relative ">
                {console.log(theme)}
                <img
                  src={light}
                  alt="lignt-logo"
                  onClick={toggleDarkMode}
                  className={`w-[45px] drop-shadow-[1px_1px_1pxrgba(0,0,0,0.1)]  cursor-pointer transition-all duration-300 absolute right-0 z-10 ${
                    !theme ? "opacity-100" : "opacity-10"
                  }`}
                />

                <img
                  src={dark}
                  alt="lignt-logo"
                  onClick={toggleDarkMode}
                  className="w-[45px] drop-shadow-[1px_1px_1pxrgba(0,0,0,0.1)]  cursor-pointer transition-all duration-300 "
                />
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              className="fixed top-0 left-0 w-full h-auto bg-white z-40 lg:hidden flex flex-col transition-all duration-500 overflow-auto pb-5 rounded-b-lg "
              data-aos="fade-down"
              data-aos-duration="200"
            >
              {/* Mobile menu header */}
              <div className="flex justify-between items-center p-5">
                {/* Mobile logo */}
                <Link to={"/"}>
                  <img
                    src={LunaredgeLogo}
                    alt="lunarEdge"
                    className="h-auto w-[80px] hidden"
                  />
                </Link>
                <button className="text-4xl " onClick={toggleMenu}>
                  <IoIosClose />
                </button>
              </div>
              <hr />
              {/* lower-content  */}
              <ul className="w-35 flex flex-col  items-start mt-3 pl-4 transition-all duration-300 ">
                {/* Services */}
                <li
                  className=" w-35 py-1 flex flex-col gap-1 cursor-pointer transition-all duration-700 mr-1"
                  // onClick={handleServices}
                >
                  <div className="flex gap-1 mr-2 items-center">
                    <Link
                      className="text-md text-[#082847] hover:underline"
                      onClick={() => {
                        toggleMenu();
                        // handleServiceClick
                      }}
                      to="/services"
                    >
                      Services
                    </Link>
                    {/* <IoIosArrowDown /> */}
                  </div>
                </li>

                {/* Industries */}
                <li
                  className=" w-35 py-1 flex flex-col gap-1  cursor-pointer transition-all duration-700"
                  // onClick={handleIndustries}
                >
                  <div className="flex gap-1 items-center ">
                    <Link
                      onClick={toggleMenu}
                      to={"/common"}
                      className="text-md text-[#082847] hover:underline"
                    >
                      Industries
                    </Link>
                    {/* <IoIosArrowDown /> */}
                  </div>
                  {/* Industries sub-items */}
                  {
                    <ul
                      className={` ${
                        industries ? "block" : "hidden"
                      } mt-1  pt-1 pb-4 w-auto transition-all duration-500`}
                    >
                      <li>
                        <Link
                          to="/common"
                          className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-48 text-sm"
                          onClick={toggleMenu}
                        >
                          Education
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/common"
                          className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-56 text-sm"
                          onClick={toggleMenu}
                        >
                          Healthcare
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/common"
                          className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm"
                          onClick={toggleMenu}
                        >
                          Ecommerce
                        </Link>
                      </li>
                    </ul>
                  }
                </li>

                <li
                  className="  py-1 flex flex-col gap-1 items-center cursor-pointer transition-all duration-700"
                  // onClick={handleAboutUs}
                >
                  <div className="flex gap-1 items-center">
                    <span
                      className=" text-md text-[#082847] hover:underline"
                      onClick={() => {
                        toggleMenu();
                        scrollToAboutUs();
                      }}
                    >
                      About LunarEdge
                    </span>
                    {/* <IoIosArrowDown /> */}
                  </div>
                  {/* About Us sub-items */}
                  {
                    <ul
                      className={` ${
                        aboutUs ? "block" : "hidden"
                      } mt-1 ml-0 pt-1 pb-4 w-auto transition-all duration-500`}
                    >
                      <li>
                        {/* aboutUs-code-temporary-changed-for-scroll  */}
                        <Link
                          // to="AboutLunarEdge/AboutUs"
                          className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm "
                          // onClick={toggleMenu}
                          onClick={handleAboutClick}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/common"
                          className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm "
                          onClick={toggleMenu}
                        >
                          Our Clients
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/career"
                          className="block px-2 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm "
                          onClick={toggleMenu}
                        >
                          Careers
                        </Link>
                      </li>
                    </ul>
                  }
                </li>

                {/* carrer  */}
                <li className="py-1">
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
        <div className={` fixed top-2 text-left ml-4  lg:ml-10`}>
          {/* Logo */}
          <Link
            to={"/"}
            className="flex-shrink-0 "
            onClick={() => {
              // toggleMenu();
              handleLogoClick();
            }}
          >
            <img
              src={logo}
              alt="Company Logo"
              className="h-auto w-[80px] pt-[4px] md:w-[108px] 
          "
            />
          </Link>
        </div>
       
      </div>
    </>
  );
};

export default Header;
