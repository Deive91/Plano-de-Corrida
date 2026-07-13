import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
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
    add_title("DOCUMENTAÇÃO TÉCNICA E CIENTÍFICA\nPLANO DE CORRIDA APP")
    add_p("Data: Julho de 2026 | Versão 2.4 | Arquitetura: React 18 + Vite + TailwindCSS + Banco de Dados JSON API")

    add_h1("1. Visão Geral e Banco de Dados de 90 Treinos (v2.4)")
    add_p("O PlanoDeCorrida é uma plataforma web adaptativa de periodização esportiva para corredores de rua de todos os níveis. Na versão 2.4, foi gerado e estruturado o banco de dados oficial completo em src/lib/workouts_api_catalog.json contendo exatamente 90 planos de treinamento.")
    add_p("Cada plano no banco JSON possui a seguinte estrutura de contrato: id (1 a 90), level ('iniciante', 'intermediario', 'avancado'), title, total_time_minutes, workout_type, structure (warmup, main_set, cooldown) e physiological_goal.")

    add_h1("2. Perfil dos 90 Treinos Científicos")
    add_h2("Nível Iniciante (30 Treinos - ID 1 a 30)")
    add_p("Foco em adaptação progressiva, alternância de caminhada/corrida com proporções controladas (1:1 a 3:1), iniciação ao trote contínuo (15 a 50 min), cadência alta de 180 passos/min para proteção articular contra overstriding, e introdução a Fartlek e subidas leves.")

    add_h2("Nível Intermediário (30 Treinos - ID 31 a 60)")
    add_p("Foco no aumento do volume sustentável em Zona 2, introdução sólida a treinos de limiar anaeróbio (Tempo Run de 25 a 40 min), Fartlek piramidal e queniano, Cruise Intervals no ritmo de 10k/21k, e longões de 14 a 18 km com progressão de ritmo (Fast Finish).")

    add_h2("Nível Avançado (30 Treinos - ID 61 a 90)")
    add_p("Foco em alta performance, intervalados rigorosos em pista com foco em VO2 máximo severo (10x800m, 15x400m, 6x1200m), Duplo Limiar Norueguês (4x2000m), Over-Under Tempo Runs, Hill Repeats de potência propulsiva e longões de 24 a 28 km com pace exato de maratona e polimento.")

    add_h1("3. Regra Universal: Fortalecimento Opcional na Segunda-feira")
    add_p("Em trainingEngine.js e no WeekCard.jsx, a Segunda-feira foi padronizada para todos os níveis como Treino de Fortalecimento com marcação de ⭐ Opcional (`isOptional: true`). Desta forma, o atleta que necessita de repouso passivo após o longão de domingo não perde porcentagem no seu progresso semanal.")

    out_path = os.path.join(os.path.dirname(__file__), "Documentacao_PlanoDeCorrida.docx")
    doc.save(out_path)
    print(f"Documento DOCX salvo em: {out_path}")

if __name__ == "__main__":
    create_plano_doc()
