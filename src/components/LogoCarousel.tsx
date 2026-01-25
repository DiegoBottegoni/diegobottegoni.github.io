import { useEffect, useRef } from "react";
import {
    FaNode
} from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiPrisma, SiRedux, SiNextdotjs, SiTypescript, SiJavascript, SiGithub, SiReact } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillsData = [
    { id: 1, icon: <SiGithub className="text-8xl" /> },
    { id: 2, icon: <SiJavascript className="text-8xl" /> },
    { id: 3, icon: <SiTypescript className="text-8xl" /> },
    { id: 4, icon: <SiReact className="text-8xl" /> },
    { id: 5, icon: <FaNode className="text-8xl" /> },
    { id: 6, icon: <SiPostgresql className="text-8xl" /> },
    { id: 7, icon: <SiPrisma className="text-8xl" /> },
    { id: 8, icon: <SiTailwindcss className="text-8xl" /> },
    { id: 9, icon: <TbApi className="text-8xl" /> },
    { id: 10, icon: <SiRedux className="text-8xl" /> },
    { id: 11, icon: <SiNextdotjs className="text-8xl" /> },
];


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
