import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
    const { t } = useTranslation();
    const items = t("about.subtitleItems", { returnObjects: true }) as string[];


    return (
        <section className="w-full px-4 pb-24 sm:pb-48 pt-18 sm:pt-38 bg-primary-d text-foreground">
    <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <motion.h2
            id="about"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center uppercase"
        >
            {t("titles.about")}
        </motion.h2>

        {/* GRID layout */}
        <div className="grid grid-cols-1 mdl:grid-cols-2 gap-12 items-stretch">

            {/* Image column */}
            <motion.div
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="
        order-1 mdl:order-2
        w-full
        aspect-[3/4]
        mdl:aspect-auto
        mdl:h-full
    "
>
    <img
        src="/about-img.jpeg"
        alt="Diego Bottegoni"
        className="
            w-full h-full
            rounded-2xl
            shadow-lg
            object-cover
            object-top
        "
    />
</motion.div>

            {/* Text column */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col h-full order-2 mdl:order-1"
            >
                <div className="text-xl space-y-6 mr-2">
                    <p className="text-gray-900 leading-relaxed">
                        {t("about.paragraph1")}
                    </p>
                    <p className="text-gray-900 leading-relaxed">
                        {t("about.paragraph2")}
                    </p>
                    <p className="text-gray-900 leading-relaxed">
                        {t("about.paragraph3")}
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="mt-auto pt-8 space-y-6"
                >
                    <h3 className="text-md font-bold uppercase">
                        {t("about.subtitle")}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {items.map((item, i) => (
                            <span
                                key={i}
                                className="bg-white/10 text-gray-900 px-3 py-1 rounded-full text-sm border border-gray-900/20 backdrop-blur-sm hover:bg-white/20 transition"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

        </div>
    </div>
</section>
//         <section className="w-full px-4 pb-24 sm:pb-48 pt-18 sm:pt-38 bg-primary-d text-foreground">
//     <div className="max-w-6xl mx-auto flex flex-col gap-12">
//         <motion.h2
//             id="about"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold text-center uppercase"
//         >
//             {t("titles.about")}
//         </motion.h2>

//         {/* GRID layout */}
//         <div className="grid grid-cols-1 mdl:grid-cols-2 gap-12 items-stretch">
            
//             {/* Image column — first on mobile */}
//             <motion.div
//                 initial={{ x: 100, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 className="h-80 mdl:h-auto order-1 mdl:order-2"
//             >
//                 <img
//                     src="/about-img.jpeg"
//                     alt="Diego Bottegoni"
//                     className="rounded-2xl w-full h-full object-cover shadow-lg"
//                 />
//             </motion.div>

//             {/* Text column — second on mobile */}
//             <motion.div
//                 initial={{ x: -100, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 className="flex flex-col h-full order-2 mdl:order-1"
//             >
//                 <div className="text-xl space-y-6 mr-2">
//                     <p className="text-gray-900 leading-relaxed">
//                         {t("about.paragraph1")}
//                     </p>
//                     <p className="text-gray-900 leading-relaxed">
//                         {t("about.paragraph2")}
//                     </p>
//                     <p className="text-gray-900 leading-relaxed">
//                         {t("about.paragraph3")}
//                     </p>
//                 </div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
//                     viewport={{ once: true, amount: 0.4 }}
//                     className="mt-auto pt-8 space-y-6"
//                 >
//                     <h3 className="text-md font-bold uppercase">
//                         {t("about.subtitle")}
//                     </h3>

//                     <div className="flex flex-wrap gap-2">
//                         {items.map((item, i) => (
//                             <span
//                                 key={i}
//                                 className="bg-white/10 text-gray-900 px-3 py-1 rounded-full text-sm border border-gray-900/20 backdrop-blur-sm hover:bg-white/20 transition"
//                             >
//                                 {item}
//                             </span>
//                         ))}
//                     </div>
//                 </motion.div>
//             </motion.div>
//         </div>
//     </div>
// </section>
    );
}
