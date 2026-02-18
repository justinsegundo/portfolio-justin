const Hero = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto w-full">

        

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-20 items-center mb-10 sm:mb-12 md:mb-16">

          <div className="order-2 md:order-1 animate-fadeInLeft">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 dark:text-slate-100 mb-5 sm:mb-6 leading-[1.08] tracking-tight">
              Building
              <span className="block text-gray-400 dark:text-slate-500 font-light italic">
                Production-Ready
              </span>
              Solutions
            </h1>

            <div className="w-12 h-0.5 bg-red-400 mb-5 sm:mb-6"></div>

            <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mb-3 leading-relaxed">
             Junior Software Developer with production experience at TinkerPro POS building and shipping real features used by live customers daily.
            </p>

            <p className="text-sm text-gray-500 dark:text-slate-400 mb-7 sm:mb-8 md:mb-10 leading-relaxed">
           I work across the full stack: REST APIs, database operations, responsive UIs, and batch data processing. I've handled 29K+ product imports, built theme customization systems, and contributed to enterprise POS workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="px-6 py-3 bg-gray-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium hover:bg-gray-700 dark:hover:bg-slate-200 transition-colors duration-200 text-center tracking-wide"
              >
                View work
              </a>
              <a
                href="/files/Justin-Ian-Segundo-Resume.pdf"
                download="Justin-Ian-Segundo-Resume.pdf"
                className="px-6 py-3 border-2 border-gray-900 dark:border-slate-100 text-gray-900 dark:text-slate-100 text-sm font-medium hover:bg-gray-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900 transition-colors duration-200 text-center tracking-wide"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 animate-fadeInRight">
            <div className="relative max-w-sm mx-auto md:max-w-none">

              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-red-400 z-20"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-red-400 z-20"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-red-400 z-20"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-red-400 z-20"></div>

              <div className="overflow-hidden">
                <img
                  src="/images/profile_pp.jpg"
                  alt="Justin Ian Segundo"
                  className="w-full aspect-square md:aspect-[5/6] object-cover hover:scale-105 transition duration-500 grayscale-[15%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-slate-700 pt-6 sm:pt-8 animate-fadeInUp">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="text-xs font-mono text-gray-400 dark:text-slate-500 mb-1 tracking-widest uppercase">Experience</div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 tracking-tight">3 <span className="text-base font-normal text-gray-500 dark:text-slate-400">months</span></div>
            </div>
            <div>
              <div className="text-xs font-mono text-gray-400 dark:text-slate-500 mb-1 tracking-widest uppercase">Projects</div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 tracking-tight">6 <span className="text-base font-normal text-gray-500 dark:text-slate-400">built</span></div>
            </div>
            <div>
              <div className="text-xs font-mono text-gray-400 dark:text-slate-500 mb-1 tracking-widest uppercase">Products Imported</div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 tracking-tight">29K<span className="text-base font-normal text-gray-500 dark:text-slate-400">+</span></div>
            </div>
            <div>
              <div className="text-xs font-mono text-gray-400 dark:text-slate-500 mb-1 tracking-widest uppercase">Stack</div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 tracking-tight">Full <span className="text-base font-normal text-gray-500 dark:text-slate-400">stack</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;