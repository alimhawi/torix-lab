import React from 'react';
import {
  BookOpen,
  FileCheck,
  BarChart3,
  Search,
  Stethoscope,
  Activity,
  RefreshCw,
  AlertTriangle,
  Compass,
  CheckCircle2,
  Brain,
  ShieldCheck,
} from 'lucide-react';
import { site } from '../config/site';

export default function EvidenceBase() {
  return (
    <main className="min-h-screen bg-surface page-enter">
      {/* 1. Hero Section */}
      <header className="bg-white border-b border-slate-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14 pt-28">
          <div className="badge-teal mb-4">Methodology & Science</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Evidence Base
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl leading-relaxed">
            How {site.name || 'TORIX'} translates biomechanical research and clinical exercise science into safe, structured movement programming.
          </p>
        </div>
      </header>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* 2. Our Approach */}
        <section aria-labelledby="approach-heading" className="space-y-6">
          <div className="border-b border-slate-200/80 pb-4">
            <h2 id="approach-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              Our Approach
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Bridges academic literature and practical coaching to deliver dependable movement guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-100 text-teal-600">
                <Search className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Scientific Research</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Grounded in peer-reviewed biomechanical, physiological, and neuromuscular research literature.
              </p>
            </div>

            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-100 text-teal-600">
                <Stethoscope className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Clinical Expertise</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Informed by modern sports therapy, physical therapy frameworks, and clinical rehabilitation protocols.
              </p>
            </div>

            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-100 text-teal-600">
                <Activity className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Rehabilitation Principles</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Designed around progressive overload, tissue adaptation timelines, and joint loading mechanics.
              </p>
            </div>

            <div className="card p-6 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-100 text-teal-600">
                <Compass className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Practical Coaching</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Refined through real-world strength training, mobility coaching, and athlete management experience.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Sources of Evidence */}
        <section aria-labelledby="sources-heading" className="space-y-6">
          <div className="border-b border-slate-200/80 pb-4">
            <h2 id="sources-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              Sources of Evidence
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              We prioritize high-hierarchy scientific sources to inform every exercise, progression, and guideline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 sm:p-7 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                  <FileCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Clinical Practice Guidelines</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Consensus recommendations established by leading physical therapy and orthopedic medical associations. These guidelines provide evidence-backed pathways for managing common musculoskeletal conditions safely and effectively.
              </p>
            </div>

            <div className="card p-6 sm:p-7 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                  <Search className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Systematic Reviews</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Methodical syntheses of all available research on specific training or rehabilitation interventions. Systematic reviews minimize researcher bias by evaluating study quality across standardized methodologies.
              </p>
            </div>

            <div className="card p-6 sm:p-7 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                  <BarChart3 className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Meta-Analyses</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Quantitative statistical combinations of data across multiple clinical trials. Meta-analyses deliver increased statistical power regarding muscle hypertrophy, strength adaptations, and injury prevention outcomes.
              </p>
            </div>

            <div className="card p-6 sm:p-7 space-y-3 transition-all duration-200 hover:border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                  <BookOpen className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Peer-Reviewed Research</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Individual randomized controlled trials and observational studies published in reputable sports medicine and biomechanics journals following rigorous peer evaluation by independent domain experts.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Evidence-Informed Practice */}
        <section aria-labelledby="informed-heading" className="space-y-6">
          <div className="border-b border-slate-200/80 pb-4">
            <h2 id="informed-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              Evidence-Informed Practice
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Research provides population-level trends, but effective application requires individual nuance.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-soft space-y-6">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
              While high-quality research dictates overarching principles, optimal training and rehabilitation outcomes rely on combining scientific evidence with individual context and clinical reasoning.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Individual Goals</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Matching exercise selection to specific strength, skill, or functional targets.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Training History</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Adapting baseline volume and intensity to prior movement background.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Pain Tolerance</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Respecting symptom irritability and tailoring comfortable ranges of motion.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Rehabilitation Stage</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Aligning loading parameters with acute, subacute, or chronic healing phases.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/80 border border-slate-100 sm:col-span-2 lg:col-span-2">
                <Brain className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Clinical Reasoning</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Applying professional critical thinking to modify variables dynamically rather than adhering to rigid, unyielding formulas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Continuous Improvement */}
        <section aria-labelledby="improvement-heading" className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-soft">
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-100 text-teal-600 shrink-0">
                <RefreshCw className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-2 flex-1">
                <h2 id="improvement-heading" className="text-xl font-bold text-slate-900 tracking-tight">
                  Continuous Improvement
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                  Exercise science and sports medicine are continually evolving. As new peer-reviewed research, updated clinical guidelines, and higher-quality evidence emerge, {site.name || 'TORIX'} audits and updates its exercise library, regressions, and educational material accordingly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Medical Disclaimer */}
        <section aria-label="Medical Disclaimer">
          <div className="p-6 sm:p-8 bg-amber-50/70 rounded-3xl border border-amber-200/80 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-amber-100/80 rounded-xl flex items-center justify-center text-amber-700 shrink-0">
                <AlertTriangle className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="text-base font-bold text-amber-950">Medical & Educational Disclaimer</h2>
            </div>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed max-w-4xl">
              {site.name || 'TORIX'} is an educational platform designed to provide evidence-informed exercise, mobility, and rehabilitation resources. Content provided across this platform does not constitute medical advice, diagnosis, or treatment plans. Exercise and physical rehabilitation carry inherent risks. Always consult a qualified physician, physical therapist, or healthcare professional before beginning any new training program or applying rehabilitation techniques.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}