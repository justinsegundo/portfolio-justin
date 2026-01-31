const Skills = () => {
  const frontendSkills = [
    {
      name: 'HTML & CSS',
      percentage: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'JavaScript',
      percentage: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'React.js',
      percentage: 70,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'jQuery',
      percentage: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
    },
    {
      name: 'Tailwind CSS',
      percentage: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
  ];

  const backendSkills = [
    {
      name: 'PHP',
      percentage: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    },
    {
      name: 'MySQL',
      percentage: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
      name: 'REST APIs',
      percentage: 70,
      icon: (
        <svg className="w-5 h-5 sm:w-7 sm:h-7 text-gray-900 dark:text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Git & Version Control',
      percentage: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'VS Code & DevTools',
      percentage: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    },
  ];

  const SkillCard = ({ title, skills, icon }) => (
    <div className="bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 p-5 sm:p-6 md:p-8">
      <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b-2 border-gray-900 dark:border-slate-100">
        {icon}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-slate-100">{title}</h3>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                {typeof skill.icon === 'string' ? (
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5 sm:w-7 sm:h-7" />
                ) : (
                  skill.icon
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-slate-100 truncate">
                    {skill.name}
                  </span>
                  <span className="text-xs font-medium text-gray-500 dark:text-slate-400 ml-2 flex-shrink-0">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-1.5 bg-gray-200 dark:bg-slate-700 overflow-hidden rounded-full">
                  <div
                    className="h-full bg-gray-900 dark:bg-slate-300 transition-all duration-500 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="tech" className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-12 md:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-2 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400">
            Technologies I work with to build modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-20 sm:mb-24 md:mb-32 animate-fadeInUp">
          <SkillCard
            title="Front-End Development"
            skills={frontendSkills}
            icon={
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-slate-100 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
          />

          <SkillCard
            title="Back-End & Tools"
            skills={backendSkills}
            icon={
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-slate-100 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            }
          />
        </div>

        <div className="text-center animate-fadeInUp">
          <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm">
            Always learning and exploring new technologies to deliver better solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;