export default function AboutPage() {
    return (
        <section className="w-full px-4 py-16 bg-[#F7F7F7] text-foreground">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {/* Título central */}
                <h2 className="text-4xl font-bold text-center">About Me</h2>

                {/* Contenido en dos columnas */}
                <div className="flex flex-col md:flex-row items-start gap-12">
                    {/* Textos a la izquierda */}
                    <div className="flex-1 flex flex-col justify-between h-full">
                        {/* Texto superior */}
                        <p className="text-lg">
                            Soy desarrollador con foco en transformar problemas en soluciones prácticas,
                            buscando siempre mejorar tanto el producto como mis habilidades.
                            Trabajo bien en equipo, disfruto del intercambio de ideas y busco entornos donde
                            la curiosidad y la mejora continua sean parte de la cultura.
                        </p>

                        {/* Texto inferior */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-semibold mb-2">What I offer</h3>
                            <p className="text-lg text-muted-foreground">
                                Web development · App development · UI Implementation (to be defined)
                            </p>
                        </div>
                    </div>

                    {/* Imagen a la derecha */}
                    <div className="flex-1 flex justify-center items-center">
                        <img
                            src="/about-img.jpeg"
                            alt="Diego Bottegoni"
                            className="rounded-2xl w-72 h-96 object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
