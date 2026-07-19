import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageLightbox from "./ImageLightbox";
import "../../src/styles/project.css";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};
const cardReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};
const PROJECTS = [
  {
    id: 1,
    title: "IT Staff Mobile APK",
    company: "Sports City International Inc.",
    category: "Mobile",
    badge: "Android · Push Notification",
    description:
      "Android APK for internal IT staff with real-time push notifications for new helpdesk tickets and system alerts, keeping the team responsive across all 9 factory sites.",
    tags: ["React", "Firebase", "REST API", "Push Notifications"],
    image: "/images/helpdesk-apk.png",
    hasImage: true,
  },
  {
    id: 2,
    title: "IT Helpdesk Platform",
    company: "Sports City International Inc.",
    category: "Production",
    badge: "Live · Daily Use",
    description:
      "Full-featured IT helpdesk system for internal ticket management, technician assignment, and resolution tracking. Used by real employees every day across all factory locations.",
    image: "/images/it-helpdesk.png",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript"],
    hasImage: true,
  },
  {
    id: 3,
    title: "ID Management & Request Automation",
    company: "Sports City International Inc.",
    category: "Automation",
    badge: "Live · Daily Use",
    description:
      "Internal ID management and request automation platform deployed on Ubuntu Linux servers via CloudPanel. Designed to reduce paperwork through automated workflows, scheduled cron jobs, and SMTP email reporting.",
    tags: ["Laravel", "React", "PHP", "TailwindCss", "MySQL"],
    image: "/images/id-management.png",
    hasImage: true,
  },
  {
    id: 4,
    title: "Request Management System",
    company: "Sports City International Inc.",
    category: "Full Stack",
    badge: "Live · 9 Factories",
    description:
      "Full-stack internal request management platform used across 9 factories. Handles employee submissions, approval workflows, and real-time status tracking on Ubuntu Linux servers.",
    image: "/images/request-management.png",
    tags: ["React", "Laravel", "MySQL", "Ubuntu", "Blade"],
    hasImage: true,
  },
  {
    id: 5,
    title: "System Monitoring & Maintenance",
    company: "Sports City International Inc.",
    category: "Backend",
    badge: "Solo Ownership",
    description:
      "Sole owner of all deployed systems responsible for uptime monitoring, hotfix deployments, and server maintenance.",
    tags: ["Ubuntu", "Linux CLI", "MySQL", "Cron Jobs"],
    hasImage: false,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    stats: [
      { value: "3", label: "Systems" },
      { value: "24/7", label: "Uptime" },
    ],
  },
 
   {
    id: 6,
    title: "DevConnect",
    company: "Personal",
    category: "Personal",
    badge: "Full Stack Web App",
    description:
      "A community discussion platform with voting, moderation, and reputation mechanics.",
    image: "/images/devconnect-preview.png",
    tags: [
      "React 18",
      "Laravel 11",
      "MySQL",
      "Tailwind CSS",
      "Zustand",
      "REST API",
    ],
    hasImage: true,
    github: "https://github.com/justinsegundo/devconnect",
  },
  {
    id: 7,
    title: "Tide Water Supply System",
    company: "Personal",
    category: "Personal",
    badge: "Full Stack Project",
    description:
      "A full-stack app that solves a real community problem in Carmen, Cebu with real-time monitoring.",
    image: "/images/tide-water-supply-preview.png",
    tags: ["React 18", "Java 17", "Spring Boot", "REST API", "Maven"],
    hasImage: true,
    github: "https://github.com/justinsegundo/tide-water-supply-system",
  },
 
  {
    id: 8,
    title: "Protocol Platform",
    company: "Personal",
    category: "Personal",
    badge: "Full Stack Web App",
    description:
      "A wellness protocol sharing platform with ratings, threaded discussions, and Typesense search.",
    image: "/images/protocol-platform-preview.png",
    tags: [
      "React 18",
      "Laravel 11",
      "MySQL",
      "Typesense",
      "React Query",
      "Tailwind CSS",
    ],
    hasImage: true,
    github: "https://github.com/justinsegundo/protocol-platform",
  },
  {
    id: 9,
    title: "Sari-Sari POS System",
    company: "Personal",
    category: "Personal",
    badge: "Desktop Application",
    description:
      "A Java desktop POS app for neighborhood stores with stock tracking and price checker.",
    image: "/images/sari-sari-preview.png",
    tags: ["Java", "Java Swing", "Maven", "IntelliJ IDEA"],
    hasImage: true,
    github: "https://github.com/justinsegundo/sari-sari-pos-system",
  },
   {
    id: 10,
    title: "Theme Settings System",
    company: "TinkerPro POS",
    category: "Production",
    badge: "Production Feature",
    description:
      "Dynamic theme selector allowing users to customize POS interface colors with live preview and database-driven persistence.",
    image: "/images/theme-settings.png",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
    hasImage: true,
  },
  {
    id: 11,
    title: "Settings UI Redesign",
    company: "TinkerPro POS",
    category: "Full Stack",
    badge: "UI/UX Enhancement",
    description:
      "Redesigned the Settings module using modern layout principles, improved typography, and responsive design.",
    image: "/images/ui-redesign.png",
    tags: ["HTML", "CSS", "JavaScript"],
    hasImage: true,
  },
  {
    id: 12,
    title: "Bulk Product Import System",
    company: "TinkerPro POS",
    category: "Automation",
    badge: "29,000+ Products",
    description:
      "CSV importer handling 29,000+ products using 500-row batch processing to prevent server timeouts.",
    tags: ["PHP", "MySQL", "Batch Processing"],
    hasImage: false,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    stats: [
      { value: "29K+", label: "Records" },
      { value: "500", label: "Batch Size" },
    ],
  },
  {
    id: 13,
    title: "POS Module REST APIs",
    company: "TinkerPro POS",
    category: "Backend",
    badge: "REST APIs",
    description:
      "Created and updated REST-style API endpoints for POS modules with secure input handling and efficient queries.",
    tags: ["PHP", "REST API", "MySQL"],
    hasImage: false,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    stats: [
      { value: "REST", label: "Architecture" },
      { value: "Live", label: "In Use" },
    ],
  },
];

const FILTERS = [
  "All",
  "Production",
  "Full Stack",
  "Backend",
  "Mobile",
  "Automation",
  "Personal",
];

const TagList = ({ tags }) => (
  <div className="flex flex-wrap gap-1.5">
    {tags.map((tag, i) => (
      <span key={i} className="projects-tag projects-mono">
        {tag}
      </span>
    ))}
  </div>
);

const ProjectCard = ({ project, onImageClick }) => (
  <div className="projects-carousel-card">
    {project.hasImage ? (
      <div
        className="projects-carousel-img-wrap"
        onClick={() => onImageClick && onImageClick(project.image)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="projects-carousel-img"
        />
        <div className="projects-img-overlay">
        </div>
      </div>
    ) : (
      <div className="projects-carousel-icon-wrap">
        <div className="projects-carousel-icon-inner">{project.icon}</div>
        {project.stats && (
          <div className="projects-carousel-stats">
            {project.stats.map((s, i) => (
              <div key={i} className="flex items-center gap-1.5">
                {i > 0 && <div className="projects-stat-sep" />}
                <div className="projects-stat-item">
                  <span className="projects-stat-value">{s.value}</span>
                  <span className="projects-stat-label projects-mono">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )}
    <div className="projects-carousel-body">
      <div className="projects-card-badge">
        <span className="projects-card-badge-dot" />
        {project.badge}
      </div>
      <p className="projects-carousel-title">{project.title}</p>
      <p className="projects-carousel-company projects-mono">
        {project.company}
      </p>
      <p className="projects-carousel-desc">{project.description}</p>
      <div className="projects-carousel-footer">
        <TagList tags={project.tags} />
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="projects-github-link projects-mono"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);
  const isPaused = useRef(false);
  const autoplayRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const cards =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  const filterCounts = FILTERS.reduce((acc, filter) => {
    acc[filter] =
      filter === "All"
        ? PROJECTS.length
        : PROJECTS.filter((project) => project.category === filter).length;
    return acc;
  }, {});

  const total = cards.length;
  const totalPages = Math.ceil(total / visibleCount);
  const currentIndex = currentPage * visibleCount;
  const maxPage = totalPages - 1;

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const next = w < 640 ? 1 : w < 1024 ? 2 : 3;
      setVisibleCount(next);
      setCurrentPage(0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const start = () => {
      autoplayRef.current = setInterval(() => {
        if (!isPaused.current) {
          setCurrentPage((prev) => {
            const next = prev + 1;
            return next > maxPage ? 0 : next;
          });
        }
      }, 2000);
    };

    start();
    return () => clearInterval(autoplayRef.current);
  }, [maxPage]);

  const goTo = useCallback(
    (page) => {
      setCurrentPage(Math.max(0, Math.min(page, maxPage)));
    },
    [maxPage],
  );

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(0);
    isPaused.current = false;
  };
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    pauseTemporarily();
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const delta = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(delta) > 40) {
      delta > 0 ? goTo(currentPage + 1) : goTo(currentPage - 1);
    }

    touchStartX.current = null;
    pauseTemporarily();
  };
  const pauseTemporarily = () => {
    isPaused.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isPaused.current = false;
    }, 8000);
  };

  const isAllFilter = activeFilter === "All";
  return (
    <>
      <section
        id="projects"
        className="projects-section relative py-24 md:py-32 px-6 md:px-12  overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 projects-radial-right" />
          <div className="absolute projects-radial-left" />
          <svg
            className="absolute inset-0 w-full h-full projects-dots"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="projects-dots"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="var(--c-projects-dot-fill)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#projects-dots)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-10"
          >
           <motion.div variants={slideUp} className="projects-header">
            {/* <div className="projects-eyebrow projects-mono">
              <span className="projects-eyebrow-dot" />
              My Projects
            </div> */}
            <h2 className="projects-heading">
            MY
            <span className="projects-heading-outline"> PROJECTS</span>
          </h2>
            <p className="projects-subtext">
              Production and personal builds across full-stack web, backend systems, automation, and mobile.
            </p>
          </motion.div>


            <motion.div variants={slideUp} className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="projects-tabs">
                  {FILTERS.map((filter) => (
                    <button
                      key={filter}
                      className={`projects-tab ${activeFilter === filter ? "active" : ""}`}
                      onClick={() => handleFilterChange(filter)}
                    >
                      <span className="projects-tab-label">{filter}</span>
                      <span className="projects-tab-sublabel projects-mono">
                        {filterCounts[filter]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilter}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col gap-5"
                >
                  <div
                    className="projects-carousel-viewport"
                    onMouseEnter={() => {
                      isPaused.current = true;
                    }}
                    onMouseLeave={() => {
                      isPaused.current = false;
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    <motion.div
                      ref={trackRef}
                      className="projects-carousel-track"
                      animate={{
                        x: `calc(-${currentIndex} * (var(--card-width) + var(--card-gap)))`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 35,
                        mass: 0.8,
                      }}
                    >
                      {cards.map((project) => (
                        <motion.div
                          key={project.id}
                          className="projects-carousel-slide"
                          variants={cardReveal}
                        >
                          <ProjectCard
                            project={project}
                            onImageClick={
                              project.hasImage ? setLightboxImage : undefined
                            }
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <div className="projects-pagination">
                    <button
                      className="projects-page-btn"
                      onClick={() => {
                        goTo(currentPage - 1);
                        pauseTemporarily();
                      }}
                      disabled={currentPage === 0}
                      aria-label="Previous"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>

                    <span className="projects-page-counter projects-mono">
                      <span className="projects-page-current">
                        {currentPage + 1}
                      </span>
                      <span className="projects-page-sep">/</span>
                      <span className="projects-page-total">{totalPages}</span>
                    </span>

                    <button
                      className="projects-page-btn"
                      onClick={() => {
                        goTo(currentPage + 1);
                        pauseTemporarily();
                      }}
                      disabled={currentPage >= maxPage}
                      aria-label="Next"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
};

export default Projects;
