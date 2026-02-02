import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const slides = [
  {
    id: 1,
    title: "EXPERTISE IN ACTION IT DEVELOPMENT",
    description: "We provide innovative technology & solutions.",
    buttonText: "Know More",
    textColor: "text-white",
    imagePosition: "right",
    navigateTo: "/technology", // Add navigation path for slide 1
  },
  {
    id: 2,
    title: "AI FOR THE DIGITAL ENTERPRISE ARTIFICIAL INTELLIGENCE",
    description: "With AI, enterprises can access the power of analytics insights.",
    buttonText: "Know More",
    textColor: "text-white",
    imagePosition: "left",
    navigateTo: "/bi-visualization", // Add navigation path for slide 2
  },
  {
    id: 3,
    title: "MIGRATING TO THE CLOUD SOLUTIONS",
    description: "We've assembled, facilitated and conveyed cloud solutions.",
    buttonText: "Know More",
    textColor: "text-white",
    imagePosition: "right",
    navigateTo: "/cloud-solutions", // Add navigation path for slide 3
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate(); // Initialize navigate hook

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Ensure video plays automatically
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.log("Video autoplay failed:", e);
      });
    }
  }, []);

  // Handle navigation for the current slide
  const handleKnowMoreClick = () => {
    const currentSlideData = slides[currentSlide];
    if (currentSlideData.navigateTo) {
      navigate(currentSlideData.navigateTo);
    }
  };

  return (
    <div className="relative w-screen overflow-hidden" style={{ margin: 0, padding: 0 }}>
      {/* Video Background - Single continuous video */}
      <div className="absolute inset-0 z-0" style={{ 
        width: '100vw', 
        margin: 0, 
        padding: 0,
        left: 0,
        right: 0 
      }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-screen h-full object-cover"
          style={{ 
            width: '100vw', 
            height: '100%',
            minWidth: '100vw',
            maxWidth: '100vw',
            margin: 0,
            padding: 0 
          }}
        >
          <source src="/hero-bgvideo3.mp4" type="video/mp4" />
          <source src="/hero-bgvideo3.webm" type="video/webm" />
          {/* Fallback image if video doesn't load */}
          <div className="w-screen h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h3 className="text-2xl font-bold mb-2">Technology Innovation</h3>
              <p>Your video background will appear here</p>
            </div>
          </div>
        </video>
      </div>

      {/* Slides Container */}
      <div className="relative w-screen h-[450px] md:h-[500px] z-10" style={{ margin: 0, padding: 0 }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              currentSlide === index
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
            style={{ width: '100vw', margin: 0, padding: 0 }}
          >
            {/* Content Container */}
            <div className="relative h-full flex items-center justify-center w-screen" style={{ margin: 0, padding: 0 }}>
              {/* Text Content Only - No Images */}
              <div className="w-full max-w-7xl px-4 md:px-8 mt-16">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="space-y-2">
                    <h1 className={`text-2xl md:text-3xl lg:text-3xl font-bold ${slide.textColor} leading-tight`}>
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-base text-white/90 max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  </div>
                  
                  {/* Know More Button */}
                  <div className="pt-4">
                    <button 
                      onClick={handleKnowMoreClick}
                      className="group inline-flex items-center gap-3 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, #36B5A0 0%, #0A6B7E 50%, #07284C 100%)'
                      }}
                    >
                      {slide.buttonText}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;