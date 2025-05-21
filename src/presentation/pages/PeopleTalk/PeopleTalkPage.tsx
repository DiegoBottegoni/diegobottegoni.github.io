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
            // className="z-10 text-4xl text-gray-600 hover:text-black absolute right-4 top-1/2 -translate-y-1/2"
            className="hidden sm:block z-10 text-4xl text-gray-600 hover:text-black absolute right-4 top-1/2 -translate-y-1/2"

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
            // className="z-10 text-4xl text-gray-600 hover:text-black absolute left-4 top-1/2 -translate-y-1/2"
            className="hidden sm:block z-10 text-4xl text-gray-600 hover:text-black absolute left-4 top-1/2 -translate-y-1/2"

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
        <section className="w-screen min-h-screen max-h-[900px] bg-black text-white flex flex-col justify-center py-20 sm:py-24 lg:py-30 overflow-hidden">

            <h2 className="text-center text-3xl sm:text-4xl font-bold uppercase mb-40 sm:mb-60 2xl:mb-120">

                The streets say
            </h2>

            <div className="relative flex-1">
                <Slider {...sliderSettings} className="relative h-30 pb-20">
                    {testimonies.map((item, index) => (
                        <div key={index} className="h-full w-full">
                            <div className="grid grid-rows-[1fr_auto] place-items-center h-full text-center px-8">
                                <p className="text-xl md:text-2xl max-w-3xl">
                                    "{item.text}"
                                </p>
                                <span className="text-lg font-semibold mt-12">
                                    — {item.author}
                                </span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default PeopleTalkPage;
