import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-surface py-16 px-4 sm:px-6 lg:px-8">
      <div className="container-max max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="card shadow-elevated mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
              <p className="text-sm text-slate-500 mt-0.5">Last updated: July 30, 2026</p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed">
            Welcome to <strong className="text-slate-900">TORIX LAB</strong>, managed by Ali Mhawi. These Terms of Service govern your access to and use of our sports science platform, including our exercise library, training programs, rehabilitation modules, nutrition tracking, body analysis tools, and evidence-based calculators. By accessing or using TORIX LAB, you agree to be bound by these terms.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">1</span>
              Acceptance of Terms
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              By registering for an account, browsing our exercise database, utilizing our calculators, or interacting with any feature of TORIX LAB, you enter into a legally binding agreement with us. If you do not agree to all of these terms, you must discontinue use of the platform immediately.
            </p>
          </div>

          {/* Section 2 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">2</span>
              Eligibility
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              TORIX LAB is intended for use by adult athletes, fitness professionals, coaches, and clinical practitioners who are at least 18 years of age. By using the platform, you represent and warrant that you meet all eligibility requirements and possess the legal capacity to enter into these terms.
            </p>
          </div>

          {/* Section 3 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">3</span>
              User Accounts
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To unlock full dashboard functionality, training management, and progress tracking, you must register for a user account through our secure authentication system. You are entirely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
            </p>
          </div>

          {/* Section 4 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">4</span>
              Acceptable Use
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              You agree to use TORIX LAB strictly for lawful purposes related to sports science, training, coaching, and rehabilitation. You agree not to reverse engineer platform code, scrape the exercise library, introduce malicious software, or attempt unauthorized access to other user accounts or our Supabase database infrastructure.
            </p>
          </div>

          {/* Section 5 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">5</span>
              Intellectual Property
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              All platform design, branding elements, custom software architecture, exercise execution algorithms, text content, and interface layouts associated with TORIX LAB are the exclusive intellectual property of platform management. Unauthorized reproduction or commercial distribution is strictly prohibited.
            </p>
          </div>

          {/* Section 6 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">6</span>
              Medical Disclaimer
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              The training programs, rehabilitation protocols, nutrition plans, body analysis metrics, and calculator outputs provided on TORIX LAB are designed based on established sports science principles (such as NSCA and NASM guidelines). However, they do not constitute formal medical treatment or clinical prescription.
            </p>
          </div>

          {/* Section 7 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">7</span>
              No Professional Medical Advice
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              TORIX LAB is not a healthcare provider. Always consult with a qualified physician, physical therapist, or registered dietitian before beginning any new rigorous exercise regimen, rehabilitation program, or dietary modification, especially if you have pre-existing injuries or health conditions.
            </p>
          </div>

          {/* Section 8 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">8</span>
              User Responsibilities
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Users are solely responsible for executing physical movements safely, monitoring their own physical exertion levels, and verifying the accuracy of personal metrics entered into our platform calculators and assessment tools.
            </p>
          </div>

          {/* Section 9 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">9</span>
              Accuracy of Information
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              While we strive to provide precise, evidence-based calculations and sports science references, TORIX LAB makes no warranties regarding the absolute error-free nature of calculation results or algorithmic estimates. All tools are intended to assist—not replace—professional athletic assessment.
            </p>
          </div>

          {/* Section 10 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">10</span>
              Limitation of Liability
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To the maximum extent permitted by law, TORIX LAB and its management shall not be held liable for any direct, indirect, incidental, or consequential injuries, damages, or losses resulting from physical training activities, use of calculators, or reliance on platform content.
            </p>
          </div>

          {/* Section 11 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">11</span>
              Third-Party Links
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our platform may contain links to external websites, social media profiles, or professional resources. TORIX LAB assumes no responsibility for the content, privacy policies, or practices of any third-party websites.
            </p>
          </div>

          {/* Section 12 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">12</span>
              Account Suspension or Termination
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We reserve the right to suspend or terminate your account and access to TORIX LAB immediately, without prior notice or liability, if you breach any provision of these Terms of Service or engage in abusive platform behavior.
            </p>
          </div>

          {/* Section 13 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">13</span>
              Changes to the Terms
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We reserve the right to modify or replace these Terms of Service at any time. Continued use of TORIX LAB following any modifications constitutes your acceptance of the revised terms.
            </p>
          </div>

          {/* Section 14 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">14</span>
              Governing Law
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              These terms shall be interpreted and governed in accordance with applicable local and international digital service standards, without regard to conflict of law principles.
            </p>
          </div>

          {/* Section 15 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">15</span>
              Contact Information
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              If you have any questions or inquiries regarding these Terms of Service, please contact platform administration:
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 space-y-1">
              <p><strong className="text-slate-900">Platform:</strong> TORIX LAB</p>
              <p><strong className="text-slate-900">Managed By:</strong> Ali Mhawi</p>
              <p><strong className="text-slate-900">Support:</strong> Accessible via official platform channels and administrative contacts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}