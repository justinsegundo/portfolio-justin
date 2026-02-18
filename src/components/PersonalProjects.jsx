const personalProjects = [
  {
    id: 1,
    title: 'Tide Water Supply System',
    badge: 'Full Stack Project',
    description:
      'A full-stack app that solves a real community problem in Carmen, Cebu helping residents check water availability based on tide levels without walking to their faucets. Features real-time monitoring with auto-refresh every 30 seconds and clear visual indicators for water status.',
    tags: ['React 18', 'Java 17', 'Spring Boot', 'REST API', 'Maven'],
    github: 'https://github.com/justinsegundo/tide-water-supply-system',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V11" />
      </svg>
    ),
  },
    {
    id: 2,
    title: 'DevConnect',
    badge: 'Full Stack Web App',
    description:
      'A community discussion platform where developers can post discussions, comment, vote, and earn reputation points. Features role-based access control, a badge system, moderation dashboard, and a polymorphic voting system for both discussions and comments.',
    tags: ['React 18', 'Laravel 11', 'MySQL', 'Tailwind CSS', 'Zustand', 'REST API'],
    github: 'https://github.com/justinsegundo/devconnect',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Sari-Sari POS System',
    badge: 'Desktop Application',
    description:
      'A Java-based desktop point-of-sale application for small neighborhood sari-sari stores. Supports adding, editing, and deleting products directly in a table, a price checker with keyword search, and stock level tracking with a clean and responsive interface.',
    tags: ['Java', 'Java Swing', 'Maven', 'IntelliJ IDEA'],
    github: 'https://github.com/justinsegundo/sari-sari-pos-system',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  
];

const PersonalProjects = () => {
  return (
    <section
      id="personal-projects"
      className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <div className="mb-8 sm:mb-10 md:mb-12 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-2 tracking-tight">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400">
            Personal projects built outside of work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {personalProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 p-5 sm:p-6 md:p-8 animate-fadeInUp hover:border-gray-400 dark:hover:border-slate-500 transition-colors duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 dark:bg-slate-100 flex items-center justify-center flex-shrink-0">
                  {project.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-slate-100 mb-2">
                    {project.title}
                  </h3>
                  <div className="inline-block px-2 py-1 bg-gray-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium">
                    {project.badge}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-slate-100 hover:text-gray-600 dark:hover:text-slate-300 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                View on GitHub
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
          <a
            href="https://github.com/justinsegundo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors duration-200"
          >
            See all repositories on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
};

export default PersonalProjects;