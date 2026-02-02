import React from 'react';
import { 
  FaCheckCircle,
  FaChartLine,
  FaUsers,
  FaCogs,
  FaCloud,
  FaMobileAlt,
  FaShieldAlt,
  FaLaptopMedical,
  FaBriefcase,
  FaStethoscope,
  FaTablets,
  FaUserMd
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HealthcarePage: React.FC = () => {
  const navigate = useNavigate();

  // Industries Data with navigation paths - Removed Healthcare from portfolio
  const industries = [
    {
      icon: <FaChartLine className="text-2xl text-[#0A6B7E]" />,
      title: "Technology",
      description: "Innovative technology solutions for digital transformation and business growth",
      path: "/technology"
    },
    {
      icon: <FaBriefcase className="text-2xl text-[#36B5A0]" />,
      title: "Financial Services",
      description: "Specialized solutions for banking, insurance, and financial institutions",
      path: "/financial-services"
    },
    {
      icon: <FaUsers className="text-2xl text-[#0A6B7E]" />,
      title: "Consumer Goods",
      description: "Retail and consumer product solutions for enhanced customer experiences",
      path: "/consumer-goods"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-[#36B5A0]" />,
      title: "Insurance",
      description: "Technology solutions for insurance providers and risk management",
      path: "/insurance"
    },
    {
      icon: <FaCloud className="text-2xl text-[#0A6B7E]" />,
      title: "Telecommunication",
      description: "Communication technology solutions for telecom providers",
      path: "/telecommunication"
    },
    {
      icon: <FaCogs className="text-2xl text-[#36B5A0]" />,
      title: "Hospitality",
      description: "Technology solutions for hotels, restaurants, and travel industry",
      path: "/hospitality"
    }
    // Healthcare is the current page, so it's removed from portfolio
  ];

  // Healthcare Services
  const healthcareServices = [
    "Patient Care Management Systems",
    "Electronic Health Records (EHR)",
    "Healthcare Mobility Solutions",
    "Remote Health Monitoring",
    "Healthcare Branding & Marketing"
  ];

  // Important Points for Healthcare
  const importantPoints = [
    {
      icon: <FaUserMd className="text-xl text-[#36B5A0]" />,
      title: "Patient-Centered Solutions",
      description: "Digital technologies focused on improving patient care quality and healthcare processes"
    },
    {
      icon: <FaTablets className="text-xl text-[#0A6B7E]" />,
      title: "Cutting-Edge Expertise",
      description: "Over 4 years of expertise in providing technology solutions for healthcare businesses"
    },
    {
      icon: <FaMobileAlt className="text-xl text-[#36B5A0]" />,
      title: "Scalable & Secure",
      description: "Building scalable and secure software solutions for small to medium healthcare companies"
    },
    {
      icon: <FaLaptopMedical className="text-xl text-[#0A6B7E]" />,
      title: "Long-Term Partnership",
      description: "Your strategic IT partner for scaling up technology infrastructure from websites to complex applications"
    }
  ];

  // Healthcare Application Services
  const healthcareApps = [
    {
      icon: <FaStethoscope className="text-2xl text-[#0A6B7E]" />,
      title: "Healthcare Application Development",
      description: "Automating and streamlining medical practices for improved performance and patient care management"
    },
    {
      icon: <FaMobileAlt className="text-2xl text-[#36B5A0]" />,
      title: "Healthcare Mobility Solutions",
      description: "Scalable, secure, and device-agnostic mobile apps for patient engagement and field force management"
    },
    {
      icon: <FaChartLine className="text-2xl text-[#0A6B7E]" />,
      title: "Healthcare Branding",
      description: "Creating distinct personas for healthcare services with proper brand positioning to maximize ROI"
    }
  ];

  // Function to handle industry click
  const handleIndustryClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
        
      {/* Hero Section with Video Background - MATCHING IT CONSULTING */}
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
              Digital Transformation in Healthcare
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8">
              Innovative Technology Solutions for Modern Healthcare Challenges
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - MATCHING IT CONSULTING LAYOUT */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto">
            {/* Title added */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
              <span className="text-[#0A6B7E]">Healthcare</span> Industry Solutions
            </h2>
            
            {/* Single detailed paragraph - 4-5 lines - MATCHING IT CONSULTING */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Our Microgate Technologies</span> recognizes that the healthcare industry is on the cusp of a digital revolution, with organizations from local clinics to large pharmaceutical companies investing substantially in digital technologies to improve processes, cut costs, speed up research, and enhance productivity. With over 4 years of expertise in providing technology solutions across industry verticals, our healthcare application development solutions are specifically designed for small and medium healthcare companies seeking scalable, secure software solutions to improve patient care quality. From building websites to developing complex web and mobile applications, we serve as your long-term IT partner for scaling up your technology infrastructure.
            </p>
          </div>

          {/* Modified Two Columns Industries Section - MATCHING IT CONSULTING */}
<div className="py-3 mt-8">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
    Our <span className="text-[#36B5A0]">Industries Portfolio</span>
  </h2>
  
  {/* 3 Rows Grid Container - Now showing only 6 industries - MATCHING IT CONSULTING */}
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

          {/* Healthcare Services Section - MATCHING IT CONSULTING */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-4 py-5 ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-10">
              {/* Left side: Title, paragraph, and services */}
              <div className="lg:w-1/2">
                <div className="">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Our <span className="text-[#0A6B7E]">Healthcare</span> Services
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-3">
                    We provide comprehensive technology solutions for healthcare organizations, from patient care management to healthcare branding, designed to improve operational efficiency and patient outcomes.
                  </p>
                </div>
                
                {/* Healthcare Services - MATCHING IT CONSULTING */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
                  {healthcareServices.map((item, index) => (
                    <div key={index} className="flex items-start text-left bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <FaCheckCircle className="text-[#36B5A0] mr-3 mt-1 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right side: Image - MATCHING IT CONSULTING */}
              <div className="lg:w-1/2 ">
                <div className=" p-4 h-full flex items-center justify-center">
                  {/* Actual image from public folder */}
                  <div className="relative w-full h-full 1 overflow-hidden">
                    <img 
                      src="/industry-img.png" 
                      alt="Healthcare Technology Solutions"
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
                              <p class="text-[#07284C] font-semibold">Healthcare Technology Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Digital transformation for modern healthcare challenges</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare Application Services Section */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Specialized <span className="text-[#0A6B7E]">Healthcare Solutions</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {healthcareApps.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:border-[#36B5A0] transition-all duration-300">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="p-3 bg-gray-50 rounded-lg mb-4">
                        {service.icon}
                      </div>
                      <h5 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h5>
                      <p className="text-gray-600 flex-1">{service.description}</p>
                      {index === 0 && (
                        <div className="mt-4 text-sm text-gray-500">
                          Includes: Patient Appointment Scheduler, Remote Health Monitoring, EHR/EMR Systems
                        </div>
                      )}
                      {index === 1 && (
                        <div className="mt-4 text-sm text-gray-500">
                          Includes: iOS & Android apps, Patient engagement, M-commerce, Field Force Management
                        </div>
                      )}
                      {index === 2 && (
                        <div className="mt-4 text-sm text-gray-500">
                          Includes: Brand positioning, Design, User manuals, Event marketing
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Points Section - MATCHING IT CONSULTING */}
          <div className="py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center mt-10">
              Our <span className="text-[#0A6B7E]">Healthcare</span> Advantages
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

export default HealthcarePage;