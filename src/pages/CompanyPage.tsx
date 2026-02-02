import React, { useState } from 'react';
import { 
  FaRocket, 
  FaLightbulb, 
  FaGlobeAmericas,
  FaCaretDown,
  FaChartLine,
  FaCogs, 
  FaQuoteLeft} from 'react-icons/fa';

// Dropdown Component (same as you requested)
interface DropdownItem {
  title: string;
  content: React.ReactNode;
}

export const AboutDropdown: React.FC<{ items: DropdownItem[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            className="flex justify-between items-center w-full p-4 bg-blue-50 hover:bg-blue-100 text-blue-800 font-semibold rounded-lg transition-all duration-300"
            onClick={() => toggleDropdown(index)}
          >
            <span>{item.title}</span>
            <FaCaretDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-6 bg-white border border-t-0 border-blue-100 rounded-b-lg shadow-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Icon Card Component
interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 hover:rounded-xl hover:shadow-lg transition-shadow duration-300">
    <div className="mb-4 p-3 bg-[#36B5A0]/20 text-[#36B5A0] rounded-full">
      {icon}
    </div>
    <h3 className="text-med md:text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 text-xs md:text-sm">{description}</p>
  </div>
);

// Main Component
const CompanyPage: React.FC = () => {

  const growthSections = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Accelerated Growth",
      description: "Leverage our expertise to scale your operations rapidly and efficiently with proven methodologies."
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Cost Optimization",
      description: "Reduce operational costs by up to 40% while maintaining quality and efficiency standards."
    },
    {
      icon: <FaGlobeAmericas className="text-3xl" />,
      title: "Global Talent Access",
      description: "Tap into our worldwide network of IT professionals and domain experts."
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "Streamlined Operations",
      description: "Optimize your business processes with our customized technology solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with About Us Title */}
      <section 
        className="pt-28 pb-24 relative overflow-visible -mb-20"
        style={{
          background: 'linear-gradient(135deg, #36B5A0 0%, #0A6B7E 50%, #07284C 100%)'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center ">
            <div className="inline-flex items-center justify-center mb-3">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
                About Us
              </h1>
            </div>
            
            <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
              Pioneering IT solutions and outsourcing services since 2006, 
              transforming businesses worldwide through innovation and expertise
            </p>
          </div>
        </div>

        {/* Image Gallery Section - Positioned at bottom of hero section */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
          <div className="container mx-auto px-4">
            <div className="w-[80%] mx-auto">
              {/* Desktop layout - Show all 4 images */}
              <div className="hidden lg:flex justify-center items-end gap-6">
                {/* Image 1: Tall (h-60) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-1.png" 
                    alt="Team Meeting at Microgate Technologies" 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      {/* <p className="text-white font-semibold">Collaborative Innovation</p> */}
                    </div>
                  </div>
                  {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-[#07284C]">Teamwork</span>
                  </div> */}
                </div>
                
                {/* Image 2: Short (h-42) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl mb-8">
                  <img 
                    src="/company-3.png" 
                    alt="Employee Interview Process" 
                    className="w-full h-42 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    {/* <div className="p-4">
                      <p className="text-white font-semibold">Talent Acquisition</p>
                    </div> */}
                  </div>
                  {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-[#07284C]">Recruitment</span>
                  </div> */}
                </div>
                
                {/* Image 3: Tall (h-60) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-2.png" 
                    alt="Creative Brainstorming Session" 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    {/* <div className="p-4">
                      <p className="text-white font-semibold">Strategic Planning</p>
                    </div> */}
                  </div>
                  {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-[#07284C]">Innovation</span>
                  </div> */}
                </div>
                
                {/* Image 4: Short (h-42) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl mb-8">
                  <img 
                    src="/company-4.png" 
                    alt="Project Execution and Planning" 
                    className="w-full h-42 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    {/* <div className="p-4">
                      <p className="text-white font-semibold">Project Excellence</p>
                    </div> */}
                  </div>
                  {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-[#07284C]">Execution</span>
                  </div> */}
                </div>
              </div>

              {/* Tablet layout - Show only 2 images (1 & 2) - Aligned at bottom */}
              <div className="hidden md:flex lg:hidden justify-center items-end gap-6">
                {/* Image 1: Tall */}
                <div className="w-1/2 relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-1.png" 
                    alt="Team Meeting at Microgate Technologies" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      {/* <p className="text-white font-semibold">Collaborative Innovation</p> */}
                    </div>
                  </div>
                  {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-[#07284C]">Teamwork</span>
                  </div> */}
                </div>
                
                {/* Image 2: Short */}
                <div className="w-1/2 relative group overflow-hidden rounded-xl shadow-2xl mb-8">
                  <img 
                    src="/company-3.png" 
                    alt="Employee Interview Process" 
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    {/* <div className="p-4">
                      <p className="text-white font-semibold">Talent Acquisition</p>
                    </div> */}
                  </div>
                  {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-[#07284C]">Recruitment</span>
                  </div> */}
                </div>
              </div>

              {/* Mobile layout - Show only 2 images (1 & 2) - Aligned at bottom */}
              <div className="flex md:hidden justify-center items-end gap-2">
                {/* Image 1 - Tall image */}
                <div className="w-[48%] relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-1.png" 
                    alt="Team Meeting at Microgate Technologies" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-xs font-medium text-[#07284C]">Teamwork</span>
                  </div> */}
                </div>
                
                {/* Image 2 - Short image aligned at bottom */}
                <div className="w-[48%] relative group overflow-hidden rounded-xl shadow-2xl mb-6">
                  <img 
                    src="/company-3.png" 
                    alt="Employee Interview Process" 
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-xs font-medium text-[#07284C]">Recruitment</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to accommodate the images */}
      <div className="h-48 lg:h-56"></div>

      {/* Two Column Paragraph Section */}
      <section className="py-5  bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Single Title for both columns */}
          <div className="text-left mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Global IT Solutions Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - One Detailed Paragraph */}
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="p-3 bg-[#36B5A0]/10 rounded-lg mr-4 mt-1 flex-shrink-0">
                  <FaGlobeAmericas className="text-[#36B5A0] text-xl" />
                </div>
                <div>
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed line-clamp-7">
                    <strong>Microgate Technologies Private Ltd</strong> is a worldwide enhanced outsourced IT services and solutions organization. 
                    Since 2006, we have been helping our customers accomplish their business targets by effectively outsourcing their non-core 
                    business processes and delivering enterprise solutions. We have executed numerous engagements for diverse customers by 
                    utilizing our people, processes, and technology to propel our customers toward achieving their business potential.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - One Detailed Paragraph */}
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="p-3 bg-[#0A6B7E]/10 rounded-lg mr-4 mt-1 flex-shrink-0">
                  <FaLightbulb className="text-[#0A6B7E] text-xl" />
                </div>
                <div>
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed line-clamp-7">
                    <strong>Microgate Technologies</strong> is a technology, development, and outsourcing association in the IT and Software industry. 
                    We provide both programming services and products, supplying a comprehensive range of IT applications solutions and services 
                    including e-Business solutions, ERP implementation and support, application development and maintenance, software customizations, 
                    and remote database administration services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column - Comes first on mobile/tablet, right side on desktop */}
            <div className="order-2 lg:order-2 space-y-2 -mt-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-left font-bold text-gray-800 mb-3">
                Foundation & Legacy
              </h3>
              
              <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed mb-6">
                Microgate Technologies was established by highly qualified professionals in Information Technology 
                with a vision to provide innovative, cost-effective, and quality services and solutions worldwide. 
                We address our clients' needs with exceptional expertise and flexible solutions tailored to their 
                requirements at an affordable cost.
              </p>
              <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                <div className="flex items-start">
                  <FaQuoteLeft className="text-blue-600 text-4xl mr-4 mt-1" />
                  <div>
                    <p className="text-[#07284C] text-sm md:text-med font-semibold text-left italic">
                      We consistently deliver cost-effective, value-driven solutions through the integration 
                      of people, processes, and innovative technology. Our vast experience in offshore 
                      outsourcing has matured us into a reliable partner providing substantial value and 
                      significant savings to our clients.
                    </p>
                    <p className="text-blue-700 text-sm md:text-med font-medium mt-3">— Microgate Technologies Leadership</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Column - Comes second on mobile/tablet, left side on desktop */}
            <div className="order-1 lg:order-1">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div className="h-64 md:h-80 relative">
                  <img 
                    src="/company-5.png" 
                    alt="Microgate Technologies Journey Timeline"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A6B7E]/70"></div>
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <FaHistory className="text-white text-8xl opacity-30" />
                  </div> */}
                </div>
                {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A6B7E]/90 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">18+ Years of Excellence</h3>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Help You Grow Section */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We Help You Grow <span className="text-[#36B5A0]">Faster & Bigger</span>
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto">
              Partner with us to accelerate your business growth with our comprehensive IT solutions 
              and outsourcing expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12">
            {growthSections.map((section, index) => (
              <IconCard
                key={index}
                icon={section.icon}
                title={section.title}
                description={section.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;