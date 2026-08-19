import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Github, Linkedin, Mail } from 'lucide-react';
import resumeData from '../data/resume.json';
import SoccerBallIcon from './SoccerBallIcon';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const location = useLocation();
  const isCoaching = location.pathname === '/coaching';

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      isCoaching
        ? 'bg-emerald-50/80 dark:bg-emerald-950/80 border-emerald-200/70 dark:border-emerald-800'
        : 'bg-blue-50/80 dark:bg-slate-950/80 border-blue-200 dark:border-slate-800'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-base sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600">
              {resumeData.personal.name}
            </Link>
          </div>
          
          <nav className="flex items-center space-x-2 sm:space-x-6">
            <Link
              to="/"
              aria-label="Work"
              title="Work"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive('/')
                  ? 'bg-primary-100 text-primary-900 dark:bg-primary-950 dark:text-primary-300 font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work</span>
            </Link>
            <Link
              to="/coaching"
              aria-label="Coaching"
              title="Coaching"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive('/coaching')
                  ? 'bg-primary-100 text-primary-900 dark:bg-primary-950 dark:text-primary-300 font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <SoccerBallIcon className="w-4 h-4" />
              <span>Coaching</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <a 
                href={`mailto:${resumeData.personal.email}`} 
                aria-label="Email"
                title="Email"
                className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://github.com/umang-desai" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub profile"
                title="GitHub"
                className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/umang-desai" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn profile"
                title="LinkedIn"
                className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <div className="h-4 w-px bg-gray-200 dark:bg-slate-800 mx-1 hidden sm:block" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
