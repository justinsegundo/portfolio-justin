import { motion } from "framer-motion";
import "../styles/skills.css";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const iconRestApi = (
  <svg
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const iconMvc = (
  <svg
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
  </svg>
);

const iconAuth = (
  <svg
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const iconCloudPanel = (
  <svg
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
  </svg>
);

const iconCron = (
  <svg
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const iconSmtp = (
  <svg
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const GROUPS = [
  {
    id: "frontend",
    label: "Frontend",
    color: "rgba(96,165,250,0.7)",
    glow: "rgba(96,165,250,0.12)",
    skills: [
      { name: "React", img: `${CDN}/react/react-original.svg` },
      { name: "TypeScript", img: `${CDN}/typescript/typescript-original.svg` },
      { name: "JavaScript", img: `${CDN}/javascript/javascript-original.svg` },
      {
        name: "Tailwind",
        img: `${CDN}/tailwindcss/tailwindcss-original.svg`,
      },
      {
        name: "Bootstrap",
        img: `${CDN}/bootstrap/bootstrap-original.svg`,
      },
      { name: "HTML", img: `${CDN}/html5/html5-original.svg` },
      { name: "CSS", img: `${CDN}/css3/css3-original.svg` },
      { name: "jQuery", img: `${CDN}/jquery/jquery-original.svg` },
    ],
  },
  {
    id: "backend",
    label: "Backend & API",
    color: "rgba(167,139,250,0.8)",
    glow: "rgba(124,92,252,0.12)",
    skills: [
      { name: "PHP", img: `${CDN}/php/php-original.svg` },
      { name: "Laravel", img: `${CDN}/laravel/laravel-original.svg` },
      { name: "REST API", svg: iconRestApi },
      { name: "Java", img: `${CDN}/java/java-original.svg` },
      { name: "Auth / JWT", svg: iconAuth },
      { name: "MVC Pattern", svg: iconMvc },
    ],
  },
  {
    id: "server",
    label: "Server & Data",
    color: "rgba(52,211,153,0.75)",
    glow: "rgba(52,211,153,0.1)",
    skills: [
      { name: "MySQL", img: `${CDN}/mysql/mysql-original.svg` },
      { name: "Ubuntu Linux", img: `${CDN}/ubuntu/ubuntu-original.svg` },
      { name: "Nginx", img: `${CDN}/nginx/nginx-original.svg` },
      { name: "Apache", img: `${CDN}/apache/apache-original.svg` },
      { name: "CloudPanel", svg: iconCloudPanel },
      { name: "Cron Jobs", svg: iconCron },
      { name: "SMTP", svg: iconSmtp },
    ],
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    color: "rgba(251,191,36,0.7)",
    glow: "rgba(251,191,36,0.08)",
    skills: [
      { name: "Git", img: `${CDN}/git/git-original.svg` },
      { name: "VS Code", img: `${CDN}/vscode/vscode-original.svg` },
      { name: "Postman", img: `${CDN}/postman/postman-original.svg` },
      { name: "FileZilla", img: `${CDN}/filezilla/filezilla-original.svg` },
      { name: "Firebase", img: `${CDN}/firebase/firebase-original.svg` },
    ],
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const SkillChip = ({ skill, color }) => (
  <div className="sk-chip">
    <span className="sk-chip-icon">
      {skill.img ? (
        <img
          src={skill.img}
          alt={skill.name}
          width="18"
          height="18"
          loading="lazy"
        />
      ) : (
        <span className="sk-chip-svg" style={{ color }}>
          {skill.svg}
        </span>
      )}
    </span>
    <span className="sk-chip-name">{skill.name}</span>
  </div>
);

const GroupCard = ({ group }) => (
  <motion.div
    className="sk-group"
    variants={fadeUp}
    style={{ "--group-glow": group.glow, "--group-color": group.color }}
  >
    <div className="sk-group-header">
      <span className="sk-group-label">{group.label}</span>
    </div>
    <div className="sk-chips">
      {group.skills.map((skill) => (
        <SkillChip key={skill.name} skill={skill} color={group.color} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="sk-section">
      <div className="sk-bg-glow" />

      <motion.div
        className="sk-bounded"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="sk-heading-block">
          <div className="sk-eyebrow">
            <span className="sk-eyebrow-dot" />
            Tech Stack
          </div>
          <h2 className="sk-heading">
            SKILLS &amp; <span className="sk-heading-outline">EXPERTISE</span>
          </h2>
          <p className="sk-subtext">
            Production-tested technologies behind my web systems, APIs,
            automation, and Linux-hosted deployments.
          </p>
        </div>
      </motion.div>

      <div className="sk-bounded">
        <div className="sk-tree">
          <motion.div
            className="sk-root-row"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sk-root-node">PRODUCTION STACK</div>
          </motion.div>

          <div className="sk-connectors" aria-hidden="true">
            <svg
              className="sk-svg"
              viewBox="0 0 800 80"
              preserveAspectRatio="none"
            >
              <line
                x1="400"
                y1="0"
                x2="200"
                y2="80"
                stroke="var(--c-sk-connector-stroke)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="400"
                y1="0"
                x2="400"
                y2="80"
                stroke="var(--c-sk-connector-stroke-mid)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="400"
                y1="0"
                x2="600"
                y2="80"
                stroke="var(--c-sk-connector-stroke)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          <motion.div
            className="sk-groups"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {GROUPS.map((group, i) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
