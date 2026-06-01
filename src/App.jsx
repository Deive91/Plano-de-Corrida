import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import { savePlan, loadPlan, clearPlan, toggleTrainingCompletion, updatePlanDay } from './lib/storage';

/**
 * Componente que gerencia o fluxo principal do usuário comum (Onboarding vs Dashboard).
 */
function MainFlow() {
  const { user } = useAuth();
  const [plan, setPlan] = useState(null);
  const [loadingPlan, setLoadingPlan] = useState(true);

  // Carregar plano salvo vinculado ao usuário
  useEffect(() => {
    async function fetchPlan() {
      if (user && user.role !== 'admin') {
        const saved = await loadPlan(user.id);
        if (saved) setPlan(saved);
      }
      setLoadingPlan(false);
    }
    fetchPlan();
  }, [user]);

  // Quando um novo plano é gerado
  const handlePlanGenerated = useCallback((newPlan) => {
    // UI Otimista: atualiza a tela instantaneamente
    setPlan(newPlan);
    // Firebase salva em background
    savePlan(newPlan, user.id).catch(console.error);
  }, [user]);

  // Toggle de um treino concluído
  const handleToggleDay = useCallback(
    (weekNumber, dayIndex, completed) => {
      // 1. UI Otimista: clona e atualiza a tela na mesma hora
      const optimisticPlan = {
        ...plan,
        progress: {
          ...plan.progress,
          [weekNumber]: {
            ...plan.progress[weekNumber],
            [dayIndex]: completed,
          },
        },
      };
      setPlan(optimisticPlan);

      // 2. Firebase salva em background
      toggleTrainingCompletion(plan, weekNumber, dayIndex, completed, user.id).catch(console.error);
    },
    [plan, user]
  );

  // Atualiza um treino específico (Edição)
  const handleUpdateDay = useCallback(
    (weekNumber, dayIndex, newDayData) => {
      // Dispara a promessa em background e atualiza o state quando ela resolver.
      // Como a edição de modal já é mais "pesada", a experiência não sofre tanto.
      // Se quisermos ser full otimistas, teríamos que recriar o cálculo de quilometragem da semana aqui.
      updatePlanDay(plan, weekNumber, dayIndex, newDayData, user.id).then(updated => {
        setPlan({ ...updated });
      }).catch(console.error);
    },
    [plan, user]
  );

  // Resetar e gerar novo plano
  const handleReset = useCallback(() => {
    if (window.confirm('Tem certeza que deseja gerar um novo plano? O plano atual será perdido.')) {
      setPlan(null); // Limpa a tela imediatamente
      clearPlan(user.id).catch(console.error); // Deleta do banco em background
    }
  }, [user]);

  if (loadingPlan) {
    return (
      <div className="min-h-screen bg-surface-900 flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-slate-700 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  // Se o admin acessar a raiz de alguma forma, mandar para o dashboard dele
  if (user && user.role === 'admin') {
    return <Navigate to="/admin" replace />;
  }

  if (!plan) {
    return <OnboardingPage onPlanGenerated={handlePlanGenerated} />;
  }

  return (
    <DashboardPage
      plan={plan}
      onToggleDay={handleToggleDay}
      onUpdateDay={handleUpdateDay}
      onReset={handleReset}
    />
  );
}

/**
 * App principal — Provê o roteamento e o contexto de autenticação.
 */
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rotas Públicas */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />

          {/* Rotas Privadas - Usuário Comum */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<MainFlow />} />
          </Route>

          {/* Rotas Privadas - Administrador */}
          <Route element={<ProtectedRoute adminOnly={true} />}>
            <Route path="/admin" element={<AdminDashboardPage />} />
          </Route>
          
          {/* Fallback 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
