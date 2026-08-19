import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const themes = {
  default: {
    '50': '#eff6ff',
    '100': '#dbeafe',
    '200': '#bfdbfe',
    '300': '#93c5fd',
    '400': '#60a5fa',
    '500': '#3b82f6',
    '600': '#2563eb',
    '700': '#1d4ed8',
    '800': '#1e40af',
    '900': '#1e3a8a',
    '950': '#172554',
  },
  coaching: {
    '50': '#ecfdf5',
    '100': '#d1fae5',
    '200': '#a7f3d0',
    '300': '#6ee7b7',
    '400': '#34d399',
    '500': '#10b981',
    '600': '#059669',
    '700': '#047857',
    '800': '#065f46',
    '900': '#064e3b',
    '950': '#022c22',
  }
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isCoaching = location.pathname === '/coaching';

  useEffect(() => {
    const root = document.documentElement;
    const theme = isCoaching ? themes.coaching : themes.default;

    Object.entries(theme).forEach(([shade, value]) => {
      root.style.setProperty(`--primary-${shade}`, value);
    });

    // Update dynamic document title
    if (isCoaching) {
      document.title = 'Coaching & Fitness Apps | Umang Desai';
    } else {
      document.title = 'Umang Desai | Senior Software Engineer';
    }
  }, [location.pathname, isCoaching]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isCoaching 
        ? 'bg-emerald-50/30 dark:bg-emerald-950' 
        : 'bg-blue-50/50 dark:bg-slate-950'
    }`}>
      <Header />
      <main className="flex-grow pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {children}
      </main>
      <footer className={`border-t transition-colors duration-300 ${
        isCoaching
          ? 'bg-emerald-50/60 dark:bg-emerald-950/60 border-emerald-200/70 dark:border-emerald-800/50'
          : 'bg-blue-50/80 dark:bg-slate-950/80 border-blue-200 dark:border-slate-800'
      }`}>
        <div className="max-w-5xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} Umang Desai. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://github.com/umang-desai" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/umang-desai" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:umangd03@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
