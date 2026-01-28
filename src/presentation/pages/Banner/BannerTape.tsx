

interface BannerTapeProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  reverse?: boolean;
  angle?: number;
}

export default function BannerTape({
  text,
  backgroundColor = "#000000",
  textColor = "#FFFFFF",
  reverse = false,
  angle = -3,
}: BannerTapeProps) {
  return (
    <div
      className="overflow-hidden w-full flex select-none"
      style={{
        backgroundColor,
        transform: `rotate(${angle}deg)`,
      }}
    >
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className="flex shrink-0 animate-scroll-banner items-center min-w-full justify-around gap-12 py-6"
          style={{
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {Array(10)
            .fill(text)
            .map((t, index) => (
              <span
                key={index}
                className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide whitespace-nowrap"
                style={{ color: textColor }}
              >
                {t}
              </span>
            ))}
        </div>
      ))}
    </div>
  );
}
