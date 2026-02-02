import React from 'react';
import { 
  FaCheckCircle,
  FaChartLine,
  FaUsers,
  FaCogs,
  FaMobileAlt,
  FaShieldAlt,
  FaRocket,
  FaBriefcase,
  FaLaptopCode,
  FaSalesforce,
  FaRobot,
  FaNetworkWired
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TechnologyPage: React.FC = () => {
  const navigate = useNavigate();

  // Industries Data with navigation paths - Removed Technology industry (current page)
  const industries = [
    {
      icon: <FaBriefcase className="text-2xl text-[#0A6B7E]" />,
      title: "Financial Services",
      description: "Specialized solutions for banking, investment, and financial institutions",
      path: "/financial-services"
    },
    {
      icon: <FaUsers className="text-2xl text-[#36B5A0]" />,
      title: "Consumer Goods",
      description: "Technology solutions for retail, manufacturing, and consumer products",
      path: "/consumer-goods"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-[#0A6B7E]" />,
      title: "Insurance",
      description: "Digital transformation solutions for insurance providers",
      path: "/insurance"
    },
    {
      icon: <FaMobileAlt className="text-2xl text-[#36B5A0]" />,
      title: "Health Care",
      description: "Technology solutions for healthcare providers and medical institutions",
      path: "/health-care"
    },
    {
      icon: <FaNetworkWired className="text-2xl text-[#0A6B7E]" />,
      title: "Telecommunication",
      description: "Solutions for telecom providers and communication networks",
      path: "/telecommunication"
    },
    {
      icon: <FaLaptopCode className="text-2xl text-[#36B5A0]" />,
      title: "Hospitality",
      description: "Technology solutions for hotels, travel, and hospitality industry",
      path: "/hospitality"
    }
  ];

  // Technology Services
  const technologyServices = [
    "Digital Transformation Strategy",
    "Sales Performance & Effectiveness",
    "AI-Powered Analytics Solutions",
    "Customer Experience Enhancement",
    "Supply Chain Optimization"
  ];

  // Important Points for Technology Industry
  const importantPoints = [
    {
      icon: <FaChartLine className="text-xl text-[#36B5A0]" />,
      title: "New Business Models",
      description: "Exploring innovative business models, investment strategies, and sales enablement for digital transformation"
    },
    {
      icon: <FaRobot className="text-xl text-[#0A6B7E]" />,
      title: "AI Collaboration",
      description: "Partnering with AI companies to acquire customers, maximize revenues, and adapt to evolving customer behavior"
    },
    {
      icon: <FaSalesforce className="text-xl text-[#36B5A0]" />,
      title: "Sales Performance",
      description: "Transforming sales teams with complete visibility, control, and actionable insights from CRM data"
    },
    {
      icon: <FaCogs className="text-xl text-[#0A6B7E]" />,
      title: "Supply Chain Optimization",
      description: "Optimizing operations with AI assistants for better efficiency and cost reduction"
    }
  ];

  // Technology Focus Areas
  const focusAreas = [
    {
      icon: <FaRocket className="text-2xl text-[#0A6B7E]" />,
      title: "Beyond Productivity",
      description: "Focus on effectiveness over productivity improvements in analytics and AI investments"
    },
    {
      icon: <FaUsers className="text-2xl text-[#36B5A0]" />,
      title: "Customer Experience",
      description: "Contextualizing customer experience for growth and retention through preemptive solutions"
    },
    {
      icon: <FaBriefcase className="text-2xl text-[#0A6B7E]" />,
      title: "Revenue Channels",
      description: "Developing new revenue streams and improving profitability in competitive markets"
    }
  ];

  // Function to handle industry click
  const handleIndustryClick = (path: string) => {
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
            <source src="/industry-bghero1.mp4" type="video/mp4" />
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
              Software & Platforms
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8">
              Partnering with our clients to create new platform businesses
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
              <span className="text-[#0A6B7E]">Technology</span> Industry
            </h2>
            
            {/* Single detailed paragraph - 4-5 lines */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Our Microgate Technologies</span> brings together extensive Technology Industry expertise, Data Science capabilities and AI-powered accelerators to help Technology companies drive actions for digital transformation outcomes. The Digital Transformation narrative is pushing the Technology Industry to explore newer business models, effective investment strategies, enhanced sales enablement, and rethink products in the context of evolving customer behavior. As executives take Analytics and AI beyond boardroom conversations, we partner with some of the largest enterprise technology companies to deploy solutions that improve customer experience by preempting issues, build high-performance sales teams through better forecasting, and optimize Supply Chain processes with AI assistants for enhanced operational efficiency.
            </p>
          </div>

          {/* Modified Two Columns Industries Section - Showing 6 industries (excluding Technology) */}
<div className="py-3 mt-8">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
    Our <span className="text-[#36B5A0]">Industries Portfolio</span>
  </h2>
  
  {/* 3 Rows Grid Container - Now showing only 6 industries (without Technology) */}
  <div className="space-y-4">
    {/* Row 1 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
      {/* Industry 1 */}
      <div 
        onClick={() => handleIndustryClick(industries[0].path)}
        className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group relative"
      >
        <div className="space-y-2">
          {/* First Row: Title with Arrow */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h3 className="text-sm md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                {industries[0].title}
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
              {industries[0].description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Industry 2 */}
      <div 
        onClick={() => handleIndustryClick(industries[1].path)}
        className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
      >
        <div className="space-y-3">
          {/* First Row: Title with Arrow */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                {industries[1].title}
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
              {industries[1].description}
            </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Row 2 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
      {/* Industry 3 */}
      <div 
        onClick={() => handleIndustryClick(industries[2].path)}
        className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
      >
        <div className="space-y-3">
          {/* First Row: Title with Arrow */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                {industries[2].title}
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
              {industries[2].description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Industry 4 */}
      <div 
        onClick={() => handleIndustryClick(industries[3].path)}
        className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
      >
        <div className="space-y-3">
          {/* First Row: Title with Arrow */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                {industries[3].title}
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
              {industries[3].description}
            </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Row 3 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
      {/* Industry 5 */}
      <div 
        onClick={() => handleIndustryClick(industries[4].path)}
        className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
      >
        <div className="space-y-3">
          {/* First Row: Title with Arrow */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                {industries[4].title}
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
              {industries[4].description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Industry 6 */}
      <div 
        onClick={() => handleIndustryClick(industries[5].path)}
        className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
      >
        <div className="space-y-3">
          {/* First Row: Title with Arrow */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                {industries[5].title}
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
              {industries[5].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          {/* Technology Services Section */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-4 py-5 ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-10">
              {/* Left side: Title, paragraph, and services */}
              <div className="lg:w-1/2">
                <div className="">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Our <span className="text-[#0A6B7E]">Technology</span> Services
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-3">
                    Partnering with technology companies to drive digital transformation through AI-powered solutions, sales performance enhancement, and customer experience optimization.
                  </p>
                </div>
                
                {/* Technology Services */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
                  {technologyServices.map((item, index) => (
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
                  <div className="relative w-full h-full 1 overflow-hidden">
                    <img 
                      src="/industry-img.png" 
                      alt="Technology Industry Solutions"
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
                              <p class="text-[#07284C] font-semibold">Technology Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Digital transformation for the technology industry</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Focus Areas */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Strategic <span className="text-[#0A6B7E]">Focus</span> Areas
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {focusAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:border-[#36B5A0] transition-all duration-300">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="p-3 bg-gray-50 rounded-lg mb-4">
                        {area.icon}
                      </div>
                      <h5 className="text-xl font-semibold text-gray-800 mb-3">{area.title}</h5>
                      <p className="text-gray-600 flex-1">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Points Section */}
          <div className="py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center mt-10">
              Our <span className="text-[#0A6B7E]">Approach</span> to Technology
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

export default TechnologyPage;