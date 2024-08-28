import { useEffect, lazy, Suspense } from "react";
import "./App.css";
import PreLoader from "./PRELOADER/preLoader.js";
import AOS from 'aos';
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx'
const Header = lazy(() => import("./pages/Header.jsx"));
const Footer = lazy(() => import("./pages/Footer.jsx"));

function App() {

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
      {/* <PreLoader /> */}
      <div className="App">
        
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
      </div>
    </>
  );
}

export default App;
