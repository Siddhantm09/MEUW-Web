import { useState } from "react";
import { ArrowLeft, MapPin, Phone, Mail, Award } from "lucide-react";

interface CommitteeStructureProps {
  onBack?: () => void;
  initialTab?: "national" | "state";
}

const CommitteeStructure: React.FC<CommitteeStructureProps> = ({
  onBack,
  initialTab = "national",
}) => {
  const [activeTab, setActiveTab] = useState<"national" | "state">(initialTab);

  const nationalCommittee = [
    {
      name: "Shri Rajesh Sharma",
      position: "General Secretary",
      location: "Mumbai",
      phone: "+91 98765 43210",
      email: "secretary@bjpmewu.org.in",
    },
    {
      name: "Capt. Vikram Singh",
      position: "President",
      location: "Mumbai",
      phone: "+91 98765 43211",
      email: "president@bjpmewu.org.in",
    },
    {
      name: "Shri Amit Patel",
      position: "Vice President",
      location: "Gujarat",
      phone: "+91 98765 43212",
      email: "vp@bjpmewu.org.in",
    },
    {
      name: "Smt. Priya Nair",
      position: "Joint Secretary",
      location: "Kerala",
      phone: "+91 98765 43213",
      email: "jointsec@bjpmewu.org.in",
    },
    {
      name: "Shri Ravi Kumar",
      position: "Treasurer",
      location: "Chennai",
      phone: "+91 98765 43214",
      email: "treasurer@bjpmewu.org.in",
    },
    {
      name: "Capt. Suresh Reddy",
      position: "Organizing Secretary",
      location: "Visakhapatnam",
      phone: "+91 98765 43215",
      email: "organizing@bjpmewu.org.in",
    },
  ];

  const stateCommittees = [
    {
      state: "Maharashtra",
      secretary: "Shri Ashok Deshmukh",
      location: "Mumbai",
      members: 1200,
      branches: 4,
    },
    {
      state: "Gujarat",
      secretary: "Shri Kiran Shah",
      location: "Kandla",
      members: 800,
      branches: 3,
    },
    {
      state: "Tamil Nadu",
      secretary: "Shri Murugan Pillai",
      location: "Chennai",
      members: 900,
      branches: 3,
    },
    {
      state: "Kerala",
      secretary: "Shri Rajesh Menon",
      location: "Kochi",
      members: 700,
      branches: 2,
    },
    {
      state: "Andhra Pradesh",
      secretary: "Shri Venkat Rao",
      location: "Visakhapatnam",
      members: 600,
      branches: 2,
    },
    {
      state: "West Bengal",
      secretary: "Shri Debashish Roy",
      location: "Kolkata",
      members: 500,
      branches: 2,
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
          <h1 className="text-xl sm:text-2xl font-bold">Union Structure</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab("national")}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "national"
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                National Committee
              </button>
              <button
                onClick={() => setActiveTab("state")}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "state"
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                State Committees
              </button>
            </nav>
          </div>
        </div>

        {/* National Committee Content */}
        {activeTab === "national" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                National Committee
              </h2>
              <p className="text-gray-600 mb-8">
                The National Committee provides strategic leadership and overall
                governance for the All India BJP Marine Engineers and Workers
                Union. Our experienced leaders bring decades of maritime
                expertise and union management experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nationalCommittee.map((member, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-orange-50 to-slate-50 p-6 rounded-xl border border-gray-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-white">
                          {member.name.split(" ")[1]?.[0] || member.name[0]}
                          {member.name.split(" ")[2]?.[0] ||
                            member.name.split(" ")[1]?.[0]}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-800 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-orange-600 font-semibold mb-2">
                          {member.position}
                        </p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{member.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>{member.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span className="break-all">{member.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* State Committee Content */}
        {activeTab === "state" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                State Committees
              </h2>
              <p className="text-gray-600 mb-8">
                Our state committees ensure local representation and address
                region-specific needs of maritime workers. Each state committee
                is led by experienced local leaders who understand the unique
                challenges and opportunities in their regions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stateCommittees.map((committee, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-slate-50 to-orange-50 p-6 rounded-xl border border-gray-200"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800">
                        {committee.state}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">State Secretary</p>
                        <p className="font-semibold text-slate-800">
                          {committee.secretary}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{committee.location}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-lg font-bold text-orange-600">
                            {committee.members}
                          </div>
                          <div className="text-xs text-gray-500">Members</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-lg font-bold text-slate-600">
                            {committee.branches}
                          </div>
                          <div className="text-xs text-gray-500">Branches</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Stats */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-orange-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    6
                  </div>
                  <div className="text-slate-700 font-medium">
                    Active State Committees
                  </div>
                </div>
                <div className="bg-slate-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-slate-600 mb-2">
                    4,700+
                  </div>
                  <div className="text-slate-700 font-medium">
                    Total State Members
                  </div>
                </div>
                <div className="bg-orange-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    16
                  </div>
                  <div className="text-slate-700 font-medium">
                    Branch Offices
                  </div>
                </div>
              </div>
            </div>

            {/* How to Join */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                How to Get Involved
              </h3>
              <p className="text-gray-600 mb-6">
                Interested in joining your state committee or starting a new
                branch? Contact your state secretary or reach out to our
                national office for guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Contact State Secretary
                </button>
                <button className="border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  National Office Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommitteeStructure;
