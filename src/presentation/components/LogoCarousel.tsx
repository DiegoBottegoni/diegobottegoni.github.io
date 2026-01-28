
import {
    FaNode
} from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiPrisma, SiRedux, SiNextdotjs, SiTypescript, SiJavascript, SiReact, SiExpress, SiDocker } from "react-icons/si";

const skillsData = [
    { id: 1, icon: <SiJavascript className="text-8xl" /> },
    { id: 2, icon: <SiTypescript className="text-8xl" /> },

    // Frontend core
    { id: 3, icon: <SiReact className="text-8xl" /> },
    { id: 4, icon: <SiNextdotjs className="text-8xl" /> },
    { id: 5, icon: <SiTailwindcss className="text-8xl" /> },
    { id: 6, icon: <SiRedux className="text-8xl" /> },

    // Backend
    { id: 7, icon: <FaNode className="text-8xl" /> },
    { id: 8, icon: <SiExpress className="text-8xl" /> },

    // Data
    { id: 9, icon: <SiPostgresql className="text-8xl" /> },
    { id: 10, icon: <SiPrisma className="text-8xl" /> },

    // Infra
    { id: 11, icon: <SiDocker className="text-8xl" /> },
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
