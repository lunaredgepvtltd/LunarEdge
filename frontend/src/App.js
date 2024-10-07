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

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome && (
        <div className="hidden lg:block fixed right-3 top-[40%] z-50 h-auto w-auto p-4">

          {/* Home */}
          <div
            className={`h-1 rounded-sm w-8 mx-auto bg-black my-4 cursor-pointer 
              ${clickedSection === 'home' || (scrollY < 725 && clickedSection === '') ? "scale-x-150" : ""} 
              origin-right transition-all duration-300`}
            onClick={() => scrollToSection('home', 0)}
          ></div>

          {/* About Us */}
          <div
            className={`h-1 rounded-sm w-8 mx-auto bg-black my-4 cursor-pointer 
              ${clickedSection === 'aboutUs' || (scrollY >= 725 && scrollY < 1424 && clickedSection === '') ? "scale-x-150" : ""} 
              origin-right transition-all duration-300`}
            onClick={() => scrollToSection('aboutUs', 726)}
          ></div>

          {/* Hawa Mahal */}
          <div
            className={`h-1 rounded-sm w-8 mx-auto bg-black my-4 cursor-pointer 
              ${clickedSection === 'hawaMahal' || (scrollY >= 1424 && scrollY < 2033 && clickedSection === '') ? "scale-x-150" : ""} 
              origin-right transition-all duration-300`}
            onClick={() => scrollToSection('hawaMahal', 1424)}
          ></div>

          {/* Journey */}
          <div
            className={`h-1 rounded-sm w-8 mx-auto bg-black my-4 cursor-pointer 
              ${clickedSection === 'journey' || (scrollY >= 2033 && scrollY < 2742 && clickedSection === '') ? "scale-x-150" : ""} 
              origin-right transition-all duration-300`}
            onClick={() => scrollToSection('journey', 2034)}
          ></div>

          {/* Values */}
          <div
            className={`h-1 rounded-sm w-8 mx-auto bg-black my-4 cursor-pointer 
              ${clickedSection === 'values' || (scrollY >= 2742 && scrollY <= 3450 && clickedSection === '') ? "scale-x-150" : ""} 
              origin-right transition-all duration-300`}
            onClick={() => scrollToSection('values', 2743)}
          ></div>

          {/* Vision & Mission */}
          <div
            className={`h-1 rounded-sm w-8 mx-auto bg-black my-4 cursor-pointer 
              ${clickedSection === 'visionMission' || (scrollY >= 3450 && scrollY < 4832 && clickedSection === '') ? "scale-x-150" : ""} 
              origin-right transition-all duration-300`}
            onClick={() => scrollToSection('visionMission', 3455)}
          ></div>

          {/* Technology */}
          <div
            className={`h-1 rounded-sm w-8 mx-auto bg-black my-4 cursor-pointer 
              ${clickedSection === 'technology' || (scrollY >= 4832 && scrollY <= 5572 && clickedSection === '') ? "scale-x-150" : ""} 
              origin-right transition-all duration-300`}
            onClick={() => scrollToSection('technology', 4834)}
          ></div>

          {/* Contact */}
          <div
            className={`h-1 rounded-sm w-8 mx-auto bg-black my-4 cursor-pointer 
              ${clickedSection === 'contact' || (scrollY > 5572 && clickedSection === '') ? "scale-x-150" : ""} 
              origin-right transition-all duration-300`}
            onClick={() => scrollToSection('contact', 5576)}
          ></div>
        </div>
      )}

      {/* Lazy load Header */}
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
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
