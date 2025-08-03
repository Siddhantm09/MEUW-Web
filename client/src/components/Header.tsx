import { Anchor, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  // Add properties here, e.g.
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white py-4 px-4 sm:px-6 w-full">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
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
        <nav className="hidden lg:flex space-x-6 xl:space-x-8">
          <a
            href="#about"
            className="hover:text-orange-400 transition-colors text-sm xl:text-base"
          >
            About Us
          </a>
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
          <button className="bg-orange-600 hover:bg-orange-700 px-3 py-2 xl:px-4 xl:py-2 rounded transition-colors text-sm xl:text-base">
            Membership Registration
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
          <nav className="flex flex-col space-y-4 pt-4">
            <a
              href="#about"
              className="hover:text-orange-400 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
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
            <button className="bg-orange-600 hover:bg-orange-700 px-4 py-3 rounded transition-colors mx-4 mt-2">
              Membership Registration
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
