import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Terminal, Cpu } from 'lucide-react';
import Timeline from '../components/Timeline';
import resumeData from '../data/resume.json';

const Home: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20">
      {/* Hero Section */}
      <section className="py-8 sm:py-10 md:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4 sm:space-y-6"
        >
          <motion.h1 variants={item} className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">{resumeData.personal.name}</span>
          </motion.h1>
          <motion.h2 variants={item} className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300">
            {resumeData.personal.title}
          </motion.h2>
          <motion.p variants={item} className="max-w-3xl text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {resumeData.personal.summary}
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-4">
            <a 
              href={`mailto:${resumeData.personal.email}`}
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="https://github.com/umang-desai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 font-medium transition-colors"
            >
              View Github
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-3 text-primary-500" />
            Technical Arsenal
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
              <h4 className="text-lg font-semibold mb-3 sm:mb-4 flex items-center text-gray-800 dark:text-gray-200">
                <Code className="w-5 h-5 mr-2 text-primary-500" />
                Languages & Systems
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.languages_and_systems.map(skill => (
                  <span key={skill} className="px-2.5 sm:px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
              <h4 className="text-lg font-semibold mb-3 sm:mb-4 flex items-center text-gray-800 dark:text-gray-200">
                <Server className="w-5 h-5 mr-2 text-primary-500" />
                Frameworks & Cloud
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.frameworks_cloud.map(skill => (
                  <span key={skill} className="px-2.5 sm:px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
              <h4 className="text-lg font-semibold mb-3 sm:mb-4 flex items-center text-gray-800 dark:text-gray-200">
                <Database className="w-5 h-5 mr-2 text-primary-500" />
                Databases
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.databases.map(skill => (
                  <span key={skill} className="px-2.5 sm:px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

             <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
              <h4 className="text-lg font-semibold mb-3 sm:mb-4 flex items-center text-gray-800 dark:text-gray-200">
                <Cpu className="w-5 h-5 mr-2 text-primary-500" />
                Specializations
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.specializations.map(skill => (
                  <span key={skill} className="px-2.5 sm:px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white flex items-center">
            <ActivityIcon className="w-6 h-6 mr-3 text-primary-500" />
            Work History
          </h3>
          <Timeline />
        </motion.div>
      </section>
    </div>
  );
};

// Helper component for the icon to avoid import issues if Lucide doesn't export 'Activity' as default or if I missed it
import { Activity as ActivityIcon } from 'lucide-react';

export default Home;
