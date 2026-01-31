import { useEffect } from 'react';

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [image]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && image) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all duration-200"
        onClick={onClose}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="relative max-w-7xl max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={image}
          alt="Project preview"
          className="max-h-[90vh] max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}

export default ImageLightbox;