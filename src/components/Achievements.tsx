import React from 'react';
import { PROFILE } from '../data/profile';

export const Achievements: React.FC = () => {
  return (
    <section className="py-14 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Recognitions
          </span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            Key Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROFILE.achievements.map((achieve, idx) => (
            <div
              key={idx}
              className="p-4 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium"
            >
              "{achieve}"
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
