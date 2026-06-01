import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ adminOnly = false }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-surface-900 flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-slate-700 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  // Se não estiver logado, manda pro login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Se a rota for só para admin e o user for comum, manda pra home dele
  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  // Se a rota for comum e o user for admin, manda pro dashboard admin
  if (!adminOnly && user.role === 'admin') {
    return <Navigate to="/admin" replace />;
  }

  // Retorna a rota filha
  return <Outlet />;
}
