import React from 'react';
import { PROFILE } from '../data/profile';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            System Design
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            {PROFILE.architecture.title}
          </h2>
        </div>

        {/* 1. Main End-to-End Pipeline Diagram */}
        <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
            End-to-End Cloud Data Flow
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 items-center">
            {PROFILE.architecture.steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="p-3 text-center rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {step}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 2. Healthcare Data Pipeline Subsection */}
        <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
            {PROFILE.healthcareArchitecture.title}
          </div>

          <div className="flex flex-wrap gap-2 items-center text-xs">
            {PROFILE.healthcareArchitecture.steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="px-3 py-2 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium">
                  {step}
                </span>
                {idx < PROFILE.healthcareArchitecture.steps.length - 1 && (
                  <span className="text-slate-400 font-bold">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
