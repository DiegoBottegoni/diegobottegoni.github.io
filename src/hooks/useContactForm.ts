import { useState } from 'react';
import { toast } from 'sonner';
import { submitContactForm } from '@/services/contactService';

export const useContactForm = (onSuccess?: () => void) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const success = await submitContactForm(formData);

            if (success) {
                toast.success('Thanks for your message!');
                form.reset();
                onSuccess?.();
            } else {
                toast.error('Oops! Something went wrong. Try again later.');
            }
        } catch (error) {
            toast.error('Network error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        handleSubmit
    };
};
