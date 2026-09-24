import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Github: React.FC = () => {
  return (
    <section className="py-14 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            GitHub
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            Explore my code, projects, and data engineering work.
          </p>
        </div>

        <a
          href={PROFILE.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
        >
          <span>View GitHub</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>
    </section>
  );
};
