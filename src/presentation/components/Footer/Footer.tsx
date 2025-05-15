import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative w-full bg-white px-6 py-4 text-sm text-gray-600">
            <div className="max-w-7xl mx-auto flex items-center justify-between relative">
                {/* Izquierda */}
                <a
                    href="mailto:diego@example.com"
                    className="inline-flex items-center gap-1 hover:text-gray-900 transition"
                >
                    diego.bottegoni@gmail.com
                    <ArrowUpRight size={16} />
                </a>

                {/* Copyright centrado absoluto */}
                <span className="absolute left-1/2 transform -translate-x-1/2 text-center">
                    © {new Date().getFullYear()} Diego Bottegoni. All rights reserved.
                </span>

                {/* Derecha */}
                <div className="flex gap-4">
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
