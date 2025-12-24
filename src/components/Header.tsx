import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Activity, Github, Linkedin, Mail } from 'lucide-react';
import resumeData from '../data/resume.json';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const location = useLocation();
  const isCoaching = location.pathname === '/coaching';

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      isCoaching
        ? 'bg-emerald-50/60 dark:bg-emerald-900/80 border-emerald-200/70 dark:border-emerald-800'
        : 'bg-blue-50/80 dark:bg-slate-900/80 border-blue-200 dark:border-slate-800'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600">
              {resumeData.personal.name}
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors duration-200 ${
                isActive('/')
                  ? 'border-primary-500 text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700'
              }`}
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Work
            </Link>
            <Link
              to="/coaching"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors duration-200 ${
                isActive('/coaching')
                  ? 'border-primary-500 text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700'
              }`}
            >
              <Activity className="w-4 h-4 mr-2" />
              Coaching
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4">
              <a href={`mailto:${resumeData.personal.email}`} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/umang-desai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/umang-desai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
