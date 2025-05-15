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
            className={` z-10 text-4xl text-gray-600 hover:text-black absolute right-4 top-1/2 -translate-y-1/2`}
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
            className={` z-10 text-4xl text-gray-600 hover:text-black absolute left-4 top-1/2 -translate-y-1/2`}
        >
            <FiChevronLeft />
        </button>
    );
}

const PeopleTalkPage = () => {
    const sliderSettings = {
        dots: true,
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
    };

    return (
        <section className="w-screen h-screen bg-[#EDEDEC] text-gray-900 flex flex-col overflow-hidden">
            <h2 className="text-center text-4xl font-bold pt-10">"La gente anda diciendo"</h2>
            <div className="relative flex-1">
                <Slider {...sliderSettings} className="relative">
                    {testimonies.map((item, index) => (
                        <div key={index}>
                            <div className="w-screen h-[calc(100vh-80px)] flex flex-col justify-center items-center px-8 text-center">
                                <p className="text-xl md:text-2xl max-w-3xl italic mb-6">"{item.text}"</p>
                                <span className="text-lg font-semibold text-gray-600">— {item.author}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default PeopleTalkPage;
