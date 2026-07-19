import { useScrollPosition } from "../hooks/useScrollPosition";
import "../styles/scrollToTop.css";

const ScrollToTop = () => {
  const { isVisible } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`stt-btn${isVisible ? " stt-visible" : ""}`}
      aria-label="Scroll to top"
    >
      <svg
        className="stt-icon"
        aria-hidden="true"
        width="15"
        height="15"
        viewBox="0 0 20.79 20.79"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 9.083L0 11.708L15.75 11.708L8.531 18.926L10.395 20.79L20.79 10.395L10.395 0L8.531 1.864L15.75 9.083Z" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
