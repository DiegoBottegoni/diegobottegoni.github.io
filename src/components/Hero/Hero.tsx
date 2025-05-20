const Hero = () => {
    return (
        <section className="bg-[#F4F4F3] flex-1 flex items-center justify-center">
            <div className="w-full max-w-6xl sm:px-16 px-6 text-center sm:pt-8 pb-8 sm:pb-16 flex flex-col items-center justify-center gap-6">

                <div className="flex justify-center w-full">
                    <h1 className="text-[clamp(3.5rem,11vw,11rem)] font-bold leading-[0.9] tracking-normal sm:tracking-[0.02em] text-center cursor-default">
                        DIEGO
                        <br />
                        BOTTEGONI
                    </h1>
                </div>

                <div className="relative z-10 w-32 h-44 sm:w-56 sm:h-72 -mt-6 sm:-mt-12 rounded-2xl overflow-hidden">
                    <img
                        src="/Profile-Dev-Img.jpg"
                        alt="Diego Bottegoni"
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="text-sm sm:text-base font-semibold tracking-wide uppercase mt-2 cursor-default">
                    Front End Developer <br /> Buenos Aires, Argentina
                </p>
            </div>
        </section>
    );
};
export default Hero;