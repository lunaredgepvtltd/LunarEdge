import { useEffect, lazy, Suspense, useState } from "react";
import "./App.css";
import AOS from "aos";
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = lazy(() => import("./pages/Header.jsx"));
const Footer = lazy(() => import("./pages/Footer.jsx"));

function App() {
  const [clickedSection, setClickedSection] = useState(""); // To track clicked section
  const [scrollY, setScrollY] = useState(window.scrollY); // State for scroll position

  const location = useLocation();
  const isHome = location.pathname === "/";

  // Initialize AOS (animation on scroll)
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Scroll to the top when the app is refreshed
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); 

  // Update scrollY on window scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setClickedSection(""); // Reset the clicked section when scrolling
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to specific section and set it as clicked
  const scrollToSection = (section, scrollPosition) => {
    setClickedSection(section);
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 200);
  };

  // State to track theme mode
  const [darkMode, setDarkMode] = useState(() => {
    // Check the system preference for dark mode
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Handle theme change with useEffect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("clicked darkMode");
  };

  return (
    <>
      {console.log(scrollY)}
      {isHome && (
        <div className="hidden lg:flex flex-col items-center gap-8 fixed right-10 top-[30%] z-50 h-auto w-20 p-4">
          {/* Home */}
          <div>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black cursor-pointer 
                ${clickedSection === "home" || (scrollY < 725 && clickedSection === "") ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("home", 0)}
            ></div>
            {clickedSection === "home" || (scrollY < 725 && clickedSection === "") ? (
              <div className="text-[12px] font-medium" data-aos="fade-left">
                Home
              </div>
            ) : (
              ""
            )}
          </div>

          {/* About Us */}
          <div>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black cursor-pointer 
                ${clickedSection === "aboutUs" || (scrollY >= 725 && scrollY < 1424 && clickedSection === "") ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("aboutUs", 726)}
            ></div>
            {clickedSection === "aboutUs" || (scrollY >= 725 && scrollY < 1424 && clickedSection === "") ? (
              <div className="flex flex-col items-center text-[12px] font-medium my-1" data-aos="fade-left">
                <p>About</p>
                <p>LunarEdge</p>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Hawa Mahal */}
          <div>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black cursor-pointer 
                ${clickedSection === "hawaMahal" || (scrollY >= 1424 && scrollY < 2033 && clickedSection === "") ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("hawaMahal", 1424)}
            ></div>
            {clickedSection === "hawaMahal" || (scrollY >= 1424 && scrollY < 2033 && clickedSection === "") ? (
              <div className="text-[12px] font-medium text-nowrap" data-aos="fade-left">
                Hawa Mahal
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Journey */}
          <div>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black cursor-pointer 
                ${clickedSection === "journey" || (scrollY >= 2033 && scrollY < 2742 && clickedSection === "") ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("journey", 2034)}
            ></div>
            {clickedSection === "journey" || (scrollY >= 2033 && scrollY < 2742 && clickedSection === "") ? (
              <div className="text-[12px] font-medium text-nowrap" data-aos="fade-left">
                Our Journey
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Values */}
          <div>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black cursor-pointer 
                ${clickedSection === "values" || (scrollY >= 2742 && scrollY <= 3380 && clickedSection === "") ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("values", 2743)}
            ></div>
            {clickedSection === "values" || (scrollY >= 2742 && scrollY < 3380 && clickedSection === "") ? (
              <div className="text-[12px] font-medium" data-aos="fade-left">
                Values
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Vision & Mission */}
          <div>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black cursor-pointer 
                ${clickedSection === "visionMission" || (scrollY >= 3380 && scrollY < 4656 && clickedSection === "") ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("visionMission", 3380)}
            ></div>
            {clickedSection === "visionMission" || (scrollY >= 3380 && scrollY < 4656 && clickedSection === "") ? (
              <div className="text-[12px] font-medium text-nowrap" data-aos="fade-left">
                Vission & Mission
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Technology */}
          <div>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black cursor-pointer 
                ${clickedSection === "technology" || (scrollY >= 4656 && scrollY <= 5463 && clickedSection === "") ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("technology", 4656)}
            ></div>
            {clickedSection === "technology" || (scrollY >= 4656 && scrollY <= 5460 && clickedSection === "") ? (
              <div className="text-[12px] font-medium" data-aos="fade-left">
                Technology
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Contact */}
          <div>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black cursor-pointer 
                ${clickedSection === "contact" || (scrollY > 5460 && clickedSection === "") ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("contact", 5460)}
            ></div>
            {clickedSection === "contact" || (scrollY > 5460 && clickedSection === "") ? (
              <div className="text-[12px] font-medium text-nowrap" data-aos="fade-left">
                Contact Us
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}

      {/* Lazy load Header */}
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header toggleDarkMode={toggleDarkMode} />
      </Suspense>

      <main>
        {/* Outlet for nested routes */}
        <Suspense fallback={<div>Loading Content...</div>}>
          <ScrollToTop />
          <Outlet />
        </Suspense>
      </main>

      {/* Lazy load Footer */}
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>

      {/* Toast Notification Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
