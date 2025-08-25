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
    <div className="font-sans text-gray-800 bg-gray-50">
      {" "}
      {/* Optional: nice bg color */}
      <Header />
      {/* SOLUTION APPLIED HERE */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
