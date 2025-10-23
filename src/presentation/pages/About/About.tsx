import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18n";

export default function AboutPage() {
    const { t } = useTranslation();
    const items = t("about.subtitleItems", { returnObjects: true }) as string[];
    const currentLang = i18n.language;
    const mtClass = currentLang === 'es'
        ? 'mt-10 xs:mt-3 xsl:mt-4 sm:mt-6 sml:mt-8 md:mt-8 mdl:mt-8 lg:mt-24 xl:mt-24'
        : 'mt-8 xs:mt-4 xsl:mt-6 sm:mt-10 sml:mt-11 md:mt-12 mdl:mt-14 lg:mt-30 xl:mt-30';


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
                <div className="flex flex-col-reverse mdl:flex-row items-start gap-12">
                    {/* Textos a la izquierda */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex-1 flex flex-col justify-between h-full"
                    >
                        <div className="text-xl space-y-4 mr-2">
                            <p className="text-gray-900">
                                {t("about.paragraph1", { interpolation: { escapeValue: false } })}
                                <br /><br />
                                {t("about.paragraph2", { interpolation: { escapeValue: false } })}
                                <br /><br />
                                {t("about.paragraph3", { interpolation: { escapeValue: false } })}
                            </p>
                        </div>

                        {/* Bloque "What I offer" animado por separado */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            // className="mt-8 xs:mt-4 xsl:mt-6 sm:mt-10 sml:mt-12 md:mt-12 mdl:mt-14 lg:mt-28 xl:mt-28"
                            className={mtClass}

                        >
                            <h3 className="text-md font-bold mb-6 md:mb-4 uppercase">{t("about.subtitle")}</h3>
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

                            {/* <p className="text-md">
                                {items.map((item, i) => (
                                    <span key={i}>
                                        {item}
                                        {i < items.length - 1 && <>&nbsp;&nbsp;·&nbsp;&nbsp;</>}
                                    </span>
                                ))}
                            </p> */}


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
