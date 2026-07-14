import { useState, useEffect, useCallback } from 'react';
import { Users, LayoutDashboard, Trash2 } from 'lucide-react';
import { getAllUsers, deleteUser } from '../lib/auth';
import { getAllPlansForAdmin } from '../lib/storage';
import Header from '../components/Header';

export default function AdminDashboardPage() {
  const [users, setUsers] = useState([]);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    setLoading(true);
    const fetchedUsers = await getAllUsers();
    const fetchedPlans = await getAllPlansForAdmin();
    setUsers(fetchedUsers);
    setPlans(fetchedPlans);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleDeleteUser = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este usuário? O plano dele também será apagado.')) {
      await deleteUser(id);
      await loadData(); // recarrega
    }
  };

  const commonUsers = users.filter(u => u.role === 'user');
  
  if (loading) {
    return (
      <div className="min-h-screen bg-surface-900 flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-slate-700 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header isAdminView={true} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
            <LayoutDashboard size={20} className="text-white" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-100">Painel do Administrador</h2>
            <p className="text-slate-400 text-sm">Visão geral do sistema e usuários.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-card bg-gradient-to-br from-sky-500/10 to-sky-600/5 border border-sky-500/20 p-5">
            <div className="flex items-center gap-3 mb-2">
              <Users size={24} className="text-sky-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total de Usuários</span>
            </div>
            <div className="font-display text-3xl font-extrabold text-slate-100">
              {commonUsers.length}
            </div>
          </div>

          <div className="glass-card bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl text-emerald-400">🏃</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Planos Gerados</span>
            </div>
            <div className="font-display text-3xl font-extrabold text-slate-100">
              {plans.length}
            </div>
          </div>
        </div>

        {/* User List */}
        <div className="glass-card overflow-hidden mt-8">
          <div className="p-5 border-b border-white/5">
            <h3 className="font-display text-lg font-bold text-slate-100">Usuários Cadastrados</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/40 text-xs uppercase tracking-wider text-slate-400 border-b border-white/5">
                  <th className="px-5 py-3 font-semibold">Nome & Local</th>
                  <th className="px-5 py-3 font-semibold">E-mail</th>
                  <th className="px-5 py-3 font-semibold">Status do Plano</th>
                  <th className="px-5 py-3 font-semibold text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.02]">
                {commonUsers.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-5 py-8 text-center text-slate-500">
                      Nenhum usuário comum cadastrado ainda.
                    </td>
                  </tr>
                ) : (
                  commonUsers.map(user => {
                    const userPlan = plans.find(p => p.userId === user.id);
                    return (
                      <tr key={user.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-5 py-4">
                          <div className="font-medium text-slate-200">
                            {user.name} {user.age ? `(${user.age} anos)` : ''}
                          </div>
                          <div className="text-xs text-slate-500">
                            Desde {new Date(user.createdAt).toLocaleDateString('pt-BR')}
                          </div>
                          {user.city && user.state && (
                            <div className="text-xs font-medium text-emerald-400/80 mt-1">
                              📍 {user.city}, {user.state}
                            </div>
                          )}
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-300">
                          {user.email}
                        </td>
                        <td className="px-5 py-4">
                          {userPlan ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              Plano Ativo ({userPlan.plan.target.label})
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-500/10 text-slate-400 border border-slate-500/20">
                              Sem Plano
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-4 text-center">
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-400/10 rounded-lg transition-colors"
                            title="Excluir Usuário"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
