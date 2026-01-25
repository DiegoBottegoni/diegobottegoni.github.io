export interface ContactFormData {
    [key: string]: FormDataEntryValue;
}

const API_URL = import.meta.env.VITE_CONTACT_API_URL;

if (!API_URL) {
    console.warn("Missing VITE_CONTACT_API_URL in environment variables.");
}

export const submitContactForm = async (formData: FormData): Promise<boolean> => {
    try {
        const res = await fetch(API_URL || "", {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        });
        return res.ok;
    } catch (error) {
        console.error("Contact form submission error:", error);
        throw error;
    }
};
