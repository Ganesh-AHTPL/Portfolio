import React from 'react';
import { PROFILE } from '../data/profile';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Skills & Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILE.skills.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
