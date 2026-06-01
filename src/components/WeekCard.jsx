import { useState } from 'react';
import { ChevronDown, ChevronUp, Edit2 } from 'lucide-react';
import TrainingBadge from './TrainingBadge';

/**
 * Card de uma semana com lista de treinos e checkboxes.
 * Funciona como um accordion expandível.
 */
export default function WeekCard({ week, progress, onToggleDay, isCurrentWeek, onEditDay }) {
  const [expanded, setExpanded] = useState(isCurrentWeek);

  // Calcular progresso da semana
  const trainingDays = week.days.filter((d) => d.type !== 'REST');
  const completedDays = trainingDays.filter(
    (d) => progress?.[week.weekNumber]?.[d.dayIndex]
  ).length;
  const weekProgress =
    trainingDays.length > 0
      ? Math.round((completedDays / trainingDays.length) * 100)
      : 0;

  return (
    <div
      className={`glass-card overflow-hidden transition-all duration-300 ${
        isCurrentWeek ? 'ring-1 ring-emerald-500/30' : ''
      }`}
    >
      {/* Header da semana */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-3">
          {isCurrentWeek && (
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-soft" />
          )}
          <div className="text-left">
            <h3 className="font-display text-base font-bold text-slate-100">
              {week.label}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {week.totalKm} km · {trainingDays.length} treinos
              {week.isRecoveryWeek && ' · 🔄 Recuperação'}
              {week.isTaperWeek && ' · 🏁 Taper'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Mini progress */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${weekProgress}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-slate-500 w-8">
              {weekProgress}%
            </span>
          </div>
          {expanded ? (
            <ChevronUp size={18} className="text-slate-500" />
          ) : (
            <ChevronDown size={18} className="text-slate-500" />
          )}
        </div>
      </button>

      {/* Conteúdo expandido */}
      {expanded && (
        <div className="border-t border-white/5 animate-fade-in">
          {week.days.map((day) => {
            const isCompleted = progress?.[week.weekNumber]?.[day.dayIndex] || false;
            const isRest = day.type === 'REST';

            return (
              <div
                key={day.dayIndex}
                className={`group flex flex-col gap-2 px-4 sm:px-5 py-4 border-b border-white/[0.03] last:border-b-0 transition-all duration-200 ${
                  isCompleted ? 'bg-emerald-500/[0.04]' : ''
                } ${isRest ? 'opacity-50' : 'hover:bg-white/[0.02]'}`}
              >
                {/* Linha Principal */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Checkbox */}
                  {!isRest ? (
                    <input
                      type="checkbox"
                      className="training-checkbox mt-0.5"
                      checked={isCompleted}
                      onChange={(e) =>
                        onToggleDay(week.weekNumber, day.dayIndex, e.target.checked)
                      }
                    />
                  ) : (
                    <div className="w-[22px] h-[22px] flex-shrink-0" />
                  )}

                  {/* Dia da semana */}
                  <span
                    className={`text-sm font-semibold w-16 flex-shrink-0 ${
                      isCompleted ? 'text-emerald-400 line-through' : 'text-slate-300'
                    }`}
                  >
                    {day.dayName.slice(0, 3)}
                  </span>

                  {/* Badge de tipo */}
                  <TrainingBadge type={day.type} size="sm" />

                  {/* Botão Editar e Distância */}
                  <div className="ml-auto flex items-center gap-3">
                    {!isCompleted && onEditDay && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditDay(week.weekNumber, day.dayIndex, day);
                        }}
                        className="p-1.5 text-slate-500 hover:text-amber-400 hover:bg-amber-400/10 rounded-md transition-all sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 print:hidden"
                        title="Personalizar Treino"
                      >
                        <Edit2 size={14} />
                      </button>
                    )}

                    {day.distance > 0 && (
                      <div className="flex items-center gap-2">
                        {day.targetPace && (
                          <span className="text-xs font-semibold bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded-md flex items-center gap-1" title="Ritmo ideal">
                            ⏱️ {day.targetPace}
                          </span>
                        )}
                        <span
                          className={`text-sm font-bold flex-shrink-0 ${
                            isCompleted ? 'text-emerald-600' : 'text-slate-300'
                          }`}
                        >
                          {day.distance} km
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Detalhes e Protocolos (Ocupa o espaço à direita do checkbox/dia) */}
                <div className="pl-[42px] sm:pl-[102px] mt-1 space-y-2">
                  <p
                    className={`text-sm whitespace-pre-wrap ${
                      isCompleted ? 'text-slate-500 line-through' : 'text-slate-300'
                    }`}
                  >
                    {day.details}
                  </p>

                  {/* Aquecimento e Desaquecimento */}
                  {(day.warmup || day.cooldown) && !isCompleted && (
                    <div className="bg-black/20 rounded-lg p-3 mt-2 space-y-2 border border-white/5">
                      {day.warmup && (
                        <div className="flex items-start gap-2">
                          <span className="text-amber-500 mt-0.5">🔥</span>
                          <div>
                            <span className="text-xs font-bold text-amber-500/90 uppercase tracking-wider block">Aquecimento</span>
                            <span className="text-xs text-slate-400">{day.warmup}</span>
                          </div>
                        </div>
                      )}
                      
                      {day.warmup && day.cooldown && <div className="h-px w-full bg-white/5" />}

                      {day.cooldown && (
                        <div className="flex items-start gap-2">
                          <span className="text-cyan-500 mt-0.5">🧊</span>
                          <div>
                            <span className="text-xs font-bold text-cyan-500/90 uppercase tracking-wider block">Desaquecimento</span>
                            <span className="text-xs text-slate-400">{day.cooldown}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
