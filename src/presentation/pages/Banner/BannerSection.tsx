import BannerTape from "./BannerTape";

export default function BannerSection() {
    return (
        <div className="flex flex-col bg-primary-d py-24">
            {/* Cinta de arriba: negra con letras blancas */}
            <BannerTape
                text="FULL-STACK DEVELOPER &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; SUPER NERD &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; CLEAN CODE ENTHUSIAST &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; SUPER NERD &nbsp;&nbsp;&nbsp;/"
                backgroundColor="#111827"
                textColor="#FFFFFF"
                angle={-3}
            />

            {/* Cinta de abajo: blanca con letras negras */}
            <BannerTape
                text="BUILDING COOL STUFF &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; TYPESCRIPT LOVER &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; REACT & NODE ENJOYER &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; TYPESCRIPT LOVER &nbsp;&nbsp;&nbsp;/"
                backgroundColor="#FFFFFF"
                textColor="#111827"
                angle={3}
                reverse
            />
        </div>
    );
}
