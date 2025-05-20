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
                        <p className="text-lg">
                            I'm a developer focused on turning problems into simple, effective solutions.
                            I'm driven by the desire to improve—not just the product, but also my own skills—and I see every challenge as a chance to learn something new.
                            I enjoy working in a team, sharing ideas, and being part of environments where curiosity and continuous improvement are part of the culture.
                            Today, I can contribute with my Front-End knowledge and, above all, with an open mindset, strong commitment, and a real drive to grow.
                            My goal is to bring value from day one—whatever the challenge.
                        </p>

                        {/* Texto inferior */}
                        <div className="my-6 lg:mt-36">
                            <h3 className="text-2xl font-semibold mb-2">What I offer</h3>
                            <p className="text-lg text-muted-foreground">
                                · Web development · App development · UI/UX Implementation · Responsive interfaces · Frontend logic · API integration · Clean code · Scalable apps · Real-world solutions · Modern front-end · Continuous learning
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
