import { useEffect, lazy, Suspense } from "react";
import "./App.css";
import PreLoader from "./PRELOADER/preLoader.js";
import AOS from 'aos';
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = lazy(() => import("./pages/Header.jsx"));
const Footer = lazy(() => import("./pages/Footer.jsx"));

function App() {

  
const isExtraSmallDevice = useMediaQuery({ maxWidth: 599 });
const isSmallDevice = useMediaQuery({ minWidth: 600, maxWidth: 767 });
const isMediumDevice = useMediaQuery({ minWidth: 768, maxWidth: 991 });
const isLargeDevice = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
const isExtraLargeDevice = useMediaQuery({ minWidth: 1200 });

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

  return (
    <>
      <PreLoader />
      <div className="App">

        <div className=" hidden lg:block fixed right-5 top-1/2 z-50 h-auto w-auto p-4 bg-blue-600">
        <div className="h-1 rounded-sm w-7 mx-auto bg-black my-2 cursor-pointer"></div>
        <div className="h-1 rounded-sm w-7 mx-auto bg-black my-2 cursor-pointer"></div>
        <div className="h-1 rounded-sm w-7 mx-auto bg-black my-2 cursor-pointer"></div>
        <div className="h-1 rounded-sm w-7 mx-auto bg-black my-2 cursor-pointer"></div>
        <div className="h-1 rounded-sm w-7 mx-auto bg-black my-2 cursor-pointer"></div>
        </div>
        
        {/* Lazy loading the Header */}
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>

        <main>
          {/* Outlet for nested routes */}
          <Suspense fallback={<div>Loading Content...</div>}>
            <ScrollToTop/>
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
