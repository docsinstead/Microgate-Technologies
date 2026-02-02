// src/components/Footer.tsx
import React, { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "../animation/ScrollAnimation";
import microgateLogo from "/microgate-logo.jpeg";

const Footersection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const expertise = [
    { name: "IT Consulting", path: "/it-consulting" },
    { name: "IT Outsourcing", path: "/it-outsourcing" },
    { name: "Testing & QA", path: "/testing-qa" },
    { name: "Mortgage Solutions", path: "/mortgage-solutions" },
    { name: "Power Apps", path: "/power-apps" },
    { name: "Cloud Solutions", path: "/cloud-solutions" },
    { name: "BI & Visualization", path: "/bi-visualization" },
    { name: "Microsoft Technologies", path: "/microsoft-technologies" },
    { name: "Oracle", path: "/oracle" },
    { name: "SAP", path: "/sap" },
    { name: "Block Chain", path: "/block-chain" },
    { name: "Salesforce", path: "/salesforce" },
    { name: "Middleware", path: "/middleware" },
    { name: "Application Development", path: "/application-development" },
    { name: "Embedded Systems", path: "/embedded-systems" },
    { name: "Networking", path: "/networking" },
    { name: "VLSI Design", path: "/vlsi-design" },
    { name: "Design Verification", path: "/design-verification" }
  ];

  // Handle expertise click
  const handleExpertiseClick = (path: string) => {
    navigate(path);
  };

  // Handle Know More click
  const handleKnowMoreClick = () => {
    navigate("/company");
  };

  return (
    <footer className="bg-[#0B1A2A] text-gray-300">
      {/* Top Section */}
      <ScrollAnimation>
        <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-900">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Microgate Technologies Private Limited</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Microgate Technologies empowers organizations through innovative digital
              solutions, driving growth, efficiency, and sustainability in an
              ever-evolving business landscape.
            </p>
          </div>

          {/* Column 2: Important Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 text-left">
              Important Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-gray-400 text-sm text-left">
              <li><button onClick={() => navigate("/")} className="hover:text-white cursor-pointer">Home</button></li>
              <li><button onClick={() => navigate("/company")} className="hover:text-white cursor-pointer">About Us</button></li>
              <li><button onClick={() => navigate("/bi-visualization")} className="hover:text-white cursor-pointer">Solutions</button></li>
              <li><button onClick={() => navigate("/technology")} className="hover:text-white cursor-pointer">Industries</button></li>
              <li><button onClick={() => navigate("/microsoft-technologies")} className="hover:text-white cursor-pointer">Technologies</button></li>
              <li><button onClick={() => navigate("/networking")} className="hover:text-white cursor-pointer">Core Technology</button></li>
              <li><button onClick={() => navigate("/why-us")} className="hover:text-white cursor-pointer">Why Us</button></li>
              <li><button onClick={() => navigate("/contact-us")} className="hover:text-white cursor-pointer">Contact Us</button></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="border border-dashed border-blue-400 rounded-xl p-5">
            <h4 className="text-xl font-semibold text-white mb-4 text-left">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start gap-3 text-left">
                <FaMapMarkerAlt className="text-blue-400 text-lg mt-1" />
                <div>
                  <p>Microgate Technologies,</p>
                  <p>MIG: 648, KPHB Phase 2</p>
                  <p>Kukatpally, Hyderabad-72.</p>
                  <button 
                    onClick={() => window.open("https://maps.google.com/?q=Microgate+Technologies+KPHB+Phase+2+Hyderabad", "_blank")}
                    className="text-blue-300 hover:text-white text-xs mt-1"
                  >
                    Open in Maps →
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 text-lg" />
                <button 
                  onClick={() => window.location.href = "mailto:info@microgatetechnologies.com"}
                  className="hover:text-white cursor-pointer"
                >
                  info@microgatetechnologies.com
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400 text-lg" />
                <div className="space-y-1">
                  <button 
                    onClick={() => window.location.href = "tel:+911234567890"}
                    className="hover:text-white cursor-pointer block"
                  >
                    +91 1234 567890
                  </button>
                  <button 
                    onClick={() => window.open("https://wa.me/911234567890", "_blank")}
                    className="text-green-400 hover:text-green-300 text-xs"
                  >
                    WhatsApp: +91 1234 567890
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Areas of Expertise */}
      <div className="max-w-7xl mx-auto px-8 py-8 border-b border-gray-700 -mt-16">
        <div className="flex items-center gap-4 mb-4">
          <h4 className="text-xl font-semibold text-white whitespace-nowrap">
            Areas of Expertise
          </h4>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-gray-400 text-sm text-left">
          {(showMore ? expertise : expertise.slice(0, 9)).map((item, i) => (
            <li key={i} className="list-disc list-inside">
              <button 
                onClick={() => handleExpertiseClick(item.path)}
                className="hover:text-white cursor-pointer text-left"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-3 text-blue-300 hover:text-white text-sm"
        >
          {showMore ? "Show Less ↑" : "Show More ↓"}
        </button>
      </div>

      {/* Bottom Section with Logo beside Statement */}
      <div className="max-w-full mx-auto px-6 py-4 border-b border-gray-700">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={microgateLogo}
            alt="Innovic Solutions Logo"
            className="w-40 h-auto md:mt-1"
          />
          <p className="text-gray-400 text-sm md:text-2xlg leading-relaxed max-w-5xl text-left">
            Microgate Technologies is a premier IT services and technology solutions provider
             specializing in digital transformation, enterprise software development, and cloud 
             computing. We partner with businesses worldwide to deliver innovative solutions that 
             drive growth, enhance efficiency, and create sustainable competitive advantages in today's 
             rapidly evolving digital landscape.{" "}
            <button
              onClick={handleKnowMoreClick}
              className="text-blue-300 hover:text-white font-semibold cursor-pointer"
            >
              Know More →
            </button>
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#081524] py-2 px-6 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left */}
          <div className="text-xs md:text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Microgate Technologies Private Limited. All Rights Reserved.
          </div>

          {/* Middle */}
          <div className="flex flex-wrap justify-center space-x-2 text-xs md:text-sm text-gray-400">
            <button onClick={() => navigate("/privacy-policy")} className="hover:text-gray-200 cursor-pointer">Privacy Policy</button>
            <span>|</span>
            <button onClick={() => navigate("/terms")} className="hover:text-gray-200 cursor-pointer">Terms of Use</button>
            <span>|</span>
            <button onClick={() => navigate("/cookie-policy")} className="hover:text-gray-200 cursor-pointer">Cookie Policy</button>
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-4">
            <button 
              onClick={() => window.open("https://linkedin.com/company/microgate-technologies", "_blank")}
              className="hover:text-white"
            >
              <FaLinkedin className="text-blue-400 hover:text-white w-6 md:w-8 h-auto" />
            </button>
            <button 
              onClick={() => window.open("https://twitter.com/microgate_tech", "_blank")}
              className="hover:text-white"
            >
              <FaTwitter className="text-blue-400 hover:text-white w-6 md:w-8 h-auto" />
            </button>
            <button 
              onClick={() => window.open("https://facebook.com/microgatetechnologies", "_blank")}
              className="hover:text-white"
            >
              <FaFacebook className="text-blue-400 hover:text-white w-6 md:w-8 h-auto" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footersection;