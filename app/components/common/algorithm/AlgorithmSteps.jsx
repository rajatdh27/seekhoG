"use client";

const gradients = {
  blue: "from-blue-600 to-indigo-600",
  pink: "from-pink-600 to-rose-600",
  indigo: "from-indigo-600 to-purple-600",
  teal: "from-teal-600 to-cyan-600",
  emerald: "from-emerald-600 to-teal-600",
  amber: "from-amber-600 to-orange-600",
  orange: "from-orange-600 to-red-600",
  purple: "from-purple-600 to-pink-600",
};

const textColors = {
  blue: "text-blue-400",
  pink: "text-pink-400",
  indigo: "text-indigo-400",
  teal: "text-teal-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  orange: "text-orange-400",
  purple: "text-purple-400",
};

const borderColors = {
  blue: "border-blue-500/20",
  pink: "border-pink-500/20",
  indigo: "border-indigo-500/20",
  teal: "border-teal-500/20",
  emerald: "border-emerald-500/20",
  amber: "border-amber-500/20",
  orange: "border-orange-500/20",
  purple: "border-purple-500/20",
};

export default function AlgorithmSteps({ steps, color = "blue" }) {
  const gradient = gradients[color] || gradients.blue;
  const textColor = textColors[color] || textColors.blue;
  const borderColor = borderColors[color] || borderColors.blue;

  return (
    <div className={`bg-slate-950/50 border ${borderColor} rounded-[2rem] p-8`}>
      <h3 className={`text-2xl font-black ${textColor} mb-6`}>📖 How It Works</h3>
      <div className="space-y-4">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient} text-white flex items-center justify-center font-black text-sm shrink-0`}>
              {i + 1}
            </div>
            <p className="text-slate-300 font-medium pt-1">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
