// import { motion } from "framer-motion"

// const Hero = () => {
//     return (
//         <section className="bg-primary-d flex-1 flex items-center justify-center">
//             <div className="w-full max-w-6xl sm:px-16 px-6 text-center sm:pt-8 pb-8 sm:pb-16 flex flex-col items-center justify-center gap-6">

//                 <div className="flex justify-center w-full">
//                     <h1 className="text-[clamp(3.5rem,11vw,11rem)] font-bold leading-[0.9] tracking-normal sm:tracking-[0.02em] text-center cursor-default">
//                         DIEGO
//                         <br />
//                         BOTTEGONI
//                     </h1>
//                 </div>

//                 <motion.div
//                     drag
//                     dragMomentum={true}
//                     whileDrag={{ scale: 1.05, rotate: 2 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                     className="relative z-10 w-32 h-44 sm:w-56 sm:h-72 -mt-6 sm:-mt-12 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
//                 >
//                     <img
//                         src="/Profile-Dev-Img.jpg"
//                         alt="Diego Bottegoni"
//                         className="w-full h-full object-cover pointer-events-none"
//                     />
//                 </motion.div>



//                 <p className="text-sm sm:text-base font-semibold tracking-wide uppercase mt-2 cursor-default">
//                     Front End Developer <br /> Based in Argentina
//                 </p>
//             </div>
//         </section>
//     )
// }
// export default Hero

import { motion } from "framer-motion"

const Hero = () => {
    return (
        <section className="bg-primary-d flex-1 flex items-center justify-center">
            <div className="w-full max-w-6xl sm:px-16 px-6 text-center sm:pt-8 pb-8 sm:pb-16 flex flex-col items-center justify-center gap-6">

                <div className="relative flex justify-center w-full items-center flex-col">
                    {/* Texto principal al frente */}
                    <h1 className="relative z-10 text-[clamp(3.5rem,11vw,11rem)] font-bold leading-[0.9] tracking-normal sm:tracking-[0.02em] text-black text-center uppercase cursor-default">
                        DIEGO
                        <br />
                        BOTTEGONI
                    </h1>

                    {/* Apellido contorneado repetido detrás, debajo del texto */}
                    <div className="absolute top-full mt-2 flex flex-col items-center z-0">
                        {[...Array(2)].map((_, i) => (
                            <motion.h1
                                key={i}
                                initial={{ y: -30 * (i + 1), opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * (i + 1), type: "spring", stiffness: 200 }}
                                className="text-[clamp(3.5rem,11vw,11rem)] font-bold leading-[0.9] tracking-normal sm:tracking-[0.02em] text-outline uppercase text-center"
                            >
                                BOTTEGONI
                            </motion.h1>
                        ))}
                    </div>
                </div>

                <motion.div
                    drag
                    dragMomentum={true}
                    whileDrag={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative z-10 w-32 h-44 sm:w-56 sm:h-72 -mt-6 sm:-mt-12 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
                >
                    <img
                        src="/Profile-Dev-Img.jpg"
                        alt="Diego Bottegoni"
                        className="w-full h-full object-cover pointer-events-none"
                    />
                </motion.div>

                <p className="text-sm sm:text-base font-semibold tracking-wide uppercase mt-2 cursor-default">
                    Front End Developer <br /> Based in Argentina
                </p>
            </div>
        </section>
    )
}

export default Hero
