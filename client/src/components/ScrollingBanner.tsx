interface ScrollingBannerProps {
  messages?: string[];
  animationSpeed?: number;
  backgroundColor?: string;
}

const ScrollingBanner: React.FC<ScrollingBannerProps> = ({
  messages = [
    "🚢 Empowering Maritime Workforce",
    "⚓ Protecting Workers' Rights",
    "🔧 Supporting Marine Engineers",
    "🇮🇳 Building Stronger India",
  ],
  animationSpeed = 20,
  backgroundColor = "bg-slate-700",
}) => {
  const duplicatedMessages = [...messages, ...messages]; // Duplicate for seamless loop

  return (
    <>
      {/* Scrolling Text */}
      <div className={`${backgroundColor} py-3 sm:py-4 overflow-hidden w-full`}>
        <div
          className="animate-scroll whitespace-nowrap"
          style={{
            animationDuration: `${animationSpeed}s`,
          }}
        >
          {duplicatedMessages.map((message, index) => (
            <span
              key={index}
              className={`${
                index % 2 === 0 ? "text-orange-400 font-semibold" : "text-white"
              } text-sm sm:text-base lg:text-lg mx-4 sm:mx-8`}
            >
              {message}
            </span>
          ))}
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
            animation: scroll ${animationSpeed}s linear infinite;
          }
        `,
        }}
      />
    </>
  );
};

export default ScrollingBanner;
