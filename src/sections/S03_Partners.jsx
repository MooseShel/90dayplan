import { useState } from 'react';

const ISVS = [
  {
    name: 'Cognite', layer: 'L1 · Domain ISV', badge: 'pill-teal',
    role: 'Industrial DataOps and contextualization leader. Cognite Data Fusion (CDF) is the fastest path to trustworthy OT/IT data for agentic workflows. Without contextualised data, agents hallucinate or produce unactionable output.',
    play: 'Connected Operations Agent Suite: production exception management, maintenance investigation, turnaround planning, and cross-domain root-cause analysis — all running on Google Cloud Vertex AI.',
    accounts: ['TotalEnergies', 'Saudi Aramco (via CNTXT)', 'Equinor (existing CDF estate)', 'Aker BP (CDF on AWS)'],
    day90: '3 joint ISV charter sessions; TotalEnergies pilot scoped with Cognite; Aker BP Gemini overlay PoC; ADIPEC co-announcement target',
  },
  {
    name: 'SLB (Delfi / OSDU)', layer: 'L1 · Domain ISV', badge: 'pill-teal',
    role: 'Subsurface applications and OSDU workflow integration. Neutralises the "Google lacks domain applications" objection and opens the Petrobras / Latin America / APAC channel.',
    play: 'Gemini Subsurface Intelligence on OSDU: well-log interpretation, seismic QA/QC, data quality agents, and Petrel/Delfi AI integration.',
    accounts: ['Petrobras', 'Pertamina (iEnergy/Delfi)', 'Gulf sovereign NOCs', 'Any OSDU-operator'],
    day90: 'Joint architecture published; 1 customer PoC scoped; OSDU reference included in ADIPEC demo',
  },
  {
    name: 'Baker Hughes (Cordant)', layer: 'L1 · Domain ISV', badge: 'pill-teal',
    role: 'Equipment intelligence, autonomous drilling operations, and — critically — data-center power & cooling expertise. Live CERAWeek 2026 Google Cloud collaboration is the proof point.',
    play: 'Autonomous Equipment & Power Optimization: Cordant + Gemini agents across drilling, production, reliability, and data-center energy intensity. The power collaboration creates a two-badge meeting moment.',
    accounts: ['3 shared customers confirmed', 'Data-center operators', 'Gulf upstream fleet'],
    day90: 'Baker Hughes upstream expansion charter signed; power collaboration expanded; shared CERAWeek 2027 narrative confirmed',
  },
  {
    name: 'Palantir AIP', layer: 'L2 · Google-Native AI', badge: 'pill-blue',
    role: 'June 2026 multi-tier partnership: bidirectional BigQuery-Foundry federation and deep Gemini-AIP connectivity. This is the sharpest fortress-account wedge available.',
    play: 'Foundry ontologies + Gemini agents over existing AWS/Azure estates — zero data relocation. Palantir AIP becomes the operator-facing platform; Google is the underlying intelligence engine.',
    accounts: ['Shell', 'Oxy', 'Chevron', 'Equinor'],
    day90: '1 fortress wedge live with Palantir AIP layer; joint security + governance architecture published',
  },
  {
    name: 'C3.ai', layer: 'L2 · Google-Native AI', badge: 'pill-blue',
    role: 'Full enterprise-AI application portfolio on Google Cloud; low/no-code Vertex AI model customisation. Serves operators who want pre-built apps rather than bespoke agent builds.',
    play: 'Pre-built predictive maintenance, reliability, and energy optimisation apps on Vertex AI. Fastest time-to-value for asset-fleet operators with limited internal ML capacity.',
    accounts: ['Tier 1A independents', 'Gulf NOCs (clean slate)'],
    day90: 'C3.ai energy app bundle co-listed on Google Cloud Marketplace; joint pricing in 2 Tier 1A proposals',
  },
  {
    name: 'Quantiphi', layer: 'L2 · Google-Native AI', badge: 'pill-blue',
    role: 'Google Cloud Premier Partner, multiple Industry Solutions Partner of the Year awards. Pure-play Vertex/Gemini depth — the fastest way to build bespoke agents for lighthouse accounts.',
    play: 'Custom agent build-outs: subsurface document intelligence, geospatial analytics, and production exception agents tailored to individual operator data models.',
    accounts: ['Lighthouse accounts', 'Tier 1A starter engagements'],
    day90: 'Quantiphi on delivery team for 1 Tier 1A Agentic Subsurface Starter; architecture review complete',
  },
  {
    name: 'Kongsberg Digital (Kognitwin)', layer: 'L1 · Domain ISV', badge: 'pill-teal',
    role: 'Industrial digital twin platform running natively on Google Cloud. Powers real-time operational replicas of physical assets — refineries, LNG plants, pipelines, and power generation facilities.',
    play: 'Kognitwin on GCP: extend digital twin coverage from power gen to full pipeline/midstream operations. Deploy Gemini agents over Kognitwin operational context for predictive optimization and autonomous operations.',
    accounts: ['Williams Companies (active Kognitwin user)', 'PTTEP (LNG)', 'Harbour Energy (North Sea assets)'],
    day90: 'Joint GTM with Kongsberg for midstream; Williams pipeline twin PoC scoped; 1 E&P operator twin demo at ADIPEC',
  },
  {
    name: 'AspenTech', layer: 'L1 · Domain ISV', badge: 'pill-teal',
    role: 'Process industry optimization (refinery, petrochemical, LNG). AspenONE suite for yield optimization, energy management, and planning is deployed across virtually every major refinery globally.',
    play: 'Gemini co-pilot over AspenONE for refinery margin optimization and process safety — particularly relevant for operators like Reliance Jamnagar (world\'s largest) and Pertamina downstream.',
    accounts: ['Reliance Industries (Jamnagar)', 'Pertamina (refinery & petrochemical)', 'TotalEnergies (refining)'],
    day90: 'AspenTech integration architecture defined; Reliance Jamnagar refinery optimization pilot scoped',
  },
  {
    name: 'TGS (Subsurface Data & Intelligence)', layer: 'L1 · Domain ISV', badge: 'pill-amber',
    role: 'World leader in multi-client seismic, well logs, and energy data libraries. Primary AWS Win-Back opportunity stemming from AWS GPU capacity deficits in key regions and failed RFP GTM support.',
    play: 'Guaranteed HPC GPU/TPU Capacity & Parallelstore sub-ms IOPS for global seismic processing (RTM/FWI). Joint GTM RFP Co-Selling alliance + Gemini 3.5/3.6 Agentic TGS Data Marketplace.',
    accounts: ['TGS Global Operations (AWS Win-Back)', 'Global E&P operators', 'Subsurface exploration teams'],
    day90: 'TGS AWS Win-Back engagement initiated; GCP HPC regional GPU/TPU capacity SLA ratified; joint RFP co-selling framework launched',
  },
];

const GSIS = [
  {
    name: 'EPAM Systems', tier: 'Anchor', badge: 'pill-blue',
    standing: 'Premier Partner with a large GCP-certified engineering cohort. 2025 Industry Solutions Partner of the Year for O&G. OSDU co-builders since 2019 with deep energy-domain IP.',
    role: 'Lead OSDU + agentic delivery partner. Co-own the agentic OSDU reference architecture. Certify the first delivery cohort. Operate production-readiness QA gates on Tier 1A lighthouses. EPAM is the delivery execution engine behind the 90-day targets.',
  },
  {
    name: 'Accenture', tier: 'Anchor', badge: 'pill-blue',
    standing: '2026 Global Services Partner of the Year (4th consecutive). Hundreds of GenAI agents and solutions on Google Cloud Marketplace. Gemini Enterprise Acceleration Program participant.',
    role: 'Global scale + C-suite reach for majors, NOCs, and transformation programs. Drive fortress-account change management and Aramco/KOC sovereign build-out. Accenture brings the board-room relationships; EPAM brings the technical delivery depth.',
  },
  {
    name: 'Deloitte · Capgemini', tier: 'Scale', badge: 'pill-muted',
    standing: 'Top-tier GCP services partners with established E&U practices across North America and EMEA.',
    role: 'Scale delivery for transformation programs and change management. Regional depth in EMEA and Americas. Activated once EPAM and Accenture playbooks are proven.',
  },
  {
    name: 'CNTXT', tier: 'Sovereign', badge: 'pill-teal',
    standing: "Aramco/Cognite JV; Google Cloud's exclusive KSA reseller. Operator of Sovereign Controls by CNTXT in KSA (Class C, me-central2/Dammam).",
    role: 'Mandatory sovereign-delivery partner for ALL KSA workloads. Co-delivers the Aramco Sovereign Industrial Agent Platform. Any engagement with Saudi Aramco that touches in-Kingdom data must flow through CNTXT. No exceptions.',
  },
  {
    name: 'TCS · Infosys · Wipro', tier: 'Scale (APAC)', badge: 'pill-muted',
    standing: 'Top-tier Google Cloud service partners with massive APAC delivery footprints. TCS: Premier Partner with large GCP-certified workforce. Infosys: Cobalt/Google Cloud CoE. Wipro: Google Cloud Business Unit.',
    role: 'APAC delivery engine for Reliance Industries, Pertamina, PTTEP, and Inpex engagements. Provide in-region delivery teams, local language capability, and established relationships with APAC NOCs. Activated for implementation once lighthouse architectures are proven.',
  },
];

export default function S03Partners() {
  const [acadMode, setAcadMode] = useState('rice');

  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">03 · Partner Ecosystem</div>
        <h1 className="section-title">Partner Coalition &amp; Academia Consortium</h1>
        <p className="section-desc">
          A three-layer ecosystem built on one production-readiness standard: no partner goes to customer
          until they have passed a technical QA gate. Layer 1 domain ISVs provide industrial credibility;
          Layer 2 Google-native AI innovators provide speed; energy GSIs provide delivery at scale;
          academia provides the long-cycle R&D runway.
        </p>
      </div>

      <div className="highlight-block mb-24">
        <strong style={{ color: 'var(--google-blue)' }}>Ecosystem Economics:</strong> The goal is for
        ≥30% of qualified pipeline to be partner-originated or co-sold by Day 90. Partners outsell the
        direct force 3–5× in enterprise software — this ratio is the multiplier on the headcount Google
        deploys. Every partner charter must include a joint-business-plan with bookings targets, not just
        co-marketing language.
      </div>

      {/* ISVs */}
      <div className="section-eyebrow mb-16">Layer 1 &amp; 2 · Domain ISVs and AI Innovators</div>
      <div className="grid-2 mb-24" style={{ gap: '14px', alignItems: 'start' }}>
        {ISVS.map(isv => (
          <div key={isv.name} className="card">
            <div className="row-between mb-8">
              <div className="row gap-12">
                <span className="card-title" style={{ margin: 0 }}>{isv.name}</span>
                <span className={`pill ${isv.badge}`}>{isv.layer}</span>
              </div>
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: '1.55' }}>{isv.role}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', borderLeft: '2px solid var(--border-bright)', paddingLeft: '10px', marginBottom: '10px' }}>
              <strong style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '2px' }}>Market play</strong>
              {isv.play}
            </div>
            <div className="row-between">
              <div className="row gap-8" style={{ flexWrap: 'wrap' }}>
                {isv.accounts.map(a => <span key={a} className="tag">{a}</span>)}
              </div>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--google-blue)', marginTop: '8px' }}>
              Day-90: {isv.day90}
            </div>
          </div>
        ))}
      </div>

      {/* GSIs */}
      <div className="section-eyebrow mb-16">Layer 3 · Energy GSIs — Production-Readiness Standard</div>
      <div className="highlight-block amber mb-16">
        <strong style={{ color: 'var(--amber)' }}>Controlled Accreditation:</strong> GSI certification is
        deliberately limited to 2 anchor partners (EPAM + Accenture) in the first 90 days. Premature
        accreditation of unqualified partners is the fastest way to produce a failed lighthouse customer.
        Every GSI must pass the production-readiness QA gate before any customer-facing delivery.
      </div>
      <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: '32px', width: '100%' }}>
        <div className="table-responsive" style={{ marginBottom: 0 }}>
          <table className="data-table" style={{ minWidth: '550px' }}>
            <thead><tr><th>GSI</th><th>Tier</th><th>Google Cloud Standing</th><th>O&amp;G Delivery Role</th></tr></thead>
            <tbody>
              {GSIS.map(g => (
                <tr key={g.name}>
                  <td><strong>{g.name}</strong></td>
                  <td><span className={`pill ${g.badge}`}>{g.tier}</span></td>
                  <td style={{ fontSize: '12px' }}>{g.standing}</td>
                  <td style={{ fontSize: '12px' }}>{g.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="sep" />

      {/* Academia Consortium */}
      <div className="section-eyebrow mb-8">Layer 4 · Academia Consortium Incubator</div>
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.65' }}>
        Google's role: <strong style={{ color: 'var(--text-primary)' }}>platform provider only.</strong> Operators purchase commercialised
        solutions that run on Google Cloud — Google does not compete with the solution or the operator. Development
        occurs in operator-owned GCP accounts. Google provides sandbox credits to a clean, isolated academic
        research environment for pre-competitive research and prototype validation.
      </p>

      <div className="academia-toggle mb-16">
        <button className={acadMode === 'rice' ? 'active' : ''} onClick={() => setAcadMode('rice')}>
          Rice Baker Institute · Energy Board
        </button>
        <button className={acadMode === 'uh' ? 'active' : ''} onClick={() => setAcadMode('uh')}>
          UH Energy Transition Center
        </button>
      </div>

      {acadMode === 'rice' ? (
        <>
          <div className="flow-diagram mb-16">
            <div className="flow-node highlight">
              <div className="node-icon">🔵</div>
              <div className="node-label">Google Cloud</div>
              <div className="node-sub">Platform &amp; credits<br />No IP claim<br />GCP infrastructure</div>
            </div>
            <div className="flow-arrow">⟷<span className="arrow-label">Policy forums<br />Executive access</span></div>
            <div className="flow-node">
              <div className="node-icon">🎓</div>
              <div className="node-label">Rice Baker Institute</div>
              <div className="node-sub">Energy Board policy<br />Market design<br />C-suite credibility</div>
            </div>
            <div className="flow-arrow">⟷<span className="arrow-label">Co-sponsor<br />TTO tripartite</span></div>
            <div className="flow-node">
              <div className="node-icon">🏭</div>
              <div className="node-label">Operator + ISV</div>
              <div className="node-sub">GCP account host<br />Data &amp; domain<br />Commercial buyer</div>
            </div>
          </div>
          <div className="highlight-block teal">
            <strong style={{ color: 'var(--teal)' }}>Rice Baker Institute:</strong> Primary value is policy forums and
            C-suite credibility, not technical R&D. Baker Institute's Energy Board provides a neutral table
            for operators, ISVs, policymakers, and Google to discuss AI governance, data standards, and energy
            transition frameworks without commercial pressure. Day-90 target: MOU framework signed, 1 operator
            co-sponsor identified, 1 joint forum convened at CERAWeek 2027 (Houston home turf).
          </div>
        </>
      ) : (
        <>
          <div className="flow-diagram mb-16">
            <div className="flow-node highlight">
              <div className="node-icon">🔵</div>
              <div className="node-label">Google Cloud</div>
              <div className="node-sub">Platform &amp; credits<br />Vertex AI / Gemini<br />Sandbox environment</div>
            </div>
            <div className="flow-arrow">⟷<span className="arrow-label">Technical PoC<br />R&amp;D sandbox</span></div>
            <div className="flow-node">
              <div className="node-icon">🔬</div>
              <div className="node-label">UH Energy Transition</div>
              <div className="node-sub">CCUS · hydrogen<br />Grid integration<br />Agentic R&amp;D</div>
            </div>
            <div className="flow-arrow">⟷<span className="arrow-label">IP (TTO tripartite)<br />Commercialise on GCP</span></div>
            <div className="flow-node">
              <div className="node-icon">🏭</div>
              <div className="node-label">Operator + ISV</div>
              <div className="node-sub">GCP account host<br />Solution buyer<br />Platform consumption</div>
            </div>
          </div>
          <div className="highlight-block teal">
            <strong style={{ color: 'var(--teal)' }}>UH Energy Transition Center:</strong> Primary value is
            technical R&D in CCUS, hydrogen, and grid-AI — domains where operators have deep challenges but limited
            internal research capacity. Research occurs in a Google-funded sandbox (separate from operator accounts).
            Any commercialisable output requires a tripartite TTO agreement (Google + University TTO + Operator)
            negotiated before code is written. University receives a defined research fee; operators own
            commercialisable IP built in their GCP accounts. Day-90: MOU framework signed, 1 CCUS agent
            research project scoped with 1 operator co-sponsor.
          </div>
        </>
      )}

      <div className="highlight-block mt-16">
        <strong style={{ color: 'var(--google-blue)' }}>IP Framework (Non-Negotiable):</strong> A tripartite
        agreement is negotiated before any code is written. Commercialisable IP developed in operator GCP accounts
        belongs to the operator. The university receives a defined research fee, not royalties or equity. Google
        receives platform revenue as operators scale the solutions on GCP. No tie-in language; each component is
        independently structured.
      </div>
    </div>
  );
}
