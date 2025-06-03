import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    const outlineCount = typeof window !== "undefined" && window.innerWidth < 640 ? 3 : 2;

    return (
        <section className="bg-primary-d flex-1 flex items-center justify-center">
            <div className="w-full max-w-6xl sm:px-16 px-6 text-center sm:pt-8 pb-8 sm:pb-16 flex flex-col items-center justify-center gap-6">

                <div className="relative flex justify-center w-full items-center flex-col">
                    {/* Texto principal al frente */}
                    <h1 className="relative z-10 text-[clamp(3.5rem,11vw,11rem)] font-bold leading-[0.9] tracking-normal sm:tracking-[0.02em] text-center uppercase cursor-default">
                        DIEGO
                        <br />
                        BOTTEGONI
                    </h1>

                    {/* Apellido contorneado detrás */}
                    <div className="absolute top-full mt-2 flex flex-col items-center z-0">
                        {[...Array(outlineCount)].map((_, i) => (
                            <motion.h1
                                key={i}
                                initial={{ y: -24 * (i + 1), opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * (i + 8), type: "spring", stiffness: 300 }}
                                className="text-[clamp(3.5rem,11vw,11rem)] font-bold leading-[0.9] tracking-normal text-gray-900 sm:tracking-[0.02em] text-outline uppercase text-center"
                            >
                                BOTTEGONI
                            </motion.h1>
                        ))}
                    </div>
                </div>

                <motion.div
                    drag
                    dragMomentum={true}
                    initial={{ opacity: 0, scale: 0, borderRadius: "50%" }}
                    animate={{ opacity: 1, scale: 1, borderRadius: "12px" }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 },
                    }}
                    className="relative z-10 w-32 h-44 sm:w-56 sm:h-72 -mt-6 sm:-mt-12 overflow-hidden cursor-grab active:cursor-grabbing"
                >
                    <img
                        src="/Profile-Dev-Img.jpg"
                        alt="Diego Bottegoni"
                        className="w-2rem h-1rem md:w-full md:h-full object-cover pointer-events-none rounded-2xl sm:rounded-none"
                    />
                </motion.div>

                <p className="text-sm sm:text-base font-semibold tracking-wide uppercase mt-2 cursor-default">
                    {t("hero.profession")} <br /> {t("hero.location")}
                </p>
            </div>
        </section>
    );
};

export default Hero;
