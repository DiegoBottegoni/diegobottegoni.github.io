import { useRef, useState } from 'react';
import { toast } from 'sonner';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch('https://formsubmit.co/dev.diegobottegoni@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (res.ok) {
                toast.success('Thanks for your message!');
                form.reset();
            } else {
                toast.error('Oops! Something went wrong. Try again later.');
            }
        } catch (error) {
            toast.error('Network error. Please try again later.' + error);
        } finally {
            setLoading(false);
        }
    };

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
                    placeholder="Name"
                    required
                    className="w-full border border-gray-800 rounded-4xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full border border-gray-800 rounded-4xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <textarea
                    name="message"
                    placeholder="Message"
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
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
