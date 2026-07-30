import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';
import { site } from '../config/site';
import torixLogo from "../assets/torix-logo.png";

const footerLinks = {
  Platform: [
    { label: 'Exercise Library', href: '/exercises' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Rehabilitation', href: '/rehabilitation' },
    { label: 'Nutrition', href: '/nutrition' },
    { label: 'Body Analysis', href: '/analysis' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Sign Up', href: '/sign-up' },
    { label: 'Sign In', href: '/sign-in' },
  ],
  Resources: [
    { label: 'Evidence Base', href: '/evidence-base' },
    { label: 'Methodology', href: '/methodology' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
};

const socials = [
  {
    icon: Instagram,
    href: site.instagram || 'https://www.instagram.com/at.mhawi/',
    label: 'Instagram',
  },
  {
    icon: Linkedin,
    href: site.linkedin || 'https://jo.linkedin.com/in/ali-mhawi-190265257',
    label: 'LinkedIn',
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 group mb-4 w-fit">
              <div className="w-10 h-8 bg-teal-500 rounded-lg flex items-center justify-center shadow-teal group-hover:scale-105 transition-transform">
                <img
                  src={torixLogo}
                  alt="TORIX LAB"
                  className="w-9 h-7 object-contain brightness-0 invert"
                />
              </div>

              <div className="flex flex-col leading-none">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-bold tracking-[0.09em] text-slate-900">
                    TORIX
                  </span>
                  <span className="text-sm font-medium tracking-wide text-slate-500">
                    LAB
                  </span>
                </div>

                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Managed by <span className="font-bold text-teal-600">AT</span> Ali Mhawi
                </span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Evidence-based Sports Performance, Exercise, Rehabilitation, and Human Performance platform for athletes and clinicians.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-500 hover:text-teal-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} TORIX. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse-slow" />
            <span className="text-xs text-slate-400">Evidence-Based Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}