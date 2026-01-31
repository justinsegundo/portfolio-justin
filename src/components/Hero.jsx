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
    <section className="min-h-screen flex items-center pt-24 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-20 items-center w-full">
     
        <div className="animate-fadeInLeft order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-slate-100 mb-3 sm:mb-4 md:mb-6 leading-[1.1] tracking-tight">
            Software Developer Building Production-Ready Solutions
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-300 mb-2 sm:mb-3 leading-relaxed">
            Over 3 months of hands-on production experience at TinkerPro POS, developing and deploying features using PHP, MySQL, JavaScript, and jQuery
          </p>

          <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-slate-400 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
            I build full-stack features including REST APIs, database operations, and responsive UIs. I have experience handling large-scale data (29K+ products), implementing theme customization, and optimizing enterprise POS workflows for production-ready systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-slate-200 transition text-center"
            >
              View work
            </a>
            <a
              href="/files/Justin-Ian-Segundo-Resume.pdf"
              download="Justin-Ian-Segundo-Resume.pdf"
              className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-900 dark:border-slate-100 text-gray-900 dark:text-slate-100 text-sm font-medium hover:bg-gray-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900 transition text-center"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="animate-fadeInRight order-1 md:order-2">
          <div className="relative max-w-sm mx-auto md:max-w-none z-10">
            <div className="absolute -right-3 sm:-right-4 md:-right-8 -top-3 sm:-top-4 md:-top-8 w-full h-full bg-red-400 -z-10"></div>

            <div className="overflow-hidden mb-6 md:mb-0">
              <img
                src="/images/profile_pp.jpg"
                alt="Justin Ian Segundo"
                className="w-full aspect-square md:aspect-[5/6] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="relative md:absolute md:bottom-0 md:left-0 md:right-0 bg-white dark:bg-slate-800 p-3 sm:p-4 md:p-6 border-gray-900 dark:border-slate-100 -mt-14 sm:-mt-16 md:mt-0 mx-4 sm:mx-6 md:mx-0 shadow-xl md:shadow-none z-10">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs text-gray-500 dark:text-slate-400 mb-1">Experience</div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-100">
                    3 months
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 dark:text-slate-400 mb-1">Projects</div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-100">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;