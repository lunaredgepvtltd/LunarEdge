import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderTop from './components/HeaderTop';

import Hero from './components/Hero';
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero/>

      {/* footer */}
      <Footer/>
       
    </div>
  );
}

export default App;

