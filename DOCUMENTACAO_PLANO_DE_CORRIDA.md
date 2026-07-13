# Documentação Técnica e Científica: PlanoDeCorrida App

**Data:** Julho de 2026 | **Versão:** 2.3  
**Arquitetura:** React 18 + Vite + TailwindCSS + Firebase Auth

---

## 1. Visão Geral do Sistema e Atualizações Recentes (v2.3)

O **PlanoDeCorrida** é uma aplicação web adaptativa focada em periodização esportiva para corredores de rua de todos os níveis. O sistema calcula automaticamente cronogramas semanais baseados na idade, nível técnico e distância objetivo (de 5 km a 42 km - Maratona).

Na **versão 2.3**, por solicitação expressa de remoção total dos treinos predefinidos no código (`remova todos os treinos`), o arquivo `src/lib/workoutCatalog.js` foi configurado com um catálogo limpo/vazio (`beginner: [], intermediate: [], advanced: []`).
- A engine de treino (`trainingEngine.js`) continua gerando perfeitamente a periodização de distâncias, paces alvos, dias de descanso e fortalecimento com base na lógica matemática de volume semanal e faixas etárias.
- A interface da aba de catálogo (`WorkoutCatalogTab.jsx`) apresenta agora um estado limpo informando que não há treinos no catálogo no momento.

---

## 2. Regra Universal: Fortalecimento Opcional nas Segundas-feiras

Em conformidade com as boas práticas da fisiologia do exercício e feedback de usuários, **todas as Segundas-feiras** no calendário gerado foram configuradas como **Treino de Fortalecimento e Mobilidade com o status de ⭐ Opcional (`isOptional: true`)**.
- **Impacto no Progresso:** Como dias opcionais não contam no denominador de dias obrigatórios no `WeekCard.jsx`, o corredor que optar pelo repouso passivo ou por uma sessão leve de mobilidade após o longão de domingo não sofrerá penalização na barra de progresso semanal.

---

## 3. Como Executar e Buildar o Projeto

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
