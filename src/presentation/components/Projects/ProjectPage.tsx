import { projects } from "../../../../data";
import { ProjectCard } from "./ProjectCard";

const ProjectPage = () => {
    return (
        <section className="py-32 bg-[#F4F4F3]">
            <div id="works" className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
                <h2 className="text-4xl font-bold mb-12 text-center uppercase">Some projects</h2>
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
