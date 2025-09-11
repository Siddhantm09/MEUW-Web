import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import your existing components
import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import ScrollingBanner from "./components/ScrollingBanner";
import ServicesSection from "./components/ServicesSection";

// Header component with navigation
import { Anchor, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-slate-800 text-white py-4 px-4 sm:px-6 w-full relative">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div
          className="flex items-center space-x-2 sm:space-x-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <Anchor className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h1 className="text-sm sm:text-lg md:text-xl font-bold leading-tight">
              ALL INDIA BJP MARINE ENGINEERS AND WORKERS UNION
            </h1>
            <p className="text-orange-400 text-xs sm:text-sm hidden sm:block">
              Empowering Maritime Professionals Across India
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {/* About Us Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center space-x-1 hover:text-orange-400 transition-colors text-sm xl:text-base">
              <span>About Us</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {activeDropdown === "about" && (
              <div className="absolute top-full left-0 pt-2 w-52 z-50">
                <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <button
                    onClick={() => handleNavigation("/history")}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    History
                  </button>
                  <button
                    onClick={() => handleNavigation("/secretary-message")}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    Message from General Secretary
                  </button>
                  <button
                    onClick={() => handleNavigation("/achievements")}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    Our Achievements
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Structure Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("structure")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center space-x-1 hover:text-orange-400 transition-colors text-sm xl:text-base">
              <span>Structure</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {activeDropdown === "structure" && (
              <div className="absolute top-full left-0 pt-2 w-48 z-50">
                <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <button
                    onClick={() => handleNavigation("/national-committee")}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    National Committee
                  </button>
                  <button
                    onClick={() => handleNavigation("/state-committee")}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    State Committee
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Upcoming Meetings */}
          <button
            onClick={() => handleNavigation("/upcoming-meetings")}
            className="hover:text-orange-400 transition-colors text-sm xl:text-base"
          >
            Upcoming Meetings
          </button>

          {/* Programs */}
          <button
            onClick={() => handleNavigation("/programs")}
            className="hover:text-orange-400 transition-colors text-sm xl:text-base"
          >
            Programs
          </button>

          {/* Sponsors */}
          <button
            onClick={() => handleNavigation("/sponsors")}
            className="hover:text-orange-400 transition-colors text-sm xl:text-base"
          >
            Sponsors
          </button>

          <a
            href="#services"
            className="hover:text-orange-400 transition-colors text-sm xl:text-base"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-orange-400 transition-colors text-sm xl:text-base"
          >
            Contact Us
          </a>
          <button
            onClick={() => handleNavigation("/donations")}
            className="bg-orange-600 hover:bg-orange-700 px-3 py-2 xl:px-4 xl:py-2 rounded transition-colors text-sm xl:text-base"
          >
            Donation
          </button>
          <button
            onClick={() => handleNavigation("/membershipregistration")}
            className="bg-slate-600 hover:bg-slate-700 px-3 py-2 xl:px-4 xl:py-2 rounded transition-colors text-sm xl:text-base"
          >
            Registration
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-slate-600">
          <nav className="flex flex-col space-y-2 pt-4">
            {/* About Us Mobile */}
            <div>
              <button
                onClick={() => handleDropdownToggle("mobile-about")}
                className="flex items-center justify-between w-full hover:text-orange-400 transition-colors px-4 py-2"
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "mobile-about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobile-about" && (
                <div className="pl-8 space-y-2">
                  <button
                    onClick={() => handleNavigation("/history")}
                    className="block w-full text-left hover:text-orange-400 transition-colors px-4 py-2 text-sm"
                  >
                    History
                  </button>
                  <button
                    onClick={() => handleNavigation("/secretary-message")}
                    className="block w-full text-left hover:text-orange-400 transition-colors px-4 py-2 text-sm"
                  >
                    Message from General Secretary
                  </button>
                  <button
                    onClick={() => handleNavigation("/achievements")}
                    className="block w-full text-left hover:text-orange-400 transition-colors px-4 py-2 text-sm"
                  >
                    Our Achievements
                  </button>
                </div>
              )}
            </div>

            {/* Structure Mobile */}
            <div>
              <button
                onClick={() => handleDropdownToggle("mobile-structure")}
                className="flex items-center justify-between w-full hover:text-orange-400 transition-colors px-4 py-2"
              >
                <span>Structure</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "mobile-structure" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobile-structure" && (
                <div className="pl-8 space-y-2">
                  <button
                    onClick={() => handleNavigation("/national-committee")}
                    className="block w-full text-left hover:text-orange-400 transition-colors px-4 py-2 text-sm"
                  >
                    National Committee
                  </button>
                  <button
                    onClick={() => handleNavigation("/state-committee")}
                    className="block w-full text-left hover:text-orange-400 transition-colors px-4 py-2 text-sm"
                  >
                    State Committee
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation("/upcoming-meetings")}
              className="hover:text-orange-400 transition-colors px-4 py-2 text-left"
            >
              Upcoming Meetings
            </button>
            <button
              onClick={() => handleNavigation("/programs")}
              className="hover:text-orange-400 transition-colors px-4 py-2 text-left"
            >
              Programs
            </button>
            <button
              onClick={() => handleNavigation("/sponsors")}
              className="hover:text-orange-400 transition-colors px-4 py-2 text-left"
            >
              Sponsors
            </button>
            <a
              href="#services"
              className="hover:text-orange-400 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-orange-400 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
            <button
              onClick={() => handleNavigation("/donations")}
              className="bg-orange-600 hover:bg-orange-700 px-4 py-3 rounded transition-colors mx-4 mt-2"
            >
              Donation
            </button>
            <button
              onClick={() => handleNavigation("/membershipregistration")}
              className="bg-slate-600 hover:bg-slate-700 px-4 py-3 rounded transition-colors mx-4 mt-2"
            >
              Registration
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

// Updated Footer with navigation
const UpdatedFooter = () => {
  const navigate = useNavigate();

  return (
    <footer
      id="contact"
      className="bg-slate-800 text-white py-12 sm:py-16 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Logo and Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Anchor className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold leading-tight">
                  ALL INDIA BJP MARINE
                </h3>
                <h3 className="text-lg sm:text-xl font-bold leading-tight">
                  ENGINEERS AND WORKERS UNION
                </h3>
              </div>
            </div>
          </div>

          {/* Head Office */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Head Office
            </h3>
            <div className="space-y-2 sm:space-y-4 text-sm sm:text-base">
              <p>All India BJP Marine Engineers and Workers Union,</p>
              <p>Union Bhavan, Marine Drive,</p>
              <p>Mumbai - 400 001. (India)</p>
            </div>
          </div>

          {/* Membership */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Membership
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              All India BJP Marine Engineers and Workers Union plays a vital
              role in protecting and promoting the rights, welfare, and
              interests of maritime professionals.
            </p>
            <button
              onClick={() => navigate("/membershipregistration")}
              className="bg-orange-600 hover:bg-orange-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              Membership Registration →
            </button>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-slate-600 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 BJP Marine Engineers and Workers Union - All India | All
              Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
              <button
                onClick={() => navigate("/terms")}
                className="text-gray-400 hover:text-orange-400 transition-colors text-xs sm:text-sm"
              >
                Terms and Conditions
              </button>
              <button
                onClick={() => navigate("/privacy")}
                className="text-gray-400 hover:text-orange-400 transition-colors text-xs sm:text-sm"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component - now just the home page
const MEWUWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero title="Main Hero Title" subtitle="Main Hero Subtitle" />
      <ScrollingBanner title="Banner Title" subtitle="Banner Subtitle" />
      <AboutSection
        title="About Section Title"
        subtitle="About Section Subtitle"
      />
      <ServicesSection
        title="Services Section Title"
        subtitle="Services Section Subtitle"
      />
      <UpdatedFooter />
    </div>
  );
};

export default MEWUWebsite;
