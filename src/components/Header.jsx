import React, { useState, useEffect, useRef } from "react";
import { HiMenuAlt3, HiX, HiOutlinePhotograph } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      animateMenuIn();
    } else {
      animateMenuOut();
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const animateMenuIn = () => {
    const tl = gsap.timeline();

    // Animate menu container
    tl.fromTo(
      menuRef.current,
      { x: "-100%" },
      { x: 0, duration: 0.7, ease: "power3.out" }
    );

    // Animate left panel
    tl.fromTo(
      leftPanelRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.5 },
      "-=0.3"
    );

    // Animate menu items with stagger
    tl.fromTo(
      menuItemsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "back.out(1.2)",
      },
      "-=0.2"
    );
  };

  const animateMenuOut = () => {
    const tl = gsap.timeline();

    // Animate menu items out
    tl.to(menuItemsRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 0.3,
    });

    // Animate left panel out
    tl.to(leftPanelRef.current, { opacity: 0, x: -30, duration: 0.4 }, "-=0.2");

    // Animate menu container out
    tl.to(
      menuRef.current,
      { x: "-100%", duration: 0.6, ease: "power3.in" },
      "-=0.2"
    );
  };

  const menuLinks = [
    { title: "Rooms & Suites", href: "#" },
    { title: "Dinning Options", href: "#" },
    { title: "Wellness", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Book Now", href: "#" },
    { title: "Discover Kollam", href: "#" },
  ];

  const topRowLinks = menuLinks.slice(0, 4);
  const bottomRowLinks = menuLinks.slice(4, 7);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2 bg-slate-900/90 backdrop-blur-xl shadow-2xl"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={isMenuOpen ? handleCloseMenu : handleOpenMenu}
                className="transition-transform duration-300 hover:scale-110"
              >
                {isMenuOpen ? (
                  <HiX className="h-7 w-7 text-white" />
                ) : (
                  <HiMenuAlt3 className="h-7 w-7 text-white" />
                )}
              </button>
              <a href="#" className="flex flex-col leading-tight text-white">
                <span className="font-semibold tracking-tight">The Quilon</span>
                <span className="text-xs tracking-widest font-light">
                  BEACH HOTEL
                </span>
              </a>
            </div>

            <div>
              <a
                href="/booking"
                className="bg-white/10 backdrop-blur-md text-white font-medium py-2 px-6 rounded-full border border-white/20 transition-all duration-500 shadow-md hover:bg-white hover:text-slate-900 hover:shadow-lg"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        className="fixed inset-0 z-40 transform -translate-x-full"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1550538339-0824ef3a3e77?q=80&w=2574&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl"></div>

        <div className="relative w-full h-full max-w-screen-2xl mx-auto flex flex-col md:flex-row">
          <div
            ref={leftPanelRef}
            className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-end p-6 md:p-8 text-white opacity-0"
          >
            <a
              href="/gallery"
              className="group flex flex-col items-center mb-8"
              onClick={handleCloseMenu}
            >
              <div className="flex items-center justify-center h-16 w-16 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm transition-all duration-500 group-hover:bg-white group-hover:scale-110">
                <HiOutlinePhotograph className="h-7 w-7 text-white transition-colors duration-500 group-hover:text-cyan-500" />
              </div>
              <span className="mt-2 text-sm font-medium tracking-wider">
                Gallery
              </span>
            </a>

            <a
              href="#"
              className="flex flex-col leading-tight text-center md:text-left"
            >
              <span className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
                The Quilon
              </span>
              <span className="text-base md:text-lg tracking-widest mt-1">
                BEACH HOTEL
              </span>
            </a>
          </div>

          <div className="w-full md:w-2/3 flex flex-col justify-center items-center p-4">
            <div className="w-full max-w-4xl pt-16 md:pt-0">
              <div className="grid grid-cols-4 gap-3 md:gap-4 mb-3 md:mb-4">
                {topRowLinks.map((link, index) => (
                  <a
                    key={link.title}
                    href={link.href}
                    ref={(el) => (menuItemsRef.current[index] = el)}
                    onClick={handleCloseMenu}
                    className="group relative flex items-center justify-center p-3 text-center h-28 md:h-32 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm md:text-base font-medium transition-all duration-500 ease-out hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-xl opacity-0"
                  >
                    <span className="px-1">{link.title}</span>
                    <div className="absolute top-2 right-2 p-1.5 bg-black/20 rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:-rotate-45 transition-all duration-500">
                      <FaArrowRight size={12} />
                    </div>
                  </a>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {bottomRowLinks.map((link, index) => (
                  <a
                    key={link.title}
                    href={link.href}
                    ref={(el) => (menuItemsRef.current[index + 4] = el)}
                    onClick={handleCloseMenu}
                    className="group relative flex items-center justify-center p-3 text-center h-28 md:h-32 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm md:text-base font-medium transition-all duration-500 ease-out hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-xl opacity-0"
                  >
                    <span className="px-1">{link.title}</span>
                    <div className="absolute top-2 right-2 p-1.5 bg-black/20 rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:-rotate-45 transition-all duration-500">
                      <FaArrowRight size={12} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
