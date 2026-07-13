import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml, OxmlElement
from docx.oxml.ns import nsdecls, qn
import os

def create_plano_doc():
    doc = docx.Document()

    # Configurar margens
    for section in doc.sections:
        section.top_margin = Inches(0.8)
        section.bottom_margin = Inches(0.8)
        section.left_margin = Inches(0.8)
        section.right_margin = Inches(0.8)

    # Estilos de Cores
    COR_TITULO = RGBColor(16, 185, 129)    # Emerald
    COR_SUBTITULO = RGBColor(245, 158, 11) # Amber
    COR_TEXTO = RGBColor(51, 65, 85)       # Slate 700
    HEX_FUNDO = "F1F5F9"                   # Slate 100

    def add_title(text):
        p = doc.add_paragraph()
        run = p.add_run(text)
        run.font.name = 'Segoe UI'
        run.font.size = Pt(22)
        run.font.bold = True
        run.font.color.rgb = COR_TITULO
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        return p

    def add_h1(text):
        p = doc.add_paragraph()
        run = p.add_run(text)
        run.font.name = 'Segoe UI'
        run.font.size = Pt(16)
        run.font.bold = True
        run.font.color.rgb = COR_TITULO
        p.paragraph_format.space_before = Pt(14)
        p.paragraph_format.space_after = Pt(6)
        return p

    def add_h2(text):
        p = doc.add_paragraph()
        run = p.add_run(text)
        run.font.name = 'Segoe UI'
        run.font.size = Pt(13)
        run.font.bold = True
        run.font.color.rgb = COR_SUBTITULO
        p.paragraph_format.space_before = Pt(10)
        p.paragraph_format.space_after = Pt(4)
        return p

    def add_p(text, bold_prefix=""):
        p = doc.add_paragraph()
        p.paragraph_format.space_after = Pt(4)
        p.paragraph_format.line_spacing = 1.15
        if bold_prefix:
            run_b = p.add_run(bold_prefix)
            run_b.font.name = 'Segoe UI'
            run_b.font.size = Pt(11)
            run_b.font.bold = True
            run_b.font.color.rgb = RGBColor(30, 41, 59)
        run = p.add_run(text)
        run.font.name = 'Segoe UI'
        run.font.size = Pt(11)
        run.font.color.rgb = COR_TEXTO
        return p

    # TÍTULO
    add_title("DOCUMENTAÇÃO TÉCNICA DO SISTEMA\nPLANO DE CORRIDA APP")
    add_p("Data: Julho de 2026 | Versão 2.0 | Arquitetura: React 18 + Vite + TailwindCSS")

    add_h1("1. Visão Geral do Aplicativo")
    add_p("O PlanoDeCorrida é uma plataforma web adaptativa de periodização esportiva que gera cronogramas de treinamento científicos e personalizados de acordo com o nível, idade e meta de distância (5K a 42K) do corredor.")

    add_h1("2. Catálogo Oficial de 90 Treinos (v2.0)")
    add_p("Para proporcionar máxima diversidade esportiva e engajamento, foram estruturados 30 treinos exclusivos para cada perfil de corredor dentro do arquivo workoutCatalog.js:")

    add_h2("Perfil Iniciante (30 Treinos)")
    iniciante = [
        "1. Corrida Leve / Caminhada 1:1 (Run-Walk Base)", "2. Corrida Leve / Caminhada 2:1 (Evolução Contínua)",
        "3. Corrida Leve / Caminhada 3:1 (Consolidação Aeróbica)", "4. Corrida Contínua Zona 2 (Iniciação ao Trote Contínuo)",
        "5. Fartlek Lúdico por Tempo (Acelera e Desacelera)", "6. Fartlek nos Postes de Luz (Estímulo Visual na Rua)",
        "7. Tiros Curtos Controlados (6x 100m posturados)", "8. Treino de Subida Suave (Rampa Iniciante 4 a 6x 20s)",
        "9. Tempo Run Adaptado (8 min contínuos ofegante controlado)", "10. Longão Progressivo Run-Walk (Resistência de Fim de Semana)",
        "11. Corrida Descalço na Grama / Areia Batida (Propriocepção)", "12. Treino de Cadência e Passada Curtinha (180 SPM)",
        "13. Progressão de Fim de Treino (Fast Finish Leve)", "14. Pirâmide Crescente de Tempo (1-2-3-2-1 min)",
        "15. Treino Regenerativo e Respiração Nasal", "16. Cross-Training de Baixo Impacto (Ciclismo / Bike Ergométrica)",
        "17. Cross-Training Aquático (Natação / Hidro-trote)", "18. Tiros em Ladeira com Foco Postural (Tronco Inclinado)",
        "19. Intervalado 400m Moderado (Iniciação à Pista de Atletismo)", "20. Corrida Contínua com Educativos Pré-Treino (Skiping/Anfersen)",
        "21. Longão Contínuo de Conquista (Sem Paradas 30 a 45 min)", "22. Treino de Trocas de Ritmo no Terreno (Trilha Leve/Parque)",
        "23. Tempo Run em Blocos (2x 5 minutos com recuperação)", "24. Intervalado de Oxigenação (6x 200m descontraídos)",
        "25. Trote Social / Corrida em Grupo com Parceiro", "26. Subida Longa e Constante (3x 1 minuto controlado)",
        "27. Fartlek Crescente (1, 2 e 3 minutos fortes)", "28. Corrida com Variação de Zonas (Z1 a Z3)",
        "29. Longão de Resistência Mental e Hidratação em Movimento", "30. Treino de Celebração de Base (5 km contínuos de Formatura)"
    ]
    for t in iniciante:
        add_p(t)

    add_h2("Perfil Intermediário (30 Treinos)")
    intermediario = [
        "1. Corrida Aeróbica de Manutenção (Zona 2 Pura 45-60 min)", "2. Intervalado Clássico de VO2 Máximo (5x 1000m)",
        "3. Tempo Run Contínuo no Limiar Anaeróbico (20 min contínuos)", "4. Longão com Crescendo Final (Fast Finish Long Run)",
        "5. Fartlek Sueco (3-2-1-2-3 minutos regressivos e progressivos)", "6. Tiros Curtos de Velocidade e Economia (8x 400m)",
        "7. Treino de Força Específica em Subida (Hill Repeats 8-10x 45s)", "8. Cruise Intervals (4x 1500m no limiar de lactato)",
        "9. Longão em Terreno Acidentado (Rolling Hills Long Run)", "10. Treino Progressivo de 3 Blocos (Terços em Z2, Z3 e Z4)",
        "11. Intervalado Curto de Explosão (12x 200m rápidos)", "12. Corrida Regenerativa de Descompressão (Recovery Run 24h pós-treino)",
        "13. Fartlek de Quêniano (12x 1 min rápido / 1 min trote sem caminhar)", "14. Tempo Run Fracionado (3x 8 minutos no limiar)",
        "15. Treino de Rampa Longa (5x 2 minutos subindo)", "16. Tiros Yasso 800m (Simulador de Meia/Maratona)",
        "17. Longão com Simulação de Nutrição e Gel de Carboidrato", "18. Cross-Training Aeróbico de Volume (Bike Cadência 90+ RPM)",
        "19. Intervalado Misto (1000m ritmo 10k + 400m ritmo 5k alternados)", "20. Corrida de Fundo com Foco de Cadência Rigorosa (180+ SPM)",
        "21. Treino de Fartlek Piramidal (1-2-3-4-3-2-1 min)", "22. Tempo Run em Ritmo de Meia Maratona (30 min cravados)",
        "23. Subidas Curtas Neuromusculares (10x 15s sprint máximo)", "24. Longão Negativado (Negative Split - 2ª metade mais rápida)",
        "25. Intervalado de 600m (8x 600m ágeis)", "26. Corrida Leve com Sprints Finais (Stsides 5x 80m)",
        "27. Treino de Limiar em Pista (2x 3000m ritmo 10k)", "28. Cross-Training com Remo / Elíptico de Baixo Impacto",
        "29. Longão de Especificidade e Resiliência de Pace no GPS", "30. Treino Teste de Desempenho (Simulação Real de 5k ou 10k)"
    ]
    for t in intermediario:
        add_p(t)

    add_h2("Perfil Avançado (30 Treinos)")
    avancado = [
        "1. Intervalado Norueguês de Duplo Limiar (Sub-limiar 4x 2000m)", "2. Tiros de VO2 Máximo em Pista (10x 800m ritmo 5k)",
        "3. Longão Específico de Maratona (Marathon Pace Block Run)", "4. Intervalado Láctico de Pista (15x 400m recuperação curta 60s)",
        "5. Tempo Run Contínuo de Alta Intensidade (45 min na fronteira anaeróbica)", "6. Hill Repeats de Força Bruta (12x 1 minuto subida forte)",
        "7. Fartlek Quêniano de Alto Volume (20x 1 forte / 1 aeróbico moderado)", "8. Longão Progressivo de 3 Fases (10k Leve + 10k Moderado + 8k Tempo)",
        "9. Intervalado Piramidal de Volume (400, 800, 1200, 1600, 1200...)", "10. Over-Under Tempo Run (6x [3 min ritmo 5k + 3 min ritmo Meia])",
        "11. Tiros de Sprint Neuromuscular (16x 200m mecânica perfeita)", "12. Corrida Regenerativa Dupla (Doble-Threshold / Trote Matinal)",
        "13. Cruise Intervals Extensos (3x 4000m ritmo Meia Maratona)", "14. Hill Bounds (Saltos e Explosão em Ladeira 10x 30s)",
        "15. Yasso 800m Completo (10x 800m com conversão minutos/horas)", "16. Longão com Fadiga Acumulada e Carb-Depleted (Eficiência Lipídica)",
        "17. Tiros Descrescentes de Velocidade (2000 + 1500 + 1000 + 500m)", "18. Tempo Run em Terreno Ondulado (Rolling Hills Threshold)",
        "19. Cross-Training de Recuperação Ativa de Alto Volume (Ciclismo 90m)", "20. Intervalado Russo (30s forte / 30s trote contínuos por 30 minutos)",
        "21. Longão com Bloco Final no Limiar (22 km Z2 + 6 km Z4)", "22. Treino de Rampa Combinada (Subida + Reta Acelerada no Topo)",
        "23. Intervalado 1200m (6x 1200m sustentação de VO2)", "24. Corrida Leve Aeróbica de Volume (14 a 16 km fáceis)",
        "25. Fartlek Livre de Competição no Parque (8 picos de velocidade)", "26. Simulação de Meia Maratona em Treino (Time Trial 18 km)",
        "27. Tiros de 300m (15x 300m velocidade de pista)", "28. Treino de Transição (Brick / 40 min Bike + 10 km Corrida)",
        "29. Longão de Blindagem Mental (35 km Maratona Específico)", "30. Tapering Sharpener (Treino de Polimento e Afiação Pré-Prova)"
    ]
    for t in avancado:
        add_p(t)

    add_h1("3. Regra Universal: Fortalecimento Opcional na Segunda-feira")
    add_p("Em trainingEngine.js e no WeekCard.jsx, a Segunda-feira foi padronizada para todos os níveis como Treino de Fortalecimento com marcação de ⭐ Opcional. Desta forma, o atleta que necessita de repouso após o longão de domingo não perde porcentagem no seu progresso semanal.")

    out_path = os.path.join(os.path.dirname(__file__), "Documentacao_PlanoDeCorrida.docx")
    doc.save(out_path)
    print(f"Documento DOCX salvo em: {out_path}")

if __name__ == "__main__":
    create_plano_doc()
