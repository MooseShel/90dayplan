import os
import re
import subprocess
import markdown
import pypdf

base_dir = os.path.dirname(os.path.abspath(__file__))
md_path = os.path.join(base_dir, 'google_cloud_ccus_think_big_strategy.md')
html_path = os.path.join(base_dir, 'temp_ccus.html')
pdf_public = os.path.join(base_dir, 'public', 'google_cloud_ccus_think_big_strategy.pdf')
pdf_dist = os.path.join(base_dir, 'dist', 'google_cloud_ccus_think_big_strategy.pdf')


with open(md_path, 'r', encoding='utf-8') as f:
    md_text = f.read()

# Convert Markdown to HTML
html_body = markdown.markdown(
    md_text,
    extensions=['tables', 'fenced_code', 'toc', 'nl2br', 'sane_lists']
)

# Normalize reference and local links to GitHub repository URLs so PDF links work universally
def normalize_links(html):
    html = re.sub(
        r'href=["\'](?:/|public/|./)?references/([^"\']+)["\']',
        r'href="https://github.com/MooseShel/90dayplan/blob/main/public/references/\1"',
        html
    )
    html = re.sub(
        r'href=["\'](?:/|public/|./)?([^"\']+\.(?:pdf|docx|md|html))["\']',
        r'href="https://github.com/MooseShel/90dayplan/blob/main/public/\1"',
        html
    )
    html = re.sub(
        r'href=["\']file:///[^"\']*/public/references/([^"\']+)["\']',
        r'href="https://github.com/MooseShel/90dayplan/blob/main/public/references/\1"',
        html
    )
    html = re.sub(
        r'href=["\']file:///[^"\']*/public/([^"\']+)["\']',
        r'href="https://github.com/MooseShel/90dayplan/blob/main/public/\1"',
        html
    )
    html = re.sub(
        r'href=["\']file:///[^"\']*/references/([^"\']+)["\']',
        r'href="https://github.com/MooseShel/90dayplan/blob/main/public/references/\1"',
        html
    )
    return html

html_body = normalize_links(html_body)



html_exact = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Google Cloud CCUS Think Big Strategy</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Roboto+Mono:wght@400;500;700&display=swap');

  @page {{
    size: letter;
    margin: 0.42in 0.48in 0.42in 0.48in;
  }}

  body {{
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    color: #202124;
    font-size: 9.2pt;
    line-height: 1.43;
    background: #ffffff;
  }}

  .header-container {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }}

  .logo-title {{
    font-size: 19px;
    font-weight: 700;
    line-height: 1.1;
  }}

  .logo-subtitle {{
    font-size: 11px;
    color: #5f6368;
    margin-top: 1px;
    font-weight: 500;
  }}

  .confidential-badge {{
    background: #fce8e6;
    border: 1px solid #fad2cf;
    color: #c5221f;
    font-family: 'Roboto Mono', monospace;
    font-size: 8px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 4px;
    letter-spacing: 0.5px;
  }}

  .top-blue-line {{
    border: none;
    border-top: 3.5px solid #4285F4;
    margin: 4px 0 12px 0;
  }}

  h2 {{
    font-size: 12pt;
    font-weight: 700;
    color: #1a73e8;
    margin-top: 14px;
    margin-bottom: 6px;
    border-bottom: 1.5px solid #e8f0fe;
    padding-bottom: 2px;
    page-break-after: avoid;
  }}

  h3 {{
    font-size: 10pt;
    font-weight: 700;
    color: #202124;
    margin-top: 10px;
    margin-bottom: 5px;
    page-break-after: avoid;
  }}

  h4 {{
    font-size: 9pt;
    font-weight: 700;
    color: #1a73e8;
    margin-top: 8px;
    margin-bottom: 4px;
    page-break-after: avoid;
  }}

  p {{
    margin-top: 0;
    margin-bottom: 6px;
    text-align: justify;
  }}

  strong {{
    color: #202124;
    font-weight: 700;
  }}

  a {{
    color: #1a73e8;
    text-decoration: none;
  }}

  code, pre {{
    font-family: 'Roboto Mono', monospace;
    background: #f8f9fa;
    border: 1px solid #e8eaed;
    border-radius: 4px;
  }}

  pre {{
    padding: 6px 8px;
    font-size: 7.8pt;
    line-height: 1.3;
    white-space: pre-wrap;
    word-break: break-word;
    page-break-inside: avoid;
  }}

  .visual-card-container {{
    margin: 8px 0;
    page-break-inside: avoid;
  }}

  .page-break {{
    page-break-before: always;
    break-before: page;
  }}

  table {{
    width: 100%;
    border-collapse: collapse;
    margin: 6px 0;
    font-size: 8pt;
    page-break-inside: auto;
  }}

  tr {{
    page-break-inside: avoid;
  }}

  th {{
    background: #f8f9fa;
    color: #202124;
    font-weight: 700;
    text-align: left;
    padding: 4px 6px;
    border: 1px solid #dadce0;
  }}

  td {{
    padding: 4px 6px;
    border: 1px solid #dadce0;
    vertical-align: top;
    line-height: 1.3;
  }}

  ul, ol {{
    margin-top: 0;
    margin-bottom: 6px;
    padding-left: 16px;
  }}

  li {{
    margin-bottom: 2px;
  }}
</style>
</head>
<body>

<div class="header-container">
  <div class="logo-group">
    <div class="logo-title">
      <span style="color:#4285F4;">G</span><span style="color:#EA4335;">o</span><span style="color:#FBBC04;">o</span><span style="color:#4285F4;">g</span><span style="color:#34A853;">l</span><span style="color:#EA4335;">e</span> <span style="color:#3c4043;">Cloud</span>
    </div>
    <div class="logo-subtitle">Global Oil & Gas Vertical · CCUS Executive Strategy Briefing</div>
  </div>
  <div class="confidential-badge">
    EXECUTIVE BRIEFING · CONFIDENTIAL · AUGUST 2026
  </div>
</div>

<hr class="top-blue-line">

{html_body}

</body>
</html>
"""

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_exact)

print("HTML generated for CCUS strategy document. Converting to PDF...")

browser_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
if not os.path.exists(browser_path):
    browser_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

os.makedirs(os.path.dirname(pdf_public), exist_ok=True)
os.makedirs(os.path.dirname(pdf_dist), exist_ok=True)

cmd = [
    browser_path,
    '--headless',
    '--disable-gpu',
    '--print-to-pdf=' + pdf_public,
    '--no-pdf-header-footer',
    html_path
]

res = subprocess.run(cmd, capture_output=True, text=True)
print("Public PDF generate result:", res.returncode)

if os.path.exists(pdf_public):
    import shutil
    shutil.copy(pdf_public, pdf_dist)
    print("Copied PDF to dist/ successfully!")

    reader = pypdf.PdfReader(pdf_public)
    print(f"Generated PDF Page Count: {len(reader.pages)}")

if os.path.exists(html_path):
    os.remove(html_path)

print("CCUS PDF build complete.")
