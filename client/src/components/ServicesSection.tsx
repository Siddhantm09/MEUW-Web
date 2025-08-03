import { Shield, Users, Anchor } from "lucide-react";

interface ServicesSectionProps {
  style?: React.CSSProperties;
}

const ServicesSection: React.FC<ServicesSectionProps> = () => {
  return (
    <section id="services" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Services & Benefits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive support and services for all maritime professionals
            across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
            <Shield className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Legal Protection
            </h3>
            <p className="text-gray-600">
              Complete legal support and representation for workplace disputes
              and employment issues.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl">
            <Users className="w-12 h-12 text-slate-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Welfare Programs
            </h3>
            <p className="text-gray-600">
              Healthcare, education, and financial assistance programs for
              members and their families.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
            <Anchor className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Career Development
            </h3>
            <p className="text-gray-600">
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
