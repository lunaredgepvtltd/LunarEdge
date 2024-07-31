import "./App.css";
import { Footer } from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import PreLoader from "./PRELOADER/preLoader.js";

function App() {
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
