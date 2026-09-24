import React from 'react';
import { PROFILE } from '../data/profile';

export const About: React.FC = () => {
  const techPills = [
    'AWS Glue',
    'Amazon S3',
    'AWS EMR',
    'AWS Lambda',
    'Step Functions',
    'PySpark',
    'Python',
    'SQL',
    'Snowflake',
    'Amazon Redshift',
    'Apache Airflow',
    'Healthcare / HMIS Data',
  ];

  return (
    <section id="about" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1 mb-6">
            About Me
          </h2>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal mb-6">
            {PROFILE.about}
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-8">
            {PROFILE.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {techPills.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
