import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Facilities from "./components/Facilities";
import Dining from "./components/Dining";
import Wellness from "./components/Wellness";
import Discover from "./components/Discover";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <About />
        <Rooms />
        <Facilities />
        <Dining />
        <Wellness />
        <Discover />
      </main>
      <Footer />
    </div>
  );
}

export default App;
