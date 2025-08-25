import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaTripadvisor,
  FaYoutube,
} from "react-icons/fa";
import { FiHeart, FiAward } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#FAF9F5] text-[#333D2E] relative overflow-hidden">
      {/* Awards Section */}
      <div className="bg-[#F0EDE6] py-12 border-b border-[#E5E2D9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-center mb-8">
            <FiAward className="text-[#667250] mr-3" size={24} />
            <h3 className="font-serif text-2xl text-center text-[#333D2E]">
              RECOGNIZED EXCELLENCE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-0">
            {[
              {
                title: "Travel + Leisure World's Best",
                year: "2023",
                description: "Ranked among the world's best beachfront hotels",
              },
              {
                title: "Luxury Beachfront Hotel",
                year: "2023",
                description: "Award for exceptional coastal luxury experience",
              },
              {
                title: "Sustainable Tourism Award",
                year: "2023",
                description:
                  "Recognized for eco-friendly hospitality practices",
              },
              {
                title: "Culinary Excellence",
                year: "2023",
                description: "Award-winning dining experiences by the sea",
              },
            ].map((award, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#E5E2D9]"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-[#333D2E]">
                    {award.title}
                  </h4>
                  <span className="text-[#667250] text-sm font-medium">
                    {award.year}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="font-serif text-3xl mb-2 text-[#333D2E]">
                THE QUILON BEACH HOTEL
              </h2>
              <div className="w-20 h-0.5 bg-[#667250] mb-4"></div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Where the Arabian Sea meets unparalleled luxury. Experience the
                perfect blend of traditional Keralan hospitality and
                contemporary elegance on the serene shores of Kollam.
              </p>
            </div>

            <div className="flex space-x-5">
              {[
                {
                  icon: <FaInstagram className="h-5 w-5" />,
                  label: "Instagram",
                },
                {
                  icon: <FaTripadvisor className="h-5 w-5" />,
                  label: "TripAdvisor",
                },
                { icon: <FaYoutube className="h-5 w-5" />, label: "YouTube" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-600 hover:text-[#667250] transition-colors duration-300 flex flex-col items-center group"
                  aria-label={social.label}
                >
                  <div className="bg-white p-3 rounded-full group-hover:bg-[#667250] group-hover:text-white transition-all duration-300 shadow-sm">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Explore column */}
          <div>
            <h3 className="font-serif text-lg mb-6 relative inline-block text-[#333D2E]">
              EXPLORE
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#667250]"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "Luxury Suites",
                "Dining Experience",
                "Spa & Wellness",
                "Weddings & Events",
                "Gallery",
                "Special Offers",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#333D2E] transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-2 h-0.5 bg-[#667250] opacity-0 group-hover:opacity-100 mr-3 transition-opacity duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-serif text-lg mb-6 relative inline-block text-[#333D2E]">
              CONTACT
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#667250]"></span>
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-4 w-4 mr-3 mt-1 text-[#667250] flex-shrink-0" />
                <span className="text-sm">
                  Beach Road, Kollam, Kerala 691001, India
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-4 w-4 mr-3 text-[#667250] flex-shrink-0" />
                <span className="text-sm">+91 474 276 9999</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-4 w-4 mr-3 text-[#667250] flex-shrink-0" />
                <span className="text-sm">info@quilonbeachhotel.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter column */}
          <div>
            <h3 className="font-serif text-lg mb-6 relative inline-block text-[#333D2E]">
              STAY IN TOUCH
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#667250]"></span>
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe for exclusive offers and updates
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-white border border-[#E5E2D9] rounded-sm focus:outline-none focus:border-[#667250] text-[#333D2E] placeholder-gray-500 transition-colors duration-300 text-sm shadow-sm"
              />
              <button className="bg-[#667250] text-white py-3 px-6 rounded-sm hover:bg-[#4a5443] transition-colors duration-300 text-sm font-medium self-start">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E5E2D9] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0 flex items-center">
            © {new Date().getFullYear()} The Quilon Beach Hotel. Crafted with{" "}
            <FiHeart className="mx-1 text-[#667250]" /> in Kollam
          </p>
          <div className="flex space-x-6 text-xs text-gray-600">
            <a
              href="#"
              className="hover:text-[#333D2E] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[#333D2E] transition-colors duration-300"
            >
              Terms of Stay
            </a>
            <a
              href="#"
              className="hover:text-[#333D2E] transition-colors duration-300"
            >
              Careers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
