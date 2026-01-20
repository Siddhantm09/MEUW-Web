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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-orange-900/70"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] sm:min-h-[80vh]">
          {/* Left side - Empty space for future photos */}
          <div className="hidden lg:block">
            {/* Photo placeholder - content will be added here later */}
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
              {title.includes(",") ? (
                <>
                  {title.split(",")[0]},
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 block mt-2">
                    {title.split(",")[1]}
                  </span>
                </>
              ) : (
                title
              )}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button
                onClick={onJoinClick}
                className="group bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 flex items-center justify-center gap-2"
              >
                Join Our Union
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button
                onClick={onLearnMoreClick}
                className="border-2 border-white/50 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto backdrop-blur-sm hover:scale-105"
              >
                Learn More
              </button>
            </div>

            {/* Stats moved under buttons in right column */}
            <div className="mt-8 sm:mt-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 grid grid-cols-3 gap-3 sm:gap-4 border border-white/20 shadow-2xl">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-full mb-1 sm:mb-2">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                    5,000+
                  </div>
                  <div className="text-gray-300 text-[10px] sm:text-xs md:text-sm font-medium leading-tight">
                    Active Members
                  </div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-full mb-1 sm:mb-2">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                    25+
                  </div>
                  <div className="text-gray-300 text-[10px] sm:text-xs md:text-sm font-medium leading-tight">
                    Years of Service
                  </div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full mb-1 sm:mb-2">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                    15+
                  </div>
                  <div className="text-gray-300 text-[10px] sm:text-xs md:text-sm font-medium leading-tight">
                    Branch Offices
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
