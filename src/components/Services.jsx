import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useMotionValue,
} from "framer-motion";
import "../styles/services.css";

const SERVICES = [
  {
    id: 1,
    category: "Systems",
    title: "Internal Business Systems",
    subtitle: "Built for real teams, real operations",
    image: "/images/internal-system.png",
    points: [
      "Request management & IT helpdesk platforms deployed across 9 factory sites.",
      "Approval workflows, ticket routing, real-time status tracking.",
      "Systems I own, monitor, and keep running around the clock.",
    ],
  },
  {
    id: 2,
    category: "Full Stack",
    title: "Web Development",
    subtitle: "End-to-end application delivery",
    image: "/images/web-development-serv.png",
    points: [
      "Laravel + PHP backends with MVC architecture and secure auth flows.",
      "React frontends with clean component design and smooth interactions.",
      "Deployed to production on real servers — not just demos.",
    ],
  },
  {
    id: 3,
    category: "Mobile",
    title: "Android App Development",
    subtitle: "Native APKs for internal operations",
    points: [
      "Android APKs with push notifications via Firebase for real-time alerts.",
      "REST API integration connecting mobile clients to backend systems.",
      "Tested under daily production use across live operations teams.",
    ],
  },
  {
    id: 4,
    category: "Backend",
    title: "REST API Development",
    subtitle: "Clean, structured backend interfaces",
    points: [
      "RESTful endpoints with validated input and consistent response structure.",
      "Token-based auth and role-scoped data access.",
      "Built for POS modules, mobile clients, and multi-system integrations.",
    ],
  },
  {
    id: 5,
    category: "Database",
    title: "MySQL & Data Layer",
    subtitle: "Reliable schema and query design",
    points: [
      "Schema design, indexing, and query optimization for production databases.",
      "Batch pipelines handling 29,000+ records without timeout failures.",
      "Migrations and safe data handling in live multi-user environments.",
    ],
  },
  {
    id: 6,
    category: "DevOps",
    title: "Linux Server Deployment",
    subtitle: "Ubuntu-based production hosting",
    points: [
      "Nginx/Apache config, environment setup, and deployment on Ubuntu.",
      "SSH, file permissions, process management, and cron configuration.",
      "Sole systems owner — hotfixes deployed with live users active.",
    ],
  },
  {
    id: 7,
    category: "Automation",
    title: "Automation & Reporting",
    subtitle: "Cron jobs, SMTP, background tasks",
    points: [
      "Scheduled tasks for report generation, cleanup, and data sync.",
      "SMTP email delivery integrated into helpdesk and request workflows.",
      "Background processes that reduce manual workload for ops teams.",
    ],
  },
  {
    id: 8,
    category: "UI",
    title: "UI Implementation",
    subtitle: "Pixel-accurate interface buildout",
    points: [
      "Component-level HTML/CSS implementation from Figma or design refs.",
      "Tailwind utility layouts with custom CSS for precise visual control.",
      "Responsive across all breakpoints — verified at every screen size.",
    ],
  },
];

const TOTAL = SERVICES.length;

const CardFace = ({ service }) => (
  <>
    <div
      className={`svc-face svc-front ${service.image ? "svc-front--image" : ""}`}
    >
      {service.image ? (
        <img
          src={service.image}
          alt={service.title}
          className="svc-front-image"
        />
      ) : (
        <div className="svc-front-panel" />
      )}
      <div className="svc-front-overlay" />
      <div className="svc-front-noise" />
      <div className="svc-front-top">
        <div className="svc-category-badge">
          <span className="svc-badge-dot" />
          <span className="svc-mono">{service.category}</span>
        </div>
      </div>
      <div className="svc-front-bottom">
        <p className="svc-front-title">{service.title}</p>
        <p className="svc-front-sub">{service.subtitle}</p>
      </div>
    </div>

    <div className="svc-face svc-back">
      <div className="svc-back-noise" />
      <div className="svc-back-header">
        <span className="svc-mono svc-back-cat">{service.category}</span>
        <p className="svc-back-title">{service.title}</p>
        <div className="svc-back-rule" />
      </div>
      <ul className="svc-points">
        {service.points.map((pt, i) => (
          <li key={i} className="svc-point">
            <span className="svc-point-pip" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
      <div className="svc-cta">
        <span className="svc-cta-pulse" />
        <span className="svc-mono">Available for freelance work</span>
      </div>
    </div>
  </>
);

const CarouselCard = ({
  service,
  index,
  active,
  flippedIndex,
  setFlippedIndex,
  reducedMotion,
  onCardEnter,
  onCardLeave,
}) => {
  const offset = useTransform(active, (v) => index - v);

  const translateX = useTransform(
    offset,
    [-3, -2, -1, 0, 1, 2, 3],
    [-760, -530, -310, 0, 375, 650, 870],
  );
  const translateY = useTransform(
    offset,
    [-3, -2, -1, 0, 1, 2, 3],
    [-390, -265, -145, 0, 178, 315, 430],
  );
  const translateZ = useTransform(
    offset,
    [-3, -2, -1, 0, 1, 2, 3],
    [-480, -340, -165, 0, -165, -340, -480],
  );
  const rotateY = useTransform(
    offset,
    [-3, -2, -1, 0, 1, 2, 3],
    [52, 43, 27, 0, -27, -43, -52],
  );
  const opacity = useTransform(
    offset,
    [-3, -2, -1, 0, 1, 2, 3],
    [0, 0.18, 0.52, 1, 0.68, 0.28, 0],
  );
  const scale = useTransform(
    offset,
    [-2, -1, 0, 1, 2],
    [0.66, 0.83, 1, 0.87, 0.7],
  );
  const zIndex = useTransform(offset, (v) => Math.round(60 - Math.abs(v) * 15));
  const pointerEvents = useTransform(offset, (v) =>
    Math.abs(v) > 1.4 ? "none" : "auto",
  );

  const isFlipped = flippedIndex === index;

  return (
    <motion.div
      className="svc-ring-slot"
      style={{
        translateX,
        translateY,
        translateZ,
        rotateY,
        opacity,
        scale,
        zIndex,
        pointerEvents,
      }}
      onClick={() => setFlippedIndex(isFlipped ? null : index)}
      onKeyDown={(e) =>
        e.key === "Enter" && setFlippedIndex(isFlipped ? null : index)
      }
      onMouseEnter={onCardEnter}
      onMouseLeave={onCardLeave}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
    >
      <motion.div
        className="svc-card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 0.52, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <CardFace service={service} />
      </motion.div>
    </motion.div>
  );
};

const MobileCard = ({ service, index }) => {
  const [flipped, setFlipped] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="svc-mobile-slot"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => setFlipped((p) => !p)}
      onKeyDown={(e) => e.key === "Enter" && setFlipped((p) => !p)}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
    >
      <motion.div
        className="svc-card-inner"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <CardFace service={service} />
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [cardHovered, setCardHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cursorX = useMotionValue(-300);
  const cursorY = useMotionValue(-300);
  const springCursorX = useSpring(cursorX, {
    stiffness: 520,
    damping: 40,
    mass: 0.4,
  });
  const springCursorY = useSpring(cursorY, {
    stiffness: 520,
    damping: 40,
    mass: 0.4,
  });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return;
    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorX, cursorY]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const activeRaw = useTransform(scrollYProgress, [0, 1], [0, TOTAL - 1]);
  const active = useSpring(activeRaw, {
    stiffness: 70,
    damping: 20,
    mass: 0.9,
  });

  return (
    <section id="services" ref={sectionRef} className="svc-section">
      <div className="svc-sticky-scene">
        <div className="svc-bg" />
        <div className="svc-vignette" />
        <motion.div
          className="svc-cursor"
          aria-hidden="true"
          style={{
            x: springCursorX,
            y: springCursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            opacity: cardHovered ? 1 : 0,
            scale: cardHovered ? 1 : 0.65,
          }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="svc-cursor-ring" />
          <span className="svc-cursor-body">
            <span className="svc-cursor-top svc-mono">CLICK</span>
            <span className="svc-cursor-bot svc-mono">{
              flippedIndex === hoveredIndex ? "TO CLOSE" : "TO FLIP"
              }</span>
          </span>
        </motion.div>

        <div className="svc-stars" aria-hidden="true">
          {Array.from({ length: 55 }).map((_, i) => (
            <span
              key={i}
              className="svc-star"
              style={{
                left: `${(i * 17 + i * i * 3) % 100}%`,
                top: `${(i * 13 + i * i * 7) % 100}%`,
                animationDelay: `${(i * 0.37) % 3.5}s`,
                width: i % 4 === 0 ? "2px" : "1px",
                height: i % 4 === 0 ? "2px" : "1px",
                opacity: i % 5 === 0 ? 0.6 : 0.3,
              }}
            />
          ))}
        </div>

        <div className="svc-ui-layer">
          <motion.div
            className="svc-heading-block"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="svc-eyebrow svc-mono">
              <span className="svc-eyebrow-dot" />
              Services
            </div>
            <h2 className="svc-heading">
              WHAT I<span className="svc-heading-outline"> BUILD</span>
            </h2>
            <p className="svc-subtext">
              Production-grade development across full-stack web, Android, APIs,
              databases, and Linux-hosted systems.
            </p>
          </motion.div>

          <div className="svc-carousel-viewport">
            <div className="svc-ring">
              {SERVICES.map((service, i) => (
                <CarouselCard
                  key={service.id}
                  service={service}
                  index={i}
                  active={active}
                  flippedIndex={flippedIndex}
                  setFlippedIndex={setFlippedIndex}
                  reducedMotion={reducedMotion}
                  onCardEnter={() => {
                    setCardHovered(true)
                    setHoveredIndex(i)
                  }
                  }
                  onCardLeave={() => {
                    setCardHovered(false)
                    setHoveredIndex(null)
                  }}
                />
              ))}
            </div>
          </div>

          <div className="svc-scroll-hint svc-mono">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            Scroll to explore
          </div>
        </div>

        <div className="svc-mobile-grid">
          {SERVICES.map((service, i) => (
            <MobileCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
