const ContactForm = () => {
    return (
        <div className="bg-[#F8F8F8] w-full pr-8">
            <form className="space-y-5 w-full">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 rounded-4xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-4xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <textarea
                    placeholder="Message"
                    rows={10}
                    className="w-full border border-gray-300 rounded-4xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
                <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition text-lg font-medium"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
