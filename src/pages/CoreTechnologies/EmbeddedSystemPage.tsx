import React from 'react';
import {
  FaCheckCircle,
  FaMicrochip,
  FaNetworkWired,
  FaCogs,
  FaShieldAlt,
  FaLaptopCode,
  FaClipboardCheck,
  FaCar,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EmbeddedSystemsPage: React.FC = () => {
  const navigate = useNavigate();

  // Core Technologies Data - Removed Embedded Systems from portfolio
  const coreTechnologies = [
    {
      icon: <FaNetworkWired className="text-2xl text-[#0A6B7E]" />,
      title: "Networking",
      description: "Advanced networking solutions for seamless connectivity and communication",
      path: "/networking"
    },
    {
      icon: <FaMicrochip className="text-2xl text-[#36B5A0]" />,
      title: "VLSI Design",
      description: "Very Large Scale Integration design for advanced semiconductor solutions",
      path: "/vlsi-design"
    },
    {
      icon: <FaClipboardCheck className="text-2xl text-[#0A6B7E]" />,
      title: "Design Verification",
      description: "Comprehensive verification solutions for flawless hardware design implementation",
      path: "/design-verification"
    }
    // Embedded Systems is the current page, so it's removed from portfolio
  ];

  // Embedded Systems Applications
  const embeddedApplications = [
    "Automotive Systems",
    "Consumer Electronics",
    "Aerospace & Defense",
    "Medical Devices",
    "Industrial Automation"
  ];

  // Important Points for Embedded Systems
  const importantPoints = [
    {
      icon: <FaMicrochip className="text-xl text-[#36B5A0]" />,
      title: "Device-Independent Control",
      description: "Specialized solutions for embedded interfaces with hardware-software integration"
    },
    {
      icon: <FaCar className="text-xl text-[#0A6B7E]" />,
      title: "Wide Industry Applications",
      description: "From automobiles to consumer electronics and aerospace - vast scope across industries"
    },
    {
      icon: <FaCogs className="text-xl text-[#36B5A0]" />,
      title: "Processor Architecture",
      description: "Expertise in both microprocessors and microcontrollers with various CPU architectures"
    },
    {
      icon: <FaLaptopCode className="text-xl text-[#0A6B7E]" />,
      title: "Single Board Computers",
      description: "Enabling next-generation industrial applications with embedded SBC solutions"
    }
  ];

  // Embedded Technologies
  const embeddedTechnologies = [
    {
      icon: <FaMicrochip className="text-2xl text-[#0A6B7E]" />,
      title: "Embedded Processors",
      description: "Microprocessors and microcontrollers with on-chip peripherals for reduced power and cost"
    },
    {
      icon: <FaNetworkWired className="text-2xl text-[#36B5A0]" />,
      title: "Protocols & System Software",
      description: "Protocol stack implementations with hardware-assisted packet processing"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-[#0A6B7E]" />,
      title: "Low Power Solutions",
      description: "Expertise in low-power design with comprehensive knowledge and experience"
    }
  ];

  // Function to handle technology click
  const handleTechnologyClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
        
      {/* Hero Section with Video Background */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/coretechnology-bghero.mp4" type="video/mp4" />
            {/* Fallback background if video doesn't load */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, #36B5A0 0%, #0A6B7E 50%, #07284C 100%)'
            }}></div>
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(7, 40, 76, 0.7) 0%, rgba(10, 107, 126, 0.5) 50%, rgba(54, 181, 160, 0.3) 100%)'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-left w-full">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              Device-Independent Control for Embedded Interfaces
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8">
              Advanced Embedded Systems Solutions for Modern Technology Applications
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto">
            {/* Title added */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
              <span className="text-[#0A6B7E]">Embedded</span> Systems
            </h2>
            
            {/* Single detailed paragraph - 4-5 lines */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Our Microgate Technologies</span> specializes in embedded systems that integrate computer hardware with software as the most significant component, creating dedicated computer-based systems that may be independent or part of larger systems. Considering the vast scope of this field ranging from automotive to consumer electronics and aerospace, the demand for this technology continues to grow exponentially. As electronic devices become more pervasive in everyday life—from mobile devices and home appliances to medical devices like insulin pumps—our expertise in both microprocessors and microcontrollers enables us to deliver solutions that reduce power consumption, size, and cost while supporting various CPU architectures from Von Neumann to Harvard architectures.
            </p>
          </div>

          {/* Core Technologies Section - Showing 3 technologies (excluding Embedded Systems) */}
          <div className="py-3 mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-[#36B5A0]">Core Technologies</span>
            </h2>
            
            {/* Grid Container - Showing only 3 technologies */}
            <div className="space-y-4">
              {/* Single Row for 3 technologies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {/* Technology 1 */}
                <div 
                  onClick={() => handleTechnologyClick(coreTechnologies[0].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group relative"
                >
                  <div className="space-y-2">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-sm md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {coreTechnologies[0].title}
                        </h3>
                      </div>
                      {/* Upward-facing arrow with border radius - Reduced size for mobile */}
                      <div className="group-hover:bg-[#36B5A0]/10 transition-colors duration-300">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-6 h-6 md:h-8 md:w-8 text-[#36B5A0] transform rotate-45 group-hover:rotate-90 transition-transform duration-300" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-gray-600 text-xs md:text-sm">
                        {coreTechnologies[0].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Technology 2 */}
                <div 
                  onClick={() => handleTechnologyClick(coreTechnologies[1].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-2">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-sm md:text-lg font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {coreTechnologies[1].title}
                        </h3>
                      </div>
                      <div className="group-hover:bg-[#36B5A0]/10 transition-colors duration-300">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-6 h-6 md:h-8 md:w-8 text-[#36B5A0] transform rotate-45 group-hover:rotate-90 transition-transform duration-300" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-gray-600 text-xs md:text-sm">
                        {coreTechnologies[1].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Technology 3 */}
                <div 
                  onClick={() => handleTechnologyClick(coreTechnologies[2].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-2">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-sm md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {coreTechnologies[2].title}
                        </h3>
                      </div>
                      <div className="group-hover:bg-[#36B5A0]/10 transition-colors duration-300">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-6 h-6 md:h-8 md:w-8 text-[#36B5A0] transform rotate-45 group-hover:rotate-90 transition-transform duration-300" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-gray-600 text-xs md:text-sm">
                        {coreTechnologies[2].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Systems Applications Section */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-4 py-5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-10">
              {/* Left side: Title, paragraph, and applications */}
              <div className="lg:w-1/2">
                <div className="">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    <span className="text-[#0A6B7E]">Embedded Systems</span> Applications
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-3">
                    Our embedded systems solutions span across various industries, providing dedicated computer-based systems with integrated hardware and software components for specialized applications ranging from automotive to medical devices.
                  </p>
                </div>
                
                {/* Embedded Applications */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
                  {embeddedApplications.map((item, index) => (
                    <div key={index} className="flex items-start text-left bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <FaCheckCircle className="text-[#36B5A0] mr-3 mt-1 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right side: Image */}
              <div className="lg:w-1/2">
                <div className="p-4 h-full flex items-center justify-center">
                  {/* Actual image from public folder */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src="/coretechnology-img.png" 
                      alt="Embedded Systems Solutions"
                      className="w-full h-full object-cover rounded-xl md:mt-12"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="absolute inset-0 bg-gradient-to-br from-[#36B5A0]/20 to-[#0A6B7E]/20 flex items-center justify-center">
                            <div class="text-center p-4">
                              <svg class="w-16 h-16 text-[#0A6B7E] mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"/>
                              </svg>
                              <p class="text-[#07284C] font-semibold">Embedded Systems Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Hardware-software integration for dedicated applications</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Technologies Section */}
            <div className="mt-12">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Our <span className="text-[#0A6B7E]">Embedded</span> Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {embeddedTechnologies.map((tech, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:border-[#36B5A0] transition-all duration-300">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="p-3 bg-gray-50 rounded-lg mb-4">
                        {tech.icon}
                      </div>
                      <h5 className="text-xl font-semibold text-gray-800 mb-3">{tech.title}</h5>
                      <p className="text-gray-600 flex-1">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Points Section */}
          <div className="py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center mt-10">
              Key <span className="text-[#0A6B7E]">Features</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {importantPoints.map((point, index) => (
                <div key={index} className="bg-white p-6 hover:border hover:rounded-xl hover:border-[#36B5A0] transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col h-full">
                    <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3">{point.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 flex-1">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmbeddedSystemsPage;