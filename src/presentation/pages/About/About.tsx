export default function AboutPage() {
    return (
        <section id="about" className="w-full px-4 py-24 sm:py-48 bg-[#F4F4F3] text-foreground">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {/* Título central */}
                <h2 className="text-4xl font-bold text-center pb-8">About Me</h2>

                {/* Contenido en dos columnas */}
                <div className="flex flex-col md:flex-row items-start gap-12">
                    {/* Textos a la izquierda */}
                    <div className="flex-1 flex flex-col justify-between h-full">
                        {/* Texto superior */}

                        <div className="space-y-4 text-lg leading-relaxed">
                            <div>Musician and nerd all my life, and now also a front-end developer.</div>
                            <div>
                                Just check my pictures — I’m rocking ‘Back to the Future’ and ‘Rick & Morty’ t-shirts!{' '}
                                <span className="text-red-600 font-bold text-lg ml-2">¡Nerd alert!</span>
                            </div>
                            <div>
                                As a musician, I always dedicated myself to putting ideas on paper and making them sound. Today I adapt that same passion to development.
                            </div>
                            <div>
                                I’m still stuck in the “why age” of my three years. I’m obsessed with figuring out why something is broken so I can fix it. And if I can’t... well, why not?
                            </div>
                            <div>
                                I jumped into Sound Engineering to mathematically understand why something sounds good or bad. Just imagine that level of nerdiness!
                            </div>
                            <div>
                                That’s the attitude that defines me, more than as a musician or developer, as a person.
                            </div>
                            <div>
                                I believe everything is possible, it's just a matter of learning how to do it.
                            </div>
                            {/* <div>
                                If there's something I want to get done but don't know how to do it, I learn it and do it.
                            </div> */}

                        </div>


                        {/* Texto inferior */}
                        <div className="my-6 lg:mt-36">
                            <h3 className="text-2xl font-semibold mb-2">What I offer</h3>
                            <p className="text-lg text-muted-foreground">
                                &lt;WebDevelopment&gt; · &lt;AppDevelopment&gt; · &lt;UIUXImplementation&gt; · &lt;ResponsiveInterfaces&gt; · &lt;FrontendLogic&gt; · &lt;APIIntegration&gt; · &lt;CleanCode&gt; · &lt;ScalableApps&gt; · &lt;RealWorldSolutions&gt; · &lt;ModernFrontEnd&gt; · &lt;ContinuousLearning&gt;
                            </p>
                        </div>
                    </div>

                    {/* Imagen a la derecha */}
                    <div className="flex-1 flex justify-center items-center">
                        <img
                            src="/about-img.jpeg"
                            alt="Diego Bottegoni"
                            className="rounded-2xl w-92 h-140 object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
