import React from 'react';
import { 
  FaCheckCircle,
  FaUsers,
  FaCloud,
  FaDatabase,
  FaMobileAlt,
  FaRocket,
  FaClipboardCheck,
  FaBriefcase,
  FaIndustry,
  FaCubes,
  FaNetworkWired
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SapPage: React.FC = () => {
  const navigate = useNavigate();

  // iTechnologies Data - SAP removed from the list
  const iTechnologies = [
    {
      icon: <FaUsers className="text-2xl text-[#0A6B7E]" />,
      title: "Microsoft Technologies",
      description: "Comprehensive Microsoft solutions for enterprise digital transformation",
      path: "/microsoft-technologies"
    },
    {
      icon: <FaClipboardCheck className="text-2xl text-[#36B5A0]" />,
      title: "Oracle",
      description: "Oracle database and application solutions for business optimization",
      path: "/oracle"
    },
    {
      icon: <FaBriefcase className="text-2xl text-[#0A6B7E]" />,
      title: "Block Chain",
      description: "Blockchain solutions for secure and transparent business transactions",
      path: "/blockchain"
    },
    {
      icon: <FaMobileAlt className="text-2xl text-[#36B5A0]" />,
      title: "Salesforce",
      description: "CRM and cloud solutions for customer relationship management",
      path: "/salesforce"
    },
    {
      icon: <FaCloud className="text-2xl text-[#0A6B7E]" />,
      title: "Middleware",
      description: "Integration solutions for seamless system connectivity",
      path: "/middleware"
    },
    {
      icon: <FaDatabase className="text-2xl text-[#36B5A0]" />,
      title: "Application Development",
      description: "Custom application development for business process automation",
      path: "/application-development"
    }
    // SAP solution is the current page, so it's removed from portfolio
  ];

  // SAP Modules
  const sapModules = [
    "Material Management (MM)",
    "Master Data Management (MDM)",
    "Warehouse Management (WM)",
    "Finance/Controlling (FICO)",
    "Production Planning (PP)",
    "Customer Relationship Management (CRM)",
    "Supply Chain Management (SCM)",
    "Business Information Warehouse (BW)",
    "Advanced Planning & Optimization (APO)",
    "HR and Human Capital Management (HR/HCM)",
    "Product Lifecycle Management (PLM)",
    "Supplier Relationship Management (SRM)",
    "Business Object (BO)",
    "Environmental Health and Safety (EHS)"
  ];

  // Important Points for SAP
  const importantPoints = [
    {
      icon: <FaIndustry className="text-xl text-[#36B5A0]" />,
      title: "Industry Expertise",
      description: "Broad experience in providing SAP consulting services across manufacturing, retail, oil & gas, media, and technology industries"
    },
    {
      icon: <FaDatabase className="text-xl text-[#0A6B7E]" />,
      title: "SAP BW Specialization",
      description: "Expertise in SAP Business Warehouse - a complete data warehouse and information delivery framework tightly coupled with SAP R/3"
    },
    {
      icon: <FaCubes className="text-xl text-[#36B5A0]" />,
      title: "Integrated Modules",
      description: "SAP ERP comprises integrated modules covering virtually every aspect of business management with global integration capabilities"
    },
    {
      icon: <FaNetworkWired className="text-xl text-[#0A6B7E]" />,
      title: "Real-time Solutions",
      description: "End-to-end solutions for logistics, financials, inventories, and distribution with real-time information and efficient work environments"
    }
  ];

  // SAP Benefits
  const sapBenefits = [
    "Global integration eliminating currency, language, and cultural barriers",
    "Real-time information for efficient decision-making",
    "Integrated modules covering all business management aspects",
    "Autonomous data warehouse environment implementation",
    "Reduced complexity in data extraction and management"
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
            <source src="/technologies-bghero.mp4" type="video/mp4" />
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
              Enterprise SAP Solutions for Business Transformation
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8">
              Comprehensive SAP consulting services for integrated business management
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
              SAP <span className="text-[#0A6B7E]">Solutions</span>
            </h2>
            
            {/* Single detailed paragraph - 4-5 lines */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Our Microgate Technologies</span> has broad experience in providing SAP consulting services across various industries including manufacturing, retail, oil and gas, media, and technology sectors. One of the core components of the SAP business framework is SAP Business Information Warehouse (SAP BW), a complete data warehouse and information delivery framework tightly coupled with SAP R/3 Online Transaction Processing environment. This integration facilitates easier implementation of autonomous data warehouse environments without the complexities of SAP R/3 data extraction and management, enabling global integration by eliminating barriers of currency exchange rates, language, and culture while providing end-to-end solutions for logistics, financials, inventories, and distribution.
            </p>
          </div>

          {/* Modified Two Columns Solutions Section - Showing 6 iTechnologies (excluding SAP) */}
          <div className="py-3 mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-[#36B5A0]">iTechnologies Portfolio</span>
            </h2>
            
            {/* 3 Rows Grid Container - Now showing only 6 iTechnologies (without SAP) */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                {/* Technology 1 */}
                <div 
                  onClick={() => handleTechnologyClick(iTechnologies[0].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group relative"
                >
                  <div className="space-y-2">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-sm md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {iTechnologies[0].title}
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
                        {iTechnologies[0].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Technology 2 */}
                <div 
                  onClick={() => handleTechnologyClick(iTechnologies[1].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {iTechnologies[1].title}
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
                      <p className="text-xs md:text-sm text-gray-600 text-sm">
                        {iTechnologies[1].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                {/* Technology 3 */}
                <div 
                  onClick={() => handleTechnologyClick(iTechnologies[2].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {iTechnologies[2].title}
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
                      <p className="text-xs md:text-sm text-gray-600 text-sm">
                        {iTechnologies[2].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Technology 4 */}
                <div 
                  onClick={() => handleTechnologyClick(iTechnologies[3].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {iTechnologies[3].title}
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
                      <p className="text-xs md:text-sm text-gray-600 text-sm">
                        {iTechnologies[3].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                {/* Technology 5 */}
                <div 
                  onClick={() => handleTechnologyClick(iTechnologies[4].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {iTechnologies[4].title}
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
                      <p className="text-xs md:text-sm text-gray-600 text-sm">
                        {iTechnologies[4].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Technology 6 */}
                <div 
                  onClick={() => handleTechnologyClick(iTechnologies[5].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {iTechnologies[5].title}
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
                      <p className="text-xs md:text-sm text-gray-600 text-sm">
                        {iTechnologies[5].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SAP Modules Section */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-4 py-5 ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-10">
              {/* Left side: Title, paragraph, and SAP modules */}
              <div className="lg:w-1/2">
                <div className="">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Our <span className="text-[#0A6B7E]">SAP</span> Modules Expertise
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-3">
                    SAP ERP system comprises integrated modules covering virtually every single aspect of business management, allowing easy global integration and providing real-time information for more efficient work environments.
                  </p>
                </div>
                
                {/* SAP Modules */}
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
                  {sapModules.map((module, index) => (
                    <div key={index} className="flex items-start text-left bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <FaCheckCircle className="text-[#36B5A0] mr-3 mt-1 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right side: Image */}
              <div className="lg:w-1/2 ">
                <div className=" p-4 h-full flex items-center justify-center">
                  {/* Actual image from public folder */}
                  <div className="relative w-full h-full 1 overflow-hidden">
                    <img 
                      src="/technology-img.png" 
                      alt="SAP Enterprise Solutions"
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
                              <p class="text-[#07284C] font-semibold">SAP Enterprise Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Integrated ERP solutions for business transformation</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
                {/* SAP Benefits Section */}
            <div className="mt-8 bg-white rounded-xl p-4 shadow-md border-l-4 border-[#0A6B7E]">
              <div className="flex items-start">
                <FaRocket className="text-xl text-[#0A6B7E] mr-3 mt-1" />
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-2">SAP Implementation Benefits</h4>
                  <ul className="space-y-2">
                    {sapBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#36B5A0] rounded-full mt-2 mr-2"></div>
                        <span className="text-xs md:text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </div>
              </div>
          </div>

          {/* Important Points Section */}
          <div className="py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center mt-10">
              Our <span className="text-[#0A6B7E]">SAP</span> Expertise
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {importantPoints.map((point, index) => (
                <div key={index} className="bg-white p-6 hover:border hover:rounded-xl hover:border-[#36B5A0] transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col h-full">
                    {/* <div className="p-3 bg-gray-50 rounded-lg w-fit mb-4">
                      {point.icon}
                    </div> */}
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

export default SapPage;