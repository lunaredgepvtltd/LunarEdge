import { useEffect, lazy, Suspense, useState } from "react";
import "./App.css";
import AOS from "aos";
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy loading Header and Footer components
const Header = lazy(() => import("./pages/Header.jsx"));
const Footer = lazy(() => import("./pages/Footer.jsx"));

function App() {
  const [clickedSection, setClickedSection] = useState(""); // Section clicked by user
  const [scrollY, setScrollY] = useState(window.scrollY);   // Track current scroll position
  const [hoverActive, setHoverActive] = useState(""); // Track which section is being hovered

  // Scroll to the top when the component mounts (page is loaded or refreshed)
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'; // Prevent browser from restoring scroll
    }
  
    // Check if the page was reloaded
    const [navigationEntry] = performance.getEntriesByType('navigation');
    if (navigationEntry.type === 'reload') {
      window.scrollTo(0, 0); // Scroll to the top if page is refreshed
      console.log("Page was reloaded and scrolled to top.");
    }
  
    // Initialize AOS (animation on scroll)
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh(); // Refresh AOS on component mount
  }, []);

  // Update scrollY on window scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scrollY when user scrolls
      setClickedSection(""); // Reset the clicked section when scrolling
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  // Scroll to specific section and set it as clicked
  const scrollToSection = (e, section) => {
    e.preventDefault(); // Prevent default anchor behavior
    setClickedSection(section); // Set clicked section
    const sectionElement = document.querySelector(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
    }
  };

  const location = useLocation();
  const isHome = location.pathname === "/";

  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode classes and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {isHome && (
        <div className="hidden dark:text-white lg:flex flex-col items-center gap-1 fixed right-10 top-[30%] z-50 h-auto w-20 p-4">
          {/* Home */}
          <a
            href="#firstPage"
            onClick={(e) => scrollToSection(e, "#firstPage")}
            className="h-[3rem] cursor-pointer"
            onMouseEnter={() => setHoverActive('home')}
            onMouseLeave={() => setHoverActive("")}
          >
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black dark:bg-white cursor-pointer 
                ${clickedSection === "home" || (scrollY < 725 && clickedSection === "") || hoverActive === 'home' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
            ></div>
            {clickedSection === "home" || (scrollY < 725 && clickedSection === "") || hoverActive === 'home' ? (
              <div className="text-[14px] pr-3 pt-1 font-medium" data-aos="fade-left" data-aos-duration="300">Home</div>
            ) : ""}
          </a>

          {/* About Us */}
          <a
            href="#aboutUs"
            onClick={(e) => scrollToSection(e, "#aboutUs")}
            className="h-[3rem] cursor-pointer"
            onMouseEnter={() => setHoverActive('aboutUs')}
            onMouseLeave={() => setHoverActive("")}
          >
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black dark:bg-white cursor-pointer 
                ${clickedSection === "aboutUs" || (scrollY >= 725 && scrollY < 1424 && clickedSection === "") || hoverActive === 'aboutUs' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
            ></div>
            {clickedSection === "aboutUs" || (scrollY >= 725 && scrollY < 1424 && clickedSection === "") || hoverActive === 'aboutUs' ? (
              <div className="flex flex-col items-center text-[14px] pr-3 font-medium my-1" data-aos="fade-left" data-aos-duration="300">
                <p>About</p>
                <p>LunarEdge</p>
              </div>
            ) : ""}
          </a>

          {/* Hawa Mahal */}
          <a
            href="#hawaMahal"
            onClick={(e) => scrollToSection(e, "#hawaMahal")}
            className="h-[3rem] cursor-pointer"
            onMouseEnter={() => setHoverActive('hawaMahal')}
            onMouseLeave={() => setHoverActive("")}
          >
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black dark:bg-white cursor-pointer 
                ${clickedSection === "hawaMahal" || (scrollY >= 1424 && scrollY < 2033 && clickedSection === "") || hoverActive === 'hawaMahal' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
            ></div>
            {clickedSection === "hawaMahal" || (scrollY >= 1424 && scrollY < 2033 && clickedSection === "") || hoverActive === 'hawaMahal' ? (
              <div className="text-[14px] pr-3 pt-1 font-medium text-nowrap" data-aos="fade-left" data-aos-duration="300">Hawa Mahal</div>
            ) : ""}
          </a>

          {/* Our Journey */}
          <a
            href="#ourJourney"
            onClick={(e) => scrollToSection(e, "#ourJourney")}
            className="h-[3rem] cursor-pointer"
            onMouseEnter={() => setHoverActive('ourJourney')}
            onMouseLeave={() => setHoverActive("")}
          >
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black dark:bg-white cursor-pointer 
                ${clickedSection === "ourJourney" || (scrollY >= 2033 && scrollY < 2742 && clickedSection === "") || hoverActive === 'ourJourney' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
            ></div>
            {clickedSection === "ourJourney" || (scrollY >= 2033 && scrollY < 2742 && clickedSection === "") || hoverActive === 'ourJourney' ? (
              <div className="text-[14px] pr-3 pt-1 font-medium text-nowrap" data-aos="fade-left" data-aos-duration="300">Our Journey</div>
            ) : ""}
          </a>

          {/* Values */}
          <a
            href="#values"
            onClick={(e) => scrollToSection(e, "#values")}
            className="h-[3rem] cursor-pointer"
            onMouseEnter={() => setHoverActive('values')}
            onMouseLeave={() => setHoverActive("")}
          >
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black dark:bg-white cursor-pointer 
                ${clickedSection === "values" || (scrollY >= 2742 && scrollY < 3380 && clickedSection === "") || hoverActive === 'values' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
            ></div>
            {clickedSection === "values" || (scrollY >= 2742 && scrollY < 3380 && clickedSection === "") || hoverActive === 'values' ? (
              <div className="text-[14px] pr-3 pt-1 font-medium" data-aos="fade-left" data-aos-duration="300">Values</div>
            ) : ""}
          </a>

          {/* Vision & Mission */}
          <a
            href="#vision"
            onClick={(e) => scrollToSection(e, "#vision")}
            className="h-[3rem] cursor-pointer"
            onMouseEnter={() => setHoverActive('visionAndMission')}
            onMouseLeave={() => setHoverActive("")}
          >
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black dark:bg-white cursor-pointer 
                ${clickedSection === "visionMission" || (scrollY >= 3380 && scrollY < 4656 && clickedSection === "") || hoverActive === 'visionAndMission' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
            ></div>
            {clickedSection === "visionMission" || (scrollY >= 3380 && scrollY < 4656 && clickedSection === "") || hoverActive === 'visionAndMission' ? (
              <div className="text-[14px] pr-3 pt-1 font-medium text-nowrap" data-aos="fade-left" data-aos-duration="300">Vision & Mission</div>
            ) : ""}
          </a>

          {/* Technology */}
          <a
            href="#technology"
            onClick={(e) => scrollToSection(e, "#technology")}
            className="h-[3rem] cursor-pointer"
            onMouseEnter={() => setHoverActive('technology')}
            onMouseLeave={() => setHoverActive("")}
          >
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black dark:bg-white cursor-pointer 
                ${clickedSection === "technology" || (scrollY >= 4656 && scrollY < 5430 && clickedSection === "") || hoverActive === 'technology' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
            ></div>
            {clickedSection === "technology" || (scrollY >= 4656 && scrollY < 5430 && clickedSection === "") || hoverActive === 'technology' ? (
              <div className="text-[14px] pr-3 pt-1 font-medium" data-aos="fade-left" data-aos-duration="300">Technology</div>
            ) : ""}
          </a>

          {/* Contact */}
          <a
            href="#contactUs"
            onClick={(e) => scrollToSection(e, "#contactUs")}
            className="h-[3rem] cursor-pointer"
            onMouseEnter={() => setHoverActive('contactUs')}
            onMouseLeave={() => setHoverActive("")}
          >
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black dark:bg-white cursor-pointer 
                ${clickedSection === "contact" || (scrollY > 5430 && clickedSection === "") || hoverActive === 'contactUs' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
            ></div>
            {clickedSection === "contact" || (scrollY > 5430 && clickedSection === "") || hoverActive === 'contactUs' ? (
              <div className="text-[14px] pr-3 pt-1 font-medium text-nowrap" data-aos="fade-left" data-aos-duration="300">Contact Us</div>
            ) : ""}
          </a>
        </div>
      )}

      {/* Lazy load Header */}
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header toggleDarkMode={toggleDarkMode} theme={darkMode} />
      </Suspense>

      <main>
        {/* Outlet for nested routes */}
        <Suspense fallback={<div>Loading Content...</div>}>
          <ScrollToTop />
          <Outlet context={{ darkMode }} />
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
