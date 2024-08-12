import React, { useEffect, useState } from "react";
import logo from "../assets/Lunaredge.png";
import "../App.css";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import ContactForm from "./ContactForm";
import LunaredgeLogo from "../assets/Lunaredge.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // usestate for mobile-menu
  const [aboutUs, setAboutUs] = useState(false);
  const [services, setServices] = useState(false);
  const [industries, setIndustries] = useState(false);

  // handle about-us button

  const handleAboutUs = () => {
    setAboutUs(!aboutUs);
  };

  const handleServices = () => {
    setServices(!services);
  };

  const handleIndustries = () => {
    setIndustries(!industries);
  };

  // show form button
  const handleButton = () => {
    setShowForm(true);
  };

  // close form button
  const closeForm = () => {
    setShowForm(false);
  };

  // mobile-menu show button
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //  navbar-opacity handler on-scroll
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
      className={`fixed shadow-[#585aa1] shadow-md w-full top-0 left-0 z-50 h-24 md:h-24 bg-[#080925] transition-all duration-300 ${
        scrollNav ? "bg-opacity-70" : "bg-opacity-100"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full px-6 md:px-10">

        {/* Logo */}
        <Link to={'/'} className="flex-shrink-0 mt-4">
          <img
            src={logo} 
            alt="Company Logo"
            className="h-auto w-24  md:w-24 md:pt-3" 
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {menuOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>

        {/* Nav Links for Desktop */}

        <ul className={`hidden md:flex space-x-4 items-center`}>
          {/* About Us */}
          <li className="h-full relative hover:bg-[#082847] group flex items-center p-3 cursor-pointer transition-all duration-300">
            <span className="text-lg text-white group-hover:text-white">
              About Us
            </span>
            <span className="text-lg text-white group-hover:text-white mt-1">
              <IoIosArrowDown />
            </span>
            <ul className="absolute mt-2 top-[40px] left-0 rounded-lg shadow-lg transition-opacity duration-500 invisible group-hover:visible group-hover:opacity-100 bg-white w-48 pt-3 pb-3">
              <li>
                <li>
                  <Link
                    to="/common"
                    className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2"
                  >
                    Digital Innovators
                  </Link>
                </li>
                <li>
                  <Link
                    to="/common"
                    className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2"
                  >
                    Our Clients
                  </Link>
                </li>
                <li>
                  <Link
                    to="/common"
                    className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2"
                  >
                    Careers
                  </Link>
                </li>
              </li>
            </ul>
          </li>

          {/* Services */}
          <li className="h-full relative hover:bg-[#082847] group flex items-center p-3 cursor-pointer transition-all duration-300">
            <span className="text-lg text-white group-hover:text-white">
              Services
            </span>
            <span className="text-lg text-white group-hover:text-white mt-1">
              <IoIosArrowDown />
            </span>
            <ul className="absolute mt-2 top-[40px] left-0 rounded-lg shadow-lg transition-opacity duration-500 invisible group-hover:visible group-hover:opacity-100 bg-white w-48 pt-3 pb-3">
              <li>
                <Link
                  to="/common"
                  className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/common"
                  className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/common"
                  className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2"
                >
                  IT Consulting
                </Link>
              </li>
            </ul>
          </li>

          {/* Industries */}
          <li className="h-full relative hover:bg-[#082847] group flex items-center p-3 cursor-pointer transition-all duration-300">
            <span className="text-lg text-white group-hover:text-white">
              Industries
            </span>
            <span className="text-lg text-white group-hover:text-white mt-1">
              <IoIosArrowDown />
            </span>
            <ul className="absolute mt-2 top-[40px] left-0 rounded-lg shadow-lg transition-opacity duration-500 invisible group-hover:visible group-hover:opacity-100 bg-white w-48 pt-3 pb-3">
              <li>
                <Link
                  to="/common"
                  className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/common"
                  className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  to="/common"
                  className="block px-4 py-2 text-[#082847] hover:underline underline-offset-2"
                >
                  Ecommerce
                </Link>
              </li>
            </ul>
          </li>

          {/* Contact Us */}
          <li>
            <button
              className="bg-[#50498f] rounded-md p-3 text-white text-md hover:bg-transparent hover:border hover:border-white hover:text-white hover:shadow-md hover:shadow-white   transition-all duration-500"
              onClick={handleButton}
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-auto bg-white z-40 md:hidden flex flex-col transition-all duration-500 overflow-auto pb-5 rounded-b-lg">
            {/* header  */}
            <div className="flex justify-between items-center p-2">
              <img src={LunaredgeLogo} alt="lunarEdge" className="h-20 w-20" />
              <button className="text-4xl" onClick={toggleMenu}>
                <IoIosClose />
              </button>
            </div>
            <hr />
            {/* lower-content  */}
            <ul className="flex flex-col  items-start mt-3 pl-4 transition-all duration-300 ">
              <li
                className=" w-28 py-2 flex flex-col gap-1 items-center cursor-pointer transition-all duration-700"
                onClick={handleAboutUs}
              >
                <div className="flex gap-1 items-center">
                  <span className=" text-xl text-[#082847] hover:underline">
                    About Us
                  </span>
                  <IoIosArrowDown />
                </div>
                {/* showing semi-links on clicking about-us  */}

                {
                  <ul
                    className={` ${
                      aboutUs ? "block" : "hidden "
                    } mt-1 ml-20 pt-1 pb-4  w-auto  transition-all duration-500`}
                  >
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-48 text-sm"
                      >
                        Digital Innovators
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm"
                      >
                        Our Clients
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                }
              </li>

              {/* services  */}
              <li
                className=" w-28 py-2 flex flex-col gap-1 items-center cursor-pointer transition-all duration-700 mr-1"
                onClick={handleServices}
              >
                <div className="flex gap-1 items-center mr-2">
                  <span className=" text-xl text-[#082847] hover:underline">
                    Services
                  </span>
                  <IoIosArrowDown />
                </div>
                {/* showing semi-links on clicking about-us  */}

                {
                  <ul
                    className={` ${
                      services ? "block" : "hidden "
                    } mt-1 ml-28 pt-1 pb-4  w-auto  transition-all duration-500`}
                  >
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-48 text-sm"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-56 text-sm"
                      >
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm"
                      >
                        IT Consulting
                      </Link>
                    </li>
                  </ul>
                }
              </li>

              {/* Industries */}
              <li
                className=" w-28 py-2 flex flex-col gap-1 items-center cursor-pointer transition-all duration-700"
                onClick={handleIndustries}
              >
                <div className="flex gap-1 items-center ml-1">
                  <span className=" text-xl text-[#082847] hover:underline">
                    Industries
                  </span>
                  <IoIosArrowDown />
                </div>
                {/* showing semi-links on clicking about-us  */}

                {
                  <ul
                    className={` ${
                      industries ? "block" : "hidden "
                    } mt-1 ml-28 pt-1 pb-4  w-auto  transition-all duration-500`}
                  >
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-48 text-sm"
                      >
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-56 text-sm"
                      >
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/common"
                        className="block px-4 py-1 text-[#082847] hover:underline underline-offset-2 w-32 text-sm"
                      >
                        Ecommerce
                      </Link>
                    </li>
                  </ul>
                }
              </li>

              <li className="py-2  flex gap-1 items-center">
                <button
                  className="bg-black text-white p-3 rounded-md"
                  onClick={() => {
                    handleButton();
                    toggleMenu();
                  }}
                >
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
