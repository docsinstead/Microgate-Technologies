import React from 'react';
import { 
  FaCheckCircle,
  FaChartLine,
  FaUsers,
  FaCogs,
  FaDatabase,
  FaMobileAlt,
  FaShieldAlt,
  FaBriefcase,
  FaPlane,
  FaHotel,
  FaCar,
  FaUtensils
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HospitalityPage: React.FC = () => {
  const navigate = useNavigate();

  // Industries Data with navigation paths - Removed Hospitality from portfolio
  const industries = [
    {
      icon: <FaCogs className="text-2xl text-[#0A6B7E]" />,
      title: "Technology",
      description: "Innovative technology solutions for digital transformation and business growth",
      path: "/industries/technology"
    },
    {
      icon: <FaChartLine className="text-2xl text-[#36B5A0]" />,
      title: "Financial Services",
      description: "Specialized solutions for banking, insurance, and financial institutions",
      path: "/industries/financial-services"
    },
    {
      icon: <FaBriefcase className="text-2xl text-[#0A6B7E]" />,
      title: "Consumer Goods",
      description: "Retail and consumer products solutions for enhanced market performance",
      path: "/industries/consumer-goods"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-[#36B5A0]" />,
      title: "Insurance",
      description: "Technology solutions for insurance providers and risk management",
      path: "/industries/insurance"
    },
    {
      icon: <FaUsers className="text-2xl text-[#0A6B7E]" />,
      title: "Health Care",
      description: "Healthcare technology solutions for improved patient care and operations",
      path: "/industries/health-care"
    },
    {
      icon: <FaDatabase className="text-2xl text-[#36B5A0]" />,
      title: "Telecommunication",
      description: "Telecom solutions for connectivity and communication infrastructure",
      path: "/industries/telecommunication"
    }
    // Hospitality industry is the current page, so it's removed from portfolio
  ];

  // Hospitality Services
  const hospitalityServices = [
    "Travelport API Software Services",
    "Travelport Platform Development",
    "Mobile App Development",
    "Restaurant App Development",
    "Custom Property Management Systems"
  ];

  // Important Points for Hospitality
  const importantPoints = [
    {
      icon: <FaPlane className="text-xl text-[#36B5A0]" />,
      title: "Travel & Transportation",
      description: "Technology solutions for travel, transportation, and hospitality organizations facing rising costs and margin pressures"
    },
    {
      icon: <FaHotel className="text-xl text-[#0A6B7E]" />,
      title: "Customer Experience",
      description: "Redesign IT portfolios to enhance client experience, transform front-and back-office processes across the value chain"
    },
    {
      icon: <FaCar className="text-xl text-[#36B5A0]" />,
      title: "Operational Efficiency",
      description: "Efficient, creative, and cost-effective technology solutions to fulfill pressing business needs in hospitality"
    },
    {
      icon: <FaUtensils className="text-xl text-[#0A6B7E]" />,
      title: "Restaurant Management",
      description: "Custom software solutions for reservations, inventory control, and management dashboards"
    }
  ];

  // Hospitality Solutions
  const hospitalitySolutions = [
    {
      icon: <FaPlane className="text-2xl text-[#0A6B7E]" />,
      title: "Travelport Integration",
      description: "Custom integrations for Travelport Universal API, Booking Feed, Smartpoint SDK, Galileo, and ViewTrip Mobile"
    },
    {
      icon: <FaMobileAlt className="text-2xl text-[#36B5A0]" />,
      title: "Mobile Solutions",
      description: "Mobile applications for airlines, agencies, and travelers to streamline operations and enhance engagement"
    },
    {
      icon: <FaHotel className="text-2xl text-[#0A6B7E]" />,
      title: "Property Management",
      description: "Custom PMS solutions for hotels, resorts, timeshares, and vacation rentals with third-party integration"
    }
  ];

  // Function to handle industry click
  const handleIndustryClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
        
      {/* Hero Section with Video Background - SAME AS IT CONSULTING */}
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
              Transforming Hospitality with Technology
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8">
              Innovative solutions for travel, transportation, and hospitality industries
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - SAME LAYOUT AS IT CONSULTING */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto">
            {/* Title added - SAME FONT SIZES */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
              Hospitality <span className="text-[#0A6B7E]">Industry</span>
            </h2>
            
            {/* Single detailed paragraph - 4-5 lines - SAME FONT SIZES */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Our Microgate Technologies</span> recognizes the challenges travel, transportation, and hospitality organizations face with rising costs and declining profit margins. We understand the critical need to stay current with evolving technologies and redesign IT portfolios to enhance customer experiences, transform front-and back-office processes, and provide seamless interfaces across the value chain. Our approach leverages technology to efficiently, creatively, and cost-effectively fulfill the most pressing business needs in the hospitality sector.
            </p>
          </div>

          {/* Modified Two Columns Industries Section - Showing 6 industries (excluding Hospitality) - SAME LAYOUT AS IT CONSULTING */}
          <div className="py-3 mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-[#36B5A0]">Industries Portfolio</span>
            </h2>
            
            {/* 3 Rows Grid Container - Now showing only 6 industries (without Hospitality) */}
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

          {/* Hospitality Services Section - SAME LAYOUT AS IT CONSULTING */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-4 py-5 ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-10">
              {/* Left side: Title, paragraph, and services */}
              <div className="lg:w-1/2">
                <div className="">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Our <span className="text-[#0A6B7E]">Hospitality</span> Services
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-3">
                    We provide comprehensive technology solutions for the travel, transportation, and hospitality sectors, helping organizations overcome rising costs, enhance customer experiences, and streamline operations across the value chain.
                  </p>
                </div>
                
                {/* Hospitality Services - SAME STYLING AS IT CONSULTING */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
                  {hospitalityServices.map((item, index) => (
                    <div key={index} className="flex items-start text-left bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <FaCheckCircle className="text-[#36B5A0] mr-3 mt-1 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right side: Image - SAME STYLING AS IT CONSULTING */}
              <div className="lg:w-1/2 ">
                <div className=" p-4 h-full flex items-center justify-center">
                  {/* Actual image from public folder */}
                  <div className="relative w-full h-full 1 overflow-hidden">
                    <img 
                      src="/industry-img.png" 
                      alt="Hospitality Industry Solutions"
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
                              <p class="text-[#07284C] font-semibold">Hospitality Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Technology for travel, transportation, and hospitality industries</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Hospitality Solutions Section - SAME STYLING AS IT CONSULTING */}
            <div className="py-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
                Key <span className="text-[#0A6B7E]">Solutions</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospitalitySolutions.map((solution, index) => (
                  <div key={index} className="bg-white p-6 hover:border hover:rounded-xl hover:border-[#36B5A0] transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-col h-full">
                      <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3">{solution.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600 flex-1">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Points Section - SAME LAYOUT AS IT CONSULTING */}
          <div className="py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center mt-10">
              Industry <span className="text-[#0A6B7E]">Focus Areas</span>
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

export default HospitalityPage;