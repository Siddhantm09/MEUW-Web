import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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
    <>
      {/* Decorative Top Banner */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 w-full z-50"></div>

      <header className="fixed top-2 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-xl text-white shadow-lg">
        <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-12 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
          <div
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group flex-shrink-0 ml-0 min-w-0"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white/10 flex items-center justify-center ring-2 ring-orange-500/30 group-hover:ring-orange-500/60 transition-all duration-300 flex-shrink-0">
              <img
                src="/assets/logo.png"
                alt="ALL INDIA BJP MARINE ENGINEERS AND WORKERS UNION logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink min-w-0">
              <h1 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold leading-tight tracking-wide truncate">
                ALL INDIA BJP MARINE ENGINEERS AND WORKERS UNION
              </h1>
              <p className="text-orange-400 text-[8px] sm:text-[10px] md:text-xs hidden sm:block font-medium tracking-wider truncate">
                Empowering Maritime Professionals Across India
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-shrink-0">
            {/* About Us Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 text-sm font-medium">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 pt-3 w-56 z-50">
                  <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl py-2 border border-gray-200/50 overflow-hidden">
                    <button
                      onClick={() => handleNavigation("/history")}
                      className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 transition-all duration-200 font-medium"
                    >
                      History
                    </button>
                    <button
                      onClick={() => handleNavigation("/secretary-message")}
                      className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 transition-all duration-200 font-medium"
                    >
                      Message from General Secretary
                    </button>
                    <button
                      onClick={() => handleNavigation("/achievements")}
                      className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 transition-all duration-200 font-medium"
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
              <button className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 text-sm font-medium">
                <span>Structure</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "structure" && (
                <div className="absolute top-full left-0 pt-3 w-52 z-50">
                  <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl py-2 border border-gray-200/50 overflow-hidden">
                    <button
                      onClick={() => handleNavigation("/national-committee")}
                      className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 transition-all duration-200 font-medium"
                    >
                      National Committee
                    </button>
                    <button
                      onClick={() => handleNavigation("/state-committee")}
                      className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 transition-all duration-200 font-medium"
                    >
                      State Committee
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation("/upcoming-meetings")}
              className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 text-sm font-medium"
            >
              Upcoming Meetings
            </button>

            <button
              onClick={() => handleNavigation("/programs")}
              className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 text-sm font-medium"
            >
              Programs
            </button>

            <button
              onClick={() => handleNavigation("/sponsors")}
              className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 text-sm font-medium"
            >
              Sponsors
            </button>

            <a
              href="#services"
              className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 text-sm font-medium"
            >
              Contact Us
            </a>
            <button
              onClick={() => handleNavigation("/donations")}
              className="ml-1 xl:ml-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-3 xl:px-4 py-2 rounded-lg transition-all duration-200 text-xs xl:text-sm font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
            >
              Donation
            </button>
            <button
              onClick={() => handleNavigation("/membershipregistration")}
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 px-3 xl:px-4 py-2 rounded-lg transition-all duration-200 text-xs xl:text-sm font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105"
            >
              Registration
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1 sm:p-1.5 mr-2 sm:mr-3 rounded-lg hover:bg-white/10 transition-all duration-200 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 pb-4 border-t border-white/10 bg-slate-900/50 backdrop-blur-lg">
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
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-4 py-3 rounded-lg transition-all duration-200 mx-4 mt-2 font-semibold shadow-lg"
              >
                Donation
              </button>
              <button
                onClick={() => handleNavigation("/membershipregistration")}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 px-4 py-3 rounded-lg transition-all duration-200 mx-4 mt-2 font-semibold shadow-lg"
              >
                Registration
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
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

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <Hero
        title="Strengthening Maritime Workers, Securing Our Future"
        subtitle="Dedicated to the welfare and advancement of Marine Engineers and Maritime Workers across India under the Bharatiya Janata Party"
        backgroundImage="/assets/IMG-20230926-WA0013.jpg"
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
            src: "/assets/IMG-20230124-WA0041.jpg",
            alt: "Maritime Workers Meeting",
            size: "large",
          },
          {
            src: "/assets/IMG-20230825-WA0002.jpg",
            alt: "Union Conference",
            size: "small",
          },
          {
            src: "/assets/IMG-20230124-WA0042.jpg",
            alt: "Marine Engineers",
            size: "small",
          },
          {
            src: "/assets/IMG-20230926-WA0021.jpg",
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
              src: "/assets/IMG-20231016-WA0002.jpg",
              alt: "Union Meeting 2023",
              caption: "Annual General Meeting",
              category: "Meetings",
              date: "October 2023",
            },
            {
              src: "/assets/IMG-20231025-WA0002.jpg",
              alt: "Training Program",
              caption: "Skills Development Program",
              category: "Training",
              date: "October 2023",
            },
            {
              src: "/assets/IMG-20231025-WA0004.jpg",
              alt: "Workers Conference",
              caption: "Maritime Workers Conference",
              category: "Conference",
              date: "October 2023",
            },
            {
              src: "/assets/IMG-20231025-WA0005.jpg",
              alt: "Safety Training",
              caption: "Safety Training Session",
              category: "Training",
              date: "October 2023",
            },
            {
              src: "/assets/IMG-20231025-WA0007.jpg",
              alt: "Award Ceremony",
              caption: "Excellence Awards 2023",
              category: "Awards",
              date: "October 2023",
            },
            {
              src: "/assets/IMG-20231025-WA0009.jpg",
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
