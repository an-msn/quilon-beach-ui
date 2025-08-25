import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";
import Spa from "../assets/images/Spa.jpg";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Wellness = () => {
  const sectionRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const textContentRef = useRef(null);

  useEffect(() => {
    // Set up a GSAP context for proper cleanup
    const ctx = gsap.context(() => {
      // Animate the left image from left to center
      gsap.fromTo(
        leftImageRef.current,
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1.5,
          },
        }
      );

      // Animate the right image from right to center
      gsap.fromTo(
        rightImageRef.current,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1.5,
          },
        }
      );

      // Text content animation -scroll
      gsap.fromTo(
        textContentRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            end: "center center",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    // Cleanup function to revert animations
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#F5F3ED] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-12">
          {/* Left Image Column */}
          <div ref={leftImageRef} className="relative z-10">
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px]">
              <img
                src="https://images.pexels.com/photos/1559181/pexels-photo-1559181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Relaxing spa pool"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Text Column */}
          <div
            ref={textContentRef}
            className="text-center opacity-0 px-4 md:px-0"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[#333D2E] leading-tight mb-6">
              Relaxing <span className="italic">treatments</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-md mx-auto">
              Indulge in massages, sauna sessions, and beauty treatments, or
              simply relax on our sun terrace.
            </p>
            <a
              href="#"
              className="group inline-flex items-center text-lg font-semibold text-[#333D2E] hover:text-[#667250] transition-colors duration-300"
            >
              Explore Wellness
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Image Column */}
          <div ref={rightImageRef} className="relative z-10">
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px]">
              <img
                src={Spa}
                alt="Woman enjoying spa treatment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wellness;
