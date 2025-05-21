import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/contact");
    };

    return (
        <section id="contact" className="w-full bg-[#F4F4F3] py-42 md:py-52 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-semibold mb-6 py-2 font-stretch capitalize w-full">
                Let’s work together
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
                Whether you have a project in mind or just want to connect, I’d love to hear from you.
            </p>
            <button
                onClick={handleContactClick}
                className="default-button inline-flex items-center gap-2 px-6 py-3 rounded-full text-lg transition"
            >
                Contact now
                <ArrowRight size={20} />
            </button>
        </section>
    );
};

export default ContactSection;
