import { projects } from "../../../../data";
import { ProjectCard } from "./ProjectCard";

const ProjectPage = () => {
    return (
        <section id="works" className="py-20 bg-[#EDEDEC]">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                <div className="flex flex-col gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;
