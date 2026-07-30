import { LucideIcon } from "lucide-react";

interface FloatingLabelProps {
  icon: LucideIcon;
  title: string;
  className: string;
}

export default function FloatingLabel({
  icon: Icon,
  title,
  className,
}: FloatingLabelProps) {
  return (
    <div
      className={`absolute ${className} hidden lg:flex items-center gap-3 rounded-2xl border border-white/10 bg-white/70 backdrop-blur-xl px-4 py-3 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10">
        <Icon className="h-5 w-5 text-teal-500" />
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-800">
          {title}
        </p>

        <div className="mt-1 h-[2px] w-12 rounded-full bg-teal-400" />
      </div>
    </div>
  );
}