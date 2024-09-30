import { useEffect, lazy, Suspense, useState } from "react";
import "./App.css";
import AOS from "aos";
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = lazy(() => import("./pages/Header.jsx"));
const Footer = lazy(() => import("./pages/Footer.jsx"));

function App() {
  const [aboutUs, setAboutUs] = useState(false);
  const [technology, setTechonology] = useState(false);
  const [offers, setOffers] = useState(false);
  const [value, setValues] = useState(false);
  const [contact, setContact] = useState(false);



  // useEffect for AOS animation
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setAboutUs(false);
      setContact(false);
      setTechonology(false);
      setOffers(false);
      setValues(false);
      setScrollY(window.scrollY);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAboutUs = () => {
    setAboutUs(true);
    setContact(false);
    setOffers(false);
    setTechonology(false);
    setValues(false);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  };

  const scrollToValues = () => {
    setAboutUs(false);
    setContact(false);
    setOffers(false);
    setTechonology(false);
    setValues(!value);
    setTimeout(() => {
      window.scrollTo(0, 750);
    }, 200);
  };

  const scrollToOffer = () => {
    setAboutUs(false);
    setContact(false);
    setOffers(!offers);
    setTechonology(false);
    setValues(false);
    setTimeout(() => {
      window.scrollTo(0, 1500);
    }, 200);
  };

  const scrollToTechnology = () => {
    setAboutUs(false);
    setContact(false);
    setOffers(false);
    setTechonology(!technology);
    setValues(false);
    setTimeout(() => {
      window.scrollTo(0, 2350);
    }, 200);
  };

  const scrollToContactUs = () => {
    setAboutUs(false);
    setContact(true);
    setOffers(false);
    setTechonology(false);
    setValues(false);
    setTimeout(() => {
      window.scrollTo(0, 3130);
    }, 200);
  };

  const location = useLocation();

  const isHome = location.pathname === "/";


  return (
    <>
      {/* <PreLoader /> */}
      <div className="App">

          {isHome &&  <div className="hidden lg:block fixed right-3 top-1/2 z-50 h-auto w-auto p-4">
  {/* About Us Button */}
  <div
    className={`h-1 rounded-sm w-7 mx-auto bg-black my-2 cursor-pointer 
      ${aboutUs || scrollY < 490 ? "scale-x-150" : ""} 
      origin-right transition-all duration-300`}
    onClick={scrollToAboutUs}
  ></div>

  {/* Values Button */}
  <div
    className={`h-1 rounded-sm w-7 mx-auto bg-black my-2 cursor-pointer 
      ${value || (scrollY >= 495 && scrollY <= 1252) ? "scale-x-150" : ""} 
      origin-right transition-all duration-300`}
    onClick={scrollToValues}
  ></div>

  {/* Offers Button */}
  <div
    className={`h-1 rounded-sm w-7 mx-auto bg-black my-2 cursor-pointer 
      ${offers || (scrollY >= 1252 && scrollY < 2232) ? "scale-x-150" : ""} 
      origin-right transition-all duration-300`}
    onClick={scrollToOffer}
  ></div>

  {/* Technology Button */}
  <div
    className={`h-1 rounded-sm w-7 mx-auto bg-black my-2 cursor-pointer 
      ${technology || (scrollY >= 2232 && scrollY <= 2987) ? "scale-x-150" : ""} 
      origin-right transition-all duration-300`}
    onClick={scrollToTechnology}
  ></div>

  {/* Contact Us Button */}
  <div
    className={`h-1 rounded-sm w-7 mx-auto bg-black my-2 cursor-pointer 
      ${contact || scrollY >= 2988 ? "scale-x-150" : ""} 
      origin-right transition-all duration-300`}
    onClick={scrollToContactUs}
  ></div>
</div>}


        {/* Lazy loading the Header */}
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

        {/* Lazy loading the Footer */}
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>

        {/* Add ToastContainer here */}
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
      </div>
    </>
  );
}

export default App;
