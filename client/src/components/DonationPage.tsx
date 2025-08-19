import { useState } from "react";
import {
  ArrowLeft,
  CreditCard,
  User,
  Mail,
  Phone,
  MapPin,
  IndianRupee,
} from "lucide-react";

interface DonationPageProps {
  onBack?: () => void;
}

const DonationPage: React.FC<DonationPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    amount: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    if (
      !formData.name ||
      !formData.contact ||
      !formData.email ||
      !formData.amount
    ) {
      alert("Please fill in all required fields");
      return;
    }
    // Payment logic would go here - integrate with payment gateway
    alert(
      `Thank you ${formData.name}! Your donation of ₹${formData.amount} will be processed. Payment gateway integration would happen here.`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-800 text-white py-4 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center space-x-2 hover:text-orange-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          )}
          <h1 className="text-xl sm:text-2xl font-bold">Support Our Union</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Information Section */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
              Make a Donation
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your generous contribution helps us continue our mission of
              protecting and empowering maritime professionals across India.
              Every donation makes a difference in improving working conditions,
              providing legal support, and advancing the welfare of our maritime
              community.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-600">
                  Support legal aid and representation for maritime workers
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-600">
                  Fund welfare programs and emergency assistance
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-600">
                  Enhance training and skill development initiatives
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-600">
                  Strengthen representation at national forums
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-orange-50 rounded-lg">
              <p className="text-sm text-orange-800 font-medium">
                All donations are used exclusively for union activities and
                member welfare programs. Your contribution is tax-deductible
                under Section 80G of the Income Tax Act.
              </p>
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-2">
                Recent Impact:
              </h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 500+ workers received legal assistance</li>
                <li>• 200+ families supported during emergencies</li>
                <li>• 1000+ members trained in new skills</li>
                <li>• ₹50 lakhs distributed in welfare benefits</li>
              </ul>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="Enter your contact number"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Address (Optional)
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="Enter your address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <IndianRupee className="w-4 h-4 inline mr-2" />
                  Donation Amount (₹) *
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="Enter donation amount"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, amount: "500" }))
                  }
                  className="py-2 px-4 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                >
                  ₹500
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, amount: "1000" }))
                  }
                  className="py-2 px-4 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                >
                  ₹1000
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, amount: "2000" }))
                  }
                  className="py-2 px-4 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                >
                  ₹2000
                </button>
              </div>

              <button
                onClick={handlePayment}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 shadow-lg"
              >
                <CreditCard className="w-5 h-5" />
                <span>Proceed to Payment</span>
              </button>

              <div className="text-center space-y-2">
                <p className="text-xs text-gray-500">
                  By proceeding, you agree to our Terms and Conditions and
                  Privacy Policy
                </p>
                <p className="text-xs text-gray-500">
                  Secure payment powered by Razorpay/PayU (integration pending)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
