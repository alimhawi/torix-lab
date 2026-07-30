import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Dumbbell } from 'lucide-react';

export default function NotFound() {
  return (
    <main 
      className="min-h-screen bg-surface flex items-center justify-center p-4 sm:p-6 lg:p-8 page-enter"
      aria-labelledby="not-found-title"
    >
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-soft border border-slate-100 text-center space-y-6">
        
        {/* Large Heading 404 Visual Display */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-100">
            <span className="text-4xl font-extrabold text-teal-600 tracking-tight">
              404
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-3">
          <h1 
            id="not-found-title" 
            className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
          >
            Page Not Found
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            The page you're looking for doesn't exist, may have been moved, or the URL is incorrect.
          </p>
          <p className="text-xs font-semibold text-teal-600">
            Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            to="/"
            aria-label="Go to Home page"
            className="btn-primary w-full justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white shadow-teal flex items-center px-5 py-2.5 rounded-xl font-medium transition-all"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>

          <Link
            to="/exercises"
            aria-label="Browse Exercise Library"
            className="btn-secondary w-full justify-center gap-2 flex items-center px-5 py-2.5 rounded-xl font-medium transition-all"
          >
            <Dumbbell className="w-4 h-4" />
            Browse Exercise Library
          </Link>
        </div>

      </div>
    </main>
  );
}