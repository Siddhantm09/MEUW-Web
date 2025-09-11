import {
  ArrowLeft,
  Trophy,
  Award,
  Star,
  Users,
  Shield,
  Calendar,
  Target,
  TrendingUp,
  Heart,
  BookOpen,
  Gavel,
} from "lucide-react";

interface AchievementsPageProps {
  onBack?: () => void;
}

const AchievementsPage: React.FC<AchievementsPageProps> = ({ onBack }) => {
  const majorAchievements = [
    {
      year: "2008",
      title: "Supreme Court Victory",
      description:
        "Won landmark case establishing maritime safety protocols that became industry standard",
      icon: Gavel,
      category: "Legal",
      impact: "Protected over 3,000 workers",
    },
    {
      year: "2015",
      title: "National Expansion Milestone",
      description:
        "Successfully established union presence in 15 major maritime cities across India",
      icon: Target,
      category: "Growth",
      impact: "15 branch offices opened",
    },
    {
      year: "2018",
      title: "Training Center Excellence",
      description:
        "Established state-of-the-art training centers with 95% job placement success rate",
      icon: BookOpen,
      category: "Education",
      impact: "2,000+ professionals trained",
    },
    {
      year: "2020",
      title: "Digital Innovation Leader",
      description:
        "First maritime union to launch comprehensive digital services platform",
      icon: TrendingUp,
      category: "Technology",
      impact: "Served 5,000+ members digitally",
    },
    {
      year: "2022",
      title: "International Recognition",
      description:
        "Received ITF Outstanding Contribution Award for maritime worker welfare",
      icon: Award,
      category: "Recognition",
      impact: "Global benchmark status",
    },
    {
      year: "2024",
      title: "Welfare Program Impact",
      description:
        "Distributed ₹50 crores in welfare benefits and emergency assistance",
      icon: Heart,
      category: "Welfare",
      impact: "10,000+ families supported",
    },
  ];

  const statisticalAchievements = [
    { metric: "95%", label: "Legal Case Success Rate", icon: Shield },
    { metric: "₹50 Cr", label: "Welfare Benefits Distributed", icon: Heart },
    { metric: "5,000+", label: "Active Members", icon: Users },
    { metric: "25+", label: "Years of Service", icon: Calendar },
    { metric: "40%", label: "Average Salary Increase", icon: TrendingUp },
    { metric: "500+", label: "Legal Cases Won", icon: Gavel },
  ];

  const awards = [
    {
      title: "ITF Outstanding Contribution Award",
      year: "2022",
      organization: "International Transport Workers' Federation",
      description:
        "For exceptional contribution to maritime worker welfare globally",
    },
    {
      title: "Best Maritime Union Award",
      year: "2021",
      organization: "Maritime Industry Council of India",
      description:
        "Recognition for innovative welfare programs and member services",
    },
    {
      title: "Excellence in Worker Safety",
      year: "2020",
      organization: "Ministry of Shipping, Government of India",
      description:
        "For implementing comprehensive safety protocols across maritime sector",
    },
    {
      title: "Digital Innovation in Labor Relations",
      year: "2020",
      organization: "All India Trade Union Congress",
      description:
        "First union to digitize member services and welfare programs",
    },
    {
      title: "Model Union Recognition",
      year: "2019",
      organization: "ILO Asia-Pacific Regional Office",
      description:
        "Recognized as model for developing nations in maritime labor relations",
    },
  ];

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
          <h1 className="text-xl sm:text-2xl font-bold">Our Achievements</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 to-slate-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Trophy className="w-12 h-12 text-yellow-300" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                25 Years of Excellence
              </h1>
              <p className="text-lg opacity-90">
                Celebrating our journey of empowering maritime professionals
                across India
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-90">Legal Victories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">₹50 Cr</div>
              <div className="text-sm opacity-90">Benefits Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm opacity-90">Branch Offices</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm opacity-90">International Awards</div>
            </div>
          </div>
        </div>

        {/* Statistical Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {statisticalAchievements.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-800 mb-1">
                {stat.metric}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Major Achievements Timeline */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Star className="w-6 h-6 text-orange-500 mr-3" />
            Major Milestones
          </h2>

          <div className="space-y-8">
            {majorAchievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-bold">
                      {achievement.year}
                    </span>
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
                      {achievement.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm">
                    <Target className="w-4 h-4" />
                    <span>{achievement.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards and Recognition */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Award className="w-6 h-6 text-orange-500 mr-3" />
            Awards and Recognition
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-sm font-medium">
                    {award.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {award.title}
                </h3>

                <p className="text-orange-600 font-semibold mb-3 text-sm">
                  {award.organization}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <Shield className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Legal Protection
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Comprehensive legal support with 95% success rate in employment
              disputes.
            </p>
            <div className="text-2xl font-bold text-blue-600">500+</div>
            <div className="text-xs text-gray-500">Cases Won</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
            <Heart className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Welfare Programs
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Emergency assistance, healthcare, and educational support for
              families.
            </p>
            <div className="text-2xl font-bold text-green-600">₹50 Cr</div>
            <div className="text-xs text-gray-500">Benefits Distributed</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
            <BookOpen className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Training & Development
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Skill development programs with industry-leading placement rates.
            </p>
            <div className="text-2xl font-bold text-purple-600">2,000+</div>
            <div className="text-xs text-gray-500">Professionals Trained</div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
            <TrendingUp className="w-10 h-10 text-orange-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Wage Improvement
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Successful negotiations resulting in significant salary increases.
            </p>
            <div className="text-2xl font-bold text-orange-600">40%</div>
            <div className="text-xs text-gray-500">Average Increase</div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Target className="w-6 h-6 text-orange-400 mr-3" />
            Looking Ahead: Our Vision for 2030
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Digital Transformation</h3>
              <p className="text-sm opacity-90">
                Complete digitization of all union services and member
                interactions
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Green Maritime Initiative</h3>
              <p className="text-sm opacity-90">
                Leading India's transition to sustainable maritime practices
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Global Partnership</h3>
              <p className="text-sm opacity-90">
                Expanding international cooperation and worker exchange programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
