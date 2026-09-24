import React from 'react';
import { PROFILE } from '../data/profile';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Work History
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Experience
          </h2>
        </div>

        <div className="space-y-10 border-l border-slate-200 dark:border-slate-800 ml-2 pl-6 sm:pl-8">
          {PROFILE.experience.map((job, idx) => (
            <div key={idx} className="relative">
              {/* Clean bullet indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-950" />

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {job.role}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {job.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{job.company}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>

                <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                  {job.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
