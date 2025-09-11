import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Anchor, Menu, X, ChevronDown } from "lucide-react";
import Hero from "./components/Hero";
import ScrollingBanner from "./components/ScrollingBanner";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";

interface GalleryImage {
  caption: string;
  // Add other properties as needed
}

const Header: React.FC = () => {
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

          <button
            onClick={() => handleNavigation("/upcoming-meetings")}
            className="hover:text-orange-400 transition-colors text-sm xl:text-base"
          >
            Upcoming Meetings
          </button>

          <button
            onClick={() => handleNavigation("/programs")}
            className="hover:text-orange-400 transition-colors text-sm xl:text-base"
          >
            Programs
          </button>

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

interface AppProps {
  theme?: "light" | "dark";
  showGallery?: boolean;
}

export const MEWUWebsite: React.FC<AppProps> = ({
  theme = "light",
  showGallery = true,
}) => {
  const navigate = useNavigate();

  // Navigation handler using useNavigate
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Hero button handlers
  const handleJoinUnion = () => {
    handleNavigation("/membershipregistration");
  };

  const handleLearnMore = () => {
    // Smooth scroll to about section
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // About section handler
  const handleLearnMoreAbout = () => {
    handleNavigation("/about");
  };

  // Gallery image click handler
  const handleGalleryImageClick = (image: GalleryImage, index: number) => {
    console.log(`Gallery image clicked: ${image.caption} at index ${index}`);
    // In a real app, you might open a modal or lightbox here
  };

  // Membership registration handler
  const handleMembershipClick = () => {
    handleNavigation("/membershipregistration");
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-slate-900" : "bg-white"
      }`}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero
        title="Strengthening Maritime Workers, Securing Our Future"
        subtitle="Dedicated to the welfare and advancement of Marine Engineers and Maritime Workers across India under the Bharatiya Janata Party"
        backgroundImage="./src/assets/IMG-20230926-WA0013.jpg"
        onJoinClick={handleJoinUnion}
        onLearnMoreClick={handleLearnMore}
      />

      {/* Scrolling Banner */}
      <ScrollingBanner
        messages={[
          "🚢 Empowering Maritime Workforce",
          "⚓ Protecting Workers' Rights",
          "🔧 Supporting Marine Engineers",
          "🇮🇳 Building Stronger India",
          "💼 Career Development Programs",
          "🛡️ Legal Protection Services",
        ]}
        animationSpeed={25}
      />

      {/* About Section */}
      <AboutSection
        title="About BJP Marine Engineers Union"
        subtitle="THE LEADING UNION FOR MARITIME PROFESSIONALS SINCE 2000"
        description={[
          "All India BJP Marine Engineers and Workers Union stands as the premier organization dedicated to the welfare, rights, and advancement of marine engineers and maritime workers across India. Operating under the Bharatiya Janata Party's vision of a stronger India, we ensure that our maritime professionals receive the support, protection, and opportunities they deserve.",
          "Our union represents all domains of maritime workers including marine engineers, deck officers, ratings, port workers, and shore-based maritime professionals. We work tirelessly to improve working conditions, secure fair wages, provide training opportunities, and ensure safety standards across the Indian maritime industry.",
        ]}
        images={[
          {
            src: "./src/assets/IMG-20230124-WA0041.jpg",
            alt: "Maritime Workers Meeting",
            size: "large",
          },
          {
            src: "./src/assets/IMG-20230825-WA0002.jpg",
            alt: "Union Conference",
            size: "small",
          },
          {
            src: "./src/assets/IMG-20230124-WA0042.jpg",
            alt: "Marine Engineers",
            size: "small",
          },
          {
            src: "./src/assets/IMG-20230926-WA0021.jpg",
            alt: "Workers Assembly",
            size: "large",
          },
        ]}
        onLearnMoreClick={handleLearnMoreAbout}
      />

      {/* Services Section */}
      <ServicesSection
        title="Our Services & Benefits"
        subtitle="Comprehensive support and services for all maritime professionals across India"
      />

      {/* Gallery Section (conditional) */}
      {showGallery && (
        <GallerySection
          title="Our Activities & Events"
          subtitle="Showcasing our commitment to maritime professionals through various programs and initiatives"
          images={[
            {
              src: "./src/assets/IMG-20231016-WA0002.jpg",
              alt: "Union Meeting 2023",
              caption: "Annual General Meeting",
              category: "Meetings",
              date: "October 2023",
            },
            {
              src: "./src/assets/IMG-20231025-WA0002.jpg",
              alt: "Training Program",
              caption: "Skills Development Program",
              category: "Training",
              date: "October 2023",
            },
            {
              src: "./src/assets/IMG-20231025-WA0004.jpg",
              alt: "Workers Conference",
              caption: "Maritime Workers Conference",
              category: "Conference",
              date: "October 2023",
            },
            {
              src: "./src/assets/IMG-20231025-WA0005.jpg",
              alt: "Safety Training",
              caption: "Safety Training Session",
              category: "Training",
              date: "October 2023",
            },
            {
              src: "./src/assets/IMG-20231025-WA0007.jpg",
              alt: "Award Ceremony",
              caption: "Excellence Awards 2023",
              category: "Awards",
              date: "October 2023",
            },
            {
              src: "./src/assets/IMG-20231025-WA0009.jpg",
              alt: "Community Event",
              caption: "Community Outreach Program",
              category: "Community",
              date: "October 2023",
            },
          ]}
          onImageClick={handleGalleryImageClick}
        />
      )}

      {/* Footer */}
      <Footer
        onNavigate={handleNavigation}
        onMembershipClick={handleMembershipClick}
        contactInfo={{
          address: [
            "All India BJP Marine Engineers and Workers Union,",
            "Union Bhavan, Marine Drive,",
            "Mumbai - 400 001. (India)",
          ],
          email: "info@bjpmewu.org.in",
          phone: "022 12345678",
          website: "www.bjpmewu.org.in",
          workingHours: "Mon-Fri: 9:00 AM - 6:00 PM",
        }}
      />
    </div>
  );
};
