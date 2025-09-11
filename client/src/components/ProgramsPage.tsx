import {
  ArrowLeft,
  BookOpen,
  Heart,
  Shield,
  Users,
  Award,
  Calendar,
  MapPin,
  Clock,
  Star,
  TrendingUp,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

interface ProgramsPageProps {
  onBack?: () => void;
}

const ProgramsPage: React.FC<ProgramsPageProps> = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "education" | "welfare" | "legal" | "training"
  >("all");

  const programs = [
    {
      id: 1,
      title: "Maritime Skills Development Program",
      category: "training",
      type: "Professional Development",
      duration: "6 months",
      participants: "500+ annually",
      description:
        "Comprehensive training program for marine engineers and maritime workers to upgrade their skills and certifications.",
      features: [
        "Advanced Maritime Technology Training",
        "Safety Protocol Certification",
        "International Standards Compliance",
        "Hands-on Practical Sessions",
        "Industry Expert Mentorship",
      ],
      benefits: [
        "95% Job Placement Rate",
        "Industry-Recognized Certificates",
        "Salary Increment Opportunities",
        "Career Advancement Support",
      ],
      eligibility: "Maritime professionals with 2+ years experience",
      fees: "₹25,000 (Subsidized for union members)",
      nextSession: "October 2025",
      locations: ["Mumbai", "Chennai", "Kolkata"],
      status: "active",
      featured: true,
    },
    {
      id: 2,
      title: "Education Scholarship Scheme",
      category: "education",
      type: "Educational Support",
      duration: "Ongoing",
      participants: "200+ annually",
      description:
        "Financial assistance program for children of union members pursuing higher education in maritime and technical fields.",
      features: [
        "Merit-based Scholarships",
        "Need-based Financial Aid",
        "Career Guidance Counseling",
        "Mentorship Programs",
        "Educational Resource Access",
      ],
      benefits: [
        "Up to ₹2 lakhs per year",
        "Book and Equipment Allowance",
        "Internship Opportunities",
        "Career Placement Assistance",
      ],
      eligibility: "Children of union members with minimum 75% marks",
      fees: "Free Application",
      nextSession: "Applications open year-round",
      locations: ["Pan India"],
      status: "active",
      featured: true,
    },
    {
      id: 3,
      title: "Emergency Medical Assistance Program",
      category: "welfare",
      type: "Healthcare Support",
      duration: "24/7 Support",
      participants: "1000+ members covered",
      description:
        "Comprehensive medical emergency support for union members and their families during health crises.",
      features: [
        "24/7 Emergency Helpline",
        "Direct Hospital Tie-ups",
        "Cashless Treatment Facility",
        "Medical Expert Consultations",
        "Follow-up Care Support",
      ],
      benefits: [
        "Up to ₹5 lakhs coverage",
        "Family Coverage Included",
        "Zero Paperwork Emergency Care",
        "Specialist Doctor Network",
      ],
      eligibility: "All active union members",
      fees: "Covered under membership dues",
      nextSession: "Always Available",
      locations: ["Major Cities with Partner Hospitals"],
      status: "active",
      featured: false,
    },
    {
      id: 4,
      title: "Legal Aid and Representation Program",
      category: "legal",
      type: "Legal Support",
      duration: "Case-based",
      participants: "300+ cases annually",
      description:
        "Professional legal assistance for employment disputes, workplace issues, and maritime law matters.",
      features: [
        "Expert Legal Consultation",
        "Court Representation",
        "Documentation Assistance",
        "Settlement Negotiations",
        "Follow-up Legal Support",
      ],
      benefits: [
        "95% Success Rate",
        "No Upfront Legal Fees",
        "Expert Maritime Lawyers",
        "Quick Resolution Process",
      ],
      eligibility: "Union members facing legal issues",
      fees: "Free for members",
      nextSession: "Consultation available daily",
      locations: ["All major port cities"],
      status: "active",
      featured: true,
    },
    {
      id: 5,
      title: "Women in Maritime Leadership Program",
      category: "training",
      type: "Leadership Development",
      duration: "3 months",
      participants: "50+ per batch",
      description:
        "Special leadership development program designed to empower women in the maritime industry.",
      features: [
        "Leadership Skills Training",
        "Industry Networking Events",
        "Mentorship from Senior Leaders",
        "Career Development Planning",
        "Work-life Balance Workshops",
      ],
      benefits: [
        "Leadership Certification",
        "Professional Network Access",
        "Career Advancement Opportunities",
        "Ongoing Mentorship Support",
      ],
      eligibility: "Women maritime professionals with 3+ years experience",
      fees: "₹15,000 (50% discount for members)",
      nextSession: "November 2025",
      locations: ["Mumbai", "Chennai"],
      status: "active",
      featured: false,
    },
    {
      id: 6,
      title: "Retirement Planning and Pension Support",
      category: "welfare",
      type: "Financial Planning",
      duration: "Ongoing",
      participants: "800+ members",
      description:
        "Comprehensive retirement planning assistance and pension optimization for maritime workers.",
      features: [
        "Retirement Planning Consultation",
        "Pension Optimization Strategies",
        "Investment Guidance",
        "Healthcare Planning",
        "Legal Documentation Support",
      ],
      benefits: [
        "Maximized Pension Benefits",
        "Tax-efficient Planning",
        "Healthcare Security",
        "Family Financial Protection",
      ],
      eligibility: "Members above 45 years or with 15+ years service",
      fees: "Free consultation",
      nextSession: "Monthly workshops",
      locations: ["All branch offices"],
      status: "active",
      featured: false,
    },
  ];

  const upcomingEvents = [
    {
      title: "Maritime Technology Workshop",
      date: "September 10, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Training Center, Mumbai",
      category: "training",
    },
    {
      title: "Scholarship Application Workshop",
      date: "September 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Union Office, Chennai",
      category: "education",
    },
    {
      title: "Legal Rights Awareness Session",
      date: "September 20, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Online Webinar",
      category: "legal",
    },
  ];

  const filteredPrograms =
    activeCategory === "all"
      ? programs
      : programs.filter((program) => program.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "education":
        return "bg-blue-100 text-blue-600";
      case "welfare":
        return "bg-green-100 text-green-600";
      case "legal":
        return "bg-red-100 text-red-600";
      case "training":
        return "bg-purple-100 text-purple-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "education":
        return BookOpen;
      case "welfare":
        return Heart;
      case "legal":
        return Shield;
      case "training":
        return Award;
      default:
        return Star;
    }
  };

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
          <h1 className="text-xl sm:text-2xl font-bold">Union Programs</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 to-slate-600 text-white rounded-xl p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Empowering Maritime Professionals
          </h1>
          <p className="text-lg opacity-90 mb-6">
            Comprehensive programs designed to support, educate, and advance the
            careers of our maritime community members.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm opacity-90">Active Programs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2000+</div>
              <div className="text-sm opacity-90">Annual Participants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">₹2 Cr</div>
              <div className="text-sm opacity-90">Annual Investment</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Program Categories
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setActiveCategory("education")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                activeCategory === "education"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Education</span>
            </button>
            <button
              onClick={() => setActiveCategory("training")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                activeCategory === "training"
                  ? "bg-purple-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Training</span>
            </button>
            <button
              onClick={() => setActiveCategory("welfare")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                activeCategory === "welfare"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Welfare</span>
            </button>
            <button
              onClick={() => setActiveCategory("legal")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                activeCategory === "legal"
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Legal Support</span>
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {filteredPrograms.map((program) => {
            const IconComponent = getCategoryIcon(program.category);
            return (
              <div
                key={program.id}
                className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${
                  program.featured ? "ring-2 ring-orange-200" : ""
                }`}
              >
                {program.featured && (
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      FEATURED PROGRAM
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(
                        program.category
                      )}`}
                    >
                      {program.category.toUpperCase()}
                    </span>
                  </div>
                )}

                {!program.featured && (
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        program.category
                      )}`}
                    >
                      {program.category.toUpperCase()}
                    </span>
                    <span className="text-green-600 text-sm font-medium">
                      Active
                    </span>
                  </div>
                )}

                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      {program.title}
                    </h3>
                    <p className="text-sm text-orange-600 font-medium">
                      {program.type}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">{program.participants}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">{program.nextSession}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">
                      {program.locations.join(", ")}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Key Features
                  </h4>
                  <div className="space-y-1">
                    {program.features.slice(0, 3).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {program.features.length > 3 && (
                      <div className="text-xs text-orange-600 font-medium">
                        +{program.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Eligibility:</span>
                      <p className="font-medium text-slate-800">
                        {program.eligibility}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Fees:</span>
                      <p className="font-medium text-slate-800">
                        {program.fees}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                    Apply Now
                  </button>
                  <button className="flex-1 border border-slate-300 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
            <Calendar className="w-5 h-5 text-orange-500 mr-3" />
            Upcoming Program Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(
                      event.category
                    )}`}
                  >
                    {event.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-gray-500">Upcoming</span>
                </div>

                <h3 className="font-bold text-slate-800 mb-2">{event.title}</h3>

                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3 h-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3 h-3" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <button className="w-full mt-3 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded text-sm font-medium transition-colors">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Program Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-slate-600">Students Educated</div>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl text-center">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-purple-600">1200+</div>
            <div className="text-sm text-slate-600">Professionals Trained</div>
          </div>

          <div className="bg-green-50 p-6 rounded-xl text-center">
            <Heart className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-green-600">800+</div>
            <div className="text-sm text-slate-600">Welfare Recipients</div>
          </div>

          <div className="bg-red-50 p-6 rounded-xl text-center">
            <Shield className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-red-600">300+</div>
            <div className="text-sm text-slate-600">Legal Cases Supported</div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-slate-50 to-orange-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 text-orange-500 mr-3" />
            Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-slate-800 mb-2">
                Career Advancement
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                "The Maritime Skills Development Program helped me secure a
                Chief Engineer position with a 40% salary increase."
              </p>
              <p className="text-xs text-orange-600 font-medium">
                - Rajesh Kumar, Chief Engineer
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-slate-800 mb-2">
                Educational Support
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                "The scholarship program enabled my daughter to pursue marine
                engineering. She's now working with a leading shipping company."
              </p>
              <p className="text-xs text-orange-600 font-medium">
                - Priya Sharma, Parent
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-slate-800 mb-2">Legal Victory</h3>
              <p className="text-sm text-gray-600 mb-3">
                "The union's legal team helped me win my employment dispute and
                recover 6 months of unpaid wages."
              </p>
              <p className="text-xs text-orange-600 font-medium">
                - Amit Patel, Marine Engineer
              </p>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-6">
            How to Apply for Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                1
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Check Eligibility
              </h3>
              <p className="text-sm text-gray-600">
                Review program requirements and eligibility criteria
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                2
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Submit Application
              </h3>
              <p className="text-sm text-gray-600">
                Fill out the application form with required documents
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                3
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Review Process
              </h3>
              <p className="text-sm text-gray-600">
                Application reviewed by program committee
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                4
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Confirmation
              </h3>
              <p className="text-sm text-gray-600">
                Receive acceptance notification and program details
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-slate-100 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">
            Program Information & Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">
                General Programs
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>022 12345678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span>programs@bjpmewu.org.in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">
                Training Programs
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-purple-500" />
                  <span>022 12345679</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-purple-500" />
                  <span>training@bjpmewu.org.in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">
                Welfare Programs
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-green-500" />
                  <span>022 12345680</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-green-500" />
                  <span>welfare@bjpmewu.org.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
