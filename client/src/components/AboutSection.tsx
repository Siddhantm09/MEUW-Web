import { Users, Anchor } from "lucide-react";

interface AboutSectionProps {
  title: string;
  subtitle: string;
}

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Visual Element */}
          <div className="order-2 lg:order-1">
            <div className="bg-slate-100 rounded-lg p-6 sm:p-8 relative">
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Anchor className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
              </div>
              <div className="mt-6 sm:mt-8">
                <div className="bg-orange-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg inline-block mb-4">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                  <span className="text-sm sm:text-base">
                    10,000+ Community of Maritime Professionals
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">
              About BJP Marine Engineers Union
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              <span className="text-orange-600 font-semibold">
                THE LEADING UNION FOR MARITIME PROFESSIONALS SINCE 2000
              </span>
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              All India BJP Marine Engineers and Workers Union stands as the
              premier organization dedicated to the welfare, rights, and
              advancement of marine engineers and maritime workers across India.
              Operating under the Bharatiya Janata Party's vision of a stronger
              India, we ensure that our maritime professionals receive the
              support, protection, and opportunities they deserve.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Our union represents all domains of maritime workers including
              marine engineers, deck officers, ratings, port workers, and
              shore-based maritime professionals. We work tirelessly to improve
              working conditions, secure fair wages, provide training
              opportunities, and ensure safety standards across the Indian
              maritime industry.
            </p>
            <button className="bg-slate-800 hover:bg-slate-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto">
              Learn More About Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
