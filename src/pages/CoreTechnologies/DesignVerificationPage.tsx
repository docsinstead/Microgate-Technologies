import React from 'react';
import { 
  FaCheckCircle,
  FaChartLine,
  FaShieldAlt,
  FaSearch,
  FaMicrochip,
  FaNetworkWired,
  FaCog
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DesignVerificationPage: React.FC = () => {
  const navigate = useNavigate();

  const coreTechnologies = [
    {
      icon: <FaMicrochip className="text-2xl text-[#0A6B7E]" />,
      title: "Embedded Systems",
      description: "Specialized solutions for automotive, consumer electronics, and aerospace applications",
      path: "/embedded-systems"
    },
    {
      icon: <FaNetworkWired className="text-2xl text-[#36B5A0]" />,
      title: "Networking",
      description: "Protocol stack implementations and system software solutions",
      path: "/networking"
    },
    {
      icon: <FaCog className="text-2xl text-[#0A6B7E]" />,
      title: "VLSI Design",
      description: "Leading chip solutions across automotive, server, graphics and mobile platforms",
      path: "/vlsi-design"
    }
  ];

  const dvServices = [
    "Feature Extraction & Property Specification",
    "HW/SW Co-Verification",
    "Functional Coverage & Sign-off",
    "Performance & Power Analysis",
    "FPGA Emulation & Prototyping"
  ];

  const importantPoints = [
    {
      icon: <FaMicrochip className="text-xl text-[#36B5A0]" />,
      title: "Silicon Success",
      description: "First-time silicon success through comprehensive design verification methodologies and expert execution"
    },
    {
      icon: <FaSearch className="text-xl text-[#0A6B7E]" />,
      title: "Design For Test & Debug",
      description: "Engineering chip anatomy with testability and debugging capabilities during micro-architectural phase"
    },
    {
      icon: <FaChartLine className="text-xl text-[#36B5A0]" />,
      title: "Physical Design Excellence",
      description: "Experienced team handling low power, high performance and area critical designs with multiple successful tape-outs"
    },
    {
      icon: <FaShieldAlt className="text-xl text-[#0A6B7E]" />,
      title: "Analog & Mixed Signal Design",
      description: "High-quality design for automotive, communication, consumer, medical, and IoT applications from 350nm to 7nm"
    }
  ];

  const technologyDomains = [
    {
      title: "FPGA Emulation & Post-SI Validation",
      description: "Full-service spectrum covering FPGA design, prototyping, emulation flows, and pre-silicon validation"
    },
    {
      title: "Protocols & System Software",
      description: "Re-engineered protocol stacks with efficient lookup routines and hardware-assisted packet processing"
    },
    {
      title: "System Modeling & Verification",
      description: "Expert verification architects handling optimal trade-offs in HW/SW co-verification"
    }
  ];

  const handleSolutionClick = (path: string) => {
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
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, #36B5A0 0%, #0A6B7E 50%, #07284C 100%)'
            }}></div>
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(7, 40, 76, 0.7) 0%, rgba(10, 107, 126, 0.5) 50%, rgba(54, 181, 160, 0.3) 100%)'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-left w-full">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
              Silicon Success Through Precision Verification
            </h1>
            <p className="text-sm md:text-base text-white/90 mb-8">
              Comprehensive Design Verification Solutions for First-Time Silicon Success
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center">
              Design <span className="text-[#0A6B7E]">Verification</span>
            </h2>
            
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Design Verification (DV) clicks when the right methodology is complemented by the right team.</span> First-time silicon success isn't easy, but that's what our DV engineers bring to you at Microgate Technologies. Extensive knowledge and experience enable them to comprehend tasks and execute flawlessly, from feature extraction and property specification to comprehensive sign-off checklists covering functional aspects, codes, performance, and power. Our verification architects expertly handle optimal trade-offs in system modeling and HW/SW co-verification, ensuring robust and reliable silicon outcomes.
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
                  onClick={() => handleSolutionClick(coreTechnologies[0].path)}
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
                  onClick={() => handleSolutionClick(coreTechnologies[1].path)}
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
                    onClick={() => handleSolutionClick(coreTechnologies[2].path)}
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

          {/* Design Verification Services Section */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-4 py-5 ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-10">
              <div className="lg:w-1/2">
                <div className="">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    Our <span className="text-[#0A6B7E]">Design Verification</span> Services
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-3">
                    We provide comprehensive design verification solutions that ensure first-time silicon success through expert methodology, extensive experience, and flawless execution across all verification stages.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
                  {dvServices.map((item, index) => (
                    <div key={index} className="flex items-start text-left bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <FaCheckCircle className="text-[#36B5A0] mr-3 mt-1 flex-shrink-0" />
                      <span className="font-medium text-gray-800 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 ">
                <div className=" p-4 h-full flex items-center justify-center">
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src="/coretechnology-img.png" 
                      alt="Design Verification Solutions"
                      className="w-full h-full object-cover rounded-xl md:mt-12"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="absolute inset-0 bg-gradient-to-br from-[#36B5A0]/20 to-[#0A6B7E]/20 flex items-center justify-center">
                            <div class="text-center p-4">
                              <svg class="w-16 h-16 text-[#0A6B7E] mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"/>
                              </svg>
                              <p class="text-[#07284C] font-semibold">Design Verification Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Ensuring silicon success through precision verification</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Additional Technology Domains Section */}
                <div className="mt-8">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">
                    Additional <span className="text-[#0A6B7E]">Technology Domains</span>
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {technologyDomains.map((tech, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:border-[#36B5A0] transition-all duration-300">
                        <div className="flex flex-col h-full">
                          <h5 className="text-base font-semibold text-gray-800 mb-2">{tech.title}</h5>
                          <p className="text-gray-600 text-sm flex-1">{tech.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
          </div>

          {/* Important Points Section */}
          <div className="py-5">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center mt-10">
              Our <span className="text-[#0A6B7E]">Expertise</span>
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

export default DesignVerificationPage;