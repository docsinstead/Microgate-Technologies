import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope,
} from 'react-icons/fa';

const ContactSection: React.FC = () => {
  // Phone number and email (update these with your actual contact info)
  const phoneNumber = "+911234567890";
  const whatsappNumber = "+911234567890"; // Same as phone or different
  const emailAddress = "info@microgatetech.com";
  const companyAddress = "123 Technology Park, Innovation Road, Hyderabad, Telangana 500081, India";

  // Functions to handle contact actions
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    // Open WhatsApp with a pre-filled message
    const message = "Hello Microgate Technologies, I would like to inquire about your services.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=Inquiry%20from%20Website&body=Hello%20Microgate%20Technologies,%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20your%20services.%0D%0A%0D%0A`;
  };

  const handleMapClick = () => {
    // Open Google Maps with the address
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress)}`, '_blank');
  };

  return (
    <>
      {/* Hero Section with Image Background */}
      <section className="pt-52 pb-20 relative overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/contact-bg.png" 
            alt="Contact us background"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              // Fallback to gradient if image doesn't load
              e.currentTarget.style.display = 'none';
              const fallbackDiv = document.createElement('div');
              fallbackDiv.className = "absolute inset-0";
              fallbackDiv.style.background = 'linear-gradient(135deg, #36B5A0 0%, #0A6B7E 50%, #07284C 100%)';
              e.currentTarget.parentElement?.appendChild(fallbackDiv);
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white  mb-4">
              Get in Touch with Us
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto">
              Have questions about our services? We're here to help! Reach out to us through any of the contact below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section - Single Container with 3 Columns */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Single container with full border radius */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* 3 Columns Grid with dividers */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              
              {/* Column 1: Address/Location */}
              <div className="p-4">
                <div className="text-center">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <FaMapMarkerAlt className="text-3xl text-[#0A6B7E]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
                  
                  {/* Small Paragraph */}
                  <p className="text-gray-600 text-sm mb-2">
                    Visit our headquarters for direct consultation and discussions about your projects.
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-2">
                    <p className="text-gray-800 font-medium">
                      Microgate Technologies Private Ltd
                    </p>
                    <p className="text-gray-600 text-sm">
                      123 Technology Park,
                      Innovation Road,<br />
                      Hyderabad, Telangana 500081
                      India
                    </p>
                    <button 
                      onClick={handleMapClick}
                      className="text-[#0A6B7E] hover:text-[#36B5A0] font-medium text-sm mt-2 cursor-pointer transition-colors"
                    >
                      Open in Maps →
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Column 2: Phone/Call */}
              <div className="p-4">
                <div className="text-center">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <FaPhoneAlt className="text-3xl text-[#0A6B7E]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                  
                  {/* Small Paragraph */}
                  <p className="text-gray-600 text-sm mb-2">
                    Speak with our experts directly for immediate assistance and consultation.
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-3">
                    <div>
                      <button 
                        onClick={handlePhoneClick}
                        className="text-lg font-semibold text-[#0A6B7E] hover:text-[#36B5A0] transition-colors cursor-pointer"
                      >
                        +91 12345 67890
                      </button>
                      {/* <p className="text-gray-500 text-xs mt-1">Click to call</p> */}
                    </div>
                    <div>
                      <button 
                        onClick={handleWhatsAppClick}
                        className="text-base font-semibold text-green-600 hover:text-green-500 transition-colors cursor-pointer"
                      >
                        WhatsApp: +91 12345 67890
                      </button>
                      {/* <p className="text-gray-500 text-xs mt-1">Click for WhatsApp</p> */}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Column 3: Email */}
              <div className="p-4">
                <div className="text-center">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <FaEnvelope className="text-3xl text-[#0A6B7E]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                  
                  {/* Small Paragraph */}
                  <p className="text-gray-600 text-sm mb-2">
                    Send us an email for detailed inquiries, proposals, or partnership opportunities.
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-3">
                    <div>
                      <button 
                        onClick={handleEmailClick}
                        className="text-base font-semibold text-[#0A6B7E] hover:text-[#36B5A0] transition-colors break-words cursor-pointer"
                      >
                        info@microgatetech.com
                      </button>
                      {/* <p className="text-gray-500 text-xs mt-1">Click to email</p> */}
                    </div>
                    <div>
                      {/* <p className="text-gray-500 text-sm mt-2">
                        For sales inquiries: <button onClick={() => window.location.href = "mailto:sales@microgatetech.com"} className="text-[#0A6B7E] hover:text-[#36B5A0]">sales@microgatetech.com</button>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;