# Documentação Técnica e Científica: PlanoDeCorrida App

**Data:** Julho de 2026 | **Versão:** 2.6 (Esvaziamento do Catálogo de Treinos para Reinicialização)  
**Arquitetura:** React 18 + Vite + TailwindCSS + Firebase Auth + JSON API Database

---

## 1. Visão Geral do Sistema e Atualização Recente (v2.6)

O **PlanoDeCorrida** é uma aplicação web adaptativa focada em periodização esportiva para corredores de rua de todos os níveis. O sistema calcula automaticamente cronogramas semanais baseados na idade, nível técnico e distância objetivo (de 5 km a Maratona).

Na **versão 2.6**, conforme solicitado explicitamente, **todos os treinos do catálogo foram apagados (`workouts: []`)** no arquivo [workouts_api_catalog.json](file:///c:/Users/T.I/Desktop/Projetos/PlanoDeCorrida/src/lib/workouts_api_catalog.json).

O sistema agora opera no modo base:
- O [workoutCatalog.js](file:///c:/Users/T.I/Desktop/Projetos/PlanoDeCorrida/src/lib/workoutCatalog.js) retorna listas vazias (`[]`) para todos os níveis (`beginner`/`iniciante`, `intermediate`/`intermediario`, `advanced`/`avancado`).
- O motor de treinamento ([trainingEngine.js](file:///c:/Users/T.I/Desktop/Projetos/PlanoDeCorrida/src/lib/trainingEngine.js)) mantém em funcionamento a lógica de dias semanais com suas descrições fisiológicas contínuas de fallback e está pronto para receber o novo conjunto de dados JSON assim que for fornecido.

---

## 2. Estrutura do Contrato JSON de Treinos (`workouts_api_catalog.json`)

O arquivo [workouts_api_catalog.json](file:///c:/Users/T.I/Desktop/Projetos/PlanoDeCorrida/src/lib/workouts_api_catalog.json) se encontra estruturado e limpo no seguinte formato:
```json
{
  "workouts": []
}
```

---

## 3. Regra Universal: Segunda-feira de Fortalecimento Opcional

Todas as Segundas-feiras no calendário semanal foram configuradas com o treino específico de **Fortalecimento Funcional e Mobilidade para Corredores**, classificado com o status de **⭐ Opcional (`isOptional: true`)**.
- **Benefício de Progresso:** Dias opcionais não entram como obrigatoriedade no cálculo percentual de progresso do `WeekCard.jsx`.

---

## 4. Comandos do Projeto e Documentação

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
