import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowLeft, FiArrowRight, FiChevronRight } from "react-icons/fi";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for the component
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Elegant hotel suite with ocean view",
    },
    {
      src: "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Hotel exterior",
    },
    {
      src: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Hotel lobby",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Headline & Intro Text
      gsap.from(".reveal-text", {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".headline-container",
          start: "top 85%",
          end: "top 40%",
          scrub: 1,
        },
      });

      // Animate the grid panels
      gsap.from(".grid-panel", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 overflow-hidden bg-[#F5F3ED]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="headline-container text-center max-w-4xl mx-auto mb-16">
          <div className="overflow-hidden pb-2">
            <h2 className="reveal-text font-serif text-5xl md:text-6xl text-[#333D2E] leading-tight">
              Where the Horizon
            </h2>
          </div>
          <div className="overflow-hidden pb-2">
            <h2 className="reveal-text font-serif text-5xl md:text-6xl text-[#333D2E] leading-tight">
              Meets Hospitality
            </h2>
          </div>
          <div className="overflow-hidden mt-4">
            <p className="reveal-text text-lg md:text-xl text-gray-600 leading-relaxed">
              A symphony of sand, sea, and sky, The Quilon Beach Hotel is more
              than a destination—it's an experience woven into the fabric of the
              coast.
            </p>
          </div>
        </div>

        {/* Grid Section -- Updated & Corrected */}
        <div className="about-grid grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Top Left: Image Slider (Spans 2 columns on large screens) */}
          <div className="grid-panel lg:col-span-2">
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
              {/* Navigation Arrows */}
              <div className="absolute inset-0 z-20 flex items-center justify-between p-4">
                <button
                  onClick={prevSlide}
                  className="bg-white/80 hover:bg-white text-[#333D2E] p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Previous slide"
                >
                  <FiArrowLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-white/80 hover:bg-white text-[#333D2E] p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Next slide"
                >
                  <FiArrowRight size={20} />
                </button>
              </div>

              {/* Slide Indicator */}
              <div className="absolute top-4 right-4 z-30 bg-[#333D2E] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                <span className="font-bold">{currentSlide + 1}</span>
                <span className="mx-1">/</span>
                <span className="text-gray-300">{galleryImages.length}</span>
              </div>

              {/* Slides */}
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Right: Hotel Info Box -- CORRECTED STYLING */}
          <div className="grid-panel bg-stone-50 rounded-2xl p-8 shadow-xl flex flex-col justify-center items-center text-center">
            {/* For a custom texture, you can add: bg-[url('/path-to-your-texture.png')] */}
            <h3 className="font-serif text-3xl md:text-4xl text-[#333D2E] leading-tight">
              The Quilon Beach Hotel
            </h3>
            <p className="italic text-gray-600 text-lg mt-2">Since 2000</p>
          </div>

          {/* Bottom Row Item 1: "BE TOGETHER" */}
          {/* This will be full-width on mobile and take the first column on desktop */}
          <div className="grid-panel relative h-80 rounded-2xl overflow-hidden shadow-md bg-gray-800">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white text-center">
              <h4 className="text-3xl font-serif mb-4">BE TOGETHER</h4>
              <p className="text-base mb-6 max-w-xs">
                Hotels designed to connect with the people most important to
                you.
              </p>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Wrapper for the other 2 bottom boxes -- CORRECTED MOBILE LAYOUT */}
          {/* This wrapper takes 2 columns on desktop, but contains a 2-column grid for mobile */}
          <div className="grid-panel lg:col-span-2 grid grid-cols-2 gap-6 lg:gap-8">
            {/* Bottom Row Item 2: Panoramic Sea View */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Panoramic sea view from hotel room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
                <h4 className="text-white text-2xl font-serif text-center">
                  Panoramic Sea View
                </h4>
              </div>
            </div>

            {/* Bottom Row Item 3: Gourmet Dining */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Gourmet seaside dining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
                <h4 className="text-white text-2xl font-serif text-center">
                  Gourmet Seaside Dining
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center border-t border-[#e5e5dc] pt-8">
          <a
            href="/our-story"
            className="group inline-flex items-center text-lg font-medium text-[#333D2E] hover:text-[#667250] transition-colors duration-300"
          >
            Explore Our Philosophy
            <FiChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
