import { useState, useEffect } from 'react';
import { Activity, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import StepIndicator from '../components/StepIndicator';
import { DISTANCES, LEVELS, generatePlan } from '../lib/trainingEngine';
import { useAuth } from '../context/AuthContext';

const STEPS = ['Seus Dados', 'Nível', 'Ritmo', 'Objetivo'];

/**
 * Página de Onboarding — Formulário em 3 etapas.
 */
export default function OnboardingPage({ onPlanGenerated }) {
  const { user, updateProfile } = useAuth();
  const hasProfile = Boolean(user?.age && user?.state && user?.city);

  const [step, setStep] = useState(hasProfile ? 1 : 0);
  const [name, setName] = useState(user?.name || '');
  const [age, setAge] = useState(user?.age || '');
  const [state, setState] = useState(user?.state || '');
  const [city, setCity] = useState(user?.city || '');
  const [level, setLevel] = useState('');
  const [distance, setDistance] = useState(null);
  const [currentPaceMin, setCurrentPaceMin] = useState('6');
  const [currentPaceSec, setCurrentPaceSec] = useState('00');
  const [goalPaceMin, setGoalPaceMin] = useState('5');
  const [goalPaceSec, setGoalPaceSec] = useState('30');
  const [error, setError] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const [ibgeStates, setIbgeStates] = useState([]);
  const [ibgeCities, setIbgeCities] = useState([]);
  const [loadingLocations, setLoadingLocations] = useState(step === 0 && !hasProfile);

  // Buscar estados na inicialização (somente se precisar mostrar o step 0)
  useEffect(() => {
    let ignore = false;
    if (step === 0 && !hasProfile && ibgeStates.length === 0) {
      fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
        .then(res => res.json())
        .then(data => {
          if (!ignore) {
            setIbgeStates(data);
            setLoadingLocations(false);
          }
        })
        .catch(() => {
          if (!ignore) setLoadingLocations(false);
        });
    }
    return () => { ignore = true; };
  }, [step, hasProfile, ibgeStates.length]);

  // Buscar cidades quando o estado for selecionado
  useEffect(() => {
    let ignore = false;
    if (state) {
      const selectedState = ibgeStates.find(s => s.sigla === state || s.nome === state);
      if (selectedState) {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState.id}/municipios?orderBy=nome`)
          .then(res => res.json())
          .then(data => {
            if (!ignore) setIbgeCities(data);
          })
          .catch(() => {});
      }
    }
    return () => { ignore = true; };
  }, [state, ibgeStates]);

  const canNext = () => {
    switch (step) {
      case 0: return name.trim().length >= 2 && age >= 12 && age <= 99 && state.trim().length >= 2 && city.trim().length >= 2;
      case 1: return level !== '';
      case 2: return parseInt(currentPaceMin) >= 2 && parseInt(goalPaceMin) >= 2;
      case 3: return distance !== null;
      default: return false;
    }
  };

  const handleNext = () => {
    setError('');
    if (!canNext()) {
      if (step === 0) setError('Preencha todos os campos corretamente (Idade entre 12-99).');
      return;
    }

    // Salva o perfil em background (sem travar a tela)
    if (step === 0 && !hasProfile) {
      updateProfile({
        name: name.trim(),
        age: parseInt(age),
        state: state.trim(),
        city: city.trim()
      }).catch(err => console.error('Erro ao salvar perfil:', err));
    }

    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      handleGenerate();
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    const plan = generatePlan({
      name: name.trim(),
      age: parseInt(age),
      level,
      distance,
      currentPace: `${currentPaceMin}:${currentPaceSec.padStart(2, '0')}`,
      goalPace: `${goalPaceMin}:${goalPaceSec.padStart(2, '0')}`,
      gender: user?.gender || 'M',
    });
    onPlanGenerated(plan);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      {/* Header simples */}
      <div className="flex items-center justify-center gap-3 pt-8 pb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
          <Activity size={22} className="text-white" />
        </div>
        <h1 className="font-display text-2xl font-bold tracking-tight text-slate-100">
          Plano<span className="text-emerald-400">DeCorrida</span>
        </h1>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="w-full max-w-lg animate-fade-in">
          {/* Stepper */}
          <StepIndicator currentStep={step} steps={STEPS} />

          {/* Etapa 1: Dados Pessoais */}
          {step === 0 && (
            <div className="animate-slide-up space-y-6">
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
                  Vamos começar! 🏃
                </h2>
                <p className="text-slate-400">
                  Nos conte um pouco sobre você para criar seu plano perfeito.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Como devemos te chamar?
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/8 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Idade
                    </label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Ex: 28"
                      min={12}
                      max={99}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/8 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all text-base"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Estado
                    </label>
                    <select
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                        setCity(''); // Reseta a cidade ao trocar de estado
                        setIbgeCities([]); // Limpa cidades antigas
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/8 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all text-base appearance-none"
                    >
                      <option value="" disabled>Selecione</option>
                      {loadingLocations ? (
                        <option value="" disabled>Carregando...</option>
                      ) : (
                        ibgeStates.map(s => (
                          <option key={s.id} value={s.sigla}>{s.nome}</option>
                        ))
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Cidade
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    disabled={!state || ibgeCities.length === 0}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/8 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all text-base appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="" disabled>
                      {!state ? 'Selecione o estado primeiro' : ibgeCities.length === 0 ? 'Carregando cidades...' : 'Selecione a cidade'}
                    </option>
                    {ibgeCities.map(c => (
                      <option key={c.id} value={c.nome}>{c.nome}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Etapa 2: Nível */}
          {step === 1 && (
            <div className="animate-slide-up space-y-6">
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
                  Seu nível atual 💪
                </h2>
                <p className="text-slate-400">
                  Escolha o que melhor descreve sua experiência com corrida.
                </p>
              </div>

              <div className="space-y-3">
                {LEVELS.map((l) => (
                  <button
                    key={l.value}
                    onClick={() => setLevel(l.value)}
                    className={`selection-card w-full text-left flex items-center gap-4 ${
                      level === l.value ? 'selected' : ''
                    }`}
                  >
                    <span className="text-3xl">{l.emoji}</span>
                    <div>
                      <h3 className="font-display text-base font-bold text-slate-100">
                        {l.label}
                      </h3>
                      <p className="text-sm text-slate-400">{l.description}</p>
                    </div>
                    {level === l.value && (
                      <span className="ml-auto text-emerald-400 font-bold">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Etapa 3: Ritmo */}
          {step === 2 && (
            <div className="animate-slide-up space-y-6">
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
                  Seu Ritmo (Pace) ⏱️
                </h2>
                <p className="text-slate-400">
                  Isso nos ajuda a calcular a velocidade exata de cada treino.
                </p>
              </div>

              <div className="space-y-6 bg-slate-800/40 p-6 rounded-2xl border border-white/5">
                {/* Pace Atual */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">
                    Pace Atual <span className="text-slate-500 font-normal">(Velocidade em que corre hoje)</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min={2}
                      max={15}
                      value={currentPaceMin}
                      onChange={(e) => setCurrentPaceMin(e.target.value)}
                      className="w-20 px-4 py-3 rounded-xl bg-slate-900 border border-white/8 text-slate-100 text-center focus:outline-none focus:border-emerald-500/50"
                    />
                    <span className="text-xl font-bold text-slate-500">:</span>
                    <input
                      type="number"
                      min={0}
                      max={59}
                      value={currentPaceSec}
                      onChange={(e) => setCurrentPaceSec(e.target.value)}
                      className="w-20 px-4 py-3 rounded-xl bg-slate-900 border border-white/8 text-slate-100 text-center focus:outline-none focus:border-emerald-500/50"
                    />
                    <span className="text-sm font-medium text-slate-400 ml-2">min/km</span>
                  </div>
                </div>

                {/* Linha separadora */}
                <div className="h-px bg-white/5 w-full" />

                {/* Pace Alvo */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">
                    Pace Objetivo <span className="text-slate-500 font-normal">(Sua meta para a prova)</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min={2}
                      max={15}
                      value={goalPaceMin}
                      onChange={(e) => setGoalPaceMin(e.target.value)}
                      className="w-20 px-4 py-3 rounded-xl bg-slate-900 border border-white/8 text-emerald-400 font-bold text-center focus:outline-none focus:border-emerald-500/50"
                    />
                    <span className="text-xl font-bold text-slate-500">:</span>
                    <input
                      type="number"
                      min={0}
                      max={59}
                      value={goalPaceSec}
                      onChange={(e) => setGoalPaceSec(e.target.value)}
                      className="w-20 px-4 py-3 rounded-xl bg-slate-900 border border-white/8 text-emerald-400 font-bold text-center focus:outline-none focus:border-emerald-500/50"
                    />
                    <span className="text-sm font-medium text-slate-400 ml-2">min/km</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Etapa 4: Distância */}
          {step === 3 && (
            <div className="animate-slide-up space-y-6">
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
                  Sua meta de distância 🎯
                </h2>
                <p className="text-slate-400">
                  Para qual prova ou distância você quer se preparar?
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {DISTANCES.filter(d => {
                  // Crianças (10-15 anos) não podem selecionar distâncias extremamente longas por risco de lesão
                  if (parseInt(age) <= 15 && (d.value === 21 || d.value === 42)) return false;
                  return true;
                }).map((d) => (
                  <button
                    key={d.value}
                    onClick={() => setDistance(d.value)}
                    className={`selection-card text-center py-6 ${
                      distance === d.value ? 'selected' : ''
                    }`}
                  >
                    <div className="font-display text-2xl font-extrabold text-slate-100 mb-1">
                      {d.label}
                    </div>
                    <div className="text-xs text-slate-400">{d.fullLabel}</div>
                    {distance === d.value && (
                      <span className="text-emerald-400 font-bold text-sm mt-2 block">
                        ✓ Selecionado
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Erro */}
          {error && (
            <div className="mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm text-center">
              {error}
            </div>
          )}

          {/* Navegação */}
          <div className="flex items-center justify-between mt-8 gap-4">
            {step > (hasProfile ? 1 : 0) ? (
              <button
                onClick={() => { setStep(step - 1); setError(''); }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:text-slate-200 bg-slate-800/40 border border-white/5 hover:border-white/10 transition-all"
              >
                <ArrowLeft size={16} />
                Voltar
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNext}
              disabled={!canNext() || isGenerating}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                canNext() && !isGenerating
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Gerando plano...
                </>
              ) : step === STEPS.length - 1 ? (
                <>
                  <Sparkles size={16} />
                  Gerar Meu Plano
                </>
              ) : (
                <>
                  Próximo
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
