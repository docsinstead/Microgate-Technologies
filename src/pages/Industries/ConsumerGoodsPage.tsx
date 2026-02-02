import React from 'react';
import { 
  FaCheckCircle,
  FaChartLine,
  FaUsers,
  FaCogs,
  FaMobileAlt,
  FaShieldAlt,
  FaLightbulb,
  FaRocket,
  FaSearch,
  FaBriefcase,
  FaClock,
  FaShoppingCart,
  FaTag,
  FaChartBar
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ConsumerGoodsPage: React.FC = () => {
  const navigate = useNavigate();

  // Industries Data with navigation paths - Removed Consumer Goods from portfolio
  const industries = [
    {
      icon: <FaCogs className="text-2xl text-[#0A6B7E]" />,
      title: "Technology",
      description: "Innovative technology solutions for software and hardware companies",
      path: "/industries/technology"
    },
    {
      icon: <FaBriefcase className="text-2xl text-[#36B5A0]" />,
      title: "Financial Services",
      description: "Specialized solutions for banking, finance, and investment sectors",
      path: "/industries/financial-services"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-[#0A6B7E]" />,
      title: "Insurance",
      description: "Technology solutions for insurance providers and risk management",
      path: "/industries/insurance"
    },
    {
      icon: <FaUsers className="text-2xl text-[#36B5A0]" />,
      title: "Health Care",
      description: "Healthcare technology and digital transformation solutions",
      path: "/industries/health-care"
    },
    {
      icon: <FaMobileAlt className="text-2xl text-[#0A6B7E]" />,
      title: "Telecommunication",
      description: "Solutions for telecom providers and communication networks",
      path: "/industries/telecommunication"
    },
    {
      icon: <FaClock className="text-2xl text-[#36B5A0]" />,
      title: "Hospitality",
      description: "Technology solutions for hotels, travel, and hospitality industry",
      path: "/industries/hospitality"
    }
  ];

  // Consumer Goods Services
  const cpgServices = [
    "Price & Promotion Optimization",
    "Customer Loyalty Enhancement",
    "Marketing Spend Optimization",
    "Supply Chain Planning",
    "Sales Growth Strategies"
  ];

  // Important Points for Consumer Goods
  const importantPoints = [
    {
      icon: <FaShoppingCart className="text-xl text-[#36B5A0]" />,
      title: "Digital Transformation",
      description: "Digital innovations are changing consumer demand and competitive dynamics in the CPG marketplace"
    },
    {
      icon: <FaChartLine className="text-xl text-[#0A6B7E]" />,
      title: "AI-Powered Solutions",
      description: "Our Data Science expertise and AI-powered solutions help CPG companies build customer loyalty"
    },
    {
      icon: <FaTag className="text-xl text-[#36B5A0]" />,
      title: "Price Optimization",
      description: "Advanced optimization algorithms to measure effectiveness of pricing decisions and promotion mix"
    },
    {
      icon: <FaChartBar className="text-xl text-[#0A6B7E]" />,
      title: "Incremental Growth",
      description: "Drive incremental sales growth and get more value from marketing spend with our solutions"
    }
  ];

  // CPG Solutions
  const cpgSolutions = [
    {
      icon: <FaSearch className="text-2xl text-[#0A6B7E]" />,
      title: "Price Control Watchtower",
      description: "Price monitoring and alerting system for potential impact, policy violations, and competitor tracking"
    },
    {
      icon: <FaRocket className="text-2xl text-[#36B5A0]" />,
      title: "Price/Promotion Optimizer",
      description: "Automated and optimized price architecture recommendations with visibility across customer demographics"
    },
    {
      icon: <FaLightbulb className="text-2xl text-[#0A6B7E]" />,
      title: "Promotion Mix Analysis",
      description: "Ideal promotion mix recommendations across categories, accounts, and regions"
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
              Consumer <span className="text-[#0A6B7E]">Goods</span>
            </h2>
            
            {/* Single detailed paragraph - 4-5 lines */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Our Microgate Technologies</span> recognizes that digital innovations are drastically changing consumer demand and competitive dynamics in the CPG marketplace, influencing purchasing behavior and decisions. With boundaries between retailers, AI companies, and CPG companies blurring, the industry is ripe for transformation. Our Data Science expertise, portfolio of AI-powered solutions, and CPG industry context helps companies build customer loyalty, drive incremental sales growth, optimize marketing spend, and enhance supply chain planning and operations.
            </p>
          </div>

          {/* Modified Two Columns Industries Section - Showing 6 industries (excluding Consumer Goods) */}
          <div className="py-3 mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-[#36B5A0]">Industries Portfolio</span>
            </h2>
            
            {/* 3 Rows Grid Container - Now showing only 6 industries (without Consumer Goods) */}
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

          {/* Consumer Goods Services Section */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-4 py-5 ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-10">
              {/* Left side: Title, paragraph, and services */}
              <div className="lg:w-1/2">
                <div className="">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Our <span className="text-[#0A6B7E]">CPG Solutions</span>
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-3">
                    With massive spends allocated for promotion activities and both trade and consumer promotions running simultaneously, sales growth in CPG companies depends heavily on understanding factors that control price and trade promotion strategies.
                  </p>
                </div>
                
                {/* CPG Services */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
                  {cpgServices.map((item, index) => (
                    <div key={index} className="flex items-start text-left bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <FaCheckCircle className="text-[#36B5A0] mr-3 mt-1 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right side: Image - Removed as requested */}
               {/* Right side: Image - SAME LAYOUT AS IT CONSULTING */}
              <div className="lg:w-1/2 ">
                <div className=" p-4 h-full flex items-center justify-center">
                  {/* Actual image from public folder */}
                  <div className="relative w-full h-full 1 overflow-hidden">
                    <img 
                      src="/industry-img.png" 
                      alt="Financial Services Solutions"
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
                              <p class="text-[#07284C] font-semibold">Financial Services Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Banking, capital markets and insurance technology solutions</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CPG Solutions Section */}
            <div className="mt-12">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
                Price & Promotion <span className="text-[#0A6B7E]">Optimization</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cpgSolutions.map((solution, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:border-[#36B5A0] transition-all duration-300">
                    <div className="flex flex-col items-center text-center h-full">
                      <h5 className="text-xl font-semibold text-gray-800 mb-3">{solution.title}</h5>
                      <p className="text-gray-600 flex-1">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Points Section */}
          <div className="py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center mt-10">
              Our <span className="text-[#0A6B7E]">Value</span> Proposition
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

export default ConsumerGoodsPage;