// SignUp.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, AlertCircle, User, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import torixLogo from "../assets/torix-logo.png";

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!name || !email) {
      setError('Please fill out your name and email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (authError) {
        if (authError.message.includes('already registered')) {
          setError('An account with this email address already exists.');
        } else {
          setError(authError.message);
        }
        setLoading(false);
        return;
      }

      if (authData.user) {
        const { error: profileError } = await supabase.from('profiles').insert([
          {
            user_id: authData.user.id,
            full_name: name,
          },
        ]);

        if (profileError) {
          console.error('Profile creation error:', profileError);
        }
      }

      if (authData.session) {
        navigate('/dashboard');
      } else {
        setSuccessMessage('Account created! Please check your email to confirm your account.');
        setLoading(false);
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
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

              
            </div>
          </Link>
        </div>

        <div className="card shadow-elevated">
          <div className="mb-7">
            <h1 className="text-2xl font-bold text-slate-900 mb-1">Create your account</h1>
            <p className="text-slate-500 text-sm">Start your performance journey — free</p>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-100 rounded-xl mb-5 animate-fade-in">
              <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
              <span className="text-sm text-rose-700">{error}</span>
            </div>
          )}

          {successMessage && (
            <div className="flex items-center gap-2 p-3 bg-teal-50 border border-teal-100 rounded-xl mb-5 animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span className="text-sm text-teal-800">{successMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="label">Full name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text" required value={name} onChange={e => setName(e.target.value)}
                  className="input pl-11" placeholder="Alex Johnson"
                />
              </div>
            </div>

            <div>
              <label className="label">Email address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  className="input pl-11" placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="label">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type={showPass ? 'text' : 'password'} required value={password} onChange={e => setPassword(e.target.value)}
                  className="input pl-11 pr-11" placeholder="At least 6 characters"
                />
                <button
                  type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit" disabled={loading}
              className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating account...
                </span>
              ) : 'Create Free Account'}
            </button>
          </form>

          <p className="text-sm text-center text-slate-500 mt-6">
            Already have an account?{' '}
            <Link to="/sign-in" className="text-teal-600 font-medium hover:text-teal-700">
              Sign in
            </Link>
          </p>
        </div>

        <p className="text-xs text-center text-slate-400 mt-6">
          By creating an account, you agree to our{' '}
          <Link to="/" className="text-slate-500 hover:text-teal-600">Terms</Link>
          {' '}and{' '}
          <Link to="/" className="text-slate-500 hover:text-teal-600">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}