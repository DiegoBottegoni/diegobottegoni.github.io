import BannerTape from "./BannerTape";

export default function BannerSection() {
    return (
        <div className="flex flex-col bg-primary-d py-24">
            {/* Cinta de arriba: negra con letras blancas */}
            <BannerTape
                text="FRONTEND DEVELOPER &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; SUPER NERD &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; FRONTEND DEVELOPER &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; SUPER NERD &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;"
                backgroundColor="#000000"
                textColor="#FFFFFF"
                angle={-3}
            />

            {/* Cinta de abajo: blanca con letras negras */}
            <BannerTape
                text="BUILDING COOL STUFF &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; TYPESCRIPT LOVER &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; BUILDING COOL STUFF &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; TYPESCRIPT LOVER &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;"
                backgroundColor="#FFFFFF"
                textColor="#000000"
                angle={3}
                reverse
            />
        </div>
    );
}
