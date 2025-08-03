import { Phone, Mail, Users, Anchor } from "lucide-react";

interface FooterProps {
  style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer id="contact" className="bg-slate-800 text-white py-16 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo and Info */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <Anchor className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ALL INDIA BJP MARINE</h3>
                <h3 className="text-xl font-bold">
                  ENGINEERS AND WORKERS UNION
                </h3>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Head Office */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Head Office</h3>
            <div className="space-y-4">
              <p>All India BJP Marine Engineers and Workers Union,</p>
              <p>Union Bhavan, Marine Drive,</p>
              <p>Mumbai - 400 001. (India)</p>
              <div className="flex items-center space-x-3 mt-6">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>info@bjpmewu.org.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>022 12345678</span>
              </div>
            </div>
          </div>

          {/* Membership */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Membership</h3>
            <p className="text-gray-300 mb-6">
              All India BJP Marine Engineers and Workers Union plays a vital
              role in protecting and promoting the rights, welfare, and
              interests of maritime professionals. As a leading union under the
              BJP, we provide strong representation in employment conditions,
              wages, and safety standards both nationally and internationally.
            </p>
            <p className="text-gray-300 mb-6">
              To become a member, please visit our Head Office in Mumbai or any
              of our branch offices across India.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Membership Registration →
            </button>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 BJP Marine Engineers and Workers Union - All India | All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
