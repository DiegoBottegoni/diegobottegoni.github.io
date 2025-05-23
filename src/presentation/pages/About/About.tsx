export default function AboutPage() {
    return (
        <section className="w-full px-4 py-24 sm:py-48 bg-primary-d text-foreground">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {/* Título central */}
                <h2 id="about" className="text-4xl font-bold text-center uppercase">About Me</h2>

                {/* Contenido en dos columnas */}
                {/* <div className="flex flex-col md:flex-row items-start gap-12"> */}
                <div className="flex flex-col-reverse md:flex-row items-start gap-12">

                    {/* Textos a la izquierda */}
                    <div className="flex-1 flex flex-col justify-between h-full">
                        {/* Texto superior */}
                        <div className="text-xl space-y-4">
                            <p className="text-gray-900">
                                Musician and nerd all my life, and now also a front-end developer.
                                Just check my pictures — I’m rocking ‘Back to the Future’ and ‘Rick & Morty’ t-shirts!{' '}
                                ¡Nerd alert!

                                I jumped into Sound Engineering to mathematically understand why something sounds good or bad.
                                Just imagine that level of nerdiness.
                                That’s the attitude that defines me, more than as a musician or developer, as a person.
                                It's just a matter of learning how to do things.
                            </p>
                        </div>


                        {/* Texto inferior */}
                        <div className="my-6 md:mt-30 lg:mt-50">
                            <h3 className="text-md font-bold mb-6 md:mb-4 uppercase">What I offer</h3>
                            <p className="text-md">
                                WebDevelopment &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; AppDevelopment &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; UIUXImplementation &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; ResponsiveInterfaces &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; FrontendLogic &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; APIIntegration &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; CleanCode &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; ScalableApps &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; RealWorldSolutions &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; ModernFrontEnd &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; ContinuousLearning

                                {/* WebDevelopment &nbsp;·&nbsp; AppDevelopment &nbsp;·&nbsp; UIUXImplementation &nbsp;·&nbsp; ResponsiveInterfaces &nbsp;·&nbsp; FrontendLogic &nbsp;·&nbsp; APIIntegration &nbsp;·&nbsp; CleanCode &nbsp;·&nbsp; ScalableApps &nbsp;·&nbsp; ModernFrontEnd &nbsp; */}


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

// More text to add
{/* <div className="-mb-0.5">
                                As a musician, I always dedicated myself to putting ideas on paper and making them sound. Today I adapt that same passion to development.
                                I’m still stuck in the “why age” of my three years. I’m obsessed with figuring out why something is broken so I can fix it. And if I can’t... I want to know why.
                            </div> */}