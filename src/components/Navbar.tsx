import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import torixLogo from "../assets/torix-logo.png";

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Calculators', href: '/calculators' },
  { label: 'Exercise Library', href: '/exercises' },
  { label: 'Rehabilitation', href: '/rehabilitation' },
  { label: 'Nutrition', href: '/nutrition' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-100'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
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

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.href
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/sign-in"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-all"
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="btn-primary text-sm py-2.5 px-5"
              >
                Get Started
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-white shadow-elevated border-b border-slate-100 animate-fade-in">
            <nav className="flex flex-col py-4 px-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 mt-2 flex flex-col gap-2">
                <Link to="/sign-in" className="btn-secondary text-center justify-center">
                  Sign In
                </Link>
                <Link to="/sign-up" className="btn-primary text-center justify-center">
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}