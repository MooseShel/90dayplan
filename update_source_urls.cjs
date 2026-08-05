// update_source_urls.cjs — Update data.js with robust top-level official source URLs
const fs = require('fs');
const path = require('path');

const targetPaths = [
  path.join(__dirname, 'src', 'data.js'),
  'c:\\Users\\Husse\\Documents\\JobOffer\\90_day_interactive_site\\src\\data.js'
];

let content = fs.readFileSync(targetPaths[0], 'utf8');

// Replace specific 404/broken URLs with official portal URLs
const urlReplacements = [
  ['https://www.iea.org/reports/world-energy-outlook-2025', 'https://www.iea.org/topics/world-energy-outlook'],
  ['https://www.gartner.com/en/newsroom/press-releases/gartner-forecasts-global-it-spending', 'https://www.gartner.com/en/information-technology'],
  ['https://www.idc.com/getdoc.jsp?containerId=prUS51980324', 'https://www.idc.com/'],
  ['https://www.precedenceresearch.com/artificial-intelligence-in-oil-and-gas-market', 'https://www.precedenceresearch.com/'],
  ['https://www.marketsandmarkets.com/Market-Reports/digital-oilfield-solutions-market-528.html', 'https://www.marketsandmarkets.com/'],
  ['https://www.globalccsinstitute.com/resources/global-status-report/', 'https://www.globalccsinstitute.com/'],
  ['https://www.spe.org/en/events/conference/digital-energy/', 'https://www.spe.org/'],
  ['https://www.spe.org/en/jpt/jpt-main-page/', 'https://www.spe.org/'],
  ['https://www.everestgrp.com/research/energy-cloud-services/', 'https://www.everestgrp.com/'],
  ['https://nca.gov.sa/en/pages/ecc.html', 'https://nca.gov.sa/'],
];

let totalFixes = 0;
for (const [badUrl, goodUrl] of urlReplacements) {
  const parts = content.split(badUrl);
  if (parts.length > 1) {
    const count = parts.length - 1;
    totalFixes += count;
    content = parts.join(goodUrl);
    console.log(`Replaced URL "${badUrl}" -> "${goodUrl}" (${count} times)`);
  }
}

for (const target of targetPaths) {
  fs.writeFileSync(target, content, 'utf8');
  console.log(`Updated source URLs in ${target}`);
}

console.log(`\nTotal URL replacements made: ${totalFixes}`);
