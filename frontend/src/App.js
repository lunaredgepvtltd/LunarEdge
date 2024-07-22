import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="w-full h-screen bg-indigo-400 pt-16"> {/* Added pt-16 to account for fixed header height */}
        {/* Content for hero section */}
        <div className="flex justify-center items-center h-full text-white text-4xl font-bold">
          Welcome to Our Website
        </div>
      </div>
    </div>
  );
}

export default App;

