import './App.css';
import Footer from './pages/Footer';

import Header from './pages/Header'; 
import Hero from './pages/Hero';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <Hero/>

      {/* footer */}
      <Footer/>
       
    </div>
  );
}

export default App;

