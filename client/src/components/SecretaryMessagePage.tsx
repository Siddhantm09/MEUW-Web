import { ArrowLeft, Quote, Phone, Mail } from "lucide-react";

interface SecretaryMessagePageProps {
  onBack?: () => void;
}

const SecretaryMessagePage: React.FC<SecretaryMessagePageProps> = ({
  onBack,
}) => {
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
            Message from General Secretary
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">RS</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Shri Rajesh Sharma
                </h3>
                <p className="text-orange-600 font-semibold mb-4">
                  General Secretary
                </p>
                <p className="text-sm text-gray-600 mb-6">
                  All India BJP Marine Engineers and Workers Union
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>secretary@bjpmewu.org.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <Quote className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                    A Message of Unity and Progress
                  </h2>
                  <p className="text-gray-500 italic">
                    "Together we build a stronger maritime India"
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>Dear Maritime Brothers and Sisters,</p>

                <p>
                  It gives me immense pleasure to address you as the General
                  Secretary of the All India BJP Marine Engineers and Workers
                  Union. For over two decades, our union has stood as a beacon
                  of hope and strength for maritime professionals across the
                  length and breadth of our great nation.
                </p>

                <p>
                  When I reflect on our journey since 2000, I am filled with
                  pride at what we have accomplished together. From a humble
                  beginning with a few dedicated members, we have grown into a
                  formidable force representing over 5,000 maritime
                  professionals across 15 major cities. This growth is not just
                  in numbers, but in the impact we have made on the lives of our
                  members and their families.
                </p>

                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <p className="italic text-orange-800">
                    "Our strength lies not in our individual achievements, but
                    in our collective commitment to the welfare and advancement
                    of every maritime worker in India."
                  </p>
                </div>

                <p>
                  The maritime industry is the backbone of India's trade and
                  commerce, contributing significantly to our nation's economic
                  growth. As maritime professionals, you are the skilled hands
                  and brilliant minds that keep this vital sector moving. Your
                  dedication, expertise, and hard work deserve recognition,
                  respect, and above all, protection.
                </p>

                <p>
                  Under the visionary leadership of the Bharatiya Janata Party
                  and inspired by the principles of 'Sabka Saath, Sabka Vikas',
                  our union has consistently worked towards ensuring fair wages,
                  safe working conditions, comprehensive welfare programs, and
                  ample opportunities for professional growth.
                </p>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">
                  Our Commitments Moving Forward
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span>
                      Continued advocacy for improved working conditions and
                      safety standards
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span>
                      Enhanced welfare programs including healthcare and
                      education support
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span>
                      Expanded training and skill development opportunities
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span>
                      Stronger representation at national and international
                      maritime forums
                    </span>
                  </li>
                </ul>

                <p>
                  As we look towards the future, I am confident that with your
                  continued support and our collective efforts, we will achieve
                  even greater heights. The challenges of tomorrow require the
                  unity of today, and together, we shall overcome every obstacle
                  that comes our way.
                </p>

                <p>
                  I encourage each one of you to actively participate in our
                  union activities, share your valuable suggestions, and help us
                  build an even stronger maritime community. Remember, this
                  union belongs to each one of you, and its success is your
                  success.
                </p>

                <p className="font-semibold">Jai Hind! Jai Bharat!</p>

                <div className="bg-slate-50 p-6 rounded-lg mt-8">
                  <p className="font-semibold text-slate-800 mb-2">
                    Shri Rajesh Sharma
                  </p>
                  <p className="text-gray-600 text-sm">
                    General Secretary
                    <br />
                    All India BJP Marine Engineers and Workers Union
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretaryMessagePage;
