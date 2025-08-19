import {
  ArrowLeft,
  Calendar,
  Users,
  Award,
  Ship,
  Shield,
  Building,
  TrendingUp,
} from "lucide-react";

interface HistoryPageProps {
  onBack?: () => void;
}

const HistoryPage: React.FC<HistoryPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-800 text-white py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center space-x-4">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center space-x-2 hover:text-orange-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          )}
          <h1 className="text-xl sm:text-2xl font-bold">Our History</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            A Legacy of Service Since 2000
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            The All India BJP Marine Engineers and Workers Union was established
            with a vision to create a unified voice for maritime professionals
            across India. Our journey represents decades of dedication to worker
            welfare, safety, and professional advancement.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From humble beginnings in Mumbai to becoming a national force
            representing thousands of maritime professionals, our union stands
            as a testament to the power of collective action and unwavering
            commitment to workers' rights.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-orange-500 text-white p-6 rounded-xl text-center">
            <div className="text-2xl font-bold">25+</div>
            <div className="text-sm opacity-90">Years of Service</div>
          </div>
          <div className="bg-slate-600 text-white p-6 rounded-xl text-center">
            <div className="text-2xl font-bold">5,000+</div>
            <div className="text-sm opacity-90">Active Members</div>
          </div>
          <div className="bg-orange-500 text-white p-6 rounded-xl text-center">
            <div className="text-2xl font-bold">15+</div>
            <div className="text-sm opacity-90">Branch Offices</div>
          </div>
          <div className="bg-slate-600 text-white p-6 rounded-xl text-center">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm opacity-90">Legal Cases Won</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">
            Our Journey Through Time
          </h2>

          <div className="space-y-8">
            {/* 2000 - Foundation */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-800">
                    2000 - Foundation
                  </h3>
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-medium">
                    Inception
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  The All India BJP Marine Engineers and Workers Union was
                  officially established to represent the interests of marine
                  engineers and maritime workers under the Bharatiya Janata
                  Party's vision of a stronger India. Founded by visionary
                  leaders who recognized the need for unified representation in
                  the maritime sector.
                </p>
              </div>
            </div>

            {/* 2005 - First Major Achievement */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-800">
                    2005 - Membership Growth
                  </h3>
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-sm font-medium">
                    Expansion
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Membership reached 1,000 maritime professionals as we expanded
                  our reach across major ports and shipping companies throughout
                  India. Successfully negotiated the first collective bargaining
                  agreement, setting new standards for maritime worker
                  compensation.
                </p>
              </div>
            </div>

            {/* 2008 - Legal Victory */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-800">
                    2008 - Landmark Legal Victory
                  </h3>
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-medium">
                    Milestone
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Won a landmark case in the Supreme Court regarding maritime
                  workers' safety standards, establishing new protocols that
                  became the industry standard. This victory protected thousands
                  of workers and set important legal precedents.
                </p>
              </div>
            </div>

            {/* 2010 - Welfare Programs */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-800">
                    2010 - Welfare Programs Launch
                  </h3>
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-sm font-medium">
                    Social Impact
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Successfully negotiated improved working conditions and safety
                  standards for maritime workers. Established comprehensive
                  welfare programs including healthcare, education scholarships,
                  and emergency financial assistance for members and their
                  families.
                </p>
              </div>
            </div>

            {/* 2015 - National Expansion */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Ship className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-800">
                    2015 - National Expansion
                  </h3>
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-medium">
                    Growth
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Opened branch offices in 10 major maritime cities and expanded
                  services to include shore-based maritime professionals and
                  port workers. Launched the first mobile app for member
                  services and established partnerships with international
                  maritime unions.
                </p>
              </div>
            </div>

            {/* 2018 - Training Centers */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-800">
                    2018 - Training Centers Established
                  </h3>
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-sm font-medium">
                    Education
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Established three state-of-the-art training centers in Mumbai,
                  Chennai, and Kolkata. These centers provide skill development,
                  certification courses, and continuing education programs for
                  maritime professionals, keeping them updated with latest
                  industry standards.
                </p>
              </div>
            </div>

            {/* 2020 - Digital Transformation */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-800">
                    2020 - Digital Transformation
                  </h3>
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-medium">
                    Innovation
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Launched digital services and online platforms to better serve
                  our members, especially during the challenging times of the
                  global pandemic. Introduced virtual consultations, online
                  training programs, and digital welfare application processes.
                </p>
              </div>
            </div>

            {/* 2022 - International Recognition */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-800">
                    2022 - International Recognition
                  </h3>
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-sm font-medium">
                    Achievement
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Received international recognition from the International
                  Transport Workers' Federation (ITF) for outstanding
                  contribution to maritime worker welfare. Became a model union
                  for other developing nations in maritime labor relations.
                </p>
              </div>
            </div>

            {/* 2025 - Today */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-800">
                    2025 - Today
                  </h3>
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-medium">
                    Present
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Now serving over 5,000 active members across 15+ branch
                  offices, continuing our mission to empower and protect
                  maritime professionals across India. Leading advocacy for
                  green shipping initiatives and sustainable maritime practices
                  while maintaining our core focus on worker welfare.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="bg-white rounded-xl p-8 shadow-lg mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-orange-50 rounded-lg border border-orange-100">
              <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-orange-600" />
                Worker Safety
              </h3>
              <p className="text-gray-600 mb-2">
                Implemented comprehensive safety protocols that reduced
                workplace accidents by 60%.
              </p>
              <div className="text-sm text-orange-600 font-medium">
                Impact: 3,000+ workers protected
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-slate-600" />
                Wage Negotiations
              </h3>
              <p className="text-gray-600 mb-2">
                Successfully negotiated fair wages resulting in average 40%
                salary increases for members.
              </p>
              <div className="text-sm text-slate-600 font-medium">
                Impact: ₹50 crores additional income
              </div>
            </div>

            <div className="p-6 bg-orange-50 rounded-lg border border-orange-100">
              <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center">
                <Building className="w-5 h-5 mr-2 text-orange-600" />
                Training Programs
              </h3>
              <p className="text-gray-600 mb-2">
                Trained over 2,000 maritime professionals through skill
                development programs.
              </p>
              <div className="text-sm text-orange-600 font-medium">
                Impact: 85% job placement rate
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center">
                <Award className="w-5 h-5 mr-2 text-slate-600" />
                Legal Support
              </h3>
              <p className="text-gray-600 mb-2">
                Provided legal assistance in over 500 cases with 95% success
                rate.
              </p>
              <div className="text-sm text-slate-600 font-medium">
                Impact: ₹25 crores in settlements
              </div>
            </div>
          </div>
        </div>

        {/* Vision for Future */}
        <div className="bg-gradient-to-r from-orange-500 to-slate-600 text-white rounded-xl p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">Vision for the Future</h2>
          <p className="text-lg mb-4 opacity-90">
            As we look ahead, our union remains committed to adapting to the
            changing maritime landscape while maintaining our core values of
            worker welfare and professional excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Digital Innovation</h3>
              <p className="text-sm opacity-90">
                Embracing technology to better serve our members
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Green Initiatives</h3>
              <p className="text-sm opacity-90">
                Leading sustainable maritime practices
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Global Partnerships</h3>
              <p className="text-sm opacity-90">
                Strengthening international maritime cooperation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
