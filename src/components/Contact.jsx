import { useState } from 'react';
import { useFormSubmit } from '../hooks/useFormSubmit';

const Contact = () => {
  const { status, isSubmitting, handleSubmit, resetStatus } = useFormSubmit();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    resetStatus();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(formData);
    
    if (result.success) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const contactLinks = [
    {
      href: 'mailto:justinian.segundo1@gmail.com',
      label: 'Email',
      value: 'justinian.segundo1@gmail.com',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      href: 'https://github.com/justinsegundo',
      label: 'GitHub',
      value: 'github.com/justinsegundo',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      external: true,
    },
    {
      href: 'https://www.linkedin.com/in/justinsegundo/',
      label: 'LinkedIn',
      value: 'linkedin.com/in/justinsegundo',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      external: true,
    },
  ];

  return (
    <section id="contact" className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-2 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400">
            I'm open to full-time opportunities, freelance projects, and collaborations. Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-4 sm:mb-6">
                Contact Details
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-gray-900 dark:hover:border-slate-400 transition-all"
                  >
                    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-slate-100 transition-colors">
                      <div className="text-gray-900 dark:text-slate-100 group-hover:text-white dark:group-hover:text-slate-900">
                        {link.icon}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-gray-500 dark:text-slate-400 mb-1">{link.label}</div>
                      <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-slate-100 break-all">
                        {link.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-gray-200 dark:border-slate-700">
              <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-slate-100 mb-2 sm:mb-3">
                Availability
              </h4>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-slate-300">
                <span className="relative flex h-3 w-3 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Open to full-time front-end development opportunities and freelance projects
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              name="contact"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="space-y-4 sm:space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              {status.message && (
                <div
                  className={`p-3 sm:p-4 rounded-lg text-xs sm:text-sm ${
                    status.type === 'success'
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-900 dark:text-slate-100 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-slate-100 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-slate-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-900 dark:text-slate-100 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-slate-100 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-slate-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-900 dark:text-slate-100 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-slate-100 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-slate-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-900 dark:text-slate-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-slate-100 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-slate-400 focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-5 sm:px-6 py-3 sm:py-3.5 bg-gray-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-800 dark:hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && (
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;