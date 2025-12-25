import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import resumeData from '../data/resume.json';

type ExperienceItem = {
  company: string;
  logo?: string;
  role: string;
  start: string;
  end: string;
  description: string[];
};

const Timeline: React.FC = () => {
  return (
    <div className="relative border-l-2 border-primary-200 dark:border-primary-900 ml-4 sm:ml-6 md:ml-10 space-y-8 sm:space-y-12 my-6 sm:my-10">
      {(resumeData.experience as ExperienceItem[]).map((job, index) => (
        <TimelineItem key={index} job={job} index={index} />
      ))}
    </div>
  );
};

const TimelineItem: React.FC<{ job: ExperienceItem; index: number }> = ({ job, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-6 sm:pl-8 md:pl-12"
    >
      {/* Dot on the timeline - Replaced with Logo if available */}
      <div className="absolute top-0 left-[-20px] sm:left-[-24px] md:left-[-32px] w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full border-2 sm:border-4 border-white dark:border-slate-950 bg-white flex items-center justify-center overflow-hidden shadow-sm">
        {job.logo && !imageError ? (
          <img 
            src={job.logo} 
            alt={`${job.company} logo`} 
            className="w-full h-full object-contain p-1"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
             <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
          </div>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{job.role}</h3>
        <span className="text-xs sm:text-sm font-medium px-2.5 sm:px-3 py-1 rounded-full bg-primary-100 text-primary-800 dark:bg-slate-700 dark:text-primary-300 w-fit mt-2 sm:mt-0">
          {job.start} - {job.end}
        </span>
      </div>
      
      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-sm">
        <span className="font-semibold mr-4 text-primary-600 dark:text-primary-400">{job.company}</span>
      </div>

      <ul className="list-disc list-outside ml-4 space-y-1.5 sm:space-y-2 text-gray-700 dark:text-gray-300">
        {job.description.map((desc: string, i: number) => (
          <li key={i} className="pl-1 leading-relaxed">{desc}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Timeline;
