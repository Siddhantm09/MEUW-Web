import {
  ArrowLeft,
  Star,
  Award,
  Handshake,
  Heart,
  Phone,
  Mail,
  ExternalLink,
  Target,
  TrendingUp,
  Users,
  Shield,
  Anchor,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface SponsorsPageProps {
  onBack?: () => void;
}

const SponsorsPage: React.FC<SponsorsPageProps> = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "platinum" | "gold" | "silver" | "community"
  >("all");

  const sponsors = [
    {
      id: 1,
      name: "Shipping Corporation of India",
      category: "platinum",
      logo: "SCI",
      industry: "Maritime Shipping",
      partnership: "Principal Partner",
      since: "2018",
      contribution: "₹50 lakhs annually",
      description:
        "Leading Indian shipping company supporting maritime education and worker welfare programs.",
      website: "www.shipindia.com",
      contact: "partnerships@shipindia.com",
      initiatives: [
        "Maritime Skills Development Program",
        "Emergency Medical Fund",
        "Training Center Infrastructure",
        "Scholarship Program",
      ],
      impact: "500+ professionals trained annually",
      featured: true,
    },
    {
      id: 2,
      name: "Larsen & Toubro Limited",
      category: "platinum",
      logo: "L&T",
      industry: "Engineering & Construction",
      partnership: "Technology Partner",
      since: "2019",
      contribution: "₹35 lakhs annually",
      description:
        "Multinational conglomerate supporting technological advancement in maritime sector.",
      website: "www.larsentoubro.com",
      contact: "csr@larsentoubro.com",
      initiatives: [
        "Digital Skills Training",
        "Safety Equipment Provision",
        "Innovation Labs",
        "Technical Certification Programs",
      ],
      impact: "300+ engineers upskilled",
      featured: true,
    },
    {
      id: 3,
      name: "Indian Oil Corporation",
      category: "gold",
      logo: "IOC",
      industry: "Oil & Gas",
      partnership: "Strategic Partner",
      since: "2020",
      contribution: "₹25 lakhs annually",
      description:
        "National oil company supporting energy sector maritime operations and training.",
      website: "www.iocl.com",
      contact: "sustainability@iocl.com",
      initiatives: [
        "Environmental Safety Training",
        "Renewable Energy Programs",
        "Workers Health Insurance",
        "Family Welfare Schemes",
      ],
      impact: "200+ families supported",
      featured: false,
    },
    {
      id: 4,
      name: "Mazagon Dock Shipbuilders",
      category: "gold",
      logo: "MDL",
      industry: "Shipbuilding",
      partnership: "Industry Partner",
      since: "2017",
      contribution: "₹20 lakhs annually",
      description:
        "Premier shipbuilding company supporting skill development and employment programs.",
      website: "www.mazagondock.in",
      contact: "hr@mazagondock.in",
      initiatives: [
        "Apprenticeship Programs",
        "Advanced Welding Training",
        "Quality Certification",
        "Employment Guarantee Schemes",
      ],
      impact: "150+ placements annually",
      featured: false,
    },
    {
      id: 5,
      name: "JSW Steel Limited",
      category: "gold",
      logo: "JSW",
      industry: "Steel Manufacturing",
      partnership: "Corporate Partner",
      since: "2021",
      contribution: "₹18 lakhs annually",
      description:
        "Leading steel manufacturer supporting infrastructure and material needs.",
      website: "www.jswsteel.in",
      contact: "csr@jswsteel.in",
      initiatives: [
        "Infrastructure Development",
        "Material Support for Training Centers",
        "Equipment Modernization",
        "Safety Gear Provision",
      ],
      impact: "3 training centers upgraded",
      featured: false,
    },
    {
      id: 6,
      name: "Mumbai Port Trust",
      category: "silver",
      logo: "MPT",
      industry: "Port Operations",
      partnership: "Operational Partner",
      since: "2019",
      contribution: "₹12 lakhs annually",
      description:
        "Major port authority supporting port workers and operational training programs.",
      website: "www.mumbaiport.gov.in",
      contact: "admin@mumbaiport.gov.in",
      initiatives: [
        "Port Operations Training",
        "Safety Protocol Development",
        "Worker Welfare Schemes",
        "Health Check-up Camps",
      ],
      impact: "400+ port workers trained",
      featured: false,
    },
    {
      id: 7,
      name: "Cochin Shipyard Limited",
      category: "silver",
      logo: "CSL",
      industry: "Shipbuilding",
      partnership: "Training Partner",
      since: "2020",
      contribution: "₹10 lakhs annually",
      description:
        "Leading shipyard providing specialized training and employment opportunities.",
      website: "www.cochinshipyard.com",
      contact: "training@cochinshipyard.com",
      initiatives: [
        "Specialized Ship Repair Training",
        "Modern Shipbuilding Techniques",
        "Quality Assurance Programs",
        "International Certification Support",
      ],
      impact: "100+ specialized certifications",
      featured: false,
    },
    {
      id: 8,
      name: "Chennai Port Trust",
      category: "silver",
      logo: "CPT",
      industry: "Port Operations",
      partnership: "Regional Partner",
      since: "2018",
      contribution: "₹8 lakhs annually",
      description:
        "Southern India's major port supporting regional maritime workforce development.",
      website: "www.chennaiport.gov.in",
      contact: "welfare@chennaiport.gov.in",
      initiatives: [
        "Regional Training Programs",
        "Local Employment Schemes",
        "Community Health Programs",
        "Educational Scholarships",
      ],
      impact: "250+ local workers benefited",
      featured: false,
    },
    {
      id: 9,
      name: "Maritime Workers Cooperative Bank",
      category: "community",
      logo: "MWCB",
      industry: "Banking & Finance",
      partnership: "Financial Partner",
      since: "2016",
      contribution: "₹15 lakhs annually",
      description:
        "Cooperative bank providing financial services and support to maritime workers.",
      website: "www.maritimecoop.bank",
      contact: "services@maritimecoop.bank",
      initiatives: [
        "Low-interest Education Loans",
        "Emergency Financial Assistance",
        "Savings Schemes for Workers",
        "Insurance Products",
      ],
      impact: "1000+ financial services provided",
      featured: false,
    },
    {
      id: 10,
      name: "Indian Maritime Association",
      category: "community",
      logo: "IMA",
      industry: "Maritime Services",
      partnership: "Knowledge Partner",
      since: "2015",
      contribution: "₹5 lakhs annually",
      description:
        "Professional maritime association supporting knowledge sharing and best practices.",
      website: "www.indianmaritime.org",
      contact: "info@indianmaritime.org",
      initiatives: [
        "Industry Best Practices Sharing",
        "Professional Networking Events",
        "Maritime Law Workshops",
        "Career Guidance Programs",
      ],
      impact: "500+ professionals connected",
      featured: false,
    },
  ];

  const partnershipBenefits = [
    {
      icon: Heart,
      title: "Corporate Social Responsibility",
      description:
        "Fulfill CSR mandates while making meaningful impact on maritime workforce development",
    },
    {
      icon: Users,
      title: "Skilled Workforce Access",
      description:
        "First access to trained and certified maritime professionals from our programs",
    },
    {
      icon: Star,
      title: "Brand Recognition",
      description:
        "Enhanced brand visibility among maritime community and industry stakeholders",
    },
    {
      icon: Handshake,
      title: "Industry Collaboration",
      description:
        "Direct collaboration opportunities with leading maritime organizations",
    },
    {
      icon: Award,
      title: "Excellence Recognition",
      description:
        "Annual recognition at industry events and conferences for partnership contributions",
    },
    {
      icon: TrendingUp,
      title: "Business Development",
      description:
        "Networking opportunities and potential business partnerships within maritime sector",
    },
  ];

  const sponsorshipTiers = [
    {
      tier: "Platinum Partner",
      amount: "₹25 lakhs+",
      benefits: [
        "Principal sponsor recognition at all major events",
        "Dedicated program naming rights",
        "Board representation in union committees",
        "Quarterly partnership review meetings",
        "Priority access to skilled workforce",
        "Custom CSR program development",
        "Annual partnership award ceremony",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      tier: "Gold Partner",
      amount: "₹10-25 lakhs",
      benefits: [
        "Major sponsor recognition at events",
        "Program co-sponsorship opportunities",
        "Quarterly progress reports",
        "Access to training programs",
        "Networking event invitations",
        "Brand placement in union materials",
        "Semi-annual review meetings",
      ],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      tier: "Silver Partner",
      amount: "₹5-10 lakhs",
      benefits: [
        "Event sponsor recognition",
        "Newsletter and website mentions",
        "Annual progress reports",
        "Training program access",
        "Industry networking opportunities",
        "Digital brand placement",
        "Annual partnership meeting",
      ],
      color: "from-gray-400 to-gray-500",
    },
    {
      tier: "Community Partner",
      amount: "₹1-5 lakhs",
      benefits: [
        "Community event recognition",
        "Local program support",
        "Quarterly updates",
        "Community networking events",
        "Local brand visibility",
        "Partnership certificate",
        "Community impact reports",
      ],
      color: "from-green-500 to-green-600",
    },
  ];

  const filteredSponsors =
    activeCategory === "all"
      ? sponsors
      : sponsors.filter((sponsor) => sponsor.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "platinum":
        return "bg-purple-100 text-purple-600";
      case "gold":
        return "bg-yellow-100 text-yellow-600";
      case "silver":
        return "bg-gray-100 text-gray-600";
      case "community":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getTotalContribution = () => {
    return filteredSponsors.reduce((total, sponsor) => {
      const amount = parseInt(sponsor.contribution.replace(/[₹,lakhs\s]/g, ""));
      return total + amount;
    }, 0);
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
          <h1 className="text-xl sm:text-2xl font-bold">
            Our Sponsors & Partners
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 to-slate-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Handshake className="w-12 h-12 text-yellow-300" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                Building Partnerships for Maritime Excellence
              </h1>
              <p className="text-lg opacity-90">
                Together with our valued partners, we're creating opportunities
                and driving innovation in India's maritime sector
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm opacity-90">Active Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">₹2 Cr+</div>
              <div className="text-sm opacity-90">Annual Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-sm opacity-90">Workers Benefited</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-90">Joint Programs</div>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <Star className="w-6 h-6 text-orange-500 mr-3" />
            Why Partner With Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-orange-50 transition-colors"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Tiers */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <Award className="w-6 h-6 text-orange-500 mr-3" />
            Partnership Tiers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className={`bg-gradient-to-r ${tier.color} text-white p-4 text-center`}
                >
                  <h3 className="font-bold text-lg mb-1">{tier.tier}</h3>
                  <p className="text-sm opacity-90">{tier.amount}</p>
                </div>

                <div className="p-4">
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full mt-4 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Our Partners
          </h2>
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Partners ({sponsors.length})
            </button>
            <button
              onClick={() => setActiveCategory("platinum")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === "platinum"
                  ? "bg-purple-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Platinum (
              {sponsors.filter((s) => s.category === "platinum").length})
            </button>
            <button
              onClick={() => setActiveCategory("gold")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === "gold"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Gold ({sponsors.filter((s) => s.category === "gold").length})
            </button>
            <button
              onClick={() => setActiveCategory("silver")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === "silver"
                  ? "bg-gray-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Silver ({sponsors.filter((s) => s.category === "silver").length})
            </button>
            <button
              onClick={() => setActiveCategory("community")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === "community"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Community (
              {sponsors.filter((s) => s.category === "community").length})
            </button>
          </div>

          <div className="text-sm text-gray-600">
            Total Annual Contribution:{" "}
            <span className="font-bold text-orange-600">
              ₹{getTotalContribution()}+ lakhs
            </span>
          </div>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredSponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${
                sponsor.featured ? "ring-2 ring-orange-200" : ""
              }`}
            >
              {sponsor.featured && (
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    FEATURED PARTNER
                  </span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(
                      sponsor.category
                    )}`}
                  >
                    {sponsor.category.toUpperCase()}
                  </span>
                </div>
              )}

              {!sponsor.featured && (
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      sponsor.category
                    )}`}
                  >
                    {sponsor.category.toUpperCase()}
                  </span>
                  <span className="text-gray-500 text-xs">
                    Since {sponsor.since}
                  </span>
                </div>
              )}

              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">
                    {sponsor.logo}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {sponsor.name}
                  </h3>
                  <p className="text-sm text-orange-600 font-medium mb-1">
                    {sponsor.partnership}
                  </p>
                  <p className="text-xs text-gray-500">{sponsor.industry}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {sponsor.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-500">Annual Contribution:</span>
                  <p className="font-bold text-green-600">
                    {sponsor.contribution}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Impact:</span>
                  <p className="font-bold text-blue-600">{sponsor.impact}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-slate-800 mb-2 text-sm">
                  Key Initiatives
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sponsor.initiatives.slice(0, 3).map((initiative, index) => (
                    <span
                      key={index}
                      className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs"
                    >
                      {initiative}
                    </span>
                  ))}
                  {sponsor.initiatives.length > 3 && (
                    <span className="text-orange-600 text-xs font-medium">
                      +{sponsor.initiatives.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex space-x-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Mail className="w-3 h-3" />
                    <span>{sponsor.contact}</span>
                  </div>
                </div>
                <button className="flex items-center space-x-1 text-orange-600 hover:text-orange-700 text-xs font-medium">
                  <ExternalLink className="w-3 h-3" />
                  <span>Visit Website</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-slate-50 to-orange-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <Target className="w-6 h-6 text-orange-500 mr-3" />
            Partnership Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Anchor className="w-8 h-8 text-blue-600" />
                <h3 className="font-bold text-slate-800">
                  SCI Partnership Impact
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Our partnership with Shipping Corporation of India has resulted
                in training over 500 marine engineers and establishing 3 new
                training centers across major ports.
              </p>
              <div className="text-xs text-blue-600 font-medium">
                500+ professionals trained • 3 centers established
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="w-8 h-8 text-purple-600" />
                <h3 className="font-bold text-slate-800">
                  L&T Technology Initiative
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Larsen & Toubro's support has enabled digital transformation of
                our training programs, with over 300 engineers gaining advanced
                technical certifications.
              </p>
              <div className="text-xs text-purple-600 font-medium">
                300+ digital certifications • 100% placement rate
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="w-8 h-8 text-green-600" />
                <h3 className="font-bold text-slate-800">IOC Safety Program</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Indian Oil Corporation's partnership has enhanced maritime
                safety standards, resulting in 60% reduction in workplace
                accidents across partner facilities.
              </p>
              <div className="text-xs text-green-600 font-medium">
                60% accident reduction • 200+ families protected
              </div>
            </div>
          </div>
        </div>

        {/* Become a Partner */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 text-white rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Handshake className="w-6 h-6 text-orange-400 mr-3" />
            Become Our Partner
          </h2>

          <p className="text-lg mb-6 opacity-90">
            Join us in empowering India's maritime workforce and building a
            stronger, safer maritime industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-bold mb-2">For Corporations</h3>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• Comprehensive CSR partnership opportunities</li>
                <li>• Access to skilled maritime workforce</li>
                <li>• Industry leadership recognition</li>
                <li>• Custom program development</li>
              </ul>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-bold mb-2">For Organizations</h3>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• Knowledge sharing partnerships</li>
                <li>• Joint training program development</li>
                <li>• Industry collaboration opportunities</li>
                <li>• Maritime expertise exchange</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Partnership Inquiry
            </button>
            <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Download Partnership Brochure
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-slate-800 mb-4">
            Partnership Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">
                Corporate Partnerships
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>022 12345681</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span>partnerships@bjpmewu.org.in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">
                CSR Programs
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-green-500" />
                  <span>022 12345682</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-green-500" />
                  <span>csr@bjpmewu.org.in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">
                General Inquiries
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>022 12345678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>info@bjpmewu.org.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
