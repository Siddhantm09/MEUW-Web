interface ScrollingBannerProps {
  style?: React.CSSProperties;
}

const ScrollingBanner: React.FC<ScrollingBannerProps> = () => {
  return (
    <>
      {/* Scrolling Text */}
      <div className="bg-slate-700 py-4 overflow-hidden w-full">
        <div className="animate-scroll whitespace-nowrap">
          <span className="text-orange-400 text-lg font-semibold mx-8">
            🚢 Empowering Maritime Workforce
          </span>
          <span className="text-white text-lg mx-8">
            ⚓ Protecting Workers' Rights
          </span>
          <span className="text-orange-400 text-lg font-semibold mx-8">
            🔧 Supporting Marine Engineers
          </span>
          <span className="text-white text-lg mx-8">
            🇮🇳 Building Stronger India
          </span>
          <span className="text-orange-400 text-lg font-semibold mx-8">
            🚢 Empowering Maritime Workforce
          </span>
          <span className="text-white text-lg mx-8">
            ⚓ Protecting Workers' Rights
          </span>
        </div>
      </div>

      {/* CSS for animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `,
        }}
      />
    </>
  );
};

export default ScrollingBanner;
