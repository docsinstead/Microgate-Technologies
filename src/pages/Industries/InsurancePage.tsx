import React from 'react';
import { 
  FaCheckCircle,
  FaChartLine,
  FaUsers,
  FaCogs,
  FaCloud,
  FaDatabase,
  FaMobileAlt,
  FaClipboardCheck,
  FaBriefcase,
  FaFileContract,
  FaChartPie
} from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const InsurancePage: React.FC = () => {
  const navigate = useNavigate();

  // Industries Data with navigation paths - Removed Insurance from portfolio
  const industries = [
    {
      icon: <FaCogs className="text-2xl text-[#0A6B7E]" />,
      title: "Technology",
      description: "Comprehensive technology solutions for enhanced operational efficiency",
      path: "/industries/technology"
    },
    {
      icon: <FaChartLine className="text-2xl text-[#36B5A0]" />,
      title: "Financial Services",
      description: "Specialized solutions for banking, finance, and investment sectors",
      path: "/industries/financial-services"
    },
    {
      icon: <FaBriefcase className="text-2xl text-[#0A6B7E]" />,
      title: "Consumer Goods",
      description: "Technology solutions for retail and consumer products industry",
      path: "/industries/consumer-goods"
    },
    {
      icon: <FaMobileAlt className="text-2xl text-[#36B5A0]" />,
      title: "Health Care",
      description: "Healthcare technology solutions and digital transformation services",
      path: "/industries/health-care"
    },
    {
      icon: <FaCloud className="text-2xl text-[#0A6B7E]" />,
      title: "Telecommunication",
      description: "Telecom infrastructure and communication technology solutions",
      path: "/industries/telecommunication"
    },
    {
      icon: <FaUsers className="text-2xl text-[#36B5A0]" />,
      title: "Hospitality",
      description: "Technology solutions for hotel, travel, and hospitality industry",
      path: "/industries/hospitality"
    }
  ];

  // Insurance Services
  const insuranceServices = [
    "Information Accuracy & Security",
    "Secure Access & Verification Systems",
    "Highly Effective User Interfaces",
    "Healthcare and Cloud Integration",
    "Integration with EMR/PHR Systems"
  ];

  // Important Points for Insurance
  const importantPoints = [
    {
      icon: <FaShield className="text-xl text-[#36B5A0]" />,
      title: "Data Security & Reliability",
      description: "Focus on information accuracy, unwavering quality, and security with advanced protection systems"
    },
    {
      icon: <FaFileContract className="text-xl text-[#0A6B7E]" />,
      title: "Compliance & Standards",
      description: "Following and utilization of industry standards including HIPAA, HL7, and regulatory compliance"
    },
    {
      icon: <FaChartPie className="text-xl text-[#36B5A0]" />,
      title: "Analytics & Reporting",
      description: "Advanced analysis and reporting solutions for insurance data management and insights"
    },
    {
      icon: <FaCogs className="text-xl text-[#0A6B7E]" />,
      title: "Integration Solutions",
      description: "Seamless integration with existing systems including EMR, PHR, and third-party applications"
    }
  ];

  // Insurance Solutions
  const insuranceSolutions = [
    {
      icon: <FaClipboardCheck className="text-2xl text-[#0A6B7E]" />,
      title: "Practice Management",
      description: "Comprehensive practice management solutions for insurance providers"
    },
    {
      icon: <FaDatabase className="text-2xl text-[#36B5A0]" />,
      title: "Clinical Data Management",
      description: "Secure and efficient clinical data management systems"
    },
    {
      icon: <FaUsers className="text-2xl text-[#0A6B7E]" />,
      title: "Patient Portals",
      description: "User-friendly patient portals for enhanced customer experience"
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
              Insurance Industry Solutions
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8">
              Technology-enabled solutions for modern insurance challenges
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - SAME PADDING AND MARGINS AS IT CONSULTING */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto">
            {/* Title added - SAME STYLE AS IT CONSULTING */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
              Insurance <span className="text-[#0A6B7E]">Solutions</span>
            </h2>
            
            {/* Single detailed paragraph - SAME FONT SIZE AS IT CONSULTING */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Our Microgate Technologies healthcare area encounter concentrates on</span> information accuracy, unwavering quality, and security with highly effective user interfaces utilizing Web 2.0 technology. We focus on healthcare and cloud integration with popular EMR and PHR systems, biometric data accumulation, and following utilization of industry standards. We work closely with our customers to deliver reliable, evolvable, and effective outcomes on-time and on-budget, partnering with Healthcare Providers and Healthcare ISVs to develop innovative solutions in the healthcare space.
            </p>
          </div>

          {/* Modified Two Columns Industries Section - SAME LAYOUT AS IT CONSULTING SOLUTIONS */}
          <div className="py-3 mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-[#36B5A0]">Industries</span> Portfolio
            </h2>
            
            {/* 3 Rows Grid Container - SAME GRID STRUCTURE AS IT CONSULTING */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                {/* Industry 1 */}
                <div 
                  onClick={() => handleIndustryClick(industries[0].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group relative"
                >
                  <div className="space-y-2">
                    {/* First Row: Title with Arrow - SAME STYLE AS IT CONSULTING */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-sm md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {industries[0].title}
                        </h3>
                      </div>
                      {/* Upward-facing arrow - SAME AS IT CONSULTING */}
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
                    
                    {/* Second Row: Description - SAME STYLE AS IT CONSULTING */}
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
                      <p className="text-xs md:text-sm text-gray-600">
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
                      <p className="text-xs md:text-sm text-gray-600">
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
                      <p className="text-xs md:text-sm text-gray-600">
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
                      <p className="text-xs md:text-sm text-gray-600">
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
                      <p className="text-xs md:text-sm text-gray-600">
                        {industries[5].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance Services Section - SAME LAYOUT AS CONSULTING PORTFOLIO */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-4 py-5 ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-10">
              {/* Left side: Title, paragraph, and services */}
              <div className="lg:w-1/2">
                <div className="">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Our <span className="text-[#0A6B7E]">Insurance</span> Services
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-3">
                    We design and implement each project envisioning the demands of the growing healthcare market, focusing on Web 2.0 technology, cloud integration, and biometric data accumulation for insurance providers.
                  </p>
                </div>
                
                {/* Insurance Services */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
                  {insuranceServices.map((item, index) => (
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
                      alt="Insurance Industry Solutions"
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
                              <p class="text-[#07284C] font-semibold">Insurance Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Technology solutions for the insurance industry</p>
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

          {/* Insurance Solutions Section - SAME STYLE AS IMPORTANT POINTS */}
          <div className="py-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center mt-10">
              Insurance <span className="text-[#0A6B7E]">Solutions</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insuranceSolutions.map((solution, index) => (
                <div key={index} className="bg-white p-6 hover:border hover:rounded-xl hover:border-[#36B5A0] transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col h-full">
                    <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3">{solution.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 flex-1">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Points Section - SAME STYLE AS IT CONSULTING */}
          <div className="py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
              Key <span className="text-[#0A6B7E]">Advantages</span>
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

export default InsurancePage;