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
    add_title("DOCUMENTAÇÃO TÉCNICA DO SISTEMA\nPLANO DE CORRIDA APP")
    add_p("Data: Julho de 2026 | Versão 2.3 | Arquitetura: React 18 + Vite + TailwindCSS")

    add_h1("1. Visão Geral do Aplicativo (v2.3)")
    add_p("O PlanoDeCorrida é uma plataforma web adaptativa de periodização esportiva que gera cronogramas de treinamento científicos e personalizados de acordo com o nível, idade e meta de distância (5K a 42K) do corredor.")
    add_p("Na versão 2.3, por solicitação expressa de remoção de todos os treinos predefinidos, o catálogo foi esvaziado, mantendo a engine de cálculo de volume, paces e distâncias funcionando de forma limpa e modular.")

    add_h1("2. Regra Universal: Fortalecimento Opcional na Segunda-feira")
    add_p("Em trainingEngine.js e no WeekCard.jsx, a Segunda-feira foi padronizada para todos os níveis como Treino de Fortalecimento com marcação de ⭐ Opcional. Desta forma, o atleta que necessita de repouso após o longão de domingo não perde porcentagem no seu progresso semanal.")

    out_path = os.path.join(os.path.dirname(__file__), "Documentacao_PlanoDeCorrida.docx")
    doc.save(out_path)
    print(f"Documento DOCX salvo em: {out_path}")

if __name__ == "__main__":
    create_plano_doc()
