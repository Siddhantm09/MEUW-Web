import { useState } from "react";
import { ArrowLeft, Shield, FileText, Calendar } from "lucide-react";

interface LegalPagesProps {
  onBack?: () => void;
  initialPage?: "terms" | "privacy";
}

const LegalPages: React.FC<LegalPagesProps> = ({
  onBack,
  initialPage = "terms",
}) => {
  const [activePage, setActivePage] = useState<"terms" | "privacy">(
    initialPage
  );

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
            {activePage === "terms" ? "Terms and Conditions" : "Privacy Policy"}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActivePage("terms")}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors flex items-center space-x-2 ${
                  activePage === "terms"
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Terms and Conditions</span>
              </button>
              <button
                onClick={() => setActivePage("privacy")}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors flex items-center space-x-2 ${
                  activePage === "privacy"
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Terms and Conditions */}
        {activePage === "terms" && (
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-8 h-8 text-orange-500" />
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Terms and Conditions
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated: January 1, 2025</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-3">
                  Welcome to BJP Marine Engineers Union
                </h3>
                <p className="text-orange-700">
                  These terms and conditions outline the rules and regulations
                  for the use of our services and membership in the All India
                  BJP Marine Engineers and Workers Union.
                </p>
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                1. Acceptance of Terms
              </h3>
              <p>
                By accessing and using the services of All India BJP Marine
                Engineers and Workers Union ("Union", "we", "our", or "us"), you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
              <p>
                These terms apply to all visitors, users, and members who access
                or use our services, including but not limited to membership
                registration, donation services, training programs, and legal
                assistance.
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                2. Membership Eligibility and Terms
              </h3>
              <p>
                Membership in the Union is open to all maritime professionals,
                including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Marine Engineers and Technical Officers</li>
                <li>Deck Officers and Navigation Personnel</li>
                <li>Maritime Workers and Ratings</li>
                <li>Port and Harbor Workers</li>
                <li>Shore-based Maritime Professionals</li>
                <li>Maritime Industry Support Staff</li>
                <li>Retired Maritime Professionals</li>
              </ul>
              <p>
                All applicants must provide valid documentation proving their
                association with the maritime industry. Membership is subject to
                approval by the Union's membership committee.
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                3. Member Rights and Benefits
              </h3>
              <p>
                <strong>As a member, you are entitled to:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access to union services and benefits</li>
                <li>Legal representation and support in employment matters</li>
                <li>
                  Participation in union activities and decision-making
                  processes
                </li>
                <li>Access to training and development programs</li>
                <li>Welfare assistance during emergencies</li>
                <li>Healthcare support and medical assistance</li>
                <li>Educational scholarships for members' children</li>
                <li>Retirement and pension guidance</li>
                <li>Career counseling and job placement assistance</li>
                <li>Representation in collective bargaining negotiations</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800">
                4. Member Responsibilities and Obligations
              </h3>
              <p>
                <strong>As a member, you are responsible for:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Payment of membership dues as prescribed by the National
                  Committee
                </li>
                <li>
                  Adherence to union constitution, bylaws, and code of conduct
                </li>
                <li>
                  Professional conduct and ethical behavior in all maritime
                  activities
                </li>
                <li>Support for union objectives and activities</li>
                <li>
                  Participation in union meetings and events when possible
                </li>
                <li>Providing accurate and updated personal information</li>
                <li>
                  Reporting any changes in employment status or contact details
                </li>
                <li>Respecting fellow members and union officials</li>
                <li>
                  Maintaining confidentiality of sensitive union information
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800">
                5. Financial Obligations
              </h3>
              <p>
                Members are required to pay annual membership fees as determined
                by the National Committee. The fee structure is as follows:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>Regular Membership:</strong> ₹2,000 per annum
                  </li>
                  <li>
                    <strong>Senior Members (Above 60):</strong> ₹1,000 per annum
                  </li>
                  <li>
                    <strong>Student Members:</strong> ₹500 per annum
                  </li>
                  <li>
                    <strong>Lifetime Membership:</strong> ₹25,000 (one-time
                    payment)
                  </li>
                </ul>
              </div>
              <p>
                Fees are non-refundable and must be paid within the specified
                timeframe to maintain active membership status. Late payment may
                result in suspension of membership benefits until dues are
                current.
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                6. Services and Programs
              </h3>
              <p>The Union provides the following services to its members:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-800 mb-2">
                    Legal Services
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>Employment dispute resolution</li>
                    <li>Contract negotiation assistance</li>
                    <li>Legal representation in courts</li>
                    <li>Documentation support</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold text-slate-800 mb-2">
                    Welfare Programs
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>Emergency financial assistance</li>
                    <li>Medical support and healthcare</li>
                    <li>Educational scholarships</li>
                    <li>Family welfare programs</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                7. Disciplinary Actions and Termination
              </h3>
              <p>
                The Union reserves the right to take disciplinary action,
                including warning, suspension, or termination of membership, for
                the following violations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violation of union rules and regulations</li>
                <li>
                  Unethical conduct or behavior that brings disrepute to the
                  union
                </li>
                <li>Non-payment of dues for more than one year</li>
                <li>
                  Activities that may harm the union's reputation or interests
                </li>
                <li>
                  Providing false information during membership application
                </li>
                <li>Engaging in activities contrary to union objectives</li>
              </ul>
              <p>
                Members subject to disciplinary action have the right to appeal
                to the National Committee within 30 days of receiving notice.
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                8. Intellectual Property Rights
              </h3>
              <p>
                All content, materials, logos, trademarks, and intellectual
                property related to the Union are owned by the All India BJP
                Marine Engineers and Workers Union. Members may not use,
                reproduce, or distribute any union materials without prior
                written consent.
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                9. Limitation of Liability
              </h3>
              <p>
                The Union shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of your
                use of union services or participation in union activities. The
                Union's total liability shall not exceed the amount of
                membership fees paid by the member in the current year.
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                10. Data Protection and Privacy
              </h3>
              <p>
                The Union is committed to protecting member privacy and personal
                data. All member information is handled in accordance with our
                Privacy Policy and applicable data protection laws. Member data
                will not be shared with third parties without explicit consent,
                except as required by law.
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                11. Dispute Resolution
              </h3>
              <p>
                Any disputes arising between members and the Union shall first
                be addressed through internal mediation. If resolution cannot be
                achieved, disputes may be referred to arbitration as per the
                Arbitration and Conciliation Act, 2015.
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                12. Amendments and Modifications
              </h3>
              <p>
                The Union reserves the right to modify these terms at any time.
                Members will be notified of significant changes through official
                communication channels including email, website announcements,
                and postal mail. Continued membership after notification
                constitutes acceptance of modified terms.
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                13. Governing Law and Jurisdiction
              </h3>
              <p>
                These terms shall be governed by and construed in accordance
                with the laws of India. Any disputes shall be subject to the
                exclusive jurisdiction of competent courts in Mumbai,
                Maharashtra. The Union operates under the Trade Unions Act,
                1926, and all applicable Indian labor laws.
              </p>

              <div className="bg-slate-100 p-6 rounded-lg mt-8">
                <h4 className="font-bold text-slate-800 mb-3">
                  Contact Information for Legal Matters
                </h4>
                <p>
                  <strong>Legal Department</strong>
                </p>
                <p>All India BJP Marine Engineers and Workers Union</p>
                <p>Email: legal@bjpmewu.org.in</p>
                <p>Phone: 022 12345678</p>
                <p>Address: Union Bhavan, Marine Drive, Mumbai - 400 001</p>
              </div>
            </div>
          </div>
        )}

        {/* Privacy Policy */}
        {activePage === "privacy" && (
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-8 h-8 text-orange-500" />
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Privacy Policy
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated: January 1, 2025</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  Your Privacy Matters
                </h3>
                <p className="text-blue-700">
                  The All India BJP Marine Engineers and Workers Union is
                  committed to protecting your privacy and ensuring the security
                  of your personal information. This policy explains how we
                  collect, use, and protect your data.
                </p>
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                1. Information We Collect
              </h3>
              <p>
                We collect information you provide directly to us, such as when
                you create an account, apply for membership, make a donation,
                contact us for support, or participate in our programs.
              </p>

              <h4 className="text-lg font-semibold text-slate-700">
                Personal Information includes:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-bold text-orange-800 mb-2">
                    Basic Information
                  </h5>
                  <ul className="text-sm space-y-1">
                    <li>Full name and title</li>
                    <li>Date of birth</li>
                    <li>Gender and nationality</li>
                    <li>Photograph for membership card</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h5 className="font-bold text-slate-800 mb-2">
                    Contact Information
                  </h5>
                  <ul className="text-sm space-y-1">
                    <li>Home and office addresses</li>
                    <li>Phone numbers (mobile and landline)</li>
                    <li>Email addresses</li>
                    <li>Emergency contact details</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-bold text-orange-800 mb-2">
                    Professional Information
                  </h5>
                  <ul className="text-sm space-y-1">
                    <li>Maritime certificates and licenses</li>
                    <li>Employment history and current position</li>
                    <li>Employer details and ship assignments</li>
                    <li>Professional qualifications and experience</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h5 className="font-bold text-slate-800 mb-2">
                    Financial Information
                  </h5>
                  <ul className="text-sm space-y-1">
                    <li>Bank account details for benefit payments</li>
                    <li>Payment information for dues and donations</li>
                    <li>Income details for welfare assessments</li>
                    <li>Tax identification numbers</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-slate-700">
                Automatically Collected Information:
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website usage data and analytics</li>
                <li>IP addresses and device information</li>
                <li>Browser type and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referral sources and search terms</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800">
                2. How We Use Your Information
              </h3>
              <p>
                We use the information we collect for the following purposes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">
                    Membership Services
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>Process membership applications and renewals</li>
                    <li>Issue membership cards and certificates</li>
                    <li>Maintain membership records and databases</li>
                    <li>Provide member benefits and services</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">
                    Communication
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>Send union newsletters and updates</li>
                    <li>Notify about meetings and events</li>
                    <li>Provide important announcements</li>
                    <li>Respond to inquiries and support requests</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">
                    Legal and Professional Services
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>Provide legal representation and support</li>
                    <li>Handle employment disputes and grievances</li>
                    <li>Maintain legal case records</li>
                    <li>Professional consultation services</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-800 mb-2">
                    Welfare Programs
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>Assess eligibility for welfare benefits</li>
                    <li>Process emergency assistance requests</li>
                    <li>Provide healthcare and medical support</li>
                    <li>Administer scholarship programs</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                3. Information Sharing and Disclosure
              </h3>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except in the
                following circumstances:
              </p>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">
                  When We May Share Information:
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-red-700">
                  <li>
                    <strong>With your explicit consent</strong> - When you
                    specifically authorize us to share information
                  </li>
                  <li>
                    <strong>Legal compliance</strong> - To comply with court
                    orders, legal processes, or government requests
                  </li>
                  <li>
                    <strong>Safety and security</strong> - To protect the
                    rights, safety, and security of the Union and its members
                  </li>
                  <li>
                    <strong>Service providers</strong> - With trusted vendors
                    who assist in our operations (under strict confidentiality
                    agreements)
                  </li>
                  <li>
                    <strong>Emergency situations</strong> - To protect vital
                    interests of members in emergency situations
                  </li>
                  <li>
                    <strong>Business transfers</strong> - In case of merger,
                    acquisition, or sale of assets (with continued privacy
                    protection)
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                4. Data Security Measures
              </h3>
              <p>
                We implement comprehensive security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Technical Safeguards
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and databases</li>
                    <li>Regular security audits</li>
                    <li>Firewall protection</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Administrative Controls
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>Limited access on need-to-know basis</li>
                    <li>Staff training on data protection</li>
                    <li>Confidentiality agreements</li>
                    <li>Regular access reviews</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Physical Security
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>Secured office premises</li>
                    <li>Locked filing cabinets</li>
                    <li>Access control systems</li>
                    <li>Document shredding</li>
                  </ul>
                </div>
              </div>

              <p className="italic text-gray-600">
                However, no method of transmission over the internet or
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your information, we
                cannot guarantee absolute security.
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                5. Data Retention Policy
              </h3>
              <p>
                We retain your personal information for different periods
                depending on the type of data and purpose of collection:
              </p>

              <div className="bg-slate-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>Active membership records:</strong> Throughout
                    membership period and 7 years after termination
                  </li>
                  <li>
                    <strong>Financial records:</strong> 7 years as required by
                    accounting standards
                  </li>
                  <li>
                    <strong>Legal case files:</strong> 10 years or as required
                    by legal proceedings
                  </li>
                  <li>
                    <strong>Communication records:</strong> 3 years from last
                    communication
                  </li>
                  <li>
                    <strong>Website usage data:</strong> 2 years from collection
                    date
                  </li>
                  <li>
                    <strong>Emergency contact information:</strong> Throughout
                    membership period
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                6. Your Privacy Rights
              </h3>
              <p>
                You have the following rights regarding your personal
                information:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-800 mb-2">
                    Access and Control
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>Access your personal data</li>
                    <li>Update and correct information</li>
                    <li>Request data portability</li>
                    <li>Control communication preferences</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-2">
                    Deletion and Restriction
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>Request deletion of personal data</li>
                    <li>Restrict processing of information</li>
                    <li>Withdraw consent where applicable</li>
                    <li>Object to certain uses of data</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
                <h4 className="font-bold text-yellow-800 mb-2">
                  How to Exercise Your Rights:
                </h4>
                <p className="text-yellow-700 text-sm">
                  To exercise any of these rights, please contact our Privacy
                  Officer at
                  <strong> privacy@bjpmewu.org.in</strong> or visit our office
                  during business hours. We will respond to your request within
                  30 days.
                </p>
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                7. Cookies and Web Technologies
              </h3>
              <p>
                Our website uses cookies and similar tracking technologies to
                enhance user experience, analyze website usage, and provide
                personalized content:
              </p>

              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-800 mb-2">
                    Types of Cookies We Use:
                  </h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>
                      <strong>Essential cookies:</strong> Required for basic
                      website functionality
                    </li>
                    <li>
                      <strong>Analytics cookies:</strong> Help us understand how
                      visitors use our site
                    </li>
                    <li>
                      <strong>Functional cookies:</strong> Remember your
                      preferences and settings
                    </li>
                    <li>
                      <strong>Marketing cookies:</strong> Used to provide
                      relevant content and advertisements
                    </li>
                  </ul>
                </div>
                <p className="text-sm">
                  You can control cookie settings through your browser
                  preferences. However, disabling certain cookies may affect
                  website functionality.
                </p>
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                8. Third-Party Services
              </h3>
              <p>
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                these external sites. We encourage you to review their privacy
                policies before providing any personal information.
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                9. Children's Privacy
              </h3>
              <p>
                Our services are not intended for children under 18 years of
                age. We do not knowingly collect personal information from
                children. If we become aware that we have collected personal
                information from a child, we will take steps to delete such
                information promptly.
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                10. International Data Transfers
              </h3>
              <p>
                Your personal information is primarily stored and processed in
                India. If we transfer data internationally, we ensure
                appropriate safeguards are in place to protect your information
                in accordance with applicable data protection laws.
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                11. Changes to This Privacy Policy
              </h3>
              <p>
                We may update this privacy policy from time to time to reflect
                changes in our practices or applicable laws. We will notify you
                of any significant changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications to members</li>
                <li>Announcing changes in our newsletter</li>
                <li>
                  Updating the "Last updated" date at the top of this policy
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800">
                12. Contact Information
              </h3>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">
                  Privacy Officer Contact Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>
                      <strong>
                        All India BJP Marine Engineers and Workers Union
                      </strong>
                    </p>
                    <p>Privacy Officer</p>
                    <p>Union Bhavan, Marine Drive</p>
                    <p>Mumbai - 400 001, Maharashtra, India</p>
                  </div>
                  <div>
                    <p>
                      <strong>Email:</strong> privacy@bjpmewu.org.in
                    </p>
                    <p>
                      <strong>Phone:</strong> 022 12345678
                    </p>
                    <p>
                      <strong>Office Hours:</strong> Monday - Friday, 9:00 AM -
                      5:00 PM
                    </p>
                    <p>
                      <strong>Response Time:</strong> Within 30 days
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-sm text-slate-600 italic">
                  If you have any questions, concerns, or complaints about this
                  privacy policy or our data practices, please don't hesitate to
                  contact us. We are committed to addressing your privacy
                  concerns promptly and effectively.
                </p>
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                13. Compliance and Legal Framework
              </h3>
              <p>
                This privacy policy is designed to comply with applicable Indian
                data protection laws, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Information Technology Act, 2000 and its amendments</li>
                <li>
                  The Information Technology (Reasonable Security Practices and
                  Procedures and Sensitive Personal Data or Information) Rules,
                  2011
                </li>
                <li>
                  The Digital Personal Data Protection Act, 2023 (when enacted)
                </li>
                <li>Relevant provisions of the Indian Contract Act, 1872</li>
                <li>Trade Unions Act, 1926</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800">
                14. Data Breach Response
              </h3>
              <p>
                In the unlikely event of a data breach that may compromise your
                personal information, we will:
              </p>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <ul className="list-disc pl-6 space-y-2 text-red-700">
                  <li>
                    Notify affected members within 72 hours of discovering the
                    breach
                  </li>
                  <li>
                    Report the breach to relevant authorities as required by law
                  </li>
                  <li>
                    Take immediate steps to contain and remediate the breach
                  </li>
                  <li>
                    Provide guidance on protective measures members can take
                  </li>
                  <li>
                    Conduct a thorough investigation and implement preventive
                    measures
                  </li>
                  <li>Offer identity protection services if necessary</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                15. Member Responsibilities
              </h3>
              <p>
                To help protect your privacy and the security of your personal
                information, we ask that you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep your login credentials secure and confidential</li>
                <li>
                  Notify us immediately of any unauthorized access to your
                  account
                </li>
                <li>Provide accurate and up-to-date information</li>
                <li>
                  Use strong passwords and enable two-factor authentication when
                  available
                </li>
                <li>
                  Be cautious when sharing personal information in public forums
                  or communications
                </li>
                <li>
                  Report any suspected privacy violations or security concerns
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800">
                16. Grievance Redressal
              </h3>
              <p>
                If you have any grievances regarding the processing of your
                personal data, you may file a complaint with:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">
                    Internal Grievance Officer
                  </h4>
                  <p className="text-sm">
                    <strong>Name:</strong> Smt. Priya Sharma
                    <br />
                    <strong>Designation:</strong> Data Protection Officer
                    <br />
                    <strong>Email:</strong> grievance@bjpmewu.org.in
                    <br />
                    <strong>Phone:</strong> 022 12345679
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">
                    External Authority
                  </h4>
                  <p className="text-sm">
                    <strong>
                      Indian Computer Emergency Response Team (CERT-In)
                    </strong>
                    <br />
                    <strong>Website:</strong> www.cert-in.org.in
                    <br />
                    <strong>Email:</strong> incident@cert-in.org.in
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-slate-100 p-6 rounded-lg border-l-4 border-orange-500 mt-8">
                <h4 className="font-bold text-slate-800 mb-3">
                  Acknowledgment
                </h4>
                <p className="text-sm text-slate-700">
                  By using our services or becoming a member of the All India
                  BJP Marine Engineers and Workers Union, you acknowledge that
                  you have read, understood, and agree to the collection, use,
                  and disclosure of your personal information as described in
                  this Privacy Policy.
                </p>
                <p className="text-xs text-slate-600 mt-2 italic">
                  This policy was last reviewed and updated by the Union's Legal
                  and Privacy Committee on January 1, 2025.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalPages;
