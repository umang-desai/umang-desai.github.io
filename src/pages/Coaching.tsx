import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import resumeData from '../data/resume.json';

type CoachingApp = {
  name: string;
  logoBase: string;
  url: string;
  description: string;
};

const Coaching: React.FC = () => {
  const apps = resumeData.coaching.apps as CoachingApp[];

  return (
    <div className="space-y-10 sm:space-y-12 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Coaching & Fitness
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
          {resumeData.coaching.intro}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
        {apps.map((app, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative bg-white dark:bg-emerald-900/30 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-emerald-800/50 transition-all duration-300"
          >
            <a 
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-0 right-0 p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
            >
              <ExternalLink className="w-6 h-6 text-primary-500" />
            </a>
            
            <div className="mb-6 h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-primary-50 dark:bg-primary-900/20 overflow-hidden flex items-center justify-center">
              {/* Light mode logo - Soccer Fitness Tracker uses dark variant in light mode */}
              <img 
                src={`/logos/${app.logoBase}_${app.logoBase === 'soccer_fitness_tracker' ? 'dark' : 'light'}.png`}
                alt={`${app.name} logo`}
                className="w-full h-full object-cover dark:hidden"
              />
              {/* Dark mode logo - Soccer Fitness Tracker uses light variant in dark mode */}
              <img 
                src={`/logos/${app.logoBase}_${app.logoBase === 'soccer_fitness_tracker' ? 'light' : 'dark'}.png`}
                alt={`${app.name} logo`}
                className="w-full h-full object-cover hidden dark:block"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {app.name}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {app.description}
            </p>
            
            <a 
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            >
              View on App Store
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-primary-50 dark:bg-emerald-900/40 rounded-2xl p-6 sm:p-8 md:p-12 text-center mt-8 sm:mt-12 border border-primary-100 dark:border-emerald-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Interested in training?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          I combine data-driven insights with proven training methodologies to help athletes reach their peak performance.
        </p>
        <a 
          href={`mailto:${resumeData.personal.email}`}
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
};

export default Coaching;
