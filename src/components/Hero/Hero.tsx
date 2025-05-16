const Hero = () => {
    return (
        <section className="bg-[#F4F4F3] text-center min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-16">

            <h1 className="text-6xl sm:text-9xl font-bold ">
                DIEGO
                <br />
                BOTTEGONI
            </h1>

            <div className="w-36 h-48 sm:w-44 sm:h-56 mx-auto -mt-6 mb-6 rounded-2xl overflow-x-hidden">
                <img
                    src="/Profile-Dev-Img.jpg"
                    alt="Diego Bottegoni"
                    className="w-full h-full object-cover"
                />
            </div>

            <p className="text-sm font-semibold tracking-wide uppercase mt-4 pb-16">
                Front End Developer <br /> Buenos Aires, Argentina
            </p>
        </section>
    );
};
export default Hero;