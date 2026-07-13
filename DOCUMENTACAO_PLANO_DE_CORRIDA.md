# Documentação Técnica e Científica: PlanoDeCorrida App

**Data:** Julho de 2026 | **Versão:** 2.5 (Limpeza Definitiva e Conexão Integral do Catálogo Científico)  
**Arquitetura:** React 18 + Vite + TailwindCSS + Firebase Auth + JSON API Database

---

## 1. Visão Geral do Sistema e Atualizações Recentes (v2.5)

O **PlanoDeCorrida** é uma aplicação web adaptativa focada em periodização esportiva para corredores de rua de todos os níveis. O sistema calcula automaticamente cronogramas semanais baseados na idade, nível técnico e distância objetivo (de 5 km a Maratona).

Na **versão 2.5**, foi realizada a **remoção total e erradicação definitiva de todos os resquícios e textos de treinos antigos (legados)** que ficavam hardcoded no motor de cálculo (`trainingEngine.js`) e no catálogo temporário (`workoutCatalog.js`).

Agora, o `workoutCatalog.js` está **100% conectado e alimentado diretamente pelo banco de dados JSON oficial (`workouts_api_catalog.json`)**, o qual contém exatamente **90 planos de treinamento científicos e periodizados** (30 para o nível Iniciante, 30 para o Intermediário e 30 para o Avançado).

### Principais Alterações da v2.5:
1. **Erradicação dos Treinos Legados:** Removidos todos os textos de treinos genéricos ou antigos que misturavam calistenia desestruturada, crossfit ou descrições obsoletas (`Run-Walk-Run` genérico, `Fartlek Forte` hardcoded, `[QUEBRAR PADRÃO - PREVENÇÃO FEMININA]`, `15x30s em ladeira`, etc.).
2. **Normalização de Tipos de Treino (`TYPE_MAPPING`):**  
   Os treinos da API em JSON possuem a propriedade `workout_type` (`continuo`, `regenerativo`, `longo`, `intervalado`, `fartlek`, `tempo_run`, `hill_repeats`). Em `workoutCatalog.js`, cada treino do banco de dados recebe agora uma propriedade `type` normalizada e compatível com o motor semanal da aplicação:
   - `continuo` / `regenerativo` ➔ `EASY`
   - `longo` ➔ `LONG`
   - `intervalado` / `fartlek` ➔ `INTERVAL`
   - `tempo_run` ➔ `TEMPO`
   - `hill_repeats` ➔ `HILL`
3. **Sobrescrita Limpa no Motor de Treinamento (`trainingEngine.js`):**  
   Quando o motor calcula uma semana e atribui um treino do catálogo (`getCatalogWorkout`), o protocolo científico substitui integralmente a descrição do dia com clareza profissional, exibindo pontualmente:
   - **Título Científico e Volume/Tempo Estimados**
   - **🔥 Aquecimento (`warmup`)**
   - **🎯 Principal (`main_set`)**
   - **🧘 Volta à Calma (`cooldown`)**
   - **🔬 Objetivo Biológico (`physiological_goal`)**

---

## 2. Estrutura do Contrato JSON de Treinos (`workouts_api_catalog.json`)

Cada um dos 90 protocolos no banco segue rigorosamente o contrato científico abaixo:
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
    "cooldown": "5 min caminhada desacelerando gradualmente e alongamentos..."
  },
  "physiological_goal": "Aumento da tolerância ao impacto articular e transição gradual de fibras tipo I."
}
```

---

## 3. Distribuição Científica dos 90 Treinos Oficializados

1. **Iniciante (30 treinos - ID 1 a 30):**  
   Foco na adaptação articular, transição progressiva Run-Walk (proporções 1:1, 2:1, 3:1), iniciação ao trote contínuo em Zona 2, controle de cadência para evitar *overstriding* (180 passos/min) e introdução suave a variações de Fartlek e subidas leves.

2. **Intermediário (30 treinos - ID 31 a 60):**  
   Foco na consolidação do volume em Zona 2, introdução consistente a treinos no limiar de lactato (Tempo Run contínuo e fracionado), Fartlek queniano e piramidal, *Cruise Intervals* em ritmo de 10k/21k, e longões progressivos com *Fast Finish*.

3. **Avançado (30 treinos - ID 61 a 90):**  
   Foco em performance atlética, intervalados rigorosos em pista visando VO2 máximo severo (ex: 10x800m, 15x400m), Duplo Limiar Norueguês (ex: 4x2000m), *Over-Under Tempo Runs*, *Hill Repeats* de potência explosiva e longões de 24 a 28 km com simulação de ritmo de maratona e polimento (*Tapering Sharpener*).

---

## 4. Regra Universal: Segunda-feira de Fortalecimento Opcional

Todas as Segundas-feiras no calendário semanal foram configuradas com o treino específico de **Fortalecimento Funcional e Mobilidade para Corredores**, classificado com o status de **⭐ Opcional (`isOptional: true`)**.
- **Benefício de Progresso:** Dias opcionais não entram como obrigatoriedade no cálculo percentual de progresso do `WeekCard.jsx`. Assim, o corredor que realizar o treino obtém um reforço biomecânico de prevenção de lesões, enquanto aquele que preferir repouso passivo após o longão de domingo não sofrerá nenhuma penalidade em sua pontuação semanal.

---

## 5. Comandos do Projeto e Documentação

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Gerar documento DOCX oficial da documentação
python gerar_word_doc.py
```
