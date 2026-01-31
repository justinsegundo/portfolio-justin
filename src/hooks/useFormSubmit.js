import { useState } from 'react';

export const useFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const resetStatus = () => {
    setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully!',
      });

      return { success: true };
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });

      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    status,
    handleSubmit,
    resetStatus,
  };
};
