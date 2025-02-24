import About from './About';
import Footer from './Footer';
import LeadingAi from './LeadingAi';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import robot from "../Assets/robot.jpg";

const Hero = () => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="font-sans">
      {/* 🔥 Top Banner */}
      {bannerVisible && (
        <div className="bg-blue-700 text-white text-center py-2 flex items-center justify-center relative">
          <span>
            🔥 This banner can inform the visitors about something important.{" "}
            <a href="#" className="underline">
              Learn more
            </a>
          </span>
          <button
            className="absolute right-5 text-white text-xl"
            onClick={() => setBannerVisible(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* 🚀 Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-700">DarkSonic</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700">
          <Link to="/about" className="hover:text-blue-700">
            About the Tool
          </Link>
          <Link to="/about" className="hover:text-blue-700">
            Contact US
          </Link>
        </div>

        <button onClick={() => navigate("/Agent")} className="hidden md:block bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
          Try DarkSonic →
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* 📱 Mobile Menu with Animation */}
      <div
        className={`md:hidden flex flex-col items-center bg-white shadow-md py-4 space-y-4 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-5 scale-95 hidden"
        }`}
      >
        <Link to="/about" className="hover:text-blue-700">
          About the Tool
        </Link>
        <Link to="/about" className="hover:text-blue-700">
          Contact US
        </Link>
        <button onClick={() => navigate("/Agent")} className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
          Try DarkSonic →
        </button>
      </div>

      {/* ✨ Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-16 bg-[#f9f6f1]">
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            AI-Powered Blockchain Assistant for the Sonic Network
          </h2>
          <p className="mt-4 text-gray-600">
            DarkSonic is an AI-driven assistant designed to help users interact with the Sonic 
            network seamlessly. It enables wallet operations, transactions, and smart contract 
            deployment while integrating with Pyth Network for price feeds and KyberSwap for 
            token swaps. Built with TypeScript and Bun, DarkSonic aims to provide multi-chain 
            support and advanced DeFi automation.
          </p>

          {/* 🔎 Search Bar */}
          <div className="mt-6 flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-4 py-3 max-w-full sm:max-w-lg mx-auto md:mx-0">
            <FiSearch className="text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Ask something..."
              className="ml-3 w-full outline-none"
            />
          </div>
        </div>

        {/* 🤖 Right Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={robot}
            alt="AI Robot"
            className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]"
          />
        </div>
      </section>

      {/* Reduced Space Between Components */}
      <div className="space-y-1"> {/* Adjust the space-y-* value to control the spacing */}
        <LeadingAi />
      </div>
        <About />
        <Footer />
      </div>
    
  );
};

export default Hero;