import React from "react";
import "./App.css";
import "./Font.css";
import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <>
      <div className="w-full min-h-screen text-white font-['NeueMontreal'] text-xl bg-zinc-800">
        <Navbar />
        <HeroPage />
        <Marquee/>
        <AboutUs></AboutUs>
        
      </div>
    </>
  );
}

export default App;
