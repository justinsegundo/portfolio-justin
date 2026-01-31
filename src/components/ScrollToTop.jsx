import { useScrollPosition } from '../hooks/useScrollPosition';

const ScrollToTop = () => {
  const { isVisible } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 border-2 border-gray-200 dark:border-slate-700 hover:border-gray-900 dark:hover:border-slate-400 flex items-center justify-center transition-all z-50 shadow-lg ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

export default ScrollToTop;