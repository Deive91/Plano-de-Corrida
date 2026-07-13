import { useState } from 'react';
import { WORKOUT_CATALOG } from '../lib/workoutCatalog';
import { TRAINING_TYPES } from '../lib/trainingEngine';
import TrainingBadge from './TrainingBadge';
import { BookOpen, Sparkles, ShieldCheck } from 'lucide-react';

export default function WorkoutCatalogTab() {
  const [activeLevel, setActiveLevel] = useState('beginner');

  const levels = [
    { id: 'beginner', label: 'Iniciante', count: 30, emoji: '🌱', desc: 'Base aeróbica, transição Run-Walk e fortalecimento articular.' },
    { id: 'intermediate', label: 'Intermediário', count: 30, emoji: '🏅', desc: 'Limiar de lactato, tiros de VO2 máx e resistência de velocidade.' },
    { id: 'advanced', label: 'Avançado', count: 30, emoji: '🏆', desc: 'Duplo limiar norueguês, simulação específica de ritmo e alta tolerância.' },
  ];

  const currentWorkouts = WORKOUT_CATALOG[activeLevel] || [];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Banner Explicativo */}
      <div className="glass-card p-5 sm:p-6 bg-gradient-to-r from-emerald-500/10 via-amber-500/10 to-violet-500/10 border-emerald-500/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
                Catálogo Científico de Corrida <Sparkles size={18} className="text-amber-400" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                90 protocolos esportivos especializados (30 por nível) aplicados de forma inteligente ao seu plano semanal.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 px-3 py-2 rounded-xl text-xs font-bold text-amber-300">
            <ShieldCheck size={16} className="text-amber-400 flex-shrink-0" />
            <span>Treino de Fortalecimento: Opcional às Segundas</span>
          </div>
        </div>
      </div>

      {/* Seletor de Níveis */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {levels.map((lvl) => {
          const isActive = activeLevel === lvl.id;
          return (
            <button
              key={lvl.id}
              onClick={() => setActiveLevel(lvl.id)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                isActive
                  ? 'bg-emerald-500/15 border-emerald-500/40 shadow-lg shadow-emerald-500/5'
                  : 'bg-slate-800/40 border-white/5 hover:border-white/10 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{lvl.emoji}</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-emerald-500 text-slate-900' : 'bg-slate-700 text-slate-300'
                }`}>
                  {lvl.count} Treinos
                </span>
              </div>
              <h4 className={`font-display font-bold text-base ${isActive ? 'text-emerald-400' : 'text-slate-200'}`}>
                {lvl.label}
              </h4>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                {lvl.desc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Destaque para o Treino de Segunda-feira (Opcional) */}
      <div className="glass-card p-4 bg-amber-500/5 border border-amber-500/20 flex items-start gap-3">
        <span className="text-2xl mt-0.5">💪</span>
        <div>
          <h5 className="font-display font-bold text-sm text-amber-300 flex items-center gap-2">
            Regra Universal do Plano: Segunda-feira de Fortalecimento (Opcional)
          </h5>
          <p className="text-xs text-slate-300 mt-1">
            Para <strong>todos os níveis (Iniciante, Intermediário e Avançado)</strong>, a Segunda-feira é reservada para o treino de <strong>Força, Mobilidade e Prevenção de Lesões</strong>. Ele é classificado como <strong>⭐ Opcional</strong>: se você executá-lo, ganha bônus no progresso da semana; se preferir descansar para recuperar da corrida longa de domingo, o seu 100% da semana não é prejudicado!
          </p>
        </div>
      </div>

      {/* Lista de Treinos da Categoria Selecionada */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {currentWorkouts.map((w, i) => {
          const typeInfo = TRAINING_TYPES[w.type] || {};
          return (
            <div
              key={w.id}
              className="glass-card p-4 hover:border-white/10 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold bg-white/10 text-slate-400 px-2 py-0.5 rounded">
                      #{i + 1}
                    </span>
                    <TrainingBadge type={w.type} size="sm" />
                  </div>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    {typeInfo.name || w.type}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-display font-bold text-slate-100 text-base sm:text-lg">
                    {w.title}
                  </h4>
                  {w.total_duration_minutes && (
                    <span className="text-xs font-semibold bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full whitespace-nowrap">
                      ⏱️ {w.total_duration_minutes} min
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  {w.description}
                </p>

                {w.phases && (
                  <div className="mt-2 space-y-1.5 bg-black/20 p-3 rounded-xl border border-white/5 text-xs text-slate-300">
                    <div>
                      <span className="text-amber-400 font-bold">🔥 Aquecimento:</span> {w.phases.warmup}
                    </div>
                    <div>
                      <span className="text-emerald-400 font-bold">🎯 Principal:</span> {w.phases.main_set}
                    </div>
                    <div>
                      <span className="text-cyan-400 font-bold">🧘 Volta à Calma:</span> {w.phases.cooldown}
                    </div>
                  </div>
                )}

                {w.physiological_goal && (
                  <div className="mt-2 pt-2 border-t border-white/5 text-xs text-slate-400">
                    <span className="text-purple-400 font-semibold">🔬 Objetivo Biológico:</span> {w.physiological_goal}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
