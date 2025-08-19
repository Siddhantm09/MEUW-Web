import { Phone, Mail, Users, Anchor } from "lucide-react";

interface FooterProps {
  title?: string;
  subtitle?: string;
}

const Footer: React.FC<FooterProps> = () => {
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
            <div className="flex space-x-3 sm:space-x-4">
              <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
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
              <div className="flex items-center space-x-2 sm:space-x-3 mt-4 sm:mt-6">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" />
                <span className="break-all">info@bjpmewu.org.in</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" />
                <span>022 12345678</span>
              </div>
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
              interests of maritime professionals. As a leading union under the
              BJP, we provide strong representation in employment conditions,
              wages, and safety standards both nationally and internationally.
            </p>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              To become a member, please visit our Head Office in Mumbai or any
              of our branch offices across India.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto">
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
              <a
                href="#terms"
                className="text-gray-400 hover:text-orange-400 transition-colors text-xs sm:text-sm"
              >
                Terms and Conditions
              </a>
              <a
                href="#privacy"
                className="text-gray-400 hover:text-orange-400 transition-colors text-xs sm:text-sm"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
