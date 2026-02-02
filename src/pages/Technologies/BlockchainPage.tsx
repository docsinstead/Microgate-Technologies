import React from 'react';
import { 
  FaCheckCircle,
  FaCogs,
  FaCloud,
  FaDatabase,
  FaShieldAlt,
  FaLink,
  FaCode,
  FaNetworkWired,
  FaBitcoin,
  FaDatabase as FaDatabaseIcon,
  FaProjectDiagram
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BlockchainPage: React.FC = () => {
  const navigate = useNavigate();

  // iTechnologies Data with navigation paths - Removed Blockchain from portfolio
  const iTechnologies = [
    {
      icon: <FaDatabaseIcon className="text-2xl text-[#0A6B7E]" />,
      title: "Microsoft Technologies",
      description: "Enterprise solutions using Microsoft's comprehensive technology stack",
      path: "/microsoft-technologies"
    },
    {
      icon: <FaCode className="text-2xl text-[#36B5A0]" />,
      title: "Oracle",
      description: "Database management and enterprise resource planning solutions",
      path: "/oracle"
    },
    {
      icon: <FaProjectDiagram className="text-2xl text-[#0A6B7E]" />,
      title: "SAP",
      description: "Enterprise resource planning and business process management",
      path: "/sap"
    },
    {
      icon: <FaCloud className="text-2xl text-[#36B5A0]" />,
      title: "Salesforce",
      description: "Customer relationship management and cloud computing solutions",
      path: "/salesforce"
    },
    {
      icon: <FaNetworkWired className="text-2xl text-[#0A6B7E]" />,
      title: "Middleware",
      description: "Integration solutions connecting different applications and systems",
      path: "/middleware"
    },
    {
      icon: <FaCogs className="text-2xl text-[#36B5A0]" />,
      title: "Application Development",
      description: "Custom software development for web and mobile platforms",
      path: "/application-development"
    }
    // Blockchain solution is the current page, so it's removed from portfolio
  ];

  // Blockchain Applications
  const blockchainApplications = [
    "Digital Currency & Cryptocurrency",
    "Smart Contracts & Automation",
    "Supply Chain Management",
    "Digital Identity Verification",
    "Content Distribution & Royalties"
  ];

  // Important Points for Blockchain
  const importantPoints = [
    {
      icon: <FaLink className="text-xl text-[#36B5A0]" />,
      title: "Distributed Ledger Technology",
      description: "Digital information that can be distributed but not copied, creating the backbone of a new type of internet infrastructure"
    },
    {
      icon: <FaBitcoin className="text-xl text-[#0A6B7E]" />,
      title: "Digital Currency Foundation",
      description: "Originally devised for Bitcoin, now evolving with total cryptocurrency value exceeding hundreds of billions globally"
    },
    {
      icon: <FaShieldAlt className="text-xl text-[#36B5A0]" />,
      title: "Decentralized Control",
      description: "Multiple parties can write entries into a record, with community-controlled updates - no single entity controls the information"
    },
    {
      icon: <FaDatabase className="text-xl text-[#0A6B7E]" />,
      title: "Content Blockchain Network",
      description: "Open source blockchain network tailored for content and media ecosystem with on-chain governance and native tokens"
    }
  ];

  // Blockchain Benefits
  // const blockchainBenefits = [
  //   "Immutable record keeping and audit trails",
  //   "Enhanced security through cryptography",
  //   "Reduced intermediary costs and fraud",
  //   "Transparent and verifiable transactions",
  //   "Support for smart contracts and automation"
  // ];

  // Function to handle technology click
  const handleTechnologyClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
        
      {/* Hero Section with Video Background - Same as IT Consulting */}
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
            <source src="/solutions-bg.mp4" type="video/mp4" />
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
              Revolutionizing Digital Trust & Transparency
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8">
              Distributed Ledger Technology for Secure & Decentralized Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - Same layout as IT Consulting */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto">
            {/* Title added */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
              Blockchain <span className="text-[#0A6B7E]">Technology</span>
            </h2>
            
            {/* Single detailed paragraph - Same text size as IT Consulting */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Our Microgate Technologies</span> recognizes blockchain as an undeniably ingenious invention that has evolved into something far greater than its original purpose. By allowing digital information to be distributed but not copied, blockchain technology created the backbone of a new type of internet infrastructure. Originally devised for Bitcoin, often called "digital gold," the technology now supports various applications beyond cryptocurrency. <span className="font-semibold text-[#07284C]">Our Content Blockchain Project operates as an open, non-profit initiative</span> providing foundational tools for a new content and media ecosystem, including chain-agnostic standards for content identification, smart licenses, and transaction models that enable decentralized control and community governance.
            </p>
          </div>

          {/* Modified Two Columns iTechnologies Section - Same as IT Consulting layout */}
          <div className="py-3 mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-[#36B5A0]">iTechnologies</span> Portfolio
            </h2>
            
            {/* 3 Rows Grid Container - Same layout as IT Consulting */}
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
                      {/* Upward-facing arrow with border radius - Same as IT Consulting */}
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
                      <p className="text-xs md:text-sm text-gray-600">
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
                      <p className="text-xs md:text-sm text-gray-600">
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
                      <p className="text-xs md:text-sm text-gray-600">
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
                      <p className="text-xs md:text-sm text-gray-600">
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
                      <p className="text-xs md:text-sm text-gray-600">
                        {iTechnologies[5].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blockchain Applications Section - Same as Consulting Portfolio */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-4 py-5 ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-10">
              {/* Left side: Title, paragraph, and applications */}
              <div className="lg:w-1/2">
                <div className="">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Blockchain <span className="text-[#0A6B7E]">Applications</span>
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-3">
                    Our Content Blockchain Network operates as an open, non-profit initiative providing foundational tools and infrastructure for a new content and media ecosystem based on blockchain technology, supporting data streams, native tokens, and on-chain governance.
                  </p>
                </div>
                
                {/* Blockchain Applications */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
                  {blockchainApplications.map((item, index) => (
                    <div key={index} className="flex items-start text-left bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <FaCheckCircle className="text-[#36B5A0] mr-3 mt-1 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right side: Image */}
              <div className="lg:w-1/2 ">
                <div className=" p-4 h-full flex items-center justify-center">
                  {/* Actual image from public folder */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src="/technology-img.png" 
                      alt="Blockchain Technology Solutions"
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
                              <p class="text-[#07284C] font-semibold">Blockchain Technology</p>
                              <p class="text-gray-600 text-sm mt-2">Distributed ledger solutions for secure digital transactions</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Points Section - Same as IT Consulting */}
          <div className="py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center mt-10">
              Blockchain <span className="text-[#0A6B7E]">Technology</span> Features
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

export default BlockchainPage;