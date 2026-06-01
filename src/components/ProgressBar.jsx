/**
 * Barra de progresso animada com porcentagem.
 */
export default function ProgressBar({ percentage, label = 'Progresso Geral' }) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300">{label}</span>
        <span className="text-sm font-bold text-emerald-400">{percentage}%</span>
      </div>
      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 progress-shimmer transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
