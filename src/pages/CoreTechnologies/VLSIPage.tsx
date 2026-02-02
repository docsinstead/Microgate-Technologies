import React from 'react';
import { 
  FaCheckCircle,
  FaChartLine,
  FaClipboardCheck,
  FaCar,
  FaServer,
  FaMobile,
  FaCog
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const VLSIPage: React.FC = () => {
  const navigate = useNavigate();

  // Core Technologies Data - Removed VLSI from portfolio since it's the current page
  const coreTechnologies = [
    {
      icon: <FaCog className="text-2xl text-[#0A6B7E]" />,
      title: "Embedded Systems",
      description: "Advanced embedded solutions for automotive, consumer electronics, and aerospace applications",
      path: "/embedded-systems"
    },
    {
      icon: <FaServer className="text-2xl text-[#36B5A0]" />,
      title: "Networking",
      description: "Protocol stack implementations and system software solutions for modern networks",
      path: "/networking"
    },
    {
      icon: <FaClipboardCheck className="text-2xl text-[#0A6B7E]" />,
      title: "Design Verification",
      description: "Comprehensive verification solutions ensuring first-time silicon success",
      path: "/design-verification"
    }
    // VLSI Design is the current page, so it's removed from portfolio
  ];

  // VLSI Services
  const vlsiServices = [
    "Chip Design from Specifications to GDS Sign-off",
    "Process Nodes: 350nm to Advanced 7nm",
    "High Speed Interfaces (PCIe, DDR, SerDes, Ethernet)",
    "Pre-silicon Verification & FPGA Prototyping",
    "Post-silicon Validation & ATE Testing"
  ];

  // VLSI Domains
  const vlsiDomains = [
    {
      icon: <FaCar className="text-xl text-[#36B5A0]" />,
      title: "Automotive",
      description: "Chip solutions for automotive platforms with stringent reliability requirements"
    },
    {
      icon: <FaServer className="text-xl text-[#0A6B7E]" />,
      title: "Server Platforms",
      description: "High-performance computing solutions for server and data center applications"
    },
    {
      icon: <FaChartLine className="text-xl text-[#36B5A0]" />,
      title: "Graphics",
      description: "Advanced GPU and graphics processing solutions for gaming and visualization"
    },
    {
      icon: <FaMobile className="text-xl text-[#0A6B7E]" />,
      title: "Mobile Platforms",
      description: "Power-efficient chip designs for mobile and IoT applications"
    }
  ];

  // VLSI Expertise
  // const vlsiExpertise = [
  //   "DFT & DFD Microarchitecture",
  //   "Low Power Design & Management",
  //   "Data Converters & Power Management",
  //   "Foundation IP Development",
  //   "Bench Characterization & ATE Validation"
  // ];

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
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(7, 40, 76, 0.7) 0%, rgba(10, 107, 126, 0.5) 50%, rgba(54, 181, 160, 0.3) 100%)'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-left w-full">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              Driving Innovation in Chip Solutions
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8">
              Advanced VLSI Design Solutions for Next-Generation Electronics
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
              VLSI <span className="text-[#0A6B7E]">Design Engineering</span>
            </h2>
            
            {/* Single detailed paragraph - 4-5 lines */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Our Microgate Technologies</span> combines rich experience with an innovative mindset to deliver cutting-edge chip solutions across multiple verticals including Automotive, Server, Graphics, and Mobile platforms. Since inception, our VLSI capabilities have grown significantly, with expertise spanning process nodes from 350nm to the most advanced 7nm technologies. Our cohesive design team collaborates seamlessly with client's Embedded, Test, PCB, and Validation teams to provide comprehensive, relevant, and rewarding semiconductor solutions that drive technological advancement and market success.
            </p>
          </div>

          {/* Core Technologies Portfolio - Showing 3 technologies */}
          <div className="py-3 mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Core <span className="text-[#36B5A0]">Technologies</span>
            </h2>
            
            {/* 1 Row Grid Container - Showing only 3 technologies (without Networking) */}
            <div className="space-y-4">
              {/* Row 1 */}
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
                  <div className="space-y-3">
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
                      <p className="text-xs md:text-sm text-gray-600">
                        {coreTechnologies[1].description}
                      </p>
                    </div>
                  </div>
                </div>
              
             {/* Technology 3 - Centered in the row */}
                <div 
                    onClick={() => handleTechnologyClick(coreTechnologies[2].path)}
                    className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                  >
                    <div className="space-y-3">
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
                            className="h-6 w-6 md:h-8 md:w-8 text-[#36B5A0] transform rotate-45 group-hover:rotate-90 transition-transform duration-300" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Second Row: Description */}
                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-xs md:text-sm text-gray-600">
                          {coreTechnologies[2].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {/* VLSI Services Section */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-4 py-5 ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-10">
              {/* Left side: Title, paragraph, and services */}
              <div className="lg:w-1/2">
                <div className="">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Our <span className="text-[#0A6B7E]">VLSI Design</span> Services
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-3">
                    Comprehensive semiconductor solutions from specification to GDS sign-off, with expertise spanning across advanced process technologies and multiple application domains.
                  </p>
                </div>
                
                {/* VLSI Services */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
                  {vlsiServices.map((item, index) => (
                    <div key={index} className="flex items-start text-left bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <FaCheckCircle className="text-[#36B5A0] mr-3 mt-1 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>

                {/* VLSI Expertise Section */}
                {/* <div className="mt-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Specialized <span className="text-[#36B5A0]">Expertise</span>
                  </h4>
                  <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-3">
                    {vlsiExpertise.map((item, index) => (
                      <div key={index} className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                        <div className="w-2 h-2 bg-[#0A6B7E] rounded-full mr-3"></div>
                        <span className="font-medium text-gray-800 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
              
              {/* Right side: Image */}
              <div className="lg:w-1/2 ">
                <div className=" p-4 h-full flex items-center justify-center">
                  {/* Actual image from public folder */}
                  <div className="relative w-full h-full 1 overflow-hidden">
                    <img 
                      src="/coretechnology-img.png" 
                      alt="VLSI Design & Chip Solutions"
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
                              <p class="text-[#07284C] font-semibold">VLSI Design Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Advanced chip design for next-generation electronics</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* VLSI Domains Section */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Industry <span className="text-[#0A6B7E]">Domains</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {vlsiDomains.map((domain, index) => (
                  <div key={index} className="bg-white p-6 hover:border hover:rounded-xl hover:border-[#36B5A0] transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-col h-full">
                      <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3">{domain.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600 flex-1">{domain.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Technology Section */}
          <div className="py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center mt-10">
              Process <span className="text-[#0A6B7E]">Technology Expertise</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 hover:border hover:rounded-xl hover:border-[#36B5A0] transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col h-full">
                  <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3">Advanced Nodes</h3>
                  <p className="text-xs md:text-sm text-gray-600 flex-1">Expertise across process nodes from 350nm to most advanced 7nm technologies</p>
                </div>
              </div>
              
              <div className="bg-white p-6 hover:border hover:rounded-xl hover:border-[#0A6B7E] transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col h-full">
                  <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3">High-Speed Interfaces</h3>
                  <p className="text-xs md:text-sm text-gray-600 flex-1">PCIe, DDR, SerDes, SAS/SATA, Ethernet, MIPI interfaces and Foundation IPs</p>
                </div>
              </div>
              
              <div className="bg-white p-6 hover:border hover:rounded-xl hover:border-[#36B5A0] transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col h-full">
                  <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3">Verification & Validation</h3>
                  <p className="text-xs md:text-sm text-gray-600 flex-1">Pre-silicon verification, FPGA prototyping, emulation, and post-silicon validation</p>
                </div>
              </div>
              
              <div className="bg-white p-6 hover:border hover:rounded-xl hover:border-[#0A6B7E] transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col h-full">
                  <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3">Low Power Design</h3>
                  <p className="text-xs md:text-sm text-gray-600 flex-1">Power savings and management techniques for energy-efficient chip designs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VLSIPage;