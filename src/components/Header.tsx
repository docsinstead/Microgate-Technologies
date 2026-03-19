import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  submenu?: {
    title: string;
    href: string;
    submenu?: { title: string; href: string }[];
  }[];
}

const navLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { 
    title: "About Us", 
    href: "/company",
    submenu: [
      { title: "Company", href: "/company" },
      { title: "Why Us", href: "/why-us" },
      { title: "Vision", href: "/vision" },
      { title: "Mission", href: "/mission"},
    ], 
  },
  { 
    title: "Solutions", 
    href: "/it-consulting",
    submenu: [
      { title: "IT Consulting", href: "/it-consulting" },
      { title: "IT Outsourcing", href: "/it-outsourcing" },
      { title: "Testing & QA", href: "/testing-qa" },
      { title: "Mortgage Solutions", href: "/mortgage-solutions"},
      { title: "Power Apps", href: "/power-apps" },
      { title: "Cloud Solutions", href: "/cloud-solutions" },
      { title: "BI & Visualization", href: "/bi-visualization" },
    ], 
  },
  { 
    title: "Industries", 
    href: "/technology",
    submenu: [
      { title: "Technology", href: "/technology" },
      { title: "Financial Services", href: "/financial-services" },
      { title: "Consumer Goods", href: "/consumer-goods" },
      { title: "Insurance", href: "/insurance"},
      { 
        title: "Health Care", 
        href: "/health-care",
        submenu: [
          { title: "Revenue Cycle Management", href: "/revenue-cycle-management" },
          { title: "Coding / Health Information Management", href: "/coding-health-information-management" },
          { title: "Claims Management", href: "/claims-management" },
          { title: "Member Management", href: "/member-management" },
        ]
      },
      { title: "Telecommunication", href: "/telecommunication" },
      { title: "Hospitality", href: "/hospitality" },
    ], 
  },
  {
    title: "Technologies",
    href: "/microsoft-technologies",
    submenu: [
      { title: "Microsoft Technologies", href: "/microsoft-technologies" },
      { title: "Oracle", href: "/oracle" },
      { title: "SAP", href: "/sap" },
      { title: "Block Chain", href: "/block-chain" },
      { title: "Salesforce", href: "/salesforce" },
      { title: "Middleware", href: "/middleware" },
      { title: "Application Development", href: "/application-development" },
    ],
  },
  { 
    title: "Core Technologies", 
    href: "/embedded-systems",
    submenu: [
      { title: "Embedded Systems", href: "/embedded-systems" },
      { title: "Networking", href: "/networking" },
      { title: "VLSI Design", href: "/vlsi-design" },
      { title: "Design Verification", href: "/design-verification"},
    ], 
  },
  { title: "Contact Us", href: "/contact-us" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(null);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");
  const navigate = useNavigate();

  // Update active link when route changes
  useEffect(() => {
    const path = location.pathname;
    
    // Check if current path is a healthcare submenu page
    const isHealthcareSubmenu = 
      path === "/revenue-cycle-management" ||
      path === "/coding-health-information-management" ||
      path === "/claims-management" ||
      path === "/member-management";
    
    // Find which nav link matches the current path
    const activeNavItem = navLinks.find(link => 
      path === link.href || 
      (link.submenu && link.submenu.some(sub => path === sub.href)) ||
      (link.href !== "/" && path.startsWith(link.href))
    );
    
    if (isHealthcareSubmenu) {
      // If on healthcare submenu, set Industries as active
      const industriesLink = navLinks.find(link => link.title === "Industries");
      if (industriesLink) {
        setActiveLink(industriesLink.href);
      }
    } else if (activeNavItem) {
      setActiveLink(activeNavItem.href);
    } else {
      setActiveLink("/");
    }
  }, [location.pathname]);

  const handleMouseEnter = (linkTitle: string) => {
    if (navLinks.find(link => link.title === linkTitle)?.submenu) {
      setOpenDropdown(linkTitle);
      setOpenNestedDropdown(null); // Close nested dropdown when opening new main dropdown
    }
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
    setOpenNestedDropdown(null);
  };

  const handleNestedMouseEnter = (itemTitle: string) => {
    setOpenNestedDropdown(itemTitle);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-md border-b border-blue-100">
      {/* Single Header with Logo and Navigation */}
      <div className="w-full bg-white px-4 md:px-10 py-2 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/microgate-logo.png" 
              alt="Infovance Logo" 
              className="h-16 md:h-20 w-48 md:w-48 rounded-full object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation beside logo */}
        <nav className="hidden md:flex items-center h-full relative ml-8">
          {navLinks.map((link) => (
            <div 
              key={link.title} 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter(link.title)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={link.href}
                className={`px-5 py-1 text-gray-800 font-medium text-base cursor-pointer transition-all duration-300 flex items-center gap-1 group h-full ${
                  activeLink === link.href
                    ? "text-[#1E3A8A] font-semibold"
                    : "hover:text-[#3B82F6]"
                }`}
              >
                <div className="relative">
                  {link.title}
                  {/* Underline at bottom of header (word length only) */}
                  {activeLink === link.href && (
                    <span className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 w-[calc(100%+8px)] h-1 bg-blue-700"></span>
                  )}
                </div>
                {link.submenu && <ChevronDown className="w-4 h-4 mt-[2px]" />}
              </Link>

              {/* Dropdown for all navlinks with submenu */}
{link.submenu && openDropdown === link.title && (
  <div className="absolute left-0 top-full mt-0 text-left bg-white border border-gray-200 shadow-lg rounded-lg z-50 min-w-[250px]">
    {link.submenu.map((item) => (
      <div
        key={item.title}
        className="relative"
        onMouseEnter={() => {
          if (item.submenu) {
            handleNestedMouseEnter(item.title);
          }
        }}
        onMouseLeave={() => setOpenNestedDropdown(null)}
      >
        {item.submenu ? (
          <>
            <div
              className={`flex justify-between items-center px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1E3A8A] text-sm whitespace-nowrap transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer ${
                location.pathname === item.href ? "bg-blue-50 text-[#1E3A8A]" : ""
              }`}
            >
              <span>{item.title}</span>
              <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
            </div>
            
            {/* Nested dropdown for Healthcare sub-items */}
            {openNestedDropdown === item.title && item.submenu && (
              <div className="absolute left-full top-0 ml-1 text-left bg-white border border-gray-200 shadow-lg rounded-lg z-50 min-w-[250px]">
                {item.submenu.map((nestedItem) => (
                  <Link
                    key={nestedItem.title}
                    to={nestedItem.href}
                    className={`block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1E3A8A] text-sm whitespace-nowrap transition-colors border-b border-gray-100 last:border-b-0 ${
                      location.pathname === nestedItem.href ? "bg-blue-50 text-[#1E3A8A]" : ""
                    }`}
                    onClick={() => {
                      setOpenDropdown(null);
                      setOpenNestedDropdown(null);
                    }}
                  >
                    {nestedItem.title}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link
            to={item.href}
            className={`block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1E3A8A] text-sm whitespace-nowrap transition-colors border-b border-gray-100 last:border-b-0 ${
              location.pathname === item.href ? "bg-blue-50 text-[#1E3A8A]" : ""
            }`}
            onClick={() => setOpenDropdown(null)}
          >
            {item.title}
          </Link>
        )}
      </div>
    ))}
  </div>
)}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col space-y-1 md:hidden overflow-y-auto"
          style={{
            maxHeight: "80vh",
            WebkitOverflowScrolling: "touch",
          }}>
          {navLinks.map((link) => (
            <div key={link.title}>
              {/* Main Mobile Link */}
              <div
                className={`flex justify-between items-center px-3 py-3 font-medium cursor-pointer transition-all duration-300 ${
                  activeLink === link.href
                    ? "text-[#1E3A8A] font-semibold"
                    : "text-gray-700 hover:text-[#3B82F6]"
                }`}
                onClick={() => {
                  if (link.submenu) {
                    setOpenDropdown(openDropdown === link.title ? null : link.title);
                    setOpenNestedDropdown(null); // Close nested dropdown when toggling main
                  } else {
                    navigate(link.href);
                    setMenuOpen(false);
                  }
                }}
              >
                <span className="relative">
                  {link.title}
                  {activeLink === link.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F59E0B]"></span>
                  )}
                </span>
                {link.submenu && <ChevronDown className="w-4 h-4" />}
              </div>

              {/* Submenu dropdown for all navlinks */}
              {link.submenu && openDropdown === link.title && (
                <div className="pl-6 mt-1 text-left space-y-1">
                  {link.submenu.map((item) => (
                    <div key={item.title}>
                      {item.submenu ? (
                        <>
                          <div
                            className={`flex justify-between items-center py-2.5 text-sm px-3 cursor-pointer ${
                              location.pathname === item.href 
                                ? "text-[#1E3A8A] font-medium" 
                                : "text-gray-600 hover:text-[#1E3A8A]"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenNestedDropdown(openNestedDropdown === item.title ? null : item.title);
                            }}
                          >
                            <span>{item.title}</span>
                            <ChevronDown className={`w-3 h-3 transition-transform ${openNestedDropdown === item.title ? 'rotate-180' : ''}`} />
                          </div>
                          
                          {/* Nested dropdown for mobile */}
                          {openNestedDropdown === item.title && item.submenu && (
                            <div className="pl-4 mt-1 space-y-1">
                              {item.submenu.map((nestedItem) => (
                                <Link
                                  key={nestedItem.title}
                                  to={nestedItem.href}
                                  className={`block py-2 text-sm px-3 ${
                                    location.pathname === nestedItem.href 
                                      ? "text-[#1E3A8A] font-medium" 
                                      : "text-gray-500 hover:text-[#1E3A8A]"
                                  }`}
                                  onClick={() => {
                                    setMenuOpen(false);
                                    setOpenDropdown(null);
                                    setOpenNestedDropdown(null);
                                  }}
                                >
                                  {nestedItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          className={`block py-2.5 text-sm px-3 ${
                            location.pathname === item.href 
                              ? "text-[#1E3A8A] font-medium" 
                              : "text-gray-600 hover:text-[#1E3A8A]"
                          }`}
                          onClick={() => {
                            setMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;