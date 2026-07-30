import {
  Brain,
  Activity,
  ShieldCheck,
  Dumbbell,
} from "lucide-react";

export default function FeaturePanel() {
  const features = [
    {
      icon: Brain,
      title: "AI Performance Analysis",
      description: "Advanced athlete assessment powered by intelligent insights.",
    },
    {
      icon: Activity,
      title: "3D Biomechanics",
      description: "Visualize movement and body mechanics with precision.",
    },
    {
      icon: Dumbbell,
      title: "Performance Tracking",
      description: "Monitor progress, strength, and physical development.",
    },
    {
      icon: ShieldCheck,
      title: "Injury Prevention",
      description: "Identify movement risks before they become injuries.",
    },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold">
        TORIX PLATFORM
      </p>

      <h3 className="mt-3 text-3xl font-bold text-white">
        Sports Science
        <br />
        Powered by AI
      </h3>

      <div className="mt-8 space-y-5">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-400/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15">
                <Icon className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  {feature.title}
                </h4>

                <p className="mt-1 text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Designed for
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "Coaches",
            "Athletes",
            "Physiotherapists",
            "Sports Scientists",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}