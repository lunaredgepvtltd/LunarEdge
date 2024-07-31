import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import PreLoader from "./PRELOADER/preLoader.js";
import AOS from 'aos'
import "aos/dist/aos.css"

function App() {


  // useEffect for AOS annimation 

 useEffect(()=>{
  AOS.init({
    offset : 100,
    duration : 800,
    easing : "ease-in-sine",
    delay : 100,
  });
  AOS.refresh()
 },[])



  return (
    <>
    <PreLoader/> 
    
      <div className="App">
        
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* footer */}

        <Footer />
      </div>
   
    
    </>
  );
}

export default App;
