import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-primary-l py-42 md:py-52 text-center px-4">
            <p className="text-5xl md:text-8xl font-semibold mb-6 py-2 font-stretch w-full uppercase">
                {t("contact.title")}
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
                {t("contact.text")}
            </p>
            <Link
                to="/contact"
                className="default-button inline-flex items-center gap-2 px-6 py-3 rounded-full text-lg transition"
            >
                {t("contact.button")}
                <ArrowRight size={20} />
            </Link>
        </section>
    );
};

export default ContactSection;
