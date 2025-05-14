// import { motion } from "framer-motion";

// interface BannerTapeProps {
//   text: string;
//   backgroundColor?: string;
//   textColor?: string;
//   reverse?: boolean;
// }

// export default function BannerTape({
//   text,
//   backgroundColor = "#000000",
//   textColor = "#FFFFFF",
//   reverse = false,
// }: BannerTapeProps) {
//   return (
//     <div
//       className="overflow-hidden w-full py-2 rotate-[-2deg] md:rotate-[-3deg]"
//       style={{ backgroundColor }}
//     >
//       <motion.div
//         className="whitespace-nowrap flex gap-8 animate-scroll"
//         style={{
//           animationDirection: reverse ? "reverse" : "normal",
//         }}
//       >
//         {Array(10)
//           .fill(text)
//           .map((t, i) => (
//             <span
//               key={i}
//               className="text-2xl md:text-3xl font-bold uppercase"
//               style={{ color: textColor }}
//             >
//               {t}
//             </span>
//           ))}
//       </motion.div>
//     </div>
//   );
// }
import { motion } from "framer-motion";

interface BannerTapeProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  reverse?: boolean;
  angle?: number; // controla la inclinación
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
        {Array(10)
          .fill(text)
          .map((t, i) => (
            <span
              key={i}
              className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide"
              style={{ color: textColor }}
            >
              {t}
            </span>
          ))}
      </motion.div>
    </div>
  );
}
