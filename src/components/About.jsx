import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertificateModal from "./CertificateModal";
import "../styles/about.css";

const ROTATING_WORDS = [
  "About Me",
  "System Programmer",
  "Production Developer",
  "Full Stack Dev",
];

const META = [
  {
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "Carmen, Cebu, Philippines",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const wordAnim = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: "easeIn" } },
};

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section
        id="about"
        className="about-section relative py-28 md:py-36 px-6 md:px-12 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 about-radial-left" />
          <div className="absolute about-radial-bottom" />
          <svg
            className="absolute inset-0 w-full h-full about-dots"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="about-dots"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="var(--c-about-dot-fill)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-dots)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-12"
          >
            <motion.div variants={slideUp} className="flex flex-col gap-4">
              <div className="about-rotating-label about-mono">
                <span className="about-rotating-prefix">
                  <span className="about-dot" />
                </span>
                <span className="about-rotating-word-wrap">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      className="about-rotating-word"
                      variants={wordAnim}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {ROTATING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>

              <h2 className="about-heading">
                Building Systems That
                <span className="about-heading-dim">Run in Production.</span>
              </h2>

              <div className="about-meta-row">
                {META.map((m, i) => (
                  <span key={i} className="about-meta-item about-mono">
                    <span className="about-meta-icon">{m.icon}</span>
                    {m.text}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-16">
              <motion.div variants={stagger} className="flex flex-col gap-8">
                <motion.div variants={slideUp}>
                  <p className="about-body">
                    I'm a solo Full-stack developer building and maintaining
                    internal production systems used across{" "}
                    <span className="about-accent">9 factory sites</span> —
                    request management, helpdesk, ID automation, and a mobile
                    APK, all running on{" "}
                    <span className="about-accent">Ubuntu Linux</span> with
                    Apache, Laravel/PHP, React, and MySQL. Designed, deployed,
                    and maintained entirely by me.
                  </p>
                </motion.div>

                <motion.div
                  variants={slideUp}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="about-card about-card-btn group"
                  >
                    <div className="about-card-icon">
                      <svg
                        className="w-4 h-4 about-card-icon-svg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="about-card-title">
                        Certificate of Employment
                      </p>
                      <p className="about-card-sub about-mono">
                        TinkerPro POS — View
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 about-card-eye"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>

                  <div className="about-card">
                    <div className="about-card-icon">
                      <svg
                        className="w-4 h-4 about-card-icon-svg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="about-card-title">CTU — Carmen Campus</p>
                      <p className="about-card-sub about-mono">
                        B.IndTech — CompTech · 2021–2025
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={slideUp} className="about-exp-timeline">
                  <div className="about-exp-item">
                    <div className="about-exp-header">
                      <span className="about-exp-date about-mono">
                        Mar 2026 — Present
                      </span>
                    </div>
                    <p className="about-exp-role">
                      Web Developer · Solo Full Stack Developer
                    </p>
                    <p className="about-exp-company about-mono">
                      Sports City International Inc.
                    </p>
                    <p className="about-exp-desc">
                      Building and maintaining internal production systems
                      across 9 factory sites: request management, helpdesk, ID
                      automation, cron jobs, SMTP reporting, and Linux server
                      deployments.
                    </p>
                  </div>

                  <div className="about-exp-divider" />

                  <div className="about-exp-item">
                    <div className="about-exp-header">
                      <span className="about-exp-date about-mono">
                        Sept 2025 — Nov 2025
                      </span>
                    </div>
                    <p className="about-exp-role">System Developer</p>
                    <p className="about-exp-company about-mono">
                      TinkerPro Technologies · TinkerPro POS
                    </p>
                    <p className="about-exp-desc">
                      Built production POS features: theme settings, settings UI
                      redesign, bulk product import for 29K+ records, and
                      REST-style POS module APIs.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={slideUp} className="flex flex-col gap-3">
                <div className="about-snapshot-grid">
                  <div className="about-snapshot-cell">
                    <span className="about-snapshot-label about-mono">
                      Base
                    </span>
                    <span className="about-snapshot-value">
                      Carmen, Cebu, PH
                    </span>
                  </div>
                  <div className="about-snapshot-cell">
                    <span className="about-snapshot-label about-mono">
                      Timezone
                    </span>
                    <span className="about-snapshot-value">UTC +8</span>
                  </div>
                  <div className="about-snapshot-cell">
                    <span className="about-snapshot-label about-mono">
                      Current Role
                    </span>
                    <span className="about-snapshot-value">
                      Solo Full Stack Dev
                    </span>
                  </div>
                  <div className="about-snapshot-cell">
                    <span className="about-snapshot-label about-mono">
                      Work Mode
                    </span>
                    <span className="about-snapshot-value">
                      Production Ownership
                    </span>
                  </div>
                  <div className="about-snapshot-cell about-snapshot-cta">
                    <p className="about-cta-title">Have something to build?</p>
                    <p className="about-cta-body">
                      I'm open to full-time roles, freelance work, and practical
                      problems that need clean systems.
                    </p>
                     <a href="#contact" className="about-cta-link about-mono mx-auto">
    GET IN TOUCH
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default About;
