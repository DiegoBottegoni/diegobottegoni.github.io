import { motion } from "framer-motion"

export default function AboutPage() {
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
                    About Me
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
                                Musician and nerd all my life, and now also a front-end developer.
                                Just check my pictures — I’m rocking ‘Back to the Future’ and ‘Rick & Morty’ t-shirts! ¡Nerd alert!
                                <br /><br />
                                I jumped into Sound Engineering to mathematically understand why something sounds good or bad.
                                Just imagine that level of nerdiness.
                                That’s the attitude that defines me, more than as a musician or developer, as a person.
                                It's just a matter of learning how to do things.
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
                            <h3 className="text-md font-bold mb-6 md:mb-4 uppercase">What I offer</h3>
                            <p className="text-md">
                                Web Development&nbsp;&nbsp;·&nbsp;&nbsp;App Development&nbsp;&nbsp;·&nbsp;&nbsp;UI/UX Implementation&nbsp;&nbsp;·&nbsp;&nbsp;Responsive Interfaces&nbsp;&nbsp;·&nbsp;&nbsp;Frontend Logic&nbsp;&nbsp;·&nbsp;&nbsp;API Integration&nbsp;&nbsp;·&nbsp;&nbsp;Clean Code&nbsp;&nbsp;·&nbsp;&nbsp;Scalable Apps&nbsp;&nbsp;·&nbsp;&nbsp;Modern FrontEnd
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
