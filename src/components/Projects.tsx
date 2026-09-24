import React from 'react';
import { PROFILE } from '../data/profile';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Documented Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Projects & Experience Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROFILE.projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {proj.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {proj.description}
                </p>

                {/* Minimal Architecture Flow */}
                <div className="mb-4 pt-3 border-t border-slate-200 dark:border-slate-800">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Flow:
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    {proj.flow.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {proj.technologies && (
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
