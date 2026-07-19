import { motion, useReducedMotion } from "framer-motion";
import ProfileViewsBadge from "./ProfileViewsBadge";
import "../../src/styles/hero.css";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/justinsegundo/",
    icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
  },
  {
    label: "Email",
    href: "mailto:justin@email.com",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/justineian.segundo",
    icon: (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
    </svg>
  ),
  },
];

const STATS = [
  { value: "8", label: "Internal Systems", sub: "In Production" },
  { value: "29K+", label: "Records", sub: "Processed" },
  { value: "Solo", label: "Full Stack", sub: "Developer" },
  { value: "Live", label: "Real Users", sub: "Every Day" },
];

const RIGHT_ICONS = [
  {
    id: "react",
    style: { top: "4%", right: "2%" },
    delay: 0,
    rotate: -12,
    bg: "rgba(97,218,251,0.08)",
    border: "rgba(97,218,251,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#61DAFB">
        <circle cx="12" cy="12" r="2.5" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    id: "node",
    style: { top: "26%", right: "-2%" },
    delay: 0.35,
    rotate: 10,
    bg: "rgba(104,160,99,0.08)",
    border: "rgba(104,160,99,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#68A063">
        <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.46c0 .66-.68 1.31-1.77.76L4.65 16.5a.26.26 0 0 1-.13-.22V7.71c0-.09.04-.17.13-.22l7.44-4.29c.08-.05.19-.05.27 0l7.44 4.29c.09.05.13.13.13.22v8.58c0 .08-.05.17-.13.21l-7.44 4.3c-.08.04-.19.04-.27 0L10.2 19.65c-.07-.04-.16-.05-.23-.02-.64.36-.76.41-1.36.57-.15.04-.37.1.08.34l1.97 1.16c.24.14.5.21.77.21s.53-.07.78-.21l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05a1.6 1.6 0 0 0-.78-.2z" />
      </svg>
    ),
  },
  {
    id: "ts",
    style: { top: "50%", right: "-2%" },
    delay: 0.7,
    rotate: 8,
    bg: "rgba(49,120,198,0.1)",
    border: "rgba(49,120,198,0.22)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <text x="3" y="18" fontSize="11" fontWeight="bold" fill="white" fontFamily="sans-serif">TS</text>
      </svg>
    ),
  },
  {
    id: "postgres",
    style: { bottom: "10%", right: "2%" },
    delay: 1.0,
    rotate: -8,
    bg: "rgba(51,103,145,0.1)",
    border: "rgba(51,103,145,0.22)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#336791">
        <path d="M17.13 12.76c-.38-.06-.73-.07-1.04-.03.27-.9.33-1.73.17-2.23-.42-1.33-1.28-1.3-1.28-1.3l-.01-.04c-.1-2.7-1.44-4.16-3.97-4.16-2.54 0-3.88 1.46-3.97 4.16l-.01.04s-.86-.03-1.28 1.3c-.16.5-.1 1.33.17 2.23-.31-.04-.66-.03-1.04.03C3.59 13.22 2 14.73 2 17c0 2.41 1.96 4 5 4 1.34 0 2.5-.36 3.35-.97.23.07.45.1.65.1s.42-.03.65-.1C12.5 20.64 13.66 21 15 21c3.04 0 5-1.59 5-4 0-2.27-1.59-3.78-2.87-4.24z" />
      </svg>
    ),
  },
  {
    id: "vite",
    style: { top: "1%", right: "34%" },
    delay: 0.55,
    rotate: 15,
    bg: "rgba(189,52,254,0.07)",
    border: "rgba(189,52,254,0.18)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="#BD34FE" d="M21 3L12.3 20.5 10 13.5 3 11.5z" />
        <path fill="#FF9940" d="M10 13.5L12.3 20.5 7 9z" />
      </svg>
    ),
  },
];

const LEFT_ICONS = [
  {
    id: "php",
    style: { top: "16%", left: "-2%" },
    delay: 0.2,
    rotate: -10,
    bg: "rgba(119,123,179,0.1)",
    border: "rgba(119,123,179,0.22)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB3" />
        <text x="4" y="17" fontSize="9" fontWeight="bold" fill="white" fontFamily="sans-serif">PHP</text>
      </svg>
    ),
  },
  {
    id: "html",
    style: { top: "40%", left: "-2%" },
    delay: 0.5,
    rotate: 8,
    bg: "rgba(227,76,38,0.08)",
    border: "rgba(227,76,38,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#E34F26">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    ),
  },
  {
    id: "css",
    style: { bottom: "16%", left: "2%" },
    delay: 0.85,
    rotate: -6,
    bg: "rgba(21,114,182,0.08)",
    border: "rgba(21,114,182,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#1572B6">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    ),
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const FloatingIcon = ({ fi, reduced }) => (
  <motion.div
    className="absolute"
    style={{
      ...fi.style,
      "--r": `${fi.rotate}deg`,
      animation: reduced ? "none" : `floatY ${5.4 + fi.delay * 0.6}s ease-in-out ${fi.delay}s infinite`,
    }}
    initial={reduced ? false : { opacity: 0, scale: 0.82 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.55 + fi.delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <div
      className="floating-icon-card"
      style={{ background: fi.bg, border: `1px solid ${fi.border}` }}
    >
      {fi.icon}
    </div>
  </motion.div>
);

const Hero = () => {
  const reduced = useReducedMotion();

  const entranceStagger = reduced
    ? { hidden: {}, visible: {} }
    : stagger;

  const entranceItem = reduced
  ? {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0, transition: { duration: 0 } },
    }
  : slideUp;

const revealViewport = { once: false, amount: 0.35 };

const visualEntrance = reduced
  ? {
      initial: false,
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0 },
    }
  : {
      initial: { opacity: 0, scale: 0.97 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: revealViewport,
      transition: { duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
    };

  const entranceDelay = reduced ? 0 : 0.2;

  const floatAnim = reduced
    ? {}
    : {
        animate: { y: [0, -10, 0] },
        transition: { duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
      };

  const glowAnim = reduced
    ? {}
    : {
        animate: { opacity: [0.55, 1, 0.55], scale: [1, 1.12, 1] },
        transition: { duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
      };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-section hero-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 hero-radial-right" />
        <div className="absolute hero-radial-top" />
        <svg className="absolute inset-0 w-full h-full hero-dots" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="var(--c-hero-dot-fill)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col gap-6"
            variants={entranceStagger}
            initial="hidden"
            animate="visible"
          >
            <ProfileViewsBadge variants={entranceItem} />

            <motion.div variants={entranceItem}>
              <p className="hero-subtitle">
                Hi I'm <span className="hero-accent">Justin Ian</span> 👋 🇵🇭
              </p>
              <h1 className="hero-title">
                Full Stack Dev
                <span className="hero-title-dim">& Engineer.</span>
              </h1>
            </motion.div>

            <motion.p variants={entranceItem} className="hero-desc">
              I build and maintain internal systems deployed on Ubuntu Linux
              servers — request management, IT helpdesk, and mobile notification
              tools used by real employees every day.
            </motion.p>

            <motion.div variants={entranceItem} className="flex items-center gap-3 flex-wrap">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social-link"
                >
                  {icon}
                </a>
              ))}
            </motion.div>

            <motion.div
              variants={entranceItem}
              className="grid grid-cols-2 gap-x-10 gap-y-6 pt-4"
            >
              {STATS.map((s) => (
                <div key={s.value} className="flex flex-col">
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label hero-mono">
                    {s.label} 
                    <br />
                    {s.sub}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={entranceItem} className="flex gap-3 flex-wrap">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#projects");
                  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
                }}
                className="hero-btn-primary"
              >
                View Projects
                <svg viewBox="0 0 12 12" className="w-3 h-3 stroke-current fill-none" strokeWidth="1.8">
                  <path d="M2 10L10 2M10 2H4M10 2v6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="/files/Justin-Ian-Segundo-Resume.pdf"
                download
                className="hero-btn-secondary"
              >
                Download CV
                <svg viewBox="0 0 12 12" className="w-3 h-3 stroke-current fill-none" strokeWidth="1.8">
                  <path d="M6 1v7M3 5l3 3 3-3M2 11h8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden md:flex items-center justify-center"
            style={{ minHeight: "540px" }}
            {...visualEntrance}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ overflow: "visible" }}>
              {RIGHT_ICONS.map((fi) => (
                <FloatingIcon key={fi.id} fi={fi} reduced={reduced} />
              ))}
              {LEFT_ICONS.map((fi) => (
                <FloatingIcon key={fi.id} fi={fi} reduced={reduced} />
              ))}
            </div>

            <motion.div
              className="relative flex items-center justify-center w-full h-full"
              {...floatAnim}
            >
              <motion.div className="hero-glow" {...glowAnim} />
              <div className="hero-ring" />

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reduced ? 0 : 0.8, delay: entranceDelay, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: "relative", zIndex: 10 }}
              >
                <div className="hero-avatar-wrapper">
                  <div className="hero-avatar-inner">
                    <motion.img
                      src="/images/profile_pp_one.png"
                      alt="Justin Ian Segundo"
                      className="hero-avatar-img"
                      whileHover={{ scale: reduced ? 1 : 1.025 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="hero-avatar-overlay-top" />
                    <div className="hero-avatar-overlay-bottom" />
                  </div>
                </div>

                <motion.div
                  className="hero-status-badge"
                  initial={reduced ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="hero-status-dot status-pulse" />
                  <p className="hero-status-text">Available for freelance & full time</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;