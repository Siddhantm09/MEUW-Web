import { Users, Anchor } from "lucide-react";

interface AboutSectionProps {
  style?: React.CSSProperties; // Optional style prop
  // Add props for customization
}

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-slate-100 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Anchor className="w-12 h-12 text-white" />
              </div>
              <div className="mt-8">
                <div className="bg-orange-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
                  <Users className="w-5 h-5 inline mr-2" />
                  10,000+ Community of Maritime Professionals
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              About BJP Marine Engineers Union
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              <span className="text-orange-600 font-semibold">
                THE LEADING UNION FOR MARITIME PROFESSIONALS SINCE 2000
              </span>
            </p>
            <p className="text-gray-600 mb-6">
              All India BJP Marine Engineers and Workers Union stands as the
              premier organization dedicated to the welfare, rights, and
              advancement of marine engineers and maritime workers across India.
              Operating under the Bharatiya Janata Party's vision of a stronger
              India, we ensure that our maritime professionals receive the
              support, protection, and opportunities they deserve.
            </p>
            <p className="text-gray-600 mb-8">
              Our union represents all domains of maritime workers including
              marine engineers, deck officers, ratings, port workers, and
              shore-based maritime professionals. We work tirelessly to improve
              working conditions, secure fair wages, provide training
              opportunities, and ensure safety standards across the Indian
              maritime industry.
            </p>
            <button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Learn More About Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
