/**
 * ============================================================================
 * CATÁLOGO OFICIAL DE TREINOS PARA CORRIDA — PLANO DE CORRIDA APP
 * 90 Treinos Científicos Distintos (30 Iniciante + 30 Intermediário + 30 Avançado)
 * Estrutura enriquecida com contrato API/JSON: total_duration_minutes, phases e physiological_goal.
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
    },
    {
      id: 'beg_11',
      api_id: 31,
      title: 'Corrida Descalço na Grama / Areia Batida (Propriocepção)',
      type: 'EASY',
      workout_type: 'regenerativo',
      total_duration_minutes: 25,
      description: '15 a 20 min de trote leve em grama macia ou areia firme para fortalecer os músculos intrínsecos dos pés.',
      phases: {
        warmup: '5 minutos de caminhada leve descalço na grama com mobilidade dos dedos dos pés.',
        main_set: '15 minutos de trote muito leve na Zona 1 (PSE 4) em grama limpa ou areia batida, sentindo o amortecimento natural do antepé e médio-pé.',
        cooldown: '5 minutos de caminhada e massagem plantar com bolinha de tênis.'
      },
      physiological_goal: 'Fortalecimento da musculatura intrínseca plantar e ganho de propriocepção proprioceptiva.'
    },
    {
      id: 'beg_12',
      api_id: 32,
      title: 'Treino de Cadência e Passada Curtinha (180 SPM)',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 32,
      description: 'Foco em 180 passos por minuto com passos curtos, diminuindo o impacto no joelho.',
      phases: {
        warmup: '6 minutos de trote leve Zona 1 + alongamento dinâmico.',
        main_set: '20 minutos em Zona 2 (PSE 5), concentrando-se em dar passos rápidos e leves como se estivesse pisando em ovos (cadência alvo: 178-182 SPM).',
        cooldown: '6 minutos de caminhada e soltura miofascial de panturrilhas.'
      },
      physiological_goal: 'Redução de impacto vertical e economia de energia mecânica.'
    },
    {
      id: 'beg_13',
      api_id: 33,
      title: 'Progressão de Fim de Treino (Fast Finish Leve)',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 35,
      description: 'Trote leve por 20 min com os últimos 5 min em ritmo levemente mais ágil.',
      phases: {
        warmup: '7 minutos de trote inicial de adaptação.',
        main_set: '18 minutos em Zona 2 (PSE 5) seguidos imediatamente de 5 minutos em Zona 3 (PSE 6, respiração um pouco mais profunda).',
        cooldown: '5 minutos de caminhada de volta à calma.'
      },
      physiological_goal: 'Aprimoramento do recrutamento de fibras sob leve fadiga acumulada.'
    },
    {
      id: 'beg_14',
      api_id: 34,
      title: 'Pirâmide Crescente de Tempo (1-2-3-2-1 min)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 36,
      description: 'Acelerações em formato de pirâmide de tempo com trote leve de intervalo.',
      phases: {
        warmup: '8 minutos de trote e educativos básicos.',
        main_set: 'Séries em ritmo de Zona 3 superior (PSE 7): 1 min correndo (1 min trote) + 2 min correndo (1.5 min trote) + 3 min correndo (2 min trote) + 2 min correndo (1.5 min trote) + 1 min correndo.',
        cooldown: '7 minutos de trote muito lento em Zona 1.'
      },
      physiological_goal: 'Gerenciamento de esforço em diferentes durações e estimulação cardiorrespiratória.'
    },
    {
      id: 'beg_15',
      api_id: 35,
      title: 'Treino Regenerativo e Respiração Nasal',
      type: 'EASY',
      workout_type: 'regenerativo',
      total_duration_minutes: 28,
      description: 'Trote hiper leve tentando inspirar e expirar apenas pelo nariz pelo maior tempo possível.',
      phases: {
        warmup: '5 minutos de caminhada com controle respiratório.',
        main_set: '18 minutos de trote extremamente leve (Zona 1 pura, PSE 3), focando em manter a respiração exclusivamente nasal para garantir que a intensidade está na zona aeróbica de queima de gordura.',
        cooldown: '5 minutos de alongamento suave e relaxamento.'
      },
      physiological_goal: 'Autocontrole de ritmo aeróbico estrito e relaxamento do sistema nervoso simpático.'
    },
    {
      id: 'beg_16',
      api_id: 36,
      title: 'Cross-Training de Baixo Impacto (Ciclismo / Ergométrica)',
      type: 'CROSS_TRAINING',
      workout_type: 'continuo',
      total_duration_minutes: 40,
      description: '40 min de bicicleta ou elíptico na Zona 2 para manter a parte cardiorrespiratória sem impacto.',
      phases: {
        warmup: '5 minutos de pedal leve leve.',
        main_set: '30 minutos de ciclismo ou elíptico em cadência 85+ RPM com frequência cardíaca estável na Zona 2 (65-72% FCmáx).',
        cooldown: '5 minutos de giro muito leve.'
      },
      physiological_goal: 'Manutenção da capacidade aeróbia sem estresse mecânico ou impacto ósseo.'
    },
    {
      id: 'beg_17',
      api_id: 37,
      title: 'Cross-Training Aquático (Natação / Hidro-trote)',
      type: 'CROSS_TRAINING',
      workout_type: 'continuo',
      total_duration_minutes: 35,
      description: 'Corrida dentro da piscina ou natação leve contínua para descompressão articular.',
      phases: {
        warmup: '5 minutos de alongamento dentro da água e flutuação.',
        main_set: '25 minutos de hidro-corrida (deep water running com colete ou no raso) em Zona 2.',
        cooldown: '5 minutos de natação solta e relaxamento.'
      },
      physiological_goal: 'Descompressão da coluna e articulações mantendo estímulo hidrostático de retorno venoso.'
    },
    {
      id: 'beg_18',
      api_id: 38,
      title: 'Tiros em Ladeira com Foco Postural (Tronco Inclinado)',
      type: 'HILL',
      workout_type: 'intervalado',
      total_duration_minutes: 34,
      description: '6 repetições de 25 segundos em subida com atenção à inclinação do corpo a partir dos tornozelos.',
      phases: {
        warmup: '10 minutos de trote leve no plano.',
        main_set: '6 repetições de 25 segundos em rampa moderada (PSE 7), concentrando-se na inclinação frontal de todo o corpo e elevação de joelhos. Descida caminhando.',
        cooldown: '9 minutos de trote no plano em Zona 1.'
      },
      physiological_goal: 'Fortalecimento de quadríceps e aprimoramento da biomecânica em subida.'
    },
    {
      id: 'beg_19',
      api_id: 39,
      title: 'Intervalado 400m Moderado (Iniciação à Pista)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 36,
      description: '4 a 5 voltas de 400m em ritmo firme e fluido com bastante intervalo.',
      phases: {
        warmup: '10 minutos de trote Zona 2 + 3 educativos na pista.',
        main_set: '5 repetições de 400 metros em ritmo moderado/forte (Zona 4, PSE 7), com 2 minutos exatos de caminhada/trote de intervalo.',
        cooldown: '8 minutos de trote leve na pista.'
      },
      physiological_goal: 'Familiarização com distâncias padronizadas de pista e controle de ritmo por volta.'
    },
    {
      id: 'beg_20',
      api_id: 40,
      title: 'Corrida Contínua com Educativos Pré-Treino',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 35,
      description: '10 min dedicados a Skipping, Anfersen e Soldadinho antes de correr 20 min contínuos.',
      phases: {
        warmup: '5 min caminhada + 10 min de rotina completa de educativos de corrida (skipping alto/baixo, anfersen, hop).',
        main_set: '15 minutos de corrida contínua em Zona 2 (PSE 5), aplicando a leveza e coordenação ativada pelos educativos.',
        cooldown: '5 minutos de caminhada de recuperação.'
      },
      physiological_goal: 'Refinamento da coordenação motora inter e intra-muscular específica de corrida.'
    },
    {
      id: 'beg_21',
      api_id: 41,
      title: 'Longão Contínuo de Conquista 30 min',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 42,
      description: '30 min ininterruptos em ritmo conversacional estrito.',
      phases: {
        warmup: '6 minutos de trote aquecendo progressivamente.',
        main_set: '30 minutos de corrida contínua estável na Zona 2 (PSE 5, conversacional puro).',
        cooldown: '6 minutos de caminhada leve e alongamento completo.'
      },
      physiological_goal: 'Aumento da resistência aeróbia e autoconfiança para distâncias maiores de 5k.'
    },
    {
      id: 'beg_22',
      api_id: 42,
      title: 'Treino de Trocas de Ritmo no Terreno (Trilha/Parque)',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 36,
      description: 'Corrida em parque de terra ou grama, adaptando a velocidade às ondulações do caminho.',
      phases: {
        warmup: '8 minutos de trote leve em terreno variado.',
        main_set: '20 minutos correndo de forma natural, desacelerando em subidas para manter a mesma frequência cardíaca da Zona 2/3 e acelerando suavemente nas descidas/retas.',
        cooldown: '8 minutos de caminhada/trote no plano.'
      },
      physiological_goal: 'Adaptação proprioceptiva de articulações em terrenos não pavimentados.'
    },
    {
      id: 'beg_23',
      api_id: 43,
      title: 'Tempo Run em Blocos 2x5 minutos',
      type: 'TEMPO',
      workout_type: 'continuo',
      total_duration_minutes: 35,
      description: 'Dois tiros longos de 5 min na Zona de Limiar com 3 min de trote super leve entre eles.',
      phases: {
        warmup: '10 minutos de trote Zona 2.',
        main_set: '2 blocos de 5 minutos na Zona 3/4 (PSE 7, respiração acelerada), com 3 minutos de trote/caminhada leve de pausa entre eles.',
        cooldown: '10 minutos de trote regenerativo de volta à calma.'
      },
      physiological_goal: 'Tolerância psicológica e fisiológica ao limiar aeróbico/anaeróbico.'
    },
    {
      id: 'beg_24',
      api_id: 44,
      title: 'Intervalado de Oxigenação 6x200m',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 34,
      description: 'Tiros descontraídos de 200 metros com postura leve e braçada ritmada.',
      phases: {
        warmup: '10 minutos de trote leve + educativos.',
        main_set: '6 repetições de 200 metros em ritmo moderado-forte (Zona 4, PSE 7.5), com 1 min e 30 seg de caminhada entre os tiros.',
        cooldown: '9 minutos de trote leve Zona 1.'
      },
      physiological_goal: 'Estimulação da velocidade sem fadiga acentuada ou acidose excessiva.'
    },
    {
      id: 'beg_25',
      api_id: 45,
      title: 'Trote Social / Corrida em Grupo com Parceiro',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 40,
      description: 'Corrida em grupo ou com amigo em ritmo tão confortável que permita conversar o tempo todo.',
      phases: {
        warmup: '5 minutos de caminhada com os parceiros de treino.',
        main_set: '30 minutos de trote na Zona 1/Zona 2 (PSE 4-5) batendo papo tranquilamente sem ofegar.',
        cooldown: '5 minutos de alongamento em grupo e socialização.'
      },
      physiological_goal: 'Aderência psicológica, relaxamento mental e garantia visual de manutenção do ritmo aeróbico leve.'
    },
    {
      id: 'beg_26',
      api_id: 46,
      title: 'Subida Longa e Constante 3x1 minuto',
      type: 'HILL',
      workout_type: 'intervalado',
      total_duration_minutes: 36,
      description: '3 subidas de 1 minuto em ritmo controlado e passadas estáveis.',
      phases: {
        warmup: '12 minutos de trote plano.',
        main_set: '3 repetições de 1 minuto em subida de 5% de inclinação com esforço equilibrado (PSE 7). Descida caminhando devagar (2 minutos de pausa).',
        cooldown: '12 minutos de trote no plano.'
      },
      physiological_goal: 'Força sustentada e recrutamento de fibras lentas sob inclinação.'
    },
    {
      id: 'beg_27',
      api_id: 47,
      title: 'Fartlek Crescente (1, 2 e 3 minutos fortes)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 38,
      description: 'Estímulos progressivos no tempo com igual tempo de trote leve.',
      phases: {
        warmup: '10 minutos de trote leve.',
        main_set: '1 min correndo forte (1 min trote) + 2 min correndo firme (2 min trote) + 3 min correndo moderado (3 min trote) + 1 min final ágil.',
        cooldown: '8 minutos de trote regenerativo.'
      },
      physiological_goal: 'Controle de pacing para não quebrar em estímulos com duração maior.'
    },
    {
      id: 'beg_28',
      api_id: 48,
      title: 'Corrida com Variação de Zonas (Z1 a Z3)',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 36,
      description: '10 min em Z1 (muito leve), 12 min em Z2 (leve) e 6 min finais em Z3 (moderado).',
      phases: {
        warmup: '8 minutos de trote super leve em Zona 1 (PSE 3-4).',
        main_set: '12 minutos na Zona 2 (PSE 5) seguidos imediatamente de 8 minutos na Zona 3 (PSE 6.5).',
        cooldown: '8 minutos de trote de descompressão em Zona 1.'
      },
      physiological_goal: 'Educação na transição metabólica de zonas de frequência cardíaca.'
    },
    {
      id: 'beg_29',
      api_id: 49,
      title: 'Longão de Resistência Mental e Hidratação em Movimento',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 45,
      description: '35 min de corrida leve com foco em testar tomar água ou isotônico em movimento sem engasgar.',
      phases: {
        warmup: '5 minutos de caminhada/trote inicial.',
        main_set: '35 minutos de corrida contínua na Zona 2 (PSE 5), praticando ingerir pequenos goles de água ou isotônico a cada 15 minutos mantendo o ritmo respiratório.',
        cooldown: '5 minutos de caminhada leve de encerramento.'
      },
      physiological_goal: 'Adaptação do esfíncter esofágico e estômago à ingestão de líquidos durante o impacto da corrida.'
    },
    {
      id: 'beg_30',
      api_id: 50,
      title: 'Treino de Celebração de Base (5 km contínuos de Formatura)',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 45,
      description: 'Sua conquista inicial: completar 5 quilômetros contínuos sem pausas, no seu próprio ritmo de vitória.',
      phases: {
        warmup: '8 minutos de caminhada progressiva + alongamento dinâmico e visualização da meta.',
        main_set: 'Completar 5 km contínuos em ritmo aeróbico confortável na Zona 2 (PSE 5-6), sentindo a leveza e a evolução cardiorrespiratória de tudo o que foi treinado.',
        cooldown: '7 minutos de caminhada orgulhosa de comemoração e alongamentos completos.'
      },
      physiological_goal: 'Consolidação de base de resistência para 5k e fixação da autoimagem de corredor apto.'
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
    },
    {
      id: 'adv_11',
      api_id: 51,
      title: 'Fartlek Sueco Regressivo e Progressivo',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 45,
      description: 'Séries no tempo: 3-2-1-2-3 minutos em pace forte alternando com trote.',
      phases: {
        warmup: '12 minutos de trote leve Zona 2.',
        main_set: '3 min forte (2 min trote) + 2 min forte (1.5 min trote) + 1 min forte (1 min trote) + 2 min forte (1.5 min trote) + 3 min forte.',
        cooldown: '10 minutos de trote leve regenerativo.'
      },
      physiological_goal: 'Variação metabólica e tolerância à mudança de ritmo sob estresse.'
    },
    {
      id: 'adv_12',
      api_id: 52,
      title: 'Longão em Terreno Acidentado (Rolling Hills)',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 85,
      description: 'Corrida longa de fim de semana por percurso com sobe e desce moderado para força funcional.',
      phases: {
        warmup: '15 minutos de trote no plano em Zona 1.',
        main_set: '60 minutos de corrida em trajeto com ondulações, mantendo a sensação de esforço da Zona 2/3 constante (diminuindo o pace na subida e soltando na descida).',
        cooldown: '10 minutos de trote final no plano.'
      },
      physiological_goal: 'Resistência muscular específica de quadríceps e glúteos sob longa duração.'
    },
    {
      id: 'adv_13',
      api_id: 53,
      title: 'Treino Progressivo em Terços (Z2, Z3 e Z4)',
      type: 'TEMPO',
      workout_type: 'continuo',
      total_duration_minutes: 50,
      description: 'Divida o treino em 3 partes: leve no início, moderado no meio e forte no final.',
      phases: {
        warmup: '10 minutos de transição suave em Zona 1.',
        main_set: '15 minutos em Zona 2 pura (PSE 5) -> 15 minutos em Zona 3 (PSE 6.5, ritmo de maratona) -> 10 minutos finais em Zona 4 (PSE 8, ritmo de 10k).',
        cooldown: '10 minutos de trote super leve em Zona 1.'
      },
      physiological_goal: 'Progressão gradual da captação de oxigênio e recrutamento sequencial de fibras musculares.'
    },
    {
      id: 'adv_14',
      api_id: 54,
      title: 'Intervalado Curto de Explosão 12x200m',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 42,
      description: 'Tiros rápidos com foco em velocidade mecânica pura e cadência altíssima.',
      phases: {
        warmup: '15 minutos de trote + educativos de corrida.',
        main_set: '12 repetições de 200 metros em ritmo de 1500m/3000m (Zona 5, PSE 9), com 1 min e 15 segundos de trote/caminhada entre cada repetição.',
        cooldown: '10 minutos de trote solto em Zona 1.'
      },
      physiological_goal: 'Potência anaeróbica alática/lática e economia de corrida neuromuscular.'
    },
    {
      id: 'adv_15',
      api_id: 55,
      title: 'Fartlek Quêniano 12x(1 min Rápido / 1 min Trote)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 44,
      description: '12 minutos fortes somados alternando com 1 minuto de trote ativo sem parar.',
      phases: {
        warmup: '12 minutos de trote em Zona 2.',
        main_set: '24 minutos contínuos alternando 1 minuto em ritmo de 5k (Zona 4/5, PSE 8.5) com 1 minuto de trote moderado Zona 2 (sem caminhar).',
        cooldown: '8 minutos de trote regenerativo final.'
      },
      physiological_goal: 'Capacidade aeróbica de alta densidade e reciclagem ativa do lactato.'
    },
    {
      id: 'adv_16',
      api_id: 56,
      title: 'Treino de Rampa Longa 5x2 minutos',
      type: 'HILL',
      workout_type: 'intervalado',
      total_duration_minutes: 48,
      description: 'Subidas de 2 minutos em ritmo firme sustentado para força mental e física.',
      phases: {
        warmup: '15 minutos de trote no plano Zona 2.',
        main_set: '5 repetições de 2 minutos em subida regular de 5% a 6% (PSE 8, Zona 4 alto). Descida caminhando/trotando devagar (2 a 3 min).',
        cooldown: '12 minutos de trote regenerativo no plano.'
      },
      physiological_goal: 'Capacidade aeróbica em subida e resistência à fadiga periférica de panturrilha e quadríceps.'
    },
    {
      id: 'adv_17',
      api_id: 57,
      title: 'Tiros Yasso 800m (Simulador de Meia/Maratona)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 55,
      description: '6 a 8 tiros de 800m no ritmo alvo com tempo igual de trote para recuperação.',
      phases: {
        warmup: '15 minutos de trote Zona 2 + 3 tiros curtos de 60m.',
        main_set: '6 repetições de 800 metros (Zona 5, PSE 8.5) com tempo de recuperação em trote leve exatamente igual ao tempo gasto no tiro.',
        cooldown: '12 minutos de trote em Zona 1.'
      },
      physiological_goal: 'Previsibilidade de ritmo cardiorrespiratório para provas de fundo.'
    },
    {
      id: 'adv_18',
      api_id: 58,
      title: 'Longão com Simulação de Nutrição e Gel de Carboidrato',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 90,
      description: '15 a 16 km em Zona 2 consumindo gel de carboidrato aos 45 minutos de treino.',
      phases: {
        warmup: '10 minutos de trote leve inicial.',
        main_set: '70 minutos de corrida contínua na Zona 2 (PSE 5), ingerindo 1 sachê de gel de carboidrato com água exatamente ao completar 45 minutos para treinar a digestão.',
        cooldown: '10 minutos de trote final de desaceleração.'
      },
      physiological_goal: 'Treinamento do sistema gastrointestinal para absorção eficiente de maltodextrina/fructose durante esforço.'
    },
    {
      id: 'adv_19',
      api_id: 59,
      title: 'Cross-Training Aeróbico de Volume (Ciclismo 90 RPM)',
      type: 'CROSS_TRAINING',
      workout_type: 'continuo',
      total_duration_minutes: 50,
      description: 'Pedal contínuo de 50 min em cadência alta para treinar o pulmão sem estresse nos joelhos.',
      phases: {
        warmup: '10 minutos de giro leve na bicicleta.',
        main_set: '35 minutos de pedal contínuo com cadência mantida acima de 90 rotações por minuto com frequência cardíaca na Zona 2.',
        cooldown: '5 minutos de giro bem leve.'
      },
      physiological_goal: 'Manutenção de alto volume aeróbico e eficiência neuro-cardíaca da cadência.'
    },
    {
      id: 'adv_20',
      api_id: 60,
      title: 'Intervalado Misto (1000m ritmo 10k + 400m ritmo 5k)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 54,
      description: 'Alterne 1 tiro longo moderado-forte com 1 tiro curto mais ágil.',
      phases: {
        warmup: '15 minutos de trote + educativos.',
        main_set: '3 séries de: [1.000m em ritmo de 10k (PSE 8) + 1m30s pausa + 400m em ritmo de 5k (PSE 9) + 2m30s pausa].',
        cooldown: '12 minutos de trote de volta à calma em Zona 1.'
      },
      physiological_goal: 'Capacidade de troca de marchas e adaptação mecânica entre velocidades diferentes sob fadiga.'
    },
    {
      id: 'adv_21',
      api_id: 61,
      title: 'Corrida de Fundo com Cadência Rigorosa (180+ SPM)',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 48,
      description: '48 min em Zona 2 usando metrônomo ou música sincronizada em 180 batidas por minuto.',
      phases: {
        warmup: '8 minutos de trote inicial de adaptação.',
        main_set: '32 minutos na Zona 2 pura (PSE 5), concentrando-se exclusivamente em pisar leve e manter a cadência entre 180 e 184 passos por minuto.',
        cooldown: '8 minutos de trote leve final e soltura muscular.'
      },
      physiological_goal: 'Mecanização neuromuscular da cadência econômica de meio/longo fundo.'
    },
    {
      id: 'adv_22',
      api_id: 62,
      title: 'Tempo Run em Ritmo de Meia Maratona (30 min)',
      type: 'TEMPO',
      workout_type: 'continuo',
      total_duration_minutes: 55,
      description: '30 minutos contínuos cravados no pace alvo de 21k com respiração ritmada.',
      phases: {
        warmup: '15 minutos de trote progressivo Zona 1/2.',
        main_set: '30 minutos em ritmo de Meia Maratona (Zona 3 alto / Zona 4 baixo, PSE 7-7.5, ritmo firme mas sustentável por 2 horas).',
        cooldown: '10 minutos de trote de descompressão.'
      },
      physiological_goal: 'Economia e estabilização de ritmo aeróbico-anaeróbico de longa duração.'
    },
    {
      id: 'adv_23',
      api_id: 63,
      title: 'Subidas Curtas Neuromusculares 10x15s Sprint',
      type: 'HILL',
      workout_type: 'intervalado',
      total_duration_minutes: 42,
      description: 'Sprints máximos de 15 segundos em subida íngreme com longa pausa para força pura.',
      phases: {
        warmup: '16 minutos de trote leve em Zona 2.',
        main_set: '10 repetições de apenas 15 segundos em rampa forte (8% a 10%) em velocidade máxima explosiva (PSE 10). Descida lenta e pausa de 1 min e 45 seg entre os tiros.',
        cooldown: '12 minutos de trote regenerativo no plano.'
      },
      physiological_goal: 'Recrutamento total do pool motor de fibras de contração rápida tipo IIx e força propulsiva sem acidose duradoura.'
    },
    {
      id: 'adv_24',
      api_id: 64,
      title: 'Longão Negativado (Negative Split - 2ª Metade Rápida)',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 85,
      description: 'Corra a segunda metade do treino 10 a 15 segundos por km mais rápido que a primeira.',
      phases: {
        warmup: '10 minutos de trote leve aquecendo.',
        main_set: '35 minutos em Zona 2 baixa (PSE 4-5) seguidos imediatamente de 35 minutos na Zona 3 (PSE 6.5-7, pace bem mais ágil e focado).',
        cooldown: '5 minutos de caminhada de relaxamento.'
      },
      physiological_goal: 'Estratégia de economia energética inicial e superação da fadiga tardia de prova.'
    },
    {
      id: 'adv_25',
      api_id: 65,
      title: 'Intervalado de 600m (8x600m Ágeis)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 52,
      description: '8 repetições de 600 metros em pace de 5k com 2 min de recuperação ativa.',
      phases: {
        warmup: '15 minutos de trote Zona 2 + educativos.',
        main_set: '8 repetições de 600 metros em ritmo alvo de 5km (Zona 5, PSE 8.5), com 2 minutos de trote leve de intervalo.',
        cooldown: '10 minutos de trote super leve em Zona 1.'
      },
      physiological_goal: 'Sustentação do VO2 máximo com menor impacto psicológico que os tiros de 1.000m.'
    },
    {
      id: 'adv_26',
      api_id: 66,
      title: 'Corrida Leve com Sprints Finais (Strides 5x80m)',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 42,
      description: '35 min na Zona 2 finalizando com 5 retas de 80m rápidas para soltar as pernas.',
      phases: {
        warmup: '5 minutos de trote inicial.',
        main_set: '30 minutos correndo confortável em Zona 2 (PSE 5), seguidos de 5 acelerações progressivas de 80 metros (Strides) com 45 segundos de caminhada entre elas.',
        cooldown: '5 minutos de caminhada solta.'
      },
      physiological_goal: 'Manutenção da mobilidade de quadril e velocidade sem gerar fadiga aeróbica residual.'
    },
    {
      id: 'adv_27',
      api_id: 67,
      title: 'Treino de Limiar em Pista 2x3000m',
      type: 'TEMPO',
      workout_type: 'intervalado',
      total_duration_minutes: 58,
      description: 'Dois grandes blocos de 3.000 metros (7.5 voltas na pista) no ritmo de 10k.',
      phases: {
        warmup: '15 minutos de trote + 4 retas de 60m.',
        main_set: '2 repetições de 3.000 metros em ritmo de 10km / limiar (Zona 4, PSE 8), com 3 minutos e 30 segundos de trote leve entre elas.',
        cooldown: '12 minutos de trote leve regenerativo.'
      },
      physiological_goal: 'Resiliência cardiorrespiratória e controle rigoroso do pace contínuo sob estresse.'
    },
    {
      id: 'adv_28',
      api_id: 68,
      title: 'Cross-Training com Remo / Elíptico de Baixo Impacto',
      type: 'CROSS_TRAINING',
      workout_type: 'continuo',
      total_duration_minutes: 45,
      description: '45 minutos de remo indoor ou elíptico em intensidade aeróbica moderada.',
      phases: {
        warmup: '5 minutos de ritmo leve no aparelho.',
        main_set: '35 minutos em ritmo constante na Zona 2/3 com foco no engajamento do core e postura ereta.',
        cooldown: '5 minutos de volta à calma leve.'
      },
      physiological_goal: 'Trabalho cardiorrespiratório de corpo inteiro e fortalecimento postural sem impacto no calcâneo e joelho.'
    },
    {
      id: 'adv_29',
      api_id: 69,
      title: 'Longão de Especificidade e Resiliência de Pace no GPS',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 95,
      description: 'Corrida longa de 16 km verificando o relógio GPS apenas a cada 4 km para treinar percepção interna.',
      phases: {
        warmup: '15 minutos de trote leve Zona 1/2.',
        main_set: '65 minutos em Zona 2 (PSE 5), treinando o corpo a sentir o pace correto sem olhar a tela do relógio continuamente (consultando apenas a cada 20 min).',
        cooldown: '15 minutos de trote leve e alongamento completo.'
      },
      physiological_goal: 'Calibração da Percepção Subjetiva de Esferço (PSE) associada ao pace aeróbico real.'
    },
    {
      id: 'adv_30',
      api_id: 70,
      title: 'Treino Teste de Desempenho (Simulação de 5k ou 10k)',
      type: 'TEMPO',
      workout_type: 'continuo',
      total_duration_minutes: 55,
      description: 'Dia de testar o seu tempo real em um percurso aferido e plano como se fosse uma prova.',
      phases: {
        warmup: '15 minutos de trote + educativos + 3 acelerações dinâmicas de 80m.',
        main_set: 'Simulação contínua de 5 km (ou 10 km) em ritmo forte de competição (Zona 4/5, PSE 9), distribuindo a energia para não perder ritmo na última metade.',
        cooldown: '15 minutos de trote regenerativo de celebração e alongamentos profundos.'
      },
      physiological_goal: 'Aferição oficial de zonas de frequência cardíaca, pace limiar atual e confiança pré-competição.'
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
    },
    {
      id: 'eli_11',
      api_id: 71,
      title: 'Tiros Descrescentes de Velocidade (2000+1500+1000+500m)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 68,
      description: 'Diminua a distância e aumente o pace a cada tiro: 2k, 1.5k, 1k e 500m.',
      phases: {
        warmup: '15 minutos de trote + educativos.',
        main_set: '2000m (ritmo 10k, PSE 8) + 2m30s pausa -> 1500m (ritmo entre 10k e 5k, PSE 8.5) + 2 min pausa -> 1000m (ritmo 5k, PSE 9) + 1m30s pausa -> 500m (ritmo 3k, PSE 9.5).',
        cooldown: '15 minutos de trote regenerativo em Zona 1.'
      },
      physiological_goal: 'Estimulação da capacidade de fechar forte provas de meio-fundo/fundo mesmo com acidose instalada.'
    },
    {
      id: 'eli_12',
      api_id: 72,
      title: 'Corrida Regenerativa Dupla (Double Threshold / Trote Matinal)',
      type: 'EASY',
      workout_type: 'regenerativo',
      total_duration_minutes: 45,
      description: 'Trote extremamente leve de descompressão em dia de carga dupla.',
      phases: {
        warmup: '5 minutos de caminhada de soltura.',
        main_set: '35 minutos correndo de forma ultraleve e solta em Zona 1 pura (PSE 3-4, menos de 65% da FCmáx).',
        cooldown: '5 minutos de caminhada solta e relaxamento.'
      },
      physiological_goal: 'Recuperação ativa do sistema neuro-endócrino em blocos de treinamento de elite.'
    },
    {
      id: 'eli_13',
      api_id: 73,
      title: 'Hill Bounds (Saltos e Explosão em Ladeira 10x30s)',
      type: 'HILL',
      workout_type: 'intervalado',
      total_duration_minutes: 45,
      description: 'Passadas saltadas e amplas em subida íngreme para recrutar fibras rápidas.',
      phases: {
        warmup: '18 minutos de trote leve Zona 2.',
        main_set: '10 repetições de 30 segundos executando Hill Bounds (passadas longas com impulsão exagerada no ar em ladeira íngreme, PSE 9.5). Descida caminhando devagar e 1m30s de pausa.',
        cooldown: '12 minutos de trote no plano.'
      },
      physiological_goal: 'Aumento da rigidez do tendão de Aquiles para ganho de retorno elástico na passada.'
    },
    {
      id: 'eli_14',
      api_id: 74,
      title: 'Yasso 800m Completo 10x800m',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 68,
      description: '10 tiros de 800 metros com conversão do tempo de maratona (horas/minutos = min/segundos no tiro).',
      phases: {
        warmup: '15 minutos de trote + 4 retas ágeis.',
        main_set: '10 repetições de 800 metros no tempo alvo (ex: 3 min se a meta de maratona for 3h00), com pausa ativa de trote no tempo exato de cada tiro.',
        cooldown: '15 minutos de trote regenerativo final.'
      },
      physiological_goal: 'Simulação clássica de tolerância ao ritmo aeróbico de alta demanda cardiorrespiratória.'
    },
    {
      id: 'eli_15',
      api_id: 75,
      title: 'Longão com Fadiga Acumulada (Carb-Depleted Run)',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 100,
      description: 'Corrida longa em jejum de carboidrato para forçar a oxidação de lipídios.',
      phases: {
        warmup: '15 minutos de trote leve Zona 1.',
        main_set: '70 minutos em Zona 2 pura (PSE 5), sem ingestão de carboidrato prévio ou durante o treino (apenas água e eletrólitos), estimulando a lipólise mitocondrial.',
        cooldown: '15 minutos de trote super leve e reposição imediata de carboidrato/proteína.'
      },
      physiological_goal: 'Biogênese mitocondrial e aumento da expressão de enzimas de oxidação de gorduras (aumentando a reserva de glicogênio para o dia da prova).'
    },
    {
      id: 'eli_16',
      api_id: 76,
      title: 'Tempo Run em Terreno Ondulado (Rolling Threshold)',
      type: 'TEMPO',
      workout_type: 'continuo',
      total_duration_minutes: 60,
      description: '40 minutos no limiar aeróbico em percurso com subidas e descidas constantes.',
      phases: {
        warmup: '15 minutos de trote no plano.',
        main_set: '35 minutos em ritmo de limiar (Zona 4, PSE 7.5-8), mantendo o esforço estável mesmo quando o ritmo oscilar devido ao relevo.',
        cooldown: '10 minutos de trote no plano.'
      },
      physiological_goal: 'Resiliência muscular e mental para maratonas com altimetria acidentada.'
    },
    {
      id: 'eli_17',
      api_id: 77,
      title: 'Intervalado Russo (30s Forte / 30s Trote por 30 min)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 55,
      description: 'Série contínua alternando 30 segundos em pace de 3k/5k por 30 segundos de trote leve.',
      phases: {
        warmup: '15 minutos de trote + educativos.',
        main_set: '30 blocos de: 30 segundos forte em Zona 5 (PSE 9) + 30 segundos trote leve em Zona 2. Total de 30 minutos em micro-estímulos.',
        cooldown: '10 minutos de trote de volta à calma em Zona 1.'
      },
      physiological_goal: 'Alta sustentação do consumo máximo de oxigênio com clearance ultrarrápido de fosfocreatina.'
    },
    {
      id: 'eli_18',
      api_id: 78,
      title: 'Longão com Bloco Final no Limiar (22 km Z2 + 6 km Z4)',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 135,
      description: '22 km leves seguidos de 6 km fortíssimos no limiar aeróbico no final do treino.',
      phases: {
        warmup: '15 minutos de trote aeróbico Zona 1/2.',
        main_set: '22 km em Zona 2 (PSE 5), engatando imediatamente um bloco final de 6 km cravados na Zona 4 / Ritmo de Limiar (PSE 8.5, simulando ataque no final de uma maratona).',
        cooldown: '15 minutos de trote regenerativo e gelo nas pernas.'
      },
      physiological_goal: 'Capacidade de recrutamento de fibras do tipo IIa quando as fibras do tipo I estão fadigadas e depletadas de glicogênio.'
    },
    {
      id: 'eli_19',
      api_id: 79,
      title: 'Treino de Rampa Combinada (Subida + Reta no Topo)',
      type: 'HILL',
      workout_type: 'intervalado',
      total_duration_minutes: 52,
      description: '45 segundos subindo forte + 150 metros acelerando na reta plana no topo da ladeira.',
      phases: {
        warmup: '15 minutos de trote aeróbico até a ladeira.',
        main_set: '8 repetições de: 45s de subida forte (PSE 8.5) engatando sem parar uma aceleração na reta plana no topo por mais 150 metros (PSE 9, superando a inércia da subida). Descida caminhando devagar.',
        cooldown: '12 minutos de trote regenerativo no plano.'
      },
      physiological_goal: 'Treinamento de transição biomecânica em subidas de provas de cross-country/asfalto.'
    },
    {
      id: 'eli_20',
      api_id: 80,
      title: 'Intervalado 1200m (6x1200m Sustentação de VO2)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 62,
      description: '6 repetições de 1.200 metros (3 voltas na pista) em ritmo alvo de 5k.',
      phases: {
        warmup: '16 minutos de trote + educativos.',
        main_set: '6 repetições de 1.200 metros em ritmo alvo de 5km (Zona 5, PSE 8.5-9), com 2 min e 30 seg de trote muito leve entre os tiros.',
        cooldown: '12 minutos de trote leve de descompressão.'
      },
      physiological_goal: 'Resistência lática avançada sob alto recrutamento cardiorespiratório.'
    },
    {
      id: 'eli_21',
      api_id: 81,
      title: 'Corrida Leve Aeróbica de Volume 16 km',
      type: 'EASY',
      workout_type: 'continuo',
      total_duration_minutes: 80,
      description: '16 km em ritmo aeróbico suave na Zona 2 para ganho de volume semanal sem quebrar.',
      phases: {
        warmup: '10 minutos de transição suave Zona 1/2.',
        main_set: '60 minutos de corrida contínua estável na Zona 2 (PSE 5), cuidando da economia de movimento e respiração fluida.',
        cooldown: '10 minutos de trote leve final.'
      },
      physiological_goal: 'Acúmulo estruturado de volume (quilometragem semanal alta) protegendo o sistema nervoso central.'
    },
    {
      id: 'eli_22',
      api_id: 82,
      title: 'Fartlek Livre de Competição no Parque (8 Picos de Velocidade)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 55,
      description: '55 minutos correndo solto, dando 8 tiros fortes de 1 a 3 min em subidas ou retas do parque.',
      phases: {
        warmup: '15 minutos de trote em Zona 2.',
        main_set: '30 minutos de Fartlek intuitivo, dando 8 estímulos rápidos de 1 a 3 minutos (Zona 4/5, PSE 8-9) nos pontos mais desafiadores do parque, trotando solto entre eles.',
        cooldown: '10 minutos de trote leve.'
      },
      physiological_goal: 'Sensibilidade instintiva ao terreno e quebra da monótona rotina de pista e cronômetro.'
    },
    {
      id: 'eli_23',
      api_id: 83,
      title: 'Simulação de Meia Maratona em Treino (Time Trial 18 km)',
      type: 'TEMPO',
      workout_type: 'continuo',
      total_duration_minutes: 85,
      description: '18 km contínuos no ritmo exato em que você planeja correr a sua próxima Meia Maratona.',
      phases: {
        warmup: '15 minutos de trote + educativos + 3 acelerações de 80m.',
        main_set: '18 km contínuos em ritmo de Meia Maratona (Zona 3 alto / Zona 4 baixo, PSE 7.5), testando roupa, tênis, hidratação e estratégia mental.',
        cooldown: '15 minutos de trote super leve e alongamento de soltura.'
      },
      physiological_goal: 'Validação biológica e psicológica de sustentação de pace competitivo de longo fundo.'
    },
    {
      id: 'eli_24',
      api_id: 84,
      title: 'Tiros de 300m (15x300m Velocidade de Pista)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 54,
      description: '15 repetições de 300 metros rápidas e soltas com intervalo leve.',
      phases: {
        warmup: '15 minutos de trote Zona 2 + rotina de educativos.',
        main_set: '15 repetições de 300 metros em pace de 3km/1500m (Zona 5, PSE 9), com 1 min e 15 segundos de caminhada ou trote ultraleve para recuperação.',
        cooldown: '12 minutos de trote em Zona 1.'
      },
      physiological_goal: 'Desenvolvimento de velocidade de economia motora de alta frequência de passada.'
    },
    {
      id: 'eli_25',
      api_id: 85,
      title: 'Treino de Transição Brick (40 min Bike + 10 km Corrida)',
      type: 'CROSS_TRAINING',
      workout_type: 'continuo',
      total_duration_minutes: 85,
      description: 'Pedale por 40 min e calce o tênis imediatamente para correr 10 km no ritmo de limiar.',
      phases: {
        warmup: '40 minutos de ciclismo forte na Zona 3/4 (cadência rápida acima de 95 RPM).',
        main_set: 'Transição rápida (menos de 3 minutos) engatando 10 km de corrida no ritmo de Meia Maratona (Zona 4, PSE 8), superando a sensação de "pernas pesadas".',
        cooldown: '10 minutos de caminhada solta.'
      },
      physiological_goal: 'Adaptação vascular extrema e transição de recrutamento muscular para provas de Triatlo/Duatlo ou maratonas extremas.'
    },
    {
      id: 'eli_26',
      api_id: 86,
      title: 'Longão de Blindagem Mental 35 km (Específico Maratona)',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 175,
      description: 'O treino mais longo da preparação da maratona: 35 km estruturados no pace de prova.',
      phases: {
        warmup: '15 minutos de trote leve e foco mental.',
        main_set: '20 km em Zona 2 (PSE 5) seguidos imediatamente de 15 km cravados no Ritmo Alvo da Maratona (Zona 3 alto, PSE 7.5), praticando toda a ingestão de géis (a cada 40 min) e hidratação.',
        cooldown: '15 minutos de caminhada/trote muito lento, banho de gelo e refeição completa rica em carboidratos.'
      },
      physiological_goal: 'Capacidade máxima de oxidação lipídico-glicolítica de 42k e resistência de blindagem psicológica ao "muro dos 30 km".'
    },
    {
      id: 'eli_27',
      api_id: 87,
      title: 'Intervalado Piramidal de Volume (400, 800, 1200, 1600, 1200, 800, 400m)',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 68,
      description: 'A pirâmide gigante de pista em pace de 5k a 10k.',
      phases: {
        warmup: '15 minutos de trote + educativos na pista.',
        main_set: '400m (ritmo 3k) + 1m trote -> 800m (ritmo 5k) + 1m30s trote -> 1200m (ritmo 5k-10k) + 2m trote -> 1600m (ritmo 10k) + 2m30s trote -> 1200m + 2m trote -> 800m + 1m30s trote -> 400m.',
        cooldown: '12 minutos de trote leve final em Zona 1.'
      },
      physiological_goal: 'Resistência de VO2 máximo de longo volume com controle preciso de pacing por distância.'
    },
    {
      id: 'eli_28',
      api_id: 88,
      title: 'Tiros de Sprint Neuromuscular 16x200m Mecânica Perfeita',
      type: 'INTERVAL',
      workout_type: 'intervalado',
      total_duration_minutes: 56,
      description: '16 repetições de 200 metros velozes focando 100% no padrão de postura e braçada.',
      phases: {
        warmup: '18 minutos de trote + alongamento dinâmico.',
        main_set: '16 repetições de 200 metros em ritmo forte (Zona 5, PSE 9), com intervalo de 1 minuto e 15 segundos em caminhada/trote leve para permitir que cada tiro seja tecnicamente impecável.',
        cooldown: '12 minutos de trote leve regenerativo.'
      },
      physiological_goal: 'Refinamento do padrão motor neuromuscular de velocidade de pista.'
    },
    {
      id: 'eli_29',
      api_id: 89,
      title: 'Hill Repeats de Explosão Curta 15x30s Rampa Forte',
      type: 'HILL',
      workout_type: 'intervalado',
      total_duration_minutes: 48,
      description: '15 subidas curtas e explosivas em rampa muito íngreme para potência máxima.',
      phases: {
        warmup: '16 minutos de trote Zona 2.',
        main_set: '15 repetições de 30 segundos em subida íngreme (8% a 12%) em esforço máximo (PSE 9.5-10). Descida lenta caminhando com 1 min e 30 seg de intervalo para recuperação do ATP-CP.',
        cooldown: '12 minutos de trote leve no plano.'
      },
      physiological_goal: 'Hipertrofia funcional neuromuscular de fibras rápidas sem traumatismo articular na descida.'
    },
    {
      id: 'eli_30',
      api_id: 90,
      title: 'Treino de Celebração e Afinamento Pré-Maratona 12 km',
      type: 'LONG',
      workout_type: 'longo',
      total_duration_minutes: 65,
      description: 'Corrida solta e alegre na semana da maratona contendo 3 km no ritmo exato de prova.',
      phases: {
        warmup: '12 minutos de trote leve Zona 1/2.',
        main_set: '6 km correndo leve em Zona 2 (PSE 5), engatando 3 km em Ritmo de Maratona (PSE 6.5) para sentir a leveza das pernas descansadas do polimento.',
        cooldown: '10 minutos de trote super leve e mentalização positiva de cruzamento da linha de chegada.'
      },
      physiological_goal: 'Manutenção da confiança psíquica e ativação metabólica de véspera de grande competição de 42k.'
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
