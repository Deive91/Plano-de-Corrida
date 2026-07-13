/**
 * ============================================================================
 * CATÁLOGO OFICIAL DE TREINOS PARA CORRIDA — PLANO DE CORRIDA APP
 * 30 Treinos Científicos Distintos (10 Iniciante + 10 Intermediário + 10 Avançado)
 * Estrutura 100% de acordo com o contrato da API JSON: total_duration_minutes, phases e physiological_goal.
 * ============================================================================
 */

export const WORKOUT_CATALOG = {
  beginner: [
    {
      id: 'beg_01',
      api_id: 1,
      title: 'Adaptação Articular Run-Walk 1:1',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 30,
      description: 'Alterne 1 min correndo suave com 1 min caminhando ativa. Foco em adaptação articular.',
      phases: {
        warmup: '5 minutos de caminhada rápida em PSE 3 (60% FCmáx) com rotação de tornozelos e quadril.',
        main_set: '10 séries de: 1 minuto trote leve em PSE 5 (Zona 2, 65-70% FCmáx) alternado com 1 minuto de caminhada ativa em PSE 3 para recuperação.',
        cooldown: '5 minutos de caminhada desacelerando gradualmente e alongamento estático de panturrilhas.'
      },
      physiological_goal: 'Aumento da capacidade aeróbia base e fortalecimento de tendões e ligamentos para absorção de impacto.'
    },
    {
      id: 'beg_02',
      api_id: 2,
      title: 'Evolução Contínua Run-Walk 2:1',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 35,
      description: 'Alterne 2 min correndo suave com 1 min de caminhada. Mantenha os ombros relaxados.',
      phases: {
        warmup: '5 minutos de caminhada leve em PSE 3 progressiva até trote suave.',
        main_set: '8 séries de: 2 minutos de corrida leve em Zona 2 (PSE 5) alternados com 1 minuto de caminhada de recuperação ativa em PSE 3.',
        cooldown: '6 minutos de caminhada regenerativa com respiração diafragmática profunda.'
      },
      physiological_goal: 'Desenvolvimento da eficiência mitocondrial e progressão de tolerância ao tempo contínuo de corrida.'
    },
    {
      id: 'beg_03',
      api_id: 3,
      title: 'Consolidação Aeróbica Run-Walk 3:1',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 37,
      description: 'Alterne 3 min correndo no ritmo de conversa com 1 min caminhando para recuperar.',
      phases: {
        warmup: '5 minutos de caminhada acelerada e educativos básicos de corrida (skipping alto e anfersen curto).',
        main_set: '7 séries de: 3 minutos de corrida em ritmo conversacional Zona 2 (PSE 5-6) com 1 minuto de caminhada para controle de frequência cardíaca.',
        cooldown: '4 minutos de caminhada lenta e alongamento de membros inferiores.'
      },
      physiological_goal: 'Expansão do volume sistólico e consolidação da economia de corrida aeróbica.'
    },
    {
      id: 'beg_04',
      api_id: 4,
      title: 'Iniciação ao Trote Contínuo 15 min',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 30,
      description: 'Trote muito suave sem paradas para caminhada. Se faltar ar, diminua o tamanho da passada.',
      phases: {
        warmup: '8 minutos de caminhada dinâmica progressiva, elevando a FC para a Zona 1 superior.',
        main_set: '15 minutos de corrida contínua ininterrupta em Zona 2 (PSE 5, ritmo de conversa, aprox. 65-72% FCmáx).',
        cooldown: '7 minutos de caminhada regenerativa para retorno à frequência cardíaca de repouso.'
      },
      physiological_goal: 'Superação da barreira de continuidade aeróbica e estabilização de cadência em 170-175 SPM.'
    },
    {
      id: 'beg_05',
      api_id: 5,
      title: 'Treino de Cadência e Passada Curta',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 32,
      description: 'Foco em 180 passos por minuto (cadência alta) e passos curtos, diminuindo o impacto articular.',
      phases: {
        warmup: '5 minutos de trote muito leve (PSE 4) com exercícios de mobilidade de tornozelo.',
        main_set: '20 minutos contínuos em Zona 2 (PSE 5), inserindo a cada 3 minutos 45 segundos com foco exclusivo em cadência alta (alvo de 180 passos por minuto) com passada curta e contato rápido com o solo.',
        cooldown: '7 minutos de trote desacelerando até caminhada e soltura miofascial.'
      },
      physiological_goal: 'Redução da força de impacto articular (overstriding) e aprimoramento neuromuscular da cadência.'
    },
    {
      id: 'beg_06',
      api_id: 6,
      title: 'Fartlek Lúdico de Adaptação',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 34,
      description: 'Brincadeira com velocidade: acelere 1 min e 30 seg, recupere 2 min trotando leve.',
      phases: {
        warmup: '6 minutos de trote leve em Zona 1/Zona 2 + mobilidade quadril.',
        main_set: '6 séries de: 1 minuto e 30 segundos em ritmo moderado (Zona 3, PSE 6-7) seguidos de 2 minutos de trote muito leve em Zona 1 (PSE 4) para recuperação.',
        cooldown: '7 minutos de caminhada regenerativa com alongamento de cadeia posterior.'
      },
      physiological_goal: 'Introdução controlada à variação de frequência cardíaca e recrutamento de fibras musculares do tipo IIa.'
    },
    {
      id: 'beg_07',
      api_id: 7,
      title: 'Tiros Curtos Neuromusculares na Reta',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 33,
      description: '6 repetições de 100m rápidas posturadas com bastante caminhada de intervalo.',
      phases: {
        warmup: '10 minutos de trote aeróbico Zona 2 + 3 educativos de corrida de 30 metros cada.',
        main_set: '6 repetições de 100 metros (aprox. 20-25 segundos) em ritmo forte e controlado (PSE 7-8, foco na postura alta e braçada ativa), com 1 minuto e 30 segundos de caminhada completa de recuperação entre cada tiro.',
        cooldown: '8 minutos de trote regenerativo muito leve na Zona 1 (PSE 3-4).'
      },
      physiological_goal: 'Melhoria da economia de corrida, recrutamento de unidades motoras e mecânica de passada sem acúmulo excessivo de lactato.'
    },
    {
      id: 'beg_08',
      api_id: 8,
      title: 'Treino de Força em Rampa Suave',
      type: 'HILL',
      workout_type: 'intervalado',
      total_duration_minutes: 35,
      description: 'Subida curta de 30 seg em ritmo firme, descendo caminhando devagar para poupar o joelho.',
      phases: {
        warmup: '10 minutos de trote contínuo em terreno plano em Zona 2 (PSE 5).',
        main_set: '5 repetições de subida suave de 30 segundos com inclinação de 4% a 6% em ritmo moderado-forte (PSE 7, tronco levemente inclinado à frente), descendo caminhando lentamente (recuperação de 1 a 2 min).',
        cooldown: '10 minutos de trote leve no plano e alongamento de glúteos e quadríceps.'
      },
      physiological_goal: 'Fortalecimento específico de quadríceps, glúteos e panturrilhas com menor impacto articular na descida.'
    },
    {
      id: 'beg_09',
      api_id: 9,
      title: 'Iniciação ao Limiar (Mini Tempo Run)',
      type: 'TEMPO',
      workout_type: 'continuo',
      total_duration_minutes: 36,
      description: '2 blocos de 6 min no limiar moderado (Zona 3), com 3 min de trote super leve no meio.',
      phases: {
        warmup: '10 minutos de trote leve Zona 2 (PSE 5) para aquecimento muscular.',
        main_set: '2 blocos de 6 minutos em ritmo de limiar aeróbico/moderado (Zona 3, PSE 6-7, respiração ofegante mas rítmica), com 3 minutos de trote super leve (Zona 1) entre os blocos.',
        cooldown: '11 minutos de caminhada/trote regressivo e alongamento geral.'
      },
      physiological_goal: 'Estimulação inicial do clearance (remoção) de lactato sanguínio e sustentação de ritmo moderado.'
    },
    {
      id: 'beg_10',
      api_id: 10,
      title: 'Longão de Conquista Aeróbica 25 min',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 40,
      description: '25 min correndo contínuo em ritmo confortável e estável, sem parar para caminhar.',
      phases: {
        warmup: '7 minutos de caminhada e trote progressivo em Zona 1.',
        main_set: '25 minutos de corrida contínua em ritmo estritamente confortável e estável na Zona 2 (PSE 5, ritmo onde é possível falar frases completas sem falta de ar).',
        cooldown: '8 minutos de caminhada de relaxamento e alongamento completo de membros inferiores.'
      },
      physiological_goal: 'Aumento da capilarização muscular, utilização de ácidos graxos (gordura) como combustível aeróbico e resiliência mental base.'
    }
  ],
  intermediate: [
    {
      id: 'adv_01',
      api_id: 11,
      title: 'Volume Aeróbico de Base em Zona 2',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 50,
      description: 'Corrida contínua na transição aeróbica sem exceder o limiar de fala.',
      phases: {
        warmup: '10 minutos de trote suave na transição Zona 1 para Zona 2.',
        main_set: '32 minutos de corrida contínua estável na Zona 2 pura (70-75% FCmáx, PSE 5), mantendo cadência média próxima a 180 SPM e postura do tronco ereta.',
        cooldown: '8 minutos de trote regenerativo em Zona 1 e alongamento estático.'
      },
      physiological_goal: 'Densidade mitocondrial de fibras tipo I, economia de glicogênio e fortalecimento cardiovascular sustentado.'
    },
    {
      id: 'adv_02',
      api_id: 12,
      title: 'Intervalado Clássico de VO2 Máximo 5x1000m',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 55,
      description: '5 repetições de 1.000m em ritmo alvo de 5k com 2.5 min de trote de recuperação.',
      phases: {
        warmup: '15 minutos de trote em Zona 2 + 4 educativos dinâmicos e 2 acelerações de 80m.',
        main_set: '5 repetições de 1.000 metros em ritmo alvo de 5km (Zona 4 superior / Zona 5, PSE 8-9, 90-95% FCmáx), com 2 minutos e 30 segundos de trote muito leve de recuperação entre os tiros.',
        cooldown: '12 minutos de trote regenerativo em Zona 1 (PSE 3-4).'
      },
      physiological_goal: 'Expansão direta do VO2 Máximo (consumo máximo de oxigênio), potência aeróbica e tolerância severa ao ácido lático.'
    },
    {
      id: 'adv_03',
      api_id: 13,
      title: 'Tempo Run no Limiar de Lactato 25 min',
      type: 'TEMPO',
      workout_type: 'continuo',
      total_duration_minutes: 50,
      description: '25 min contínuos no ritmo confortávelmente duro onde o lactato começa a se acumular.',
      phases: {
        warmup: '15 minutos de trote em Zona 2 com progressão final nas últimas 2 minutos para aquecer o sistema cardiorrespiratório.',
        main_set: '25 minutos contínuos cravados no ritmo de limiar anaeróbico (Tempo Run, Zona 4, PSE 7-8, aprox. 85-88% FCmáx, ritmo confortávelmente duro).',
        cooldown: '10 minutos de trote leve de descompressão em Zona 1.'
      },
      physiological_goal: 'Elevação do limiar de lactato (ponto onde a produção supera a remoção), permitindo correr mais rápido por mais tempo sem exaustão.'
    },
    {
      id: 'adv_04',
      api_id: 14,
      title: 'Fartlek Piramidal de Velocidade',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 48,
      description: 'Acelerações de 1, 2, 3, 2 e 1 minuto fortes em Zona 4/5 com igual tempo de trote.',
      phases: {
        warmup: '12 minutos de trote leve Zona 2 e mobilidade de tornozelo.',
        main_set: 'Bloco piramidal contínuo de acelerações em Zona 4/5 (PSE 8-9) seguidas por tempos iguais de trote em Zona 1/2: 1 min forte / 1 min trote -> 2 min forte / 2 min trote -> 3 min forte / 3 min trote -> 2 min forte / 2 min trote -> 1 min forte / 1 min trote.',
        cooldown: '10 minutos de trote regenerativo e soltura muscular.'
      },
      physiological_goal: 'Flexibilidade metabólica, capacidade de variação e recuperação do ritmo sob fadiga em tempo real.'
    },
    {
      id: 'adv_05',
      api_id: 15,
      title: 'Hill Repeats Específicos de Força e Potência',
      type: 'HILL',
      workout_type: 'intervalado',
      total_duration_minutes: 45,
      description: '8 subidas fortes de 45 segundos em ladeira moderada com descida leve.',
      phases: {
        warmup: '15 minutos de trote aeróbico Zona 2 em terreno plano até a base da subida.',
        main_set: '8 repetições de 45 segundos em subida moderadamente íngreme ( inclinação de 6 a 8%) com intensidade forte e impulsão máxima (PSE 8-9, Zona 5), descendo a ladeira em trote super leve/caminhada para recuperação (90 segundos).',
        cooldown: '12 minutos de trote no plano e alongamento de panturrilhas.'
      },
      physiological_goal: 'Potência neuromuscular, recrutamento máximo das fibras musculares e ganho de força propulsiva específica de corrida sem o impacto das retas em velocidade.'
    },
    {
      id: 'adv_06',
      api_id: 16,
      title: 'Cruise Intervals no Limiar Fracionado 4x1500m',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 58,
      description: '4 repetições de 1.500m no limiar aeróbico com pausas curtas de 75 segundos.',
      phases: {
        warmup: '15 minutos de trote Zona 2 + 3 acelerações de 60m.',
        main_set: '4 repetições de 1.500 metros em ritmo de 10km a Meia Maratona (Limiar, Zona 4, PSE 7-8), com apenas 1 minuto e 15 segundos de trote leve de pausa entre as séries.',
        cooldown: '12 minutos de trote em Zona 1 para remoção de resíduos metabólicos.'
      },
      physiological_goal: 'Sustentação prolongada do limiar anaeróbico com curta recuperação para maximizar a eficiência de clearance láctico.'
    },
    {
      id: 'adv_07',
      api_id: 17,
      title: 'Tiros Curtos de Economia e Sprints 10x400m',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 50,
      description: '10 repetições de 400 metros rápidas com postura alta e cadência elevada.',
      phases: {
        warmup: '15 minutos de trote progressivo + educativos de corrida.',
        main_set: '10 repetições de 400 metros em ritmo de 3km a 5km (Zona 5, PSE 8-9, alta velocidade mecânica), com 1 minuto e 30 segundos de caminhada ou trote muito leve de recuperação.',
        cooldown: '10 minutos de trote regenerativo final na Zona 1.'
      },
      physiological_goal: 'Aprimoramento da economia de corrida, tolerância mental ao desconforto de alta intensidade e eficiência mecânica sob velocidade.'
    },
    {
      id: 'adv_08',
      api_id: 18,
      title: 'Corrida Regenerativa de Descompressão',
      type: 'EASY',
      workout_type: 'regenerativo',
      total_duration_minutes: 40,
      description: 'Trote extremamente leve em Zona 1 para fluxo sanguíneo de recuperação.',
      phases: {
        warmup: '5 minutos de caminhada solta.',
        main_set: '30 minutos de trote extremamente leve e relaxado na Zona 1 pura (PSE 3-4, abaixo de 65% FCmáx), mantendo a sensação de fluidez e sem nenhum esforço cardiovascular.',
        cooldown: '5 minutos de caminhada e alongamentos suaves de relaxamento.'
      },
      physiological_goal: 'Aumento do fluxo sanguíneo para irrigar fibras musculares danificadas de treinos intensos anteriores, acelerando a recuperação sem gerar estresse central.'
    },
    {
      id: 'adv_09',
      api_id: 19,
      title: 'Tempo Run Fracionado 3x8 min no Limiar',
      type: 'TEMPO',
      workout_type: 'intervalado',
      total_duration_minutes: 55,
      description: '3 blocos de 8 min no limiar aeróbico com 2 min de trote super leve entre eles.',
      phases: {
        warmup: '15 minutos de trote leve em Zona 2.',
        main_set: '3 repetições de 8 minutos no ritmo alvo de 10km/limiar (Zona 4, PSE 7-8), intercaladas com 2 minutos de trote muito leve em Zona 1 para estabilizar a respiração.',
        cooldown: '12 minutos de trote final regenerativo em Zona 1.'
      },
      physiological_goal: 'Acúmulo de tempo de qualidade em limiar anaeróbico (total de 24 min) com menor estresse sistêmico graças às pausas estratégicas.'
    },
    {
      id: 'adv_10',
      api_id: 20,
      title: 'Longão Progressivo com Fast Finish 14 km',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 80,
      description: '8 km em ritmo aeróbico suave seguidos de 4 km no ritmo de Meia Maratona no final.',
      phases: {
        warmup: '15 minutos de trote inicial confortável em Zona 1/Zona 2 baixa.',
        main_set: '8 km em ritmo aeróbico estável de longa distância em Zona 2 (PSE 5), seguidos por 4 km finais em progressão para o ritmo de Meia Maratona / Zona 3 superior (Fast Finish, PSE 7, simulando o cansaço final de prova).',
        cooldown: '10 minutos de trote muito lento em Zona 1 e hidratação imediata.'
      },
      physiological_goal: 'Treinamento do corpo e da mente para sustentar ou aumentar o pace mesmo após depleção parcial de glicogênio muscular.'
    }
  ],
  advanced: [
    {
      id: 'eli_01',
      api_id: 21,
      title: 'Intervalado Norueguês de Duplo Limiar 4x2000m',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 65,
      description: '4 tiros controlados no limiar sem exceder a acidez com 1.5 min de intervalo.',
      phases: {
        warmup: '15 minutos de trote aeróbico Zona 2 + 4 progressões de 100m.',
        main_set: '4 repetições de 2.000 metros controladas no sub-limiar / limiar anaeróbico (Zona 4 inferior, 3.5 a 4.0 mmol/L de lactato, PSE 7.5, ritmo cravado sem oscilações bruscas), com 1 min e 30s de trote leve de recuperação.',
        cooldown: '15 minutos de trote regenerativo em Zona 1 pura.'
      },
      physiological_goal: 'Maximização do tempo sustentado em limiar sem ultrapassar a barreira da acidose excessiva, promovendo adaptações periféricas e centrais de elite.'
    },
    {
      id: 'eli_02',
      api_id: 22,
      title: 'Tiros de VO2 Máximo Severo em Pista 10x800m',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 65,
      description: '10 repetições de 800m no pace de 5k ou 3k com 2 min de trote/caminhada.',
      phases: {
        warmup: '18 minutos de trote em Zona 2 + rotina completa de educativos e 3 tiros de 60m no pace de sprint.',
        main_set: '10 repetições de 800 metros no ritmo alvo exato de 3km/5km (Zona 5, PSE 9, mais de 93% da FCmáx), com 2 minutos exatos de trote/caminhada de recuperação entre os tiros para manter o padrão mecânico alto.',
        cooldown: '15 minutos de trote regenerativo em Zona 1 e soltura miofascial profunda.'
      },
      physiological_goal: 'Otimização máxima do débito cardíaco, consumo de oxigênio de pico (VO2máx) e resiliência à acidose metabólica extrema.'
    },
    {
      id: 'eli_03',
      api_id: 23,
      title: 'Bloco Específico de Pace de Maratona 18 km',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 95,
      description: '12 km contínuos cravados no ritmo alvo de 42k após aquecimento aeróbico.',
      phases: {
        warmup: '20 minutos de trote aeróbico de aquecimento em Zona 2.',
        main_set: '12 km contínuos cravados exatamente no ritmo alvo da Maratona (Marathon Pace - MP, Zona 3 superior / Zona 4 baixa, PSE 6.5-7.0), mantendo economia de movimento perfeita e ingestão programada de gel/eletrólitos.',
        cooldown: '15 minutos de trote regenerativo na Zona 1.'
      },
      physiological_goal: 'Economia de corrida no ritmo exato da prova de 42k, adaptação gastrointestinal à nutrição sob esforço e eficiência do metabolismo lipídico/glicolítico combinado.'
    },
    {
      id: 'eli_04',
      api_id: 24,
      title: 'Over-Under Tempo Run Alternado 6x(3+3 min)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 68,
      description: '3 min acima do limiar alternados com 3 min abaixo por 36 min contínuos.',
      phases: {
        warmup: '16 minutos de trote Zona 2 + ativação de core e glúteos.',
        main_set: '6 blocos contínuos sem pausa de 6 minutos contendo: 3 minutos acima do limiar (Over, ritmo de 5km/10km, Zona 4 alto/Zona 5, PSE 8.5) alternados com 3 minutos logo abaixo do limiar (Under, ritmo de Meia Maratona, Zona 3 alto, PSE 6.5). Total de 36 minutos contínuos alternando ritmos fortes.',
        cooldown: '16 minutos de trote de descompressão em Zona 1.'
      },
      physiological_goal: 'Treinamento dinâmico do sistema transportador de monocarboxilato (MCT), ensinando as fibras musculares a reutilizar e reciclar o lactato como combustível durante a própria corrida.'
    },
    {
      id: 'eli_05',
      api_id: 25,
      title: 'Intervalado Láctico de Pista 15x400m Curta Pausa',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 60,
      description: '15 repetições de 400m fortes com apenas 60 segundos de pausa entre elas.',
      phases: {
        warmup: '18 minutos de trote progressivo + educativos e sprints curtos.',
        main_set: '15 repetições de 400 metros em ritmo rigoroso de 5km (Zona 5, PSE 8.5-9), com apenas 60 segundos de trote leve de recuperação entre cada tiro, gerando fadiga acumulada controlada.',
        cooldown: '15 minutos de trote super leve em Zona 1 para clearence sistêmico.'
      },
      physiological_goal: 'Tolerância à fadiga central sob alta velocidade, capacidade tamponante e consistência mecânica na presence de íons H+.'
    },
    {
      id: 'eli_06',
      api_id: 26,
      title: 'Hill Repeats de Força Bruta e VO2 12x1 min',
      type: 'HILL',
      workout_type: 'intervalado',
      total_duration_minutes: 62,
      description: '12 subidas intensas de 1 minuto em rampa íngreme para força propulsiva.',
      phases: {
        warmup: '18 minutos de trote Zona 2 até ladeira longa e regular.',
        main_set: '12 repetições de 1 minuto em subida de 7% a 9% com esforço intenso (PSE 9, Zona 5, máxima acentuação da impulsão de tornozelo e joelho), com descida caminhando/trote lento de 1 minuto e 30 segundos para recuperação completa.',
        cooldown: '15 minutos de trote leve no plano.'
      },
      physiological_goal: 'Desenvolvimento de potência aeróbica pura combinada com força explosiva de membros inferiores e resistência dos tendões de Aquiles.'
    },
    {
      id: 'eli_07',
      api_id: 27,
      title: 'Fartlek Quêniano de Volume 20x(1 min Forte / 1 min Moderado)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 70,
      description: '40 minutos alternando 1 min rápido com 1 min moderado sem parar.',
      phases: {
        warmup: '15 minutos de trote aeróbico Zona 2.',
        main_set: '40 minutos ininterruptos de Fartlek alterando: 1 minuto forte no pace de 5km/10km (Zona 4/5, PSE 8.5) por 1 minuto de recuperação ativa em ritmo moderado aeróbico (Zona 3, pace de maratona, sem cair para trote lento ou caminhada).',
        cooldown: '15 minutos de trote regenerativo na Zona 1.'
      },
      physiological_goal: 'Capacidade aeróbica de alto nível, depuração contínua de lactato em velocidades altas e resistência cardiovascular de elite.'
    },
    {
      id: 'eli_08',
      api_id: 28,
      title: 'Longão Progressivo de 3 Fases 24 km',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 115,
      description: '10 km leve + 8 km moderado + 6 km fortes no ritmo de Meia Maratona no final.',
      phases: {
        warmup: '15 minutos de trote leve de entrada em Zona 1/2.',
        main_set: 'Dividido em 3 fases contínuas sem paradas: Fase 1 (10 km em ritmo aeróbico leve Zona 2, PSE 5); Fase 2 (8 km em ritmo moderado de Maratona Zona 3, PSE 6.5); Fase 3 (6 km finais fortes no ritmo de Meia Maratona/Limiar Zona 4, PSE 8).',
        cooldown: '15 minutos de trote super leve em Zona 1 e protocolo pós-treino de recuperação.'
      },
      physiological_goal: 'Simulação precisa das demandas das fases final e intermediária de provas longas (21k e 42k), recrutando fibras profundas sob estresse glicolítico reduzido.'
    },
    {
      id: 'eli_09',
      api_id: 29,
      title: 'Cruise Intervals Extensos 3x4000m Ritmo Meia Maratona',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 75,
      description: '3 blocos de 4 km em ritmo de 21k com 2 min de trote entre eles.',
      phases: {
        warmup: '15 minutos de trote Zona 2 + alongamento dinâmico.',
        main_set: '3 repetições longas de 4.000 metros (4 km cada) no ritmo exato de Meia Maratona (Zona 4 baixa, limiar aeróbico-anaeróbico, PSE 7.5), com 2 minutos de trote de intervalo entre cada bloco de 4 km.',
        cooldown: '15 minutos de trote regenerativo em Zona 1.'
      },
      physiological_goal: 'Estabilização psicológica e metabólica do pace de 21km com volume expressivo de qualidade de limiar (12 km totais rápidos).'
    },
    {
      id: 'eli_10',
      api_id: 30,
      title: 'Tapering Sharpener (Polimento Pré-Prova 10k/21k)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 45,
      description: '6 tiros de 400m no ritmo alvo exato da prova com boa recuperação para afiar o corpo.',
      phases: {
        warmup: '15 minutos de trote leve em Zona 2 + educativos técnicos.',
        main_set: '6 repetições de 400 metros no ritmo exato objetivo da prova alvo (Zona 4/5, PSE 7-8, buscando leveza e mecânica solta sem gerar fadiga residual), com 1 minuto e 30 segundos de caminhada entre os tiros.',
        cooldown: '12 minutos de trote muito leve em Zona 1 e alongamentos relaxantes.'
      },
      physiological_goal: 'Manutenção da tensão neuromuscular e do tônus muscular (afinamento/polimento) na semana da prova principal, sem depletar estoques energéticos.'
    }
  ]
};

/**
 * Retorna os detalhes de um treino específico do catálogo pelo nível do usuário,
 * tipo de treino pretendido pela semana (EASY, LONG, etc.), número da semana e dia.
 */
export function getCatalogWorkout(level, type, weekNumber, dayIndex) {
  const list = WORKOUT_CATALOG[level] || WORKOUT_CATALOG.beginner;
  
  // Filtra pelo tipo da sessão (EASY, LONG, INTERVAL, TEMPO, HILL, CROSS_TRAINING)
  const filtered = list.filter(w => w.type === type);
  
  if (filtered.length > 0) {
    const idx = (weekNumber + dayIndex) % filtered.length;
    return filtered[idx];
  }
  
  // Se for REST ou STRENGTH ou tipo sem match exato, pega um fallback por índice geral
  const idx = (weekNumber * 3 + dayIndex) % list.length;
  return list[idx];
}
