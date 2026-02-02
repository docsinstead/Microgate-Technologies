import React from "react";
import { useNavigate } from "react-router-dom";

const IndustriesOfExcellence: React.FC = () => {
  const navigate = useNavigate();
  
  const industries = [
    {
      id: "technology",
      title: "Technology",
      iconPath: "/technology-industry.png", // Icon from public folder
      description: `brings together extensive Technology Industry expertise, Data Science capabilities and AI-powered accelerators to help Technology companies drive actions for digital transformation outcomes. The Digital Transformation narrative is pushing the Technology Industry to explore newer business models, effective investment strategies, enhanced sales enablement, and rethink products in the context of evolving customer behavior. As executives take Analytics and AI beyond boardroom conversations, we partner with some of the largest enterprise technology companies to deploy solutions that improve customer experience by preempting issues, build high-performance sales teams through better forecasting, and optimize Supply Chain processes with AI assistants for enhanced operational efficiency.
            `,
      count: "120+ Projects",
      gradient: "from-blue-600 to-blue-700",
      navigateTo: "/technology"
    },
    {
      id: "financial-services",
      title: "Financial Services",
      iconPath: "/financial-services.png", // Icon from public folder
      description: `Banking and Financial practice is structured to adapt to changing and expanding pressures in the industry including global consolidation, increased regulation and a constantly changing administrative environment. Beyond technology, our Banking and Financial Services practice is versed in deep business processes that support various aspects of banking and capital markets. We build and support technology that keeps pace with change in one of the most regulated industries worldwide, utilizing industry best practices in development strategy and demonstrating deep understanding of critical software and hardware infrastructures.`,
      count: "85+ Projects",
      gradient: "from-green-600 to-emerald-700",
      navigateTo: "/financial-services"
    },
    {
      id: "healthcare",
      title: "Healthcare",
      iconPath: "/healthcare.png", // Icon from public folder
      description: `recognizes that the healthcare industry is on the cusp of a digital revolution, with organizations from local clinics to large pharmaceutical companies investing substantially in digital technologies to improve processes, cut costs, speed up research, and enhance productivity. With over 4 years of expertise in providing technology solutions across industry verticals, our healthcare application development solutions are specifically designed for small and medium healthcare companies seeking scalable, secure software solutions to improve patient care quality. From building websites to developing complex web and mobile applications, we serve as your long-term IT partner for scaling up your technology infrastructure.`,
      count: "65+ Projects",
      gradient: "from-purple-600 to-pink-700",
      navigateTo: "/health-care"
    },
    {
      id: "telecom",
      title: "Telecommunications",
      iconPath: "/telecommunication.png", // Icon from public folder
      description: `recognizes that telecommunications providers must think beyond simple cost reduction to maintain competitive positions in rapidly changing markets. The convergence of voice, video, and data on new-age information streams has become the transformative move, providing single connectivity and integrated user experiences. Our Telecom Practice has successfully implemented significant co-sourced and outsourced engagements in Systems Integration, Service/Subscriber Portals, Analytics and Decision Support, IT consulting, and Application Development and Maintenance.`,
      count: "45+ Projects",
      gradient: "from-amber-600 to-orange-700",
      navigateTo: "/telecommunication"
    }
  ];

  // Function to truncate text to approximately 6 lines
  const truncateText = (text: string, maxLines: number = 6) => {
    const words = text.split(' ');
    // Approximate words per line based on typical reading
    const wordsPerLine = 15;
    const maxWords = maxLines * wordsPerLine;
    
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  // Handle card click navigation
  const handleCardClick = (navigateTo: string) => {
    navigate(navigateTo);
  };

  return (
    <section className="py-5 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="w-full lg:w-screen mx-auto px-4 md:px-8 mt-12">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
            Innovate with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Confidence
            </span>
          </h1>
          <p className="text-xs md:text-base text-gray-300 max-w-3xl mx-auto">
            A systematic approach to AI implementation that ensures tangible business value, 
            scalable solutions, and robust governance across your organization.
          </p>
        </div>

        {/* Industries Section - 2x2 Grid in One Column */}
        <div className="mb-2">
          {/* 2x2 Grid Container - Single Column Layout */}
          <div className="grid grid-cols-1  lg:grid-cols-1 gap-2">
            {/* First Row: 2 industries */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
              {industries.slice(0, 2).map((industry) => (
                <div
                  key={industry.id}
                  onClick={() => handleCardClick(industry.navigateTo)}
                  className="md:p-8 p-2 hover:border-gray-600 transition-all duration-300 group hover:scale-[1.02] cursor-pointer"
                >
                  <div className="flex items-start gap-2 md:gap-6">
                    {/* Icon from public folder - INCREASED SIZE */}
                    <div className={`w-12 md:w-20 h-12 md:h-20 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white w-12 md:w-16 h-12 md:h-16">
                        <img 
                          src={industry.iconPath} 
                          alt={`${industry.title} icon`}
                          className="w-full h-full object-contain p-2" 
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = "text-3xl font-bold"; 
                            fallback.textContent = industry.title.charAt(0);
                            e.currentTarget.parentElement?.appendChild(fallback);
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Title and Description */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {industry.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed text-left text-xs md:text-sm line-clamp-6">
                        <span className="font-bold">Our Microgate Technologies</span> {truncateText(industry.description)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row: 2 industries */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 md:gap-8">
              {industries.slice(2, 4).map((industry) => (
                <div
                  key={industry.id}
                  onClick={() => handleCardClick(industry.navigateTo)}
                  className="p-2 md:p-8 hover:border-gray-600 transition-all duration-300 group hover:scale-[1.02] cursor-pointer"
                >
                  <div className="flex items-start gap-2 md:gap-6">
                    {/* Icon from public folder - INCREASED SIZE */}
                    <div className={`w-12 md:w-20 h-12 md:h-20 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white w-12 md:w-16 h-12 md:h-16">
                        <img 
                          src={industry.iconPath} 
                          alt={`${industry.title} icon`}
                          className="w-full h-full object-contain p-2" 
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = "text-3xl font-bold";
                            fallback.textContent = industry.title.charAt(0);
                            e.currentTarget.parentElement?.appendChild(fallback);
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Title and Description */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {industry.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed text-left text-xs md:text-sm line-clamp-6">
                        <span className="font-bold">Our Microgate Technologies</span> {truncateText(industry.description)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesOfExcellence;