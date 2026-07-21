import { useState } from 'react';
import { SOVEREIGN_OPTIONS } from '../data';

const AGENTS = [
  {
    num: 1, name: 'Subsurface Characterization',
    input: 'Seismic cubes, well logs, formation reports, mud logs',
    delivers: 'Cross-domain synthesis across seismic, logs, and reports — shorten interpretation cycles from weeks to hours.',
    kpi: 'Interpretations per geoscientist-day',
  },
  {
    num: 2, name: 'Well Log Interpretation',
    input: 'Raw LAS / DLIS files, formation tops, offset well database',
    delivers: 'Evidence-linked interpretation recommendations with traceable reasoning — every recommendation cites the source data.',
    kpi: 'Manual QA hours eliminated per well',
  },
  {
    num: 3, name: 'Drilling Risk &amp; NPT',
    input: 'Real-time rig telemetry, geology prognosis, offset well performance',
    delivers: 'Risk pattern detection and bounded mitigation recommendations — with operator-approved authority limits and kill switches.',
    kpi: 'NPT events avoided; cost per foot',
  },
  {
    num: 4, name: 'Production Optimization',
    input: 'SCADA / PI historian, production allocations, lift curves, ELTs',
    delivers: 'Ranked exception list and intervention candidates by economic impact — not raw alarms.',
    kpi: 'Incremental BOE per day; cycle time to decision',
  },
  {
    num: 5, name: 'Reliability &amp; Maintenance',
    input: 'Equipment sensor data, maintenance history, P&IDs, work orders',
    delivers: 'Root cause acceleration, work scope recommendation, and maintenance scheduling optimisation.',
    kpi: 'MTTR reduction; unplanned downtime events',
  },
  {
    num: 6, name: 'Process Safety &amp; Procedures',
    input: 'MOC records, incident reports, regulatory procedures, operating envelopes',
    delivers: 'Operator guidance grounded in approved procedures with automatic policy citation — reduces procedure deviation risk.',
    kpi: 'Procedure deviation incidents; audit findings',
  },
];

const OSDU_PATH = {
  title: 'Path A: Agentic OSDU',
  when: 'Operator has a functioning OSDU estate (Petrel, Delfi, SLB-managed, or independently operated)',
  entry: 'OSDU APIs → Gemini agents with domain context → operator-approved action layer',
  accounts: ['TotalEnergies (Cognite/CDF + OSDU)', 'Saudi Aramco (Sovereign OSDU in Dammam)', 'Pertamina (iEnergy/Delfi)', 'Tier 2 NOCs'],
};
const NON_OSDU_PATH = {
  title: 'Path B: Non-OSDU Agentic (NEW)',
  when: 'Operator has no OSDU estate — legacy SQL, PI/SCADA historians, ESRI/GIS, LAS/DLIS files, unstructured documents',
  entry: 'BigQuery Omni / BigLake federated query → Gemini long-context reasoning → bounded agent actions',
  accounts: ['Tier 1A independents (EQT, Devon, Diamondback)', 'PE-backed portcos', 'Tier 1C large privates'],
};

export default function S04Technology() {
  const [params, setParams] = useState({ residency: false, keys: false, airgap: false });
  const [activePath, setActivePath] = useState('non-osdu');
  const [expandedAgent, setExpandedAgent] = useState(null);

  const toggle = k => setParams(p => ({ ...p, [k]: !p[k] }));

  const match = SOVEREIGN_OPTIONS.find(o =>
    o.conditions.residency === params.residency &&
    o.conditions.keys === params.keys &&
    o.conditions.airgap === params.airgap
  ) || (params.residency ? SOVEREIGN_OPTIONS.find(o => o.conditions.residency) : null);

  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">04 · Technology Stack</div>
        <h1 className="section-title">Agentic OSDU, Non-OSDU Path &amp; Sovereign Trio</h1>
        <p className="section-desc">
          Google inverts the OSDU frame: OSDU is not where subsurface data rests — it is where subsurface
          work happens. A parallel Non-OSDU path serves independents without a functioning OSDU estate.
          All agents operate within a governed authority framework: bounded actions, human approval gates,
          audit trails, and kill switches. The Sovereign Trio routes any workload to the correct
          deployment boundary for compliance and residency.
        </p>
      </div>

      {/* Dual Path */}
      <div className="section-eyebrow mb-16">Entry Path Selection</div>
      <div className="academia-toggle mb-16">
        <button className={activePath === 'osdu' ? 'active' : ''} onClick={() => setActivePath('osdu')}>
          Path A: Agentic OSDU
        </button>
        <button className={activePath === 'non-osdu' ? 'active' : ''} onClick={() => setActivePath('non-osdu')}>
          Path B: Non-OSDU (No transformation required)
        </button>
      </div>

      {activePath === 'osdu' ? (
        <div className="card mb-24" style={{ borderColor: 'var(--google-blue)', boxShadow: 'var(--shadow-glow-blue)' }}>
          <div className="row gap-12 mb-8">
            <span className="pill pill-blue">OSDU-Native</span>
            <span className="card-title" style={{ margin: 0 }}>{OSDU_PATH.title}</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '10px' }}>
            <strong style={{ color: 'var(--text-secondary)' }}>When to use: </strong>{OSDU_PATH.when}
          </div>
          <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', borderLeft: '2px solid var(--google-blue)', paddingLeft: '10px', marginBottom: '10px' }}>
            <strong>Entry stack: </strong>{OSDU_PATH.entry}
          </div>
          <div className="row gap-8" style={{ flexWrap: 'wrap' }}>
            {OSDU_PATH.accounts.map(a => <span key={a} className="tag">{a}</span>)}
          </div>
        </div>
      ) : (
        <div className="card mb-24" style={{ borderColor: 'var(--teal)', boxShadow: 'var(--shadow-glow-teal)' }}>
          <div className="row gap-12 mb-8">
            <span className="pill pill-teal">NEW · Refined · Primary Entry</span>
            <span className="card-title" style={{ margin: 0 }}>{NON_OSDU_PATH.title}</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '10px' }}>
            <strong style={{ color: 'var(--text-secondary)' }}>When to use: </strong>{NON_OSDU_PATH.when}
          </div>
          <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', borderLeft: '2px solid var(--teal)', paddingLeft: '10px', marginBottom: '12px' }}>
            <strong>Entry stack: </strong>{NON_OSDU_PATH.entry}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '10px', lineHeight: '1.6' }}>
            Operators without a functioning OSDU estate are <strong style={{ color: 'var(--text-primary)' }}>not excluded</strong> from
            the agentic portfolio. Google provides direct entry via BigQuery Omni + Gemini long-context reasoning
            directly over existing data assets — requiring <strong style={{ color: 'var(--text-primary)' }}>zero OSDU transformation</strong> before
            first operational value. This is the primary entry for Tier 1A independents and PE-backed portcos.
          </div>
          <div className="row gap-8" style={{ flexWrap: 'wrap' }}>
            {NON_OSDU_PATH.accounts.map(a => <span key={a} className="tag">{a}</span>)}
          </div>
        </div>
      )}

      {/* Six Agents */}
      <div className="section-eyebrow mb-8">Six-Agent Global Reference Portfolio</div>
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
        Click any agent to see inputs, deliverables, and the primary KPI it moves. All agents operate with
        <strong style={{ color: 'var(--text-primary)' }}> bounded authority</strong> — they recommend and surface, not autonomously act.
        Human approval gates are non-negotiable in the first deployment iteration.
      </p>
      <div className="grid-2 mb-24">
        {AGENTS.map(a => (
          <div
            key={a.num}
            className="card"
            style={{ cursor: 'pointer', borderColor: expandedAgent === a.num ? 'var(--google-blue)' : 'var(--border)' }}
            onClick={() => setExpandedAgent(expandedAgent === a.num ? null : a.num)}
          >
            <div className="row gap-8 mb-8">
              <span className="tag">Agent {a.num}</span>
              <span className="card-title" style={{ margin: 0, fontSize: '13px' }} dangerouslySetInnerHTML={{ __html: a.name }} />
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{a.delivers}</div>
            {expandedAgent === a.num && (
              <div style={{ marginTop: '12px', borderTop: '1px solid var(--border)', paddingTop: '10px', animation: 'fadeSlideIn 0.2s ease' }}>
                <div className="stack-sm">
                  <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                    <strong style={{ color: 'var(--text-secondary)' }}>Inputs: </strong>
                    <span dangerouslySetInnerHTML={{ __html: a.input }} />
                  </div>
                  <div style={{ fontSize: '11.5px', color: 'var(--google-blue)' }}>
                    <strong>Primary KPI: </strong>{a.kpi}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="highlight-block mb-24">
        <strong style={{ color: 'var(--google-blue)' }}>Governance Architecture (Non-Negotiable):</strong> Every
        agent deployment requires: (1) a defined authority boundary approved by the operator's engineering leadership,
        (2) a human-in-the-loop approval gate for all consequential actions, (3) a kill switch operable by
        the operator at any time without Google involvement, (4) a complete audit trail of recommendations
        and the data sources that generated them.
      </div>

      <div className="sep" />

      {/* Sovereign Trio Router */}
      <div className="section-eyebrow mb-8">Sovereign Trio Decision Router</div>
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
        Three deployment topologies cover every operator sovereignty requirement. This must be presented
        as a <strong style={{ color: 'var(--text-primary)' }}>unified decision framework</strong> — not three separate products.
        Select workload parameters to route to the correct topology.
      </p>

      <div className="router-options">
        {[
          { key: 'residency', label: 'In-country data residency required', sub: 'Regulated industrial / government mandate / national data law' },
          { key: 'keys', label: 'Customer-held encryption keys required', sub: 'External Key Management (EKM) with Key Access Justifications (KAJ)' },
          { key: 'airgap', label: 'Air-gapped / disconnected operation required', sub: 'No public-internet dependency; workload executes on-site or in isolated network' },
        ].map(opt => (
          <div
            key={opt.key}
            className={`router-option${params[opt.key] ? ' selected' : ''}`}
            onClick={() => toggle(opt.key)}
          >
            <input type="checkbox" checked={params[opt.key]} onChange={() => toggle(opt.key)} />
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{opt.label}</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{opt.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {match ? (
        <div className="router-result" style={{ animation: 'fadeSlideIn 0.25s ease' }}>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px', fontFamily: 'Roboto Mono, monospace', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Recommended Deployment Topology
          </div>
          <h3>{match.flag} {match.name}</h3>
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px' }}>{match.fit}</div>
          <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '10px', borderLeft: '2px solid var(--teal)', paddingLeft: '10px' }}>{match.control}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Market motion: </strong>{match.motion}
          </div>
        </div>
      ) : (
        <div className="router-result" style={{ textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Select one or more parameters above to route the workload to a topology.</div>
        </div>
      )}

      <div className="highlight-block teal mt-16">
        <strong style={{ color: 'var(--teal)' }}>Day-90 Sovereign Target:</strong> Aramco sovereign AI roadmap
        agreed; KOC hybrid framework ratified; 1 NOC PoC scope signed. QatarEnergy / Doha pursuit qualified —
        commercial framework targeted for CERAWeek 2027. The sovereign trio is the competitive moat AWS and
        Azure cannot replicate at this level of regional specificity and governmental trust.
      </div>
    </div>
  );
}
