import { Users, Shield, MapPin } from "lucide-react";

interface HeroProps {
  style?: React.CSSProperties;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-slate-800 to-slate-600 flex items-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23334155" width="1200" height="800"/><path fill="%23475569" d="M0 400c200-50 400-100 600-50s400 100 600 50v400H0z"/><circle fill="%23f97316" cx="900" cy="200" r="60" opacity="0.8"/><rect fill="%23064e3b" x="850" y="350" width="100" height="200" opacity="0.6"/></svg>\')',
        }}
      ></div>

      <div className="max-w-full mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Strengthening Maritime Workers,
            <span className="text-orange-400 block">Securing Our Future</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Dedicated to the welfare and advancement of Marine Engineers and
            Maritime Workers across India under the Bharatiya Janata Party
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Join Our Union
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-8 left-0 right-0 px-6">
        <div className="max-w-full mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Users className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">5,000+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-gray-300">Years of Service</div>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-gray-300">Branch Offices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
