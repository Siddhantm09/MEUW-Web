import { Users, Shield, MapPin } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  onJoinClick?: () => void;
  onLearnMoreClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title = "Strengthening Maritime Workers, Securing Our Future",
  subtitle = "Dedicated to the welfare and advancement of Marine Engineers and Maritime Workers across India under the Bharatiya Janata Party",
  backgroundImage = "./src/assets/IMG-20230926-WA0013.jpg",
  onJoinClick,
  onLearnMoreClick,
}) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/70"></div>

      <div className="max-w-full mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {title.includes(",") ? (
              <>
                {title.split(",")[0]},
                <span className="text-orange-400 block">
                  {title.split(",")[1]}
                </span>
              </>
            ) : (
              title
            )}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none">
            <button
              onClick={onJoinClick}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto"
            >
              Join Our Union
            </button>
            <button
              onClick={onLearnMoreClick}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto"
            >
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
