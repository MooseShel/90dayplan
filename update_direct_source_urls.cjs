// update_direct_source_urls.cjs — Update data.js with verified 200 OK direct report URLs
const fs = require('fs');
const path = require('path');

const targetPaths = [
  path.join(__dirname, 'src', 'data.js'),
  'c:\\Users\\Husse\\Documents\\JobOffer\\90_day_interactive_site\\src\\data.js'
];

let content = fs.readFileSync(targetPaths[0], 'utf8');

const urlMap = [
  // Metric 1: IEA
  ['https://www.iea.org/topics/world-energy-outlook', 'https://www.iea.org/topics/world-energy-outlook'],
  // Metric 2: Gartner
  ['https://www.gartner.com/en/information-technology', 'https://www.gartner.com/en/newsroom'],
  // Metric 3: IDC
  ['https://www.idc.com/', 'https://www.idc.com/research'],
  // Metric 4: Precedence Research (Exact 200 OK report page)
  ['https://www.precedenceresearch.com/', 'https://www.precedenceresearch.com/artificial-intelligence-in-oil-and-gas-market'],
  // Metric 5: MarketsandMarkets (Exact 200 OK report page)
  ['https://www.marketsandmarkets.com/', 'https://www.marketsandmarkets.com/Market-Reports/digital-oilfield-solutions-market-528.html'],
  // Metric 6: Global CCS Institute (Exact 200 OK report page)
  ['https://www.globalccsinstitute.com/', 'https://www.globalccsinstitute.com/resources/global-status-report/'],
  // SPE (Exact 200 OK page)
  ['https://www.spe.org/', 'https://www.spe.org/en/jpt/jpt-main-page/'],
  // Everest Group
  ['https://www.everestgrp.com/', 'https://www.everestgrp.com/reportstore/'],
];

let totalFixes = 0;
for (const [oldUrl, newUrl] of urlMap) {
  if (content.includes(oldUrl)) {
    const parts = content.split(oldUrl);
    totalFixes += parts.length - 1;
    content = parts.join(newUrl);
    console.log(`Updated URL: "${oldUrl}" -> "${newUrl}"`);
  }
}

for (const target of targetPaths) {
  fs.writeFileSync(target, content, 'utf8');
  console.log(`Updated ${target}`);
}

console.log(`\nTotal URL updates made: ${totalFixes}`);
