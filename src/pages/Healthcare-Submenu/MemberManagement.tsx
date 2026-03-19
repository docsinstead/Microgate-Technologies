import React from 'react';
import { 
  FaCheckCircle,
  FaChartLine,
  FaMobileAlt,
  FaShieldAlt,
  FaLaptopMedical,
  FaBriefcase,
  FaStethoscope,
  FaTablets,
  FaUserMd
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MemberManagement: React.FC = () => {
  const navigate = useNavigate();

  // Healthcare Portfolio - 3 submenus (Member Management is current page, so commented out)
  const healthcarePortfolio = [
      {
        icon: <FaChartLine className="text-2xl text-[#0A6B7E]" />,
        title: "Revenue Cycle Management",
        description: "Comprehensive RCM services from patient registration to payment collection, helping reduce denials and accelerate reimbursements.",
        path: "/revenue-cycle-management"
      },
      {
        icon: <FaBriefcase className="text-2xl text-[#36B5A0]" />,
        title: "Coding / Health Information",
        description: "Certified coders ensuring proper ICD-10, CPT, and HCPCS coding to prevent rejections and ensure compliance with industry standards.",
        path: "/coding-health-information-management"
      },
      {
        icon: <FaShieldAlt className="text-2xl text-[#0A6B7E]" />,
        title: "Claims Management",
        description: "End-to-end claims processing with automation and cloud-based tools for precision, speed, and transparency at every stage.",
        path: "/claims-management"
      },
      // {
      //   icon: <FaUsers className="text-2xl text-[#36B5A0]" />,
      //   title: "Member Management",
      //   description: "Robust member enrollment, eligibility, and communication solutions with real-time access to accurate member profiles and policy details.",
      //   path: "/health-care/member-management"
      // }
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

  // Function to handle healthcare portfolio click
  const handlePortfolioClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='/member-management' className="min-h-screen bg-gray-50">
        
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
              <span className="text-[#0A6B7E]">Member Management</span>
            </h2>
            
            {/* Single detailed paragraph - 4-5 lines - MATCHING IT CONSULTING */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Microgate Technologies</span> offers a robust Member Management solution that simplifies how healthcare organizations handle member enrollment, eligibility, and communications. Our platform enables real-time access to accurate member profiles, policy details, and benefit information—empowering support teams to provide better service with less effort. From onboarding new members to updating demographic data, the system ensures every interaction is efficient and compliant. By automating routine tasks and integrating with other core systems like claims, billing, and provider networks, Microgate Technologies reduces administrative workload while improving data accuracy. The result is a seamless experience for both internal teams and members across the entire care lifecycle.
            </p>

            {/* Second paragraph */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mt-4">
              Built on a secure, scalable cloud infrastructure, our Member Management platform supports high volumes of users without compromising performance or data protection. Features such as automated renewals, member portals, and communication tools allow for better engagement and self-service options. Smart alerts and analytics offer insights into member behavior, helping organizations tailor services and address potential issues early. Fully HIPAA-compliant and configurable to your specific workflows, Microgate Technologies ensures your member data is managed with the highest standards of privacy and reliability. Whether you're a payer, TPA, or provider, our solution helps you build stronger, more informed relationships with your member base.
            </p>

            {/* Benefits Section */}
            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <h4 className="text-sm font-semibold text-[#0A6B7E] mb-2">Member Enrollment & Onboarding</h4>
                  <p className="text-xs text-gray-600">Streamline the onboarding process with digital forms, real-time validation, and automated approvals. Quickly register new members with minimal manual input.</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <h4 className="text-sm font-semibold text-[#36B5A0] mb-2">Eligibility & Coverage Management</h4>
                  <p className="text-xs text-gray-600">Real-time verification of member eligibility and coverage details, ensuring accurate benefits administration and reducing claim denials.</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <h4 className="text-sm font-semibold text-[#0A6B7E] mb-2">Member Profile Management</h4>
                  <p className="text-xs text-gray-600">Centralized member profiles with complete demographic, policy, and communication history for personalized service delivery.</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 md:col-span-3">
                  <h4 className="text-sm font-semibold text-[#36B5A0] mb-2">Renewals & Re-enrollment</h4>
                  <p className="text-xs text-gray-600">Automated renewal processes with timely notifications, seamless re-enrollment options, and retention tracking to maintain member relationships.</p>
                </div>
              </div>
            </div>
          </div>

           {/* Healthcare Portfolio Section - Added */}
          <div className="py-3 mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-[#36B5A0]">Healthcare Portfolio</span>
            </h2>
            
            {/* Single Row Grid Container - Showing 3 healthcare submenus (Claims Management is current page, so removed) */}
            <div className="space-y-4">
              {/* Single Row with 3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {/* Healthcare Item 1 - Revenue Cycle Management (index 0) */}
                <div 
                  onClick={() => handlePortfolioClick(healthcarePortfolio[0].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group relative"
                >
                  <div className="space-y-2">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-sm md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {healthcarePortfolio[0].title}
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
                        {healthcarePortfolio[0].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Healthcare Item 2 - Coding / Health Information (index 1) */}
                <div 
                  onClick={() => handlePortfolioClick(healthcarePortfolio[1].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {healthcarePortfolio[1].title}
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
                        {healthcarePortfolio[1].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Healthcare Item 3 - Member Management (index 2) */}
                <div 
                  onClick={() => handlePortfolioClick(healthcarePortfolio[2].path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-med md:text-lg font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {healthcarePortfolio[2].title}
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
                        {healthcarePortfolio[2].description}
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

export default MemberManagement;