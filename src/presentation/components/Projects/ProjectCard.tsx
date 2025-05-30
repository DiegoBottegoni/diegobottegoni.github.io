import { FaGithub } from "react-icons/fa";

type ProjectProps = {
    img: string;
    url: string;
    github: string;
    title: string;
    text: string;
};
export const ProjectCard = ({ img, url, github, title, text }: ProjectProps) => {
    return (
        <div className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden bg-white transition hover:shadow-2xl h-full min-h-[400px]">
            <div className="flex flex-col md:flex-row w-full mx-6">
                {/* Imagen */}
                <div className="order-1 md:order-2 md:w-1/2 p-4 flex items-center justify-center pr-15 md:pr-4 lg:pr-6 pt-8 md:pt-0">
                    <img
                        src={img}
                        alt={title}
                        className="w-full   md:pt-0 h-[200px] md:h-[300px] object-cover"
                    />
                </div>

                {/* Texto */}
                <div className="order-2 md:order-1 md:w-1/2 p-4 flex flex-col justify-between gap-4 pr-15 md:pr-8 lg:pr-16 md:py-12 lg:py-8 ">
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold capitalize lg:mt-6">{title}</h3>
                        <p className="text-sm mt-4">{text}</p>
                    </div>
                    <div className="flex items-center gap-4 pb-6.5">
                        <button
                            onClick={() => window.open(url, "_blank")}
                            className="default-button"
                        >
                            Open project
                        </button>
                        <button
                            onClick={() => window.open(github, "_blank")}
                            className="text-gray-900 hover:text-gray-700 transition hover:pointer-coarse::"
                        >
                            <FaGithub size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
