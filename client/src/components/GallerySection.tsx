interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category?: string;
  date?: string;
}

interface GallerySectionProps {
  title?: string;
  subtitle?: string;
  images?: GalleryImage[];
  onImageClick?: (image: GalleryImage, index: number) => void;
}

const GallerySection: React.FC<GallerySectionProps> = ({
  title = "Our Activities & Events",
  subtitle = "Showcasing our commitment to maritime professionals through various programs and initiatives",
  images = [
    {
      src: "./src/assets/IMG-20231016-WA0002.jpg",
      alt: "Union Meeting 2023",
      caption: "Annual General Meeting",
      category: "Meetings",
      date: "October 2023",
    },
    {
      src: "./src/assets/IMG-20231025-WA0002.jpg",
      alt: "Training Program",
      caption: "Skills Development Program",
      category: "Training",
      date: "October 2023",
    },
    {
      src: "./src/assets/IMG-20231025-WA0004.jpg",
      alt: "Workers Conference",
      caption: "Maritime Workers Conference",
      category: "Conference",
      date: "October 2023",
    },
    {
      src: "./src/assets/IMG-20231025-WA0005.jpg",
      alt: "Safety Training",
      caption: "Safety Training Session",
      category: "Training",
      date: "October 2023",
    },
    {
      src: "./src/assets/IMG-20231025-WA0007.jpg",
      alt: "Award Ceremony",
      caption: "Excellence Awards 2023",
      category: "Awards",
      date: "October 2023",
    },
    {
      src: "./src/assets/IMG-20231025-WA0009.jpg",
      alt: "Community Event",
      caption: "Community Outreach Program",
      category: "Community",
      date: "October 2023",
    },
  ],
  onImageClick,
}) => {
  const handleImageClick = (image: GalleryImage, index: number) => {
    if (onImageClick) {
      onImageClick(image, index);
    } else {
      console.log(`Image clicked: ${image.caption}`);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleImageClick(image, index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />

              {/* Category Badge */}
              {image.category && (
                <div className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                  {image.category}
                </div>
              )}

              {/* Date Badge */}
              {image.date && (
                <div className="absolute top-3 right-3 bg-slate-800/80 text-white px-2 py-1 rounded-md text-xs">
                  {image.date}
                </div>
              )}

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-lg mb-1">{image.caption}</h3>
                <p className="text-sm text-gray-200">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2">
            <span>View All Events</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
