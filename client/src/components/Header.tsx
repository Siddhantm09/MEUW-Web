import { Anchor } from "lucide-react";

interface HeaderProps {
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-slate-800 text-white py-4 px-6 w-full">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <Anchor className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold">
              ALL INDIA BJP MARINE ENGINEERS AND WORKERS UNION
            </h1>
            <p className="text-orange-400 text-sm">
              Empowering Maritime Professionals Across India
            </p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-orange-400 transition-colors">
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-orange-400 transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-orange-400 transition-colors"
          >
            Contact Us
          </a>
          <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded transition-colors">
            Membership Registration
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
