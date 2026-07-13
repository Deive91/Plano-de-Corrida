# 🏃 DOCUMENTAÇÃO GERAL — PLANO DE CORRIDA APP

**Projeto:** Sistema Web de Geração Adaptativa de Planilhas de Treinamento de Corrida  
**Nome do Aplicativo:** `PlanoDeCorrida`  
**Tecnologias:** `React 18` + `Vite` + `TailwindCSS` + `Lucide Icons` + `Firebase`  
**Localização do Projeto:** `c:\Users\T.I\Desktop\Projetos\PlanoDeCorrida`  
**Última Atualização:** Julho de 2026 (Versão 2.0 - Catálogo de 90 Treinos & Fortalecimento Opcional)

---

## 📋 1. Visão Geral do Sistema

O **PlanoDeCorrida** é uma aplicação moderna voltada para corredores de todos os níveis que buscam planilhas de treino científicas e personalizadas. O motor algorítmico leva em consideração a **idade do corredor**, o **nível de experiência (Iniciante, Intermediário ou Avançado)** e a **distância alvo (de 5km até 42km Maratona)** para construir um cronograma progressivo, equilibrado e seguro contra lesões.

---

## 📚 2. Catálogo Oficial de 90 Treinos (v2.0)

Em atendimento às diretrizes de periodização e engajamento do aplicativo, foi implementado um **Catálogo Científico com 30 Tipos de Treinos para cada Perfil**, totalizando **90 protocolos únicos de treinamento** integrados diretamente na geração das planilhas:

### 🌱 Perfil Iniciante (30 Treinos)
Foco em ganho gradual de capacidade aeróbica, transição Run-Walk (corrida e caminhada), cadência, proteção articular e superação do sedentarismo:
1. *Corrida Leve / Caminhada 1:1 (Run-Walk Base)*
2. *Corrida Leve / Caminhada 2:1 (Evolução Contínua)*
3. *Corrida Leve / Caminhada 3:1 (Consolidação Aeróbica)*
4. *Corrida Contínua Zona 2 (Iniciação ao Trote Contínuo)*
5. *Fartlek Lúdico por Tempo (Acelera e Desacelera)*
6. *Fartlek nos Postes de Luz (Estímulo Visual na Rua)*
7. *Tiros Curtos Controlados (6x 100m posturados)*
8. *Treino de Subida Suave (Rampa Iniciante 4 a 6x 20s)*
9. *Tempo Run Adaptado (8 min contínuos ofegante controlado)*
10. *Longão Progressivo Run-Walk (Resistência de Fim de Semana)*
11. *Corrida Descalço na Grama / Areia Batida (Propriocepção)*
12. *Treino de Cadência e Passada Curtinha (180 SPM)*
13. *Progressão de Fim de Treino (Fast Finish Leve)*
14. *Pirâmide Crescente de Tempo (1-2-3-2-1 min)*
15. *Treino Regenerativo e Respiração Nasal*
16. *Cross-Training de Baixo Impacto (Ciclismo / Bike Ergométrica)*
17. *Cross-Training Aquático (Natação / Hidro-trote)*
18. *Tiros em Ladeira com Foco Postural (Tronco Inclinado)*
19. *Intervalado 400m Moderado (Iniciação à Pista de Atletismo)*
20. *Corrida Contínua com Educativos Pré-Treino (Skiping/Anfersen)*
21. *Longão Contínuo de Conquista (Sem Paradas 30 a 45 min)*
22. *Treino de Trocas de Ritmo no Terreno (Trilha Leve/Parque)*
23. *Tempo Run em Blocos (2x 5 minutos com recuperação)*
24. *Intervalado de Oxigenação (6x 200m descontraídos)*
25. *Trote Social / Corrida em Grupo com Parceiro*
26. *Subida Longa e Constante (3x 1 minuto controlado)*
27. *Fartlek Crescente (1, 2 e 3 minutos fortes)*
28. *Corrida com Variação de Zonas (Z1 a Z3)*
29. *Longão de Resistência Mental e Hidratação em Movimento*
30. *Treino de Celebração de Base (5 km contínuos de Formatura)*

### 🏅 Perfil Intermediário (30 Treinos)
Foco em aprimoramento de limiar de lactato, velocidade específica, economia de corrida e consolidação de provas de 10k e Meia Maratona:
1. *Corrida Aeróbica de Manutenção (Zona 2 Pura 45-60 min)*
2. *Intervalado Clássico de VO2 Máximo (5x 1000m)*
3. *Tempo Run Contínuo no Limiar Anaeróbico (20 min contínuos)*
4. *Longão com Crescendo Final (Fast Finish Long Run)*
5. *Fartlek Sueco (3-2-1-2-3 minutos regressivos e progressivos)*
6. *Tiros Curtos de Velocidade e Economia (8x 400m)*
7. *Treino de Força Específica em Subida (Hill Repeats 8-10x 45s)*
8. *Cruise Intervals (4x 1500m no limiar de lactato)*
9. *Longão em Terreno Acidentado (Rolling Hills Long Run)*
10. *Treino Progressivo de 3 Blocos (Terços em Z2, Z3 e Z4)*
11. *Intervalado Curto de Explosão (12x 200m rápidos)*
12. *Corrida Regenerativa de Descompressão (Recovery Run 24h pós-treino)*
13. *Fartlek de Quêniano (12x 1 min rápido / 1 min trote sem caminhar)*
14. *Tempo Run Fracionado (3x 8 minutos no limiar)*
15. *Treino de Rampa Longa (5x 2 minutos subindo)*
16. *Tiros Yasso 800m (Simulador de Meia/Maratona)*
17. *Longão com Simulação de Nutrição e Gel de Carboidrato*
18. *Cross-Training Aeróbico de Volume (Bike Cadência 90+ RPM)*
19. *Intervalado Misto (1000m ritmo 10k + 400m ritmo 5k alternados)*
20. *Corrida de Fundo com Foco de Cadência Rigorosa (180+ SPM)*
21. *Treino de Fartlek Piramidal (1-2-3-4-3-2-1 min)*
22. *Tempo Run em Ritmo de Meia Maratona (30 min cravados)*
23. *Subidas Curtas Neuromusculares (10x 15s sprint máximo)*
24. *Longão Negativado (Negative Split - 2ª metade mais rápida)*
25. *Intervalado de 600m (8x 600m ágeis)*
26. *Corrida Leve com Sprints Finais (Stsides 5x 80m)*
27. *Treino de Limiar em Pista (2x 3000m ritmo 10k)*
28. *Cross-Training com Remo / Elíptico de Baixo Impacto*
29. *Longão de Especificidade e Resiliência de Pace no GPS*
30. *Treino Teste de Desempenho (Simulação Real de 5k ou 10k)*

### 🏆 Perfil Avançado (30 Treinos)
Foco em alta performance, duplo limiar norueguês, VO2 máximo extremo, economia lipídica em longões de maratona e tolerância mental:
1. *Intervalado Norueguês de Duplo Limiar (Sub-limiar 4x 2000m)*
2. *Tiros de VO2 Máximo em Pista (10x 800m ritmo 5k)*
3. *Longão Específico de Maratona (Marathon Pace Block Run)*
4. *Intervalado Láctico de Pista (15x 400m recuperação curta 60s)*
5. *Tempo Run Contínuo de Alta Intensidade (45 min na fronteira anaeróbica)*
6. *Hill Repeats de Força Bruta (12x 1 minuto subida forte)*
7. *Fartlek Quêniano de Alto Volume (20x 1 forte / 1 aeróbico moderado)*
8. *Longão Progressivo de 3 Fases (10k Leve + 10k Moderado + 8k Tempo)*
9. *Intervalado Piramidal de Volume (400, 800, 1200, 1600, 1200...)*
10. *Over-Under Tempo Run (6x [3 min ritmo 5k + 3 min ritmo Meia])*
11. *Tiros de Sprint Neuromuscular (16x 200m mecânica perfeita)*
12. *Corrida Regenerativa Dupla (Doble-Threshold / Trote Matinal)*
13. *Cruise Intervals Extensos (3x 4000m ritmo Meia Maratona)*
14. *Hill Bounds (Saltos e Explosão em Ladeira 10x 30s)*
15. *Yasso 800m Completo (10x 800m com conversão minutos/horas)*
16. *Longão com Fadiga Acumulada e Carb-Depleted (Eficiência Lipídica)*
17. *Tiros Descrescentes de Velocidade (2000 + 1500 + 1000 + 500m)*
18. *Tempo Run em Terreno Ondulado (Rolling Hills Threshold)*
19. *Cross-Training de Recuperação Ativa de Alto Volume (Ciclismo 90m)*
20. *Intervalado Russo (30s forte / 30s trote contínuos por 30 minutos)*
21. *Longão com Bloco Final no Limiar (22 km Z2 + 6 km Z4)*
22. *Treino de Rampa Combinada (Subida + Reta Acelerada no Topo)*
23. *Intervalado 1200m (6x 1200m sustentação de VO2)*
24. *Corrida Leve Aeróbica de Volume (14 a 16 km fáceis)*
25. *Fartlek Livre de Competição no Parque (8 picos de velocidade)*
26. *Simulação de Meia Maratona em Treino (Time Trial 18 km)*
27. *Tiros de 300m (15x 300m velocidade de pista)*
28. *Treino de Transição (Brick / 40 min Bike + 10 km Corrida)*
29. *Longão de Blindagem Mental (35 km Maratona Específico)*
30. *Tapering Sharpener (Treino de Polimento e Afiação Pré-Prova)*

---

## ⭐ 3. Regra Universal: Treino de Fortalecimento Opcional na Segunda-feira

Para garantir a preservação muscular, estabilidade do joelho/quadril e prevenção de lesões sem sobrecarregar a rotina do corredor, foi estabelecida a seguinte **Regra Universal no Motor de Treinos (`trainingEngine.js`)**:

1. **Dia Fixo e Universal:** Toda **Segunda-feira** (`dayIndex: 0`) de qualquer semana do plano é automaticamente designada como **Treino de Força & Mobilidade (`STRENGTH`)** para **todos os perfis (Iniciante, Intermediário e Avançado)**.
2. **Status Opcional (`isOptional: true`):** A segunda-feira recebe a marcação de treino opcional:
   - **No Visual (`WeekCard.jsx`):** O treino exibe um badge exclusivo **`⭐ Opcional`** ao lado do tipo e título do treino.
   - **No Cálculo de Progresso (`weekProgress`):** O algoritmo de porcentagem semanal separa os dias obrigatórios de corrida dos dias opcionais. Se o atleta optar por descansar na segunda-feira para recuperar do longão de domingo, ele **não é penalizado** e ainda assim pode atingir **100% de conclusão da semana**. Se ele optar por realizar o treino e marcar o checkbox, ele recebe um **bônus de pontuação** no progresso.

---

## 💻 4. Resumo Técnico das Alterações no Código

1. **`src/lib/workoutCatalog.js` (Novo Arquivo):**  
   - Define a estrutura de dados `WORKOUT_CATALOG` com os 90 treinos detalhados por nível (`beginner`, `intermediate`, `advanced`) e exporta a função `getCatalogWorkout()`.
2. **`src/lib/trainingEngine.js`:**  
   - Atualizado em `buildWeekTemplate` para marcar `week[0]` (Segunda-feira) como `STRENGTH` com `isOptional = true` em todas as variações de semanas (Normais, Recuperação e Taper).
   - Atualizado em `calculateDistances` para atribuir dinamicamente os títulos (`workoutTitle`) e metodologias específicas do catálogo a cada treino gerado.
3. **`src/components/WeekCard.jsx`:**  
   - Modificado para renderizar o badge **`⭐ Opcional`**, exibir o título do treino do catálogo (`day.workoutTitle`) e calcular a porcentagem de progresso sem penalidade para itens opcionais.
4. **`src/components/WorkoutCatalogTab.jsx` (Novo Componente):**  
   - Interface interativa que permite ao usuário navegar por abas entre os 30 treinos de cada perfil, visualizando detalhes, recomendações e a regra do treino opcional.
5. **`src/pages/DashboardPage.jsx`:**  
   - Integrado novo botão na barra de navegação **`📖 Catálogo (90)`** que aciona a visualização do `WorkoutCatalogTab`.

---

## 📅 5. Histórico de Alterações (Changelog)

- **v1.0 (Versão Inicial do App):** Criação do app em React/Vite com gerador básico de treinos progressivos (`trainingEngine.js`), suporte a PWA/Firebase e dashboard adaptativo.
- **v2.0 (Julho/2026 - Atualização Atual):**  
  - Criação do Catálogo com 90 Treinos (30 Iniciante, 30 Intermediário, 30 Avançado).  
  - Padronização do treino de Fortalecimento (`STRENGTH`) na Segunda-feira como **Opcional para todos os perfis**.  
  - Criação da aba de exploração de treinos no Dashboard (`WorkoutCatalogTab.jsx`).  
  - Atualização do sistema de cálculo de progresso no `WeekCard.jsx` para suportar dias opcionais.
