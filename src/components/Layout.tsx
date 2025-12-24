import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
