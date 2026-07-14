/**
 * ============================================
 * PlanoDeCorrida — Motor de Geração de Treinos
 * ============================================
 *
 * Gera planos de treinamento adaptativos baseados em:
 *  - Idade do corredor
 *  - Nível de condicionamento (Iniciante, Intermediário, Avançado)
 *  - Distância alvo (5km a 42km)
 *
 * Tipos de treino:
 *  - EASY     → Corrida Leve (base aeróbica)
 *  - LONG     → Longão (corrida longa progressiva)
 *  - INTERVAL → Intervalado / Tiros
 *  - TEMPO    → Tempo Run (ritmo de prova)
 *  - REST     → Descanso Ativo
 *  - STRENGTH → Treino de Força / Mobilidade
 */

import { getCatalogWorkout } from './workoutCatalog';

// ---- Constantes ----

export const TRAINING_TYPES = {
  EASY: {
    id: 'EASY',
    name: 'Corrida Leve',
    emoji: '🏃',
    color: 'emerald',
    description: 'Ritmo confortável, conversação fácil',
  },
  LONG: {
    id: 'LONG',
    name: 'Longão',
    emoji: '🔥',
    color: 'violet',
    description: 'Corrida longa — aumente a resistência',
  },
  INTERVAL: {
    id: 'INTERVAL',
    name: 'Intervalado (Tiros)',
    emoji: '⚡',
    color: 'rose',
    description: 'Tiros de alta intensidade com recuperação',
  },
  TEMPO: {
    id: 'TEMPO',
    name: 'Tempo Run (Ritmo Contínuo)',
    emoji: '🎯',
    color: 'sky',
    description: 'Corrida em ritmo forte, simulando a prova',
  },
  REST: {
    id: 'REST',
    name: 'Descanso Ativo',
    emoji: '🧘',
    color: 'slate',
    description: 'Caminhada, yoga ou alongamento',
  },
  STRENGTH: {
    id: 'STRENGTH',
    name: 'Força & Mobilidade',
    emoji: '💪',
    color: 'amber',
    description: 'Fortalecimento muscular e articular',
  },
  HILL: {
    id: 'HILL',
    name: 'Treino de Rampa (Subidas)',
    emoji: '🏔️',
    color: 'orange',
    description: 'Força e explosão em ladeiras',
  },
  CROSS_TRAINING: {
    id: 'CROSS_TRAINING',
    name: 'Cross-Training (Outro Esporte)',
    emoji: '🚴',
    color: 'teal',
    description: 'Bicicleta, Natação ou Elíptico',
  },
};

export const DISTANCES = [
  { value: 5, label: '5K', fullLabel: '5 Quilômetros' },
  { value: 10, label: '10K', fullLabel: '10 Quilômetros' },
  { value: 15, label: '15K', fullLabel: '15 Quilômetros' },
  { value: 20, label: '20K', fullLabel: '20 Quilômetros' },
  { value: 21, label: '21K', fullLabel: 'Meia Maratona' },
  { value: 42, label: '42K', fullLabel: 'Maratona' },
];

export const LEVELS = [
  {
    value: 'beginner',
    label: 'Iniciante',
    description: 'Pouca ou nenhuma experiência com corrida',
    emoji: '🌱',
  },
  {
    value: 'intermediate',
    label: 'Intermediário',
    description: 'Corre regularmente há pelo menos 6 meses',
    emoji: '🏅',
  },
  {
    value: 'advanced',
    label: 'Avançado',
    description: 'Corredor experiente com provas completas',
    emoji: '🏆',
  },
];

// ---- Tabelas de configuração ----

/**
 * Número de semanas por distância e nível.
 */
const WEEKS_TABLE = {
  5:  { beginner: 8,  intermediate: 6,  advanced: 4  },
  10: { beginner: 10, intermediate: 8,  advanced: 6  },
  15: { beginner: 12, intermediate: 10, advanced: 8  },
  20: { beginner: 14, intermediate: 12, advanced: 10 },
  21: { beginner: 14, intermediate: 12, advanced: 10 },
  42: { beginner: 20, intermediate: 18, advanced: 16 },
};

/**
 * Volume semanal base (km) por distância e nível.
 * Este é o volume da semana 1, que cresce ~10% por semana.
 */
const BASE_WEEKLY_KM = {
  5:  { beginner: 10, intermediate: 15, advanced: 20 },
  10: { beginner: 15, intermediate: 22, advanced: 30 },
  15: { beginner: 18, intermediate: 28, advanced: 38 },
  20: { beginner: 20, intermediate: 32, advanced: 42 },
  21: { beginner: 20, intermediate: 32, advanced: 42 },
  42: { beginner: 25, intermediate: 40, advanced: 55 },
};

/**
 * Dias de treino por semana por nível (antes de ajuste por idade).
 */
const TRAINING_DAYS = {
  beginner: 3,
  intermediate: 4,
  advanced: 5,
};



// ---- Ajustes por idade ----

function getAgeProfile(age) {
  if (age <= 15) {
    return {
      label: 'Kids / Adolescente',
      extraRestDays: 1, // Proteção articular no desenvolvimento
      volumeMultiplier: 0.5,
      includeStrength: true,
      maxTrainingDays: 4,
    };
  }
  if (age <= 20) {
    return {
      label: 'Jovem',
      extraRestDays: 0,
      volumeMultiplier: 1.0,
      includeStrength: true,
      maxTrainingDays: 6,
    };
  }
  if (age <= 30) {
    return {
      label: 'Adulto I (Pico)',
      extraRestDays: 0,
      volumeMultiplier: 1.0,
      includeStrength: false,
      maxTrainingDays: 6,
    };
  }
  if (age <= 40) {
    return {
      label: 'Adulto II',
      extraRestDays: 1,
      volumeMultiplier: 0.95,
      includeStrength: true,
      maxTrainingDays: 5,
    };
  }
  if (age <= 50) {
    return {
      label: 'Master',
      extraRestDays: 1,
      volumeMultiplier: 0.85,
      includeStrength: true,
      maxTrainingDays: 5,
    };
  }
  if (age <= 60) {
    return {
      label: 'Master Avançado',
      extraRestDays: 2,
      volumeMultiplier: 0.75,
      includeStrength: true,
      maxTrainingDays: 4,
    };
  }
  return {
    label: 'Sênior (60+)',
    extraRestDays: 3,
    volumeMultiplier: 0.5,
    includeStrength: true,
    maxTrainingDays: 3,
  };
}

// ---- Gerador de treinos semanais ----

/**
 * Distribui os tipos de treino nos dias da semana.
 * @param {number} trainingDays - Número de dias com treino de corrida
 * @param {boolean} includeStrength - Se deve incluir sessões de força
 * @param {string} level - Nível do corredor
 * @param {number} weekNumber - Número da semana (1-indexed)
 * @param {boolean} isRecoveryWeek - Se é semana de recuperação
 * @param {boolean} isTaperWeek - Se é semana de taper
 * @returns {Array} Array de 7 objetos (Seg-Dom) com o tipo de treino
 */
function buildWeekTemplate(trainingDays, includeStrength, level, weekNumber, isRecoveryWeek, isTaperWeek) {
  const week = Array(7).fill(null).map((_, i) => ({
    dayIndex: i,
    dayName: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'][i],
    type: null,
    distance: 0,
    details: '',
  }));

  if (isRecoveryWeek) {
    // Semana de recuperação: menos treinos, sem intervalado
    const recDays = Math.max(2, trainingDays - 1);
    if (recDays >= 1) week[1].type = 'EASY';   // Terça
    if (recDays >= 2) week[5].type = 'LONG';    // Sábado (longão mais curto)
    if (recDays >= 3) week[3].type = 'EASY';    // Quinta
    // Preencher resto com descanso
    week.forEach((d) => { if (!d.type) d.type = 'REST'; });
    week[0].type = 'STRENGTH'; // Forçar segunda-feira com treino físico opcional
    week[0].isOptional = true;
    week[0].dayName = 'Segunda (Opcional)';
    return week;
  }

  if (isTaperWeek) {
    // Semana de taper: volume muito reduzido
    week[1].type = 'EASY';    // Terça
    week[3].type = 'EASY';    // Quinta
    week[5].type = 'EASY';    // Sábado (corrida curta pré-prova)
    week.forEach((d) => { if (!d.type) d.type = 'REST'; });
    week[0].type = 'STRENGTH'; // Forçar segunda-feira com treino físico opcional
    week[0].isOptional = true;
    week[0].dayName = 'Segunda (Opcional)';
    return week;
  }

  // ---- Distribuição normal ----
  // Domingo sempre será Longão
  week[6].type = 'LONG';

  if (trainingDays >= 2) week[1].type = 'EASY';      // Terça - Leve
  if (trainingDays >= 3) week[3].type = 'INTERVAL';   // Quinta - Intervalado
  if (trainingDays >= 4) week[4].type = 'EASY';       // Sexta - Leve

  // A partir de 5 treinos, Segunda deixa de ser apenas Força e vira um Regenerativo
  if (trainingDays >= 5) {
    week[0].type = 'RECOVERY';
    week[0].isOptional = false;
    week[0].dayName = 'Segunda';
  } else {
    week[0].type = 'STRENGTH';
    week[0].isOptional = true;
    week[0].dayName = 'Segunda (Opcional)';
  }

  if (trainingDays >= 6) week[2].type = 'TEMPO';      // Quarta - Tempo Run

  // Preencher os dias vagos com Fortalecimento, Rampa e Cross-Training.
  // Garantimos que o Sábado (index 5) se mantenha como REST absoluto para prevenir lesões.
  week[5].type = 'REST';
  
  // Pegamos todos os dias que ainda estão vazios (não são corrida e nem força já atribuída na seg)
  let availableSlots = week.filter(d => !d.type);
  
  // Distribuir os novos treinos (a ordem importa para espaçamento)
  if (availableSlots.length > 0) {
    availableSlots[0].type = 'HILL';     // Ex: Quarta
  }
  if (availableSlots.length > 1) {
    availableSlots[1].type = 'CROSS_TRAINING'; // Ex: Sexta
  }

  // Se sobrar algum dia vazio, virará descanso ativo
  week.forEach((d) => { if (!d.type) d.type = 'REST'; });

  // Iniciantes não fazem intervalado nas primeiras 2 semanas
  if (level === 'beginner' && weekNumber <= 2) {
    const intervalDay = week.find((d) => d.type === 'INTERVAL');
    if (intervalDay) intervalDay.type = 'EASY';
  }

  return week;
}

// ---- Conversores de Pace ----

function parsePaceToSeconds(paceStr) {
  if (!paceStr) return 0;
  const parts = paceStr.split(':').map(Number);
  if (parts.length !== 2) return 0;
  return (parts[0] * 60) + parts[1];
}

function formatSecondsToPace(totalSeconds) {
  if (!totalSeconds || totalSeconds <= 0) return '';
  const m = Math.floor(totalSeconds / 60);
  const s = Math.round(totalSeconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ---- Cálculo de distâncias por treino ----

function calculateDistances(weekDays, weeklyKm, isRecoveryWeek, isTaperWeek, level, age, targetDistance, weekNumber, totalWeeks, currentPace, goalPace, _gender) {
  const recoveryMultiplier = isRecoveryWeek ? 0.7 : (isTaperWeek ? 0.5 : 1.0);
  const adjustedWeeklyKm = weeklyKm * recoveryMultiplier;

  // Lógica de Pico Progressivo do Longão
  let startLong;
  let peakLong;

  if (targetDistance === 5) {
    startLong = level === 'beginner' ? 3 : (level === 'intermediate' ? 4 : 5);
    peakLong = level === 'advanced' ? 8 : 6;
  } else if (targetDistance === 10) {
    startLong = level === 'beginner' ? 4 : (level === 'intermediate' ? 6 : 8);
    peakLong = level === 'advanced' ? 14 : (level === 'intermediate' ? 12 : 10);
  } else if (targetDistance === 15) {
    startLong = level === 'beginner' ? 5 : (level === 'intermediate' ? 8 : 10);
    peakLong = level === 'advanced' ? 18 : 15;
  } else if (targetDistance === 20 || targetDistance === 21) {
    startLong = level === 'beginner' ? 6 : (level === 'intermediate' ? 10 : 12);
    peakLong = level === 'advanced' ? 22 : 18;
  } else if (targetDistance === 42) {
    startLong = level === 'beginner' ? 10 : (level === 'intermediate' ? 14 : 16);
    peakLong = level === 'advanced' ? 36 : 32;
  } else {
    startLong = Math.max(3, targetDistance * (level === 'beginner' ? 0.3 : 0.4));
    peakLong = Math.max(6, targetDistance * 0.8);
  }

  // Quantas semanas temos para evoluir o longão (excluindo primeira e a do polimento)
  const progressionWeeks = Math.max(1, totalWeeks - 2); 
  const currentProgression = Math.max(0, Math.min(progressionWeeks, weekNumber - 1));
  
  let baseLongKm = startLong + ((peakLong - startLong) * (currentProgression / progressionWeeks));

  if (isTaperWeek) {
    baseLongKm = startLong; // Reduz bastante no polimento (Taper)
  } else if (isRecoveryWeek) {
    baseLongKm *= 0.7; // Reduz 30% nas semanas de descanso
  }

  const longKm = Math.round(baseLongKm * 10) / 10;

  // Distribuir o restante entre os outros treinos de corrida
  const runDays = weekDays.filter(
    (d) => d.type === 'EASY' || d.type === 'INTERVAL' || d.type === 'TEMPO'
  );
  
  const recoveryDays = weekDays.filter((d) => d.type === 'RECOVERY');
  // Regenerativos têm quilometragem fixa baseada no nível (curta para não estressar)
  const recoveryKm = level === 'advanced' ? 8 : (level === 'intermediate' ? 6 : 4);
  recoveryDays.forEach(d => d.distance = recoveryKm);
  
  // Garantir que a matemática não quebre se o volume semanal for muito baixo
  const remainingKm = Math.max(runDays.length, adjustedWeeklyKm - longKm - (recoveryDays.length * recoveryKm));
  const perRunKm = runDays.length > 0
    ? Math.round((remainingKm / runDays.length) * 10) / 10
    : 0;

  // Protocolos com base científica (Ciência do Esporte)
  const lightWarmup = level === 'advanced' 
    ? '5 min de trote + 5 min mobilidade dinâmica (Balanço de pernas, rotação de quadril, afundos caminhando).' 
    : '5 min de caminhada rápida + mobilidade articular dinâmica (girar tornozelos e balanços de perna). Zero alongamento estático.';

  const lightCooldown = level === 'advanced'
    ? '5 min de trote muito lento + 5 min de alongamento estático (isquiotibiais, panturrilhas e quadríceps 30s cada).'
    : 'Caminhar de 5 a 10 min para baixar a FC gradualmente + alongamento estático leve das pernas.';

  const heavyWarmup = level === 'advanced'
    ? '10 min trote leve + 5 min educativos (Skiping, High Knees) + 4 retas de aceleração forte (Sprints de 50m) para acordar o sistema neuromuscular.'
    : '5 min de trote + educativos básicos (calcanhar no glúteo, skiping baixo) + 3 retas de aceleração.';

  const heavyCooldown = '5 a 10 min de trote regenerativo (quase caminhando) para limpar o lactato + 10 min de alongamento estático e rolo de liberação miofascial.';

  // Cálculos dinâmicos de Pace
  const currPaceSec = parsePaceToSeconds(currentPace);
  const goalPaceSec = parsePaceToSeconds(goalPace);

  const easyPace = currPaceSec > 0 ? formatSecondsToPace(currPaceSec + 60) : '';
  const longPace = currPaceSec > 0 ? formatSecondsToPace(currPaceSec + 30) : '';
  const tempoPace = goalPaceSec > 0 ? formatSecondsToPace(goalPaceSec + 5) : '';
  const intervalPace = goalPaceSec > 0 ? formatSecondsToPace(goalPaceSec - 15) : '';

  weekDays.forEach((day) => {
    switch (day.type) {
      case 'LONG':
        day.distance = Math.max(2, longKm);
        day.targetPace = longPace;
        day.details = `Corrida longa de endurance (${day.distance} km) focada em desenvolvimento da capacidade aeróbia base e resistência mental.`;
        day.warmup = lightWarmup;
        day.cooldown = lightCooldown;
        break;
      case 'EASY':
        day.distance = Math.max(1, perRunKm);
        day.targetPace = easyPace;
        day.details = `Corrida aeróbica contínua de estabilização (${day.distance} km) em ritmo estritamente confortável (Zona 1/Zona 2).`;
        day.warmup = lightWarmup;
        day.cooldown = lightCooldown;
        break;
      case 'INTERVAL': {
        day.distance = Math.max(1, Math.round(perRunKm * 0.8 * 10) / 10);
        day.targetPace = intervalPace;
        day.details = `Sessão intervalada de alta intensidade focada em VO2 máximo, economia de corrida e tolerância lática (${day.distance} km totais).`;
        day.warmup = heavyWarmup;
        day.cooldown = heavyCooldown;
        break;
      }
      case 'TEMPO':
        day.distance = Math.max(1, Math.round(perRunKm * 1.1 * 10) / 10);
        day.targetPace = tempoPace;
        day.details = `Treino contínuo ou fracionado no limiar de lactato (${day.distance} km totais) para elevação da sustentação de ritmo moderado-forte.`;
        day.warmup = heavyWarmup;
        day.cooldown = heavyCooldown;
        break;
      case 'REST':
        day.distance = 0;
        day.targetPace = null;
        day.details = 'Descanso passivo completo ou caminhada leve para recuperação sistêmica e miofascial.';
        day.warmup = null;
        day.cooldown = null;
        break;
      case 'STRENGTH':
        day.distance = 0;
        day.targetPace = null;
        day.isOptional = true;
        day.workoutTitle = 'Treino de Fortalecimento e Mobilidade (Opcional)';
        day.details = `Treino opcional de fortalecimento muscular funcional e mobilidade articular específico para corredores de rua.\n\n🔥 Aquecimento: 5 min de mobilidade articular de tornozelos, joelhos e quadril com giros dinâmicos.\n🎯 Principal: 3 a 4 séries de exercícios funcionais específicos (agachamento livre, afundos, ponte de glúteo, prancha frontal e lateral) focando na estabilidade do core, prevenção de lesões propulsivas e proteção articular sem sobrecarga axial excessiva.\n🧘 Volta à Calma: alongamento estático leve de cadeia posterior (panturrilhas e isquiotibiais) e respiração diafragmática.`;
        day.warmup = null;
        day.cooldown = null;
        break;
      case 'HILL': {
        day.distance = 0; 
        day.targetPace = null;
        day.details = 'Treino específico de repetições em subida (Hill Repeats) para ganho de potência propulsiva e força muscular específica de corrida.';
        day.warmup = heavyWarmup;
        day.cooldown = '5 a 10 min de trote regenerativo ou caminhada no plano para remoção de metabólitos.';
        break;
      }
      case 'CROSS_TRAINING':
        day.distance = 0;
        day.targetPace = null;
        if (age >= 60) {
          day.details = '40 min de Natação ou Hidroginástica em Zona 1/2 para estimulação aeróbica de baixo impacto articular.';
        } else {
          day.details = '40 min de Ciclismo, Natação ou Elíptico em Zona 2 constante para manutenção cardiovascular sem impacto mecânico de corrida.';
        }
        day.warmup = null;
        day.cooldown = 'Mobilidade articular e alongamento leve.';
        break;
      default:
        day.targetPace = null;
        break;
    }

    // Enriquecer e sobrescrever com o catálogo científico de treinos (90 treinos oficiais)
    if (day.type && day.type !== 'REST') {
      if (day.type === 'STRENGTH' || day.dayIndex === 0) {
        day.isOptional = true;
        day.workoutTitle = 'Treino de Fortalecimento e Mobilidade (Opcional)';
      } else {
        const catalogInfo = getCatalogWorkout(level, day.type, weekNumber, day.dayIndex);
        if (catalogInfo) {
          day.workoutTitle = catalogInfo.title;
          const phasesObj = catalogInfo.structure || catalogInfo.phases || null;
          day.phases = phasesObj;
          day.physiologicalGoal = catalogInfo.physiological_goal || null;
          day.totalDurationMinutes = catalogInfo.total_time_minutes || catalogInfo.total_duration_minutes || null;
          
          let detailsText = `${catalogInfo.title}\n`;
          if (day.distance > 0) {
            detailsText += `Volume Estimado: ${day.distance} km | Duração Total: ${day.totalDurationMinutes || 40} min\n\n`;
          } else {
            detailsText += `Duração Total: ${day.totalDurationMinutes || 40} min\n\n`;
          }
          if (phasesObj) {
            detailsText += `🔥 Aquecimento: ${phasesObj.warmup}\n`;
            detailsText += `🎯 Principal: ${phasesObj.main_set}\n`;
            detailsText += `🧘 Volta à Calma: ${phasesObj.cooldown}\n\n`;
          }
          if (catalogInfo.physiological_goal) {
            detailsText += `🔬 Objetivo Biológico: ${catalogInfo.physiological_goal}`;
          }
          day.details = detailsText.trim();
        }
      }
    }
  });

  return weekDays;
}

// ---- Função principal de geração ----

/**
 * Gera um plano de treinamento completo.
 *
 * @param {Object} params
 * @param {string} params.name       - Nome do corredor
 * @param {number} params.age        - Idade do corredor
 * @param {string} params.level      - 'beginner' | 'intermediate' | 'advanced'
 * @param {number} params.distance   - Distância alvo em km (5, 10, 15, 20, 21, 42)
 * @returns {Object} Plano completo de treinamento
 */
export function generatePlan({ name, age, level, distance, currentPace, goalPace, gender }) {
  const ageProfile = getAgeProfile(age);
  const totalWeeks = WEEKS_TABLE[distance]?.[level] || 12;
  const baseKm = (BASE_WEEKLY_KM[distance]?.[level] || 20) * ageProfile.volumeMultiplier;

  // Dias de treino de corrida ajustados
  let trainingDays = Math.min(
    TRAINING_DAYS[level] || 3,
    ageProfile.maxTrainingDays
  );
  trainingDays = Math.max(2, trainingDays - ageProfile.extraRestDays);

  // Gerar cada semana
  const weeks = [];
  for (let w = 1; w <= totalWeeks; w++) {
    // Semana de recuperação: a cada 4 semanas (exceto última)
    const isRecoveryWeek = (w % 4 === 0) && (w < totalWeeks);
    // Semana de taper: última semana antes da prova
    const isTaperWeek = w === totalWeeks;

    // Volume progressivo: +10% por semana
    const progressionMultiplier = 1 + ((w - 1) * 0.10);
    // Cap de progressão para não explodir
    const cappedMultiplier = Math.min(progressionMultiplier, 2.5);
    const weeklyKm = Math.round(baseKm * cappedMultiplier * 10) / 10;

    // Montar template da semana
    const days = buildWeekTemplate(
      trainingDays,
      ageProfile.includeStrength,
      level,
      w,
      isRecoveryWeek,
      isTaperWeek
    );

    // Calcular distâncias
    calculateDistances(days, weeklyKm, isRecoveryWeek, isTaperWeek, level, age, distance, w, totalWeeks, currentPace, goalPace, gender);

    // Calcular total real da semana
    const totalKm = Math.round(days.reduce((sum, d) => sum + d.distance, 0) * 10) / 10;

    weeks.push({
      weekNumber: w,
      totalKm,
      isRecoveryWeek,
      isTaperWeek,
      label: isTaperWeek
        ? '🏁 Semana de Taper (Pré-Prova)'
        : isRecoveryWeek
          ? '🔄 Semana de Recuperação'
          : `Semana ${w}`,
      days,
    });
  }

  // Calcular totais
  const totalKm = Math.round(weeks.reduce((sum, w) => sum + w.totalKm, 0) * 10) / 10;
  const totalTrainingDays = weeks.reduce(
    (sum, w) => sum + w.days.filter((d) => d.type !== 'REST').length,
    0
  );

  const distInfo = DISTANCES.find((d) => d.value === distance) || DISTANCES[0];
  const levelInfo = LEVELS.find((l) => l.value === level) || LEVELS[0];

  return {
    id: `plan_${Date.now()}`,
    createdAt: new Date().toISOString(),
    runner: {
      name,
      age,
      gender,
      level: levelInfo,
      ageProfile: ageProfile.label,
      currentPace,
    },
    target: {
      distance,
      label: distInfo.label,
      fullLabel: distInfo.fullLabel,
      goalPace,
    },
    summary: {
      totalWeeks: totalWeeks,
      totalKm,
      totalTrainingDays,
      trainingDaysPerWeek: trainingDays,
      includesStrength: ageProfile.includeStrength,
    },
    weeks,
    // Progresso (preenchido pelo usuário)
    progress: weeks.reduce((acc, week) => {
      acc[week.weekNumber] = week.days.reduce((dayAcc, day) => {
        dayAcc[day.dayIndex] = false;
        return dayAcc;
      }, {});
      return acc;
    }, {}),
  };
}
