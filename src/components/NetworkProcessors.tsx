import React from "react";
import { Cpu, Server, Network, ArrowRight, Layers } from "lucide-react";

const NetworkProcessorsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1E3A8A]/10 to-[#3B82F6]/10 text-[#1E3A8A] text-sm font-semibold mb-4">
            <Network className="w-4 h-4" />
            SILICON SOLUTIONS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            NETWORK PROCESSORS &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">
              SILICON SOLUTIONS
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced microcode design and development for multi-core network processors
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Left Image Column (10% width) */}
          <div className="lg:w-1/10">
            <div className="relative h-full">
              <div className="sticky top-24">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="aspect-square relative">
                    <img 
                      src="/silicon-chip.jpg" 
                      alt="Silicon Chip Technology"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const placeholder = document.createElement('div');
                        placeholder.className = "w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700";
                        placeholder.innerHTML = `
                          <div class="text-center p-6 text-white">
                            <Cpu class="w-10 h-10 mx-auto mb-3" />
                            <p class="text-white/80 text-xs font-semibold">Silicon</p>
                          </div>
                        `;
                        e.currentTarget.parentElement?.appendChild(placeholder);
                      }}
                    />
                  </div>
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Image Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-900">
                    Chip
                  </div>
                </div>
                
                {/* Tech Specs Card */}
                <div className="mt-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">64-core</div>
                    <div className="text-xs opacity-90">Processing Capacity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Main Content (80% width) */}
          <div className="lg:w-4/5">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">MicroCode Design & Development</h2>
                  <p className="text-gray-600">Multi-core Network Processors</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  MicroCode Design and Development for Multi-core Network Processors and 
                  Integration of L2/L3 and MPLS Software with Silicon. A key part of any 
                  networking/communications item is the accuracy, conservativeness and 
                  effectiveness of sending in the Data Plane.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Server className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Multi-core Architecture</h4>
                    <p className="text-sm text-gray-600">Optimized for parallel processing</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-100">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">L2/L3 Integration</h4>
                    <p className="text-sm text-gray-600">Seamless software-silicon integration</p>
                  </div>
                </div>
              </div>

              {/* Know More Button */}
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white font-semibold py-3 px-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span>Know More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NetworkProcessorsSection;