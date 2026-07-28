// ── Central data store for all 9 sections ──────────────────────────────

export const META = {
  author: "Hussein Shel",
  title: "Market Lead Director, Global Oil & Gas",
  company: "Google Cloud",
  date: "July 2026",
  confidential: "CONFIDENTIAL · INTERNAL LEADERSHIP DRAFT",
};

export const NAV_ITEMS = [
  { id: "thesis",      num: "01", label: "Strategic Thesis",          sub: "Six-Pillar Framework" },
  { id: "offense",     num: "02", label: "Market Offense",            sub: "Named Account Tiers" },
  { id: "partners",    num: "03", label: "Partner Coalition",         sub: "ISVs · GSIs · Academia" },
  { id: "technology",  num: "04", label: "Technology Stack",          sub: "Agentic OSDU · Sovereign Trio" },
  { id: "alphabet",    num: "05", label: "Alphabet Advantage",        sub: "Cross-Portfolio Plays" },
  { id: "exchange",    num: "06", label: "Energy Exchange",           sub: "Energy-for-Intelligence" },
  { id: "roadmap",     num: "07", label: "30-60-90 Roadmap",          sub: "ADIPEC · CERAWeek Anchors" },
  { id: "enablement",  num: "08", label: "Sales Enablement & GTM",    sub: "Scaling the Machine" },
  { id: "okr",         num: "09", label: "OKR Scorecard",             sub: "O1–O6 · Day 90 KRs" },
  { id: "decisions",   num: "10", label: "Executive Decisions",       sub: "10 Asks · First 30 Days" },
  { id: "thinkbig",    num: "11", label: "THINK BIG",                  sub: "Interchange · DeepMind Lab" },
];

export const PILLARS = [
  {
    num: "1",
    title: "Customer Offense",
    posture: "Scored, four-tier named-account attack",
    proof: "5+ signed pursuits; 1 PE sponsor platform; 2 fortress wedge validations",
    color: "blue",
  },
  {
    num: "2",
    title: "Ecosystem Coalition",
    posture: "Domain ISVs · Google-native AI · Energy GSIs · Academia · Google Startup Enablement · HUMAIN AI (KSA)",
    proof: "3 ISV charters; 2 GSIs certified; ≥30% partner-originated pipeline; ≥3 startups onboarded; HUMAIN AI engagement initiated",
    color: "teal",
  },
  {
    num: "3",
    title: "Technology",
    posture: "Agentic OSDU & Non-OSDU Path · Gemini 3.5/3.6 Reasoning · GCP-Hosted Industry Foundation Models (Timeseries + Subsurface) · Subsurface HPC Supercomputing · Sovereign Trio & Earth Engine",
    proof: "Reference architecture ratified; 1 sovereign NOC PoC scoped; HPC burst architecture validated; 1 FM in ISV validation; 6 ISV data partnerships scoped (TGS/SLB/Baker Hughes/Siemens/AspenTech/Enverus)",
    color: "purple",
  },
  {
    num: "4",
    title: "Alphabet Advantage",
    posture: "DeepMind · Geospatial · Workspace · Mandiant · Grid · Carbon",
    proof: "3 Alphabet-stack modules embedded in live pursuits",
    color: "green",
  },
  {
    num: "5",
    title: "Energy Exchange",
    posture: "Bilateral industrial partnerships: firm power ↔ AI-native operations",
    proof: "2 CEO-level dialogues opened; ADIPEC + CERAWeek narratives locked",
    color: "amber",
  },
  {
    num: "6",
    title: "THINK BIG",
    posture: "Project Interchange (Energy-AI bilateral OS) · DeepMind Energy Lab (frontier R&D engine)",
    proof: "1 Interchange MOU/LOI signed; 1 DeepMind research partnership; ADIPEC marquee announcements",
    color: "red",
  },
];

export const ACCOUNTS = [
  // Tier 1A — Public Independents
  { id: "eqt",        name: "EQT / Expand Energy",   tier: "1A", priority: "P1", incumbent: "Greenfield", posture: "Lead",    dataReady: true,  tv: 28, sponsor: 27, friction: 25, repeat: 15 },
  { id: "devon",      name: "Devon Energy",           tier: "1A", priority: "P1", incumbent: "Azure",posture: "Lead",    dataReady: true,  tv: 30, sponsor: 28, friction: 20, repeat: 14 },
  { id: "diamondback",name: "Diamondback",            tier: "1A", priority: "P1", incumbent: "Greenfield", posture: "Lead",    dataReady: true,  tv: 29, sponsor: 25, friction: 24, repeat: 13 },
  { id: "harbour",    name: "Harbour Energy",         tier: "1A", priority: "P1", incumbent: "Greenfield", posture: "Lead",    dataReady: true,  tv: 26, sponsor: 24, friction: 24, repeat: 15 },
  { id: "tgs",        name: "TGS Energy Data (Win-Back)", tier: "1A", priority: "P1", incumbent: "AWS",  posture: "Win-Back", dataReady: true,  tv: 29, sponsor: 30, friction: 23, repeat: 15 },
  { id: "eog",        name: "EOG Resources",          tier: "1A", priority: "P2", incumbent: "AWS",  posture: "Wedge",   dataReady: true,  tv: 22, sponsor: 20, friction: 18, repeat: 13 },
  { id: "conoco",     name: "ConocoPhillips",         tier: "1A", priority: "P2", incumbent: "Azure",posture: "Wedge",   dataReady: false, tv: 18, sponsor: 18, friction: 15, repeat: 12 },
  { id: "akerbp",     name: "Aker BP",                tier: "1A", priority: "P2", incumbent: "AWS",  posture: "Wedge",   dataReady: true,  tv: 24, sponsor: 22, friction: 17, repeat: 14 },
  // Tier 1B — PE-Backed Sponsors
  { id: "quantum",    name: "Quantum Capital Group",  tier: "1B", priority: "P1", incumbent: "Greenfield", posture: "Lead",    dataReady: true,  tv: 28, sponsor: 30, friction: 25, repeat: 14 },
  { id: "encap",      name: "EnCap Investments",      tier: "1B", priority: "P2", incumbent: "Greenfield", posture: "Lead",    dataReady: true,  tv: 22, sponsor: 24, friction: 24, repeat: 13 },
  // Tier 1C — Large Privates
  { id: "continental",name: "Continental Resources",  tier: "1C", priority: "P1", incumbent: "Greenfield", posture: "Lead",    dataReady: true,  tv: 27, sponsor: 29, friction: 25, repeat: 14 },
  { id: "mewbourne",  name: "Mewbourne Oil",          tier: "1C", priority: "P2", incumbent: "Greenfield", posture: "Lead",    dataReady: true,  tv: 23, sponsor: 22, friction: 24, repeat: 12 },
  // Tier 2 — Gulf & Sovereign NOCs + APAC NOCs
  { id: "aramco",     name: "Saudi Aramco",           tier: "2",  priority: "P1", incumbent: "CNTXT",posture: "Lead",    dataReady: true,  tv: 24, sponsor: 30, friction: 22, repeat: 15 },
  { id: "koc",        name: "KOC / KPC",              tier: "2",  priority: "P1", incumbent: "Greenfield", posture: "Lead",    dataReady: true,  tv: 20, sponsor: 28, friction: 23, repeat: 15 },
  { id: "pertamina",  name: "Pertamina",              tier: "2",  priority: "P1", incumbent: "GCP",  posture: "Lead",    dataReady: true,  tv: 24, sponsor: 26, friction: 23, repeat: 15 },
  { id: "pttep",      name: "PTTEP",                  tier: "2",  priority: "P1", incumbent: "GCP",  posture: "Lead",    dataReady: true,  tv: 26, sponsor: 24, friction: 25, repeat: 14 },
  { id: "inpex",      name: "Inpex",                  tier: "2",  priority: "P2", incumbent: "Greenfield", posture: "Lead",    dataReady: true,  tv: 20, sponsor: 22, friction: 24, repeat: 14 },
  { id: "qatar",      name: "QatarEnergy",            tier: "2",  priority: "P2", incumbent: "Greenfield", posture: "Lead",    dataReady: false, tv: 18, sponsor: 24, friction: 22, repeat: 14 },
  { id: "petronas",   name: "Petronas",               tier: "2",  priority: "P2", incumbent: "Azure",posture: "Wedge",   dataReady: true,  tv: 20, sponsor: 22, friction: 16, repeat: 14 },
  { id: "adnoc",      name: "ADNOC",                  tier: "2",  priority: "P2", incumbent: "Azure",posture: "Co-Exist",dataReady: true,  tv: 18, sponsor: 24, friction: 10, repeat: 14 },
  // Tier 3 — Affinity Majors & Global Scale
  { id: "total",      name: "TotalEnergies",          tier: "3",  priority: "P1", incumbent: "Multi",posture: "Lead",    dataReady: true,  tv: 29, sponsor: 30, friction: 23, repeat: 15 },
  { id: "reliance",   name: "Reliance Industries",    tier: "3",  priority: "P1", incumbent: "GCP",  posture: "Lead",    dataReady: true,  tv: 28, sponsor: 30, friction: 25, repeat: 15 },
  { id: "repsol",     name: "Repsol",                 tier: "3",  priority: "P2", incumbent: "Azure",posture: "Wedge",   dataReady: true,  tv: 20, sponsor: 20, friction: 19, repeat: 13 },
  { id: "eni",        name: "ENI",                    tier: "3",  priority: "P2", incumbent: "AWS",  posture: "Wedge",   dataReady: true,  tv: 22, sponsor: 22, friction: 18, repeat: 14 },
  { id: "bp",         name: "BP",                     tier: "3",  priority: "P2", incumbent: "Multi",posture: "Wedge",   dataReady: true,  tv: 20, sponsor: 22, friction: 14, repeat: 14 },
  { id: "petrobras",  name: "Petrobras",              tier: "3",  priority: "P2", incumbent: "AWS",  posture: "Wedge",   dataReady: false, tv: 22, sponsor: 20, friction: 14, repeat: 14 },
  // Tier 4 — Midstream & Infrastructure
  { id: "williams",   name: "Williams Companies",     tier: "4",  priority: "P2", incumbent: "Azure",posture: "Wedge",   dataReady: true,  tv: 22, sponsor: 20, friction: 16, repeat: 13 },
  // Fortress — Co-Existence Wedge Doctrine
  { id: "shell",      name: "Shell",                  tier: "F",  priority: "F",  incumbent: "AWS",  posture: "Co-Exist",dataReady: true,  tv: 20, sponsor: 25, friction: 12, repeat: 14 },
  { id: "oxy",        name: "Oxy",                    tier: "F",  priority: "F",  incumbent: "AWS",  posture: "Co-Exist",dataReady: true,  tv: 18, sponsor: 22, friction: 12, repeat: 14 },
  { id: "chevron",    name: "Chevron",                tier: "F",  priority: "F",  incumbent: "Azure",posture: "Co-Exist",dataReady: true,  tv: 16, sponsor: 24, friction: 10, repeat: 14 },
  { id: "equinor",    name: "Equinor",                tier: "F",  priority: "F",  incumbent: "Azure",posture: "Co-Exist",dataReady: true,  tv: 15, sponsor: 22, friction: 11, repeat: 13 },
];

export const WEDGE_STEPS = [
  { label: "Incumbent Data Estate",   detail: "S3/ADLS stays in place — no migration",    accounts: ["Shell (AWS S3)", "Chevron (ADLS)", "Oxy (AWS S3)", "Equinor (ADLS)", "BP (Azure/AWS)", "Aker BP (AWS/CDF)", "Petronas (Azure/AWS)", "ADNOC (Azure/G42)"] },
  { label: "BigQuery Omni / BigLake", detail: "Federated in-place query — zero egress",   accounts: ["Cross-Cloud Interconnect", "BigLake catalog", "Private connectivity", "ENI XWARE federation", "Petronas EDH (Azure) query"] },
  { label: "Gemini Reasoning",        detail: "LLM reasoning over federated context",      accounts: ["Long-context multimodal", "LAS/DLIS + seismic + docs", "No data relocation", "Petrobras deepwater via SLB Delfi"] },
  { label: "Governed Agent Actions",  detail: "Bounded authority + human approval gates",  accounts: ["OSDU APIs · Petrel/Delfi", "PI/SCADA · SAP · Maintenance", "Kill switches + audit", "Williams Kognitwin digital twin"] },
  { label: "Derived Value & Expand",  detail: "Proved economics → earned expansion",       accounts: ["Cycle time reduction", "NPT avoidance", "Production recovery", "Methane MRV · CCUS monitoring"] },
];

export const SOVEREIGN_OPTIONS = [
  {
    id: "dammam",
    name: "Dammam (me-central2)",
    flag: "🇸🇦",
    fit: "Saudi regulated industrial & upstream",
    control: "Class C CST/NCA; CNTXT-operated EKM with Key Access Justifications; KSA Data Boundary",
    motion: "Aramco · CNTXT · Cognite Sovereign Industrial Agent Platform",
    conditions: { residency: true, keys: true, airgap: false },
  },
  {
    id: "doha",
    name: "Doha Region",
    flag: "🇶🇦",
    fit: "Qatar and Gulf LNG ecosystem",
    control: "In-country Qatar data boundary; low-latency regional AI inference",
    motion: "QatarEnergy · LNG operations · shipping & trading · regional collaboration",
    conditions: { residency: true, keys: false, airgap: false },
  },
  {
    id: "jakarta",
    name: "Jakarta (asia-southeast2)",
    flag: "🇮🇩",
    fit: "Indonesia sovereign NOC & upstream workloads",
    control: "In-country Indonesia data residency; Pertamina MoU alignment with IT Strategic Plan 2025–2029",
    motion: "Pertamina · Digital Hub · Green Data Center · TCS/Infosys APAC delivery",
    conditions: { residency: true, keys: false, airgap: false },
  },
  {
    id: "bangkok",
    name: "Bangkok (asia-southeast1)",
    flag: "🇹🇭",
    fit: "Thailand sovereign E&P & LNG analytics",
    control: "In-country Thailand data residency; PTTEP already running Apigee/BigQuery/GKE on GCP",
    motion: "PTTEP · Net Zero analytics · EVme lifestyle app · Gulf Edge sovereign AI",
    conditions: { residency: true, keys: false, airgap: false },
  },
  {
    id: "tokyo",
    name: "Tokyo / Osaka",
    flag: "🇯🇵",
    fit: "Japan sovereign LNG & CCUS operations",
    control: "In-country Japan data residency; strict sovereign AI guidelines; dual-region resilience",
    motion: "Inpex · Ichthys LNG optimization · CCUS monitoring · Japanese GSI delivery",
    conditions: { residency: true, keys: false, airgap: false },
  },
  {
    id: "gdc",
    name: "GDC Air-Gapped",
    flag: "🔒",
    fit: "National-security, disconnected, or site-resident workloads",
    control: "Google Distributed Cloud: customer-site execution, no public-internet dependency, fully disconnected",
    motion: "Kuwait-resident · ADNOC OT/ICS · critical OT environments · national-security classified",
    conditions: { residency: true, keys: true, airgap: true },
  },
];

export const TIMELINE_PHASES = [
  {
    id: "phase1",
    label: "Days 1–30",
    theme: "Assess, Align & Activate",
    workstreams: [
      {
        name: "Internal",
        actions: ["Deep alignment with Paula Natoli, Anil Jain, Raiford Smith, Matthew Pitner", "Stand up weekly Global O&G Deal & Product Council", "Structured interviews across sales, product, engineering, sovereign cloud, partners", "Audit inherited pipeline"],
        exit: "Operating cadence ratified; one global account heat map (top 30-40 accounts scored)",
      },
      {
        name: "Customers",
        actions: ["15 priority executive conversations (including Pertamina, PTTEP, Inpex, Reliance)", "Launch discovery with EQT/Expand, Devon, Diamondback, Harbour Energy", "Open Aramco, KOC, TotalEnergies, Pertamina exec tracks", "Select 2 fortress accounts + 2 APAC Lead accounts for parallel development"],
        exit: "15 account plans documented; 6+ customer-validated opportunities; 3 funded proposals; APAC sovereign pipeline opened",
      },
      {
        name: "Ecosystem",
        actions: ["Executive workshops with Cognite, SLB, Baker Hughes, Kongsberg Digital", "Convert Baker Hughes power collaboration into upstream expansion charter", "Open EPAM, Accenture, and TCS/Infosys/Wipro certification tracks", "Activate Palantir/C3.ai for fortress wedge; AspenTech for refinery play", "Initiate Foundation Model co-development scoping with TGS, SLB, Baker Hughes, Siemens, AspenTech, Enverus — identify first ISV dataset for Timeseries FM pilot", "Qualify initial startup cohort (Highwood, Qube, Carbon Direct, Corva, ResFrac) for Google for Startups Cloud Program", "Open HUMAIN AI executive engagement for KSA sovereign AI enablement on Dammam me-central2"],
        exit: "4 ISV joint-business-plan drafts; 3 GSIs in certification; APAC delivery model defined; FM co-dev scoping initiated with ≥2 ISVs; startup cohort shortlisted; HUMAIN AI engagement opened",
      },
      {
        name: "Narrative & Alphabet",
        actions: ["Publish agentic OSDU point of view", "Lock ADIPEC keynote/panel slots and demo storyline", "Brief DeepMind, Geo, Workspace, Security, Energy Procurement on module packaging", "Initiate Rice Baker Institute + UH Energy Transition Center MOU conversations"],
        exit: "ADIPEC plan approved; PoV in market; 3 Alphabet modules staffed with owners; Academia MOU drafts initiated",
      },
      {
        name: "THINK BIG",
        actions: ["Brief Google Energy Procurement leadership on Project Interchange bilateral framework", "Identify 2 Interchange pilot accounts (EQT + Pertamina) and initiate CEO-level 'two-badge' dialogues", "Internal credibility-building phase for DeepMind Energy Lab — establish stakeholder relationships before engaging DeepMind leadership"],
        exit: "Interchange framework drafted; 2 pilot account dialogues initiated; internal groundwork laid for DeepMind engagement",
      },
    ],
  },
  {
    id: "phase2",
    label: "Days 31–60",
    theme: "Validate Wedges & Sovereignty",
    workstreams: [
      {
        name: "Fortress Wedges",
        actions: ["Launch 2 technical validations (1 AWS-based, 1 Azure-based)", "Demonstrate in-place access, private connectivity, and Gemini reasoning with agreed production metrics", "Document security, egress, latency, inference economics"],
        exit: "2 validated multicloud wedge architectures with signed success criteria",
      },
      {
        name: "Sovereign NOC & APAC",
        actions: ["Sovereign design-authority sessions with Aramco/CNTXT, KOC, Pertamina, PTTEP", "Classify residency, key control against Dammam/Doha/Jakarta/Bangkok/Tokyo/GDC framework", "QatarEnergy forum opened; Inpex sovereign scoping initiated"],
        exit: "Aramco sovereign AI roadmap; KOC hybrid framework; Pertamina Digital Hub expansion; 1 NOC PoC scope in progress",
      },
      {
        name: "Tier 1–4 Pipeline",
        actions: ["Contract 3–5 Agentic Subsurface Starters", "Devon merger-value workshop; Harbour Energy M&A integration scoping", "Open LNG + midstream white space: Williams Kognitwin expansion; 1 trading-house evaluation", "TotalEnergies pilot scoped with Cognite; Reliance Jamnagar refinery PoC with AspenTech"],
        exit: "First customer live; 3+ signed; 3 white-space pursuits quantified (APAC, midstream, refining)",
      },
      {
        name: "Product & Enablement",
        actions: ["Harden agentic OSDU reference architecture with engineering", "Publish solution architectures with 3 ISVs", "Train first GSI cohorts; operationalize production-readiness review", "First ISV dataset onboarded to Vertex AI for Foundation Model pre-training validation (Timeseries FM)", "3 O&G/carbon startups receiving Google for Startups Cloud Program credits & Vertex AI grants", "HUMAIN AI architecture design session completed on Dammam sovereign region; joint Aramco scope drafted"],
        exit: "Architecture ratified; 3 packaged ISV offers; 2 GSI kits; 25 sellers + 40 partner practitioners enabled; FM pre-training validation underway; 3 startups active on GCP; HUMAIN AI sovereign design complete",
      },
      {
        name: "THINK BIG",
        actions: ["Draft bilateral MOU template with legal for Project Interchange; scope power capacity & GCP consumption economics for EQT + Pertamina", "Brief DeepMind leadership on Energy Lab concept; identify 1-2 Tier 1 research partners (Aramco R&D, TotalEnergies R&D, Oxy 1PointFive)", "Scope first DeepMind Energy Lab pilot: CCUS molecular discovery or pipeline corrosion alloy screening", "Initiate Rice Baker Institute / KAUST academic advisory board conversations for DeepMind Energy Lab"],
        exit: "Interchange MOU template drafted; DeepMind leadership briefed; 1-2 Tier 1 research candidates identified; first pilot scope defined",
      },
    ],
  },
  {
    id: "phase3",
    label: "Days 61–90",
    theme: "Scale, Accelerate & Penetrate",
    workstreams: [
      {
        name: "Industrialize",
        actions: ["Convert strongest independent launchpad into repeatable field offering", "Certify both anchor GSIs (EPAM, Accenture)", "Publish blueprints, evaluation suites, governance controls for 6 agent patterns", "Foundation Model validation results published; Subsurface FM scoping initiated with TGS multi-client data", "≥1 startup listed on Google Cloud Marketplace; remaining cohort in onboarding pipeline", "HUMAIN AI PoC scope ratified with Aramco; joint KSA GTM framework in place"],
        exit: "3 kits shipped; 6 production-ready patterns; GSI certification complete; 1 FM validated; ≥1 startup on Marketplace; HUMAIN AI Aramco scope signed",
      },
      {
        name: "Pipeline",
        actions: ["Secure production-expansion language for successful fortress validations", "Formalize 1 sovereign NOC PoC scope and joint architecture sign-off", "Sign 1 LNG pure-play; scale Tier 1 to 10+ qualified pursuits via co-sell"],
        exit: "2 production commitments; pipeline ≥4x coverage; ≥30% partner-originated",
      },
      {
        name: "ADIPEC 2026",
        actions: ["Finalize marquee announcements: sovereign NOC story, multicloud fortress proof, ISV co-innovation reveal", "Complete customer approvals, legal reviews, demo scripts", "Rehearse keynote; lock 2–3 customer-approved announceables"],
        exit: "2–3 customer-approved announceables locked 30 days pre-event; one marquee end-to-end agentic OSDU demo",
      },
      {
        name: "Operating Model",
        actions: ["Codify cross-functional industry operating model v2", "Launch executive advisory council (operators, ISVs, GSIs, Google product leaders)", "Present 90-day review and FY27 plan"],
        exit: "90-day board review delivered; FY27 plan endorsed; council seated",
      },
      {
        name: "THINK BIG",
        actions: ["Present Project Interchange framework at ADIPEC 2026 as marquee announcement; target 1 signed MOU or LOI", "Announce DeepMind Energy Lab at ADIPEC 2026; target 1 signed Tier 1 research partnership (Aramco or TotalEnergies)", "GNoME corrosion screening demo live for ADIPEC audience", "Academic advisory board (Rice/KAUST) constituted; position both initiatives for CERAWeek 2027 scale"],
        exit: "1 Interchange MOU/LOI signed; 1 DeepMind research partnership signed; both announced at ADIPEC; CERAWeek 2027 expansion plan locked",
      },
    ],
  },
];

export const OKRS = [
  {
    id: "O1",
    title: "Establish Google as the agentic-AI leader in oil & gas",
    krs: [
      { text: "3–5 Tier 1 accounts signed (public independents + private operators); ≥1 live in production", status: "not-started" },
      { text: "1 PE sponsor-platform framework (Quantum-class) in negotiation, unlocking portfolio-wide replication", status: "not-started" },
      { text: "Six-agent reference portfolio published; ADIPEC keynote with 2–3 customer-approved announceables", status: "not-started" },
      { text: "1 GCP-hosted industry foundation model (Timeseries or Subsurface) in partner validation with ≥1 ISV dataset (TGS/SLB/Baker Hughes)", status: "not-started" },
    ],
  },
  {
    id: "O2",
    title: "Prove the multicloud wedge in fortress accounts",
    krs: [
      { text: "2 wedge validations live (1 AWS-entrenched, 1 Azure-entrenched) with signed success criteria", status: "not-started" },
      { text: "≥1 advanced to production-commitment negotiation", status: "not-started" },
      { text: "Zero migration-framing escalations (message-discipline metric)", status: "not-started" },
    ],
  },
  {
    id: "O3",
    title: "Unlock the sovereign Gulf & APAC opportunity",
    krs: [
      { text: "1 Gulf NOC (Aramco or KOC) PoC scope ratification and joint architecture sign-off", status: "not-started" },
      { text: "Sovereign framework validated across 6 regions (Dammam/Doha/Jakarta/Bangkok/Tokyo/GDC); CNTXT + APAC GSI blueprints complete", status: "not-started" },
      { text: "Pertamina/PTTEP expansion live; Inpex scoping initiated; commercial framework targeted for CERAWeek 2027", status: "not-started" },
      { text: "HUMAIN AI platform enablement initiated on Dammam me-central2; joint Aramco sovereign AI scope defined and ratified", status: "not-started" },
    ],
  },
  {
    id: "O4",
    title: "Build an ecosystem that outsells the direct force",
    krs: [
      { text: "3 ISV charters signed; 1 Google-native innovator (Palantir/C3.ai) embedded in a fortress wedge", status: "not-started" },
      { text: "2 anchor GSIs certified (EPAM for OSDU/agentic delivery, Accenture for scale); readiness review operational", status: "not-started" },
      { text: "≥30% of qualified pipeline partner-originated or co-sold", status: "not-started" },
      { text: "≥3 O&G/carbon startups onboarded to Google for Startups Cloud Program; ≥1 listed on Google Cloud Marketplace with enterprise procurement pathway", status: "not-started" },
    ],
  },
  {
    id: "O5",
    title: "Convert the Alphabet advantage into commercial gravity",
    krs: [
      { text: "3 Alphabet modules (geospatial, security, WeatherNext) embedded in live pursuits with owners and pricing", status: "not-started" },
      { text: "TotalEnergies reciprocity pursuit active; Baker Hughes collaboration extended upstream", status: "not-started" },
      { text: "2 CEO-level Energy Exchange dialogues opened (EQT/Expand class); Rice + UH MOUs signed", status: "not-started" },
    ],
  },
  {
    id: "O6",
    title: "Launch THINK BIG: Interchange & DeepMind Energy Lab",
    krs: [
      { text: "Project Interchange framework presented to Google Energy Procurement leadership; 2 pilot accounts (EQT + Pertamina) identified with CEO-level dialogues initiated", status: "not-started" },
      { text: "1 Interchange bilateral MOU or LOI signed; power capacity & GCP consumption economics scoped for pilot accounts", status: "not-started" },
      { text: "DeepMind Energy Lab concept briefed to DeepMind leadership (Day 31-60); 1-2 Tier 1 research partner candidates identified (Aramco R&D, TotalEnergies R&D, or Oxy 1PointFive)", status: "not-started" },
      { text: "1 signed DeepMind Tier 1 research partnership; GNoME corrosion screening demo live; academic advisory board (Rice/KAUST) constituted", status: "not-started" },
      { text: "Both initiatives announced as marquee ADIPEC 2026 reveals; positioned for CERAWeek 2027 scale", status: "not-started" },
    ],
  },
];

export const EXECUTIVE_DECISIONS = [
  {
    title: "Confirm top-account portfolio & resource-concentration model",
    detail: "P1 direct ownership; P2/P3 partner-led with review gates. Requires ratification of the 30-40 account heat map and named executive owners for each P1 account.",
    owner: "",
    status: "pending",
  },
  {
    title: "Name product and engineering owners for the six reference agents and three Alphabet modules",
    detail: "Each of the six agents (Subsurface, Well Log, Drilling Risk, Production, Reliability, Process Safety) needs a named Google product and engineering owner. Same for Geospatial, WeatherNext, and Security modules.",
    owner: "",
    status: "pending",
  },
  {
    title: "Approve the multicloud co-existence architecture as an explicit, sanctioned sales motion",
    detail: "Formally sanction BigQuery Omni + Cross-Cloud Interconnect + Gemini-over-existing-estate as the standard fortress/wedge account sales play. Required before sellers can position it with Shell, Oxy, Chevron, Equinor, Aker BP, ENI, BP, Petronas, ADNOC, and Williams.",
    owner: "",
    status: "pending",
  },
  {
    title: "Ratify sovereign market proposition across 6 global regions",
    detail: "The sovereign deployment framework must be presented as a unified NOC decision framework spanning Dammam, Doha, Jakarta, Bangkok, Tokyo, and GDC air-gapped — not six separate products. Requires alignment from sovereign cloud, sales, and legal teams.",
    owner: "",
    status: "pending",
  },
  {
    title: "Select strategic ISV charters and the GSI accreditation cohort",
    detail: "Confirm Cognite, SLB, Baker Hughes, Kongsberg Digital, AspenTech as Layer 1 ISV charters. Confirm EPAM and Accenture as anchor GSIs and TCS/Infosys/Wipro for APAC delivery. Approve the production-readiness QA gate model.",
    owner: "",
    status: "pending",
  },
  {
    title: "Authorize ADIPEC 2026 and CERAWeek 2027 announcement and demo workstreams",
    detail: "ADIPEC (Nov 2–5): approve 2–3 customer-approved announceable targets and demo build. CERAWeek 2027 (dates TBC, typically March): approve 180-day proof narrative and Houston-audience content strategy.",
    owner: "",
    status: "pending",
  },
  {
    title: "Authorize GCP-hosted Foundation Model co-development framework with ISV data partners",
    detail: "Confirm zero-joint-IP policy between Google and ISVs (TGS, SLB, Baker Hughes, Siemens, AspenTech, Enverus). Joint IP reserved exclusively for tripartite engagements with customer/operator participation. Approve Vertex AI Model Garden hosting architecture and Trillium TPU / A3 Ultra GPU compute allocation for FM pre-training.",
    owner: "",
    status: "pending",
  },
  {
    title: "Approve Google for Startups Cloud Program cohort for O&G/carbon startups and authorize HUMAIN AI sovereign enablement",
    detail: "Confirm initial startup cohort (Highwood Emissions, Qube Technologies, Carbon Direct, Planet/MethaneSAT, Corva, ResFrac, Subsurface AI) for up to $200k GCP credits + Vertex AI grants + Marketplace fast-tracking. Separately authorize HUMAIN AI platform enablement on Dammam me-central2 sovereign region and joint GTM with Saudi Aramco.",
    owner: "",
    status: "pending",
  },
  {
    title: "Authorize Project Interchange bilateral framework with Google Energy Procurement",
    detail: "Approve the Energy-AI bilateral operating framework where energy operators provide firm power for Google data centers in exchange for preferential Alphabet AI stack access. Requires alignment with Google Energy Procurement leadership, legal decoupling of power off-take and cloud licensing, and identification of 2 pilot accounts (EQT + Pertamina). This is a Google-level strategic initiative championed by the Market Lead.",
    owner: "",
    status: "pending",
  },
  {
    title: "Authorize DeepMind Energy Lab joint research program",
    detail: "Approve the structured DeepMind Energy Lab program applying frontier science (GNoME materials discovery, AlphaFold molecular simulation, TORAX physics, AlphaEvolve) to energy R&D. Requires DeepMind leadership alignment (Day 31-60 after internal credibility established), scoping of Tier 1 research partnerships ($10-50M multi-year), and identification of first pilot (CCUS solvent design or corrosion alloy discovery). Academic advisory board (Rice Baker Institute, KAUST) to be constituted.",
    owner: "",
    status: "pending",
  },
];

export const COMPETITIVE_ACCOUNTS = [
  // Lead posture — clean-slate opportunity
  { name: "EQT / Expand",    incumbent: "Greenfield",  googlePosture: "Lead",     wedge: "Production surveillance agents · power-demand analytics",          expand: "Energy Exchange CEO dialogue" },
  { name: "Devon Energy",    incumbent: "Azure", googlePosture: "Lead",     wedge: "Merger data & process integration agents · common asset ontology", expand: "Fervo clean-power synergy" },
  { name: "Diamondback",     incumbent: "Greenfield",  googlePosture: "Lead",     wedge: "Agentic Subsurface Starter · D&C optimization",                   expand: "Full Permian asset fleet" },
  { name: "Saudi Aramco",    incumbent: "CNTXT", googlePosture: "Lead",     wedge: "Sovereign Industrial Agent Platform in Class C Dammam + HUMAIN AI sovereign enablement",           expand: "Enterprise-wide agentic rollout; HUMAIN AI joint GTM across Kingdom entities" },
  { name: "TotalEnergies",   incumbent: "Multi", googlePosture: "Lead",     wedge: "Gemini agents on Cognite estate + Energy Exchange reciprocity",    expand: "Global upstream + new-energy portfolio" },
  { name: "Harbour Energy",  incumbent: "Greenfield",  googlePosture: "Lead",     wedge: "M&A integration agents · Wintershall Dea asset ontology merger",   expand: "Global asset fleet across 9 countries" },
  { name: "Reliance Ind.",   incumbent: "GCP",   googlePosture: "Lead",     wedge: "Jamnagar AI Region · refinery optimization · process safety agents",expand: "Full O2C + new-energy portfolio" },
  { name: "Pertamina",       incumbent: "GCP",   googlePosture: "Lead",     wedge: "Digital Hub agents across 6 sub-holdings · MoU since Mar 2026",    expand: "Geothermal green data center · sovereign APAC" },
  { name: "PTTEP",           incumbent: "GCP",   googlePosture: "Lead",     wedge: "Gemini agents on existing Apigee/BigQuery/GKE estate",            expand: "Net Zero analytics · Bangkok sovereign region" },
  { name: "Inpex",           incumbent: "Greenfield",  googlePosture: "Lead",     wedge: "Sovereign LNG plant optimization · CCUS monitoring agents",        expand: "Japan sovereign AI — Tokyo/Osaka regions" },
  // Co-Exist posture — wedge doctrine, no migration
  { name: "Shell",           incumbent: "AWS",   googlePosture: "Co-Exist", wedge: "Seismic intelligence · exploration knowledge · geospatial OA",   expand: "Trading & power analytics" },
  { name: "Oxy",             incumbent: "AWS",   googlePosture: "Co-Exist", wedge: "Drilling perf · NPT · DAC operations · methane-detection MRV",   expand: "1PointFive carbon-MRV · Alphabet carbon stack" },
  { name: "Chevron",         incumbent: "Azure", googlePosture: "Co-Exist", wedge: "Multimodal subsurface via ADME cross-cloud · doc intelligence",   expand: "Firm-power dialogue · HPC burst seismic" },
  { name: "Equinor",         incumbent: "Azure", googlePosture: "Co-Exist", wedge: "Offshore project design · CCS · maintenance · bounded agentic ops",expand: "NCS data-sharing · European sovereign postures" },
  { name: "ADNOC",           incumbent: "Azure", googlePosture: "Co-Exist", wedge: "GDC air-gapped OT/ICS · Mandiant security ops",                  expand: "UAE sovereign posture parallel to Azure/G42" },
  // Wedge posture — partial foothold
  { name: "ExxonMobil",      incumbent: "Azure", googlePosture: "Wedge",    wedge: "Doc intelligence · low-carbon ventures analytics (Day 90–180)",    expand: "Open in days 90–180 with wedge references in hand" },
  { name: "Aker BP",         incumbent: "AWS",   googlePosture: "Wedge",    wedge: "Gemini agents over Cognite CDF on AWS · no migration",             expand: "Digital twin expansion via Cognite L1 charter" },
  { name: "Petronas",        incumbent: "Azure", googlePosture: "Wedge",    wedge: "BigQuery Omni over Azure EDH · Gemini on AWS STEAR",               expand: "APAC logistics + LNG operations" },
  { name: "ENI",             incumbent: "AWS",   googlePosture: "Wedge",    wedge: "Gemini over XWARE/OSDU on AWS · HPC burst to GCP",                expand: "Green Data Center hybrid · Blue Power initiative" },
  { name: "BP",              incumbent: "Multi", googlePosture: "Wedge",    wedge: "Expand GCP analytics footprint · Gemini over Azure/AWS estates",   expand: "bpx energy AI · multicloud intelligence layer" },
  { name: "Petrobras",       incumbent: "AWS",   googlePosture: "Wedge",    wedge: "SLB Delfi on GCP · São Paulo sovereign data residency",            expand: "Deepwater seismic + reservoir modeling" },
  { name: "Williams",        incumbent: "Azure", googlePosture: "Wedge",    wedge: "Expand Kognitwin (GCP) from power gen to pipeline ops",            expand: "Earth Engine ROW · Tapestry grid intelligence" },
];


export const ALPHABET_CAPABILITIES = [
  { name: "Google DeepMind",    icon: "🧬", app: "Operational weather risk · materials discovery · R&D acceleration · FM pre-training architecture collaboration",   play: "WeatherNext ops-risk agent in trading evaluation; DeepMind science briefing for Aramco/TotalEnergies R&D; DeepMind architecture guidance for O&G domain FM pre-training" },
  { name: "Geospatial Stack",   icon: "🌍", app: "Pipeline ROW monitoring · methane/flaring analytics · CCUS site selection", play: "Earth Engine ROW module in Williams/Kinder Morgan pitch; geospatial layer in every OSDU demo" },
  { name: "Workspace + Gemini", icon: "📋", app: "Fastest change-management path: agents inside tools engineers already use", play: "Bundle Workspace-with-Gemini into every independent starter as the adoption layer; KOC clean-slate productivity track" },
  { name: "Mandiant · Wiz",     icon: "🔐", app: "OT/ICS threat intel · sovereign SOC models · securing the agent estate", play: "Security briefing as non-threatening door-opener at fortress accounts; sovereign SOC module in Aramco/KOC frameworks" },
  { name: "Tapestry (Grid)",    icon: "⚡", app: "AI-powered grid planning · interconnection intelligence for energy operators", play: "Tapestry dimension in EQT/Williams demand-thesis dialogues; grid-planning module for Gulf national-infrastructure" },
  { name: "Energy Procurement", icon: "☀️", app: "Replicable procurement blueprints: nuclear, geothermal, storage, solar PPAs", play: "Energy-procurement leaders join EQT/TotalEnergies exec sessions — the two-badge meeting no competitor can convene" },
  { name: "Carbon & Environment",icon:"🌱", app: "MRV agents for CCUS · carbon-market intelligence · methane-detection · ESG automation · Startup Accelerator pipeline", play: "Carbon-MRV module in Oxy wedge (1PointFive adjacency); carbon-intelligence for trading desks; Startup accelerator cohort (Highwood, Qube, Carbon Direct, MethaneSAT) enabled on GCP" },
];

export const GOOGLE_AI_DIFFERENTIATORS = [
  {
    title: "Gemini 3.5 Pro — 2M Token Multimodal Context Window",
    badge: "Reasoning Lead",
    color: "blue",
    headline: "Zero-Chunking Subsurface Reasoning",
    description: "Gemini 3.5 Pro's native 2M-token context allows entire 30-year well logs, high-resolution seismic slice images, mud logs, and MOC document history to be ingested into a single prompt without chunking loss or vector database retrieval collapse. Flash models support up to 1M tokens for cost-optimized workloads.",
    metric: "2× larger context window than AWS/Azure frontier models (2M vs 1M tokens)",
    proof: "Applicable to operators using Delfi/OSDU workflows on Google Cloud for cross-domain subsurface interpretation."
  },
  {
    title: "6th-Gen Trillium (v6e) & 5th-Gen TPU v5p — Custom Energy AI Silicon",
    badge: "Silicon Economics",
    color: "teal",
    headline: "Superior Inference & Training TCO",
    description: "Google's 6th-gen Trillium (v6e) and 5th-gen TPU v5p chips offer strong price-performance for training specialized domain models (reservoir physics ML, seismic velocity estimation, automated fault detection) compared to GPU-only cloud providers.",
    metric: "Up to 50% TCO savings for optimized inference workloads (workload-dependent; CUDA migration costs may apply)",
    proof: "Empowers operators to run domain-tuned foundation models at massive scale."
  },
  {
    title: "Vertex AI Agent Builder & Multimodal RAG",
    badge: "Agent Platform",
    color: "purple",
    headline: "Governed Enterprise Agentic Engine",
    description: "Built-in grounding over structured OSDU data, unstructured LAS/DLIS well files, and SCADA historians with real-time tool calling, deterministic human approval gates, and automated audit logging.",
    metric: "Low-latency agent execution with built-in governance",
    proof: "Powers the 6-agent reference architecture across upstream and midstream."
  },
  {
    title: "Google DeepMind Science Engine",
    badge: "Fundamental AI",
    color: "amber",
    headline: "AlphaFold 3 & GNoME for Energy Transition",
    description: "Leverages DeepMind frontier science breakthroughs (GNoME, AlphaFold) for computational chemistry, advanced solvent design for CCUS (Carbon Capture, Utilization & Storage), battery material discovery, and pipeline corrosion prevention.",
    metric: "Accelerated molecular discovery enabled by DeepMind research",
    proof: "Unlocks R&D breakthroughs for national energy labs & major NOC R&D centers."
  }
];

export const HPC_ENERGY_STACK = [
  {
    capability: "Subsurface Seismic Processing (RTM & FWI)",
    stack: "A3 Mega / Ultra (NVIDIA H100/H200/B200) + TPU Clusters",
    advantage: "High-density compute nodes with 3.2 Tbps GPUDirect RDMA networking for petabyte-scale Reverse Time Migration (RTM) and Full Waveform Inversion (FWI).",
    benchmark: "Significant wall-clock time reduction for seismic RTM processing (operator-specific; depends on architecture and data volume)"
  },
  {
    capability: "Ultra-High IOPS Storage (Parallelstore & GCS FUSE)",
    stack: "Parallelstore (DAOS) + Hyperdisk Extreme + GCS FUSE",
    advantage: "Delivers sub-millisecond latency with high aggregate throughput, preventing storage I/O bottlenecks during massive seismic runs.",
    benchmark: "Significantly higher aggregate throughput compared to standard cloud parallel filesystems"
  },
  {
    capability: "Hybrid HPC Cloud Bursting",
    stack: "Google Cloud HPC Toolkit + Slurm Integrator",
    advantage: "Enables operators with legacy on-prem supercomputers (e.g. TotalEnergies Pangea, Shell HPC) to seamlessly burst peak seismic workloads to GCP in minutes.",
    benchmark: "Zero idle infrastructure cost; 10,000+ core instant burst scaling"
  }
];

export const BEYOND_OSDU_SERVICES = [
  {
    name: "Google Earth Engine Enterprise",
    icon: "🌍",
    category: "Geospatial & ESG AI",
    summary: "40+ years of satellite catalog paired with native ML for automated Methane plume detection, Pipeline Right-of-Way (ROW) encroachment, flaring audits, and CCUS storage site selection.",
    publicReference: "Powering UNEP / International Methane Emissions Observatory (IMEO) & EDF MethaneSAT"
  },
  {
    name: "Mandiant & Chronicle OT/ICS Security",
    icon: "🔐",
    category: "Operational Cybersecurity",
    summary: "Specialized threat intelligence and zero-trust monitoring designed for Operational Technology (OT), SCADA networks, remote drilling rigs, and refinery control systems.",
    publicReference: "Energy ISAC threat sharing & national critical infrastructure defense"
  },
  {
    name: "Google Quantum AI Engine",
    icon: "⚛️",
    category: "Quantum Energy Chemistry",
    summary: "Quantum algorithms for solving molecular simulation barriers in refining catalysts, hydrogen storage, and carbon capture solvent efficiency.",
    publicReference: "Joint research frameworks with leading national labs and energy majors"
  },
  {
    name: "Google Maps & Supply Chain AI",
    icon: "🚚",
    category: "Logistics & Fleet Ops",
    summary: "Real-time routing optimization for haul trucks, water management fleets, sand logistics in hydraulic fracturing, and LNG marine shipping routes.",
    publicReference: "Used by global logistics fleets to reduce fuel consumption across industries (Google Maps case studies)"
  }
];

export const COMPETITIVE_MATRIX_GRID = [
  {
    feature: "GenAI Context Window",
    gcp: "Gemini 3.5 Pro (2M tokens multimodal)",
    aws: "Bedrock (up to 1M via Claude; most native models 128k–200k)",
    azure: "Azure OpenAI (up to 1M via GPT-4.1; standard models 128k)",
    winner: "Google Cloud (2× larger context window with Gemini 3.5 Pro)"
  },
  {
    feature: "Custom AI Silicon TCO",
    gcp: "Trillium v6e & TPU v5p (up to 50% TCO for optimized workloads)",
    aws: "Inferentia / Trainium (Limited O&G support)",
    azure: "GPU-only (High cost & strict quotas)",
    winner: "Google Cloud (Custom TPU economics — workload-dependent)"
  },
  {
    feature: "HPC Seismic Storage I/O",
    gcp: "Parallelstore (DAOS) sub-ms sub-surface throughput",
    aws: "FSx for LUSTRE (Complex tiering & latency)",
    azure: "Azure NetApp Files (Constrained IOPS scale)",
    winner: "Google Cloud (Parallelstore speed)"
  },
  {
    feature: "Geospatial Satellite AI",
    gcp: "Google Earth Engine (Native 40-yr imagery + ML)",
    aws: "Ground Station + SageMaker (requires custom pipeline assembly)",
    azure: "Azure Orbital Analytics (growing but limited native energy ML catalog)",
    winner: "Google Cloud (Unmatched satellite data & ML)"
  },
  {
    feature: "Sovereignty & Air-Gap",
    gcp: "Sovereign Trio (Residency, EKM, Distributed Cloud)",
    aws: "AWS Outposts (Hardware locked to AWS control plane)",
    azure: "Azure Stack (Complex multi-region governance)",
    winner: "Google Cloud (Unified NOC decision framework)"
  },
  {
    feature: "Industry Foundation Models",
    gcp: "GCP-hosted domain FMs (Timeseries + Subsurface) with TGS/SLB/Baker Hughes/Siemens/AspenTech/Enverus data",
    aws: "No energy-specific FMs; generic SageMaker JumpStart models",
    azure: "No energy-specific FMs; generic Azure AI Studio",
    winner: "Google Cloud (only hyperscaler with domain ISV FM coalition)"
  }
];

export const TGS_WINBACK_PLAYBOOK = {
  customer: "TGS (Global Energy Data & Subsurface Intelligence)",
  incumbent: "AWS (Under Escalation & Quota Failure)",
  posture: "P1 Priority AWS Win-Back Campaign",
  headline: "Replacing AWS Capacity Bottlenecks with Contractual GPU/TPU Guarantees & Joint GTM RFP Alliance",
  painPoints: [
    {
      title: "Weekly AWS Capacity Escalations",
      detail: "AWS routinely runs out of GPU/HPC compute availability in key global regions (US South/East, Europe, Middle East), causing constant weekly operational escalations for TGS's heavy Reverse Time Migration (RTM) and Full Waveform Inversion (FWI) seismic processing."
    },
    {
      title: "Failed AWS RFP GTM Campaigns",
      detail: "AWS lacks formal capacity reservation processes and regional GPU allocations for TGS customer tenders, causing TGS to miss RFP commitments and customer adoption targets."
    },
    {
      title: "Storage I/O Bottlenecks",
      detail: "AWS FSx for LUSTRE storage bottlenecks during multi-petabyte seismic re-processing runs, delaying client data deliveries."
    }
  ],
  googleCounterStrategy: [
    {
      title: "Guaranteed Regional GPU/TPU Quota & SLAs",
      detail: "Contractually reserved A3 Ultra (NVIDIA H100/H200/B200) & TPU Trillium clusters across Houston, Europe, Middle East, and APAC with guaranteed SLA capacity backstops for TGS client RFPs.",
      pillar: "Capacity Guarantee"
    },
    {
      title: "HPC Parallelstore (DAOS) Speed Engine",
      detail: "Sub-millisecond IOPS with Parallelstore + Hyperdisk Extreme, reducing seismic processing wall-clock time by up to 40% compared to AWS FSx for LUSTRE.",
      pillar: "Compute Performance"
    },
    {
      title: "Joint RFP Co-Selling Alliance",
      detail: "Dedicated Google Cloud Energy GTM team co-bidding on customer RFPs with TGS, attaching Google GPU capacity guarantees directly to TGS client proposals.",
      pillar: "GTM Partnership"
    },
    {
      title: "Gemini 3.5 Pro Agentic Data Marketplace",
      detail: "Ingest TGS multi-client seismic and well data libraries into Gemini 3.5 Pro 2M-token multimodal context RAG engines, enabling TGS customers to query global subsurface datasets in natural language.",
      pillar: "AI Differentiation"
    }
  ]
};

export const GTM_OPERATING_MODEL = [
  {
    id: "sales",
    function: "Sales",
    subtitle: "Account Executives & Regional Leads",
    icon: "📊",
    role: "Named account ownership, quota carry, deal execution across Tier 1–4 and Fortress accounts",
    multiplier: "Arm sellers with scored account playbooks, competitive battle cards, pricing frameworks, and joint-call support for every P1/P2 account",
    deliverable: "25+ sellers enabled with O&G account kits; weekly Deal Council operational; 6+ customer-validated opportunities",
    color: "blue"
  },
  {
    id: "bd",
    function: "Business Development",
    subtitle: "Strategic Partnerships & Alliances",
    icon: "🤝",
    role: "ISV/GSI partner origination, co-sell motions, joint business plans, partner-sourced pipeline generation",
    multiplier: "Co-author JBPs with Cognite/SLB/Baker Hughes/Kongsberg, structure partner incentives, route partner-sourced leads into qualified pipeline",
    deliverable: "4 ISV JBPs signed; 2 anchor GSIs certified; ≥30% partner-originated pipeline by Day 90",
    color: "teal"
  },
  {
    id: "solutions",
    function: "Solutions Engineering",
    subtitle: "Solution Architects & Technical Specialists",
    icon: "🔧",
    role: "Technical validation, PoC execution, reference architecture delivery, customer solution design",
    multiplier: "Define 6 agent reference architectures, staff PoC teams, create reusable demo assets, run SA bootcamps on agentic OSDU & sovereign patterns",
    deliverable: "6 agent patterns published; 3 PoC kits deployed; SA bootcamp delivered to 40+ practitioners",
    color: "purple"
  },
  {
    id: "gtm",
    function: "GTM & Marketing",
    subtitle: "Campaigns, Events & Demand Generation",
    icon: "📣",
    role: "Industry narrative ownership, event strategy (ADIPEC/CERAWeek), analyst & media relations, demand-gen campaigns",
    multiplier: "Own the industry narrative; build event playbooks, customer storytelling frameworks, demand-gen campaigns, and analyst briefing programs",
    deliverable: "ADIPEC playbook locked; 2 demand-gen campaigns live; analyst briefing program launched with 8+ briefings",
    color: "amber"
  },
  {
    id: "engineering",
    function: "Engineering & Product",
    subtitle: "Cloud Product, AI/ML & Infrastructure Teams",
    icon: "⚙️",
    role: "Product roadmap influence, feature prioritization, sovereign/HPC capability delivery, reference architecture ratification",
    multiplier: "Translate field signals into product requirements; run joint design-authority sessions with NOCs; close feedback loop from PoC learnings to product backlog",
    deliverable: "6 agent reference architectures ratified by engineering; sovereign framework validated across 6 regions; HPC burst architecture validated",
    color: "green"
  }
];

export const ENABLEMENT_KITS = [
  {
    name: "Account Attack Playbook",
    audience: "Account Executives",
    contents: "Scored account cards (from S02), competitive positioning vs. AWS/Azure, pricing guidance, champion mapping, executive engagement templates",
    timeline: "Days 1–30",
    phase: 1,
    status: "not-started"
  },
  {
    name: "Agentic OSDU Battle Card",
    audience: "Sales + Solutions",
    contents: "1-pager: what it is, why it wins, competitive kill points, customer proof points, objection handling, demo request flow",
    timeline: "Days 1–30",
    phase: 1,
    status: "not-started"
  },
  {
    name: "Multicloud Wedge Pitch Kit",
    audience: "Sales + BD",
    contents: "Fortress account positioning guide, BigQuery Omni architecture deck, co-existence messaging (no-migration framing), demo script, customer objection matrix",
    timeline: "Days 15–45",
    phase: 1,
    status: "not-started"
  },
  {
    name: "Sovereign NOC Decision Framework",
    audience: "Sales + Solutions + BD",
    contents: "Region-by-region sovereign playbook (Dammam/Doha/Jakarta/Bangkok/Tokyo/GDC), compliance matrix, partner delivery model, pricing frameworks",
    timeline: "Days 30–60",
    phase: 2,
    status: "not-started"
  },
  {
    name: "Partner Co-Sell Playbook",
    audience: "BD + Partner Managers",
    contents: "ISV-by-ISV co-sell guide (Cognite, SLB, Baker Hughes, Kongsberg), GSI engagement model, certification path, co-sell incentive structures",
    timeline: "Days 30–60",
    phase: 2,
    status: "not-started"
  },
  {
    name: "ADIPEC Event Playbook",
    audience: "GTM + Sales + Exec",
    contents: "Demo scripts, customer meeting guides, media/analyst prep, announceable status tracker, booth strategy, executive briefing schedule",
    timeline: "Days 45–75",
    phase: 2,
    status: "not-started"
  },
  {
    name: "HPC & Seismic Win Kit",
    audience: "Solutions + Sales",
    contents: "TGS win-back case study, Parallelstore benchmarks, GPU/TPU capacity guarantee positioning, competitive storage I/O comparison, RFP response templates",
    timeline: "Days 30–60",
    phase: 2,
    status: "not-started"
  },
  {
    name: "Industry Foundation Models Sales Kit",
    audience: "Sales + Solutions",
    contents: "FM architecture overview (Timeseries + Subsurface), ISV partner data contributions (TGS/SLB/Baker Hughes/Siemens/AspenTech/Enverus), customer deployment playbook, TCO comparison vs custom-trained models, competitive positioning vs AWS/Azure",
    timeline: "Days 30–60",
    phase: 2,
    status: "not-started"
  },
  {
    name: "Startup & HUMAIN AI Ecosystem Kit",
    audience: "BD + Sales",
    contents: "Google for Startups Cloud Program details ($200k credits, Vertex AI grants, Marketplace fast-track), curated startup profiles (Carbon/Methane MRV + Drilling AI), GCP Marketplace procurement workflow for enterprise operators, HUMAIN AI sovereign positioning for KSA accounts",
    timeline: "Days 30–60",
    phase: 2,
    status: "not-started"
  }
];

export const SCALING_MECHANISMS = [
  {
    name: "Global O&G Deal Council",
    cadence: "Weekly",
    participants: "Market Lead, Sales Leads, Solutions, BD",
    purpose: "Pipeline review, deal strategy, blocker removal, resource allocation, competitive intelligence sharing",
    icon: "📋",
    color: "blue"
  },
  {
    name: "Product & Engineering Sync",
    cadence: "Bi-weekly",
    participants: "Market Lead, Product Managers, Engineering Leads",
    purpose: "Field signal → product roadmap; feature requests, PoC learnings, sovereign requirements, gap analysis",
    icon: "⚙️",
    color: "purple"
  },
  {
    name: "Partner Ecosystem Review",
    cadence: "Bi-weekly",
    participants: "Market Lead, BD, Partner Managers",
    purpose: "JBP progress, co-sell pipeline, certification status, partner escalations, co-marketing alignment",
    icon: "🤝",
    color: "teal"
  },
  {
    name: "GTM Campaign War Room",
    cadence: "Monthly",
    participants: "Market Lead, GTM, Marketing, Comms",
    purpose: "Event prep, demand-gen performance, analyst/media relations, content calendar, customer storytelling",
    icon: "📣",
    color: "amber"
  },
  {
    name: "Executive Briefing Council",
    cadence: "Monthly",
    participants: "Market Lead, Regional VPs, Industry VP",
    purpose: "Account health, competitive intelligence, strategic pivots, resource asks, escalation review",
    icon: "👔",
    color: "red"
  },
  {
    name: "SA & Solutions Bootcamp",
    cadence: "Quarterly",
    participants: "Market Lead, Solutions Engineering, Product",
    purpose: "Deep-dive training on new agent patterns, sovereign architectures, competitive updates, hands-on lab sessions",
    icon: "🎓",
    color: "green"
  }
];

export const FIELD_MULTIPLIER_METRICS = [
  { metric: "Sellers enabled with O&G kits",  day0: 0, day30: 25, day60: 40, day90: 50, unit: "",  color: "blue" },
  { metric: "Partner practitioners certified", day0: 0, day30: 10, day60: 25, day90: 40, unit: "",  color: "teal" },
  { metric: "Active co-sell motions",           day0: 0, day30: 3,  day60: 8,  day90: 12, unit: "",  color: "purple" },
  { metric: "PoC kits deployed to SAs",        day0: 0, day30: 2,  day60: 4,  day90: 6,  unit: "",  color: "green" },
  { metric: "Demand-gen campaigns live",        day0: 0, day30: 0,  day60: 1,  day90: 2,  unit: "",  color: "amber" },
  { metric: "Analyst / media briefings",       day0: 0, day30: 2,  day60: 5,  day90: 8,  unit: "+", color: "blue" },
  { metric: "Pipeline coverage ratio",          day0: 0, day30: 2,  day60: 3,  day90: 4,  unit: "×", color: "green" }
];

// ── Oil & Gas Industry Foundation Models ────────────────────────────────
export const OAG_FOUNDATION_MODELS = {
  ipFramework: "GCP-Hosted Partner FMs — Zero joint IP between Google and ISVs. Joint IP reserved exclusively for tripartite engagements with customer/operator participation. Operator-customized fine-tuned weights belong exclusively to the operator.",
  infrastructure: "Vertex AI Model Garden / GKE clusters + Trillium TPUs + A3 Ultra GPUs + Parallelstore (DAOS) sub-ms I/O",
  categories: [
    {
      id: "timeseries",
      title: "Timeseries Foundation Models",
      subtitle: "Production, Drilling & Operations",
      icon: "📈",
      color: "blue",
      scope: "Pre-trained on high-frequency sensor streams: WITSML, SCADA, mud logging, surface/downhole pressure, ESP/gas-lift diagnostics, refinery process dynamics, compressor telemetry.",
      useCases: [
        "Real-time stick-slip & vibration anomaly detection",
        "Automated Rate-Transient Analysis (RTA) & decline curve forecasting",
        "Proactive artificial lift failure prediction (ESP, gas-lift, rod pump)",
        "Predictive maintenance for turbomachinery & compressors",
        "Refinery yield optimization & process safety monitoring",
      ],
    },
    {
      id: "subsurface",
      title: "Subsurface & Basin Foundation Models",
      subtitle: "Seismic, Reservoir & Market Intelligence",
      icon: "🌐",
      color: "purple",
      scope: "Multimodal spatial models trained on 2D/3D/4D seismic volumes, acoustic impedance, borehole image logs, core data, and Enverus basin analytics.",
      useCases: [
        "Zero-shot seismic horizon picking & automated fault identification",
        "Acoustic velocity inversion & impedance estimation",
        "Multi-well LAS/DLIS log correlation across basins",
        "Fast proxy reservoir simulation (10–100× faster than physics sim)",
        "Basin-wide well performance forecasting & benchmarking",
      ],
    },
  ],
  partners: [
    { name: "TGS", icon: "🗺️", contribution: "Multi-client seismic volumes, well log data, borehole image libraries, basin analytics", fmCategory: "Subsurface FM", color: "amber" },
    { name: "SLB (Delfi)", icon: "🔬", contribution: "Subsurface interpretation engines, reservoir fluid dynamics, drilling automation data, Petrel integration", fmCategory: "Subsurface + Timeseries FM", color: "teal" },
    { name: "Baker Hughes", icon: "⚙️", contribution: "Real-time downhole drilling telemetry (WITSML), artificial lift diagnostics, turbomachinery health streams, Cordant IET data", fmCategory: "Timeseries FM", color: "blue" },
    { name: "Siemens / Siemens Energy", icon: "🏭", contribution: "Industrial SCADA telemetry, gas turbine & compressor digital twin time-series, power infrastructure telemetry", fmCategory: "Timeseries FM", color: "purple" },
    { name: "AspenTech", icon: "🧪", contribution: "Refining process simulation models, chemical APM data, yield optimization datasets", fmCategory: "Timeseries FM", color: "green" },
    { name: "Enverus", icon: "📊", contribution: "Basin-level completion & production data, land/lease boundaries, energy market intelligence, cost benchmarking", fmCategory: "Subsurface + Market FM", color: "amber" },
  ],
};

// ── Startup Accelerator Portfolio ────────────────────────────────────────
export const STARTUP_ACCELERATOR_PORTFOLIO = {
  program: {
    name: "Google for Startups Cloud Program",
    credits: "Up to $200,000 in GCP credits over 2 years ($100k Year 1; 20% match up to $100k Year 2)",
    aiGrants: "Vertex AI, Gemini Flash & Pro API credits, GPU/TPU accelerator quotas",
    marketplace: "Streamlined onboarding to Google Cloud Marketplace — enterprise operators can procure startup solutions against GCP commitment drawdowns",
    vcNetwork: "Energy Impact Partners, Climate Investment, Equinor Ventures, Chevron Technology Ventures",
  },
  hubs: [
    { region: "Houston, TX", icon: "🇺🇸", focus: "Permian Basin, Gulf Coast independents, US majors" },
    { region: "Western Europe", icon: "🇪🇺", focus: "London / Aberdeen / Oslo — Offshore North Sea, Net Zero CCS, Equinor/Aker BP ecosystems" },
    { region: "Dubai / Abu Dhabi", icon: "🇦🇪", focus: "UAE energy transition, ADNOC digitalization, regional NOC hub" },
  ],
  startups: [
    { name: "Highwood Emissions", category: "Carbon Management & Methane MRV", icon: "🌿", capability: "Methane abatement planning and regulatory emissions intelligence", color: "green" },
    { name: "Qube Technologies", category: "Carbon Management & Methane MRV", icon: "📡", capability: "Continuous optical/sensor methane emissions detection at wellsite scale", color: "green" },
    { name: "Carbon Direct", category: "Carbon Management & Methane MRV", icon: "💨", capability: "Carbon management software and CCUS site verification platform", color: "green" },
    { name: "Planet Labs / MethaneSAT", category: "Carbon Management & Methane MRV", icon: "🛰️", capability: "High-resolution satellite methane plume detection integrated with Google Earth Engine Enterprise", color: "green" },
    { name: "Corva", category: "Drilling & Subsurface AI", icon: "🛢️", capability: "Real-time drilling and completions operational analytics platform", color: "blue" },
    { name: "ResFrac", category: "Drilling & Subsurface AI", icon: "⛏️", capability: "Coupled geomechanics and fluid-flow hydraulic fracturing simulation", color: "blue" },
    { name: "Subsurface AI", category: "Drilling & Subsurface AI", icon: "🧠", capability: "Automated seismic and geological interpretation using deep learning", color: "blue" },
  ],
};

// ── HUMAIN AI Strategic Partnership (KSA) ───────────────────────────────
export const HUMAIN_AI_PARTNERSHIP = {
  name: "HUMAIN AI",
  flag: "🇸🇦",
  region: "Saudi Arabia (Dammam me-central2 / GDC Air-Gapped)",
  headline: "Strategic KSA AI Enablement Partner for Sovereign Energy Workloads",
  pillars: [
    {
      title: "Platform Enablement",
      icon: "🏗️",
      detail: "Deploy and optimize HUMAIN AI enterprise platform natively on Google Cloud within Saudi Arabia — Dammam me-central2 sovereign region and Google Distributed Cloud Air-Gapped for classified OT/ICS workloads.",
    },
    {
      title: "Joint Aramco & Kingdom GTM",
      icon: "🤝",
      detail: "Co-sell HUMAIN AI solution suites into Saudi Aramco, Ministry of Energy, and local Saudi industrial entities. Leverage CNTXT sovereign controls and HUMAIN AI domain capabilities for in-Kingdom delivery.",
    },
    {
      title: "In-Kingdom Value Addition (IKVA)",
      icon: "🏛️",
      detail: "Align with Saudi Vision 2030 by establishing localized AI enablement for sovereign energy workloads — workforce development, local data center utilization, and technology transfer programs.",
    },
  ],
  targetAccounts: ["Saudi Aramco", "Ministry of Energy (KSA)", "SABIC", "Ma'aden", "Gulf NOCs with KSA operations"],
};

// ── THINK BIG: Transformative Alphabet-Only Energy Initiatives ──────────
export const THINK_BIG_INITIATIVES = {
  headline: "Two strategic initiatives uniquely possible only through the full Alphabet portfolio — ideas that no other hyperscaler can replicate.",
  initiatives: [
    {
      id: "interchange",
      title: "Project Interchange",
      subtitle: "The Energy-AI Bilateral Operating System",
      icon: "⚡",
      color: "amber",
      thesis: "Google is spending $195–205B in CapEx in 2026 with $811B in contracted future spending — the largest infrastructure build in history. The dominant cost driver is power. Energy operators hold the world's largest portfolio of firm, dispatchable, 24/7 power assets. No other hyperscaler is simultaneously the world's largest AI company AND a company that needs to buy energy at industrial scale.",
      mechanism: "A formal bilateral framework where energy companies enter structured partnerships with Google/Alphabet: operators provide firm power (gas, geothermal, nuclear SMR, battery storage) for Google data centers, and in return gain preferential access to the full Alphabet AI stack — DeepMind science, Tapestry grid planning, WeatherNext, and Gemini autonomous operations.",
      positioning: "Google-level strategic initiative championed and architected by the Market Lead",
      onlyGoogle: [
        { dimension: "Power procurement org", google: "Dedicated Energy Procurement; acquired Intersect Power ($4.75B)", competitor: "Standard PPA desk" },
        { dimension: "Grid intelligence", google: "Tapestry (Alphabet X moonshot) — 'Google Maps for electrons'", competitor: "Nothing comparable" },
        { dimension: "Fusion R&D", google: "DeepMind + CFS; TORAX simulator; 200MW fusion PPA", competitor: "None" },
        { dimension: "DC power optimization", google: "DeepMind cooling optimization (30%+ reduction proven)", competitor: "Standard engineering" },
        { dimension: "Weather prediction", google: "WeatherNext — state-of-the-art probabilistic forecasting", competitor: "None" },
        { dimension: "Load flexibility", google: "Active demand-response pilots with TVA, I&M, OPPD", competitor: "Minimal" },
      ],
      targetAccounts: [
        { name: "EQT / Expand Energy", powerAsset: "Largest US natural gas producer; Fervo geothermal adjacency", googleNeed: "Firm gas-fired power for US data centers", play: "Co-develop data-center-adjacent gas generation; Fervo geothermal JV; full Alphabet AI stack for Appalachian basin operations" },
        { name: "TotalEnergies", powerAsset: "40GW global renewable + gas portfolio; largest European energy trader", googleNeed: "European & global data center power", play: "Bilateral power-for-AI framework; Cognite-on-GCP for global ops; Tapestry for grid interconnection planning" },
        { name: "Pertamina", powerAsset: "2GW+ geothermal portfolio (largest in world); existing GCP customer", googleNeed: "APAC data center clean power (Jakarta region)", play: "Geothermal-powered data center campus in Java; sovereign AI platform for all 6 sub-holdings; DeepMind geothermal optimization" },
        { name: "Reliance Industries", powerAsset: "Jamnagar refinery (world's largest); massive power generation", googleNeed: "India data center power", play: "AI Region at Jamnagar; refinery optimization + process safety agents; co-located power infrastructure" },
        { name: "Saudi Aramco", powerAsset: "World's largest hydrocarbon producer; KSA grid operator", googleNeed: "Middle East sovereign data center power", play: "Sovereign industrial AI on Dammam me-central2; HUMAIN AI joint GTM; power-for-intelligence bilateral with Kingdom entities" },
      ],
      commercialStructure: {
        operatorGives: ["Firm power commitment (gas / geo / nuclear SMR)", "Power-adjacent land & permits", "Grid interconnection rights", "Operational expertise"],
        googleGives: ["GCP consumption credits at anchor pricing tier", "DeepMind Science Engine access", "Tapestry grid planning module", "WeatherNext ops intelligence", "Gemini autonomous operations suite", "Priority GPU/TPU capacity guarantees"],
        operatorValue: ["GCP at 20-40% below list", "DeepMind R&D partnership", "Revenue from power sales", "Grid modernization (Tapestry)", "Talent & workforce upskilling"],
        googleValue: ["Firm 24/7 power", "Faster DC buildout", "$1B+ anchor deals", "Industry credibility"],
      },
    },
    {
      id: "deepmind-lab",
      title: "DeepMind Energy Lab",
      subtitle: "The Frontier Science Engine for Energy R&D",
      icon: "🧬",
      color: "purple",
      thesis: "The energy industry spends $80B+ annually on R&D. Yet fundamental bottlenecks — CCUS solvent design, corrosion-resistant alloys, catalytic optimization, reservoir simulation — remain locked behind decades-old approaches. Google DeepMind is the only AI lab that has simultaneously solved protein folding (AlphaFold), discovered 2.2M new materials (GNoME), built an automated science lab, created a differentiable plasma simulator (TORAX), and committed $40M to the DOE Genesis Mission.",
      mechanism: "A structured joint research program where Google partners with energy majors, NOCs, and national labs to apply DeepMind's frontier science capabilities to the hardest unsolved problems in energy. This converts Google from a cloud vendor into the energy industry's indispensable R&D partner — creating generational lock-in, not transactional relationships.",
      positioning: "Day 31-60 initiative after internal credibility is established; requires DeepMind leadership alignment",
      onlyGoogle: [
        { dimension: "Materials discovery", google: "GNoME (2.2M materials) + Automated Science Lab", competitor: "None" },
        { dimension: "Molecular simulation", google: "AlphaFold 3", competitor: "None" },
        { dimension: "Differentiable physics", google: "TORAX (JAX-native plasma simulator)", competitor: "None" },
        { dimension: "Algorithmic discovery", google: "AlphaEvolve", competitor: "None" },
        { dimension: "RL for physical control", google: "DeepMind (plasma control, DC cooling)", competitor: "Limited" },
        { dimension: "DOE National Lab partnership", google: "Genesis Mission ($40M)", competitor: "Minimal" },
      ],
    },
  ],
};

export const DEEPMIND_RESEARCH_VERTICALS = [
  {
    id: "molecular",
    title: "Molecular Discovery for Energy Transition",
    icon: "🧪",
    color: "green",
    tools: "GNoME (materials discovery) · AlphaFold 3 (molecular simulation) · Automated Science Lab (physical synthesis & testing)",
    problems: [
      { problem: "CCUS solvent design", current: "Trial-and-error chemistry; 5-10 year cycles", approach: "GNoME + AlphaFold screen 100,000+ candidate molecules for CO₂ binding affinity, thermal stability, and degradation resistance in weeks", targets: "Oxy (1PointFive DAC), Equinor (Northern Lights CCS), Aramco (Jubail CCS hub)" },
      { problem: "Pipeline corrosion alloys", current: "Expensive field testing; limited options", approach: "GNoME discovers novel corrosion-resistant alloys optimized for H₂-blend, CO₂, and sour gas environments", targets: "Williams, Kinder Morgan, ADNOC (hydrogen blending)" },
      { problem: "Catalyst optimization", current: "Iterative lab experiments", approach: "Computational screening of catalytic surfaces for higher selectivity and lower coking rates", targets: "Reliance (Jamnagar), TotalEnergies, Repsol, ENI" },
      { problem: "Battery storage materials", current: "Limited cathode/anode options for grid-scale", approach: "GNoME-driven discovery of next-gen solid-state and sodium-ion battery chemistries", targets: "EQT (grid adjacency), Pertamina (EV transition), Gulf NOCs" },
    ],
  },
  {
    id: "physics",
    title: "Physics Simulation at Frontier Scale",
    icon: "⚛️",
    color: "blue",
    tools: "TORAX (plasma simulation, JAX-based) · Gemini multimodal reasoning · TPU supercomputing clusters",
    problems: [
      { problem: "Neural reservoir simulation", current: "Full-physics sim takes weeks; limited scenarios", approach: "Differentiable neural proxy simulators (TORAX architecture) — 10,000× faster scenario sweeps", targets: "Devon, Diamondback, EOG, Harbour Energy" },
      { problem: "Enhanced Oil Recovery (EOR)", current: "Limited molecular-scale CO₂-flood modeling", approach: "GNoME (surfactant/polymer screening) + neural reservoir sim for optimized EOR", targets: "Oxy (CO₂-EOR leader), Petrobras (pre-salt), Aramco" },
      { problem: "Geothermal system modeling", current: "Sparse subsurface data; high drilling risk", approach: "Transfer TORAX differentiable framework to geothermal modeling; couple with Earth Engine", targets: "Pertamina, Fervo/EQT, Chevron (Indonesia)" },
      { problem: "LNG process optimization", current: "Fixed operating envelopes; limited real-time optimization", approach: "Gemini multimodal agents + DeepMind RL for liquefaction train optimization", targets: "QatarEnergy, Inpex (Ichthys), PTTEP" },
    ],
  },
  {
    id: "autonomous",
    title: "Autonomous Operations Science",
    icon: "🤖",
    color: "teal",
    tools: "AlphaEvolve (algorithm design) · Reinforcement Learning (control policies) · Gemini agentic reasoning",
    problems: [
      { problem: "Autonomous drilling", current: "Human-supervised with basic automation", approach: "RL-trained drilling control agents (inspired by plasma control) optimizing WOB, RPM, flow in real-time", targets: "Baker Hughes (Cordant), Devon, Diamondback" },
      { problem: "Autonomous production management", current: "Rule-based optimization; manual well testing", approach: "Multi-agent RL for field-wide production allocation, artificial lift, and water handling", targets: "EQT/Expand, Continental Resources, Mewbourne" },
      { problem: "Process safety prediction", current: "Reactive safety systems; bow-tie analysis", approach: "AlphaEvolve-designed anomaly detection discovering novel precursor patterns invisible to humans", targets: "Reliance, TotalEnergies, ENI, Repsol" },
    ],
  },
];

export const DEEPMIND_LAB_TIERS = [
  {
    tier: "Tier 1",
    name: "Strategic Research Partners",
    count: "3–5 accounts",
    icon: "🔬",
    color: "purple",
    offering: "$10-50M multi-year joint research agreements; dedicated DeepMind research liaison; access to automated science laboratory; co-authored publications & shared IP on pre-competitive science; exclusive early access to energy-domain models",
    targets: "Aramco, TotalEnergies, Oxy, Reliance",
  },
  {
    tier: "Tier 2",
    name: "Applied Science Customers",
    count: "10–15 accounts",
    icon: "⚙️",
    color: "blue",
    offering: "Packaged DeepMind-derived models on Vertex AI; GNoME Materials API for energy applications; neural reservoir simulation as managed service; standard GCP commercial terms",
    targets: "Devon, Diamondback, Harbour, QatarEnergy, Inpex, PTTEP",
  },
  {
    tier: "Tier 3",
    name: "Ecosystem Enablement",
    count: "ISVs & Startups",
    icon: "🌐",
    color: "teal",
    offering: "DeepMind-derived APIs exposed through ISV platforms (SLB Delfi, Baker Hughes Cordant, Cognite Data Fusion); startup cohort builds on DeepMind APIs",
    targets: "TGS, SLB, Baker Hughes, ResFrac, Corva",
  },
];

export const THINK_BIG_TIMELINE = [
  { phase: "Days 1–30", interchange: "Brief Google Energy Procurement leadership on Interchange framework; identify 2 pilot accounts (EQT + Pertamina); initiate CEO-level 'two-badge' dialogues", deepmind: "Internal credibility-building phase — establish relationships with Paula Natoli, Anil Jain, and key stakeholders before engaging DeepMind" },
  { phase: "Days 31–60", interchange: "Draft bilateral MOU template with legal; scope power capacity & GCP consumption economics for pilot accounts; brief DeepMind on energy R&D module packaging", deepmind: "Brief DeepMind leadership on Energy Lab concept; identify 1-2 Tier 1 research partners (Aramco R&D, TotalEnergies R&D, Oxy 1PointFive); scope first CCUS molecular discovery pilot; initiate Rice/KAUST academic conversations" },
  { phase: "Days 61–90", interchange: "Present Interchange framework at ADIPEC 2026 as marquee announcement; one signed MOU or LOI; position for CERAWeek 2027 expansion", deepmind: "Announce DeepMind Energy Lab at ADIPEC 2026; 1 signed Tier 1 research partnership (target: Aramco or TotalEnergies); GNoME corrosion screening demo live; academic advisory board constituted" },
];
