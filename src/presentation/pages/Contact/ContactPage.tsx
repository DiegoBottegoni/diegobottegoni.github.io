import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../../../src/components/ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";


const ContactPage = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-y-auto lg:overflow-hidden bg-primary-d scroll-smooth">
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-50 bg-primary-d">
                <Navbar />
            </div>
            {/* Main */}
            <main className="flex-grow px-4 lg:px-20 lg:overflow-hidden pt-16 pb-32 lg:pb-20 flex items-center">
                <div className="w-full max-w-screen-xl flex flex-col gap-8 lg:grid lg:grid-cols-5 lg:grid-rows-6 lg:gap-4 mx-auto">

                    {/* Título - primero en mobile */}
                    <div className="order-1 lg:order-none lg:col-span-2 lg:col-start-1 lg:row-start-1 flex items-end">
                        <h1 className="text-6xl font-bold pb-4 lg:pl-8">CONTACT</h1>
                    </div>
                    {/* Form - segundo en mobile */}
                    <div className="order-2 lg:order-none lg:col-span-3 lg:row-span-5 lg:col-start-3 lg:row-start-2">
                        <ContactForm />
                    </div>
                    {/* Datos - tercero en mobile */}
                    <div className="order-3 lg:order-none space-y-8 lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-2 lg:pl-8">
                        <a
                            href="https://github.com/DiegoBottegoni"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-gray-700 transition"
                        >
                            <Github />
                            <p>Github</p>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/diego-bottegoni/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-gray-700 transition"
                        >
                            <Linkedin />
                            <p>Linkedin</p>
                        </a>
                        <hr className="border-gray-800 my-8 w-3/4" />
                        <div>
                            <a
                                href="mailto:dev.diegobottegoni@gmail.com"
                                className="flex items-center gap-2 hover:text-gray-700 transition"
                            >
                                <Mail />
                                <p>dev.diegobottegoni@gmail.com</p>
                            </a>
                        </div>



                        <hr className="border-gray-800 my-4 w-3/4" />
                    </div>
                </div>
            </main>
            {/* Footer */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow pb-4">
                <Footer />
            </div>
        </div>
    );
};

export default ContactPage;
