import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../../../src/components/ContactForm";
import { Github, Linkedin } from "lucide-react";

const ContactPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
            {/* Navbar */}
            <div className="h-16 shrink-0">
                <Navbar />
            </div>

            {/* Main content */}
            <main className="flex-grow flex flex-col-reverse lg:grid lg:grid-cols-5 lg:grid-rows-8 gap-4 px-4 lg:px-20">

                {/* Formulario (primero en mobile) */}
                <div className="lg:col-span-3 lg:row-span-5 lg:col-start-3 lg:row-start-3">
                    <ContactForm />
                </div>

                {/* Info personal */}
                <div className="space-y-8 lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-3">
                    <div className="flex items-center gap-2">
                        <Github />
                        <p>Github</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Linkedin />
                        <p>Linkedin</p>
                    </div>
                    <hr className="border-gray-800 my-8 w-3/4" />
                    <div>
                        <p>dev.diegobottegoni@gmail.com</p>
                    </div>
                    <div>
                        <p>11-5416-6993</p>
                    </div>
                    <hr className="border-gray-800 my-4 w-3/4" />
                </div>

                {/* Título */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 flex items-end">
                    <h1 className="text-6xl font-bold text-gray-900 pb-8">CONTACT</h1>
                </div>
            </main>

            {/* Footer */}
            <div className="shrink-0">
                <Footer />
            </div>
        </div>
    );
};

export default ContactPage;
