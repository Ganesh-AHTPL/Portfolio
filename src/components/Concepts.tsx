import React from 'react';
import { PROFILE } from '../data/profile';

export const Concepts: React.FC = () => {
  return (
    <section className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Domain Knowledge
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Data Engineering Concepts
          </h2>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {PROFILE.concepts.map((concept) => (
            <span
              key={concept}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
