import { motion } from "framer-motion";

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
      className="overflow-hidden w-full"
      style={{
        backgroundColor,
        transform: `rotate(${angle}deg)`,
      }}
    >
      <motion.div
        className="whitespace-nowrap flex gap-12 animate-scroll py-6"
        style={{
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...Array(2)].flatMap((_, outerIndex) =>
          Array(10)
            .fill(text)
            .map((t, innerIndex) => (
              <span
                key={`banner-${outerIndex}-${innerIndex}`}
                className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide"
                style={{ color: textColor }}
              >
                {t}
              </span>
            ))
        )}
      </motion.div>
    </div>
  );
}
