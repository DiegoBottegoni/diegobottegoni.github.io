import LogoCarousel from "../../components/LogoCarousel";

export default function SkillsPage() {
    return (
        <section className="w-full px-0 py-24 bg-[#EDEDEC]">
            {/* Título centrado, con max-w */}
            <div className="max-w-6xl mx-auto px-4 text-center mb-12">
                <h2 className="text-4xl font-bold uppercase">Tech Skills</h2>
            </div>

            {/* Carousel full width */}
            <LogoCarousel />
        </section>

    );
}
