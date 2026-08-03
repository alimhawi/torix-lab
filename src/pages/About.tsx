import React, { useState } from 'react';
import { Linkedin, Instagram, User, Target, ShieldCheck, Heart, Award } from 'lucide-react';
import { site } from '../config/site';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <main className="min-h-screen bg-surface page-enter">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14 pt-28">
          <div className="badge-teal mb-4">About {site.name}</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            {site.tagline}
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl leading-relaxed">
            {site.description}
          </p>
        </div>
      </header>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Core Pillars */}
        <section aria-label="Core Pillars" className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
            <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-100 text-teal-600">
              <Target className="w-6 h-6" aria-hidden="true" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Evidence-Based</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Every exercise and progression is backed by biomechanical principles and modern rehabilitation science.
            </p>
          </div>

          <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
            <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-100 text-teal-600">
              <ShieldCheck className="w-6 h-6" aria-hidden="true" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Structured Guidance</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Clear instructions, common mistake warnings, and targeted muscle group breakdowns for safer training.
            </p>
          </div>

          <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
            <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-100 text-teal-600">
              <Heart className="w-6 h-6" aria-hidden="true" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">For Everyone</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Designed for all fitness levels—from beginner mobility and rehabilitation to advanced calisthenics.
            </p>
          </div>
        </section>

        {/* About the Creator Section */}
        <section aria-labelledby="creator-heading" className="space-y-6">
          <div className="border-b border-slate-200/80 pb-4">
            <h2 id="creator-heading" className="text-2xl font-bold text-slate-900">
              About the Creator
            </h2>
            <p className="text-slate-500 text-sm">The vision and methodology behind {site.name}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-soft">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center md:items-start">
              
              {/* Profile Photo */}
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-teal-50 to-slate-100 border border-teal-100/80 flex items-center justify-center overflow-hidden shadow-sm">
                  {!imageError ? (
                    <img
                      src="/images/profile.webp"
                      alt={site.creator}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center rounded-2xl"
                    />
                  ) : (
                    <User className="w-16 h-16 text-teal-500/70" aria-hidden="true" />
                  )}
                </div>
                <div 
                  className="absolute -bottom-2 -right-2 bg-teal-500 text-white p-2 rounded-xl shadow-teal"
                  title="Certified Professional"
                >
                  <Award className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>

              {/* Creator Info */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{site.creator}</h3>
                  <p className="text-teal-600 font-semibold text-sm mt-0.5">{site.creatorTitle}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                    {site.creatorBio || site.description}
                  </p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Designed, developed, and maintained independently by {site.creator}.
                  </p>
                </div>

                {/* Updated CTA Note */}
                <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-100/80 text-sm text-slate-700 font-medium leading-relaxed">
                  Interested in working together or have a question? Feel free to connect with me through LinkedIn or Instagram.
                </div>

                {/* Primary Contact Buttons: LinkedIn & Instagram */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
                  {site.linkedin && (
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary bg-teal-500 hover:bg-teal-600 text-white gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-teal flex items-center min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                      aria-label="LinkedIn Profile (opens in a new tab)"
                    >
                      <Linkedin className="w-4 h-4" aria-hidden="true" />
                      <span>LinkedIn</span>
                    </a>
                  )}

                  {site.instagram && (
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary bg-teal-500 hover:bg-teal-600 text-white gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-teal flex items-center min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                      aria-label="Instagram Profile (opens in a new tab)"
                    >
                      <Instagram className="w-4 h-4" aria-hidden="true" />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}