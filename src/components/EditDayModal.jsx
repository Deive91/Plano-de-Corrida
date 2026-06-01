import { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import { TRAINING_TYPES } from '../lib/trainingEngine';

export default function EditDayModal({ isOpen, onClose, onSave, dayData, weekNumber }) {
  const [type, setType] = useState('EASY');
  const [distance, setDistance] = useState(0);
  const [details, setDetails] = useState('');

  // Sincroniza o modal com os dados do dia que o usuário selecionou
  useEffect(() => {
    if (dayData && isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setType(dayData.type || 'EASY');
      setDistance(dayData.distance || 0);
      setDetails(dayData.details || '');
    }
  }, [dayData, isOpen]);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      type,
      distance: parseFloat(distance) || 0,
      details,
      warmup: null, // Limpa para não confundir caso troque o tipo de treino drasticamente
      cooldown: null,
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-surface-900 border border-white/10 rounded-2xl shadow-2xl p-6 animate-slide-up">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-display text-xl font-bold text-slate-100">Personalizar Treino</h3>
            <p className="text-slate-400 text-sm">Semana {weekNumber} · {dayData?.dayName}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-5">
          {/* Tipo de Treino */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Tipo de Treino
            </label>
            <div className="grid grid-cols-2 gap-2">
              {Object.values(TRAINING_TYPES).map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setType(t.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border transition-all text-sm text-left ${
                    type === t.id 
                      ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' 
                      : 'bg-slate-800/50 border-white/5 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-lg">{t.emoji}</span>
                  <span className="font-semibold">{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Distância */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Distância (Km)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                value={distance}
                onChange={(e) => {
                  const newDist = e.target.value;
                  setDistance(newDist);
                  
                  // Tenta atualizar automaticamente a distância na descrição para facilitar
                  if (details) {
                    const oldDist = distance;
                    if (oldDist) {
                      const regex1 = new RegExp(`${oldDist} km`, 'g');
                      const regex2 = new RegExp(`${oldDist}km`, 'g');
                      let newDetails = details.replace(regex1, `${newDist} km`).replace(regex2, `${newDist}km`);
                      setDetails(newDetails);
                    }
                  }
                }}
                disabled={type === 'REST' || type === 'STRENGTH'}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />
            </div>
          </div>

          {/* Descrição Detalhada */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">
              Instruções / Descrição
            </label>
            <textarea
              rows="3"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Ex: 5km ritmo leve focando na respiração..."
              className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
            />
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/5 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl bg-slate-800 text-slate-300 font-medium hover:bg-slate-700 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 text-slate-900 font-bold hover:bg-emerald-400 transition-colors"
            >
              <Save size={18} />
              Salvar Treino
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
