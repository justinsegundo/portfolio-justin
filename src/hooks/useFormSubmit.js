import { useState } from 'react';

export const useFormSubmit = () => {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData, endpoint = '/api/contact') => {
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.',
        });
        return { success: true };
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.',
      });
      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => setStatus({ type: '', message: '' });

  return { status, isSubmitting, handleSubmit, resetStatus };
};