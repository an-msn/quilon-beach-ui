import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// --- Data for the new room list ---
const roomsData = [
  {
    id: 1,
    number: "01",
    title: "Classic Room",
    description: "Comfortable rooms with impressive views.",
    image:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    number: "02",
    title: "Superior Room",
    description:
      "Beautiful blue sea views are the centrepiece of every Superior room.",
    image:
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    number: "03",
    title: "Deluxe Room",
    description:
      "Beyond the trees, a mesmerising view of the Adriatic draws the eye in a Deluxe room.",
    image:
      "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    number: "04",
    title: "Family Room",
    description:
      "A balcony facing the sea or the lush parkland surrounding the hotel creates a calming atmosphere.",
    image:
      "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

// --- Existing RoomsIntro Component (with minor style enhancements) ---
const RoomsIntro = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const mainImageRef = useRef(null);
  const smallImage1Ref = useRef(null);
  const smallImage2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP animations (button animation removed)
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        mainImageRef.current,
        { opacity: 0, scale: 1.1, rotation: -2 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainImageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        smallImage1Ref.current,
        { opacity: 0, y: 50, rotation: -3 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: smallImage1Ref.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        smallImage2Ref.current,
        { opacity: 0, y: 50, rotation: 2 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: smallImage2Ref.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // Reduced bottom padding to tighten space
    <section
      ref={sectionRef}
      className="relative pt-16 pb-8 lg:pt-24 bg-[#F5F3ED]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1
              ref={titleRef}
              className="font-serif text-3xl md:text-6xl text-[#333D2E] mb-6"
            >
              Sweeping view of the Adriatic in your Room
            </h1>
            <p
              ref={subtitleRef}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Many rooms have balconies that beckon you to breathe in the pure
              Mediterranean air of the island. All rooms are air conditioned and
              feature an elegant ensuite bathroom with shower.
            </p>
            {/* "Explore Rooms" button removed */}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div
              ref={mainImageRef}
              className="col-span-2 h-64 rounded-xl overflow-hidden opacity-0 shadow-lg"
            >
              <img
                src="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Luxury room with sea view"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div
              ref={smallImage1Ref}
              className="h-48 rounded-xl overflow-hidden opacity-0 shadow-lg"
            >
              <img
                src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Room bathroom"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div
              ref={smallImage2Ref}
              className="h-48 rounded-xl overflow-hidden opacity-0 shadow-lg"
            >
              <img
                src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Room balcony"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- New RoomList Component ---
const RoomList = () => {
  const [hoveredRoomId, setHoveredRoomId] = useState(null);

  return (
    // Removed top padding to tighten space
    <section className="bg-[#F5F3ED] pt-16 pb-12 lg:pb-15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Container with rounded corners and overflow hidden */}
        <div className="border border-gray-300 rounded-3xl overflow-hidden mx-0 md:mx-4 lg:mx-8">
          {roomsData.map((room) => (
            <a
              key={room.id}
              href="#"
              // Separator border added to all but the last item
              className="group relative flex items-center w-full p-6 md:p-8 transition-colors duration-500 ease-in-out overflow-hidden border-b border-gray-300 last:border-b-0"
              onMouseEnter={() => setHoveredRoomId(room.id)}
              onMouseLeave={() => setHoveredRoomId(null)}
              style={{
                backgroundColor:
                  hoveredRoomId === room.id ? "#687161" : "transparent",
                color: hoveredRoomId === room.id ? "#F5F3ED" : "#333D2E",
              }}
            >
              {/* Hover Image */}
              <div
                className="absolute top-0 left-0 h-full transition-all duration-500 ease-in-out"
                style={{
                  width: hoveredRoomId === room.id ? "25%" : "0%",
                  opacity: hoveredRoomId === room.id ? 1 : 0,
                }}
              >
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div
                className="relative flex-grow flex justify-between items-center transition-transform duration-500 ease-in-out"
                style={{
                  transform:
                    hoveredRoomId === room.id
                      ? "translateX(calc(25% + 2rem))"
                      : "translateX(0)",
                }}
              >
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl">
                    {room.title}
                  </h3>
                  <p
                    className="mt-2 text-base max-w-md"
                    style={{
                      color: hoveredRoomId === room.id ? "#F5F3ED" : "#888",
                    }}
                  >
                    {room.description}
                  </p>
                </div>

                {/* Number / Arrow */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full transition-opacity duration-300 ease-in-out ${
                      hoveredRoomId === room.id ? "opacity-0" : "opacity-100"
                    }`}
                    style={{ backgroundColor: "#687161", color: "#F5F3ED" }}
                  >
                    <span className="font-semibold">{room.number}</span>
                  </div>
                  <div
                    className={`absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 transition-opacity duration-300 ease-in-out ${
                      hoveredRoomId === room.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <FaArrowRight className="text-white" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---
const RoomsPage = () => {
  return (
    <div className="overflow-x-hidden">
      <RoomsIntro />
      <RoomList />
    </div>
  );
};

export default RoomsPage;
