import React, { useState } from 'react';
import { 
  FaRocket, 
  FaGlobeAmericas,
  FaCaretDown,
  FaCogs,
  FaBullseye,
  FaEye,
  FaCheckCircle,
  FaAward,
  FaHandshake,
  FaUserTie,
  FaMoneyBillWave,
  FaTasks,
  FaSmile, 
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

// Icon Card Component (Same as CompanyPage)
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

// Core Values Card Component (Updated to match CompanyPage styling)
interface CoreValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 hover:rounded-xl hover:shadow-lg transition-shadow duration-300">
    <div className="mb-4 p-3 bg-[#07284C]/20 text-[#07284C] rounded-full">
      {icon}
    </div>
    <h3 className="text-med md:text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 text-xs md:text-sm">{description}</p>
  </div>
);

// Main Component
const WhyUsPage: React.FC = () => {

  const coreValues = [
    {
      icon: <FaUserTie className="text-2xl" />,
      title: "Professional & Technology",
      description: "Expertise combined with cutting-edge technology solutions"
    },
    {
      icon: <FaCheckCircle className="text-2xl" />,
      title: "Ownership",
      description: "Taking full responsibility for project success and client satisfaction"
    },
    {
      icon: <FaMoneyBillWave className="text-2xl" />,
      title: "Imperative Cost Saving",
      description: "Delivering significant cost efficiencies without compromising quality"
    },
    {
      icon: <FaTasks className="text-2xl" />,
      title: "Smooth Progress",
      description: "Ensuring seamless project execution and transition management"
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Client Success",
      description: "Making our clients' success our primary focus and measure of achievement"
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Growth",
      description: "Continuous improvement and expansion of capabilities"
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: "Quality",
      description: "Uncompromising commitment to excellence in all deliverables"
    },
    {
      icon: <FaSmile className="text-2xl" />,
      title: "Fun",
      description: "Creating an enjoyable and engaging work environment"
    }
  ];

  const growthSections = [
    {
      icon: <FaBullseye className="text-3xl" />,
      title: "Trusted Partnership",
      description: "Acting as your trusted advisor in enterprise solutions and services"
    },
    {
      icon: <FaEye className="text-3xl" />,
      title: "Sustainable Vision",
      description: "Executing solutions that enhance business verticals for present and future"
    },
    {
      icon: <FaGlobeAmericas className="text-3xl" />,
      title: "Global Excellence",
      description: "Worldwide IT solutions organization with proven track record since 2006"
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "Value-Driven Approach",
      description: "Our core values guide every action to ensure consistent excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Why Us Title - Same styling as CompanyPage */}
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
                Why Us
              </h1>
            </div>
            
            <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
              Your trusted partner in IT solutions and outsourcing services since 2006, 
              dedicated to driving business progress through innovation and expertise
            </p>
          </div>
        </div>

        {/* Image Gallery Section - Same as CompanyPage */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
          <div className="container mx-auto px-4">
            <div className="w-[80%] mx-auto">
              {/* Desktop layout - Show all 4 images */}
              <div className="hidden lg:flex justify-center items-end gap-6">
                {/* Image 1: Tall (h-60) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-1.png" 
                    alt="Strategic Planning at Microgate Technologies" 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Image 2: Short (h-42) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl mb-8">
                  <img 
                    src="/company-3.png" 
                    alt="Client Collaboration Process" 
                    className="w-full h-42 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Image 3: Tall (h-60) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-2.png" 
                    alt="Innovative Solutions Development" 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Image 4: Short (h-42) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl mb-8">
                  <img 
                    src="/company-4.png" 
                    alt="Project Excellence and Delivery" 
                    className="w-full h-42 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Tablet layout - Show only 2 images (1 & 2) - Aligned at bottom */}
              <div className="hidden md:flex lg:hidden justify-center items-end gap-6">
                {/* Image 1: Tall */}
                <div className="w-1/2 relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-1.png" 
                    alt="Strategic Planning at Microgate Technologies" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Image 2: Short */}
                <div className="w-1/2 relative group overflow-hidden rounded-xl shadow-2xl mb-8">
                  <img 
                    src="/company-3.png" 
                    alt="Client Collaboration Process" 
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Mobile layout - Show only 2 images (1 & 2) - Aligned at bottom */}
              <div className="flex md:hidden justify-center items-end gap-2">
                {/* Image 1 - Tall image */}
                <div className="w-[48%] relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-1.png" 
                    alt="Strategic Planning at Microgate Technologies" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Image 2 - Short image aligned at bottom */}
                <div className="w-[48%] relative group overflow-hidden rounded-xl shadow-2xl mb-6">
                  <img 
                    src="/company-3.png" 
                    alt="Client Collaboration Process" 
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to accommodate the images */}
      <div className="h-48 lg:h-56"></div>

      {/* Two Column Paragraph Section - Same styling as CompanyPage */}
      <section className="py-5  bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Single Title for both columns */}
          <div className="text-left mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Purpose & Direction
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Mission */}
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="p-3 bg-[#36B5A0]/10 rounded-lg mr-4 mt-1 flex-shrink-0">
                  <FaBullseye className="text-[#36B5A0] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-left">Mission</h3>
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed">
                    At <strong>Microgate Technologies</strong>, we act as your trusted advisor, specializing in enterprise 
                    solutions and services to help drive your business progress. We are committed to understanding 
                    your unique challenges and delivering tailored strategies that propel your organization forward.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Vision */}
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="p-3 bg-[#0A6B7E]/10 rounded-lg mr-4 mt-1 flex-shrink-0">
                  <FaEye className="text-[#0A6B7E] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-left">Vision</h3>
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed">
                    To execute sustainable solutions that enhance the performance and image of various 
                    business verticals, delivering unblemished services both now and for the future. We 
                    envision creating lasting impact through innovative approaches that stand the test of time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-left mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-3xl">
              Our values serve as a compass for our actions and describe how we conduct ourselves in the world. 
              Every day we are guided by these core principles that define who we are and how we work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            {coreValues.map((value, index) => (
              <CoreValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Section with Note - Same layout as CompanyPage */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column - Comes first on mobile/tablet, right side on desktop */}
            <div className="order-2 lg:order-2 space-y-2 -mt-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-left font-bold text-gray-800 mb-3">
                Our Guiding Principles
              </h3>
              
              <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed mb-6">
                At Microgate Technologies, our core values are not just words on a page - they are the 
                foundation of everything we do. They guide our decisions, shape our culture, and define 
                how we interact with our clients, partners, and each other.
              </p>
              <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                <div className="flex items-start">
                  <FaQuoteLeft className="text-blue-600 text-4xl mr-4 mt-1" />
                  <div>
                    <p className="text-[#07284C] text-sm md:text-med font-semibold text-left italic">
                      "Our values are the compass that guides our journey. They ensure that as we grow 
                      and evolve, we remain true to our commitment to excellence, integrity, and delivering 
                      exceptional value to every client we serve."
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
                    alt="Microgate Technologies Commitment to Excellence"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A6B7E]/70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section - Same styling as CompanyPage */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us <span className="text-[#36B5A0]">Different</span>
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto">
              Discover the unique advantages of partnering with Microgate Technologies for your enterprise needs
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

export default WhyUsPage;