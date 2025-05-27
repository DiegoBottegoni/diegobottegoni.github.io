import { projects } from "../../../../data";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

const ProjectPage = () => {
    return (
        <section className="py-32 bg-primary-d">
            <div id="works" className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
                {/* <h2 className="text-4xl font-bold mb-12 text-center uppercase">Some projects</h2> */}
                <motion.h2
                    id="about"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center uppercase"
                >
                    Some projects
                </motion.h2>
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
