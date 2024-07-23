import './App.css';
import Header from './components/Header';
import HeaderTop from './components/HeaderTop';

import Hero from './components/Hero';
function App() {
  return (
    <div className="App">
      {/* Header-top  */}
      <HeaderTop/>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero/>
    </div>
  );
}

export default App;

