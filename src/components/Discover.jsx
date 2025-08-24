import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";
import lake from "../assets/images/Ashtamudi lake.jpg";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const DiscoverKollam = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  // const titleRef = useRef(null);

  // Add to cards ref array
  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  //  data
  const attractions = [
    {
      id: 1,
      name: "Ashtamudi Lake",
      description:
        "A serene backwater destination with palm-fringed shores and houseboat cruises.",
      image: lake,
      distance: "3.2 km",
      time: "15 min drive",
    },
    {
      id: 2,
      name: "Thangassery Lighthouse",
      description:
        "A historical lighthouse offering panoramic views of the Arabian Sea and surrounding areas.",
      image:
        "https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      distance: "5.7 km",
      time: "20 min drive",
    },
    {
      id: 3,
      name: "Kollam Beach",
      description:
        "A pristine beach with golden sands, perfect for evening walks and watching spectacular sunsets.",
      image:
        "https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      distance: "4.1 km",
      time: "18 min drive",
    },
    {
      id: 4,
      name: "Thenmala Ecotourism",
      description:
        "India's first planned ecotourism destination with lush forests, adventure activities, and a musical fountain.",
      image:
        "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      distance: "66 km",
      time: "1.5 hour drive",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
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

      // Animate cards with stagger effect
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".attractions-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-5 lg:py-8 overflow-hidden bg-[#F5F3ED]"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="headline-container text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="overflow-hidden pb-2">
            <h2 className="reveal-text font-custom-serif text-5xl md:text-7xl text-[#333D2E] leading-tight">
              Discover a
            </h2>
          </div>
          <div className="overflow-hidden pb-2">
            <h2 className="reveal-text font-custom-serif text-5xl md:text-7xl text-[#333D2E] leading-tight">
              World Beyond.
            </h2>
          </div>
          <div className="overflow-hidden mt-4">
            <p className="reveal-text text-lg md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our privileged location places you within easy reach of Kollam's
              most captivating attractions, where natural beauty and cultural
              heritage create unforgettable experiences.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="attractions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attractions.map((attraction, index) => (
            <div
              key={attraction.id}
              ref={addToCardsRef}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6">
                <h3 className="font-custom-serif text-xl text-[#333D2E] mb-3 group-hover:text-[#667250] transition-colors duration-300">
                  {attraction.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {attraction.description}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <FiMapPin className="mr-1 text-[#667250]" />
                    <span>{attraction.distance}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiClock className="mr-1 text-[#667250]" />
                    <span>{attraction.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  Button */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="group inline-flex items-center text-lg font-semibold text-[#333D2E] hover:text-[#667250] transition-colors duration-300"
          >
            Explore All Attractions
            <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiscoverKollam;
