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
        {[...Array(2)].flatMap(() =>
          Array(10)
            .fill(text)
            .map((t, i) => (
              <span
                key={`${t}-${i}-${reverse ? "r" : "n"}`}
                className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide"
                style={{ color: textColor }}
              >
                {t}
              </span>
            ))
        )}
      </motion.div>
      {/* <motion.div
        className="whitespace-nowrap flex animate-scroll py-6"
        style={{
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex gap-12">
          <span
            className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide"
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <span
            className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide"
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </motion.div> */}


    </div>
  );
}
