import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Users } from 'lucide-react';
import resumeData from '../data/resume.json';

const Coaching: React.FC = () => {
  return (
    <div className="space-y-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Coaching & Fitness
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {resumeData.coaching.intro}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {resumeData.coaching.apps.map((app, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-slate-800 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-6 h-6 text-blue-500" />
            </div>
            
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
              {index === 0 ? <Trophy className="w-8 h-8" /> : <Users className="w-8 h-8" />}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {app.name}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {app.description}
            </p>
            
            <a 
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
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
        className="bg-blue-50 dark:bg-slate-900/50 rounded-2xl p-8 md:p-12 text-center mt-12"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Interested in training?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          I combine data-driven insights with proven training methodologies to help athletes reach their peak performance.
        </p>
        <a 
          href={`mailto:${resumeData.personal.email}`}
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
};

export default Coaching;
