import React from "react";
import "./App.css";
import "./Font.css";
import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import AboutUs from "./components/AboutUs";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full min-h-screen text-white font-['NeueMontreal'] text-xl bg-zinc-800">
        <Navbar />
        <HeroPage />
        <Marquee />
        <AboutUs></AboutUs>
        <Eyes></Eyes>
        <Featured/>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
