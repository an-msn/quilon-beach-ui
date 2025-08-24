import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiWind,
  FiSun,
  FiCoffee,
  FiAward,
  FiChevronRight,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import hotel_img2 from "../assets/images/about2.jpg";
import hotel_img3 from "../assets/images/about3.jpg";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for the component
  const features = [
    { icon: <FiWind size={22} />, text: "Panoramic Sea Views" },
    { icon: <FiSun size={22} />, text: "Private Beach Access" },
    { icon: <FiCoffee size={22} />, text: "Gourmet Seaside Dining" },
    { icon: <FiAward size={22} />, text: "Award-Winning Spa" },
  ];

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Elegant hotel suite with ocean view",
    },
    {
      src: hotel_img2,
      alt: "Exterior",
    },
    {
      src: hotel_img3,
      alt: "Exterior",
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

  const nextSlideIndex =
    currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1;

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

      // Animate the Features Section
      gsap.from(".feature-content", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
        },
      });

      // Animate the image slider container
      gsap.from(".image-slider-container", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".image-slider-container",
          start: "top 85%",
          toggleActions: "play none none reverse",
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="headline-container text-center max-w-4xl mx-auto mb-16">
          <div className="overflow-hidden pb-2">
            <h2 className="reveal-text font-custom-serif text-5xl md:text-6xl text-[#333D2E] leading-tight">
              Where the Horizon
            </h2>
          </div>
          <div className="overflow-hidden pb-2">
            <h2 className="reveal-text font-custom-serif text-5xl md:text-6xl text-[#333D2E] leading-tight">
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

        <div className="image-slider-container flex justify-center mb-16 lg:mb-20">
          <div className="relative w-full max-w-4xl">
            <div className="absolute -top-4 right-4 z-30 bg-[#333D2E] text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
              <span className="font-bold">{currentSlide + 1}</span>
              <span className="mx-1">/</span>
              <span className="text-gray-300">{galleryImages.length}</span>
            </div>

            {/* Main Image */}
            <div className="relative h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute bottom-4 right-4 z-20 flex space-x-3">
                <button
                  onClick={prevSlide}
                  className="bg-white/90 hover:bg-white text-[#333D2E] p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Previous slide"
                >
                  <FiArrowLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-white/90 hover:bg-white text-[#333D2E] p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Next slide"
                >
                  <FiArrowRight size={20} />
                </button>
              </div>

              {/* Main Slide */}
              <div className="absolute inset-0">
                <img
                  src={galleryImages[currentSlide].src}
                  alt={galleryImages[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Next Image Preview */}
              <div className="absolute bottom-4 left-4 z-20 w-16 h-16 rounded-lg overflow-hidden shadow-lg border-2 border-white">
                <img
                  src={galleryImages[nextSlideIndex].src}
                  alt={galleryImages[nextSlideIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="features-section w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Commitment Text */}
            <div className="feature-content">
              <h3 className="font-custom-serif text-3xl md:text-4xl text-[#333D2E] mb-6">
                A Commitment to Unrivaled Comfort
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our philosophy is simple: to provide an escape that indulges the
                senses and soothes the soul. From personalized service to
                meticulously appointed spaces, we dedicate ourselves to creating
                moments of unparalleled peace and pleasure for every guest.
              </p>
            </div>

            {/* Right Column - Features and CTA */}
            <div className="feature-content flex flex-col h-full">
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-[#F0EDE5] p-2 rounded-full">
                      <div className="text-[#667250]">{feature.icon}</div>
                    </div>
                    <span className="text-lg font-medium text-[#4A5443] pt-1">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto"></div>

              <div className="pt-8 border-t border-[#e5e5dc]">
                <a
                  href="/our-story"
                  className="group inline-flex items-center text-lg font-medium text-[#333D2E] hover:text-[#667250] transition-colors duration-300"
                >
                  Explore Our Philosophy
                  <FiChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
