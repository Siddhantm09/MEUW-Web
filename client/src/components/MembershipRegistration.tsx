import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  FileText,
  Ship,
  Upload,
} from "lucide-react";

const MembershipRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "Indian",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    email: "",
    emergencyContact: "",
    emergencyPhone: "",

    // Professional Information
    maritimeCertificate: "",
    currentPosition: "",
    employer: "",
    shipType: "",
    experience: "",
    qualifications: "",

    // Membership Type
    membershipType: "regular",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Here you would typically send the data to your backend
    alert(
      "Membership application submitted successfully! You will receive a confirmation email shortly."
    );
    console.log("Form data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-800 text-white py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center space-x-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 hover:text-orange-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-xl sm:text-2xl font-bold">
            Membership Registration
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
            Join Our Union
          </h2>
          <p className="text-gray-600 mb-4">
            Become a member of the All India BJP Marine Engineers and Workers
            Union and gain access to comprehensive support, legal protection,
            welfare programs, and professional development opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-orange-100 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-orange-600 mb-1">
                ₹2,000
              </div>
              <div className="text-sm text-slate-700">Annual Membership</div>
            </div>
            <div className="bg-slate-100 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-slate-600 mb-1">
                ₹1,000
              </div>
              <div className="text-sm text-slate-700">Senior Members (60+)</div>
            </div>
            <div className="bg-orange-100 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-orange-600 mb-1">
                ₹25,000
              </div>
              <div className="text-sm text-slate-700">Lifetime Membership</div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <User className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-bold text-slate-800">
                Personal Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your complete address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your state"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Ship className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-bold text-slate-800">
                Professional Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maritime Certificate Number *
                </label>
                <input
                  type="text"
                  name="maritimeCertificate"
                  value={formData.maritimeCertificate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter certificate number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Position *
                </label>
                <select
                  name="currentPosition"
                  value={formData.currentPosition}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select Position</option>
                  <option value="chief-engineer">Chief Engineer</option>
                  <option value="second-engineer">Second Engineer</option>
                  <option value="third-engineer">Third Engineer</option>
                  <option value="fourth-engineer">Fourth Engineer</option>
                  <option value="electrical-officer">Electrical Officer</option>
                  <option value="deck-officer">Deck Officer</option>
                  <option value="rating">Rating</option>
                  <option value="port-worker">Port Worker</option>
                  <option value="shore-based">Shore-based Professional</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Employer
                </label>
                <input
                  type="text"
                  name="employer"
                  value={formData.employer}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter employer name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select Experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="11-15">11-15 years</option>
                  <option value="16-20">16-20 years</option>
                  <option value="20+">20+ years</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qualifications & Certifications
                </label>
                <textarea
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="List your maritime qualifications, certifications, and training"
                />
              </div>
            </div>
          </div>

          {/* Membership Type */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-bold text-slate-800">
                Membership Type
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-orange-500 transition-colors">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="membershipType"
                    value="regular"
                    checked={formData.membershipType === "regular"}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div
                    className={`text-center ${
                      formData.membershipType === "regular"
                        ? "text-orange-600"
                        : "text-gray-600"
                    }`}
                  >
                    <div className="text-2xl font-bold mb-2">₹2,000</div>
                    <div className="font-semibold mb-1">Regular Membership</div>
                    <div className="text-sm">
                      Annual membership for working professionals
                    </div>
                  </div>
                </label>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-orange-500 transition-colors">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="membershipType"
                    value="senior"
                    checked={formData.membershipType === "senior"}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div
                    className={`text-center ${
                      formData.membershipType === "senior"
                        ? "text-orange-600"
                        : "text-gray-600"
                    }`}
                  >
                    <div className="text-2xl font-bold mb-2">₹1,000</div>
                    <div className="font-semibold mb-1">Senior Membership</div>
                    <div className="text-sm">For members above 60 years</div>
                  </div>
                </label>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-orange-500 transition-colors">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="membershipType"
                    value="lifetime"
                    checked={formData.membershipType === "lifetime"}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div
                    className={`text-center ${
                      formData.membershipType === "lifetime"
                        ? "text-orange-600"
                        : "text-gray-600"
                    }`}
                  >
                    <div className="text-2xl font-bold mb-2">₹25,000</div>
                    <div className="font-semibold mb-1">
                      Lifetime Membership
                    </div>
                    <div className="text-sm">
                      One-time payment, lifetime benefits
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Upload className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-bold text-slate-800">
                Required Documents
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maritime Certificate Copy *
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  PDF, JPG, or PNG (Max 5MB)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Identity Proof *
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Aadhar/Passport/PAN Card
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Passport Size Photo *
                </label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  For membership card
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Proof (Optional)
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Current employment letter
                </p>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the{" "}
                <button
                  type="button"
                  onClick={() => navigate("/terms")}
                  className="text-orange-600 hover:underline"
                >
                  Terms and Conditions
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  onClick={() => navigate("/privacy")}
                  className="text-orange-600 hover:underline"
                >
                  Privacy Policy
                </button>
                . I understand that my membership is subject to approval by the
                Union's membership committee.
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>Submit Application</span>
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="flex-1 sm:flex-none border border-slate-300 hover:bg-slate-50 text-slate-700 py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>
                After submission, you will receive a confirmation email with
                payment instructions.
              </p>
              <p>
                Your membership will be activated upon payment verification and
                document approval.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipRegistration;
