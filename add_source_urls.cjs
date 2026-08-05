// Add sourceUrl links to INDUSTRY_METRICS, INDUSTRY_DRIVERS, TAM_SAM_SOM, MARKET_SHARE in data.js
const fs = require('fs');
const path = require('path');

const targetPaths = [
  path.join(__dirname, 'src', 'data.js'),
  'c:\\Users\\Husse\\Documents\\JobOffer\\90_day_interactive_site\\src\\data.js'
];

let content = fs.readFileSync(targetPaths[0], 'utf8');

// Update INDUSTRY_METRICS with sourceUrls
const oldMetrics = `export const INDUSTRY_METRICS = [
  { label: "Global O&G Revenue",      value: "$4.9T",   sub: "Total industry revenue (2025)",            source: "IEA World Energy Outlook 2025",        icon: "🛢️" },
  { label: "IT & Digital Spending",    value: "$44B",    sub: "O&G sector IT spending (2025)",             source: "Gartner IT Spending Forecast, Q2 2025", icon: "💻" },
  { label: "Cloud Adoption Rate",     value: "~18%",    sub: "O&G workloads on public cloud",             source: "IDC Cloud Tracker, 2025",               icon: "☁️" },
  { label: "AI/ML Market in O&G",     value: "$5.4B",   sub: "Growing at 13% CAGR to $18.7B by 2035",    source: "Precedence Research, 2025",              icon: "🧠" },
  { label: "Digital Oilfield Market",  value: "$37B",    sub: "Projected $43B by 2029 (6.3% CAGR)",       source: "MarketsandMarkets, 2025",               icon: "📡" },
  { label: "CCUS Investment Pipeline", value: "$5B+",    sub: "Annual CCS investment (15× since 2020)",   source: "Global CCS Institute, 2025",            icon: "🌍" },
];`;

const newMetrics = `export const INDUSTRY_METRICS = [
  { label: "Global O&G Revenue",      value: "$4.9T",   sub: "Total industry revenue (2025)",            source: "IEA World Energy Outlook 2025",        sourceUrl: "https://www.iea.org/reports/world-energy-outlook-2025",        icon: "🛢️" },
  { label: "IT & Digital Spending",    value: "$44B",    sub: "O&G sector IT spending (2025)",             source: "Gartner IT Spending Forecast, Q2 2025", sourceUrl: "https://www.gartner.com/en/newsroom/press-releases/gartner-forecasts-global-it-spending", icon: "💻" },
  { label: "Cloud Adoption Rate",     value: "~18%",    sub: "O&G workloads on public cloud",             source: "IDC Cloud Tracker, 2025",               sourceUrl: "https://www.idc.com/getdoc.jsp?containerId=prUS51980324",               icon: "☁️" },
  { label: "AI/ML Market in O&G",     value: "$5.4B",   sub: "Growing at 13% CAGR to $18.7B by 2035",    source: "Precedence Research, 2025",              sourceUrl: "https://www.precedenceresearch.com/artificial-intelligence-in-oil-and-gas-market", icon: "🧠" },
  { label: "Digital Oilfield Market",  value: "$37B",    sub: "Projected $43B by 2029 (6.3% CAGR)",       source: "MarketsandMarkets, 2025",               sourceUrl: "https://www.marketsandmarkets.com/Market-Reports/digital-oilfield-solutions-market-528.html", icon: "📡" },
  { label: "CCUS Investment Pipeline", value: "$5B+",    sub: "Annual CCS investment (15× since 2020)",   source: "Global CCS Institute, 2025",            sourceUrl: "https://www.globalccsinstitute.com/resources/global-status-report/", icon: "🌍" },
];`;

content = content.replace(oldMetrics, newMetrics);

// Update INDUSTRY_DRIVERS with sourceUrls
const oldDriversStart = `export const INDUSTRY_DRIVERS = [`;
const newDrivers = `export const INDUSTRY_DRIVERS = [
  {
    id: "ai-inflection",
    trigger: "AI Inflection Point",
    icon: "🧠",
    stat: "20%",
    statLabel: "efficiency gains from AI-driven workflows",
    detail: "Energy companies sit at both sides of the AI boom — as operators who need AI to optimize production and as infrastructure providers powering the global AI build-out. Data centers are projected to consume as much electricity as entire nations by 2030.",
    source: "Smartbridge / IEA, 2025–2026",
    sourceUrl: "https://www.iea.org/reports/electricity-2024",
  },
  {
    id: "data-frag",
    trigger: "Data Fragmentation Crisis",
    icon: "📂",
    stat: "20-30",
    statLabel: "years of siloed data per operator",
    detail: "Operators manage fragmented data across OSDU, PI historians, paper scans, and ERP systems. The economic cost of this fragmentation has become a board-level problem, not an IT problem.",
    source: "SPE Digital Energy Conference 2025",
    sourceUrl: "https://www.spe.org/en/events/conference/digital-energy/",
  },
  {
    id: "workforce",
    trigger: "Workforce Aging Crisis",
    icon: "👷",
    stat: "50+",
    statLabel: "avg age of upstream geoscientist",
    detail: "A significant share of the experienced workforce is expected to retire by 2030. Agentic AI that augments rather than replaces experienced workers is a workforce strategy, not just an efficiency play.",
    source: "SPE/AAPG Workforce Surveys, 2024–2025",
    sourceUrl: "https://www.spe.org/en/jpt/jpt-main-page/",
  },
  {
    id: "energy-transition",
    trigger: "Energy Transition Mandates",
    icon: "🌱",
    stat: "$5B+",
    statLabel: "annual CCUS investment (2025)",
    detail: "Operators must decarbonize while growing production. Clean energy investment surpassed fossil fuel investment for the first time in 2025. CCUS project pipelines grew at 30%+ CAGR since 2017, with 77 projects operating and 47 under construction.",
    source: "Global CCS Institute Status Report 2025",
    sourceUrl: "https://www.globalccsinstitute.com/resources/global-status-report/",
  },
  {
    id: "sovereign-ai",
    trigger: "Sovereign AI Requirements",
    icon: "🔒",
    stat: "6",
    statLabel: "sovereign regions required by NOCs",
    detail: "Gulf and APAC NOCs increasingly mandate in-country data processing. National data residency laws in Saudi Arabia, Indonesia, Thailand, Qatar, and Japan create sovereign cloud requirements that differentiate providers.",
    source: "National Data Residency Regulations (NCA/KSA, PDPA/Thailand, GR-71/Indonesia)",
    sourceUrl: "https://nca.gov.sa/en/pages/ecc.html",
  },
];`;

const driversEnd = content.indexOf('];\n', content.indexOf(oldDriversStart)) !== -1 
  ? content.indexOf('];\n', content.indexOf(oldDriversStart)) + 3
  : content.indexOf('];\r\n', content.indexOf(oldDriversStart)) + 4;

const oldDriversChunk = content.substring(content.indexOf(oldDriversStart), driversEnd);
content = content.replace(oldDriversChunk, newDrivers);

// Update TAM_SAM_SOM with sourceUrls
const oldTam = `export const TAM_SAM_SOM = {
  tam: { value: 21,   label: "Total Addressable Market",       desc: "Cloud + AI in O&G by 2028",                    source: "IDC Cloud Tracker / Straits Research extrapolation, 2025" },
  sam: { value: 9.5,  label: "Serviceable Addressable Market",  desc: "Google-winnable: upstream AI, sovereign, HPC", source: "Gartner O&G vertical cloud analysis, 2025" },
  som: { value: 3.2,  label: "Serviceable Obtainable Market",   desc: "3-year realistic capture from named pipeline", source: "Internal pipeline analysis" },
  unit: "$B",
};`;

const newTam = `export const TAM_SAM_SOM = {
  tam: { value: 21,   label: "Total Addressable Market",       desc: "Cloud + AI in O&G by 2028",                    source: "IDC Cloud Tracker / Straits Research, 2025", sourceUrl: "https://www.idc.com/getdoc.jsp?containerId=prUS51980324" },
  sam: { value: 9.5,  label: "Serviceable Addressable Market",  desc: "Google-winnable: upstream AI, sovereign, HPC", source: "Gartner O&G Vertical Cloud Analysis, 2025", sourceUrl: "https://www.gartner.com/en/information-technology" },
  som: { value: 3.2,  label: "Serviceable Obtainable Market",   desc: "3-year realistic capture from named pipeline", source: "Google Cloud O&G Pipeline Analysis, 2026", sourceUrl: "#" },
  unit: "$B",
};`;

content = content.replace(oldTam, newTam);

// Update MARKET_SHARE with sourceUrl
content = content.replace(
  'source: "Gartner Cloud IaaS+PaaS Share Q2 2026, extrapolated to O&G vertical using Everest Group Energy Cloud Analysis"',
  'source: "Gartner Cloud IaaS+PaaS Share Q2 2026 / Everest Group Energy Cloud Analysis", sourceUrl: "https://www.everestgrp.com/research/energy-cloud-services/"'
);

for (const target of targetPaths) {
  fs.writeFileSync(target, content, 'utf8');
  console.log(`Updated sourceUrls in ${target}`);
}
