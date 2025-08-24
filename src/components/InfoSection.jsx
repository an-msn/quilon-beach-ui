import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import introBg from "../assets/images/introBg.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const bgImageRef = useRef(null);
  const headlineRefs = useRef([]);
  const subtitleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const addToHeadlineRefs = (el) => {
    if (el && !headlineRefs.current.includes(el)) {
      headlineRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgImageRef.current, {
        scale: 1.05,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

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

      gsap.to(scrollIndicatorRef.current, {
        y: 8,
        duration: 1.5,
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
      className="relative h-screen w-full flex flex-col justify-end items-center overflow-hidden"
    >
      {/* Background */}
      <div ref={bgImageRef} className="absolute inset-0 z-0">
        <img
          src={introBg}
          alt="Lush tropical seashore view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center pb-32">
        <h1
          className="font-custom-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6"
          style={{ color: "#333d2e" }}
        >
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
            style={{ color: "#333d2e" }}
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
