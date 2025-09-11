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
      size: "medium" as const,
    },
    {
      src: "./src/assets/IMG-20230124-WA0042.jpg",
      alt: "Marine Engineers",
      size: "medium" as const,
    },
    {
      src: "./src/assets/IMG-20230926-WA0021.jpg",
      alt: "Workers Assembly",
      size: "large" as const,
    },
  ],
  onLearnMoreClick,
}) => {
  // const getImageHeight = (size: "small" | "medium" | "large") => {
  //   switch (size) {
  //     case "small":
  //       return "h-32";
  //     case "medium":
  //       return "h-36";
  //     case "large":
  //       return "h-44";
  //     default:
  //       return "h-36";
  //   }
  // };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Gallery */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 h-full">
              {/* Left Column */}
              <div className="flex flex-col gap-3 justify-start">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-36 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                />
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-36 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                />
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-3 justify-start pt-6">
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full h-36 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                />
                <img
                  src={images[3].src}
                  alt={images[3].alt}
                  className="w-full h-36 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-start">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-orange-600 font-semibold mb-4 sm:mb-6 tracking-wide">
              {subtitle}
            </p>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <button
              onClick={onLearnMoreClick}
              className="bg-slate-800 hover:bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base w-full sm:w-auto hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Learn More About Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
