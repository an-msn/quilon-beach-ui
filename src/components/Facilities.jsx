import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiChevronRight } from "react-icons/fi";
import { FaSwimmingPool, FaSpa, FaUtensils, FaCocktail } from "react-icons/fa";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Facilities = () => {
  const sectionRef = useRef(null);
  const headlineRefs = useRef([]);
  const featureCardRefs = useRef([]);
  const gridRef = useRef(null);

  const facilities = [
    {
      title: "Infinity Pool",
      description:
        "Float into tranquility with a breathtaking view where the pool's edge meets the ocean's horizon.",
      icon: <FaSwimmingPool size={30} />,
    },
    {
      title: "Seaside Spa",
      description:
        "Indulge in a world of relaxation with ocean-inspired treatments and the soothing sound of the waves.",
      icon: <FaSpa size={30} />,
    },
    {
      title: "Gourmet Dining",
      description:
        "Savor the finest coastal cuisine with fresh, local ingredients and panoramic sea views.",
      icon: <FaUtensils size={30} />,
    },
    {
      title: "Beachside Bar",
      description:
        "Enjoy expertly crafted cocktails and refreshments with your feet in the sand and a sunset view.",
      icon: <FaCocktail size={30} />,
    },
  ];

  // Add to headline refs array
  const addToHeadlineRefs = (el) => {
    if (el && !headlineRefs.current.includes(el)) {
      headlineRefs.current.push(el);
    }
  };

  // Add to feature card refs array
  const addToFeatureCardRefs = (el) => {
    if (el && !featureCardRefs.current.includes(el)) {
      featureCardRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background pattern animation
      gsap.to(".luxury-pattern", {
        rotation: 1,
        opacity: 0.03,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Animate Headline & Intro Text with proper sequencing
      headlineRefs.current.forEach((headline, index) => {
        gsap.fromTo(
          headline,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: headline,
              start: "top 90%",
              end: "bottom 60%",
              toggleActions: "play none reverse none",
            },
          }
        );
      });

      // Animate the features/cards with individual triggers
      featureCardRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 60%",
              toggleActions: "play none reverse none",
            },
          }
        );

        // Add hover animations
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });

      // Continuous subtle animation for the grid
      gsap.to(gridRef.current, {
        y: -5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden bg-[#F5F3ED]"
    >
      {/* Luxury background pattern */}
      <div className="luxury-pattern absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgMTBsNjAgNjBMNjAgMTMwTDAgNzBaTTE0MCA3MGw2MDY2MEwxNDAgMTkwTDEwMCAxMzBaIiBmaWxsPSIjMzMzIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="headline-container text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="overflow-hidden pb-2">
            <h2
              ref={addToHeadlineRefs}
              className="font-serif text-5xl md:text-7xl text-[#333D2E] leading-tight"
            >
              A World of
            </h2>
          </div>
          <div className="overflow-hidden pb-2">
            <h2
              ref={addToHeadlineRefs}
              className="font-serif text-5xl md:text-7xl text-[#333D2E] leading-tight"
            >
              Coastal Pleasures.
            </h2>
          </div>
          <div className="overflow-hidden mt-4">
            <p
              ref={addToHeadlineRefs}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              Our curated amenities are designed to immerse you in a state of
              complete relaxation and luxury, steps from the sea.
            </p>
          </div>
        </div>

        <div
          ref={gridRef}
          className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0"
        >
          {facilities.map((facility, index) => (
            <div
              key={index}
              ref={addToFeatureCardRefs}
              className="feature-card flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="text-[#667250] mb-4 transition-transform duration-300 group-hover:scale-110">
                {facility.icon}
              </div>
              <h3 className="font-semibold text-xl md:text-2xl text-[#333D2E] mb-2 group-hover:text-[#A39788] transition-colors duration-300">
                {facility.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 px-4 md:px-0">
          <button className="group inline-flex items-center bg-[#A39788] text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-[#8C8275] transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl">
            <span className="relative z-10 text-sm md:text-base">
              Explore All Facilities
            </span>
            <FiChevronRight className="ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
