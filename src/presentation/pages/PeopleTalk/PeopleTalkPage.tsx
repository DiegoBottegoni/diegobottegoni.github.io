import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { CSSProperties } from "react";

type ArrowProps = {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
};

const testimonies = [
    {
        text: "Trabajar con Botte fue una experiencia súper enriquecedora. Siempre dispuesto a ayudar y con buena onda.",
        author: "Juan P.",
    },
    {
        text: "Gran compañero de equipo. Tiene visión técnica y sentido del humor, una combinación clave.",
        author: "Mariana G.",
    },
    {
        text: "Lo que más valoro de Botte es su compromiso. Siempre da más de lo esperado.",
        author: "Leo R.",
    },
];

function NextArrow({ onClick, style }: ArrowProps) {
    return (
        <button
            onClick={onClick}
            style={style}
            className="hidden sm:block z-10 text-4xl text-white hover:text-gray-300 absolute right-4 top-1/2 -translate-y-1/2 lg:mx-10"

        >
            <FiChevronRight />
        </button>
    );
}

function PrevArrow({ onClick, style }: ArrowProps) {
    return (
        <button
            onClick={onClick}
            style={style}
            className="hidden sm:block z-10 text-4xl text-white hover:text-gray-300 absolute left-4 top-1/2 -translate-y-1/2 lg:mx-10"

        >
            <FiChevronLeft />
        </button>
    );
}

const PeopleTalkPage = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        swipe: true,
        responsive: [
            {
                breakpoint: 640, // sm = 640px en tailwind
                settings: {
                    arrows: false, // Oculta flechas en mobile
                },
            },
        ],
    };

    return (
        <section className="w-screen bg-black text-white overflow-hidden">
            <div className="min-h-screen flex flex-col justify-between py-20 sm:py-24 lg:py-32">
                <h2 className="text-center text-3xl sm:text-4xl font-bold uppercase">
                    The streets say
                </h2>

                <div className="flex-1 flex items-center">
                    <Slider {...sliderSettings} className="w-full">
                        {testimonies.map((item, index) => (
                            <div key={index} className="text-center px-8">
                                <p className="text-xl md:text-2xl max-w-3xl mx-auto">"{item.text}"</p>
                                <span className="text-lg font-semibold mt-12 block">— {item.author}</span>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default PeopleTalkPage;
