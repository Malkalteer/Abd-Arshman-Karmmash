import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import aboodImg from '../assets/aood.jpg';

const Hero: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden" ref={elementRef}>
        {/* Abstract Background Shapes with Float Animation */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-100 dark:bg-primary-900/30 blur-3xl opacity-50 pointer-events-none animate-float"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary-100 dark:bg-secondary-900/30 blur-3xl opacity-50 pointer-events-none animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className={`flex-1 text-center lg:text-right transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-50 dark:bg-primary-900/50 border border-primary-100 dark:border-primary-800">
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                خبرة أكثر من 3 سنوات في المجال المالي
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              شريكك الموثوق <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                للنجاح المالي والضريبي
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed delay-200">
              أقدم حلولاً محاسبية شاملة للأفراد والشركات. من إمساك الدفاتر إلى التخطيط الضريبي والاستشارات المالية، أنا هنا لأضمن استقرارك ونمو أعمالك بدقة وشفافية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="px-8 py-3.5 rounded-lg bg-primary-600 text-white font-semibold shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:shadow-primary-500/50 transition-all transform hover:-translate-y-1 hover:scale-105"
              >
                احجز استشارة مجانية
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleScroll(e, '#services')}
                className="px-8 py-3.5 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all transform hover:-translate-y-1"
              >
                استكشف خدماتي
              </a>
            </div>
          </div>

          {/* Image */}
          <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-secondary-500 rounded-[2rem] transform rotate-6 scale-105 opacity-20 dark:opacity-40 blur-lg transition-transform group-hover:rotate-12 duration-500"></div>
              <img
                src={aboodImg}
                alt="abbod"
                className="relative w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-[2rem] shadow-2xl border-4 border-white dark:border-slate-800 transition-transform duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-bounce-slow z-20">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">حاصل على شهادة</p>
                  <p className="font-bold text-slate-800 dark:text-white">كلية اقتصاد جامعة دمشق</p>
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