import BannerTape from "./BannerTape";

export default function BannerSection() {
    return (
        <div className="flex flex-col bg-[#F4F4F3]">
            {/* Cinta de arriba: negra con letras blancas */}
            <BannerTape
                text="FRONTEND DEVELOPER / SUPER NERD /"
                backgroundColor="#000000"
                textColor="#FFFFFF"
                angle={-3}
            />

            {/* Cinta de abajo: blanca con letras negras */}
            <BannerTape
                text="BUILDING COOL STUFF / JAVASCRIPT LOVER /"
                backgroundColor="#FFFFFF"
                textColor="#000000"
                angle={3}
                reverse
            />
        </div>
    );
}
