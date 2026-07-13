# Documentação Técnica e Científica: PlanoDeCorrida App

**Data:** Julho de 2026 | **Versão:** 2.4  
**Arquitetura:** React 18 + Vite + TailwindCSS + Firebase Auth + JSON API Database

---

## 1. Visão Geral do Sistema e Atualizações Recentes (v2.4)

O **PlanoDeCorrida** é uma aplicação web adaptativa focada em periodização esportiva para corredores de rua de todos os níveis. O sistema calcula automaticamente cronogramas semanais baseados na idade, nível técnico e distância objetivo (de 5 km a 42 km - Maratona).

Na **versão 2.4**, além de adaptarmos o motor de cálculo (`trainingEngine.js`) e a interface gráfica (`WorkoutCatalogTab.jsx`) para processar nativamente os dois formatos de contratos e esquemas (`total_time_minutes` com `structure` ou `total_duration_minutes` com `phases`), geramos o banco de dados completo no arquivo `src/lib/workouts_api_catalog.json`.

O banco de dados JSON possui **exatamente 90 planos de treinamento científicos e periodizados** (30 de nível iniciante, 30 intermediário e 30 avançado), com todas as métricas padronizadas: Percepção Subjetiva de Esforço (PSE de 1 a 10), Zonas de Frequência Cardíaca (Z1 a Z5) e Paces específicos (5k, 10k, 21k, Maratona).

### Estrutura do Esquema (Contrato de Banco de Dados JSON):
```json
{
  "id": 1,
  "level": "iniciante",
  "title": "Adaptação Articular Run-Walk 1:1",
  "total_time_minutes": 30,
  "workout_type": "continuo",
  "structure": {
    "warmup": "5 min caminhada rápida em PSE 3 com giros de tornozelo...",
    "main_set": "10 repetições de [1 min trote leve Z2 + 1 min caminhada ativa Z1]...",
    "cooldown": "5 min caminhada desacelerando gradualmente e alongamento..."
  },
  "physiological_goal": "Aumento da tolerância ao impacto articular e transição gradual de fibras tipo I."
}
```

---

## 2. Regras de Periodização por Nível (90 Treinos no Banco JSON)

1. **Nível Iniciante (30 treinos - ID 1 a 30):**
   - *Foco Central:* Adaptação progressiva, alternância entre caminhada e corrida (método Run-Walk com proporções 1:1, 2:1 e 3:1), iniciação ao trote contínuo (15 min a 50 min), cadência alta de proteção articular (180 SPM com passada curta) e introdução a estímulos leves de Fartlek e Hill Repeats.

2. **Nível Intermediário (30 treinos - ID 31 a 60):**
   - *Foco Central:* Aumento do volume sustentável em Zona 2, introdução sólida a treinos no limiar de lactato (Tempo Run contínuo e fracionado), Fartlek piramidal/quêniano, Cruise Intervals no ritmo de 10k/21k, e longões progressivos com Fast Finish simulando o cansaço final de prova.

3. **Nível Avançado (30 treinos - ID 61 a 90):**
   - *Foco Central:* Máxima performance, intervalados em pista com foco em VO2 máximo severo (ex: 10x800m, 15x400m), Duplo Limiar Norueguês (ex: 4x2000m), Over-Under Tempo Runs, Hill Repeats explosivos de potência propulsiva e longões estruturados com simulação exata de Pace de Maratona e estratégias de polimento (Tapering Sharpener).

---

## 3. Regra Universal: Fortalecimento Opcional nas Segundas-feiras

Em conformidade com as boas práticas da fisiologia do exercício e feedback de usuários, **todas as Segundas-feiras** no calendário gerado foram configuradas como **Treino de Fortalecimento e Mobilidade com o status de ⭐ Opcional (`isOptional: true`)**.
- **Impacto no Progresso:** Como dias opcionais não contam no denominador de dias obrigatórios no `WeekCard.jsx`, o corredor que optar pelo repouso passivo ou por uma sessão leve de mobilidade após o longão de domingo não sofrerá penalização na barra de progresso semanal.

---

## 4. Como Executar e Buildar o Projeto

```bash
# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
npm run dev

# Gerar o build de produção (Vite)
npm run build

# Gerar documentação DOCX via script Python
python gerar_word_doc.py
```
