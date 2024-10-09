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
  const [clickedSection, setClickedSection] = useState("");
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [hoverActive,setHoverActive] = useState("")

  // Scroll to the top when the component mounts (page is loaded or refreshed)

  // Initialize AOS (animation on scroll)
  useEffect(() => {
    // Disable the browser's scroll restoration feature
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  
    // Reset scroll position to top when the page is refreshed
    const [navigationEntry] = performance.getEntriesByType('navigation');
    if (navigationEntry.type === 'reload') {
      window.scrollTo(0, 0); // Scroll to the top if the page is refreshed
      console.log("Page was reloaded and scrolled to top.");
    }
  
    // Initialize AOS (animation on scroll)
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  


  // Update scrollY on window scroll
  useEffect(() => {
    console.log(scrollY)
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


  const location = useLocation();
  const isHome = location.pathname === "/";

    // State to track theme mode
    const [darkMode, setDarkMode] = useState(() => {
      // Check the system preference for dark mode
      if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      return false;
    });
  
    // Handle theme change with useEffect
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);
  
    // Toggle between dark and light mode
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      console.log("clicked darkMode")
    };

  return (
    <>
    {console.log(scrollY)}
      {isHome && (
        <div className="hidden dark:text-white lg:flex flex-col items-center gap-1 fixed right-10 top-[30%] z-50 h-auto w-20 p-4">
          {/* Home */}
          <div className="h-[3rem] cursor-pointer" onMouseEnter={()=>setHoverActive('home')} onMouseLeave={()=>setHoverActive("")} onClick={() => scrollToSection("home", 0)}>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black dark:bg-white cursor-pointer 
                ${clickedSection === "home" || (scrollY < 725 && clickedSection === "") || hoverActive==='home' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("home", 0)}
            ></div>
            {clickedSection === "home" || (scrollY < 725 && clickedSection === "") || hoverActive==='home' ? (
              <div  className="text-[14px] pr-3 pt-1 font-medium" data-aos="fade-left" data-aos-duration="300">Home</div>
            ) : (
              ""
            )}
          </div>

          {/* About Us */}
          <div className="h-[3rem]  cursor-pointer" onMouseEnter={()=>setHoverActive('aboutUs')} onMouseLeave={()=>setHoverActive("")} onClick={() => scrollToSection("aboutUs", 726)}>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black  dark:bg-white  cursor-pointer 
                ${clickedSection === "aboutUs" || (scrollY >= 725 && scrollY < 1424 && clickedSection === "") || hoverActive==='aboutUs' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("aboutUs", 726)}
            ></div>
            {clickedSection === "aboutUs" || (scrollY >= 725 && scrollY < 1424 && clickedSection === "") || hoverActive==='aboutUs' ? (
              <div className="flex flex-col items-center text-[14px] pr-3  font-medium my-1" data-aos="fade-left" data-aos-duration="300">
                <p>About</p>
                <p>LunarEdge</p>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Hawa Mahal */}
          <div className="h-[3rem]  cursor-pointer" onMouseEnter={()=>setHoverActive('hawaMahal')} onMouseLeave={()=>setHoverActive("")} onClick={() => scrollToSection("hawaMahal", 1424)} >
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black  dark:bg-white  cursor-pointer 
                ${clickedSection === "hawaMahal" || (scrollY >= 1424 && scrollY < 2033 && clickedSection === "") || hoverActive==='hawaMahal'  ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("hawaMahal", 1424)}
            ></div>
            {clickedSection === "hawaMahal" || (scrollY >= 1424 && scrollY < 2033 && clickedSection === "") || hoverActive==='hawaMahal' ? (
              <div className="text-[14px] pr-3 pt-1 font-medium text-nowrap" data-aos="fade-left" data-aos-duration="300">Hawa Mahal</div>
            ) : (
              ""
            )}
          </div>

          {/* Journey */}
          <div className="h-[3rem]  cursor-pointer" onMouseEnter={()=>setHoverActive('ourJourney')} onMouseLeave={()=>setHoverActive("")}  onClick={() => scrollToSection("journey", 2034)}>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black  dark:bg-white  cursor-pointer 
                ${clickedSection === "journey" || (scrollY >= 2033 && scrollY < 2742 && clickedSection === "") || hoverActive==='ourJourney' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("journey", 2034)}
            ></div>
            {clickedSection === "journey" || (scrollY >= 2033 && scrollY < 2742 && clickedSection === "") || hoverActive==='ourJourney' ? (
              <div className="text-[14px] pr-3 pt-1 font-medium text-nowrap" data-aos="fade-left" data-aos-duration="300">Our Journey</div>
            ) : (
              ""
            )}
          </div>

          {/* Values */}
          <div className="h-[3rem]  cursor-pointer" onMouseEnter={()=>setHoverActive('values')} onMouseLeave={()=>setHoverActive("")} onClick={() => scrollToSection("values", 2743)}>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black  dark:bg-white  cursor-pointer 
                ${clickedSection === "values" || (scrollY >= 2742 && scrollY <= 3380 && clickedSection === "") || hoverActive==='values' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("values", 2743)}
            ></div>
            {clickedSection === "values" || (scrollY >= 2742 && scrollY < 3380 && clickedSection === "") || hoverActive==='values' ? (
              <div className="text-[14px] pr-3 pt-1 font-medium" data-aos="fade-left" data-aos-duration="300">Values</div>
            ) : (
              ""
            )}
          </div>

          {/* Vision & Mission */}
          <div className="h-[3rem]  cursor-pointer" onMouseEnter={()=>setHoverActive('vissionAndMission')} onMouseLeave={()=>setHoverActive("")} onClick={() => scrollToSection("visionMission", 3380)}>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black  dark:bg-white  cursor-pointer 
                ${clickedSection === "visionMission" || (scrollY >= 3380 && scrollY < 4656 && clickedSection === "") || hoverActive==='vissionAndMission' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("visionMission", 3380)}
            ></div>
            {clickedSection === "visionMission" || (scrollY >= 3380 && scrollY < 4656 && clickedSection === "") || hoverActive==='vissionAndMission' ? (
               <div className="text-[14px] pr-3 pt-1 font-medium text-nowrap" data-aos="fade-left" data-aos-duration="300">Vission & Mission</div>
            ) : (
              ""
            )}
          </div>

          {/* Technology */}
          <div className="h-[3rem]  cursor-pointer" onMouseEnter={()=>setHoverActive('techonology')} onMouseLeave={()=>setHoverActive("")}  onClick={() => scrollToSection("technology", 4656)}>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black  dark:bg-white  cursor-pointer 
                ${clickedSection === "technology" || (scrollY >= 4656 && scrollY < 5430 && clickedSection === "") || hoverActive==='techonology' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("technology", 4656)}
            ></div>
            {clickedSection === "technology" || (scrollY >= 4656 && scrollY <= 5430 && clickedSection === "") || hoverActive==='techonology' ? (
              <div className="text-[14px] pr-3 pt-1 font-medium" data-aos="fade-left" data-aos-duration="300">Technology</div>
            ) : (
              ""
            )}
          </div>

          {/* Contact */}
          <div className="h-[3rem]  cursor-pointer group" onMouseEnter={()=>setHoverActive('contactUs')} onMouseLeave={()=>setHoverActive("")} onClick={() => scrollToSection("contact", 5440)}>
            <div
              className={`h-1 rounded-sm w-8 mx-auto bg-black  dark:bg-white  cursor-pointer bacl 
                ${clickedSection === "contact" || (scrollY > 5430 && clickedSection === "") || hoverActive==='contactUs' ? "scale-x-150" : ""} 
                origin-right transition-all duration-300`}
              onClick={() => scrollToSection("contact", 5440)}
            ></div>
            {clickedSection === "contact" || (scrollY >= 5430 && clickedSection === "") || hoverActive==='contactUs' ? (
              <div className="text-[14px] pr-3 pt-1 font-medium text-nowrap" data-aos="fade-left" data-aos-duration="300">Contact Us</div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}

      {/* Lazy load Header */}
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header toggleDarkMode={toggleDarkMode}/>
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
