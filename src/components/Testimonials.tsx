// // src/components/Testimonials.tsx
// import React from "react";
// import { Quote } from "lucide-react";
// import ScrollAnimation from "../animation/ScrollAnimation";

// const testimonials = [
//   {
//     name: "Sarah Thompson",
//     role: "CTO, FutureTech Solutions",
//     feedback:
//       "Working with Infovance transformed our digital operations. Their innovative approach and technical expertise helped us scale faster than ever.",
//   },
//   {
//     name: "Rajesh Kumar",
//     role: "Director, SmartBuild India",
//     feedback:
//       "The Infovance team truly understands business needs. Their customized digital strategy helped us streamline workflows and reduce costs significantly.",
//   },
//   {
//     name: "Emma Williams",
//     role: "Founder, Vision Marketing",
//     feedback:
//       "Professional, proactive, and reliable Infovance delivered beyond expectations. I highly recommend them for digital transformation initiatives.",
//   },
// ];

// // Card background colors (three shades of blue)
// const cardColors = ["#D0E8FF", "#78C1FF", "#A8D6FF"];
// // Quote circle background (slightly darker than card)
// const quoteCircleBG = ["#B7D1FF", "#5B99FF", "#91C2FF"];

// const Testimonials: React.FC = () => {
//   return (
//     <section className="w-full py-20 px-6 md:px-16">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <ScrollAnimation delay={100}>
//         <h4 className="text-orange-600 font-semibold uppercase tracking-wide">
//           Testimonials
//         </h4></ScrollAnimation>
//         <ScrollAnimation delay={150}>
//         <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mt-2">
//           What Our Clients Say
//         </h2></ScrollAnimation>
//         <ScrollAnimation delay={200}>
//         <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
//           Hear from the clients who’ve trusted <span className="font-semibold text-orange-600">Infovance</span> to lead their digital transformation journey  and experienced measurable success.
//         </p></ScrollAnimation>
//       </div>

//       {/* Testimonials Grid */}
//       <div className="grid md:grid-cols-3 gap-10">
//         {testimonials.map((item, index) => (
//             <ScrollAnimation>
//           <div
//             key={index}
//             className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 relative"
//             style={{ backgroundColor: cardColors[index % cardColors.length] }}
//           >
//             {/* Top-left Quote Icon inside circular background */}
//             <div
//               className="absolute -top-6 left-6 w-12 h-12 flex items-center justify-center rounded-full"
//               style={{ backgroundColor: quoteCircleBG[index % quoteCircleBG.length] }}
//             >
//               <Quote className="w-6 h-6 text-white" />
//             </div>

//             {/* Feedback */}
//             <ScrollAnimation delay={250}>
//             <p className="text-gray-900 mt-6 mb-6 text-base leading-relaxed">
//               “{item.feedback}”
//             </p></ScrollAnimation>

//             {/* Client Info */}
//             <div className="mt-4">
//                 <ScrollAnimation delay={300}>
//               <h4 className="text-orange-900 font-semibold">{item.name}</h4>
//               </ScrollAnimation>
//               <ScrollAnimation delay={350}><p className="text-gray-700 text-sm">{item.role}</p>
//            </ScrollAnimation> </div>

//             {/* Bottom-right Quote Icon inside circular background */}
//             <div
//               className="absolute -bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full"
//               style={{ backgroundColor: quoteCircleBG[index % quoteCircleBG.length] }}
//             >
//               <Quote className="w-6 h-6 text-white" />
//             </div>
//           </div></ScrollAnimation>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


// src/components/Testimonials.tsx
import React, { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "CTO, FutureTech Solutions",
    feedback:
      "Working with Infovance transformed our digital operations. Their innovative approach and technical expertise helped us scale faster than ever.",
  },
  {
    name: "Rajesh Kumar",
    role: "Director, SmartBuild India",
    feedback:
      "The Infovance team truly understands business needs. Their customized digital strategy helped us streamline workflows and reduce costs significantly.",
  },
  {
    name: "Emma Williams",
    role: "Founder, Vision Marketing",
    feedback:
      "Professional, proactive, and reliable Infovance delivered beyond expectations. I highly recommend them for digital transformation initiatives.",
  },
  {
    name: "Michael Chen",
    role: "CEO, TechInnovate UK",
    feedback:
      "Infovance's training programs upskilled our entire development team. The practical approach and real-world projects made all the difference.",
  },
  {
    name: "David Rodriguez",
    role: "Operations Director, Global Retail Corp",
    feedback:
      "The digital transformation roadmap provided by Infovance helped us achieve 40% operational efficiency. Outstanding results!",
  },
  {
    name: "Lisa Anderson",
    role: "Head of IT, FinancePlus Ltd",
    feedback:
      "Their internship-to-employment model provided us with perfectly trained professionals who integrated seamlessly into our teams.",
  },
  {
    name: "James Wilson",
    role: "Managing Director, ManufacturingPro",
    feedback:
      "Infovance didn't just provide services; they became strategic partners in our digital journey. Exceptional quality and commitment.",
  },
  {
    name: "Priya Sharma",
    role: "HR Director, ServiceFirst UK",
    feedback:
      "The trained professionals from Infovance's programs were production-ready from day one. It saved us months of training time.",
  },
  {
    name: "Robert Brown",
    role: "Technology Lead, HealthTech Solutions",
    feedback:
      "From consultation to implementation, Infovance demonstrated excellence. Their team's expertise in emerging technologies is remarkable.",
  }
];

// Card background colors (three shades of blue)
const cardColors = ["#D0E8FF", "#78C1FF", "#A8D6FF"];
// Quote circle background (slightly darker than card)
const quoteCircleBG = ["#B7D1FF", "#5B99FF", "#91C2FF"];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate how many groups of 3 testimonials we have
  const totalGroups = Math.ceil(testimonials.length / 3);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === totalGroups - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500); // Animation duration
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, totalGroups]);

  const nextTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalGroups - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? totalGroups - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  // Get current group of 3 testimonials
  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="w-full py-20 px-6 md:px-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <ScrollAnimation delay={100}>
          <h4 className="text-orange-600 font-semibold uppercase tracking-wide">
            Testimonials
          </h4>
        </ScrollAnimation>
        <ScrollAnimation delay={150}>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mt-2">
            What Our Clients Say
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
            Hear from the clients who've trusted <span className="font-semibold text-orange-600">Infovance</span> to lead their digital transformation journey and experienced measurable success.
          </p>
        </ScrollAnimation>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button 
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <ChevronLeft className="w-6 h-6 text-orange-600" />
        </button>
        
        <button 
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <ChevronRight className="w-6 h-6 text-orange-600" />
        </button>

        {/* Testimonials Grid with Slide Animation */}
        <div 
          className="grid md:grid-cols-3 gap-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {getCurrentTestimonials().map((item, index) => {
            const globalIndex = currentIndex * 3 + index;
            return (
              <div
                key={globalIndex}
                className={`rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 relative ${
                  isAnimating ? 'animate-slide-left' : ''
                }`}
                style={{ backgroundColor: cardColors[globalIndex % cardColors.length] }}
              >
                {/* Top-left Quote Icon inside circular background */}
                <div
                  className="absolute -top-6 left-6 w-12 h-12 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: quoteCircleBG[globalIndex % quoteCircleBG.length] }}
                >
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Feedback */}
                <p className="text-gray-900 mt-6 mb-6 text-base leading-relaxed">
                  "{item.feedback}"
                </p>

                {/* Client Info */}
                <div className="mt-4">
                  <h4 className="text-orange-900 font-semibold">{item.name}</h4>
                  <p className="text-gray-700 text-sm">{item.role}</p>
                </div>

                {/* Bottom-right Quote Icon inside circular background */}
                <div
                  className="absolute -bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: quoteCircleBG[globalIndex % quoteCircleBG.length] }}
                >
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-orange-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Add custom CSS for slide animation */}
      <style >{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        
        .animate-slide-left {
          animation: slideLeft 0.5s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;