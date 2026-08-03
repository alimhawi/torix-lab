import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, ChevronDown, X, Target, Zap, AlertCircle, TrendingUp, ArrowUpDown, Heart } from 'lucide-react';
import { exercises, type Exercise } from '../data/exercises';
import ExerciseHero from "../components/ExerciseHero.tsx";

const categories = [
  'All',
  'Warm-Up',
  'Upper Body',
  'Lower Body',
  'Core',
  'Mobility',
  'Plyometrics',
  'Rehabilitation',
  'Cool-Down',
];

const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const muscleGroups = [
  'All', 'Chest', 'Back', 'Shoulders', 'Biceps', 'Triceps',
  'Quadriceps', 'Hamstrings', 'Glutes', 'Calves', 'Core', 'Hip Flexors',
];

const difficultyColors: Record<Exercise['difficulty'], string> = {
  Beginner: 'badge-teal',
  Intermediate: 'badge-amber',
  Advanced: 'badge-rose',
};

interface ExerciseModalProps {
  exercise: Exercise;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

function ExerciseModal({ exercise, onClose, isFavorite, onToggleFavorite }: ExerciseModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-elevated max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up z-10">
        <div className="p-6 space-y-6">
          <ExerciseHero
            title={exercise.name}
            image={exercise.image}
            category={exercise.category}
            equipment={exercise.equipment}
            isFavorite={isFavorite}
            onToggleFavorite={() => onToggleFavorite(exercise.id)}
            onClose={onClose}
          />

          <div className="flex flex-wrap gap-2">
            <span className={`${difficultyColors[exercise.difficulty] || 'badge bg-slate-100'} badge`}>
              {exercise.difficulty}
            </span>
            {(exercise.primaryMuscles || []).map((m) => (
              <span key={m} className="badge bg-slate-100 text-slate-700">{m}</span>
            ))}
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">{exercise.description}</p>

          {(exercise.instructions?.length ?? 0) > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-3">
                <Target className="w-4 h-4 text-teal-500" />
                Instructions
              </h3>
              <ol className="space-y-2">
                {exercise.instructions.map((ins, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-600">
                    <span className="flex-shrink-0 w-5 h-5 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                    {ins}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {(exercise.commonMistakes?.length ?? 0) > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-3">
                <AlertCircle className="w-4 h-4 text-rose-500" />
                Common Mistakes
              </h3>
              <ul className="space-y-2">
                {exercise.commonMistakes.map((m, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            {(exercise.progressions?.length ?? 0) > 0 && (
              <div className="bg-teal-50 rounded-xl p-4">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-teal-800 mb-2">
                  <TrendingUp className="w-4 h-4" />
                  Progressions
                </h3>
                <ul className="space-y-1">
                  {exercise.progressions.map((p, i) => (
                    <li key={i} className="text-sm text-teal-700">{p}</li>
                  ))}
                </ul>
              </div>
            )}
            {(exercise.regressions?.length ?? 0) > 0 && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <ArrowUpDown className="w-4 h-4" />
                  Regressions
                </h3>
                <ul className="space-y-1">
                  {exercise.regressions.map((r, i) => (
                    <li key={i} className="text-sm text-slate-600">{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExerciseLibrary() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [muscle, setMuscle] = useState('All');
  const [selected, setSelected] = useState<Exercise | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('favorite_exercises');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('favorite_exercises', JSON.stringify(favorites));
    } catch (err) {
      console.error('Failed to save favorites:', err);
    }
  }, [favorites]);

  const toggleFavorite = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const resetFilters = () => {
    setCategory('All');
    setDifficulty('All');
    setMuscle('All');
    setShowFavoritesOnly(false);
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const selCat = category.trim().toLowerCase();
    const selDiff = difficulty.trim().toLowerCase();
    const selMuscle = muscle.trim().toLowerCase();

    return exercises.filter((e) => {
      const matchFav = !showFavoritesOnly || favorites.includes(e.id);
      const matchSearch =
        !q ||
        (e.name && e.name.toLowerCase().includes(q)) ||
        (e.category && e.category.toLowerCase().includes(q)) ||
        (e.equipment && e.equipment.toLowerCase().includes(q)) ||
        (Array.isArray(e.primaryMuscles) &&
          e.primaryMuscles.some((m) => m.toLowerCase().includes(q)));

      const exCat = (e.category || '').trim().toLowerCase();
      const matchCat = selCat === 'all' || exCat === selCat;

      const exDiff = (e.difficulty || '').trim().toLowerCase();
      const matchDiff = selDiff === 'all' || exDiff === selDiff;

      const matchMuscle =
        selMuscle === 'all' ||
        (Array.isArray(e.primaryMuscles) &&
          e.primaryMuscles.some((m) => m.trim().toLowerCase() === selMuscle));

      return matchFav && matchSearch && matchCat && matchDiff && matchMuscle;
    });
  }, [search, category, difficulty, muscle, showFavoritesOnly, favorites]);

  const activeFilters = [
    showFavoritesOnly && { label: 'Favorites Only', clear: () => setShowFavoritesOnly(false) },
    category !== 'All' && { label: `Category: ${category}`, clear: () => setCategory('All') },
    difficulty !== 'All' && { label: `Difficulty: ${difficulty}`, clear: () => setDifficulty('All') },
    muscle !== 'All' && { label: `Muscle: ${muscle}`, clear: () => setMuscle('All') },
  ].filter((f): f is { label: string; clear: () => void } => Boolean(f));

  return (
    <div className="min-h-screen bg-surface page-enter">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14 pt-28">
          <div className="badge-teal mb-4">Exercise Library</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Bodyweight Exercise Library
          </h1>
          <p className="text-slate-500 text-lg max-w-xl">
            A curated library of evidence-based bodyweight exercises with detailed instructions, progressions, and rehabilitation guidance.
          </p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        {/* Search + Filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by exercise name, muscle, or equipment..."
              className="input pl-11 pr-10"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`btn-secondary gap-2 ${showFilters ? 'border-teal-300 text-teal-700 bg-teal-50' : ''}`}
          >
            <Filter className="w-4 h-4" />
            Filters
            {activeFilters.length > 0 && (
              <span className="bg-teal-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {activeFilters.length}
              </span>
            )}
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div className="card mb-6 animate-fade-in">
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className="label">Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="select">
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Difficulty</label>
                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="select">
                  {difficulties.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Primary Muscle</label>
                <select value={muscle} onChange={(e) => setMuscle(e.target.value)} className="select">
                  {muscleGroups.map((m) => <option key={m}>{m}</option>)}
                </select>
              </div>
            </div>
            {activeFilters.length > 0 && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 mt-4 text-sm text-rose-600 hover:text-rose-700 font-medium transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Active Filter Chips */}
        {activeFilters.length > 0 && !showFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs text-slate-500 font-medium">Active Filters:</span>
            {activeFilters.map((filter) => (
              <span
                key={filter.label}
                className="inline-flex items-center gap-1 text-xs bg-teal-50 text-teal-700 border border-teal-200 px-2.5 py-1 rounded-full font-medium"
              >
                {filter.label}
                <button onClick={filter.clear} className="hover:text-teal-900 transition-colors">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            <button
              onClick={resetFilters}
              className="text-xs text-rose-600 hover:underline font-medium ml-1"
            >
              Reset
            </button>
          </div>
        )}

        {/* Category & Favorites Quick Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all duration-200 ${
              showFavoritesOnly
                ? 'bg-rose-500 text-white shadow-rose'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-rose-300 hover:text-rose-600'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${showFavoritesOnly ? 'fill-white' : ''}`} />
            Favorites ({favorites.length})
          </button>

          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategory(c);
                setShowFavoritesOnly(false);
              }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                category === c && !showFavoritesOnly
                  ? 'bg-teal-500 text-white shadow-teal'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-600'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-slate-500 mb-6">
          Showing <span className="font-semibold text-slate-900">{filtered.length}</span> exercises
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((ex) => {
              const isFav = favorites.includes(ex.id);
              return (
                <div
                  key={ex.id}
                  onClick={() => setSelected(ex)}
                  className="card-hover group cursor-pointer relative"
                >
                  <img
                    src="/logos/torix-mark-black.svg"
                    alt="Torix Mark"
                    className="absolute top-3 left-3 z-10 h-[18px] w-auto pointer-events-none"
                  />
                  <button
                    onClick={(e) => toggleFavorite(ex.id, e)}
                    aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:scale-110 transition-all text-slate-400 hover:text-rose-500"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFav ? 'fill-rose-500 text-rose-500' : 'text-slate-400 hover:text-rose-500'
                      }`}
                    />
                  </button>

                  <div className="bg-white rounded-xl h-32 flex items-center justify-center mb-4 border border-slate-100 overflow-hidden">
                    {ex.image ? (
                      <img
                        src={ex.image}
                        alt={ex.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center">
                        <Zap className="w-7 h-7 text-teal-500" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-2 mb-2 pr-6">
                    <h3 className="text-sm font-semibold text-slate-900 leading-snug">{ex.name}</h3>
                    <span className={`${difficultyColors[ex.difficulty] || 'badge bg-slate-100'} badge flex-shrink-0`}>
                      {ex.difficulty}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-3">{ex.category}</p>

                  <div className="flex flex-wrap gap-1">
                    {ex.primaryMuscles.slice(0, 2).map((m) => (
                      <span key={m} className="badge bg-slate-100 text-slate-600 text-xs">{m}</span>
                    ))}
                    {ex.primaryMuscles.length > 2 && (
                      <span className="badge bg-slate-100 text-slate-500 text-xs">+{ex.primaryMuscles.length - 2}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-slate-400" />
            </div>
            <h3 className="text-slate-900 font-semibold mb-2">No exercises found</h3>
            <p className="text-slate-500 text-sm mb-4">
              {showFavoritesOnly
                ? "You haven't added any exercises to your favorites yet."
                : "Try adjusting your search terms or clearing filters."}
            </p>
            {(search || activeFilters.length > 0) && (
              <button
                onClick={() => {
                  setSearch('');
                  resetFilters();
                }}
                className="btn-secondary"
              >
                Reset Search & Filters
              </button>
            )}
          </div>
        )}
      </div>

      {selected && (
        <ExerciseModal
          exercise={selected}
          onClose={() => setSelected(null)}
          isFavorite={favorites.includes(selected.id)}
          onToggleFavorite={(id) => toggleFavorite(id)}
        />
      )}
    </div>
  );
}