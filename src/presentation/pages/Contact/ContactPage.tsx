// import Navbar from "../../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import ContactForm from "../../../../src/components/ContactForm";
// import { Github, Linkedin } from "lucide-react";

// const ContactPage = () => {
//     return (
//         <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
//             {/* Navbar */}
//             <div className="col-span-5 row-start-1">
//                 <Navbar />
//             </div>

//             {/* Contenido principal */}
//             <main className="flex-grow grid grid-cols-5 grid-rows-8 gap-4 px-4 lg:px-20 py-4">
//                 {/* Título */}
//                 <div className="col-span-2 col-start-1 row-start-2 flex items-end">
//                     <h1 className="text-6xl font-bold text-gray-900 pb-8">CONTACT</h1>
//                 </div>

//                 {/* Info personal */}
//                 <div className="col-span-2 row-span-3 col-start-1 row-start-3 space-y-8">
//                     <div className="flex items-center gap-2 text-black font-semibold">
//                         <Github />
//                         <p>Github</p>
//                     </div>
//                     <div className="flex items-center gap-2 text-black font-semibold">
//                         <Linkedin />
//                         <p>Linkedin</p>
//                     </div>

//                     <hr className="border-gray-300 my-4 w-3/4" />

//                     <div className="text-black font-medium">
//                         <p>dev.diegobottegoni@gmail.com</p>
//                     </div>
//                     <div className="text-black font-medium">
//                         <p>11-5416-6993</p>
//                     </div>

//                     <hr className="border-gray-300 my-4 w-3/4" />
//                 </div>

//                 {/* Formulario */}
//                 <div className="col-span-3 row-span-5 col-start-3 row-start-3">
//                     <ContactForm />
//                 </div>
//             </main>

//             {/* Footer */}
//             <div className="col-span-5 row-start-8">
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default ContactPage;

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../../../src/components/ContactForm";
import { Github, Linkedin } from "lucide-react";

const ContactPage = () => {
    return (

        <div className="flex flex-col h-screen bg-[#F8F8F8]">
            {/* Navbar */}
            <div className="h-16 shrink-0">
                <Navbar />
            </div>


            {/* Main content (scrollable si hace falta) */}
            <main className="flex-grow overflow-auto grid grid-cols-5 grid-rows-8 gap-4 px-4 lg:px-20 py-4">
                {/* Título */}
                <div className="col-span-2 col-start-1 row-start-2 flex items-end">
                    <h1 className="text-6xl font-bold text-gray-900 pb-8">CONTACT</h1>
                </div>

                {/* Info personal */}
                <div className="col-span-2 row-span-3 col-start-1 row-start-3 space-y-8">
                    <div className="flex items-center gap-2 text-black font-semibold">
                        <Github />
                        <p>Github</p>
                    </div>
                    <div className="flex items-center gap-2 text-black font-semibold">
                        <Linkedin />
                        <p>Linkedin</p>
                    </div>

                    <hr className="border-gray-300 my-4 w-3/4" />

                    <div className="text-black font-medium">
                        <p>dev.diegobottegoni@gmail.com</p>
                    </div>
                    <div className="text-black font-medium">
                        <p>11-5416-6993</p>
                    </div>

                    <hr className="border-gray-300 my-4 w-3/4" />
                </div>


                {/* Formulario */}
                <div className="col-span-3 row-span-5 col-start-3 row-start-3">
                    <ContactForm />
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
