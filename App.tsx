import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const AboutSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800" ref={elementRef}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white relative inline-block">
            لماذا تختارني؟
            <span className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transform origin-left transition-transform duration-700 delay-500 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></span>
          </h2>
          <p className="max-w-3xl text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            أؤمن بأن الأرقام تحكي قصة نجاحك. مع خبرة واسعة في السوق المحلي وفهم عميق للأنظمة الضريبية المتغيرة، أعمل ليس فقط كمحاسب، بل كمستشار استراتيجي يساعدك على تقليل التكاليف وتعظيم الأرباح. الدقة، السرية، والاحترافية هي ركائز عملي.
          </p>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
             {[
                { number: '+3', label: 'سنوات خبرة' },
                { number: '+200', label: 'عميل سعيد' },
                { number: '+500', label: 'مشروع ناجح' },
                { number: '100%', label: 'التزام بالمواعيد' }
             ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                   <span className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.number}</span>
                   <span className="text-slate-500 dark:text-slate-400 text-sm">{stat.label}</span>
                </div>
             ))}
          </div>
        </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;