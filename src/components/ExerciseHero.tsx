import React from 'react';
import { Heart } from 'lucide-react';

interface ExerciseHeroProps {
  title: string;
  image: string;
  category: string;
  equipment: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onClose: () => void;
}

export default function ExerciseHero({
  title,
  image,
  category,
  equipment,
  isFavorite,
  onToggleFavorite,
  onClose,
}: ExerciseHeroProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6">
        <div className="flex items-center justify-between sm:justify-start gap-6 min-w-0">
          <img
            src="/logos/torix-header.svg"
            alt="Torix Logo"
            className="h-10 sm:h-16 md:h-20 w-auto flex-shrink-0 object-contain"
          />
          <div className="flex sm:hidden items-center gap-2 flex-shrink-0">
            <button
              onClick={onToggleFavorite}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-500'}`} />
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="min-w-0 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
          <span className="font-bold text-slate-500 text-xs sm:text-sm">
            {title}
          </span>
          <span className="text-slate-400 text-xs mx-1">•</span>
          <span className="font-normal text-slate-500 text-xs">
            {category}
          </span>
          <span className="text-slate-400 text-xs mx-1">•</span>
          <span className="font-normal text-slate-500 text-xs">
            {equipment}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 flex-shrink-0 ml-4">
          <button
            onClick={onToggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-500'}`} />
          </button>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="bg-white py-3 px-6 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-[620px] w-full object-contain bg-transparent"
        />
      </div>
    </div>
  );
}