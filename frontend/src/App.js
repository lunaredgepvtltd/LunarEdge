import './App.css';
import Header from './components/Header';
import HeaderTop from './components/HeaderTop';
import Lottie from 'lottie-react'
import computer from './assets/computer.json'
function App() {
  return (
    <div className="App">
      {/* Header-top  */}
      <HeaderTop/>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="w-full h-screen bg-white pt-16"> {/* Added pt-16 to account for fixed header height */}
        {/* Content for hero section */}
        <div className="flex justify-center items-center h-full text-white text-4xl font-bold">
          Welcome to Our Website
          <div>
             <Lottie animationData={computer}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

