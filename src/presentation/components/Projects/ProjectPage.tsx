import { projects } from "../../../../data";
import { ProjectCard } from "./ProjectCard";

const ProjectPage = () => {
    return (
        <section id="projects" className="py-20 bg-[#EDEDEC]">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;
