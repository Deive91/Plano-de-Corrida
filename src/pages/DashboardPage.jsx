import { useState, useMemo, useRef, useEffect } from 'react';
import { Calendar, List, Target, Camera, Download, Lock, Crown, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import StatCard from '../components/StatCard';
import WeekCard from '../components/WeekCard';
import CalendarView from '../components/CalendarView';
import EditDayModal from '../components/EditDayModal';
import WomensHealthTab from '../components/WomensHealthTab';
import WorkoutCatalogTab from '../components/WorkoutCatalogTab';
import { calculateProgress } from '../lib/storage';
import { TRAINING_TYPES } from '../lib/trainingEngine';
import { useAuth } from '../context/AuthContext';
import { updateUserAvatar } from '../lib/auth';

/**
 * Página principal — Dashboard com plano de treino e progresso.
 */
export default function DashboardPage({ plan, onToggleDay, onUpdateDay, onReset }) {
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'calendar' | 'womens_health'
  const { user, refreshUser } = useAuth();
  const fileInputRef = useRef(null);
  const [showPaywall, setShowPaywall] = useState(false);

  // Verifica se o usuário tem assinatura ativa
  const isSubscribed = user?.subscription === 'active';

  // Lógica de upload de foto e compressão
  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Lemos a imagem e comprimimos usando Canvas para não estourar o limite do localStorage (5MB)
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_SIZE = 250;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_SIZE) {
            height *= MAX_SIZE / width;
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width *= MAX_SIZE / height;
            height = MAX_SIZE;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        updateUserAvatar(user.id, dataUrl);
        refreshUser(); // Atualiza a tela
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  // Calcular progresso
  const stats = useMemo(() => calculateProgress(plan), [plan]);

  // Encontrar semana atual (primeira semana com treinos incompletos)
  const currentWeekNumber = useMemo(() => {
    for (const week of plan.weeks) {
      const trainingDays = week.days.filter((d) => d.type !== 'REST');
      const allCompleted = trainingDays.every(
        (d) => plan.progress?.[week.weekNumber]?.[d.dayIndex]
      );
      if (!allCompleted) return week.weekNumber;
    }
    return plan.weeks.length; // Todas concluídas
  }, [plan]);

  // Próximo treino
  const getNextTraining = () => {
    for (const week of plan.weeks) {
      for (const day of week.days) {
        if (
          day.type !== 'REST' &&
          !plan.progress?.[week.weekNumber]?.[day.dayIndex]
        ) {
          return { week: week.weekNumber, day };
        }
      }
    }
    return null;
  };
  const nextTraining = getNextTraining();

  const isAllDone = stats.percentage === 100;

  // ==== Simulação de Alerta do WhatsApp ====
  const [showWhatsappAlert, setShowWhatsappAlert] = useState(false);
  
  useEffect(() => {
    const currentHour = new Date().getHours();
    const isNotificationTime = currentHour === 12 || currentHour === 18;

    // Dispara a mensagem se for o horário correto e a pessoa ainda tiver treino pendente
    if (user?.whatsapp && nextTraining && !isAllDone && isNotificationTime) {
      // Exibe a simulação visual do alerta 2 segundos após acessar o dashboard
      const timer = setTimeout(() => setShowWhatsappAlert(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [user?.whatsapp, nextTraining, isAllDone]);

  // ==== Gestão de Treino Personalizado (Edição) ====
  const [editingDay, setEditingDay] = useState(null); // { weekNumber, dayIndex, data }

  const handleOpenEditModal = (weekNumber, dayIndex, dayData) => {
    setEditingDay({ weekNumber, dayIndex, data: dayData });
  };

  const handleCloseEditModal = () => {
    setEditingDay(null);
  };

  const handleSaveEditDay = (newDayData) => {
    if (!editingDay) return;
    
    if (onUpdateDay) {
      onUpdateDay(editingDay.weekNumber, editingDay.dayIndex, newDayData);
    }
    
    setEditingDay(null); // Fecha o modal
  };

  const handlePrintPDF = () => {
    if (!isSubscribed) {
      setShowPaywall(true);
      return;
    }
    // Força a visualização em lista antes de imprimir para garantir que todos os treinos apareçam
    setViewMode('list');
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="print:hidden">
        <Header plan={plan} onReset={onReset} />
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Saudação & Meta com Avatar */}
        <div className="animate-fade-in flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left">
          
          {/* Avatar Interativo */}
          <div className="relative group cursor-pointer print:hidden" onClick={handleAvatarClick}>
            <div className="w-20 h-20 sm:w-24 sm:w-24 rounded-full overflow-hidden bg-slate-800 border-4 border-slate-800/80 shadow-xl flex items-center justify-center transition-all duration-300 group-hover:border-emerald-500/50">
              {user?.avatar ? (
                <img src={user.avatar} alt="Avatar do Corredor" className="w-full h-full object-cover" />
              ) : (
                <span className="text-3xl font-display text-emerald-500 uppercase">
                  {plan.runner.name.charAt(0)}
                </span>
              )}
            </div>
            
            {/* Overlay Icon no Hover */}
            <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <Camera size={24} className="text-white" />
            </div>

            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef} 
              onChange={handleFileChange}
            />
          </div>

          <div className="pt-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-100 mb-1">
              {isAllDone ? '🏆 Parabéns, ' : 'Olá, '}
              <span className="text-emerald-400">{plan.runner.name}</span>
              {isAllDone ? '!' : '!'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {isAllDone
                ? 'Você completou todos os treinos do seu plano! Hora de correr a prova! 🎉'
                : `Treinando para ${plan.target.fullLabel} · ${plan.summary.totalWeeks} semanas · Semana ${currentWeekNumber} de ${plan.summary.totalWeeks}`}
            </p>
          </div>
        </div>

        {/* Simulação de Alerta WhatsApp */}
        {showWhatsappAlert && (
          <div className="glass-card p-4 border-l-4 border-[#25D366] bg-[#25D366]/10 animate-slide-up flex justify-between items-center print:hidden">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📱</span>
              <div>
                <p className="text-sm font-bold text-[#25D366] uppercase tracking-wider">
                  Alerta WhatsApp Enviado para {user.whatsapp}
                </p>
                <p className="text-slate-200 font-medium">
                  "Você não executou o treino de hoje!"
                </p>
              </div>
            </div>
            <button 
              onClick={() => setShowWhatsappAlert(false)}
              className="text-slate-400 hover:text-white p-2"
            >
              ✕
            </button>
          </div>
        )}

        {/* Barra de Progresso */}
        <div className="glass-card p-5 animate-slide-up print:hidden">
          <ProgressBar percentage={stats.percentage} />
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 print:grid-cols-4">
          <StatCard
            icon="🏁"
            label="Meta"
            value={plan.target.label}
            color="emerald"
          />
          <StatCard
            icon="📊"
            label="Treinos Feitos"
            value={`${stats.completed}/${stats.total}`}
            color="sky"
          />
          <StatCard
            icon="📏"
            label="Km Acumulados"
            value={`${stats.completedKm}`}
            color="violet"
          />
          <StatCard
            icon="📅"
            label="Semana Atual"
            value={`${currentWeekNumber}/${plan.summary.totalWeeks}`}
            color="amber"
          />
        </div>

        {/* Próximo treino */}
        {nextTraining && !isAllDone && (
          <div className="glass-card p-5 border-l-4 border-emerald-500 animate-slide-up print:hidden">
            <div className="flex items-center gap-2 mb-2">
              <Target size={18} className="text-emerald-400" />
              <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
                Próximo Treino
              </span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-slate-300 font-semibold">
                Semana {nextTraining.week} · {nextTraining.day.dayName}
              </span>
              <span className="text-lg">{TRAINING_TYPES[nextTraining.day.type]?.emoji}</span>
              <span className="text-slate-400">
                {TRAINING_TYPES[nextTraining.day.type]?.name}
                {nextTraining.day.distance > 0 && ` — ${nextTraining.day.distance} km`}
              </span>
            </div>
          </div>
        )}

        {/* Toggle de visualização & Botão PDF */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h3 className="font-display text-lg font-bold text-slate-100">
            Planilha de Treinos
          </h3>
          
          <div className="flex flex-wrap items-center gap-2 print:hidden">
            {/* Botão Baixar PDF */}
            <button
              onClick={handlePrintPDF}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-lg ${
                isSubscribed
                  ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400 shadow-emerald-500/20'
                  : 'bg-slate-700/80 text-slate-300 hover:bg-slate-600/80 shadow-slate-700/20 border border-white/5'
              }`}
            >
              {isSubscribed ? <Download size={16} /> : <Lock size={14} />}
              Baixar PDF
              {!isSubscribed && <Crown size={14} className="text-amber-400 ml-0.5" />}
            </button>

            <div className="flex items-center gap-1 bg-slate-800/60 rounded-xl p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'list'
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <List size={15} />
                Lista
              </button>
              <button
                onClick={() => setViewMode('calendar')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'calendar'
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <Calendar size={15} />
                Calendário
              </button>
              <button
                onClick={() => setViewMode('catalog')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'catalog'
                    ? 'bg-amber-500/15 text-amber-400'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <BookOpen size={15} />
                Catálogo (90)
              </button>
              {(plan.runner.gender === 'F' || user?.gender === 'F') && (
                <button
                  onClick={() => setViewMode('womens_health')}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    viewMode === 'womens_health'
                      ? 'bg-pink-500/15 text-pink-400'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <span className="text-pink-400 font-bold">♀</span>
                  Fisiologia
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Visualização do plano */}
        {viewMode === 'list' && (
          <div className="space-y-3">
            {plan.weeks.map((week) => (
              <WeekCard
                key={week.weekNumber}
                week={week}
                progress={plan.progress}
                onToggleDay={onToggleDay}
                isCurrentWeek={week.weekNumber === currentWeekNumber}
                onEditDay={handleOpenEditModal}
              />
            ))}
          </div>
        )}
        
        {viewMode === 'calendar' && (
          <CalendarView weeks={plan.weeks} progress={plan.progress} />
        )}

        {viewMode === 'womens_health' && (
          <WomensHealthTab />
        )}

        {viewMode === 'catalog' && (
          <WorkoutCatalogTab />
        )}

        {/* Legenda de tipos de treino */}
        <div className="glass-card p-5">
          <h4 className="font-display text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
            Legenda dos Treinos
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.values(TRAINING_TYPES).map((t) => (
              <div key={t.id} className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{t.emoji}</span>
                <div>
                  <span className="text-sm font-semibold text-slate-200">
                    {t.name}
                  </span>
                  <p className="text-xs text-slate-500">{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-8">
          <p className="text-xs text-slate-600">
            PlanoDeCorrida · Plano gerado em{' '}
            {new Date(plan.createdAt).toLocaleDateString('pt-BR')} ·{' '}
            {plan.runner.ageProfile} · {plan.runner.level.label}
          </p>
        </div>
      </main>

      {/* Modal de Edição */}
      <EditDayModal 
        isOpen={!!editingDay} 
        onClose={handleCloseEditModal} 
        onSave={handleSaveEditDay}
        dayData={editingDay?.data}
        weekNumber={editingDay?.weekNumber}
      />

      {/* Modal Paywall — Assinatura necessária para PDF */}
      {showPaywall && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden animate-scale-in">
            {/* Faixa decorativa superior */}
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />

            <div className="p-8 text-center">
              {/* Ícone Premium */}
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center">
                <Crown size={36} className="text-amber-400" />
              </div>

              <h3 className="font-display text-2xl font-extrabold text-slate-100 mb-2">
                Recurso Premium 👑
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                O download do plano em PDF é exclusivo para assinantes do <span className="text-emerald-400 font-semibold">PlanoDeCorrida PRO</span>. Assine para desbloquear esse e outros recursos!
              </p>

              {/* Benefícios */}
              <div className="text-left bg-slate-800/60 rounded-2xl p-5 mb-6 space-y-3 border border-white/5">
                {[
                  '📄 Download ilimitado do plano em PDF',
                  '📊 Relatórios avançados de desempenho',
                  '📱 Alertas inteligentes no WhatsApp',
                  '🏋️ Treinos personalizados atualizados',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold text-sm">✓</span>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Botões */}
              <button
                onClick={() => {
                  // TODO: Integrar com sistema de pagamento (Stripe, Mercado Pago, etc.)
                  alert('Em breve! A integração com o sistema de pagamento será implementada.');
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold text-base hover:shadow-xl hover:shadow-amber-500/25 hover:-translate-y-0.5 transition-all duration-300 mb-3"
              >
                Assinar Agora — PRO
              </button>

              <button
                onClick={() => setShowPaywall(false)}
                className="w-full py-3 rounded-xl text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors"
              >
                Talvez depois
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
