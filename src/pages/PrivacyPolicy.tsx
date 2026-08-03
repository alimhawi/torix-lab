import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
              <p className="text-sm text-slate-500 mt-0.5">Last updated: July 30, 2026</p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed">
            At <strong className="text-slate-900">TORIX LAB</strong>, managed by Ali Mhawi, we respect your privacy and are committed to protecting your personal, athletic, and clinical data. This Privacy Policy outlines how we collect, use, store, and safeguard your information when you use our evidence-based sports performance, exercise, rehabilitation, and nutrition platform.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">1</span>
              Introduction
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              TORIX LAB ("we," "our," or "us") provides a specialized digital platform designed for athletes, coaches, and clinicians. We prioritize transparency regarding data processing practices. By accessing or using our platform, web applications, calculators, and tracking tools, you acknowledge and agree to the data collection and handling practices described in this Privacy Policy.
            </p>
          </div>

          {/* Section 2 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">2</span>
              Information We Collect
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To deliver a comprehensive sports science and performance experience, we collect specific categories of user-provided and technical data. We do not collect sensitive demographic details or personal records beyond what is strictly necessary for athletic programming, body composition tracking, and clinical evaluations.
            </p>
          </div>

          {/* Section 3 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">3</span>
              Account Information
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              When you register for a TORIX LAB account, we collect your full name, email address, and authentication credentials. This information is securely processed and managed via Supabase infrastructure to maintain your session, secure user profiles, and provide access to your personal dashboard.
            </p>
          </div>

          {/* Section 4 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">4</span>
              Body Measurements and Assessment Data
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our platform allows you to record physical metrics—such as body weight, height, body fat percentage, girth measurements, and orthopedic physical assessment outcomes. This data is processed strictly to generate custom fitness programs, body recomposition tracking, and clinical evaluation records.
            </p>
          </div>

          {/* Section 5 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">5</span>
              Calculator Inputs and Results
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              When you utilize TORIX performance calculators (such as 1-rep max estimators, energy expenditure models, and ratio calculations), we store the numerical inputs and generated output results within your account session or profile history to help you review historical performance trends.
            </p>
          </div>

          {/* Section 6 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">6</span>
              Training Programs
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We collect data related to your custom training schedules, foundation phase tracking, strength progression logs, and exercise frequency parameters based on recognized sports science principles (such as NSCA and NASM guidelines).
            </p>
          </div>

          {/* Section 7 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">7</span>
              Exercise Library Usage
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Interactions with our comprehensive exercise library—including favorite movements, custom exercise notes, and filtering selections—are logged to customize your workflow and improve accessibility across desktop and mobile devices.
            </p>
          </div>

          {/* Section 8 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">8</span>
              Nutrition Information
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Data entered into our nutrition modules—including dietary preferences, caloric targets, macro-nutrient distributions, and supplement logs (e.g., creatine and meal planning data)—is stored to provide tailored athletic nutritional strategies.
            </p>
          </div>

          {/* Section 9 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">9</span>
              Rehabilitation Information
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We collect injury tracking details, movement impairment notes, and orthopedic rehabilitation protocols entered by clinicians or users to monitor recovery milestones and physical therapy progress over time.
            </p>
          </div>

          {/* Section 10 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">10</span>
              Analytics and Cookies
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              TORIX LAB utilizes essential cookies, local storage, and standard web telemetry to maintain authenticated sessions, remember user interface preferences, and analyze aggregate platform performance to ensure seamless operational reliability.
            </p>
          </div>

          {/* Section 11 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">11</span>
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-slate-600 text-sm space-y-2 leading-relaxed">
              <li>To provide, maintain, and personalize the TORIX LAB platform and user dashboards.</li>
              <li>To calculate and process accurate sports science metrics, nutritional breakdowns, and training protocols.</li>
              <li>To authenticate user identity and secure accounts against unauthorized access.</li>
              <li>To communicate important service updates, security notifications, or technical announcements.</li>
            </ul>
          </div>

          {/* Section 12 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">12</span>
              Data Security
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We implement industry-standard administrative, physical, and technical security measures—including encrypted HTTPS connections, secure token-based authentication via Supabase, and role-based database access controls—to protect your information from unauthorized disclosure or alteration.
            </p>
          </div>

          {/* Section 13 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">13</span>
              Data Retention
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We retain your personal data, performance history, and profile records for as long as your account remains active or as needed to provide you with platform services. You may request account closure and complete data purging at any time.
            </p>
          </div>

          {/* Section 14 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">14</span>
              Third-Party Services
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              TORIX LAB integrates with trusted third-party cloud infrastructure providers (specifically Supabase for database management and user authentication) which adhere to stringent data protection standards and compliance protocols.
            </p>
          </div>

          {/* Section 15 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">15</span>
              Children's Privacy
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              TORIX LAB is a professional sports science and clinical platform intended for adult athletes, coaches, and educational or clinical practitioners. We do not knowingly collect personal information from individuals under the age of 18 without parental or institutional consent.
            </p>
          </div>

          {/* Section 16 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">16</span>
              International Users
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Because TORIX LAB operates as a web-based platform, data may be hosted and processed on secure cloud servers located globally. By using our platform, you consent to the transfer and processing of your information across international borders in compliance with cloud security standards.
            </p>
          </div>

          {/* Section 17 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">17</span>
              User Rights
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              You maintain full rights to access, correct, update, or request the permanent deletion of your personal account data and associated metrics. You can manage most profile information directly through your account dashboard or by contacting support.
            </p>
          </div>

          {/* Section 18 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">18</span>
              Changes to this Privacy Policy
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We may update this Privacy Policy periodically to reflect new platform features, technical updates, or regulatory adjustments. When changes are made, the "Last updated" date at the top of this policy will be revised accordingly.
            </p>
          </div>

          {/* Section 19 */}
          <div className="card shadow-soft space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-lg text-sm flex items-center justify-center font-semibold">19</span>
              Contact Information
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your data privacy practices on TORIX LAB, please reach out to platform management:
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 space-y-1">
              <p><strong className="text-slate-900">Platform:</strong> TORIX LAB</p>
              <p><strong className="text-slate-900">Managed By:</strong> Ali Mhawi</p>
              <p><strong className="text-slate-900">Support & Inquiries:</strong> Accessible via platform social handles or direct administrative channels.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}