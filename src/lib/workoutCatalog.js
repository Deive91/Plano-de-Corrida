/**
 * ============================================================================
 * CATÁLOGO OFICIAL DE TREINOS PARA CORRIDA — PLANO DE CORRIDA APP
 * 90 Treinos Distintos (30 Iniciante + 30 Intermediário + 30 Avançado)
 * ============================================================================
 */

export const WORKOUT_CATALOG = {
  beginner: [
    {
      id: 'beg_01',
      title: 'Corrida Leve / Caminhada 1:1 (Run-Walk Base)',
      type: 'EASY',
      description: 'Alterne 1 min correndo suave com 1 min caminhando ativa. Foco em adaptação articular.'
    },
    {
      id: 'beg_02',
      title: 'Corrida Leve / Caminhada 2:1 (Evolução Contínua)',
      type: 'EASY',
      description: 'Alterne 2 min correndo suave com 1 min de caminhada. Mantenha os ombros relaxados.'
    },
    {
      id: 'beg_03',
      title: 'Corrida Leve / Caminhada 3:1 (Consolidação Aeróbica)',
      type: 'EASY',
      description: 'Alterne 3 min correndo no ritmo de conversa com 1 min caminhando para recuperar.'
    },
    {
      id: 'beg_04',
      title: 'Corrida Contínua Zona 2 (Iniciação ao Trote)',
      type: 'EASY',
      description: 'Trote muito suave sem paradas para caminhada. Se faltar ar, diminua o tamanho da passada.'
    },
    {
      id: 'beg_05',
      title: 'Fartlek Lúdico por Tempo (Acelera e Desacelera)',
      type: 'INTERVAL',
      description: 'Alterne 1 min em ritmo moderado/ágil com 2 min de caminhada ativa ou trote leve.'
    },
    {
      id: 'beg_06',
      title: 'Fartlek nos Postes de Luz (Estímulo Visual)',
      type: 'INTERVAL',
      description: 'Corra 2 postes de luz na rua num ritmo animado e caminhe 2 postes de recuperação.'
    },
    {
      id: 'beg_07',
      title: 'Tiros Curtos Controlados (6x 100m)',
      type: 'INTERVAL',
      description: '6 tiros de 100m em ritmo firme e posturado com 1 min de caminhada entre eles.'
    },
    {
      id: 'beg_08',
      title: 'Treino de Subida Suave (Rampa Iniciante)',
      type: 'HILL',
      description: '4 a 6 subidas de 20 segundos em ladeira leve. Desça caminhando devagar para recuperar.'
    },
    {
      id: 'beg_09',
      title: 'Tempo Run Adaptado (Ritmo Firme Contínuo)',
      type: 'TEMPO',
      description: '10 min trote leve + 8 min no ritmo um pouco ofegante + 10 min caminhada leve.'
    },
    {
      id: 'beg_10',
      title: 'Longão Progressivo Run-Walk (Resistência)',
      type: 'LONG',
      description: '40 a 50 min alternando 4 min de corrida suave com 1 min de caminhada ativa.'
    },
    {
      id: 'beg_11',
      title: 'Corrida Descalço na Grama / Areia (Propriocepção)',
      type: 'EASY',
      description: '15 min de trote super leve na grama plana ou areia batida para fortalecer arco plantar.'
    },
    {
      id: 'beg_12',
      title: 'Treino de Cadência e Passada Curtinha (180 SPM)',
      type: 'EASY',
      description: 'Corrida focada em dar passos curtos e rápidos, reduzindo o impacto nos joelhos.'
    },
    {
      id: 'beg_13',
      title: 'Progressão de Fim de Treino (Fast Finish Leve)',
      type: 'TEMPO',
      description: '20 min de trote leve + últimos 3 min acelerando gradualmente o ritmo.'
    },
    {
      id: 'beg_14',
      title: 'Pirâmide Crescente de Tempo (1-2-3-2-1 min)',
      type: 'INTERVAL',
      description: '1 min corre / 1 min caminha, 2 min corre / 1 caminha, 3 min corre / 1.5 caminha, e volta regressivo.'
    },
    {
      id: 'beg_15',
      title: 'Treino Regenerativo e Respiração Nasal',
      type: 'EASY',
      description: 'Trote tão leve que consegue respirar apenas pelo nariz sem sentir necessidade de abrir a boca.'
    },
    {
      id: 'beg_16',
      title: 'Cross-Training de Baixo Impacto (Ciclismo / Bike)',
      type: 'CROSS_TRAINING',
      description: '30 min de bicicleta ergométrica leve para poupar joelhos e canelas mantendo o cárdio alto.'
    },
    {
      id: 'beg_17',
      title: 'Cross-Training Aquático (Natação / Hidro-trote)',
      type: 'CROSS_TRAINING',
      description: '30 min nadando ou correndo na piscina rasa para recuperação articular total.'
    },
    {
      id: 'beg_18',
      title: 'Tiros em Ladeira com Foco Postural (Tronco Inclinado)',
      type: 'HILL',
      description: '6x 20s em subida focando na impulsão do tornozelo e braços sincronizados.'
    },
    {
      id: 'beg_19',
      title: 'Intervalado 400m Moderado (Iniciação à Pista)',
      type: 'INTERVAL',
      description: '4x 400m (1 volta na pista) em ritmo moderado + 200m caminhada ativa de recuperação.'
    },
    {
      id: 'beg_20',
      title: 'Corrida Contínua com Educativos Pré-Treino',
      type: 'EASY',
      description: '10 min de educativos (Skiping, Anfersen) + 20 min de trote contínuo estável.'
    },
    {
      id: 'beg_21',
      title: 'Longão Contínuo de Conquista (Sem Paradas)',
      type: 'LONG',
      description: '30 a 45 min contínuos em ritmo ultra confortável sem caminhar em nenhum momento.'
    },
    {
      id: 'beg_22',
      title: 'Treino de Trocas de Ritmo no Terreno (Trilha/Parque)',
      type: 'EASY',
      description: 'Corrida em terra ou cascalho alternando subidas leves e retas no parque.'
    },
    {
      id: 'beg_23',
      title: 'Tempo Run em Blocos (2x 5 minutos)',
      type: 'TEMPO',
      description: '10 min aquecimento + 5 min ritmo moderado-forte + 2 min caminhada + 5 min moderado-forte.'
    },
    {
      id: 'beg_24',
      title: 'Intervalado de Oxigenação (Tiros de 200m)',
      type: 'INTERVAL',
      description: '6x 200m ritmo ágil e descontraído + 200m de caminhada ativa.'
    },
    {
      id: 'beg_25',
      title: 'Trote Social / Corrida em Grupo',
      type: 'EASY',
      description: 'Corrida leve de 30 a 40 min acompanhado de um parceiro de treino conversando.'
    },
    {
      id: 'beg_26',
      title: 'Subida Longa e Constante (Rampa de Resistência)',
      type: 'HILL',
      description: '3x 1 minuto subindo ladeira moderada em ritmo controlado com descida em caminhada.'
    },
    {
      id: 'beg_27',
      title: 'Fartlek Crescente (1, 2 e 3 minutos fortes)',
      type: 'INTERVAL',
      description: '1 min forte/1 caminha, 2 min forte/2 caminha, 3 min forte/2 caminha.'
    },
    {
      id: 'beg_28',
      title: 'Corrida com Variação de Zonas (Zona 1 a Zona 3)',
      type: 'TEMPO',
      description: '15 min Z1/Z2 + 10 min Z3 (ritmo firme) + 5 min Z1 regenerativo.'
    },
    {
      id: 'beg_29',
      title: 'Longão de Resistência Mental e Hidratação',
      type: 'LONG',
      description: '6 a 8 km praticando ingestão de água em pequenos goles em movimento.'
    },
    {
      id: 'beg_30',
      title: 'Treino de Celebração de Base (Graduação Iniciante)',
      type: 'LONG',
      description: '5 km contínuos no melhor ritmo confortável sentindo total domínio da passada.'
    }
  ],

  intermediate: [
    {
      id: 'int_01',
      title: 'Corrida Aeróbica de Manutenção (Zona 2 Pura)',
      type: 'EASY',
      description: '45 a 60 min em Zona 2 para ganho de mitocôndrias e economia energética de corrida.'
    },
    {
      id: 'int_02',
      title: 'Intervalado Clássico de VO2 Máximo (5x 1000m)',
      type: 'INTERVAL',
      description: '5x 1000m em ritmo de 5k com 2:30 min de trote regenerativo de recuperação.'
    },
    {
      id: 'int_03',
      title: 'Tempo Run Contínuo no Limiar Anaeróbico',
      type: 'TEMPO',
      description: '15 min aquecimento + 20 min em ritmo de 10k/Meia Maratona + 10 min desaquecimento.'
    },
    {
      id: 'int_04',
      title: 'Longão com Crescendo Final (Fast Finish Long Run)',
      type: 'LONG',
      description: '12 a 15 km contínuos sendo os últimos 3 km cravados no ritmo pretendido da prova.'
    },
    {
      id: 'int_05',
      title: 'Fartlek Sueco (3-2-1-2-3 minutos)',
      type: 'INTERVAL',
      description: 'Estímulos de 3, 2, 1, 2, 3 min rápidos com recuperação igual ao tempo do tiro em trote leve.'
    },
    {
      id: 'int_06',
      title: 'Tiros Curtos de Velocidade e Economia (8x 400m)',
      type: 'INTERVAL',
      description: '8x 400m em ritmo de 3k/5k + 1:30 min de trote leve entre cada repetição.'
    },
    {
      id: 'int_07',
      title: 'Treino de Força Específica em Subida (Hill Repeats)',
      type: 'HILL',
      description: '8 a 10x 45 segundos subindo forte em ladeira acentuada + volta trotando devagar.'
    },
    {
      id: 'int_08',
      title: 'Cruise Intervals (Tiros Longos no Limiar)',
      type: 'TEMPO',
      description: '4x 1500m no ritmo do limiar de lactato com 1 min de descanso estático ou trote.'
    },
    {
      id: 'int_09',
      title: 'Longão em Terreno Acidentado (Rolling Hills)',
      type: 'LONG',
      description: '14 a 18 km em percurso com sobe e desce para fortalecer quadríceps e glúteos.'
    },
    {
      id: 'int_10',
      title: 'Treino Progressivo de 3 Blocos (Terços do Treino)',
      type: 'TEMPO',
      description: '1º terço leve (Z2), 2º terço moderado (Z3), 3º terço no ritmo de prova de 10k (Z4).'
    },
    {
      id: 'int_11',
      title: 'Intervalado Curto de Explosão (12x 200m)',
      type: 'INTERVAL',
      description: '12x 200m em ritmo ágil com 200m de trote regenerativo de recuperação.'
    },
    {
      id: 'int_12',
      title: 'Corrida Regenerativa de Descompressão (Recovery Run)',
      type: 'EASY',
      description: '35 a 45 min de trote extremamente leve 24h após um treino duro ou prova.'
    },
    {
      id: 'int_13',
      title: 'Fartlek de Quêniano (Kenyans Fartlek 1/1)',
      type: 'INTERVAL',
      description: '12 séries de 1 min rápido / 1 min trote (sem caminhar na recuperação).'
    },
    {
      id: 'int_14',
      title: 'Tempo Run Fracionado (3x 8 minutos)',
      type: 'TEMPO',
      description: '3 blocos de 8 min no limiar anaeróbico com 2 min de trote leve entre eles.'
    },
    {
      id: 'int_15',
      title: 'Treino de Rampa Longa (Subidas de 2 minutos)',
      type: 'HILL',
      description: '5x 2 minutos subindo ladeira moderada + descida regenerativa leve.'
    },
    {
      id: 'int_16',
      title: 'Tiros Yasso 800m (Simulador de Meia/Maratona)',
      type: 'INTERVAL',
      description: '6 a 8x 800m no tempo alvo + tempo igual de recuperação em trote leve.'
    },
    {
      id: 'int_17',
      title: 'Longão com Simulação de Nutrição e Gel',
      type: 'LONG',
      description: '16 a 20 km praticando ingestão de gel de carboidrato a cada 40/45 min e hidratação.'
    },
    {
      id: 'int_18',
      title: 'Cross-Training Aeróbico de Volume (Bike com Cadência)',
      type: 'CROSS_TRAINING',
      description: '45 min de ciclismo com cadência alta 90+ RPM para giro rápido das pernas.'
    },
    {
      id: 'int_19',
      title: 'Intervalado Misto (1000m + 400m alternados)',
      type: 'INTERVAL',
      description: '3 séries de [1000m ritmo 10k + 2m pausa + 400m ritmo 5k + 2m pausa].'
    },
    {
      id: 'int_20',
      title: 'Corrida de Fundo com Foco de Cadência (180+ SPM)',
      type: 'EASY',
      description: '50 min em Z2 mantendo cadência rigorosa entre 178 e 182 passos por minuto.'
    },
    {
      id: 'int_21',
      title: 'Treino de Fartlek Piramidal (1-2-3-4-3-2-1 min)',
      type: 'INTERVAL',
      description: 'Estímulos progressivos e regressivos com metade do tempo em trote leve.'
    },
    {
      id: 'int_22',
      title: 'Tempo Run em Ritmo de Meia Maratona (30 min)',
      type: 'TEMPO',
      description: '30 min cravados no ritmo pretendido para a prova de 21k sem oscilar no GPS.'
    },
    {
      id: 'int_23',
      title: 'Subidas Curtas Neuromusculares (10x 15s sprint)',
      type: 'HILL',
      description: 'Tiros máximos em ladeira íngreme com recuperação completa 2 min para potência.'
    },
    {
      id: 'int_24',
      title: 'Longão Negativado (Negative Split Run)',
      type: 'LONG',
      description: 'A segunda metade do longão é percorrida 15 a 20 segundos mais rápida por km que a primeira.'
    },
    {
      id: 'int_25',
      title: 'Intervalado de 600m (8x 600m)',
      type: 'INTERVAL',
      description: '8x 600m em ritmo ágil + 200m trote leve de recuperação.'
    },
    {
      id: 'int_26',
      title: 'Corrida Leve com Sprints Finais (Stsides / Acelerações)',
      type: 'EASY',
      description: '40 min trote + 5x retas de 80m de aceleração progressiva.'
    },
    {
      id: 'int_27',
      title: 'Treino de Limiar em Pista (2x 3000m)',
      type: 'TEMPO',
      description: '2 séries de 3 km no ritmo de prova de 10k com 3 min de recuperação.'
    },
    {
      id: 'int_28',
      title: 'Cross-Training com Remo / Elíptico',
      type: 'CROSS_TRAINING',
      description: '40 min trabalhando braços e cárdio sem impacto no tornozelo e joelho.'
    },
    {
      id: 'int_29',
      title: 'Longão de Especificidade e Resiliência',
      type: 'LONG',
      description: '18 a 22 km mantendo regularidade de ritmo em todas as parciais do GPS.'
    },
    {
      id: 'int_30',
      title: 'Treino Teste de Desempenho (Simulação 5k ou 10k)',
      type: 'TEMPO',
      description: 'Aquecimento + tomada de tempo real para balizar novas zonas de ritmo de treino.'
    }
  ],

  advanced: [
    {
      id: 'adv_01',
      title: 'Intervalado Norueguês de Duplo Limiar (4x 2000m)',
      type: 'TEMPO',
      description: '4x 2000m logo abaixo do limiar de lactato com 1 min de trote curto.'
    },
    {
      id: 'adv_02',
      title: 'Tiros de VO2 Máximo em Pista (10x 800m)',
      type: 'INTERVAL',
      description: '10x 800m em ritmo de prova de 5k com 2 min de trote ativo de recuperação.'
    },
    {
      id: 'adv_03',
      title: 'Longão Específico de Maratona (Marathon Pace Block)',
      type: 'LONG',
      description: '28 a 32 km contendo 2 blocos de 8 km no ritmo exato pretendido para a Maratona.'
    },
    {
      id: 'adv_04',
      title: 'Intervalado Láctico de Pista (15x 400m)',
      type: 'INTERVAL',
      description: '15x 400m em ritmo de 3k/1500m com apenas 60s de recuperação em trote leve.'
    },
    {
      id: 'adv_05',
      title: 'Tempo Run Contínuo de Alta Intensidade (45 min)',
      type: 'TEMPO',
      description: 'Corrida sustentada na fronteira anaeróbica máxima por 45 minutos constantes.'
    },
    {
      id: 'adv_06',
      title: 'Hill Repeats de Força Bruta (12x 1 min subida forte)',
      type: 'HILL',
      description: '12x 60s em ladeira acentuada com descida controlada para força de quadríceps.'
    },
    {
      id: 'adv_07',
      title: 'Fartlek Quêniano de Alto Volume (20x 1 forte / 1 rápido)',
      type: 'INTERVAL',
      description: 'O trote de recuperação não é lento, mas sim em ritmo aeróbico moderado e contínuo.'
    },
    {
      id: 'adv_08',
      title: 'Longão Progressivo de 3 Fases (10k Leve + 10k Mod + 8k Tempo)',
      type: 'LONG',
      description: 'Treino de 28 km ensinando o corpo a correr rápido fadigado na parte final.'
    },
    {
      id: 'adv_09',
      title: 'Intervalado Piramidal de Volume (400, 800, 1200, 1600, 1200...)',
      type: 'INTERVAL',
      description: 'Mega sessão em pista com descanso igual à metade do tempo da distância.'
    },
    {
      id: 'adv_10',
      title: 'Over-Under Tempo Run (Alternância acima e abaixo do limiar)',
      type: 'TEMPO',
      description: '6x [3 min ritmo 5k + 3 min ritmo Meia Maratona] contínuos sem parar.'
    },
    {
      id: 'adv_11',
      title: 'Tiros de Sprint Neuromuscular (16x 200m)',
      type: 'INTERVAL',
      description: '16x 200m em ritmo de 1500m focando mecânica impecável + 200m trote.'
    },
    {
      id: 'adv_12',
      title: 'Corrida Regenerativa Dupla (Doble-Threshold / Trote Manhã)',
      type: 'EASY',
      description: '8 a 10 km de manhã muito leves para oxigenação muscular e flush de resíduos.'
    },
    {
      id: 'adv_13',
      title: 'Cruise Intervals Extensos (3x 4000m no limiar)',
      type: 'TEMPO',
      description: '3 blocos de 4 km em ritmo de Meia Maratona com 2 min de recuperação ativa.'
    },
    {
      id: 'adv_14',
      title: 'Hill Bounds (Saltos e Explosão em Ladeira - 10x 30s)',
      type: 'HILL',
      description: 'Passadas largas e potentes subindo, recrutando fibras de contração rápida.'
    },
    {
      id: 'adv_15',
      title: 'Yasso 800m Completo (10x 800m no tempo da Maratona)',
      type: 'INTERVAL',
      description: '10x 800m onde os minutos do tempo dos 800m equivalem às horas da maratona.'
    },
    {
      id: 'adv_16',
      title: 'Longão com Fadiga Acumulada e Carb-Depleted',
      type: 'LONG',
      description: '24 a 26 km em ritmo Z2 estável treinando oxidação e aproveitamento de gorduras.'
    },
    {
      id: 'adv_17',
      title: 'Tiros Descrescentes de Velocidade (2000m + 1500 + 1000 + 500)',
      type: 'INTERVAL',
      description: 'Cada tiro é feito num pace mais agressivo que o anterior, forçando sprint final.'
    },
    {
      id: 'adv_18',
      title: 'Tempo Run em Terreno Ondulado (Rolling Hills Threshold)',
      type: 'TEMPO',
      description: '12 a 15 km em limiar encarando subidas e descidas sem deixar o ritmo cair.'
    },
    {
      id: 'adv_19',
      title: 'Cross-Training de Recuperação Ativa de Alto Volume',
      type: 'CROSS_TRAINING',
      description: '60 a 90 min de ciclismo estrada em Zona 2 para volume aeróbico extra sem impacto.'
    },
    {
      id: 'adv_20',
      title: 'Intervalado Russo (Micro-tiros 30s forte / 30s trote por 30m)',
      type: 'INTERVAL',
      description: '30 minutos contínuos alternando meio minuto máximo com meio minuto trote.'
    },
    {
      id: 'adv_21',
      title: 'Longão com Bloco Final no Limiar (22 km Z2 + 6 km Z4)',
      type: 'LONG',
      description: 'Forçar o limiar anaeróbico com o glicogênio quase zerado no final do longão.'
    },
    {
      id: 'adv_22',
      title: 'Treino de Rampa Combinada (Subida + Reta no Topo)',
      type: 'HILL',
      description: '8x [45s subida forte + 200m reta acelerando no topo da ladeira para transição].'
    },
    {
      id: 'adv_23',
      title: 'Intervalado 1200m (6x 1200m no ritmo 5k/10k)',
      type: 'INTERVAL',
      description: '6x 1200m + 2 min trote, excelente para ganho de sustentação de VO2.'
    },
    {
      id: 'adv_24',
      title: 'Corrida Leve Aeróbica de Volume (14 a 16 km fáceis)',
      type: 'EASY',
      description: 'Rodagem de meio de semana em ritmo confortável Z2 com excelente volume.'
    },
    {
      id: 'adv_25',
      title: 'Fartlek Livre de Competição no Parque (8 picos)',
      type: 'INTERVAL',
      description: 'Simular ultrapassagens e fugas de pelotão com variações abruptas e intensas de pace.'
    },
    {
      id: 'adv_26',
      title: 'Simulação de Meia Maratona em Treino (Time Trial 18 km)',
      type: 'TEMPO',
      description: 'Ensaio geral de equipamento, tênis de placa, nutrição e pace em ritmo real.'
    },
    {
      id: 'adv_27',
      title: 'Tiros de 300m (15x 300m)',
      type: 'INTERVAL',
      description: 'Velocidade de pista para refinar técnica de corrida e economia em alta velocidade.'
    },
    {
      id: 'adv_28',
      title: 'Treino de Transição (Brick / Corrida pós-Ciclismo)',
      type: 'CROSS_TRAINING',
      description: '40 min bike forte + 10 km corrida no ritmo alvo imediato de prova.'
    },
    {
      id: 'adv_29',
      title: 'Longão de Blindagem Mental (35 km Maratona Específico)',
      type: 'LONG',
      description: 'O treino mais longo do ciclo da Maratona testando mente, corpo e suplementação.'
    },
    {
      id: 'adv_30',
      title: 'Tapering Sharpener (Treino de Polimento e Afiação)',
      type: 'EASY',
      description: '6 km trote + 6x 100m progressivos para manter as pernas rápidas e descansadas pré-prova.'
    }
  ]
};

/**
 * Retorna uma seleção inteligente/ciclo do catálogo de treinos com base no nível, tipo de treino e índice (semana/dia).
 */
export function getCatalogWorkout(level, type, weekNumber, dayIndex) {
  const list = WORKOUT_CATALOG[level] || WORKOUT_CATALOG.beginner;
  // Filtra pelo tipo (EASY, LONG, INTERVAL, TEMPO, HILL, CROSS_TRAINING)
  const filtered = list.filter(w => w.type === type);
  
  if (filtered.length > 0) {
    const idx = (weekNumber + dayIndex) % filtered.length;
    return filtered[idx];
  }
  
  // Se for REST ou STRENGTH ou tipo sem match exato, pega um fallback por índice geral
  const idx = (weekNumber * 3 + dayIndex) % list.length;
  return list[idx];
}
