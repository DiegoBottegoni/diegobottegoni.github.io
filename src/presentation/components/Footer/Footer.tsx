import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative w-full bg-white px-6 text-sm pt-2">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 relative text-center sm:text-left pt-4 sm:py-10">
                {/* Izquierda */}
                <a
                    href="mailto:diego@example.com"
                    className="inline-flex items-center gap-1 justify-center sm:justify-start"
                >
                    diego.bottegoni@gmail.com
                    <ArrowUpRight size={16} />
                </a>

                {/* Copyright */}
                {/* <span className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2"> */}
                {/* <span className="sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"> */}
                <span className="sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">


                    © {new Date().getFullYear()} Diego Bottegoni. All rights reserved.
                </span>

                {/* Derecha */}
                <div className="flex justify-center sm:justify-end gap-6 -pb-2">
                    <a
                        href="https://github.com/DiegoBottegoni"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/diego-bottegoni/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition"
                    >
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
