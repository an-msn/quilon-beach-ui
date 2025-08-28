import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import introBg from "../assets/images/introBg.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const headlineRefs = useRef([]);
  const subtitleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const textContainerRef = useRef(null);

  const addToHeadlineRefs = (el) => {
    if (el && !headlineRefs.current.includes(el)) {
      headlineRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text entrance animation
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.5,
      });

      headlineRefs.current.forEach((line, i) => {
        tl.fromTo(
          line,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1.2 },
          i === 0 ? 0 : "-=0.8"
        );
      });

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      );

      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current, {
        y: 8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Color transition on scroll
      gsap.to(textContainerRef.current, {
        color: "#333d2e", // Target color
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });

      // Individual letter animation on scroll
      const textElements = [...headlineRefs.current, subtitleRef.current];

      textElements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            color: "#a1a99c", // Lighter version of the base color
          },
          {
            color: "#333d2e", // Original color
            ease: "power1.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex flex-col justify-end items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={introBg}
          alt="Lush tropical seashore view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      <div
        ref={textContainerRef}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center pb-32"
        style={{ color: "#a1a99c" }} // Initial lighter color
      >
        <h1 className="font-custom-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
          <div className="overflow-hidden">
            <div
              ref={(el) => addToHeadlineRefs(el)}
              className="line-reveal-inner"
            >
              On the Shores
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              ref={(el) => addToHeadlineRefs(el)}
              className="line-reveal-inner"
            >
              of the Arabian Sea
            </div>
          </div>
        </h1>

        <div className="overflow-hidden">
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Where tranquil waters meet timeless grace
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <div
            className="w-5 h-8 rounded-full flex justify-center p-1 mb-2"
            style={{ border: "1px solid #333d2e" }}
          >
            <div
              className="w-0.5 h-2 rounded-full"
              style={{ backgroundColor: "#333d2e" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
