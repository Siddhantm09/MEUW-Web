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
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

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
          <h1 className="text-xl sm:text-2xl font-bold">Upcoming Meetings</h1>
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
                <span>Upcoming Meetings</span>
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
                <span>Past Meetings</span>
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
                            meeting.priority
                          )}`}
                        >
                          {meeting.priority.toUpperCase()}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                            meeting.status
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
