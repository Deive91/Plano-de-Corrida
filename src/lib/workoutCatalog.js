/**
 * ============================================================================
 * CATÁLOGO OFICIAL DE TREINOS PARA CORRIDA — PLANO DE CORRIDA APP
 * Banco de dados científico completo com 90 treinos periodizados (v2.4).
 * ============================================================================
 */
import apiCatalog from './workouts_api_catalog.json';

// Mapeamento de workout_type para os tipos internos do motor da aplicação
const TYPE_MAPPING = {
  'continuo': 'EASY',
  'regenerativo': 'RECOVERY',
  'longo': 'LONG',
  'intervalado': 'INTERVAL',
  'fartlek': 'INTERVAL',
  'tempo_run': 'TEMPO',
  'hill_repeats': 'HILL'
};

const normalizedWorkouts = (apiCatalog.workouts || []).map(w => ({
  ...w,
  type: TYPE_MAPPING[w.workout_type] || 'EASY',
  description: w.structure && w.structure.main_set ? w.structure.main_set : ''
}));

const beginnerList = normalizedWorkouts.filter(w => w.level === 'iniciante');
const intermediateList = normalizedWorkouts.filter(w => w.level === 'intermediario');
const advancedList = normalizedWorkouts.filter(w => w.level === 'avancado');

export const WORKOUT_CATALOG = {
  beginner: beginnerList,
  iniciante: beginnerList,
  intermediate: intermediateList,
  intermediario: intermediateList,
  advanced: advancedList,
  avancado: advancedList
};

/**
 * Retorna os detalhes de um treino específico do catálogo pelo nível do usuário,
 * tipo de treino pretendido pela semana (EASY, LONG, etc.), número da semana e dia.
 */
export function getCatalogWorkout(level, type, weekNumber, dayIndex) {
  const list = WORKOUT_CATALOG[level] || WORKOUT_CATALOG.beginner;
  if (!list || list.length === 0) return null;
  
  const filtered = list.filter(w => w.type === type || w.workout_type === type);
  if (filtered.length > 0) {
    const idx = (weekNumber + dayIndex) % filtered.length;
    return filtered[idx];
  }
  
  const idx = (weekNumber * 3 + dayIndex) % list.length;
  return list[idx];
}
