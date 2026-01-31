import { useState } from 'react';
import CertificateModal from './CertificateModal';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const coreStrengths = [
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Front-end Development',
      description: 'React, jQuery, Responsive UI',
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: 'Backend & Database',
      description: 'PHP, MySQL, Data Optimization',
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'API Development',
      description: 'REST APIs, Integration',
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
      title: 'Production Systems',
      description: 'Maintenance, Deployment',
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance',
      description: 'Batch Processing, Optimization',
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Interface Redesign, Usability',
    },
  ];

  return (
    <>
      <section id="about" className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-2 tracking-tight">
              About
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400">
              Background and Experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
            <div className="md:col-span-2 space-y-6 sm:space-y-8 animate-fadeInUp">
              <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 leading-relaxed">
                I'm a recent graduate passionate about building real-world web applications. During my time at TinkerPro POS, I contributed directly to production features used daily by live customers, improving UI components, optimizing workflows, and helping ship reliable updates.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 leading-relaxed">
                My work involved both front-end and back-end contributions for POS software, building responsive interfaces, enhancing theme customization, writing API endpoints, and developing batch import tools. I learned to understand the full flow of a production system, from UI interactions to backend logic and database operations.
              </p>

              <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mt-8 sm:mt-10">
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-slate-100 mb-3 sm:mb-4 pb-2 border-b border-gray-200 dark:border-slate-700 flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Certificate of Employment
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 w-full group relative overflow-hidden bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 p-4 sm:p-5 md:p-6 text-left hover:border-gray-300 dark:hover:border-slate-600 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-slate-100 truncate">
                            TinkerPro POS
                          </div>
                          <div className="text-xs text-gray-500 dark:text-slate-400">Official Document</div>
                        </div>
                      </div>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-slate-100 transition-colors flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed">
                      Click to view certificate details and employment verification
                    </div>
                  </button>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-slate-100 mb-3 sm:mb-4 pb-2 border-b border-gray-200 dark:border-slate-700 flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                    </svg>
                    Education
                  </h3>
                  <div className="flex-1 bg-white dark:bg-slate-800 p-4 sm:p-5 border-2 border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 transition-colors duration-300">
                    <h4 className="font-semibold text-gray-900 dark:text-slate-100 text-xs sm:text-sm mb-2">
                      CTU - Carmen Campus
                    </h4>
                    <p className="text-gray-700 dark:text-slate-300 text-xs leading-relaxed mb-2">
                      Bachelor of Industrial Technology Major in Computer Technology
                    </p>
                    <div className="flex items-center gap-2 mt-2 sm:mt-3">
                      <svg className="w-3.5 h-3.5 text-gray-500 dark:text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-500 dark:text-slate-400 text-xs font-medium">2021-2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fadeInUp">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-slate-100 mb-6 sm:mb-8 pb-3 border-b border-gray-300 dark:border-slate-600">
                Core Strengths
              </h3>

              <div className="space-y-1">
                {coreStrengths.map((strength, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-3 py-2.5 sm:py-3 px-2 -mx-2 rounded transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/50">
                      <div className="text-gray-400 dark:text-slate-500 group-hover:text-gray-900 dark:group-hover:text-slate-100 transition-colors flex-shrink-0">
                        {strength.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 dark:text-slate-100 text-xs sm:text-sm">
                          {strength.title}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-slate-500 mt-0.5">
                          {strength.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CertificateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default About;