import { TRAINING_TYPES } from '../lib/trainingEngine';

/**
 * Visualização do plano em formato de calendário (grade semanal).
 */
export default function CalendarView({ weeks, progress }) {
  const dayHeaders = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

  const typeColorClass = {
    EASY: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
    LONG: 'bg-violet-500/15 border-violet-500/30 text-violet-400',
    INTERVAL: 'bg-rose-500/15 border-rose-500/30 text-rose-400',
    TEMPO: 'bg-sky-500/15 border-sky-500/30 text-sky-400',
    REST: 'bg-slate-700/20 border-slate-600/20 text-slate-500',
    STRENGTH: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
  };

  return (
    <div className="space-y-4">
      {/* Legenda */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.values(TRAINING_TYPES).map((t) => (
          <span
            key={t.id}
            className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full border training-${t.id.toLowerCase()}`}
          >
            <span>{t.emoji}</span>
            <span>{t.name}</span>
          </span>
        ))}
      </div>

      {/* Grid de calendário */}
      <div className="glass-card overflow-hidden">
        {/* Header dos dias */}
        <div className="grid grid-cols-8 border-b border-white/5">
          <div className="p-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Sem
          </div>
          {dayHeaders.map((d) => (
            <div
              key={d}
              className="p-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Semanas */}
        {weeks.map((week) => (
          <div
            key={week.weekNumber}
            className="grid grid-cols-8 border-b border-white/[0.03] last:border-b-0 hover:bg-white/[0.01] transition-colors"
          >
            {/* Número da semana */}
            <div className="p-2 flex items-center justify-center">
              <span className="text-xs font-bold text-slate-400">
                {week.isRecoveryWeek ? '🔄' : week.isTaperWeek ? '🏁' : `S${week.weekNumber}`}
              </span>
            </div>

            {/* Dias */}
            {week.days.map((day) => {
              const isCompleted =
                progress?.[week.weekNumber]?.[day.dayIndex] || false;
              const colors = typeColorClass[day.type] || typeColorClass.REST;
              const info = TRAINING_TYPES[day.type];

              return (
                <div key={day.dayIndex} className="p-1.5">
                  <div
                    className={`calendar-day border ${colors} ${
                      isCompleted ? 'ring-1 ring-emerald-400/50 opacity-60' : ''
                    }`}
                    title={`${day.dayName}: ${info?.name || ''} ${day.distance > 0 ? `— ${day.distance} km` : ''}`}
                  >
                    <span className="text-base leading-none">{info?.emoji}</span>
                    {day.distance > 0 && (
                      <span className="text-[10px] font-bold opacity-80">
                        {day.distance}km
                      </span>
                    )}
                    {isCompleted && (
                      <span className="text-[10px] text-emerald-400">✓</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
