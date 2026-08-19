import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Terminal, 
  Cpu, 
  Shield, 
  Activity, 
  GraduationCap, 
  FileText, 
  MapPin, 
  Github, 
  Linkedin, 
  Mail,
  HeartHandshake
} from 'lucide-react';
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
      <section className="py-8 sm:py-10 md:py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4 sm:space-y-6"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100/70 dark:bg-primary-950/70 border border-primary-200 dark:border-primary-800 text-xs sm:text-sm font-medium text-primary-800 dark:text-primary-300">
            <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span>{resumeData.personal.location}</span>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span className="text-gray-600 dark:text-gray-300">Available for Select Consulting & Advising</span>
          </motion.div>

          <motion.h1 variants={item} className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">{resumeData.personal.name}</span>
          </motion.h1>
          <motion.h2 variants={item} className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300">
            {resumeData.personal.title}
          </motion.h2>
          <motion.p variants={item} className="max-w-3xl text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {resumeData.personal.summary}
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <a 
              href={`mailto:${resumeData.personal.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a 
              href="/Umang_Desai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-white dark:bg-slate-900 border border-primary-300 dark:border-primary-700 hover:border-primary-500 dark:hover:border-primary-500 text-primary-700 dark:text-primary-300 font-medium transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              Download Resume
            </a>
            <a 
              href="https://github.com/umang-desai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/umang-desai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 font-medium transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
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
                <Shield className="w-5 h-5 mr-2 text-primary-500" />
                DevOps & Security
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.devops_tools.map(skill => (
                  <span key={skill} className="px-2.5 sm:px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 md:col-span-2">
              <h4 className="text-lg font-semibold mb-3 sm:mb-4 flex items-center text-gray-800 dark:text-gray-200">
                <Cpu className="w-5 h-5 mr-2 text-primary-500" />
                Specializations
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.specializations.map(skill => (
                  <span key={skill} className="px-2.5 sm:px-3 py-1 bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-900 rounded-full text-xs sm:text-sm font-medium">
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
            <Activity className="w-6 h-6 mr-3 text-primary-500" />
            Work History
          </h3>
          <Timeline />
        </motion.div>
      </section>

      {/* Education & Leadership Section */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Education Card */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-primary-500" />
                Education
              </h3>
              <div className="space-y-6">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-primary-300 dark:border-primary-800">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800 dark:bg-slate-800 dark:text-primary-300 w-fit mt-1 sm:mt-0">
                        {edu.years}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {edu.school} {edu.gpa ? <span className="text-gray-400 dark:text-gray-500">· GPA {edu.gpa}</span> : null}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteer & Leadership Card */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <HeartHandshake className="w-6 h-6 mr-3 text-primary-500" />
                Volunteer & Coaching Leadership
              </h3>
              <div className="space-y-6">
                {(resumeData as any).volunteer?.map((vol: any, idx: number) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-emerald-300 dark:border-emerald-800">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        {vol.role}
                      </h4>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 w-fit mt-1 sm:mt-0">
                        {vol.years}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {vol.organization}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
