import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
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
    add_p("Data: Julho de 2026 | Versão 2.1 | Arquitetura: React 18 + Vite + TailwindCSS + JSON API")

    add_h1("1. Visão Geral do Aplicativo")
    add_p("O PlanoDeCorrida é uma plataforma web adaptativa de periodização esportiva que gera cronogramas de treinamento científicos e personalizados de acordo com o nível, idade e meta de distância (5K a 42K) do corredor.")

    add_h1("2. Catálogo Oficial de 90 Treinos (v2.0) & Estrutura JSON API (v2.1)")
    add_p("Para proporcionar máxima diversidade esportiva e engajamento, foram estruturados 30 treinos exclusivos em workoutCatalog.js e adicionalmente gerado o arquivo workouts_api_catalog.json contendo 30 treinos estruturados por contrato de API (id, level, title, total_duration_minutes, workout_type, phases e physiological_goal) com fases detalhadas de warmup, main_set e cooldown.")

    add_h2("Perfil Iniciante (10 Treinos Estruturados em JSON / 30 no Catálogo Geral)")
    iniciante = [
        "1. Adaptação Articular Run-Walk 1:1 (30 min - Continuo / PSE 3 a 5)",
        "2. Evolução Contínua Run-Walk 2:1 (35 min - Continuo / Zona 2)",
        "3. Consolidação Aeróbica Run-Walk 3:1 (37 min - Continuo / Zona 2)",
        "4. Iniciação ao Trote Contínuo 15 min (30 min - Continuo / 65-72% FCmáx)",
        "5. Treino de Cadência e Passada Curta (32 min - Continuo / 180 SPM)",
        "6. Fartlek Lúdico de Adaptação (34 min - Intervalado / Zona 1 e 3)",
        "7. Tiros Curtos Neuromusculares na Reta (33 min - Intervalado / 6x 100m)",
        "8. Treino de Força em Rampa Suave (35 min - Intervalado / 5x subida suave)",
        "9. Iniciação ao Limiar Mini Tempo Run (36 min - Continuo / 2x 6 min em Zona 3)",
        "10. Longão de Conquista Aeróbica 25 min (40 min - Longo / Zona 2 estável)"
    ]
    for t in iniciante:
        add_p(t)

    add_h2("Perfil Intermediário (10 Treinos Estruturados em JSON / 30 no Catálogo Geral)")
    intermediario = [
        "11. Volume Aeróbico de Base em Zona 2 (50 min - Continuo / 70-75% FCmáx)",
        "12. Intervalado Clássico de VO2 Máximo 5x1000m (55 min - Intervalado / Zona 4/5)",
        "13. Tempo Run no Limiar de Lactato 25 min (50 min - Continuo / 85-88% FCmáx)",
        "14. Fartlek Piramidal de Velocidade (48 min - Intervalado / 1-2-3-2-1 min)",
        "15. Hill Repeats Específicos de Força e Potência (45 min - Intervalado / 8x 45s)",
        "16. Cruise Intervals no Limiar Fracionado 4x1500m (58 min - Intervalado / Zona 4)",
        "17. Tiros Curtos de Economia e Sprints 10x400m (50 min - Intervalado / Zona 5)",
        "18. Corrida Regenerativa de Descompressão (40 min - Regenerativo / Zona 1)",
        "19. Tempo Run Fracionado 3x8 min no Limiar (55 min - Intervalado / Zona 4)",
        "20. Longão Progressivo com Fast Finish 14 km (80 min - Longo / 8k Z2 + 4k Z3)"
    ]
    for t in intermediario:
        add_p(t)

    add_h2("Perfil Avançado (10 Treinos Estruturados em JSON / 30 no Catálogo Geral)")
    avancado = [
        "21. Intervalado Norueguês de Duplo Limiar 4x2000m (65 min - Intervalado / Sub-limiar)",
        "22. Tiros de VO2 Máximo Severo em Pista 10x800m (65 min - Intervalado / >93% FCmáx)",
        "23. Bloco Específico de Pace de Maratona 18 km (95 min - Longo / Marathon Pace)",
        "24. Over-Under Tempo Run Alternado 6x(3+3 min) (68 min - Intervalado / MCT transportador)",
        "25. Intervalado Láctico de Pista 15x400m Curta Pausa (60 min - Intervalado / Pausa 60s)",
        "26. Hill Repeats de Força Bruta e VO2 12x1 min (62 min - Intervalado / 7% a 9% inclinação)",
        "27. Fartlek Quêniano de Volume 20x(1 min Forte / 1 min Moderado) (70 min - Intervalado)",
        "28. Longão Progressivo de 3 Fases 24 km (115 min - Longo / 10k Z2 + 8k Z3 + 6k Z4)",
        "29. Cruise Intervals Extensos 3x4000m Ritmo Meia Maratona (75 min - Intervalado / Limiar)",
        "30. Tapering Sharpener Polimento Pré-Prova (45 min - Intervalado / 6x 400m ritmo prova)"
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
