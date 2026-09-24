import React from 'react';
import { ArrowRight, FileText, ArrowRightLeft } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-700 dark:text-blue-400">
              {PROFILE.hero.badge}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              {PROFILE.hero.heading}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-normal">
              {PROFILE.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-sm"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>View Resume</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-medium text-slate-700 dark:text-slate-300">Profiles:</span>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-4"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-4"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Clean Abstract Data Engineering Pipeline Visual */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
                Core Data Flow
              </div>

              <div className="space-y-2.5 text-xs font-medium">
                <div className="p-3 rounded border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-between">
                  <span>Source Systems (HMIS / DBs / Logs)</span>
                  <span className="text-[11px] text-slate-500 font-mono">Ingestion</span>
                </div>

                <div className="flex justify-center text-slate-400">
                  <span>↓</span>
                </div>

                <div className="p-3 rounded border border-blue-200 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 flex items-center justify-between">
                  <span>ETL / PySpark Processing (AWS Glue)</span>
                  <span className="text-[11px] text-blue-600 dark:text-blue-400 font-mono">Transform</span>
                </div>

                <div className="flex justify-center text-slate-400">
                  <span>↓</span>
                </div>

                <div className="p-3 rounded border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-between">
                  <span>Amazon S3 Data Lake (Raw / Curated)</span>
                  <span className="text-[11px] text-slate-500 font-mono">Storage</span>
                </div>

                <div className="flex justify-center text-slate-400">
                  <span>↓</span>
                </div>

                <div className="p-3 rounded border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-between">
                  <span>Warehouse (Snowflake / Redshift)</span>
                  <span className="text-[11px] text-slate-500 font-mono">Modeling</span>
                </div>

                <div className="flex justify-center text-slate-400">
                  <span>↓</span>
                </div>

                <div className="p-3 rounded border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-between">
                  <span>Analytics & Enterprise Reporting</span>
                  <span className="text-[11px] text-slate-500 font-mono">Serving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
