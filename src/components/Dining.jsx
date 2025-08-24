import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiAward, FiCoffee, FiStar, FiChevronRight } from "react-icons/fi";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Dining = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRefs = useRef([]);
  const featuresRef = useRef([]);
  const buttonRef = useRef(null);

  // Add to description refs array
  const addToDescriptionRefs = (el) => {
    if (el && !descriptionRefs.current.includes(el)) {
      descriptionRefs.current.push(el);
    }
  };

  // Add to features ref array
  const addToFeaturesRef = (el) => {
    if (el && !featuresRef.current.includes(el)) {
      featuresRef.current.push(el);
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

      // Timeline for sequenced animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none reverse none",
        },
      });

      // Subtitle animation
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        0.2
      );

      // Title animation
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        0.4
      );

      // Description paragraphs animation
      descriptionRefs.current.forEach((desc, i) => {
        tl.fromTo(
          desc,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          0.6 + i * 0.15
        );
      });

      // Image animation
      tl.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 1.05,
          rotation: -1,
          x: -20,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        0.3
      );

      // Features animation with stagger
      featuresRef.current.forEach((feature, i) => {
        tl.fromTo(
          feature,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          1.0 + i * 0.1
        );
      });

      // Button animation
      tl.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        1.4
      );

      // Continuous subtle animations
      gsap.to(imageRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Hover animations for features
      featuresRef.current.forEach((feature) => {
        feature.addEventListener("mouseenter", () => {
          gsap.to(feature, {
            y: -5,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        feature.addEventListener("mouseleave", () => {
          gsap.to(feature, {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 bg-[#F5F3ED] overflow-hidden"
    >
      {/* Luxury background pattern */}
      <div className="luxury-pattern absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgMTBsNjAgNjBMNjAgMTMwTDAgNzBaTTE0MCA3MGw2MCA2MEwxNDAgMTkwTDEwMCAxMzBaIiBmaWxsPSIjMzMzIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div ref={imageRef} className="opacity-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 hover:shadow-3xl">
              <div className="aspect-[4/5] md:aspect-[3/4]">
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Elegant dining experience"
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"></div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#A39788] opacity-20 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-[#A39788] opacity-15 rotate-45"></div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <div ref={subtitleRef} className="opacity-0">
              <span className="text-[#A39788] text-sm uppercase tracking-widest font-semibold">
                Culinary Excellence
              </span>
            </div>

            <div ref={titleRef} className="opacity-0 mt-2 mb-6">
              <h2 className="font-serif text-4xl md:text-5xl text-[#333D2E] leading-tight">
                Cuisine, Cocktails{" "}
                <span className="italic block">and Cellars</span>
              </h2>
            </div>

            <div className="mb-6">
              <p
                ref={addToDescriptionRefs}
                className="opacity-0 text-lg text-gray-600 leading-relaxed"
              >
                Meals at The Quilon Beach Hotel are unhurried affairs—rooted in
                Keralan tradition and guided by the season. Each dish is
                prepared with care, balancing rustic heartiness with elegant
                restraint.
              </p>
            </div>

            <div className="mb-8">
              <p
                ref={addToDescriptionRefs}
                className="opacity-0 text-lg text-gray-600 leading-relaxed"
              >
                In the evening, the fire is lit, the wood-paneled bar hums
                softly, and the cellar reveals its treasures. Our sommelier has
                curated a collection of fine wines, from local estates to
                storied international vintages. And should you prefer a
                cocktail, our barman knows you by name and the martini is always
                perfectly chilled.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-xl font-serif text-[#333D2E] mb-6">
                BAR AND DINING
              </h3>

              <div className="dining-features grid grid-cols-1 md:grid-cols-2 gap-6">
                <div ref={addToFeaturesRef} className="opacity-0 group">
                  <div className="flex items-start space-x-4 p-3 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
                    <div className="flex-shrink-0 text-[#A39788] mt-1 group-hover:scale-110 transition-transform duration-300">
                      <FiStar size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#333D2E] group-hover:text-[#A39788] transition-colors duration-300">
                        Seasonal Cuisine
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Locally sourced ingredients prepared with traditional
                        techniques
                      </p>
                    </div>
                  </div>
                </div>

                <div ref={addToFeaturesRef} className="opacity-0 group">
                  <div className="flex items-start space-x-4 p-3 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
                    <div className="flex-shrink-0 text-[#A39788] mt-1 group-hover:scale-110 transition-transform duration-300">
                      <FiAward size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#333D2E] group-hover:text-[#A39788] transition-colors duration-300">
                        Curated Wine Selection
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Over 300 fine wines from renowned vineyards worldwide
                      </p>
                    </div>
                  </div>
                </div>

                <div ref={addToFeaturesRef} className="opacity-0 group">
                  <div className="flex items-start space-x-4 p-3 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
                    <div className="flex-shrink-0 text-[#A39788] mt-1 group-hover:scale-110 transition-transform duration-300">
                      <FiCoffee size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#333D2E] group-hover:text-[#A39788] transition-colors duration-300">
                        Artisanal Cocktails
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Handcrafted beverages using premium spirits and fresh
                        ingredients
                      </p>
                    </div>
                  </div>
                </div>

                <div ref={addToFeaturesRef} className="opacity-0 group">
                  <div className="flex items-start space-x-4 p-3 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
                    <div className="flex-shrink-0 text-[#A39788] mt-1 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-5 h-5 border border-[#A39788] rounded-sm"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#333D2E] group-hover:text-[#A39788] transition-colors duration-300">
                        Oceanview Dining
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Panoramic views of the Arabian Sea from our elegant
                        restaurant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div ref={buttonRef} className="mt-10 opacity-0">
              <button className="group inline-flex items-center bg-[#A39788] text-white px-8 py-4 rounded-full hover:bg-[#8C8275] transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl">
                <span className="relative z-10">View Our Menus</span>
                <FiChevronRight className="ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
