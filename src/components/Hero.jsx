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
    <section className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6 bg-white dark:bg-slate-900 overflow-hidden">

      <style>{`
        @keyframes imageFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-image {
          animation: imageFloat 5s ease-in-out infinite;
        }
        .fade-edges-light {
          background: radial-gradient(ellipse at center, transparent 30%, white 100%);
        }
        .fade-edges-dark {
          background: radial-gradient(ellipse at center, transparent 30%, #0f172a 100%);
        }
      `}</style>

      <div className="dot-grid absolute inset-0 opacity-60 pointer-events-none" />
      <div className="fade-edges-light dark:hidden absolute inset-0 pointer-events-none" />
      <div className="fade-edges-dark hidden dark:block absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">

       

        <div className="grid md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_480px] gap-12 sm:gap-14 md:gap-16 lg:gap-20 items-center mb-12 sm:mb-14 md:mb-16">

          <div className="order-2 md:order-1 animate-fadeInLeft">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-slate-100 mb-6 leading-[1.0] tracking-tight">
              Building
              <span className="block text-gray-300 dark:text-slate-500 font-light italic leading-[1.1]">
                Production-Ready
              </span>
              Solutions
            </h1>

            <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mb-3 leading-relaxed max-w-md">
              Junior Software Developer with production experience at TinkerPro POS — building and shipping real features used by live customers daily.
            </p>

            <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 sm:mb-10 leading-relaxed max-w-md">
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
            <div className="float-image flex max-w-xs mx-auto md:max-w-none">
              <div className="w-1 bg-red-400 flex-shrink-0 self-stretch" />
              <div className="flex-1 overflow-hidden">
                <img
                  src="/images/profile_pp.jpg"
                  alt="Justin Ian Segundo"
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition duration-500 grayscale-[10%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-slate-700 pt-6 sm:pt-8 animate-fadeInUp">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { label: 'Experience', value: '3', suffix: 'months' },
              { label: 'Projects', value: '6', suffix: 'built' },
              { label: 'Products Imported', value: '29K', suffix: '+' },
              { label: 'Stack', value: 'Full', suffix: 'stack' },
            ].map((stat, i) => (
              <div key={i} className="pl-3 sm:pl-4">
                <div className="text-xs font-mono text-gray-400 dark:text-slate-500 mb-1 tracking-widest uppercase">
                  {stat.label}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 tracking-tight">
                  {stat.value}{' '}
                  <span className="text-base font-normal text-gray-500 dark:text-slate-400">
                    {stat.suffix}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;