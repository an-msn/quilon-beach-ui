import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaCalendarAlt,
  FaUserFriends,
  FaChevronDown,
  FaSearch,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import heroBg from "../assets/images/hero-bg.jpg";

const formatDate = (date) => {
  if (!date) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
};

// Booking Widget
const BookingWidget = () => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [checkInDate, setCheckInDate] = React.useState(null);
  const [checkOutDate, setCheckOutDate] = React.useState(null);
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const widgetRef = React.useRef(null);

  // Close calendar when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Calendar
  const generateMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();

    const days = Array.from({ length: startDayOfWeek }, () => null);
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const handleDateClick = (day) => {
    if (!day) return;
    if (!checkInDate || (checkInDate && checkOutDate)) {
      setCheckInDate(day);
      setCheckOutDate(null);
    } else if (day > checkInDate) {
      setCheckOutDate(day);
    } else {
      setCheckInDate(day);
      setCheckOutDate(null);
    }
  };

  const nextMonthDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    1
  );
  const month1Days = generateMonth(currentMonth);
  const month2Days = generateMonth(nextMonthDate);

  return (
    <div
      ref={widgetRef}
      className="relative z-20 mt-12 w-full max-w-3xl mx-auto px-4 md:px-0"
    >
      <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-2xl p-4 border border-slate-400/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="md:col-span-1">
            <label className="flex items-center space-x-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-200">
              <FaCalendarAlt />
              <span>Stay Dates</span>
            </label>
            <button
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              className="w-full text-left bg-white/10 p-3 rounded-lg border border-slate-400/30 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
            >
              {checkInDate && checkOutDate
                ? `${formatDate(checkInDate)} - ${formatDate(checkOutDate)}`
                : "Select Dates"}
            </button>
          </div>

          {/* Guests Selector */}
          <div className="relative md:col-span-1">
            <label className="flex items-center space-x-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-200">
              <FaUserFriends />
              <span>Guests</span>
            </label>
            <select className="w-full bg-white/10 p-3 rounded-lg border border-slate-400/30 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all">
              <option className="text-black bg-white">1 Adult</option>
              <option className="text-black bg-white">2 Adults</option>
              <option className="text-black bg-white">2 Adults, 1 Child</option>
            </select>
            <FaChevronDown className="text-slate-300 absolute right-4 bottom-4 h-4 w-4 pointer-events-none" />
          </div>

          {/* Search Button */}
          <button className="md:col-span-1 w-full bg-white/10 backdrop-blur-md text-white font-semibold py-3 rounded-lg border border-white/20 transition-all duration-300 shadow-md hover:bg-white/20 hover:border-white/30">
            <span className="flex items-center justify-center gap-x-2">
              <FaSearch className="h-4 w-4" />
              <span>Search</span>
            </span>
          </button>
        </div>
      </div>

      {/* Calendar Pop-up */}
      {isCalendarOpen && (
        <div className="absolute top-full mt-2 w-full max-w-3xl bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-slate-400/20">
          <div className="flex justify-between items-center mb-4 text-white">
            <button
              onClick={() =>
                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() - 1,
                    1
                  )
                )
              }
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <FaArrowLeft />
            </button>
            <div className="flex-grow grid grid-cols-2 text-center font-semibold">
              <span>
                {new Intl.DateTimeFormat("en-US", {
                  month: "long",
                  year: "numeric",
                }).format(currentMonth)}
              </span>
              <span>
                {new Intl.DateTimeFormat("en-US", {
                  month: "long",
                  year: "numeric",
                }).format(nextMonthDate)}
              </span>
            </div>
            <button
              onClick={() =>
                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() + 1,
                    1
                  )
                )
              }
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <FaArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-6">
            {/* Calendar for Month 1 */}
            <div className="grid grid-cols-7 gap-y-2 text-center text-slate-300 text-sm">
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <div key={d} className="font-semibold">
                  {d}
                </div>
              ))}
              {month1Days.map((day, i) => {
                const isSelected =
                  day &&
                  ((checkInDate && day.getTime() === checkInDate.getTime()) ||
                    (checkOutDate && day.getTime() === checkOutDate.getTime()));
                const isInRange =
                  day &&
                  checkInDate &&
                  checkOutDate &&
                  day > checkInDate &&
                  day < checkOutDate;
                const isPast =
                  day && day < new Date(new Date().setHours(0, 0, 0, 0));

                return (
                  <button
                    key={i}
                    disabled={isPast}
                    onClick={() => handleDateClick(day)}
                    className={`
                      p-2 rounded-full transition-colors duration-200
                      ${
                        isPast
                          ? "text-slate-500 cursor-not-allowed"
                          : "hover:bg-white/20"
                      }
                      ${isInRange ? "bg-amber-500/30 rounded-none" : ""}
                      ${
                        isSelected
                          ? "bg-amber-500 text-slate-900 font-bold"
                          : ""
                      }
                      ${
                        day && day.getTime() === checkInDate?.getTime()
                          ? "rounded-r-none"
                          : ""
                      }
                      ${
                        day && day.getTime() === checkOutDate?.getTime()
                          ? "rounded-l-none"
                          : ""
                      }
                    `}
                  >
                    {day ? day.getDate() : ""}
                  </button>
                );
              })}
            </div>

            {/* Calendar for Month 2 */}
            <div className="grid grid-cols-7 gap-y-2 text-center text-slate-300 text-sm">
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <div key={d} className="font-semibold">
                  {d}
                </div>
              ))}
              {month2Days.map((day, i) => {
                const isSelected =
                  day &&
                  ((checkInDate && day.getTime() === checkInDate.getTime()) ||
                    (checkOutDate && day.getTime() === checkOutDate.getTime()));
                const isInRange =
                  day &&
                  checkInDate &&
                  checkOutDate &&
                  day > checkInDate &&
                  day < checkOutDate;
                const isPast =
                  day && day < new Date(new Date().setHours(0, 0, 0, 0));

                return (
                  <button
                    key={i}
                    disabled={isPast}
                    onClick={() => handleDateClick(day)}
                    className={`
                      p-2 rounded-full transition-colors duration-200
                      ${
                        isPast
                          ? "text-slate-500 cursor-not-allowed"
                          : "hover:bg-white/20"
                      }
                      ${isInRange ? "bg-amber-500/30 rounded-none" : ""}
                      ${
                        isSelected
                          ? "bg-amber-500 text-slate-900 font-bold"
                          : ""
                      }
                      ${
                        day && day.getTime() === checkInDate?.getTime()
                          ? "rounded-r-none"
                          : ""
                      }
                      ${
                        day && day.getTime() === checkOutDate?.getTime()
                          ? "rounded-l-none"
                          : ""
                      }
                    `}
                  >
                    {day ? day.getDate() : ""}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Hero Component
const Hero = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headline
      gsap.fromTo(
        headlineRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Animate subtitle
      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.4,
          ease: "power2.out",
        }
      );

      // Animate scroll indicator
      gsap.fromTo(
        scrollIndicatorRef.current,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 1.2,
          ease: "power2.out",
        }
      );

      // Continuous animation for scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
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
      className="relative h-screen flex flex-col justify-end text-white pt-32 pb-28 px-4 md:px-0 overflow-hidden"
    >
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }} // Bg
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-white/10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full border border-white/10"></div>
      </div>

      {/* Animated Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center max-w-7xl mx-auto w-full">
        {/* Hero Headline */}
        <div className="overflow-hidden">
          <h1
            ref={headlineRef}
            className="font-custom-serif text-5xl md:text-7xl font-normal leading-tight tracking-tight text-center max-w-4xl opacity-0"
          >
            A Symphony of Sea.
          </h1>
        </div>

        <div className="overflow-hidden mt-4">
          <p
            ref={subtitleRef}
            className="text-xl text-slate-200 text-center max-w-2xl opacity-0"
          >
            Welcome to Kollam’s premier retreat, where luxury is composed
            against an endless ocean backdrop.
          </p>
        </div>
      </div>

      {/* Booking Widget */}
      <BookingWidget />

      {/* Animated Scroll Down Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 z-10 mx-auto w-full flex justify-center opacity-0"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-white/80 mb-2 tracking-widest"></span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
