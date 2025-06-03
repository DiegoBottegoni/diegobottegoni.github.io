import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
    const { t } = useTranslation();
    const items = t("about.subtitleItems", { returnObjects: true }) as string[];


    return (
        <section className="w-full px-4 py-24 sm:py-48 bg-primary-d text-foreground">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {/* Título animado */}
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

                {/* Contenido en dos columnas */}
                <div className="flex flex-col-reverse md:flex-row items-start gap-12">
                    {/* Textos a la izquierda */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex-1 flex flex-col justify-between h-full"
                    >
                        <div className="text-xl space-y-4">
                            <p className="text-gray-900">
                                {t("about.paragraph1", { interpolation: { escapeValue: false } })}
                                <br /><br />
                                {t("about.paragraph2", { interpolation: { escapeValue: false } })}
                            </p>
                        </div>

                        {/* Bloque "What I offer" animado por separado */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="my-6 md:mt-30 lg:mt-50"
                        >
                            <h3 className="text-md font-bold mb-6 md:mb-4 uppercase">{t("about.subtitle")}</h3>
                            <p className="text-md">
                                {items.map((item, i) => (
                                    <span key={i}>
                                        {item}
                                        {i < items.length - 1 && <>&nbsp;&nbsp;·&nbsp;&nbsp;</>}
                                    </span>
                                ))}
                            </p>


                        </motion.div>
                    </motion.div>

                    {/* Imagen a la derecha */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex-1 flex justify-center items-center"
                    >
                        <img
                            src="/about-img.jpeg"
                            alt="Diego Bottegoni"
                            className="rounded-2xl w-128 h-140 object-cover shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
