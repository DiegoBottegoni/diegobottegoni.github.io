import LogoCarousel from "../../components/LogoCarousel";

export default function SkillsPage() {
    return (
        <section className="w-full px-4 py-16 bg-background text-foreground">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Skills</h2>
                <LogoCarousel />
            </div>
        </section>
    );
}
