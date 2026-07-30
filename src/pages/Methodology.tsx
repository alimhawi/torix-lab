import React from 'react';
import {
  Layers,
  Dumbbell,
  Target,
  Activity,
  SlidersHorizontal,
  ShieldCheck,
  TrendingUp,
  RefreshCw,
  GitFork,
  CheckCircle2,
  Compass,
  Scale,
  Sparkles,
  Zap,
} from 'lucide-react';
import { site } from '../config/site';

export default function Methodology() {
  return (
    <main className="min-h-screen bg-surface page-enter">
      {/* 1. Hero Section */}
      <header className="bg-white border-b border-slate-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14 pt-28">
          <div className="badge-teal mb-4">System Architecture</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Methodology
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl leading-relaxed">
            The structural framework behind how {site.name || 'TORIX'} classifies, scales, and organizes movement for strength, mobility, and systematic rehabilitation.
          </p>
        </div>
      </header>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* 2. Exercise Classification */}
        <section aria-labelledby="classification-heading" className="space-y-6">
          <div className="border-b border-slate-200/80 pb-4">
            <h2 id="classification-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              Exercise Classification
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Every exercise in the TORIX library is tagged with structured metadata to enable precise filtering and safe programming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-4">
            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                <Layers className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Body Region</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Categorized by primary anatomical domains—such as Upper Body, Lower Body, Core, or Full Body—to manage regional fatigue and load distribution.
              </p>
            </div>

            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                <Compass className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Movement Pattern</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Structured around foundational biomechanical actions: Push, Pull, Squat, Hinge, Lunge, Carry, and Rotation.
              </p>
            </div>

            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                <Activity className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Primary Muscles</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Detailed breakdowns highlighting prime movers, secondary synergists, and stabilizing muscle groups engaged during execution.
              </p>
            </div>

            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                <Dumbbell className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Equipment Needed</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Clear gear requirements ranging from pure bodyweight and resistance bands to gymnastics rings and external resistance.
              </p>
            </div>

            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                <SlidersHorizontal className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Difficulty Level</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Graded baseline complexity (Beginner, Intermediate, Advanced) based on required motor control, strength, and leverage demands.
              </p>
            </div>

            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Rehabilitation Category</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Mapped to therapeutic stages: Acute Loading, Joint Mobility, Dynamic Stability, Neuromuscular Re-education, or Return-to-Sport.
              </p>
            </div>

            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200 md:col-span-2 lg:col-span-3">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                  <Target className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Training Goal</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mt-1">
                    Aligned with specific physical adaptation objectives—including hypertrophy, maximal strength, muscular endurance, joint health, or explosive power output.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Programming Philosophy */}
        <section aria-labelledby="philosophy-heading" className="space-y-6">
          <div className="border-b border-slate-200/80 pb-4">
            <h2 id="philosophy-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              Programming Philosophy
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Five fundamental tenets that govern how exercises are selected, combined, and loaded.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-teal-600" aria-hidden="true" />
                <h3 className="text-base font-bold text-slate-900">Progressive Overload</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Controlled, incremental increases in volume, leverage, tempo, or mechanical advantage to drive safe physiological adaptation without exceeding tissue capacity.
              </p>
            </div>

            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-teal-600" aria-hidden="true" />
                <h3 className="text-base font-bold text-slate-900">Movement Quality</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Prioritizing clean joint alignment, full active range of motion, and precise motor control over ego lifting or unmanaged reps.
              </p>
            </div>

            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-teal-600" aria-hidden="true" />
                <h3 className="text-base font-bold text-slate-900">Functional Strength</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Developing multi-joint strength and stability that transfers directly to real-world physical demands, athletic sport performance, and daily life.
              </p>
            </div>

            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-teal-600" aria-hidden="true" />
                <h3 className="text-base font-bold text-slate-900">Injury Prevention</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Addressing muscle imbalances, improving connective tissue resilience, and maintaining joint health to reduce injury risk over time.
              </p>
            </div>

            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200 md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3">
                <Scale className="w-5 h-5 text-teal-600" aria-hidden="true" />
                <h3 className="text-base font-bold text-slate-900">Long-Term Development</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Emphasizing sustainable, lifelong training over rapid short-term exhaustion. We build movement durability designed to serve users across years of activity.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Progressions & Regressions */}
        <section aria-labelledby="scaling-heading" className="space-y-6">
          <div className="border-b border-slate-200/80 pb-4">
            <h2 id="scaling-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              Progressions & Regressions
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Scalable exercise pathways designed to match individual mechanical capabilities.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-soft">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                <GitFork className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="text-lg font-bold text-slate-900">Dynamic Exercise Scaling</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                  Exercises are not fixed demands; they are variable movement patterns. Every primary exercise in {site.name || 'TORIX'} is connected to easier regressions and harder progressions.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-1.5">
                    <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider">Regressions</div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Modify lever length, reduce bodyweight load, or constrain range of motion to make a movement accessible during early rehabilitation or skill acquisition.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-1.5">
                    <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider">Progressions</div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Increase moment arms, remove external points of support, or introduce dynamic stability demands as movement proficiency and tissue capacity develop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Individualization */}
        <section aria-labelledby="individualization-heading" className="space-y-6">
          <div className="border-b border-slate-200/80 pb-4">
            <h2 id="individualization-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              Individualization
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              No exercise is universally appropriate for every individual at all times.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-soft space-y-6">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
              An exercise that builds strength in one individual may cause unnecessary joint stress in another. Optimal program design always adapts to personal context:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-800">Specific Goals</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-800">Training Experience</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-800">Pain Level & Irritability</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-800">Baseline Mobility</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-800">Medical History</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-800">Recovery Stage</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Continuous Review */}
        <section aria-labelledby="review-heading">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-soft">
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                <RefreshCw className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-2 flex-1">
                <h2 id="review-heading" className="text-xl font-bold text-slate-900 tracking-tight">
                  Continuous Systematic Review
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                  As biomechanical literature, sports medicine research, and physical therapy practices refine over time, {site.name || 'TORIX'} continuously updates its exercise classifications, progression trees, and educational content to reflect current best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}