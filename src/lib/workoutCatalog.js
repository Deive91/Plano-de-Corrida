/**
 * ============================================================================
 * CATÁLOGO OFICIAL DE TREINOS PARA CORRIDA — PLANO DE CORRIDA APP
 * Catálogo atualmente limpo/vazio por solicitação do usuário.
 * ============================================================================
 */

export const WORKOUT_CATALOG = {
  beginner: [],
  intermediate: [],
  advanced: []
};

/**
 * Retorna os detalhes de um treino específico do catálogo pelo nível do usuário,
 * tipo de treino pretendido pela semana (EASY, LONG, etc.), número da semana e dia.
 * Retorna null se não houver treinos no catálogo.
 */
export function getCatalogWorkout(level, type, weekNumber, dayIndex) {
  const list = WORKOUT_CATALOG[level] || WORKOUT_CATALOG.beginner;
  if (!list || list.length === 0) return null;
  
  const filtered = list.filter(w => w.type === type);
  if (filtered.length > 0) {
    const idx = (weekNumber + dayIndex) % filtered.length;
    return filtered[idx];
  }
  
  const idx = (weekNumber * 3 + dayIndex) % list.length;
  return list[idx];
}
