import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  FileText,
  AlertCircle,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Building,
} from "lucide-react";
import { useState } from "react";

interface UpcomingMeetingsPageProps {
  onBack?: () => void;
}

const UpcomingMeetingsPage: React.FC<UpcomingMeetingsPageProps> = ({
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past" | "leader">(
    "upcoming",
  );

  const upcomingMeetings = [
    {
      id: 1,
      title: "Annual General Meeting 2025",
      type: "AGM",
      date: "2025-09-15",
      time: "10:00 AM - 4:00 PM",
      venue: "Union Bhavan, Marine Drive, Mumbai",
      mode: "In-Person",
      priority: "high",
      description:
        "Annual review of union activities, financial statements, and election of new committee members.",
      agenda: [
        "Annual Report Presentation",
        "Financial Statement Review",
        "Committee Elections",
        "New Policy Discussions",
        "Member Q&A Session",
      ],
      attendees: "All Members",
      registration: "Required",
      contact: "legal@bjpmewu.org.in",
      status: "confirmed",
    },
    {
      id: 4,
      title: "Welfare Program Planning Session",
      type: "Planning Meeting",
      date: "2025-09-12",
      time: "3:00 PM - 6:00 PM",
      venue: "Union Office, Kolkata",
      mode: "In-Person",
      priority: "medium",
      description:
        "Planning session for upcoming welfare programs and benefit distribution.",
      agenda: [
        "Program Budget Allocation",
        "Beneficiary Selection Process",
        "Implementation Timeline",
        "Volunteer Coordination",
        "Impact Measurement",
      ],
      attendees: "Welfare Committee & State Representatives",
      registration: "Required",
      contact: "welfare@bjpmewu.org.in",
      status: "confirmed",
    },
    {
      id: 5,
      title: "Training Center Directors Meeting",
      type: "Administrative Meeting",
      date: "2025-09-20",
      time: "10:00 AM - 2:00 PM",
      venue: "Training Center, Mumbai",
      mode: "In-Person",
      priority: "medium",
      description:
        "Coordination meeting for all training center directors to align curriculum and standards.",
      agenda: [
        "Curriculum Updates",
        "Certification Standards",
        "Resource Sharing",
        "Performance Metrics",
        "Expansion Plans",
      ],
      attendees: "Training Center Directors",
      registration: "Required",
      contact: "training@bjpmewu.org.in",
      status: "tentative",
    },
    {
      id: 6,
      title: "State Committee Coordination Call",
      type: "Virtual Meeting",
      date: "2025-09-03",
      time: "7:00 PM - 8:30 PM",
      venue: "Online via Google Meet",
      mode: "Virtual",
      priority: "low",
      description:
        "Monthly coordination call with all state committee secretaries.",
      agenda: [
        "State Activity Updates",
        "Member Feedback Summary",
        "Resource Requirements",
        "Inter-state Collaboration",
        "National Policy Updates",
      ],
      attendees: "State Committee Secretaries",
      registration: "Not Required",
      contact: "coordination@bjpmewu.org.in",
      status: "confirmed",
    },
  ];

  const pastMeetings = [
    {
      id: 101,
      title: "Emergency Response Protocol Meeting",
      type: "Emergency Meeting",
      date: "2025-08-25",
      time: "2:00 PM - 4:00 PM",
      venue: "Union Bhavan, Mumbai",
      mode: "Hybrid",
      attendees: "85 members",
      outcome: "New emergency response protocols approved",
      documents: [
        "Emergency Response Guidelines v2.0",
        "Contact Directory Update",
      ],
    },
    {
      id: 102,
      title: "Wage Negotiation Committee Meeting",
      type: "Negotiation Meeting",
      date: "2025-08-20",
      time: "10:00 AM - 6:00 PM",
      venue: "Ministry of Shipping, New Delhi",
      mode: "In-Person",
      attendees: "12 committee members",
      outcome: "15% wage increase approved for marine engineers",
      documents: ["Wage Agreement 2025", "Implementation Timeline"],
    },
    {
      id: 103,
      title: "Digital Services Launch Meeting",
      type: "Launch Event",
      date: "2025-08-15",
      time: "11:00 AM - 3:00 PM",
      venue: "Multiple Locations (Virtual)",
      mode: "Virtual",
      attendees: "200+ members",
      outcome: "Successfully launched new digital member portal",
      documents: ["Digital Portal User Guide", "Feature Overview"],
    },
  ];

  const leaderInteractions = [
    {
      id: 201,
      title: "One-on-One with National President",
      type: "Leadership Mentoring",
      date: "2025-09-10",
      time: "2:00 PM - 3:00 PM",
      venue: "Union Headquarters, Mumbai",
      mode: "In-Person",
      leader: "National President",
      priority: "high",
      description:
        "Strategic discussion on union growth and member welfare initiatives.",
      topics: [
        "Strategic Planning for Q4",
        "Member Feedback Analysis",
        "Expansion Strategy",
        "Leadership Development",
      ],
      attendees: "5-7 participants",
      registration: "By Invitation",
      status: "confirmed",
    },
    {
      id: 202,
      title: "State Leadership Roundtable",
      type: "Strategy Session",
      date: "2025-09-05",
      time: "4:00 PM - 6:00 PM",
      venue: "Online via Zoom",
      mode: "Virtual",
      leader: "General Secretary",
      priority: "high",
      description:
        "Quarterly roundtable discussion with state leaders on operational excellence and member satisfaction.",
      topics: [
        "State Performance Review",
        "Best Practices Sharing",
        "Resource Allocation",
        "Member Grievance Resolution",
        "Q&A with Leadership",
      ],
      attendees: "All State Secretaries",
      registration: "Required",
      status: "confirmed",
    },
    {
      id: 203,
      title: "Executive Committee Strategy Discussion",
      type: "Executive Meeting",
      date: "2025-09-08",
      time: "10:00 AM - 1:00 PM",
      venue: "Union Bhavan, New Delhi Office",
      mode: "Hybrid",
      leader: "Executive Committee",
      priority: "medium",
      description:
        "Quarterly executive committee meeting to discuss union policies and strategic initiatives.",
      topics: [
        "Financial Overview",
        "Policy Updates",
        "Member Services Enhancement",
        "External Relations",
      ],
      attendees: "Executive Committee Members",
      registration: "By Invitation",
      status: "tentative",
    },
    {
      id: 204,
      title: "Youth Leadership Development Program",
      type: "Training Session",
      date: "2025-09-18",
      time: "3:00 PM - 5:00 PM",
      venue: "Training Center, Mumbai",
      mode: "In-Person",
      leader: "Senior Leaders & Mentors",
      priority: "medium",
      description:
        "Training program for emerging youth leaders in union management and advocacy.",
      topics: [
        "Leadership Skills",
        "Negotiation Techniques",
        "Member Engagement",
        "Conflict Resolution",
        "Career Opportunities",
      ],
      attendees: "Young Leaders & Enthusiasts",
      registration: "Open",
      status: "confirmed",
    },
  ];

  const pastLeaderInteractions = [
    {
      id: 301,
      title: "Global Maritime Leaders Summit",
      type: "International Forum",
      date: "2025-08-10",
      time: "9:00 AM - 5:00 PM",
      venue: "Singapore Convention Center",
      mode: "In-Person",
      leader: "National President & International Partners",
      attendees: "25+ leaders",
      outcome:
        "International cooperation framework established for maritime workers",
      documents: ["Summit Report 2025", "Partnership Agreements"],
    },
    {
      id: 302,
      title: "Leadership Vision Workshop",
      type: "Strategic Workshop",
      date: "2025-08-05",
      time: "2:00 PM - 6:00 PM",
      venue: "Union Bhavan, Mumbai",
      mode: "Hybrid",
      leader: "Chief Leadership Team",
      attendees: "50 participants",
      outcome: "5-year strategic vision document finalized",
      documents: ["Strategic Vision 2025-2030", "Implementation Roadmap"],
    },
  ];

  const leadershipGallery = [
    {
      id: 401,
      src: "/assets/meet/FB_IMG_1751370489151.jpg",
      title: "Leadership Meet - Mumbai",
      caption: "Discussion with senior leaders at Mumbai session.",
      date: "2025-07-15",
      leader: "National President",
    },
    {
      id: 402,
      src: "/assets/meet/IMG-20250729-WA0007.jpg",
      title: "State Roundtable - Kolkata",
      caption: "State leaders roundtable on member welfare.",
      date: "2025-07-29",
      leader: "General Secretary",
    },
    {
      id: 403,
      src: "/assets/meet/IMG-20250729-WA0013.jpg",
      title: "Executive Discussion - Delhi",
      caption: "Executive committee strategy discussion.",
      date: "2025-07-29",
      leader: "Executive Committee",
    },
    {
      id: 404,
      src: "/assets/meet/IMG_20250701_172729.jpg",
      title: "Youth Leadership Program - Mumbai",
      caption: "Training and mentoring for emerging leaders.",
      date: "2025-07-01",
      leader: "Senior Leaders & Mentors",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-600 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-600 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-600 border-green-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-700";
      case "tentative":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
          <h1 className="text-xl sm:text-2xl font-bold">Interactions</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors flex items-center space-x-2 ${
                  activeTab === "upcoming"
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Upcoming Interactions</span>
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors flex items-center space-x-2 ${
                  activeTab === "past"
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Past Interactions</span>
              </button>
              <button
                onClick={() => setActiveTab("leader")}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors flex items-center space-x-2 ${
                  activeTab === "leader"
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Leader Interactions</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Upcoming Meetings */}
        {activeTab === "upcoming" && (
          <div className="space-y-6">
            {/* Important Notice */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-orange-800 mb-1">
                  Important Notice
                </h3>
                <p className="text-sm text-orange-700">
                  All members are required to register for AGM 2025 by September
                  10th. Registration link will be sent via email and SMS.
                </p>
              </div>
            </div>

            {upcomingMeetings.map((meeting) => (
              <div
                key={meeting.id}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-xl font-bold text-slate-800 mb-2">
                        {meeting.title}
                      </h2>
                      <div className="flex space-x-2">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(
                            meeting.priority,
                          )}`}
                        >
                          {meeting.priority.toUpperCase()}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                            meeting.status,
                          )}`}
                        >
                          {meeting.status.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <div className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {meeting.type}
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {meeting.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <div>
                      <div className="font-medium text-slate-800">
                        {formatDate(meeting.date)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <div>
                      <div className="font-medium text-slate-800">
                        {meeting.time}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    {meeting.mode === "Virtual" ? (
                      <Video className="w-4 h-4 text-orange-500" />
                    ) : meeting.mode === "Hybrid" ? (
                      <Building className="w-4 h-4 text-orange-500" />
                    ) : (
                      <MapPin className="w-4 h-4 text-orange-500" />
                    )}
                    <div>
                      <div className="font-medium text-slate-800">
                        {meeting.mode}
                      </div>
                      <div className="text-xs">{meeting.venue}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-orange-500" />
                    <div>
                      <div className="font-medium text-slate-800">
                        Attendees
                      </div>
                      <div className="text-xs">{meeting.attendees}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                      <FileText className="w-4 h-4 text-orange-500 mr-2" />
                      Meeting Agenda
                    </h4>
                    <ul className="space-y-1">
                      {meeting.agenda.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <span className="text-orange-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Meeting Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">
                          Registration: {meeting.registration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-600">{meeting.contact}</span>
                      </div>
                    </div>

                    {meeting.registration === "Required" && (
                      <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                        Register Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Past Meetings */}
        {activeTab === "past" && (
          <div className="space-y-6">
            {pastMeetings.map((meeting) => (
              <div
                key={meeting.id}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-800 mb-2">
                      {meeting.title}
                    </h2>
                    <div className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {meeting.type}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Completed</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <div>
                      <div className="font-medium text-slate-800">
                        {formatDate(meeting.date)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <div>
                      <div className="font-medium text-slate-800">
                        {meeting.time}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    {meeting.mode === "Virtual" ? (
                      <Video className="w-4 h-4 text-slate-500" />
                    ) : meeting.mode === "Hybrid" ? (
                      <Building className="w-4 h-4 text-slate-500" />
                    ) : (
                      <MapPin className="w-4 h-4 text-slate-500" />
                    )}
                    <div>
                      <div className="font-medium text-slate-800">
                        {meeting.mode}
                      </div>
                      <div className="text-xs">{meeting.venue}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-slate-500" />
                    <div>
                      <div className="font-medium text-slate-800">
                        {meeting.attendees}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                      <Star className="w-4 h-4 text-green-500 mr-2" />
                      Meeting Outcome
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {meeting.outcome}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                      <FileText className="w-4 h-4 text-blue-500 mr-2" />
                      Available Documents
                    </h4>
                    <ul className="space-y-1">
                      {meeting.documents.map((doc, index) => (
                        <li
                          key={index}
                          className="text-sm text-blue-600 hover:underline cursor-pointer"
                        >
                          📄 {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Leader Interactions */}
        {activeTab === "leader" && (
          <div className="space-y-8">
            {/* Upcoming Leader Interactions */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <Star className="w-5 h-5 text-purple-500 mr-2" />
                Upcoming Leader Interactions
              </h3>
              <div className="space-y-4">
                {leaderInteractions.map((interaction) => (
                  <div
                    key={interaction.id}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-2">
                              {interaction.title}
                            </h2>
                            <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                              {interaction.type}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium border ${
                                interaction.priority === "high"
                                  ? "bg-red-100 text-red-600 border-red-200"
                                  : "bg-yellow-100 text-yellow-600 border-yellow-200"
                              }`}
                            >
                              {interaction.priority.toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {interaction.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-purple-500" />
                        <div>
                          <div className="font-medium text-slate-800">
                            {formatDate(interaction.date)}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-purple-500" />
                        <div>
                          <div className="font-medium text-slate-800">
                            {interaction.time}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        {interaction.mode === "Virtual" ? (
                          <Video className="w-4 h-4 text-purple-500" />
                        ) : interaction.mode === "Hybrid" ? (
                          <Building className="w-4 h-4 text-purple-500" />
                        ) : (
                          <MapPin className="w-4 h-4 text-purple-500" />
                        )}
                        <div>
                          <div className="font-medium text-slate-800">
                            {interaction.mode}
                          </div>
                          <div className="text-xs">{interaction.venue}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-purple-500" />
                        <div>
                          <div className="font-medium text-slate-800">
                            Led by
                          </div>
                          <div className="text-xs">{interaction.leader}</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                          <FileText className="w-4 h-4 text-purple-500 mr-2" />
                          Discussion Topics
                        </h4>
                        <ul className="space-y-1">
                          {interaction.topics.map((topic, index) => (
                            <li
                              key={index}
                              className="text-sm text-gray-600 flex items-start"
                            >
                              <span className="text-purple-500 mr-2">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">
                          Participation Details
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-purple-500" />
                            <span className="text-gray-600">
                              Attendees: {interaction.attendees}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600">
                              Registration: {interaction.registration}
                            </span>
                          </div>
                        </div>

                        {interaction.registration === "Open" && (
                          <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                            Request Invitation
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Leader Interactions */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <Star className="w-5 h-5 text-slate-500 mr-2" />
                Past Leader Interactions
              </h3>
              <div className="space-y-4">
                {pastLeaderInteractions.map((interaction) => (
                  <div
                    key={interaction.id}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-slate-800 mb-2">
                          {interaction.title}
                        </h2>
                        <div className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                          {interaction.type}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mt-2 lg:mt-0">
                        Completed
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <div>
                          <div className="font-medium text-slate-800">
                            {formatDate(interaction.date)}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-slate-500" />
                        <div>
                          <div className="font-medium text-slate-800">
                            {interaction.time}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        {interaction.mode === "Virtual" ? (
                          <Video className="w-4 h-4 text-slate-500" />
                        ) : interaction.mode === "Hybrid" ? (
                          <Building className="w-4 h-4 text-slate-500" />
                        ) : (
                          <MapPin className="w-4 h-4 text-slate-500" />
                        )}
                        <div>
                          <div className="font-medium text-slate-800">
                            {interaction.mode}
                          </div>
                          <div className="text-xs">{interaction.venue}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-slate-500" />
                        <div>
                          <div className="font-medium text-slate-800">
                            {interaction.attendees}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                          <Star className="w-4 h-4 text-green-500 mr-2" />
                          Outcomes
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {interaction.outcome}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                          <FileText className="w-4 h-4 text-blue-500 mr-2" />
                          Available Documents
                        </h4>
                        <ul className="space-y-1">
                          {interaction.documents.map((doc, index) => (
                            <li
                              key={index}
                              className="text-sm text-blue-600 hover:underline cursor-pointer"
                            >
                              📄 {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Leader Interactions Gallery */}
        {activeTab === "leader" && (
          <div className="space-y-8 mt-8">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
              <FileText className="w-5 h-5 text-purple-500 mr-2" />
              Leadership Gallery
            </h3>

            {leadershipGallery.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 min-h-[320px]"
              >
                <div className="mb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <h2 className="text-xl font-bold text-slate-800 mb-2">
                        {item.title}
                      </h2>
                      <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                        Gallery Photo
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>

                    <div className="flex-shrink-0 ml-4 hidden sm:block">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-64 h-64 object-cover rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <div>
                      <div className="font-medium text-slate-800">
                        {formatDate(item.date)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <div>
                      <div className="font-medium text-slate-800">
                        {item.time || ""}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    <div>
                      <div className="font-medium text-slate-800">
                        {item.mode || ""}
                      </div>
                      <div className="text-xs">{item.venue || ""}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <div>
                      <div className="font-medium text-slate-800">Led by</div>
                      <div className="text-xs">{item.leader}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact Information */}
        <div className="bg-slate-50 rounded-xl p-6 mt-8">
          <h3 className="text-lg font-bold text-slate-800 mb-4">
            Meeting Information & Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">
                General Inquiries
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>022 12345678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span>meetings@bjpmewu.org.in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">
                Technical Support
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Video className="w-4 h-4 text-blue-500" />
                  <span>For virtual meeting assistance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>tech@bjpmewu.org.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeetingsPage;
