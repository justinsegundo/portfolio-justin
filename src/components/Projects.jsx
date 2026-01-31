import { useState } from 'react';
import ImageLightbox from './ImageLightbox';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [lightboxImage, setLightboxImage] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      title: 'Theme Settings System',
      description: 'Built a dynamic theme selector allowing users to customize POS interface colors with live preview and database-driven settings.',
      image: '/images/theme-settings.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP'],
      badge: 'Production Feature',
    },
    {
      id: 2,
      title: 'Settings UI Redesign',
      description: 'Redesigned Settings module using modern layout principles, improved typography, and responsive design for better usability.',
      image: '/images/ui-redesign.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      badge: 'UI/UX Enhancement',
    },
  ];

  const additionalProjects = [
    {
      id: 3,
      title: 'Bulk Product Import System',
      badge: '29,000+ Products',
      description: 'Developed a CSV importer for 29,000+ products using 500-row batch processing to prevent timeouts. Coordinated with senior developer to improve error handling and performance.',
      tags: ['PHP', 'MySQL', 'Batch Processing'],
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'POS Module APIs',
      badge: 'REST APIs',
      description: 'Created and updated REST-style API endpoints for POS modules. Focused on secure input handling, dynamic data retrieval, and efficient SQL operations.',
      tags: ['PHP', 'REST API', 'MySQL'],
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section id="projects" className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-10 md:mb-12 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-2 tracking-tight">
              Work
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400">
              Production experience at TinkerPro POS
            </p>
          </div>

          <div className="mb-6 sm:mb-8 flex gap-2 sm:gap-3 border-b border-gray-200 dark:border-slate-700 overflow-x-auto">
            <button
              className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'featured'
                  ? 'border-gray-900 dark:border-slate-100 text-gray-900 dark:text-slate-100'
                  : 'border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100'
              }`}
              onClick={() => setActiveTab('featured')}
            >
              Featured Projects
            </button>
            <button
              className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'additional'
                  ? 'border-gray-900 dark:border-slate-100 text-gray-900 dark:text-slate-100'
                  : 'border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100'
              }`}
              onClick={() => setActiveTab('additional')}
            >
              Additional Work
            </button>
          </div>

          {activeTab === 'featured' && (
            <div className="tab-content animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                {featuredProjects.map((project) => (
                  <div key={project.id} className="group animate-fadeInUp">
                    <div
                      className="mb-4 sm:mb-5 overflow-hidden cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                      onClick={() => setLightboxImage(project.image)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-lg hover:scale-[1.02] transition-transform duration-500 object-cover aspect-video"
                      />
                    </div>
                    <div className="bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 p-5 sm:p-6 md:p-8">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-slate-100 mb-2 sm:mb-3 flex items-center gap-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 items-center mb-3">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {project.badge}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'additional' && (
            <div className="tab-content animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {additionalProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 p-5 sm:p-6 md:p-8 animate-fadeInUp"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 dark:bg-slate-100 flex items-center justify-center flex-shrink-0">
                        {project.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-slate-100 mb-2">
                          {project.title}
                        </h4>
                        <div className="inline-block px-2 py-1 bg-gray-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium mb-2 sm:mb-3">
                          {project.badge}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  );
};

export default Projects;