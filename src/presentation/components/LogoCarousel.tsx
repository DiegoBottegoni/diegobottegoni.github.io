import { useEffect, useRef } from "react";
import {
    FaGithub,
    FaHtml5,
    FaJs,
    FaNode,
    FaReact,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillsData = [
    { id: 1, icon: <FaGithub className="text-8xl" /> },
    { id: 2, icon: <FaHtml5 className="text-8xl" /> },
    { id: 3, icon: <FaJs className="text-8xl" /> },
    { id: 4, icon: <FaNode className="text-8xl" /> },
    { id: 5, icon: <FaReact className="text-8xl" /> },
    { id: 6, icon: <BiLogoTypescript className="text-8xl" /> },
    { id: 7, icon: <SiMongodb className="text-8xl" /> },
    { id: 8, icon: <SiTailwindcss className="text-8xl" /> },
    { id: 9, icon: <TbApi className="text-8xl" /> },
];

// Triplicamos para efecto infinito
const duplicatedSkills = [...skillsData, ...skillsData, ...skillsData];

const LogoCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let animationFrameId: number;
        let speed = 1; // default desktop speed

        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            speed = 1.5;
        } else if (screenWidth < 1024) {
            speed = 1.2;
        }

        const scroll = () => {
            if (!el) return;

            el.scrollLeft += speed;

            // Reset sin salto visual al llegar al final del primer tercio (porque está triplicado)
            if (el.scrollLeft >= el.scrollWidth / 3) {
                el.scrollLeft = 0;
            }

            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="w-full overflow-hidden py-6 text-black">
            <div
                ref={scrollRef}
                className="flex gap-24 sm:gap-32 md:gap-48 overflow-x-auto scrollbar-hide px-8"
            >
                {duplicatedSkills.map((skill, index) => (
                    <div
                        key={`${skill.id}-${index}`}
                        className="h-24 w-24 flex-shrink-0 flex items-center justify-center"
                    >
                        {skill.icon}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;
