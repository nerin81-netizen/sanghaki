
import os
import re
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, PageBreak, Table, TableStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.graphics.shapes import Drawing, Rect, String
from reportlab.graphics.charts.piecharts import Pie
# from reportlab.graphics.legends import Legend

# 폰트 설정
FONT_PATH = r"C:\Windows\Fonts\malgun.ttf"
try:
    if os.path.exists(FONT_PATH):
        pdfmetrics.registerFont(TTFont('MalgunGothic', FONT_PATH))
        print("DEBUG: Font registered successfully")
    else:
        print("DEBUG: Font file not found")
except Exception as e:
    print(f"DEBUG: Font registration failed: {e}")

def create_budget_bar():
    d = Drawing(400, 50)
    d.add(Rect(0, 20, 400, 15, rx=5, ry=5, fillColor=colors.lightgrey, strokeColor=None))
    d.add(Rect(0, 20, 260, 15, rx=5, ry=5, fillColor=colors.HexColor('#4CAF50'), strokeColor=None))
    d.add(String(0, 40, "이번 달 예산 현황", fontName='MalgunGothic', fontSize=10, fillColor=colors.black))
    d.add(String(350, 40, "65%", fontName='MalgunGothic', fontSize=10, fillColor=colors.black, textAnchor='end'))
    return d

def create_calendar_grid():
    data = [
        ['일', '월', '화', '수', '목', '금', '토'],
        ['', '', '1', '2', '3', '4', '5'],
        ['6', '7', '8', '9', '10', '11', '12'],
        ['13', '14', '15', '16', '17', '18', '19'],
        ['20', '21', '22', '23', '24', '25', '26'],
        ['27', '28', '29', '30', '31', '', ''],
    ]
    style = TableStyle([
        ('FONTNAME', (0,0), (-1,-1), 'MalgunGothic'),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('GRID', (0,0), (-1,-1), 0.5, colors.grey),
        ('BACKGROUND', (0,0), (-1,0), colors.lightgrey),
        ('TEXTCOLOR', (0,0), (0,-1), colors.red),
        ('TEXTCOLOR', (-1,0), (-1,-1), colors.blue),
    ])
    t = Table(data, colWidths=[50]*7, rowHeights=[30]*6)
    t.setStyle(style)
    return t

def create_pie_chart_drawing(data_dict):
    d = Drawing(400, 200)
    pc = Pie()
    pc.x = 65
    pc.y = 50
    pc.width = 100
    pc.height = 100
    pc.data = list(data_dict.values())
    pc.labels = None 
    
    # Simple color scheme
    colors_list = [
        colors.HexColor('#FF9999'), colors.HexColor('#66B2FF'),
        colors.HexColor('#99FF99'), colors.HexColor('#FFCC99'),
        colors.HexColor('#c2c2f0')
    ]
    
    for i in range(len(pc.data)):
        pc.slices[i].fillColor = colors_list[i % len(colors_list)]
        pc.slices[i].strokeWidth = 0.5
        
    d.add(pc)
    
    # Custom Legend
    keys = list(data_dict.keys())
    values = list(data_dict.values())
    total = sum(values)
    
    legend_x = 200
    legend_y = 140
    
    for i in range(len(keys)):
        y_pos = legend_y - (i * 20)
        color = colors_list[i % len(colors_list)]
        label = keys[i]
        val = values[i]
        percent = (val / total * 100) if total > 0 else 0
        
        d.add(Rect(legend_x, y_pos, 15, 15, fillColor=color, strokeColor=colors.black, strokeWidth=0.5))
        d.add(String(legend_x + 25, y_pos + 4, f"{label}: {val} ({percent:.1f}%)", fontName='MalgunGothic', fontSize=10, fillColor=colors.black))
        
    return d

def create_pdf(input_md, output_pdf):
    print(f"DEBUG: Creating {output_pdf}")
    
    doc = SimpleDocTemplate(output_pdf, pagesize=A4, rightMargin=40, leftMargin=40, topMargin=40, bottomMargin=40)
    story = []
    
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name='Normal_KO', fontName='MalgunGothic', fontSize=10, leading=16))
    styles.add(ParagraphStyle(name='Heading1_KO', fontName='MalgunGothic', fontSize=24, leading=28, spaceAfter=20, alignment=1, textColor=colors.HexColor('#333333'))) 
    styles.add(ParagraphStyle(name='Heading2_KO', fontName='MalgunGothic', fontSize=16, leading=20, spaceBefore=15, spaceAfter=10, textColor=colors.HexColor('#1C1C1E'), borderPadding=5, borderColor=colors.lightgrey, borderWidth=0, backColor=None))
    styles.add(ParagraphStyle(name='Heading3_KO', fontName='MalgunGothic', fontSize=12, leading=16, spaceBefore=10, spaceAfter=8, textColor=colors.HexColor('#555555')))
    styles.add(ParagraphStyle(name='Bullet_KO', fontName='MalgunGothic', fontSize=10, leading=16, leftIndent=20, bulletIndent=10, spaceAfter=2))
    styles.add(ParagraphStyle(name='Tip_KO', fontName='MalgunGothic', fontSize=9, leading=14, leftIndent=20, rightIndent=20, backColor=colors.HexColor('#FFF9C4'), borderPadding=10, spaceBefore=10, spaceAfter=10, borderColor=colors.orange, borderWidth=1))

    with open(input_md, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    print(f"DEBUG: Read {len(lines)} lines")

    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue
            
        if line.startswith('# '):
            story.append(Paragraph(line[2:], styles['Heading1_KO']))
            story.append(Spacer(1, 10))
        elif line.startswith('## '):
            story.append(Spacer(1, 10))
            story.append(Paragraph(line[3:], styles['Heading2_KO']))
        elif line.startswith('### '):
            story.append(Paragraph(line[4:], styles['Heading3_KO']))
        elif line.startswith('- ') or line.startswith('* '):
            text = line[2:]
            text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', text)
            text = re.sub(r'`(.*?)`', r'<font color="blue">\1</font>', text)
            story.append(Paragraph(f"• {text}", styles['Bullet_KO']))
        elif line.startswith('> '):
            text = line[2:]
            if text.startswith('[!TIP]') or text.startswith('[!IMPORTANT]'):
                i += 1
                continue
            text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', text)
            story.append(Paragraph(text, styles['Tip_KO']))
        elif line == '---':
            story.append(Spacer(1, 10))
            d = Drawing(400, 1)
            d.add(Rect(0, 0, 400, 1, fillColor=colors.lightgrey, strokeColor=None))
            story.append(d)
        elif line.startswith('![') and '](' in line:
            # Image Handler
            try:
                match = re.search(r'!\[(.*?)\]\((.*?)\)', line)
                if match:
                    alt_text = match.group(1)
                    img_path = match.group(2)
                    
                    # Resolve path if needed (Assuming relative to CWD)
                    if os.path.exists(img_path):
                        from reportlab.lib.utils import ImageReader
                        img = ImageReader(img_path)
                        iw, ih = img.getSize()
                        aspect = ih / float(iw)
                        width = 450 # Max width
                        height = width * aspect
                        
                        story.append(Spacer(1, 5))
                        story.append(Image(img_path, width=width, height=height))
                        story.append(Paragraph(f"<font size=8 color=gray>{alt_text}</font>", styles['Normal_KO']))
                        story.append(Spacer(1, 10))
                    else:
                        print(f"WARNING: Image not found: {img_path}")
            except Exception as e:
                print(f"ERROR processing image tag: {e}")
        elif '<!-- DISPLAY: BUDGET_BAR -->' in line:
            print("DEBUG: Adding Budget Bar")
            story.append(Spacer(1, 10))
            story.append(create_budget_bar())
            story.append(Spacer(1, 10))
        elif '<!-- DISPLAY: CALENDAR_GRID -->' in line:
            print("DEBUG: Adding Calendar Grid")
            story.append(Spacer(1, 10))
            story.append(create_calendar_grid())
            story.append(Spacer(1, 10))
        elif line.startswith('```python-chart'):
            chart_data = {}
            i += 1
            while i < len(lines):
                line_content = lines[i].strip()
                if line_content.startswith('```'):
                    break
                
                parts = line_content.split(':')
                if len(parts) == 2:
                    k = parts[0].strip().strip('"').strip("'")
                    try:
                        v = float(parts[1].strip())
                        chart_data[k] = v
                    except:
                        pass
                i += 1
            
            if chart_data:
                print("DEBUG: Adding Pie Chart")
                story.append(Spacer(1, 10))
                story.append(create_pie_chart_drawing(chart_data))
                story.append(Spacer(1, 10))
                
        elif line.startswith('```') or line.startswith('<!--'):
            print(f"DEBUG: Skipping special block: {line}")
            # Skip until end of block if it's a code block? 
            # user_manual_ko.md code blocks are short, but let's be safe.
            # Actually, standard markdown code blocks ending with ``` are handled by loop if we don't skip explicit lines.
            pass 
        else:
            text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', line)
            text = re.sub(r'`(.*?)`', r'<font color="blue">\1</font>', text)
            story.append(Paragraph(text, styles['Normal_KO']))
            story.append(Spacer(1, 4))
        
        i += 1

    print("DEBUG: Building PDF...")
    try:
        doc.build(story)
        print("DEBUG: PDF Build Success")
    except Exception as e:
        print(f"ERROR: PDF Build Failed: {e}")

if __name__ == "__main__":
    create_pdf("user_manual_ko.md", "visualizations/QuickMoney_User_Manual_v6.pdf")
