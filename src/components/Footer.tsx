import React from 'react';
import { PROFILE } from '../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              {PROFILE.name}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {PROFILE.role} • AWS • Data Engineering • ETL • Analytics
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white">About</a>
            <a href="#experience" className="hover:text-slate-900 dark:hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Projects</a>
            <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">LinkedIn</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400">
          <div>© 2026 {PROFILE.name}. All rights reserved.</div>
          <div>Data Engineer Portfolio</div>
        </div>
      </div>
    </footer>
  );
};
