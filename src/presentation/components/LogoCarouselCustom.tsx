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


const LogoCarouselCustom = () => {
    // Repetimos el conjunto de íconos 10 veces para que el carousel sea continuo
    const repeatedIcons = [...Array(10)].flatMap((_, repeatIndex) =>
        skillsData.map((skill) => ({
            ...skill,
            key: `set-${repeatIndex}-${skill.id}`,
        }))
    );

    return (
        <div className="w-full overflow-hidden py-6 text-black">
            <div className="flex gap-50 animate-scroll px-8">
                {repeatedIcons.map((skill) => (
                    <div
                        key={skill.key}
                        className="h-24 w-24 flex-shrink-0 flex items-center justify-center text-black text-4xl"
                    >
                        {skill.icon}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoCarouselCustom;
