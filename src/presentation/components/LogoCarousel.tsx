
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

    return (
        <div className="w-full overflow-hidden py-6 text-gray-900 flex select-none">
            {[...Array(2)].map((_, i) => (
                <div
                    key={i}
                    className="flex shrink-0 animate-scroll-tech gap-24 sm:gap-32 md:gap-48 items-center min-w-full px-12"
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
            ))}
        </div>
    );
};

export default LogoCarousel;
