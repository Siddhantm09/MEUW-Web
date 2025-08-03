import { Shield, Users, Anchor } from "lucide-react";

interface ServicesSectionProps {
  title: string;
  subtitle: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
            Our Services & Benefits
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive support and services for all maritime professionals
            across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 sm:p-8 rounded-xl">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
              Legal Protection
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Complete legal support and representation for workplace disputes
              and employment issues.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-8 rounded-xl">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 text-slate-600 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
              Welfare Programs
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Healthcare, education, and financial assistance programs for
              members and their families.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 sm:p-8 rounded-xl md:col-span-2 lg:col-span-1">
            <Anchor className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
              Career Development
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Training programs, certification assistance, and career
              advancement opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
