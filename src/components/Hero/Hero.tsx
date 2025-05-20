const Hero = () => {
    return (
        <section className="bg-[#F4F4F3] min-h-[calc(100vh-64px)] flex items-center justify-center">
            <div className="w-full max-w-6xl sm:px-16 text-center py-16 flex flex-col items-center">

                <div className="flex justify-center w-full">
                    <h1 className="text-[clamp(4rem,13vw,11.5rem)] font-bold leading-[0.9] tracking-normal sm:tracking-[0.02em] text-center">
                        DIEGO
                        <br />
                        BOTTEGONI
                    </h1>
                </div>

                <div className="relative z-10 w-32 h-44 sm:w-56 sm:h-72 -mt-6 sm:-mt-14 mb-6 rounded-2xl overflow-hidden">
                    <img
                        src="/Profile-Dev-Img.jpg"
                        alt="Diego Bottegoni"
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="text-sm sm:text-base font-semibold tracking-wide uppercase mt-4 pb-16">
                    Front End Developer <br /> Buenos Aires, Argentina
                </p>

            </div>
        </section>
    );
};

export default Hero;
