// generate_strategy_html.cjs — Convert markdown strategy doc to printable HTML
const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, 'google_cloud_og_industry_strategy.md');
const mdContent = fs.readFileSync(mdPath, 'utf8');

// Basic Markdown to HTML parser tailored for our strategy doc
function parseMarkdown(md) {
  let html = md;

  // Code blocks & Mermaid
  html = html.replace(/```mermaid([\s\S]*?)```/g, (m, code) => {
    return `<div class="mermaid-container"><pre class="mermaid">${code.trim()}</pre></div>`;
  });
  html = html.replace(/```([\s\S]*?)```/g, (m, code) => {
    return `<pre><code>${code.trim()}</code></pre>`;
  });

  // Callouts / Alerts
  html = html.replace(/^> \[\!IMPORTANT\]\r?\n> (.*(?:\r?\n> .*)*)/gm, (m, content) => {
    const text = content.replace(/^> /gm, '');
    return `<div class="alert alert-important"><strong>IMPORTANT:</strong> ${text}</div>`;
  });
  html = html.replace(/^> \[\!NOTE\]\r?\n> (.*(?:\r?\n> .*)*)/gm, (m, content) => {
    const text = content.replace(/^> /gm, '');
    return `<div class="alert alert-note"><strong>NOTE:</strong> ${text}</div>`;
  });
  html = html.replace(/^> \[\!CAUTION\]\r?\n> (.*(?:\r?\n> .*)*)/gm, (m, content) => {
    const text = content.replace(/^> /gm, '');
    return `<div class="alert alert-caution"><strong>CAUTION:</strong> ${text}</div>`;
  });

  // Tables
  html = html.replace(/^\|(.+)\|\r?\n\|[-| :]+\|\r?\n((?:\|.+\|\r?\n?)+)/gm, (m, header, body) => {
    const ths = header.split('|').filter(c => c.trim() !== '').map(c => `<th>${c.trim()}</th>`).join('');
    const rows = body.trim().split('\n').map(row => {
      const tds = row.split('|').filter(c => c.trim() !== '').map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${tds}</tr>`;
    }).join('');
    return `<div class="table-scroll"><table><thead><tr>${ths}</tr></thead><tbody>${rows}</tbody></table></div>`;
  });

  // Headers
  html = html.replace(/^# (.*$)/gm, '<h1 class="doc-h1">$1</h1>');
  html = html.replace(/^## (.*$)/gm, '<h2 class="doc-h2">$1</h2>');
  html = html.replace(/^### (.*$)/gm, '<h3 class="doc-h3">$1</h3>');

  // Lists
  html = html.replace(/^\- (.*$)/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\r?\n?)+/g, '<ul>$&</ul>');

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Horizontal Rules
  html = html.replace(/^---$/gm, '<hr />');

  // Paragraphs
  const lines = html.split('\n\n');
  html = lines.map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<div') || p.startsWith('<table') || p.startsWith('<ul') || p.startsWith('<pre') || p.startsWith('<hr')) {
      return p;
    }
    return `<p>${p}</p>`;
  }).join('\n\n');

  return html;
}

const parsedBody = parseMarkdown(mdContent);

const htmlDocument = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Google Cloud Oil & Gas Industry Strategy</title>
  <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <style>
    @page {
      size: A4;
      margin: 15mm 15mm 20mm 15mm;
      @bottom-right {
        content: "Page " counter(page) " of " counter(pages);
        font-family: 'Roboto', sans-serif;
        font-size: 9pt;
        color: #5f6368;
      }
    }
    body {
      font-family: 'Roboto', 'Google Sans', sans-serif;
      font-size: 10.5pt;
      line-height: 1.55;
      color: #202124;
      background: #ffffff;
      margin: 0;
      padding: 20px 40px;
    }
    .header-banner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #4285f4;
      padding-bottom: 12px;
      margin-bottom: 24px;
    }
    .logo-title {
      font-family: 'Google Sans', sans-serif;
      font-size: 20pt;
      font-weight: 700;
      color: #202124;
      margin: 0;
    }
    .logo-blue { color: #4285f4; }
    .logo-red { color: #ea4335; }
    .logo-yellow { color: #fbbc04; }
    .logo-green { color: #34a853; }
    
    .confidential-badge {
      font-family: 'Roboto Mono', monospace;
      font-size: 8pt;
      font-weight: 700;
      color: #c5221f;
      background: #fce8e6;
      border: 1px solid #f5c6cb;
      padding: 4px 10px;
      border-radius: 4px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .doc-h1 {
      font-family: 'Google Sans', sans-serif;
      font-size: 22pt;
      font-weight: 700;
      color: #1a73e8;
      margin-top: 0;
      margin-bottom: 12px;
      line-height: 1.25;
    }
    .doc-h2 {
      font-family: 'Google Sans', sans-serif;
      font-size: 15pt;
      font-weight: 700;
      color: #202124;
      border-bottom: 1px solid #dadce0;
      padding-bottom: 6px;
      margin-top: 24px;
      margin-bottom: 12px;
      page-break-after: avoid;
    }
    .doc-h3 {
      font-family: 'Google Sans', sans-serif;
      font-size: 12pt;
      font-weight: 700;
      color: #1a73e8;
      margin-top: 16px;
      margin-bottom: 8px;
      page-break-after: avoid;
    }
    p { margin-top: 0; margin-bottom: 12px; }
    ul { margin-top: 0; margin-bottom: 12px; padding-left: 20px; }
    li { margin-bottom: 4px; }
    strong { font-weight: 700; }

    /* Alerts */
    .alert {
      padding: 12px 16px;
      border-radius: 6px;
      margin-bottom: 16px;
      font-size: 10pt;
    }
    .alert-important {
      background: #e8f0fe;
      border-left: 4px solid #1a73e8;
      color: #174ea6;
    }
    .alert-note {
      background: #e6f4ea;
      border-left: 4px solid #137333;
      color: #0d652d;
    }
    .alert-caution {
      background: #fce8e6;
      border-left: 4px solid #c5221f;
      color: #a50e0e;
    }

    /* Tables */
    .table-scroll { margin-bottom: 20px; width: 100%; overflow-x: auto; }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 9pt;
      margin-bottom: 16px;
      page-break-inside: auto;
    }
    tr { page-break-inside: avoid; page-break-after: auto; }
    th {
      background: #f8f9fa;
      color: #3c4043;
      font-weight: 700;
      text-align: left;
      padding: 8px 10px;
      border: 1px solid #dadce0;
    }
    td {
      padding: 7px 10px;
      border: 1px solid #dadce0;
      color: #202124;
      vertical-align: top;
    }
    tr:nth-child(even) td { background: #f8f9fa; }

    /* Links */
    a { color: #1a73e8; text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* Diagrams */
    .mermaid-container {
      text-align: center;
      margin: 20px 0;
      padding: 16px;
      background: #f8f9fa;
      border: 1px solid #dadce0;
      border-radius: 8px;
      page-break-inside: avoid;
    }
    
    hr {
      border: none;
      border-top: 1px solid #dadce0;
      margin: 24px 0;
    }
  </style>
</head>
<body>

  <div class="header-banner">
    <div class="logo-title">
      <span class="logo-blue">G</span><span class="logo-red">o</span><span class="logo-yellow">o</span><span class="logo-blue">g</span><span class="logo-green">l</span><span class="logo-red">e</span> Cloud
      <span style="font-size: 12pt; font-weight: 400; color: #5f6368; margin-left: 10px;">| Global Oil & Gas Industry Strategy</span>
    </div>
    <div class="confidential-badge">Executive Briefing · Confidential</div>
  </div>

  ${parsedBody}

  <script>
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      securityLevel: 'loose',
      fontFamily: 'Google Sans, Roboto, sans-serif'
    });
  </script>
</body>
</html>
`;

const htmlPath = path.join(__dirname, 'strategy_doc_printable.html');
fs.writeFileSync(htmlPath, htmlDocument, 'utf8');
console.log(`Generated HTML printable doc at: ${htmlPath}`);
