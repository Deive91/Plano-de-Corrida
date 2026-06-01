/**
 * Card de métrica individual (km, treinos, etc).
 */
export default function StatCard({ icon, label, value, color = 'emerald' }) {
  const colorMap = {
    emerald: 'from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 text-emerald-400',
    violet: 'from-violet-500/10 to-violet-600/5 border-violet-500/20 text-violet-400',
    sky: 'from-sky-500/10 to-sky-600/5 border-sky-500/20 text-sky-400',
    amber: 'from-amber-500/10 to-amber-600/5 border-amber-500/20 text-amber-400',
    rose: 'from-rose-500/10 to-rose-600/5 border-rose-500/20 text-rose-400',
  };

  const classes = colorMap[color] || colorMap.emerald;

  return (
    <div
      className={`glass-card bg-gradient-to-br ${classes} border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </span>
      </div>
      <div className="font-display text-3xl font-extrabold text-slate-100">
        {value}
      </div>
    </div>
  );
}
