import { Users, Shield, MapPin } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-slate-800 to-slate-600 flex items-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23334155" width="1200" height="800"/><path fill="%23475569" d="M0 400c200-50 400-100 600-50s400 100 600 50v400H0z"/><circle fill="%23f97316" cx="900" cy="200" r="60" opacity="0.8"/><rect fill="%23064e3b" x="850" y="350" width="100" height="200" opacity="0.6"/></svg>\')',
        }}
      ></div>

      <div className="max-w-full mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Strengthening Maritime Workers,
            <span className="text-orange-400 block">Securing Our Future</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl">
            Dedicated to the welfare and advancement of Marine Engineers and
            Maritime Workers across India under the Bharatiya Janata Party
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
              Join Our Union
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 right-4 sm:left-6 sm:right-6">
        <div className="max-w-full mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                5,000+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Active Members
              </div>
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                25+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Years of Service
              </div>
            </div>
            <div className="text-center">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                15+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Branch Offices
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
