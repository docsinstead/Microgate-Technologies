import { Target } from 'lucide-react';
import React, { useState } from 'react';
import { 
  FaLightbulb, 
  FaGlobeAmericas,
  FaCaretDown,
  FaCogs,
  FaBullseye,
  FaStar,
  FaUsers,
  FaCheckCircle,
  FaAward,
  FaHandshake,
  FaShieldAlt, 
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

// Vision Pillar Card Component
interface VisionPillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const VisionPillarCard: React.FC<VisionPillarCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="mb-4 p-3 bg-[#0A6B7E]/10 text-[#0A6B7E] rounded-full">
      {icon}
    </div>
    <h3 className="text-med md:text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-xs md:text-sm">{description}</p>
  </div>
);

// Main Component
const VisionPage: React.FC = () => {

  const visionPillars = [
    {
      icon: <Target className="text-2xl" />,
      title: "Customer First Focus",
      description: "Customer is our first priority – we come together to deliver the best to our clients"
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Trusted Partnerships",
      description: "Focus on client's business performance and build long-term trusted relationships"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Talent Excellence",
      description: "Attract best talent and retain them to effectively deliver client value"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Integrity & Respect",
      description: "Maintain high ethical standards and approach others with respect"
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Innovation Leadership",
      description: "Develop new ideas, be innovative and demonstrate thought leadership"
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: "Industry Excellence",
      description: "Excel in fulfilling the needs of clients, partners and employees"
    }
  ];

  const growthSections = [
    {
      icon: <FaBullseye className="text-3xl" />,
      title: "Dynamic Vision Achievement",
      description: "Actively understanding and implementing our vision through innovative solutions"
    },
    {
      icon: <FaGlobeAmericas className="text-3xl" />,
      title: "Global Solutions Provider",
      description: "Delivering proactive, efficient, cost-effective quality solutions worldwide"
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Process Excellence",
      description: "Strict adherence to documentation, quality control and client communication"
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "Resource Optimization",
      description: "Highly qualified resources at optimal costs with broad offshore capabilities"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Vision Title - Same as Company Page */}
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
                Our Vision
              </h1>
            </div>
            
            <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
              To be a premier information technology solutions and services provider, 
              excelling in fulfilling client needs through innovation and excellence
            </p>
          </div>
        </div>

        {/* Image Gallery Section - Same as Company Page */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
          <div className="container mx-auto px-4">
            <div className="w-[80%] mx-auto">
              {/* Desktop layout - Show all 4 images */}
              <div className="hidden lg:flex justify-center items-end gap-6">
                {/* Image 1: Tall (h-60) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-1.png" 
                    alt="Strategic Vision Planning at Microgate Technologies" 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4"></div>
                  </div>
                </div>
                
                {/* Image 2: Short (h-42) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl mb-8">
                  <img 
                    src="/company-3.png" 
                    alt="Client-Centric Approach" 
                    className="w-full h-42 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"></div>
                </div>
                
                {/* Image 3: Tall (h-60) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-2.png" 
                    alt="Innovation and Excellence" 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"></div>
                </div>
                
                {/* Image 4: Short (h-42) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl mb-8">
                  <img 
                    src="/company-4.png" 
                    alt="Global Solutions Delivery" 
                    className="w-full h-42 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"></div>
                </div>
              </div>

              {/* Tablet layout - Show only 2 images (1 & 2) - Aligned at bottom */}
              <div className="hidden md:flex lg:hidden justify-center items-end gap-6">
                {/* Image 1: Tall */}
                <div className="w-1/2 relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-1.png" 
                    alt="Strategic Vision Planning at Microgate Technologies" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4"></div>
                  </div>
                </div>
                
                {/* Image 2: Short */}
                <div className="w-1/2 relative group overflow-hidden rounded-xl shadow-2xl mb-8">
                  <img 
                    src="/company-3.png" 
                    alt="Client-Centric Approach" 
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"></div>
                </div>
              </div>

              {/* Mobile layout - Show only 2 images (1 & 2) - Aligned at bottom */}
              <div className="flex md:hidden justify-center items-end gap-2">
                {/* Image 1 - Tall image */}
                <div className="w-[48%] relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-1.png" 
                    alt="Strategic Vision Planning at Microgate Technologies" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Image 2 - Short image aligned at bottom */}
                <div className="w-[48%] relative group overflow-hidden rounded-xl shadow-2xl mb-6">
                  <img 
                    src="/company-3.png" 
                    alt="Client-Centric Approach" 
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to accommodate the images - Same as Company Page */}
      <div className="h-48 lg:h-56"></div>

      {/* Two Column Paragraph Section - Same layout as Company Page */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Single Title for both columns - Same as Company Page */}
          <div className="text-left mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Vision Statement
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - One Detailed Paragraph - Same styling as Company Page */}
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="p-3 bg-[#36B5A0]/10 rounded-lg mr-4 mt-1 flex-shrink-0">
                  <FaBullseye className="text-[#36B5A0] text-xl" />
                </div>
                <div>
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed line-clamp-7">
                    <strong>Microgate Technologies Private Ltd</strong> aims to dynamically understand and implement 
                    our vision by delivering innovative, proactive, efficient, cost-effective, quality solutions 
                    and services to our customers worldwide. We build a strong internal value system that provides 
                    transparency and integrity in all transactions among our employees, partners, and clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - One Detailed Paragraph - Same styling as Company Page */}
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="p-3 bg-[#0A6B7E]/10 rounded-lg mr-4 mt-1 flex-shrink-0">
                  <FaStar className="text-[#0A6B7E] text-xl" />
                </div>
                <div>
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed line-clamp-7">
                    To be a <strong>premier information technology solutions and services provider</strong>, 
                    excelling in fulfilling the needs of clients, partners and employees by delivering the 
                    most efficient and effective services and solutions, utilizing the best resources available 
                    in the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Pillars Section - Updated with same styling */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pillars of <span className="text-[#36B5A0]">Our Vision</span>
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto">
              The foundation upon which we build our success and drive our organization forward
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4 lg:gap-6 mb-12">
            {visionPillars.map((pillar, index) => (
              <VisionPillarCard
                key={index}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Operational Excellence Section - Same layout as Company Page's Foundation section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column - Comes first on mobile/tablet, left side on desktop */}
            <div className="order-1 lg:order-1">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div className="h-64 md:h-80 relative">
                  <img 
                    src="/company-5.png" 
                    alt="Microgate Technologies Vision in Action"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A6B7E]/70"></div>
                </div>
              </div>
            </div>

            {/* Content Column - Comes second on mobile/tablet, right side on desktop */}
            <div className="order-2 lg:order-2 space-y-2 -mt-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-left font-bold text-gray-800 mb-3">
                Operational Excellence
              </h3>
              
              <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed mb-6">
                Our organization collective comprises veteran industry directors with decades of program/project 
                management, utilization, and product development experience. The team brings strong industry 
                knowledge, business transformation expertise, business process capability, and direct execution 
                experience to every engagement.
              </p>
              
              <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                <div className="flex items-start">
                  <FaQuoteLeft className="text-blue-600 text-4xl mr-4 mt-1" />
                  <div>
                    <p className="text-[#07284C] text-sm md:text-med font-semibold text-left italic">
                      "We provide highly qualified and experienced resources at optimal costs, meeting any 
                      challenging schedule using our broad pool of offshore capabilities. Our process enforces 
                      strict adherence to documentation, quality control, and client communication standards."
                    </p>
                    <p className="text-blue-700 text-sm md:text-med font-medium mt-3">— Microgate Technologies Commitment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Our Vision Section - Same as Company Page's "We Help You Grow" section */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We Deliver <span className="text-[#36B5A0]">Our Vision</span>
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto">
              Transforming our vision into tangible results through strategic execution and commitment
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

export default VisionPage;