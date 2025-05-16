import { ArrowRight } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="w-full bg-[#F4F4F3] py-24 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Let’s work together
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto">
                Whether you have a project in mind or just want to connect, I’d love to hear from you.
            </p>
            <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition">
                Contact now
                <ArrowRight size={20} />
            </button>
        </section>
    );
};

export default ContactSection;
