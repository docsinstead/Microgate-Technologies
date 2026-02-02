import React from 'react';
import { 
  FaCheckCircle,
  FaUsers,
  FaCogs,
  FaCloud,
  FaDatabase,
  FaMobileAlt,
  FaClipboardCheck,
  FaFileContract,
  FaChartBar,
  FaUserTie
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MortgageSolutionsPage: React.FC = () => {
  const navigate = useNavigate();

  // Solutions Data with navigation paths - All 6 solutions except Mortgage Solutions
  const solutions = [
    {
      icon: <FaUsers className="text-2xl text-[#0A6B7E]" />,
      title: "IT Outsourcing",
      description: "Comprehensive outsourcing solutions for enhanced operational efficiency",
      path: "/it-outsourcing"
    },
    {
      icon: <FaClipboardCheck className="text-2xl text-[#36B5A0]" />,
      title: "Testing & QA",
      description: "Quality assurance and testing services for flawless software delivery",
      path: "/testing-qa"
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
      description: "Strategic IT advisory and technology consulting services",
      path: "/it-consulting"
    }
  ];

  // Mortgage Services
  const mortgageServices = [
    "Live Underwriting Services",
    "Post Closing Underwriting Services",
    "Loan Origination & Servicing",
    "Administrative Support",
    "Lead Generation",
    "Process Automation",
    "Quality Checks"
  ];

  // End-to-End Services
  const endToEndServices = [
    "Pre Underwriting",
    "Post Underwriting",
    "Post Closing QC",
    "Loan Onboarding",
    "Escrow Set Up",
    "Tax Research",
    "Lien Release",
    "Skip Tracing",
    "Property Preservation",
    "Appraisal Services",
    "Loss Mitigation",
    "REO Services"
  ];

  // Benefits
  const benefits = [
    "Industry experts with deep mortgage knowledge",
    "MBA certified management team",
    "Compliance-focused quality checks",
    "Cost-effective solutions with quick turnaround",
    "Adaptive to changing industry requirements"
  ];

  // Function to handle solution click
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

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto">
            {/* Title added */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
              Mortgage <span className="text-[#0A6B7E]">Solutions</span>
            </h2>
            
            {/* Single detailed paragraph - Using your provided content */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Committed to Client Success:</span> As a business process transformation enterprise, we deliver comprehensive technology-driven 
              solutions for mortgage servicing and offshore services, offering cost-effective, quick turnaround, and quality-driven outcomes. 
              We deeply understand the mortgage industry's evolving requirements and adapt our approaches to provide best-in-class solutions. Our team comprises 
              industry experts with extensive experience working with top-tier origination and servicing companies, while our management holds certifications from the 
              Mortgage Bankers Association's education arm in both servicing and origination ensuring we possess first-hand knowledge of the constantly evolving mortgage landscape and can effectively address your unique business challenges.
            </p>
          </div>

          {/* Solutions Portfolio Section */}
          <div className="py-3 mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-[#36B5A0]">Solutions Portfolio</span>
            </h2>
            
            {/* Grid Container - Showing 5 solutions */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                {/* Solution 1 */}
                <div 
                  onClick={() => handleSolutionClick(solutions[0].path)}
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
                        {solutions[0].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Solution 2 */}
                <div 
                  onClick={() => handleSolutionClick(solutions[1].path)}
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
                  onClick={() => handleSolutionClick(solutions[2].path)}
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
                  onClick={() => handleSolutionClick(solutions[3].path)}
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
                {/* Solution 5 - BI & Visualization */}
                <div 
                  onClick={() => handleSolutionClick(solutions[4].path)}
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
                
                {/* Solution 6 - IT Consulting */}
                <div 
                  onClick={() => handleSolutionClick(solutions[5].path)}
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

          {/* Mortgage Services Section */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-4 py-5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-10">
              {/* Left side: Title, paragraph, and mortgage services */}
              <div className="lg:w-1/2">
                <div className="">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Mortgage <span className="text-[#0A6B7E]">Services</span>
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-3">
                    We offer end-to-end mortgage servicing solutions with comprehensive coverage from pre-underwriting to REO services, ensuring regulatory compliance and quality throughout the process.
                  </p>
                </div>
                
                {/* Mortgage Services */}
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
                  {mortgageServices.map((item, index) => (
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
                      src="/solutions-img.png" 
                      alt="Mortgage Solutions"
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
                              <p class="text-[#07284C] font-semibold">Mortgage Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Comprehensive mortgage technology solutions</p>
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

          {/* End-to-End Services & Benefits Section */}
          <div className="py-5">
            <div className="flex flex-col lg:flex-row gap-6 mt-10">
              {/* Left Column: End-to-End Services */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                  End-to-End <span className="text-[#0A6B7E]">Mortgage Services</span>
                </h2>
                
                <div className="space-y-2">
                  {/* Divide services into pairs for 2 columns */}
                  {Array.from({ length: Math.ceil(endToEndServices.length / 2) }).map((_, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* First column item */}
                      {endToEndServices[rowIndex * 2] && (
                        <div className="bg-white p-4 hover:border hover:rounded-xl hover:border-[#36B5A0] transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-center">
                            <div className="p-2 bg-gray-50 rounded-lg mr-3">
                              {rowIndex * 2 % 3 === 0 ? <FaFileContract className="text-[#36B5A0]" /> : 
                              rowIndex * 2 % 3 === 1 ? <FaChartBar className="text-[#0A6B7E]" /> : 
                              <FaUserTie className="text-[#36B5A0]" />}
                            </div>
                            <h3 className="text-sm md:text-base font-semibold text-gray-800">{endToEndServices[rowIndex * 2]}</h3>
                          </div>
                        </div>
                      )}
                      
                      {/* Second column item */}
                      {endToEndServices[rowIndex * 2 + 1] && (
                        <div className="bg-white p-4 hover:border hover:rounded-xl hover:border-[#36B5A0] transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-center">
                            <div className="p-2 bg-gray-50 rounded-lg mr-3">
                              {(rowIndex * 2 + 1) % 3 === 0 ? <FaFileContract className="text-[#36B5A0]" /> : 
                              (rowIndex * 2 + 1) % 3 === 1 ? <FaChartBar className="text-[#0A6B7E]" /> : 
                              <FaUserTie className="text-[#36B5A0]" />}
                            </div>
                            <h3 className="text-sm md:text-base font-semibold text-gray-800">{endToEndServices[rowIndex * 2 + 1]}</h3>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column: Benefits */}
              <div className="lg:w-1/2">
                <div className="h-full">
                  <div className="text-center mb-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      Why Choose <span className="text-[#0A6B7E]">Our Solutions</span>
                    </h2>
                    <p className="text-xs md:text-sm text-gray-700">
                      Our due diligence process ensures we emphasize our understanding and knowledge of mortgage processes. We work closely with our clients, providing a clear plan of action to address all questions and concerns.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-start text-left">
                          <div>
                            <p className="text-xs md:text-sm text-gray-600">{benefit}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MortgageSolutionsPage;