# Documentação Técnica e Científica: PlanoDeCorrida App

**Data:** Julho de 2026 | **Versão:** 2.2  
**Arquitetura:** React 18 + Vite + TailwindCSS + Firebase Auth + JSON API Contract

---

## 1. Visão Geral do Sistema e Atualizações Recentes (v2.2)

O **PlanoDeCorrida** é uma aplicação web adaptativa focada em periodização esportiva científica para corredores de rua de todos os níveis. O sistema calcula automaticamente cronogramas semanais baseados na idade, nível técnico e distância objetivo (de 5 km a 42 km - Maratona).

Na **versão 2.2**, removemos todos os treinos antigos legados e mantivemos **ESTRITAMENTE os 30 novos treinos científicos** no arquivo `src/lib/workoutCatalog.js` (10 para Iniciante, 10 para Intermediário e 10 para Avançado), alinhados exatamente com o contrato do `workouts_api_catalog.json`.

Cada um dos 30 treinos oficiais possui a seguinte estrutura científica e técnica completa:
- `id` e `api_id` (de `1` a `30`)
- `title` (Título descritivo do treino)
- `type` (`EASY`, `INTERVAL`, `TEMPO`, `HILL`, `LONG`)
- `workout_type` (`continuo`, `intervalado`, `longo`, `regenerativo`)
- `total_duration_minutes` (Duração total estimada)
- `phases` (`warmup`, `main_set`, `cooldown` com indicações de zonas de FC, cadência e PSE)
- `physiological_goal` (Objetivo biológico de adaptação cardiorrespiratória e neuromuscular)

---

## 2. Regra Universal: Fortalecimento Opcional nas Segundas-feiras

Em conformidade com as boas práticas da fisiologia do exercício e feedback de usuários, **todas as Segundas-feiras** no calendário gerado foram configuradas como **Treino de Fortalecimento e Mobilidade com o status de ⭐ Opcional (`isOptional: true`)**.
- **Impacto no Progresso:** Como dias opcionais não contam no denominador de dias obrigatórios no `WeekCard.jsx`, o corredor que optar pelo repouso passivo ou por uma sessão leve de mobilidade após o longão de domingo não sofrerá penalização na barra de progresso semanal.

---

## 3. Catálogo Oficial dos 30 Treinos (100% dos Treinos Ativos no App)

### Nível Iniciante (10 Treinos — Foco em Adaptação Articular, Run-Walk e Continuidade)
1. **Adaptação Articular Run-Walk 1:1** (30 min | Contínuo)
2. **Evolução Contínua Run-Walk 2:1** (35 min | Contínuo)
3. **Consolidação Aeróbica Run-Walk 3:1** (37 min | Contínuo)
4. **Iniciação ao Trote Contínuo 15 min** (30 min | Contínuo)
5. **Treino de Cadência e Passada Curta 180 SPM** (32 min | Contínuo)
6. **Fartlek Lúdico de Adaptação** (34 min | Intervalado)
7. **Tiros Curtos Neuromusculares na Reta 6x100m** (33 min | Intervalado)
8. **Treino de Força em Rampa Suave 5x30s** (35 min | Intervalado)
9. **Iniciação ao Limiar (Mini Tempo Run 2x6 min)** (36 min | Contínuo)
10. **Longão de Conquista Aeróbica 25 min** (40 min | Longo)

### Nível Intermediário (10 Treinos — Foco em Volume, Limiar de Lactato e Fartlek)
11. **Volume Aeróbico de Base em Zona 2** (50 min | Contínuo)
12. **Intervalado Clássico de VO2 Máximo 5x1000m** (55 min | Intervalado)
13. **Tempo Run no Limiar de Lactato 25 min** (50 min | Contínuo)
14. **Fartlek Piramidal de Velocidade 1-2-3-2-1 min** (48 min | Intervalado)
15. **Hill Repeats Específicos de Força 8x45s** (45 min | Intervalado)
16. **Cruise Intervals no Limiar Fracionado 4x1500m** (58 min | Intervalado)
17. **Tiros Curtos de Economia e Sprints 10x400m** (50 min | Intervalado)
18. **Corrida Regenerativa de Descompressão** (40 min | Regenerativo)
19. **Tempo Run Fracionado 3x8 min no Limiar** (55 min | Intervalado)
20. **Longão Progressivo com Fast Finish 14 km** (80 min | Longo)

### Nível Avançado (10 Treinos — Foco em Performance, Duplo Limiar e Pace de Prova)
21. **Intervalado Norueguês de Duplo Limiar 4x2000m** (65 min | Intervalado)
22. **Tiros de VO2 Máximo Severo em Pista 10x800m** (65 min | Intervalado)
23. **Bloco Específico de Pace de Maratona 18 km** (95 min | Longo)
24. **Over-Under Tempo Run Alternado 6x(3+3 min)** (68 min | Intervalado)
25. **Intervalado Láctico de Pista 15x400m Curta Pausa** (60 min | Intervalado)
26. **Hill Repeats de Força Bruta e VO2 12x1 min** (62 min | Intervalado)
27. **Fartlek Quêniano de Volume 20x(1 min Forte / 1 min Trote)** (70 min | Intervalado)
28. **Longão Progressivo de 3 Fases 24 km** (115 min | Longo)
29. **Cruise Intervals Extensos 3x4000m Ritmo Meia Maratona** (75 min | Intervalado)
30. **Tapering Sharpener (Polimento Pré-Prova 10k/21k)** (45 min | Intervalado)

---

## 4. Integração na Interface Gráfica (`WorkoutCatalogTab.jsx`)

A aba **Catálogo de Treinos** no Dashboard foi otimizada para apresentar visualmente os 30 treinos com todos os seus atributos:
- Badge de tempo de duração (`total_duration_minutes`).
- Bloco destacado com as três fases do treino (`🔥 Aquecimento`, `🎯 Principal`, `🧘 Volta à Calma`).
- Indicação de `🔬 Objetivo Biológico` em cada card, permitindo ao corredor compreender a fisiologia por trás de cada estímulo na sua periodização.

---

## 5. Como Executar e Buildar o Projeto

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
