// ── Central data store for all 9 sections ──────────────────────────────

export const META = {
  author: "Hussein Shel",
  title: "Market Lead Director, Global Oil & Gas",
  company: "Google Cloud",
  date: "July 2026",
  confidential: "CONFIDENTIAL · INTERNAL LEADERSHIP DRAFT",
};

export const NAV_ITEMS = [
  { id: "thesis",      num: "01", label: "Strategic Thesis",          sub: "Five-Pillar Framework" },
  { id: "offense",     num: "02", label: "Market Offense",            sub: "Named Account Tiers" },
  { id: "partners",    num: "03", label: "Partner Coalition",         sub: "ISVs · GSIs · Academia" },
  { id: "technology",  num: "04", label: "Technology Stack",          sub: "Agentic OSDU · Sovereign Trio" },
  { id: "alphabet",    num: "05", label: "Alphabet Advantage",        sub: "Cross-Portfolio Plays" },
  { id: "exchange",    num: "06", label: "Energy Exchange",           sub: "Energy-for-Intelligence" },
  { id: "roadmap",     num: "07", label: "30-60-90 Roadmap",          sub: "ADIPEC · CERAWeek Anchors" },
  { id: "okr",         num: "08", label: "OKR Scorecard",             sub: "O1–O5 · Day 90 KRs" },
  { id: "decisions",   num: "09", label: "Executive Decisions",       sub: "6 Asks · First 30 Days" },
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
    posture: "Domain ISVs · Google-native AI · Energy GSIs · Academia",
    proof: "3 ISV charters; 2 GSIs certified; ≥30% partner-originated pipeline",
    color: "teal",
  },
  {
    num: "3",
    title: "Technology",
    posture: "Agentic-first OSDU + Non-OSDU Path · Six-Agent Portfolio · Sovereign Trio",
    proof: "Reference architecture ratified; 1 sovereign NOC PoC scoped",
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
];

export const ACCOUNTS = [
  // Tier 1A — Public Independents
  { id: "eqt",        name: "EQT / Expand Energy",   tier: "1A", priority: "P1", incumbent: "None", posture: "Lead",    dataReady: true,  tv: 28, sponsor: 27, friction: 25, repeat: 15 },
  { id: "devon",      name: "Devon Energy",           tier: "1A", priority: "P1", incumbent: "Azure",posture: "Lead",    dataReady: true,  tv: 30, sponsor: 28, friction: 20, repeat: 14 },
  { id: "diamondback",name: "Diamondback",            tier: "1A", priority: "P1", incumbent: "None", posture: "Lead",    dataReady: true,  tv: 29, sponsor: 25, friction: 24, repeat: 13 },
  { id: "harbour",    name: "Harbour Energy",         tier: "1A", priority: "P1", incumbent: "None", posture: "Lead",    dataReady: true,  tv: 26, sponsor: 24, friction: 24, repeat: 15 },
  { id: "eog",        name: "EOG Resources",          tier: "1A", priority: "P2", incumbent: "AWS",  posture: "Wedge",   dataReady: true,  tv: 22, sponsor: 20, friction: 18, repeat: 13 },
  { id: "conoco",     name: "ConocoPhillips",         tier: "1A", priority: "P2", incumbent: "Azure",posture: "Wedge",   dataReady: false, tv: 18, sponsor: 18, friction: 15, repeat: 12 },
  { id: "akerbp",     name: "Aker BP",                tier: "1A", priority: "P2", incumbent: "AWS",  posture: "Wedge",   dataReady: true,  tv: 24, sponsor: 22, friction: 17, repeat: 14 },
  // Tier 1B — PE-Backed Sponsors
  { id: "quantum",    name: "Quantum Capital Group",  tier: "1B", priority: "P1", incumbent: "None", posture: "Lead",    dataReady: true,  tv: 28, sponsor: 30, friction: 25, repeat: 14 },
  { id: "encap",      name: "EnCap Investments",      tier: "1B", priority: "P2", incumbent: "None", posture: "Lead",    dataReady: true,  tv: 22, sponsor: 24, friction: 24, repeat: 13 },
  // Tier 1C — Large Privates
  { id: "continental",name: "Continental Resources",  tier: "1C", priority: "P1", incumbent: "None", posture: "Lead",    dataReady: true,  tv: 27, sponsor: 29, friction: 25, repeat: 14 },
  { id: "mewbourne",  name: "Mewbourne Oil",          tier: "1C", priority: "P2", incumbent: "None", posture: "Lead",    dataReady: true,  tv: 23, sponsor: 22, friction: 24, repeat: 12 },
  // Tier 2 — Gulf & Sovereign NOCs + APAC NOCs
  { id: "aramco",     name: "Saudi Aramco",           tier: "2",  priority: "P1", incumbent: "CNTXT",posture: "Lead",    dataReady: true,  tv: 24, sponsor: 30, friction: 22, repeat: 15 },
  { id: "koc",        name: "KOC / KPC",              tier: "2",  priority: "P1", incumbent: "None", posture: "Lead",    dataReady: true,  tv: 20, sponsor: 28, friction: 23, repeat: 15 },
  { id: "pertamina",  name: "Pertamina",              tier: "2",  priority: "P1", incumbent: "GCP",  posture: "Lead",    dataReady: true,  tv: 24, sponsor: 26, friction: 23, repeat: 15 },
  { id: "pttep",      name: "PTTEP",                  tier: "2",  priority: "P1", incumbent: "GCP",  posture: "Lead",    dataReady: true,  tv: 26, sponsor: 24, friction: 25, repeat: 14 },
  { id: "inpex",      name: "Inpex",                  tier: "2",  priority: "P2", incumbent: "None", posture: "Lead",    dataReady: true,  tv: 20, sponsor: 22, friction: 24, repeat: 14 },
  { id: "qatar",      name: "QatarEnergy",            tier: "2",  priority: "P2", incumbent: "None", posture: "Lead",    dataReady: false, tv: 18, sponsor: 24, friction: 22, repeat: 14 },
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
        actions: ["Executive workshops with Cognite, SLB, Baker Hughes, Kongsberg Digital", "Convert Baker Hughes power collaboration into upstream expansion charter", "Open EPAM, Accenture, and TCS/Infosys/Wipro certification tracks", "Activate Palantir/C3.ai for fortress wedge; AspenTech for refinery play"],
        exit: "4 ISV joint-business-plan drafts; 3 GSIs in certification; APAC delivery model defined",
      },
      {
        name: "Narrative & Alphabet",
        actions: ["Publish agentic OSDU point of view", "Lock ADIPEC keynote/panel slots and demo storyline", "Brief DeepMind, Geo, Workspace, Security, Energy Procurement on module packaging", "Initiate Rice Baker Institute + UH Energy Transition Center MOU conversations"],
        exit: "ADIPEC plan approved; PoV in market; 3 Alphabet modules staffed with owners; Academia MOU drafts initiated",
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
        actions: ["Harden agentic OSDU reference architecture with engineering", "Publish solution architectures with 3 ISVs", "Train first GSI cohorts; operationalize production-readiness review"],
        exit: "Architecture ratified; 3 packaged ISV offers; 2 GSI kits; 25 sellers + 40 partner practitioners enabled",
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
        actions: ["Convert strongest independent launchpad into repeatable field offering", "Certify both anchor GSIs (EPAM, Accenture)", "Publish blueprints, evaluation suites, governance controls for 6 agent patterns"],
        exit: "3 kits shipped; 6 production-ready patterns; GSI certification complete",
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
    ],
  },
  {
    id: "O4",
    title: "Build an ecosystem that outsells the direct force",
    krs: [
      { text: "3 ISV charters signed; 1 Google-native innovator (Palantir/C3.ai) embedded in a fortress wedge", status: "not-started" },
      { text: "2 anchor GSIs certified (EPAM for OSDU/agentic delivery, Accenture for scale); readiness review operational", status: "not-started" },
      { text: "≥30% of qualified pipeline partner-originated or co-sold", status: "not-started" },
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
    detail: "ADIPEC (Nov 2–5): approve 2–3 customer-approved announceable targets and demo build. CERAWeek (Mar 8–12 2027): approve 180-day proof narrative and Houston-audience content strategy.",
    owner: "",
    status: "pending",
  },
];

export const COMPETITIVE_ACCOUNTS = [
  // Lead posture — clean-slate opportunity
  { name: "EQT / Expand",    incumbent: "None",  googlePosture: "Lead",     wedge: "Production surveillance agents · power-demand analytics",          expand: "Energy Exchange CEO dialogue" },
  { name: "Devon Energy",    incumbent: "Azure", googlePosture: "Lead",     wedge: "Merger data & process integration agents · common asset ontology", expand: "Fervo clean-power synergy" },
  { name: "Diamondback",     incumbent: "None",  googlePosture: "Lead",     wedge: "Agentic Subsurface Starter · D&C optimization",                   expand: "Full Permian asset fleet" },
  { name: "Saudi Aramco",    incumbent: "CNTXT", googlePosture: "Lead",     wedge: "Sovereign Industrial Agent Platform in Class C Dammam",           expand: "Enterprise-wide agentic rollout" },
  { name: "TotalEnergies",   incumbent: "Multi", googlePosture: "Lead",     wedge: "Gemini agents on Cognite estate + Energy Exchange reciprocity",    expand: "Global upstream + new-energy portfolio" },
  { name: "Harbour Energy",  incumbent: "None",  googlePosture: "Lead",     wedge: "M&A integration agents · Wintershall Dea asset ontology merger",   expand: "Global asset fleet across 9 countries" },
  { name: "Reliance Ind.",   incumbent: "GCP",   googlePosture: "Lead",     wedge: "Jamnagar AI Region · refinery optimization · process safety agents",expand: "Full O2C + new-energy portfolio" },
  { name: "Pertamina",       incumbent: "GCP",   googlePosture: "Lead",     wedge: "Digital Hub agents across 6 sub-holdings · MoU since Mar 2026",    expand: "Geothermal green data center · sovereign APAC" },
  { name: "PTTEP",           incumbent: "GCP",   googlePosture: "Lead",     wedge: "Gemini agents on existing Apigee/BigQuery/GKE estate",            expand: "Net Zero analytics · Bangkok sovereign region" },
  { name: "Inpex",           incumbent: "None",  googlePosture: "Lead",     wedge: "Sovereign LNG plant optimization · CCUS monitoring agents",        expand: "Japan sovereign AI — Tokyo/Osaka regions" },
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
  { name: "Google DeepMind",    icon: "🧬", app: "Operational weather risk · materials discovery · R&D acceleration",   play: "WeatherNext ops-risk agent in trading evaluation; DeepMind science briefing for Aramco/TotalEnergies R&D" },
  { name: "Geospatial Stack",   icon: "🌍", app: "Pipeline ROW monitoring · methane/flaring analytics · CCUS site selection", play: "Earth Engine ROW module in Williams/Kinder Morgan pitch; geospatial layer in every OSDU demo" },
  { name: "Workspace + Gemini", icon: "📋", app: "Fastest change-management path: agents inside tools engineers already use", play: "Bundle Workspace-with-Gemini into every independent starter as the adoption layer; KOC clean-slate productivity track" },
  { name: "Mandiant · Wiz",     icon: "🔐", app: "OT/ICS threat intel · sovereign SOC models · securing the agent estate", play: "Security briefing as non-threatening door-opener at fortress accounts; sovereign SOC module in Aramco/KOC frameworks" },
  { name: "Tapestry (Grid)",    icon: "⚡", app: "AI-powered grid planning · interconnection intelligence for energy operators", play: "Tapestry dimension in EQT/Williams demand-thesis dialogues; grid-planning module for Gulf national-infrastructure" },
  { name: "Energy Procurement", icon: "☀️", app: "Replicable procurement blueprints: nuclear, geothermal, storage, solar PPAs", play: "Energy-procurement leaders join EQT/TotalEnergies exec sessions — the two-badge meeting no competitor can convene" },
  { name: "Carbon & Environment",icon:"🌱", app: "MRV agents for CCUS · carbon-market intelligence · methane-detection · ESG automation", play: "Carbon-MRV module in Oxy wedge (1PointFive adjacency); carbon-intelligence for trading desks" },
];
