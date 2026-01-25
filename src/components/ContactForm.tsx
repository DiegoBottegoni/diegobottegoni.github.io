import { useRef } from 'react';
import { useTranslation } from "react-i18next";
import { useContactForm } from "@/hooks/useContactForm";

const ContactForm = () => {
    const { t } = useTranslation();
    const { loading, handleSubmit } = useContactForm();
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <div className="bg-primary-d w-full pr-8">
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5 w-full"
            >
                <input
                    type="text"
                    name="name"
                    placeholder={t("contactPage.form.name")}
                    required
                    className="w-full border border-gray-800 rounded-4xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                    type="email"
                    name="email"
                    placeholder={t("contactPage.form.email")}
                    required
                    className="w-full border border-gray-800 rounded-4xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <textarea
                    name="message"
                    placeholder={t("contactPage.form.message")}
                    rows={10}
                    required
                    className="w-full border border-gray-800 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />

                {/* 🛡️ Anti-bot honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />

                {/* 🔒 Evitar CAPTCHA */}
                <input type="hidden" name="_captcha" value="false" />
                <div className='flex md:justify-end'>

                    <button
                        type="submit"
                        disabled={loading}
                        // className="w-full bg-gray-900 text-white py-3 rounded-full hover:bg-gray-800 transition text-lg font-medium disabled:opacity-60"
                        className='default-button w-full md:w-1/4 rounded-4xl md:rounded-full py-4'
                    >
                        {loading ? t("contactPage.form.sending") : t("contactPage.form.submit")}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
