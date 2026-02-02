import React, { useState } from 'react';
import { 
  FaCaretDown,
  FaCogs,
  FaUsers,
  FaHandshake,
  FaBullseye,
  FaChartBar,
  FaDatabase,
  FaProjectDiagram,
  FaHeadset, 
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
const MissionPage: React.FC = () => {

  const engagementModels = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Dedicated Resource Model",
      description: "We provide committed resources who act as your virtual workforce, available for your projects at short notice."
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Flexible Engagement Models",
      description: "Diverse commitment models tailored to address varied client needs and requirements worldwide."
    },
    {
      icon: <FaChartBar className="text-3xl" />,
      title: "Power Business Decisions",
      description: "Transforming information into impact with reusable structures and pre-built applications for faster results."
    },
    {
      icon: <FaProjectDiagram className="text-3xl" />,
      title: "Project-Based Delivery",
      description: "Time-bound project engagement models based on size, scalability, and movement requirements."
    }
  ];

  const deliveryFeatures = [
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "Dedicated Project Management",
      description: "Full-time project managers assigned to oversee offshore team operations and progress"
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: "Secure Offshore Operations",
      description: "Teams work in secure, separate environments ensuring data protection and confidentiality"
    },
    {
      icon: <FaBullseye className="text-2xl" />,
      title: "Regular Progress Updates",
      description: "Daily and weekly progress reporting with continuous communication and transparency"
    },
    {
      icon: <FaCogs className="text-2xl" />,
      title: "Customized Solutions",
      description: "Adaptable models based on client essentials with tailored approaches to specific needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Mission Title - MATCHED TO COMPANY PAGE */}
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
                Engagement & Delivery Models
              </h1>
            </div>
            
            <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
              Pioneering flexible IT engagement models since 2006, transforming how businesses 
              access global talent and achieve competitive advantages in changing markets
            </p>
          </div>
        </div>

        {/* Image Gallery Section - Positioned at bottom of hero section - MATCHED TO COMPANY PAGE */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
          <div className="container mx-auto px-4">
            <div className="w-[80%] mx-auto">
              {/* Desktop layout - Show all 4 images */}
              <div className="hidden lg:flex justify-center items-end gap-6">
                {/* Image 1: Tall (h-60) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-1.png" 
                    alt="Team Collaboration at Microgate Technologies" 
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
                    alt="Client Engagement Process" 
                    className="w-full h-42 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"></div>
                </div>
                
                {/* Image 3: Tall (h-60) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/company-2.png" 
                    alt="Project Planning and Strategy" 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"></div>
                </div>
                
                {/* Image 4: Short (h-42) */}
                <div className="w-1/4 relative group overflow-hidden rounded-xl shadow-2xl mb-8">
                  <img 
                    src="/company-4.png" 
                    alt="Delivery Excellence and Support" 
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
                    alt="Team Collaboration at Microgate Technologies" 
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
                    alt="Client Engagement Process" 
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
                    alt="Team Collaboration at Microgate Technologies" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Image 2 - Short image aligned at bottom */}
                <div className="w-[48%] relative group overflow-hidden rounded-xl shadow-2xl mb-6">
                  <img 
                    src="/company-3.png" 
                    alt="Client Engagement Process" 
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to accommodate the images - MATCHED TO COMPANY PAGE */}
      <div className="h-48 lg:h-56"></div>

      {/* Two Column Paragraph Section - MATCHED TO COMPANY PAGE */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Single Title for both columns */}
          <div className="text-left mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Engagement Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Engagement Models */}
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="p-3 bg-[#36B5A0]/10 rounded-lg mr-4 mt-1 flex-shrink-0">
                  <FaHandshake className="text-[#36B5A0] text-xl" />
                </div>
                <div>
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed line-clamp-7">
                    <strong>Microgate Technologies Private Ltd</strong> offers diverse commitment and 
                    engagement models to address varied needs of our clients worldwide, ensuring their 
                    competitive advantages in changing business environments. We work according to your 
                    specific requirements with time-bound, project-based engagement approaches. Clients 
                    can choose from our models based on project size, scalability, and requirements. 
                    We also provide customized models tailored to your specific needs, demonstrating 
                    our adaptability and client-centric approach.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Business Decisions */}
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="p-3 bg-[#0A6B7E]/10 rounded-lg mr-4 mt-1 flex-shrink-0">
                  <FaChartBar className="text-[#0A6B7E] text-xl" />
                </div>
                <div>
                  <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed line-clamp-7">
                    We believe that the journey from Information to Impact can be made easier and faster 
                    for businesses by utilizing our reusable frameworks, pre-built and custom applications, 
                    and our ability to demystify and deliver long-term analytics value on a continuous basis. 
                    We have been continually developing solutions to reduce clients' risks in adopting and 
                    consuming analytics, enabling them to start seeing genuine benefits and competitive 
                    advantages more quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Resource Model Section - MATCHED TO COMPANY PAGE */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column - Comes first on mobile/tablet, right side on desktop */}
            <div className="order-2 lg:order-2 space-y-2 -mt-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-left font-bold text-gray-800 mb-3">
                Dedicated Resource Model
              </h3>
              
              <p className="text-gray-700 text-xs md:text-sm text-left leading-relaxed mb-6">
                We provide committed resources to our clients, who act as their virtual workforce. When 
                clients require team support, we offer dedicated teams that are consistently available 
                for their projects, even at short notice. Our offshore teams operate from secure, 
                separate environments at our development centers, ensuring data protection and focused 
                project execution.
              </p>
              
              <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                <div className="flex items-start">
                  <FaQuoteLeft className="text-blue-600 text-2xl mr-4 mt-1" />
                  <div>
                    <p className="text-[#07284C] text-sm md:text-med font-semibold text-left italic">
                      Our dedicated resource model provides clients with virtual team members who become 
                      seamless extensions of their organization. With consistent availability and deep 
                      integration into client workflows, we ensure project continuity and success, 
                      regardless of geographical boundaries.
                    </p>
                    <p className="text-blue-700 text-sm md:text-med font-medium mt-3">— Microgate Technologies Commitment</p>
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
                    alt="Microgate Technologies Dedicated Team Model"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A6B7E]/70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Mode Section - MATCHED TO COMPANY PAGE */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#36B5A0]">Delivery Excellence</span>
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto">
              Microgate Technologies assigns dedicated project managers to oversee offshore team 
              operations, ensuring seamless delivery and transparent communication throughout 
              project lifecycles
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {deliveryFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 hover:rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 p-3 bg-[#07284C]/20 text-[#07284C] rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-med md:text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* <div className="bg-white rounded-xl p-6 shadow-md max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Project Management Framework</h3>
            <p className="text-gray-700 text-xs md:text-sm text-center leading-relaxed">
              Our project managers are responsible for project movement and administration, providing 
              clients with regular progress updates through daily and weekly reporting. This structured 
              approach ensures complete transparency, timely delivery, and alignment with client 
              expectations throughout the engagement lifecycle.
            </p>
          </div> */}
        </div>
      </section>

      {/* Engagement Models Section - MATCHED TO COMPANY PAGE */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Engagement <span className="text-[#36B5A0]">Models</span>
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto">
              Choose from our flexible engagement models designed to meet your specific business 
              requirements and project objectives
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12">
            {engagementModels.map((model, index) => (
              <IconCard
                key={index}
                icon={model.icon}
                title={model.title}
                description={model.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;