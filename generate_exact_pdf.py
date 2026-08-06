import os
import re
import subprocess
import markdown
import pypdf

md_path = r'c:\Users\Husse\Documents\JobOffer\google_cloud_og_industry_strategy.md'
html_path = r'c:\Users\Husse\Documents\JobOffer\temp_exact_google.html'
pdf_public = r'c:\Users\Husse\Documents\JobOffer\public\google_cloud_og_industry_strategy.pdf'
pdf_dist = r'c:\Users\Husse\Documents\JobOffer\dist\google_cloud_og_industry_strategy.pdf'

with open(md_path, 'r', encoding='utf-8') as f:
    md_text = f.read()

# Replace Markdown Appendix tags with styled pill badges matching exact screenshot
def format_pills(text):
    text = re.sub(r'`\[See Appendix ([^\]]+)\]`', r'<span class="appendix-link">[See Appendix \1]</span>', text)
    text = re.sub(r'\[See Appendix ([^\]]+)\]', r'<span class="appendix-link">[See Appendix \1]</span>', text)
    return text

processed_md = format_pills(md_text)

# Convert Markdown to HTML
html_body = markdown.markdown(
    processed_md,
    extensions=['tables', 'fenced_code', 'toc', 'nl2br', 'sane_lists']
)

# Custom Figure Embeds
fig_a2 = """
<div class="figure-card">
  <div class="figure-title">FIGURE A.2 — 5-Year Workload Revenue Trajectory ($M) & Target Market Stack</div>
  <div style="display: flex; gap: 20px; align-items: stretch;">
    <div style="flex: 1; display: flex; flex-direction: column; gap: 10px;">
      <div style="font-size: 9pt; font-weight: 700; color: #5f6368; text-transform: uppercase;">TARGET MARKET SIZING (2028)</div>
      <div style="background: #e8f0fe; border: 1px solid #d2e3fc; border-radius: 6px; padding: 12px;">
        <div style="font-size: 8.5pt; color: #174ea6; font-weight: 700;">Total Addressable Market (TAM)</div>
        <div style="font-size: 18pt; font-weight: 700; color: #174ea6;">$21.0 Billion</div>
      </div>
      <div style="background: #e6f4ea; border: 1px solid #ceebe6; border-radius: 6px; padding: 12px;">
        <div style="font-size: 8.5pt; color: #137333; font-weight: 700;">Serviceable Addressable Market (SAM)</div>
        <div style="font-size: 18pt; font-weight: 700; color: #137333;">$9.5 Billion</div>
      </div>
      <div style="background: #fce8e6; border: 1px solid #fad2cf; border-radius: 6px; padding: 12px;">
        <div style="font-size: 8.5pt; color: #c5221f; font-weight: 700;">Serviceable Obtainable Market (SOM)</div>
        <div style="font-size: 18pt; font-weight: 700; color: #c5221f;">$3.2 Billion</div>
      </div>
    </div>
    <div style="flex: 1.5; display: flex; flex-direction: column; gap: 12px;">
      <div style="font-size: 9pt; font-weight: 700; color: #5f6368; text-transform: uppercase;">WORKLOAD ARR PROGRESSION ($ MILLIONS)</div>
      <div>
        <div style="display: flex; justify-content: space-between; font-size: 9pt; font-weight: 700; margin-bottom: 4px;"><span>2024</span><span>$275M</span></div>
        <div style="display: flex; height: 16px; border-radius: 4px; overflow: hidden;">
          <div style="width: 29%; background: #4285F4;"></div>
          <div style="width: 15%; background: #34A853;"></div>
          <div style="width: 44%; background: #9334E6;"></div>
          <div style="width: 11%; background: #EA4335;"></div>
          <div style="width: 1%; background: #34A853;"></div>
        </div>
      </div>
      <div>
        <div style="display: flex; justify-content: space-between; font-size: 9pt; font-weight: 700; margin-bottom: 4px;"><span>2026</span><span>$755M</span></div>
        <div style="display: flex; height: 16px; border-radius: 4px; overflow: hidden;">
          <div style="width: 33%; background: #4285F4;"></div>
          <div style="width: 15%; background: #34A853;"></div>
          <div style="width: 34%; background: #9334E6;"></div>
          <div style="width: 13%; background: #EA4335;"></div>
          <div style="width: 5%; background: #34A853;"></div>
        </div>
      </div>
      <div>
        <div style="display: flex; justify-content: space-between; font-size: 9pt; font-weight: 700; margin-bottom: 4px;"><span>2028 (Target)</span><span>$1,960M ($1.96B)</span></div>
        <div style="display: flex; height: 16px; border-radius: 4px; overflow: hidden;">
          <div style="width: 38%; background: #4285F4;"></div>
          <div style="width: 14%; background: #34A853;"></div>
          <div style="width: 27%; background: #9334E6;"></div>
          <div style="width: 13%; background: #EA4335;"></div>
          <div style="width: 8%; background: #34A853;"></div>
        </div>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; font-size: 8pt; color: #5f6368; margin-top: 8px;">
        <span><strong style="color:#4285F4;">■</strong> AI/ML & Gemini</span>
        <span><strong style="color:#34A853;">■</strong> HPC Seismic</span>
        <span><strong style="color:#9334E6;">■</strong> Data & OSDU</span>
        <span><strong style="color:#EA4335;">■</strong> Sovereign & Security</span>
        <span><strong style="color:#34A853;">■</strong> CCUS Platform</span>
      </div>
    </div>
  </div>
</div>
"""

fig_b3 = """
<div class="figure-card">
  <div class="figure-title">FIGURE B.3 — End-to-End Governed Agentic Execution Pipeline</div>
  <div style="display: grid; grid-template-columns: 1fr 20px 1fr 20px 1fr 20px 1fr; align-items: center; gap: 4px; font-size: 8.5pt;">
    <div style="background: #f1f3f4; border: 1px solid #dadce0; border-radius: 6px; padding: 10px;">
      <div style="font-weight: 700; color: #1a73e8; margin-bottom: 6px;">1. INGESTION</div>
      <div>• OSDU Platform</div><div>• SCADA Historians</div><div>• LAS/DLIS Well Logs</div><div>• Seismic 3D Volumes</div><div>• P&ID Schematics</div>
    </div>
    <div style="text-align: center; color: #5f6368; font-weight: 700;">➔</div>
    <div style="background: #e8f0fe; border: 1px solid #d2e3fc; border-radius: 6px; padding: 10px;">
      <div style="font-weight: 700; color: #174ea6; margin-bottom: 6px;">2. GEMINI REASONING</div>
      <div>• 2M Token Context RAG</div><div>• Subsurface / Timeseries FMs</div><div>• Vertex Agent Builder</div><div>• Anomaly Pattern Recognition</div>
    </div>
    <div style="text-align: center; color: #5f6368; font-weight: 700;">➔</div>
    <div style="background: #fce8e6; border: 1px solid #fad2cf; border-radius: 6px; padding: 10px;">
      <div style="font-weight: 700; color: #c5221f; margin-bottom: 6px;">3. GOVERNANCE GATE</div>
      <div>• Human Approval Sign-off</div><div>• Geoscientist/HSE Gate</div><div>• Deterministic Kill Switch</div><div>• Audit Trail Logging</div>
    </div>
    <div style="text-align: center; color: #5f6368; font-weight: 700;">➔</div>
    <div style="background: #e6f4ea; border: 1px solid #ceebe6; border-radius: 6px; padding: 10px;">
      <div style="font-weight: 700; color: #137333; margin-bottom: 6px;">4. ACTION OUTPUT</div>
      <div>• SAP Work Order Creation</div><div>• SCADA Control Setpoints</div><div>• Auto Petrel Surface Write</div><div>• Emergency Rig Console Alert</div>
    </div>
  </div>
</div>
"""

fig_c3 = """
<div class="figure-card">
  <div class="figure-title">FIGURE C.3 — Multi-Tier Sovereign & Security Regional Operating Topology</div>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; font-size: 8.5pt;">
    <div style="background: #ffffff; border: 1px solid #dadce0; border-top: 4px solid #c5221f; border-radius: 6px; padding: 12px;">
      <div style="font-weight: 700; color: #c5221f;">DAMMAM me-central2</div>
      <div style="font-weight: 600; color: #202124; margin-bottom: 6px;">Class C Sovereign Region</div>
      <div>• CST / NCA Class C Certified</div><div>• CNTXT External Key Manager</div><div>• KSA In-Country Boundary</div>
    </div>
    <div style="background: #ffffff; border: 1px solid #dadce0; border-top: 4px solid #1a73e8; border-radius: 6px; padding: 12px;">
      <div style="font-weight: 700; color: #1a73e8;">GDC AIR-GAPPED</div>
      <div style="font-weight: 600; color: #202124; margin-bottom: 6px;">On-Premise OT / ICS SOC</div>
      <div>• Fully Disconnected Hardware</div><div>• Mandiant ICS Threat Sensor</div><div>• Local SCADA Zero-Trust SOC</div>
    </div>
    <div style="background: #ffffff; border: 1px solid #dadce0; border-top: 4px solid #137333; border-radius: 6px; padding: 12px;">
      <div style="font-weight: 700; color: #137333;">HUMAIN AI ENGINE</div>
      <div style="font-weight: 600; color: #202124; margin-bottom: 6px;">Saudi GTM Platform</div>
      <div>• Saudi Aramco & Ministry AI</div><div>• IKVA Local Technology Transfer</div><div>• SABIC & Ma'aden Enablement</div>
    </div>
  </div>
</div>
"""

fig_d1 = """
<div class="figure-card">
  <div class="figure-title">FIGURE D.1 — Project Interchange Bilateral Value Exchange Loop</div>
  <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 8.5pt;">
    <div style="flex: 1.2; border: 2px solid #1a73e8; border-radius: 8px; padding: 12px; background: #ffffff;">
      <div style="font-weight: 700; color: #1a73e8; text-transform: uppercase;">ENERGY OPERATOR</div>
      <div style="font-weight: 600; color: #202124; margin-bottom: 8px;">EQT · Pertamina · TotalEnergies</div>
      <div style="font-weight: 700; color: #5f6368;">Provides:</div>
      <div>• Firm Power PPAs (Gas/Geo/SMR)</div><div>• Power-Adjacent Land & Permits</div><div>• Telemetry & SCADA Data</div>
    </div>
    <div style="width: 110px; height: 110px; border: 2px dashed #1a73e8; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 8px; background: #e8f0fe;">
      <div style="font-weight: 700; color: #174ea6; font-size: 8pt;">PROJECT INTERCHANGE</div>
      <div style="font-size: 7pt; color: #5f6368; margin-top: 2px;">Bilateral Energy-AI OS</div>
    </div>
    <div style="flex: 1.2; border: 2px solid #34A853; border-radius: 8px; padding: 12px; background: #ffffff;">
      <div style="font-weight: 700; color: #137333; text-transform: uppercase;">GOOGLE & ALPHABET</div>
      <div style="font-weight: 600; color: #202124; margin-bottom: 8px;">Google Cloud + Energy Procurement</div>
      <div style="font-weight: 700; color: #5f6368;">Delivers:</div>
      <div>• Preferential GCP Credits (20-40% below list)</div><div>• DeepMind Science Engine Access</div><div>• Tapestry Grid AI & Priority TPU SLAs</div>
    </div>
  </div>
</div>
"""

# Insert visual figure blocks before their corresponding section tables
html_body = html_body.replace('<h3>A.2 5-Year Revenue Growth Trajectory Breakdown (2024–2028)</h3>', fig_a2 + '<h3>A.2 5-Year Revenue Growth Trajectory Breakdown (2024–2028)</h3>')
html_body = html_body.replace('<h3>B.3 The 6-Agent Reference Architecture Specifications</h3>', fig_b3 + '<h3>B.3 The 6-Agent Reference Architecture Specifications</h3>')
html_body = html_body.replace('<h3>C.3 Sovereign Cloud &amp; Security Operating Topology (Saudi Arabia Focus)</h3>', fig_c3 + '<h3>C.3 Sovereign Cloud &amp; Security Operating Topology (Saudi Arabia Focus)</h3>')
html_body = html_body.replace('<h3>D.1 Project Interchange: Commercial Bilateral Operating Model</h3>', fig_d1 + '<h3>D.1 Project Interchange: Commercial Bilateral Operating Model</h3>')

# Clean top title repetition from markdown body
html_body_clean = re.sub(r'^<p># Google Cloud Global Oil &amp; Gas Industry Strategy</p>', '', html_body, flags=re.MULTILINE)
html_body_clean = re.sub(r'<h1>Google Cloud Global Oil &amp; Gas Industry Strategy</h1>\s*<p><strong>Executive Strategy &amp; Market Execution Roadmap[^<]*</strong><br />\s*<strong>Google Cloud · Global Oil &amp; Gas Industry Team[^<]*</strong><br />\s*<strong>August 2026 · STRATEGIC EXECUTIVE BRIEFING · CONFIDENTIAL</strong></p>', '', html_body_clean)
html_body_clean = re.sub(r'<p><strong>Executive Strategy &amp; Market Execution Roadmap[^<]*</strong><br />\s*<strong>Google Cloud · Global Oil &amp; Gas Industry Team[^<]*</strong><br />\s*<strong>August 2026 · STRATEGIC EXECUTIVE BRIEFING · CONFIDENTIAL</strong></p>', '', html_body_clean)


# Full Exact Page Layout HTML matching screenshots
html_exact = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Google Cloud Global Oil & Gas Industry Strategy</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Mono:wght@400;500;700&display=swap');

  @page {{
    size: letter;
    margin: 0.55in 0.6in 0.65in 0.6in;
  }}

  body {{
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    color: #202124;
    font-size: 10pt;
    line-height: 1.55;
    background: #ffffff;
  }}

  .header-container {{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
  }}

  .logo-title {{
    font-size: 20px;
    font-weight: 700;
    line-height: 1.1;
  }}

  .logo-subtitle {{
    font-size: 12px;
    color: #5f6368;
    margin-top: 2px;
  }}

  .confidential-badge {{
    background: #fce8e6;
    border: 1px solid #fad2cf;
    color: #c5221f;
    font-family: 'Roboto Mono', monospace;
    font-size: 8.5px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 4px;
    letter-spacing: 0.5px;
  }}

  .top-blue-line {{
    border: none;
    border-top: 3px solid #4285F4;
    margin: 8px 0 16px 0;
  }}

  .main-title {{
    font-size: 22pt;
    font-weight: 700;
    color: #1a73e8;
    margin: 0 0 8px 0;
    line-height: 1.2;
  }}

  .main-meta {{
    font-size: 10pt;
    font-weight: 700;
    color: #202124;
    margin-bottom: 14px;
    line-height: 1.4;
  }}

  .divider {{
    border: none;
    border-top: 1px solid #dadce0;
    margin: 14px 0 18px 0;
  }}

  h2 {{
    font-size: 14pt;
    font-weight: 700;
    color: #202124;
    margin-top: 22px;
    margin-bottom: 10px;
    border-bottom: 1px solid #dadce0;
    padding-bottom: 4px;
    page-break-after: avoid;
  }}

  h3 {{
    font-size: 11.5pt;
    font-weight: 700;
    color: #1a73e8;
    margin-top: 18px;
    margin-bottom: 8px;
    page-break-after: avoid;
  }}

  h4 {{
    font-size: 10pt;
    font-weight: 700;
    color: #202124;
    margin-top: 12px;
    margin-bottom: 6px;
    page-break-after: avoid;
  }}

  p {{
    margin-top: 0;
    margin-bottom: 10px;
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

  .appendix-link {{
    color: #1a73e8;
    background: #e8f0fe;
    padding: 1px 5px;
    border-radius: 3px;
    font-size: 9.5pt;
    font-weight: 500;
    white-space: nowrap;
  }}

  table {{
    width: 100%;
    border-collapse: collapse;
    margin: 12px 0;
    font-size: 8.5pt;
    page-break-inside: avoid;
  }}

  th {{
    background: #f8f9fa;
    color: #202124;
    font-weight: 700;
    text-align: left;
    padding: 7px 9px;
    border: 1px solid #dadce0;
  }}

  td {{
    padding: 7px 9px;
    border: 1px solid #dadce0;
    vertical-align: top;
  }}

  .figure-card {{
    background: #ffffff;
    border: 1px solid #dadce0;
    border-radius: 8px;
    padding: 14px;
    margin: 16px 0;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    page-break-inside: avoid;
  }}

  .figure-title {{
    font-size: 10.5pt;
    font-weight: 700;
    color: #1a73e8;
    margin-bottom: 12px;
  }}
</style>
</head>
<body>

<div class="header-container">
  <div class="logo-group">
    <div class="logo-title">
      <span style="color:#4285F4;">G</span><span style="color:#EA4335;">o</span><span style="color:#FBBC04;">o</span><span style="color:#4285F4;">g</span><span style="color:#34A853;">l</span><span style="color:#EA4335;">e</span> <span style="color:#3c4043;">Cloud</span>
    </div>
    <div class="logo-subtitle">Global Oil & Gas Industry Strategy & References</div>
  </div>
  <div class="confidential-badge">
    EXECUTIVE BRIEFING · CONFIDENTIAL · AUGUST 2026
  </div>
</div>

<hr class="top-blue-line">

<h1 class="main-title">Google Cloud Global Oil & Gas Industry Strategy</h1>

<div class="main-meta">
  Executive Strategy & Market Execution Roadmap Google Cloud · Global Oil & Gas Industry Team August 2026 · STRATEGIC EXECUTIVE BRIEFING · CONFIDENTIAL
</div>

<hr class="divider">

{html_body_clean}

</body>
</html>
"""

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_exact)

print("HTML generated with exact original styling. Converting to PDF...")

browser_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
if not os.path.exists(browser_path):
    browser_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

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
    os.makedirs(os.path.dirname(pdf_dist), exist_ok=True)
    shutil.copy(pdf_public, pdf_dist)
    print("Copied PDF to dist successfully!")

    reader = pypdf.PdfReader(pdf_public)
    print(f"Generated PDF Page Count: {len(reader.pages)}")

if os.path.exists(html_path):
    os.remove(html_path)

print("Exact original PDF build complete.")
