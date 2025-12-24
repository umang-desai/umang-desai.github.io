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

  useEffect(() => {
    const root = document.documentElement;
    const theme = location.pathname === '/coaching' ? themes.coaching : themes.default;

    Object.entries(theme).forEach(([shade, value]) => {
      root.style.setProperty(`--primary-${shade}`, value);
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {children}
      </main>
      <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 mt-auto">
        <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex justify-center text-gray-400 dark:text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {import.meta.env.VITE_APP_TITLE || 'Umang Desai'}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
