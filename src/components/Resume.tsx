import React from 'react';
import { FileDown, ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Resume Actions */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Curriculum Vitae
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1 mb-2">
              Resume
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 font-normal">
              View my experience, technical skills, and professional background.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/resume/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Resume</span>
              </a>

              <a
                href="/resume/Resume.pdf"
                download="Ganesh_R_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <FileDown className="w-4 h-4 text-slate-500" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-5 p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Education
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {PROFILE.education.degree}
            </h3>
            <div className="text-xs font-medium text-blue-700 dark:text-blue-400 mb-1">
              {PROFILE.education.major}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mb-3">
              {PROFILE.education.institution}
            </div>
            <div className="text-xs text-slate-500 font-mono">
              {PROFILE.education.period} • {PROFILE.education.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
