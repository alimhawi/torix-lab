import React from 'react';
import { Link } from 'react-router-dom';
import AnatomyModel from "../components/anatomy/AnatomyModel";
import FloatingLabel from "../components/FloatingLabel";
import {
  ArrowRight,
  Activity,
  Zap,
  BarChart3,
  Heart,
  Shield,
  Brain,
  Dumbbell,
  HeartPulse,
  ShieldCheck,
  ChevronRight,
  CheckCircle,
  Target,
  TrendingUp,
  Award,
  Users,
  Star,
} from "lucide-react";

const stats = [
  { value: '150+', label: 'Bodyweight Exercises' },
  { value: '25+', label: 'Categories' },
  { value: '100%', label: 'Evidence-Based' },
];

const features = [
  {
    icon: BarChart3,
    title: 'Body Analysis System',
    desc: 'Enter your data once. Receive a complete performance report including BMI, body fat, FFMI, TDEE, and personalized recommendations.',
    href: '/analysis',
    color: 'text-teal-600 bg-teal-50',
  },
  {
    icon: Activity,
    title: 'Exercise Library',
    desc: 'Evidence-based bodyweight exercise library with 150+ exercises across 25+ categories. Progressions, regressions, cues, and common mistakes.',
    href: '/exercises',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: Heart,
    title: 'Rehabilitation Protocols',
    desc: 'Science-backed rehabilitation for ACL, ankle, shoulder, lower back, hamstring, hip, and neck injuries with staged loading progressions.',
    href: '/rehabilitation',
    color: 'text-rose-600 bg-rose-50',
  },
  {
    icon: Zap,
    title: 'Performance Calculators',
    desc: 'Professional calculators for BMR, TDEE, VO2max, 1RM, pace, body fat, FFMI, hydration, and more — all in one place.',
    href: '/calculators',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: Brain,
    title: 'Nutrition Intelligence',
    desc: 'Personalized macronutrient targets, hydration goals, and periodization strategies based on your training load and goals.',
    href: '/nutrition',
    color: 'text-violet-600 bg-violet-50',
  },
  {
    icon: Shield,
    title: 'Performance Dashboard',
    desc: 'Track your progress, review your body composition trends, and monitor your performance metrics in a unified dashboard.',
    href: '/dashboard',
    color: 'text-green-600 bg-green-50',
  },
];

const principles = [
  { icon: CheckCircle, text: 'Every protocol is grounded in peer-reviewed research' },
  { icon: CheckCircle, text: 'Trusted by clinicians and coaches worldwide' },
  { icon: CheckCircle, text: 'Designed for athletes at every level' },
  { icon: CheckCircle, text: 'Continuously updated with latest evidence' },
];

const testimonials = [
  {
    quote: "TORIX completely changed how I approach return-to-sport protocols. The rehabilitation tools are as good as anything I've seen in clinical practice.",
    name: 'Dr. Sarah Kim',
    role: 'Sports Medicine Physician',
    avatar: 'SK',
  },
  {
    quote: "The body analysis system gives my athletes a complete picture in seconds. The evidence base behind the calculations is exactly what high-performance coaching needs.",
    name: 'James Okonkwo',
    role: 'Strength & Conditioning Coach',
    avatar: 'JO',
  },
  {
    quote: "Finally a platform that treats fitness science with the rigor it deserves. No gimmicks — just clean, evidence-based tools.",
    name: 'Priya Nair',
    role: 'Exercise Physiologist',
    avatar: 'PN',
  },
];

export default function Home() {
  return (
    <div className="page-enter">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-surface">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Headline + CTA */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 badge-teal mb-8">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                <span>Evidence-Based Human Performance</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.06] tracking-tight mb-6">
                Move Better.<br />
                <span className="text-teal-500">Perform</span> Smarter.
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed max-w-md mb-10">
                Evidence-based tools for performance, rehabilitation and body analysis — designed to the standard of elite sport and clinical practice.
              </p>

              <div className="flex flex-wrap gap-4 mb-14">
                <Link to="/analysis" className="btn-primary text-base px-7 py-3.5">
                  Start Free Analysis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/exercises" className="btn-secondary text-base px-7 py-3.5">
                  Explore Exercise Library
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-bold text-slate-900">{s.value}</div>
                    <div className="text-sm text-slate-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hero visual - Premium SaaS Composition */}
            <div className="relative flex flex-col items-center justify-center lg:justify-end animate-fade-in py-6 lg:py-10">
              
              {/* Premium Animations Style Block */}
              <style>{`
                @keyframes float-1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
                @keyframes float-2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
                @keyframes float-3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
                @keyframes breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
                @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
              `}</style>

              <div className="relative w-full max-w-[620px] h-[460px] sm:h-[540px] lg:h-[680px] flex items-center justify-center">
                
                {/* Soft Teal Radial Glow for Depth & Lighting */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[300px] lg:w-[340px] h-[360px] sm:h-[420px] lg:h-[480px] bg-teal-400/25 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none z-0" 
                  style={{ animation: 'breathe 8s infinite ease-in-out' }} 
                />

                {/* Anatomy Model */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div 
                    className="w-[280px] sm:w-[380px] md:w-[420px] lg:w-[480px] h-full pointer-events-auto origin-center"
                    style={{ animation: 'breathe 8s infinite ease-in-out, float-2 7s infinite ease-in-out' }}
                  >
                    <AnatomyModel />
                  </div>
                </div>

                {/* --- Left Orbiting Floating Cards (Desktop & Tablet) --- */}

                {/* Top Left: Power (Shown on Tablet & Desktop) */}
                <div className="hidden md:block absolute top-[12%] left-[8%] sm:left-[2%] z-30" style={{ opacity: 0, animation: 'fade-in-up 0.8s ease-out 0.2s forwards' }}>
                  <div style={{ animation: 'float-1 6s infinite ease-in-out 0.5s' }} className="flex flex-col items-center gap-1.5 scale-105 origin-bottom-right">
                    <FloatingLabel 
                      icon={Zap} 
                      title="Power" 
                      className="bg-white/90 backdrop-blur-xl border border-white/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)] text-slate-800 font-medium px-4 py-2.5 rounded-2xl" 
                    />
                  </div>
                </div>

                {/* Middle Left: Strength (Shown on Tablet & Desktop) */}
                <div className="hidden md:block absolute top-[48%] left-[4%] sm:-left-[2%] -translate-y-1/2 z-20" style={{ opacity: 0, animation: 'fade-in-up 0.8s ease-out 0.4s forwards' }}>
                  <div style={{ animation: 'float-3 7s infinite ease-in-out 1.2s' }} className="flex flex-col items-center gap-1.5 scale-95 origin-right">
                    <FloatingLabel 
                      icon={Dumbbell} 
                      title="Strength" 
                      className="bg-white/80 backdrop-blur-md border border-white/40 shadow-lg text-slate-700 px-3.5 py-2 rounded-xl" 
                    />
                  </div>
                </div>

                {/* Bottom Left: Speed (Shown ONLY on Desktop) */}
                <div className="hidden lg:block absolute bottom-[16%] left-[10%] sm:left-[4%] z-30" style={{ opacity: 0, animation: 'fade-in-up 0.8s ease-out 0.6s forwards' }}>
                  <div style={{ animation: 'float-2 6.5s infinite ease-in-out 0.8s' }} className="flex flex-col items-center gap-1.5 scale-95 origin-top-right">
                    <FloatingLabel 
                      icon={Activity} 
                      title="Speed" 
                      className="bg-white/80 backdrop-blur-md border border-white/40 shadow-lg text-slate-700 px-3.5 py-2 rounded-xl" 
                    />
                  </div>
                </div>

                {/* --- Right Orbiting Floating Cards (Desktop & Tablet) --- */}

                {/* Top Right: Recovery (Shown on Tablet & Desktop) */}
                <div className="hidden md:block absolute top-[15%] right-[8%] sm:right-[3%] z-20" style={{ opacity: 0, animation: 'fade-in-up 0.8s ease-out 0.3s forwards' }}>
                  <div style={{ animation: 'float-3 6.5s infinite ease-in-out 0.2s' }} className="flex flex-col items-center gap-1.5 scale-95 origin-bottom-left">
                    <FloatingLabel 
                      icon={HeartPulse} 
                      title="Recovery" 
                      className="bg-white/80 backdrop-blur-md border border-white/40 shadow-lg text-slate-700 px-3.5 py-2 rounded-xl" 
                    />
                  </div>
                </div>

                {/* Middle Right: Mobility (Shown on Tablet & Desktop) */}
                <div className="hidden md:block absolute top-[52%] right-[2%] sm:-right-[3%] -translate-y-1/2 z-30" style={{ opacity: 0, animation: 'fade-in-up 0.8s ease-out 0.5s forwards' }}>
                  <div style={{ animation: 'float-1 7.5s infinite ease-in-out 1.5s' }} className="flex flex-col items-center gap-1.5 scale-105 origin-left">
                    <FloatingLabel 
                      icon={ShieldCheck} 
                      title="Mobility" 
                      className="bg-white/90 backdrop-blur-xl border border-white/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)] text-slate-800 font-medium px-4 py-2.5 rounded-2xl" 
                    />
                  </div>
                </div>

                {/* Bottom Right: Endurance (Shown ONLY on Desktop) */}
                <div className="hidden lg:block absolute bottom-[14%] right-[10%] sm:right-[6%] z-20" style={{ opacity: 0, animation: 'fade-in-up 0.8s ease-out 0.7s forwards' }}>
                  <div style={{ animation: 'float-2 6s infinite ease-in-out 0.9s' }} className="flex flex-col items-center gap-1.5 scale-95 origin-top-left">
                    <FloatingLabel 
                      icon={Heart} 
                      title="Endurance" 
                      className="bg-white/80 backdrop-blur-md border border-white/40 shadow-lg text-slate-700 px-3.5 py-2 rounded-xl" 
                    />
                  </div>
                </div>

              </div>

              {/* --- Mobile Dedicated Pillars Section (Underneath Anatomy Model) --- */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-sm mx-auto mt-4 md:hidden">
                <FloatingLabel 
                  icon={Dumbbell} 
                  title="Strength" 
                  className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-slate-800 font-medium px-3.5 py-2.5 rounded-2xl justify-center w-full" 
                />
                <FloatingLabel 
                  icon={Zap} 
                  title="Power" 
                  className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-slate-800 font-medium px-3.5 py-2.5 rounded-2xl justify-center w-full" 
                />
                <FloatingLabel 
                  icon={Activity} 
                  title="Speed" 
                  className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-slate-800 font-medium px-3.5 py-2.5 rounded-2xl justify-center w-full" 
                />
                <FloatingLabel 
                  icon={ShieldCheck} 
                  title="Mobility" 
                  className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-slate-800 font-medium px-3.5 py-2.5 rounded-2xl justify-center w-full" 
                />
                <FloatingLabel 
                  icon={HeartPulse} 
                  title="Recovery" 
                  className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-slate-800 font-medium px-3.5 py-2.5 rounded-2xl justify-center w-full" 
                />
                <FloatingLabel 
                  icon={Heart} 
                  title="Endurance" 
                  className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-slate-800 font-medium px-3.5 py-2.5 rounded-2xl justify-center w-full" 
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── Features Grid ────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <div className="badge-teal mx-auto mb-4">Platform Features</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything you need to perform at your best
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
              A unified ecosystem of evidence-based tools — from body composition analysis to rehabilitation programming.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Link key={f.title} to={f.href} className="card-hover group">
                  <div className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center mb-5`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                  <div className="flex items-center gap-1 mt-5 text-teal-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Evidence Section ─────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge-teal mb-6">Our Standard</div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Built on science.<br />Designed for performance.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                TORIX is not a generic fitness app. Every calculation, protocol, and recommendation is grounded in peer-reviewed research and validated clinical practice.
              </p>
              <ul className="space-y-4">
                {principles.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.text} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{p.text}</span>
                    </li>
                  );
                })}
              </ul>
              <Link to="/about" className="btn-primary mt-10 w-fit">
                Our Methodology <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Metrics showcase */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'VO2max', value: '58.2', unit: 'ml/kg/min', icon: Activity, color: 'teal' },
                { label: 'Body Fat', value: '14.8', unit: '%', icon: Target, color: 'blue' },
                { label: 'FFMI', value: '22.4', unit: 'kg/m²', icon: Award, color: 'amber' },
                { label: 'Performance', value: '87', unit: '/ 100', icon: TrendingUp, color: 'green' },
              ].map((m) => {
                const Icon = m.icon;
                const colors: Record<string, string> = {
                  teal: 'bg-teal-50 text-teal-600',
                  blue: 'bg-blue-50 text-blue-600',
                  amber: 'bg-amber-50 text-amber-600',
                  green: 'bg-green-50 text-green-600',
                };
                return (
                  <div key={m.label} className="card">
                    <div className={`w-10 h-10 rounded-xl ${colors[m.color]} flex items-center justify-center mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">
                      {m.value}
                      <span className="text-sm font-normal text-slate-400 ml-1">{m.unit}</span>
                    </div>
                    <div className="text-sm text-slate-500 mt-1">{m.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Body Analysis CTA ─────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl overflow-hidden p-10 sm:p-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-white rounded-full -translate-x-1/3 translate-y-1/3" />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                  <Zap className="w-3.5 h-3.5" />
                  Complete Body Analysis — Free
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  Get your complete<br />performance report
                </h2>
                <p className="text-teal-100 text-base leading-relaxed max-w-md">
                  Enter your data once. Receive BMI, BMR, TDEE, body fat, FFMI, calorie targets, protein needs, hydration, and your personal performance score.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="/analysis"
                  className="inline-flex items-center gap-2 bg-white text-teal-600 font-semibold px-8 py-4 rounded-xl hover:bg-teal-50 transition-all duration-200 shadow-elevated hover:-translate-y-0.5 text-base"
                >
                  Start Free Analysis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container-max">
          <div className="text-center mb-14">
            <div className="badge-teal mx-auto mb-4">Trusted By Professionals</div>
            <h2 className="text-4xl font-bold text-slate-900">
              Used by clinicians and coaches
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 text-xs font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="section bg-white border-t border-slate-100">
        <div className="container-max text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-teal-500" />
            <span className="text-sm text-slate-500 font-medium">Join thousands of athletes and clinicians</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Ready to elevate your performance?
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
            Start with a free body analysis. No credit card. No commitments. Just science.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/sign-up" className="btn-primary text-base px-8 py-4">
              Create Free Account
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/exercises" className="btn-secondary text-base px-8 py-4">
              Browse Exercises
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}