import React from 'react';
import { 
  FaCheckCircle,
  FaUsers,
  FaCloud,
  FaDatabase,
  FaMobileAlt,
  FaShieldAlt,
  FaBriefcase,
  FaClock,
  FaCogs,
  FaTachometerAlt,
  FaServer,
  FaNetworkWired
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TestingQAPage: React.FC = () => {
  const navigate = useNavigate();

  // Solutions Data with navigation paths - Removed Testing & QA (current page)
  const solutions = [
    {
      icon: <FaUsers className="text-2xl text-[#0A6B7E]" />,
      title: "IT Outsourcing",
      description: "Comprehensive outsourcing solutions for enhanced operational efficiency",
      path: "/it-outsourcing"
    },
    {
      icon: <FaBriefcase className="text-2xl text-[#0A6B7E]" />,
      title: "Mortgage Solutions",
      description: "Specialized technology solutions for the mortgage and banking industry",
      path: "/mortgage-solutions"
    },
    {
      icon: <FaMobileAlt className="text-2xl text-[#36B5A0]" />,
      title: "Power Apps",
      description: "Custom application development for business process automation",
      path: "/power-apps"
    },
    {
      icon: <FaCloud className="text-2xl text-[#0A6B7E]" />,
      title: "Cloud Solutions",
      description: "Cloud migration, implementation, and management services",
      path: "/cloud-solutions"
    },
    {
      icon: <FaDatabase className="text-2xl text-[#36B5A0]" />,
      title: "BI & Visualization",
      description: "Business intelligence and data visualization for informed decision-making",
      path: "/bi-visualization"
    },
    {
      icon: <FaCogs className="text-2xl text-[#0A6B7E]" />,
      title: "IT Consulting",
      description: "Strategic IT consulting services for business transformation",
      path: "/it-consulting"
    }
    // Testing & QA solution has been removed as it's the current page
  ];

  // Specialized Testing Services
  const specializedTestingServices = [
    "Performance Testing",
    "Packaged Application Testing",
    "Data Warehousing Testing",
    "Localization Testing",
    "SOA Testing",
    "Test Automation",
    "Virtualization in Testing",
    "Mainframe Testing"
  ];

  // Key Benefits
  const keyBenefits = [
    {
      icon: <FaTachometerAlt className="text-xl text-[#36B5A0]" />,
      title: "Strategic Function",
      description: "Testing comprises 30% of SDLC, saving millions by finding defects early"
    },
    {
      icon: <FaClock className="text-xl text-[#0A6B7E]" />,
      title: "Timely Delivery",
      description: "Ensure application/product release on time, within budget with agreed confidence levels"
    },
    {
      icon: <FaShieldAlt className="text-xl text-[#36B5A0]" />,
      title: "Quality Assurance",
      description: "Functional assurance, better quality & enhanced performance for competitive advantage"
    },
    {
      icon: <FaServer className="text-xl text-[#0A6B7E]" />,
      title: "Labs on Hire",
      description: "State-of-the-art testing labs on pay-per-use model with sophisticated capabilities"
    }
  ];

  // Test Consultancy Services
  const testConsultancyServices = [
    "High Availability Solutions",
    "Scalability Testing",
    "Disaster Recovery Testing",
    "Multi-location System Testing",
    "Operational Readiness Testing",
    "Business Continuity Testing"
  ];

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
              We Build Unique & Custom Solutions
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8">
              Functional & technology enabled solutions to solve business problems
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - Same padding and layout as IT Consulting */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto">
            {/* Title added - Same font sizes as IT Consulting */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
              Testing & <span className="text-[#0A6B7E]">Quality Assurance</span>
            </h2>
            
            {/* Single detailed paragraph - Same text size as IT Consulting */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">The Testing phase comprises nearly 30% of the total software development lifecycle</span> and has emerged as a strategic function. Every defect found early saves millions in revenue for companies. With constant pressure to release products faster, Testing has become critical to ensure timely delivery within budget. Our Microgate Technologies dedicated Testing Services ensure measurable business outcomes through improved quality processes and specialized testing practices including Automation, Performance Testing, and SOA Testing for transforming critical processes.
            </p>
          </div>

          {/* Modified Two Columns Solutions Section - Same layout as IT Consulting */}
          <div className="py-3 mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-[#36B5A0]">Solutions Portfolio</span>
            </h2>
            
            {/* 3 Rows Grid Container - Same grid structure as IT Consulting */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                {/* Solution 1 */}
                <div 
                  onClick={() => navigate(solutions[0].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group relative"
                >
                  <div className="space-y-2">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-sm md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {solutions[0].title}
                        </h3>
                      </div>
                      {/* Upward-facing arrow with border radius - Same size as IT Consulting */}
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
                        {solutions[0].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Solution 2 */}
                <div 
                  onClick={() => navigate(solutions[1].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {solutions[1].title}
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
                        {solutions[1].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                {/* Solution 3 */}
                <div 
                  onClick={() => navigate(solutions[2].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {solutions[2].title}
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
                        {solutions[2].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Solution 4 */}
                <div 
                  onClick={() => navigate(solutions[3].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {solutions[3].title}
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
                        {solutions[3].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                {/* Solution 5 */}
                <div 
                  onClick={() => navigate(solutions[4].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {solutions[4].title}
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
                        {solutions[4].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Solution 6 */}
                <div 
                  onClick={() => navigate(solutions[5].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {solutions[5].title}
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
                        {solutions[5].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testing Services Section - Same padding and layout as IT Consulting */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-4 py-5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-10">
              {/* Left side: Title, paragraph, and specialized services */}
              <div className="lg:w-1/2">
                <div className="">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Our <span className="text-[#0A6B7E]">Testing Services</span> Portfolio
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-3">
                    Our Microgate Technologies Testing Services focus on deployment readiness to ensure competitive advantage through Functional Assurance, Better Quality & Enhanced Performance with recurring cost savings on testing efforts.
                  </p>
                </div>
                
                {/* Specialized Testing Services - Same grid as IT Consulting */}
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
                  {specializedTestingServices.map((item, index) => (
                    <div key={index} className="flex items-start text-left bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <FaCheckCircle className="text-[#36B5A0] mr-3 mt-1 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right side: Image - Same layout as IT Consulting */}
              <div className="lg:w-1/2">
                <div className="p-4 h-full flex items-center justify-center">
                  {/* Actual image from public folder */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src="/solutions-img.png" 
                      alt="Testing & QA Solutions"
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
                              <p class="text-[#07284C] font-semibold">Testing & QA Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Comprehensive testing services for flawless software delivery</p>
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

          {/* Test Consultancy Section - Adjusted to match IT Consulting spacing */}
          <div className="bg-white rounded-xl p-4 mb-6 shadow-md border-l-4 border-[#0A6B7E] mt-6">
            <div className="flex items-start">
              <FaNetworkWired className="text-2xl text-[#0A6B7E] mr-4 mt-1" />
              <div className="w-full">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Test Consultancy Services</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {testConsultancyServices.map((service, index) => (
                    <div key={index} className="flex items-center text-left">
                      <div className="w-2 h-2 bg-[#36B5A0] rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 text-left text-sm">
                  Our Test Consultancy service offerings bring key focused solutions for high availability, scalability, and quick disaster recovery to keep systems and applications operational - forming the bloodline to support day-to-day businesses distributed across multiple locations.
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits Section - Same layout as IT Consulting */}
          <div className="py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center mt-10">
              Key <span className="text-[#0A6B7E]">Benefits</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyBenefits.map((point, index) => (
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

export default TestingQAPage;