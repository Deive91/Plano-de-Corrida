import { doc, setDoc, getDoc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

/**
 * ============================================
 * PlanoDeCorrida — Persistência (Firestore)
 * ============================================
 *
 * Salva e carrega o plano de treinamento e o progresso
 * do usuário no banco de dados da nuvem.
 */

/**
 * Salva o plano completo (inclui progresso) no Firestore.
 * @param {Object} plan - O plano de treinamento gerado
 * @param {string} userId - ID do usuário logado
 */
export async function savePlan(plan, userId) {
  if (!userId) return;
  try {
    await setDoc(doc(db, "plans", userId), plan);
  } catch (e) {
    console.error('Erro ao salvar plano no Firestore:', e);
  }
}

/**
 * Carrega o plano salvo do Firestore.
 * @param {string} userId - ID do usuário logado
 * @returns {Object|null} O plano salvo ou null se não existir
 */
export async function loadPlan(userId) {
  if (!userId) return null;
  try {
    const docSnap = await getDoc(doc(db, "plans", userId));
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (e) {
    console.error('Erro ao carregar plano do Firestore:', e);
    return null;
  }
}

/**
 * Remove o plano salvo do Firestore.
 * @param {string} userId - ID do usuário logado
 */
export async function clearPlan(userId) {
  if (!userId) return;
  try {
    await deleteDoc(doc(db, "plans", userId));
  } catch (e) {
    console.error('Erro ao limpar plano:', e);
  }
}

/**
 * Atualiza o progresso de um treino específico.
 * @param {Object} plan - O plano atual
 * @param {number} weekNumber - Número da semana
 * @param {number} dayIndex - Índice do dia (0-6)
 * @param {boolean} completed - Se o treino foi concluído
 * @param {string} userId - ID do usuário logado
 * @returns {Object} O plano atualizado
 */
export async function toggleTrainingCompletion(plan, weekNumber, dayIndex, completed, userId) {
  if (!userId) return plan;
  
  const updated = {
    ...plan,
    progress: {
      ...plan.progress,
      [weekNumber]: {
        ...plan.progress[weekNumber],
        [dayIndex]: completed,
      },
    },
  };
  await savePlan(updated, userId);
  return updated;
}

/**
 * Atualiza as configurações (tipo, distância, detalhes) de um treino específico.
 * @param {Object} plan - O plano atual
 * @param {number} weekNumber - Número da semana
 * @param {number} dayIndex - Índice do dia (0-6)
 * @param {Object} newDayData - Novos dados (type, distance, details)
 * @param {string} userId - ID do usuário logado
 * @returns {Object} O plano atualizado
 */
export async function updatePlanDay(plan, weekNumber, dayIndex, newDayData, userId) {
  if (!plan || !plan.weeks) return plan;

  const updatedWeeks = plan.weeks.map(week => {
    // Tolerância para string/number
    if (String(week.weekNumber) !== String(weekNumber)) return week;
    
    const updatedDays = week.days.map(day => {
      if (String(day.dayIndex) !== String(dayIndex)) return day;
      return { ...day, ...newDayData };
    });

    // Atualiza a soma da distância da semana se a distância for alterada
    const totalKm = Math.round(updatedDays.reduce((sum, d) => sum + (d.distance || 0), 0) * 10) / 10;
    
    return { ...week, days: updatedDays, totalKm };
  });

  const updatedPlan = { 
    ...plan, 
    weeks: updatedWeeks,
    summary: {
      ...plan.summary,
      totalKm: Math.round(updatedWeeks.reduce((sum, w) => sum + w.totalKm, 0) * 10) / 10
    }
  };
  
  if (userId) {
    await savePlan(updatedPlan, userId);
  }
  
  return updatedPlan;
}

/**
 * Calcula estatísticas de progresso do plano.
 * @param {Object} plan - O plano com progresso
 * @returns {Object} Estatísticas de progresso
 */
export function calculateProgress(plan) {
  if (!plan || !plan.progress) {
    return { completed: 0, total: 0, percentage: 0, completedKm: 0 };
  }

  let completed = 0;
  let total = 0;
  let completedKm = 0;

  plan.weeks.forEach((week) => {
    week.days.forEach((day) => {
      if (day.type !== 'REST') {
        total++;
        if (plan.progress[week.weekNumber]?.[day.dayIndex]) {
          completed++;
          completedKm += day.distance;
        }
      }
    });
  });

  return {
    completed,
    total,
    percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    completedKm: Math.round(completedKm * 10) / 10,
  };
}

/**
 * Busca todos os planos de todos os usuários no Firestore.
 * (Apenas para visualização pelo admin)
 */
export async function getAllPlansForAdmin() {
  const plans = [];
  try {
    const querySnapshot = await getDocs(collection(db, "plans"));
    querySnapshot.forEach((docSnap) => {
      plans.push({
        userId: docSnap.id,
        plan: docSnap.data()
      });
    });
  } catch (e) {
    console.error('Erro ao carregar planos admin do Firestore:', e);
  }
  return plans;
}
