import { Activity, RotateCcw, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

/**
 * Header/Navbar da aplicação.
 */
export default function Header({ plan, onReset, isAdminView = false }) {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-surface-900/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <Activity size={20} className="text-white" />
            </div>
            <div>
              <h1 className="font-display text-lg font-bold tracking-tight text-slate-100">
                Plano<span className="text-emerald-400">DeCorrida</span>
              </h1>
            </div>
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-4">
            {/* Contexto Usuário Comum com Plano */}
            {!isAdminView && plan && user && (
              <div className="hidden sm:flex items-center gap-3 border-r border-white/10 pr-4 mr-1">
                <span className="text-sm text-slate-400">
                  {user.name} · {plan.target.fullLabel}
                </span>
                <button
                  onClick={() => {
                    const week1 = plan.weeks.find(w => w.weekNumber === 1);
                    if (week1) {
                      const trainingDays = week1.days.filter(d => d.type !== 'REST');
                      const completedCount = trainingDays.filter(d => plan.progress[1]?.[d.dayIndex]).length;
                      if (completedCount < trainingDays.length) {
                        alert("Você precisa completar todos os treinos da primeira semana antes de poder resetar seu plano.");
                        return;
                      }
                    }
                    onReset();
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-400 hover:text-amber-400 hover:bg-amber-400/10 transition-all duration-200"
                  title="Gerar novo plano"
                >
                  <RotateCcw size={16} />
                  <span className="hidden sm:inline">Resetar Plano</span>
                </button>
              </div>
            )}

            {/* Contexto Admin View */}
            {isAdminView && user && (
              <div className="hidden sm:flex items-center gap-3 border-r border-white/10 pr-4 mr-1">
                <span className="text-sm font-medium text-amber-400">Admin Logado</span>
              </div>
            )}

            {/* Logout Comum para todos que estiverem logados */}
            {user && (
              <button
                onClick={logout}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all duration-200"
                title="Sair do sistema"
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">Sair</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
