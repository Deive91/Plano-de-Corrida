# Documentação Técnica e Científica: PlanoDeCorrida App

**Data:** Julho de 2026 | **Versão:** 2.7 (Injeção e Oficialização do Dataset Completo de 90 Treinos Periodizados)  
**Arquitetura:** React 18 + Vite + TailwindCSS + Firebase Auth + JSON API Database

---

## 1. Visão Geral do Sistema e Atualização Recente (v2.7)

O **PlanoDeCorrida** é uma aplicação web adaptativa focada em periodização esportiva para corredores de rua de todos os níveis. O sistema calcula automaticamente cronogramas semanais baseados na idade, nível técnico e distância objetivo (de 5 km a Maratona).

Na **versão 2.7**, foi injetado e consolidado o novo **banco de dados científico e rigorosamente estruturado (`workouts_api_catalog.json`)** contendo exatamente **90 planilhas completas de treinamento de corrida** (30 para Iniciantes, 30 para Intermediários e 30 para Avançados).

O sistema opera de forma integrada e adaptativa:
- O [workoutCatalog.js](file:///c:/Users/T.I/Desktop/Projetos/PlanoDeCorrida/src/lib/workoutCatalog.js) normaliza os dados bilingues (`iniciante`/`beginner`, `intermediario`/`intermediate`, `avancado`/`advanced`) e mapeia os tipos para consumo do motor semanal.
- O motor de treinamento ([trainingEngine.js](file:///c:/Users/T.I/Desktop/Projetos/PlanoDeCorrida/src/lib/trainingEngine.js)) consome este catálogo dinamicamente para gerar cronogramas com altíssima precisão fisiológica.

---

## 2. Estrutura e Contrato das 90 Planilhas (`workouts_api_catalog.json`)

Cada objeto do array `workouts` respeita estritamente o seguinte contrato NoSQL/API:
- **`id`** *(Integer)*: Identificador único de 1 a 90.
- **`level`** *(String)*: `"iniciante"` (1 a 30), `"intermediario"` (31 a 60) ou `"avancado"` (61 a 90).
- **`title`** *(String)*: Título descritivo do treino e sua valência fisiológica.
- **`total_time_minutes`** *(Integer)*: Duração total estimada.
- **`workout_type`** *(String)*: Categorias oficiais (`continuo`, `regenerativo`, `longo`, `intervalado`, `fartlek`, `tempo_run`, `hill_repeats`).
- **`structure`** *(Object)*:  
  - **`warmup`**: Protocolo de aquecimento ativo, mobilidade e ativação.  
  - **`main_set`**: Parte principal detalhando Zonas de Frequência Cardíaca (Z1 a Z5) e Percepção Subjetiva de Esforço (PSE 1 a 10).  
  - **`cooldown`**: Volta à calma e soltura miofascial.
- **`physiological_goal`** *(String)*: Adaptação biológica, mitocondrial, enzimática ou neuromuscular pretendida.

---

## 3. Diretrizes de Periodização do Banco Oficial (v2.7)

1. **Iniciantes (Treinos 1 a 30):**  
   Foco na transição biomecânica Run-Walk nas proporções 1:1, 2:1, 3:1, 4:1 e 5:1, estimulação de fibras Tipo I, controle da cadência para proteção articular (175-180 SPM) e consolidação em Zona 1 e Zona 2 (PSE 2 a 4).

2. **Intermediários (Treinos 31 a 60):**  
   Aumento estruturado de volume de base em Z2, introdução sólida ao limiar de lactato (Tempo Run contínuo e fracionado em Z3/Z4 - PSE 5 a 7), Cruise Intervals, Fartlek queniano/piramidal e longões de até 20 km com Fast Finish.

3. **Avançados (Treinos 61 a 90):**  
   Foco em máxima performance, intervalados severos de VO2 Máximo em pista (10x800m, 15x400m em Z4 alta/Z5 - PSE 8 a 10), Limiar Duplo Norueguês (4x2000m, 5x1600m), Over-Under Tempo Runs, Hill Repeats de potência explosiva e longões de maratona (22 a 28 km) com simulação exata de Race Pace e polimento (*Tapering Sharpener*).

---

## 4. Regra Universal: Segunda-feira de Fortalecimento Opcional

Todas as Segundas-feiras no calendário semanal foram configuradas com o treino específico de **Fortalecimento Funcional e Mobilidade para Corredores**, classificado com o status de **⭐ Opcional (`isOptional: true`)**.
- **Benefício de Progresso:** Dias opcionais não penalizam a barra de progresso em caso de descanso do corredor.

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
