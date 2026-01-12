"use client";

const bgColors = {
  blue: "bg-blue-500/10",
  pink: "bg-pink-500/10",
  indigo: "bg-indigo-500/10",
  teal: "bg-teal-500/10",
  emerald: "bg-emerald-500/10",
  amber: "bg-amber-500/10",
  orange: "bg-orange-500/10",
  cyan: "bg-cyan-500/10",
  purple: "bg-purple-500/10",
};

const borderColors = {
  blue: "border-blue-500/20",
  pink: "border-pink-500/20",
  indigo: "border-indigo-500/20",
  teal: "border-teal-500/20",
  emerald: "border-emerald-500/20",
  amber: "border-amber-500/20",
  orange: "border-orange-500/20",
  cyan: "border-cyan-500/20",
  purple: "border-purple-500/20",
};

const textColors = {
  blue: "text-blue-500",
  pink: "text-pink-500",
  indigo: "text-indigo-500",
  teal: "text-teal-500",
  emerald: "text-emerald-500",
  amber: "text-amber-500",
  orange: "text-orange-500",
  cyan: "text-cyan-500",
  purple: "text-purple-500",
};

export default function SectionHeader({ title, description, icon: Icon, color = "blue" }) {
  const bgClass = bgColors[color] || bgColors.blue;
  const borderClass = borderColors[color] || borderColors.blue;
  const textClass = textColors[color] || textColors.blue;

  return (
    <div className="flex items-center gap-4 mb-8">
      <div className={`w-14 h-14 ${bgClass} rounded-2xl flex items-center justify-center ${textClass} border ${borderClass}`}>
        <Icon size={28} />
      </div>
      <div>
        <h2 className="text-4xl font-black text-white tracking-tight">{title}</h2>
        <p className="text-slate-400 font-medium">{description}</p>
      </div>
    </div>
  );
}
