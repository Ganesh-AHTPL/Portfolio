import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Let's Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center gap-3.5">
              <Mail className="w-4 h-4 text-blue-600 shrink-0" />
              <div>
                <div className="text-[11px] text-slate-500 font-mono">Email</div>
                <a href={`mailto:${PROFILE.email}`} className="text-xs font-semibold text-slate-900 dark:text-white hover:text-blue-600">
                  {PROFILE.email}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center gap-3.5">
              <Phone className="w-4 h-4 text-blue-600 shrink-0" />
              <div>
                <div className="text-[11px] text-slate-500 font-mono">Phone</div>
                <a href={`tel:${PROFILE.phone}`} className="text-xs font-semibold text-slate-900 dark:text-white hover:text-blue-600">
                  {PROFILE.phone}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center gap-3.5">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <div>
                <div className="text-[11px] text-slate-500 font-mono">Location</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">
                  {PROFILE.location}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center gap-3.5">
              <Linkedin className="w-4 h-4 text-blue-600 shrink-0" />
              <div>
                <div className="text-[11px] text-slate-500 font-mono">LinkedIn</div>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-900 dark:text-white hover:text-blue-600"
                >
                  linkedin.com/in/ganesh-r-a32a01393
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Ganesh, we'd like to discuss a Data Engineering opportunity..."
                  className="w-full px-3 py-2 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message (Email)</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
