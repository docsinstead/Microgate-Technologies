import React from "react";
import { Users, Target, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutSection: React.FC = () => {
  const navigate=useNavigate()
  return (
    <section className="py-5 mt-8">
      <div className="w-full lg:w-screen mx-auto px-4 md:px-8"> {/* Changed from max-w-7xl to w-full lg:w-screen */}
        <div className="flex flex-col lg:grid lg:grid-cols-10 gap-8 lg:gap-12 items-center">
          {/* Content Column - Comes first on mobile/tablet, right side on desktop */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="p-4 lg:p-8">
              {/* Title Section */}
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-1 md:py-2 rounded-full bg-gradient-to-r from-[#1E3A8A]/10 to-[#3B82F6]/10 text-[#1E3A8A] text-sm font-semibold mb-2">
                  <Users className="w-3 h-3" />
                  ABOUT OUR COMPANY
                </div>
                <h1 className="text-xl md:text-3xl lg:text-4xl text-left font-bold text-gray-900 mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">
                    MICROGATE TECHNOLOGIES
                  </span>{" "}
                  PRIVATE LTD
                </h1>
              </div>
              
              <div className="text-left mb-2">
                <div className="space-y-2">
                  <p className="text-gray-700 leading-relaxed text-xs md:text-base">
                    Microgate Technologies delivers premier IT services and technology solutions for digital 
                    transformation. We partner with businesses worldwide to provide innovative solutions that 
                    drive growth and efficiency.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-xs md:text-base">
                    Our expertise spans enterprise software, cloud computing, cybersecurity, and data analytics. 
                    We serve diverse clients from startups to Fortune 500 companies with customized solutions 
                    aligned with business objectives.
                  </p>
                </div>
              </div>
              
              {/* Key Points - Adjusted for 70% width */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 mb-4 text-left">
                <div className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#1E3A8A]/20 to-[#3B82F6]/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Client Focus</h4>
                    <p className="text-sm text-gray-600">Tailored solutions for every client</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-green-50/50 p-4 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global Reach</h4>
                    <p className="text-sm text-gray-600">Worldwide IT services delivery</p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button onClick={()=>navigate('/company')} className="group inline-flex items-left gap-3 text-white font-semibold py-2 md:py-3 px-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:translate-x-1"
              style={{
                        background: 'linear-gradient(135deg, #36B5A0 0%, #0A6B7E 50%, #07284C 100%)'
                      }}>
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Image Column - Comes second on mobile/tablet, left side on desktop */}
          <div className="lg:col-span-4 relative order-2 lg:order-1 -mt-6 md:mt-0">
            <div className="relative overflow-hidden">
              <img 
                src="/about-home.png" 
                alt="MicroGate Team"
                className="w-full h-[300px] lg:h-[400px] object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-full h-[300px] lg:h-[400px] bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center rounded-2xl">
                      <div class="text-center p-8 text-white">
                        <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <h3 class="text-2xl font-bold">MicroGate Team</h3>
                        <p class="text-blue-100">Professional IT Experts</p>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;