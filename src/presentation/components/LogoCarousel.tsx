import { useEffect, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { skillsData } from "../../infrastructure/skills/data/skills";

const LogoCarousel = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const duplicatedSkills = [...skillsData, ...skillsData, ...skillsData];

    useAnimationFrame(() => {
        const el = scrollRef.current;
        if (el) {
            el.scrollLeft += 0.5;
            if (el.scrollLeft >= el.scrollWidth / 3) {
                el.scrollLeft = 0;
            }
        }
    });

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const fallbackInterval = setInterval(() => {
            el.scrollLeft += 0.3;
            if (el.scrollLeft >= el.scrollWidth / 3) {
                el.scrollLeft = 0;
            }
        }, 16); // ~60fps

        return () => clearInterval(fallbackInterval);
    }, []);

    return (
        <div className="w-full overflow-hidden">
            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto scrollbar-hide py-4 px-2"
                style={{ willChange: "scroll-position" }}
            >
                {duplicatedSkills.map((skill, index) => (
                    <motion.div
                        key={`${skill.id}-${index}`}
                        className="flex-shrink-0 w-24 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            {skill.icon}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;
