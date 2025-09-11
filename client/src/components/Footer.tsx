import { Phone, Mail, Users, Anchor, MapPin, Clock, Globe } from "lucide-react";

interface ContactInfo {
  address: string[];
  email: string;
  phone: string;
  website?: string;
  workingHours?: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface FooterProps {
  contactInfo?: ContactInfo;
  socialLinks?: SocialLink[];
  onNavigate?: (path: string) => void;
  onMembershipClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({
  contactInfo = {
    address: [
      "All India BJP Marine Engineers and Workers Union,",
      "Union Bhavan, Marine Drive,",
      "Mumbai - 400 001. (India)",
    ],
    email: "info@bjpmewu.org.in",
    phone: "022 12345678",
    website: "www.bjpmewu.org.in",
    workingHours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
  socialLinks = [
    { platform: "Phone", url: "tel:02212345678", icon: Phone },
    { platform: "Email", url: "mailto:info@bjpmewu.org.in", icon: Mail },
    { platform: "Community", url: "#community", icon: Users },
  ],
  onNavigate,
  onMembershipClick,
}) => {
  const handleNavigation = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      console.log(`Navigating to: ${path}`);
    }
  };

  const handleMembershipClick = () => {
    if (onMembershipClick) {
      onMembershipClick();
    } else {
      handleNavigation("/membershipregistration");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-slate-800 text-white py-12 sm:py-16 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Organization Info */}
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

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Dedicated to the welfare and advancement of Marine Engineers and
              Maritime Workers across India under the Bharatiya Janata Party.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer"
                    title={link.platform}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Head Office
            </h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  {contactInfo.address.map((line, index) => (
                    <p key={index} className="text-gray-300">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-orange-400 transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>

              {contactInfo.website && (
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300">{contactInfo.website}</span>
                </div>
              )}

              {contactInfo.workingHours && (
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    {contactInfo.workingHours}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/services")}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/events")}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Events & Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/careers")}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Career Opportunities
                </button>
              </li>
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Membership
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              All India BJP Marine Engineers and Workers Union plays a vital
              role in protecting and promoting the rights, welfare, and
              interests of maritime professionals.
            </p>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Join thousands of maritime professionals who trust us with their
              career development and rights protection.
            </p>
            <button
              onClick={handleMembershipClick}
              className="bg-orange-600 hover:bg-orange-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              Membership Registration →
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-600 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} BJP Marine Engineers and Workers Union - All India
              | All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
              <button
                onClick={() => handleNavigation("/terms")}
                className="text-gray-400 hover:text-orange-400 transition-colors text-xs sm:text-sm"
              >
                Terms and Conditions
              </button>
              <button
                onClick={() => handleNavigation("/privacy")}
                className="text-gray-400 hover:text-orange-400 transition-colors text-xs sm:text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation("/sitemap")}
                className="text-gray-400 hover:text-orange-400 transition-colors text-xs sm:text-sm"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
