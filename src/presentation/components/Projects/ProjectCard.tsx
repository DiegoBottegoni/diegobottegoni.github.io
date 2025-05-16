import { FaGithub } from "react-icons/fa";

type ProjectProps = {
    img: string;
    url: string;
    github: string;
    title: string;
    text: string;
};

// export const ProjectCard = ({ img, url, github, title, text }: ProjectProps) => {
//     return (
//         <div className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden bg-white transition hover:shadow-2xl">
//             {/* Left - Text */}
//             <div className="md:w-1/2 p-6 flex flex-col justify-between gap-4 pr-10">
//                 <div className="space-y-2">
//                     <h3 className="text-xl font-semibold capitalize">{title}</h3>
//                     <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">{text}</p>
//                 </div>
//                 <div className="flex items-center gap-4 pt-4">
//                     <a
//                         href={url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-block px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-sky-600 transition"
//                     >
//                         Open project
//                     </a>
//                     <a
//                         href={github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-600 hover:text-black transition"
//                     >
//                         <FaGithub size={20} />
//                     </a>
//                 </div>
//             </div>

//             {/* Right - Image */}
//             <div className="md:w-1/2 p-4">
//                 <img
//                     src={img}
//                     alt={title}
//                     className="w-full h-64 md:h-full object-cover"
//                 />
//             </div>
//         </div>
//     );
// };
export const ProjectCard = ({ img, url, github, title, text }: ProjectProps) => {
    return (
        <div className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden bg-white transition hover:shadow-2xl">
            {/* Imagen - Mobile arriba, Desktop derecha */}
            <div className="order-1 md:order-2 md:w-1/2 p-4">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-64 md:h-full object-cover"
                />
            </div>

            {/* Texto - Mobile abajo, Desktop izquierda */}
            <div className="order-2 md:order-1 md:w-1/2 p-6 flex flex-col justify-between gap-4 pr-10">
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold capitalize">{title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">{text}</p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-sky-600 transition"
                    >
                        Open project
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition"
                    >
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};
