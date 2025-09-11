interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string[];
  images?: {
    src: string;
    alt: string;
    size?: "small" | "medium" | "large";
  }[];
  onLearnMoreClick?: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About BJP Marine Engineers Union",
  subtitle = "THE LEADING UNION FOR MARITIME PROFESSIONALS SINCE 2000",
  description = [
    "All India BJP Marine Engineers and Workers Union stands as the premier organization dedicated to the welfare, rights, and advancement of marine engineers and maritime workers across India. Operating under the Bharatiya Janata Party's vision of a stronger India, we ensure that our maritime professionals receive the support, protection, and opportunities they deserve.",
    "Our union represents all domains of maritime workers including marine engineers, deck officers, ratings, port workers, and shore-based maritime professionals. We work tirelessly to improve working conditions, secure fair wages, provide training opportunities, and ensure safety standards across the Indian maritime industry.",
  ],
  images = [
    {
      src: "./src/assets/IMG-20230124-WA0041.jpg",
      alt: "Maritime Workers Meeting",
      size: "large" as const,
    },
    {
      src: "./src/assets/IMG-20230825-WA0002.jpg",
      alt: "Union Conference",
      size: "small" as const,
    },
    {
      src: "./src/assets/IMG-20230124-WA0042.jpg",
      alt: "Marine Engineers",
      size: "small" as const,
    },
    {
      src: "./src/assets/IMG-20230926-WA0021.jpg",
      alt: "Workers Assembly",
      size: "large" as const,
    },
  ],
  onLearnMoreClick,
}) => {
  const getImageHeight = (size: "small" | "medium" | "large") => {
    switch (size) {
      case "small":
        return "h-32";
      case "medium":
        return "h-40";
      case "large":
        return "h-48";
      default:
        return "h-40";
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Gallery */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {images.slice(0, 2).map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`w-full ${getImageHeight(
                      image.size || "medium"
                    )} object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
                  />
                ))}
              </div>
              <div className="space-y-4 mt-8">
                {images.slice(2, 4).map((image, index) => (
                  <img
                    key={index + 2}
                    src={image.src}
                    alt={image.alt}
                    className={`w-full ${getImageHeight(
                      image.size || "medium"
                    )} object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              <span className="text-orange-600 font-semibold">{subtitle}</span>
            </p>
            {description.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <button
              onClick={onLearnMoreClick}
              className="bg-slate-800 hover:bg-slate-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              Learn More About Our Work
            </button>
          </div>
        </div>

        {/* Community Stats Section */}
      </div>
    </section>
  );
};

export default AboutSection;
