import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../../../src/components/ContactForm";
import { Github, Linkedin } from "lucide-react";

const ContactPage = () => {
    return (
        <section className="min-h-screen flex flex-col bg-[#F8F8F8]">
            <Navbar />
            <h1 className="text-7xl font-semibold text-gray-900 text-left pt-16 mb-10 pl-34 py-8">

                CONTACT
            </h1>
            <main className="flex-grow flex items-start justify-center px-6">
                <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Columna izquierda: 4/12 (1/3) */}
                    <div className="col-span-12 lg:col-span-4 space-y-10">
                        <div className="flex items-center gap-2 text-black">
                            <Github />
                            <p>Github</p>
                        </div>
                        <div className="flex items-center gap-2 text-black">
                            <Linkedin />
                            <p>Linkedin</p>
                        </div>
                        <hr className="border-gray-300 my-4" />

                        <div className="flex items-center gap-2 text-black">
                            <p >dev.diegobottegoni@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2 text-black">
                            <p >11-5416-6993</p>
                        </div>
                        <hr className="border-gray-300 my-4" />

                    </div>

                    {/* Columna derecha: 8/12 (2/3) */}
                    <div className="col-span-12 lg:col-span-8">
                        <ContactForm />
                    </div>

                </div>
            </main>
            <Footer />
        </section>
    );
};

export default ContactPage;
