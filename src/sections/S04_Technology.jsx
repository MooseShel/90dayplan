import { useState } from 'react';
import { 
  SOVEREIGN_OPTIONS, 
  GOOGLE_AI_DIFFERENTIATORS, 
  HPC_ENERGY_STACK, 
  BEYOND_OSDU_SERVICES, 
  COMPETITIVE_MATRIX_GRID,
  TGS_WINBACK_PLAYBOOK
} from '../data';

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
  const [activeTab, setActiveTab] = useState('agentic'); // agentic | ai | hpc | battlecard
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
        <div className="section-eyebrow">04 · Technology Stack &amp; Differentiating Engine</div>
        <h1 className="section-title">Google Energy Technology Engine</h1>
        <p className="section-desc">
          Google Cloud inverts the industry technology frame: data foundation is the baseline; intelligence, 
          custom AI silicon economics, HPC subsurface throughput, and geospatial satellite intelligence are 
          the ultimate differentiators against AWS and Azure.
        </p>
      </div>

      {/* Top Tabbed Navigation Bar */}
      <div className="tech-tabs academia-toggle mb-24" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button className={activeTab === 'agentic' ? 'active' : ''} onClick={() => setActiveTab('agentic')}>
          ⚡ Agentic OSDU &amp; Dual Entry
        </button>
        <button className={activeTab === 'ai' ? 'active' : ''} onClick={() => setActiveTab('ai')}>
          🧠 Gemini 3.5/3.6 &amp; AI Silicon
        </button>
        <button className={activeTab === 'hpc' ? 'active' : ''} onClick={() => setActiveTab('hpc')}>
          🖥️ HPC Subsurface Supercomputing
        </button>
        <button className={activeTab === 'battlecard' ? 'active' : ''} onClick={() => setActiveTab('battlecard')}>
          ⚔️ Beyond OSDU &amp; Competitive Grid
        </button>
      </div>

      {/* TAB 1: AGENTIC OSDU & DUAL ENTRY */}
      {activeTab === 'agentic' && (
        <div style={{ animation: 'fadeSlideIn 0.25s ease' }}>
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
                the agentic portfolio. Google provides direct entry via BigQuery Omni + Gemini 3.5/3.6 long-context reasoning
                directly over existing data assets — requiring <strong style={{ color: 'var(--text-primary)' }}>zero OSDU transformation</strong> before
                first operational value.
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
            <strong style={{ color: 'var(--text-primary)' }}> bounded authority</strong> — human approval gates are non-negotiable.
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

          {/* Sovereign Trio Router */}
          <div className="sep mb-24" />
          <div className="section-eyebrow mb-8">Sovereign Trio Decision Router</div>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
            Three deployment topologies cover every operator sovereignty requirement. Select parameters to route the workload.
          </p>
          <div className="router-options mb-16">
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
              <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Select parameters above to route the workload to a topology.</div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: GOOGLE AI DIFFERENTIATION */}
      {activeTab === 'ai' && (
        <div style={{ animation: 'fadeSlideIn 0.25s ease' }}>
          <div className="section-eyebrow mb-8">Google AI Leadership in Energy</div>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            Google Cloud provides architectural advantages in GenAI reasoning length, custom silicon economics, and fundamental science that neither AWS nor Azure can mirror.
          </p>
          <div className="grid-2 mb-24">
            {GOOGLE_AI_DIFFERENTIATORS.map((ai, idx) => (
              <div key={idx} className="card" style={{ borderColor: `var(--${ai.color})` }}>
                <div className="row gap-8 mb-8" style={{ justifyContent: 'space-between' }}>
                  <span className={`pill pill-${ai.color}`}>{ai.badge}</span>
                </div>
                <h3 style={{ fontSize: '15px', color: 'var(--text-primary)', margin: '0 0 6px 0' }}>{ai.title}</h3>
                <div style={{ fontSize: '13px', fontWeight: 600, color: `var(--${ai.color})`, marginBottom: '10px' }}>{ai.headline}</div>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '12px' }}>{ai.description}</p>
                <div style={{ fontSize: '11.5px', background: 'rgba(255,255,255,0.03)', padding: '8px 10px', borderRadius: '6px', borderLeft: `3px solid var(--${ai.color})` }}>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>⚡ Key Advantage: {ai.metric}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '11px', marginTop: '3px' }}>📌 Reference: {ai.proof}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="highlight-block blue mb-24">
            <strong style={{ color: 'var(--google-blue)' }}>Gemini 3.5 &amp; 3.6 Architecture Advantage:</strong> While competitors are forced to chunk 30-year well files into isolated 100k snippets (losing spatial and historical continuity), Gemini processes the complete subsurface well jacket, logs, and seismic interpretations natively in a single reasoning step.
          </div>
        </div>
      )}

      {/* TAB 3: HPC & SUBSURFACE ENGINE */}
      {activeTab === 'hpc' && (
        <div style={{ animation: 'fadeSlideIn 0.25s ease' }}>
          <div className="section-eyebrow mb-8">Subsurface Supercomputing &amp; HPC Bursting</div>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            Accelerating Reverse Time Migration (RTM), Full Waveform Inversion (FWI), and reservoir simulation with petabyte-scale sub-millisecond Parallelstore storage and A3 Ultra GPU/TPU nodes.
          </p>

          <div className="stack gap-16 mb-24">
            {HPC_ENERGY_STACK.map((hpc, i) => (
              <div key={i} className="card" style={{ borderColor: 'var(--purple)' }}>
                <div className="row gap-12 mb-8" style={{ justifyContent: 'space-between' }}>
                  <span className="card-title" style={{ margin: 0, fontSize: '15px' }}>{hpc.capability}</span>
                  <span className="pill pill-purple">HPC Stack</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--google-blue)', fontWeight: 600, marginBottom: '8px' }}>
                  Hardware &amp; Network: {hpc.stack}
                </div>
                <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '10px' }}>
                  {hpc.advantage}
                </p>
                <div style={{ fontSize: '11.5px', color: 'var(--teal)', background: 'rgba(0,189,170,0.06)', padding: '6px 10px', borderRadius: '4px' }}>
                  🏆 <strong>Public Benchmark / Customer Proof: </strong>{hpc.benchmark}
                </div>
              </div>
            ))}
          </div>

          <div className="highlight-block purple mb-24">
            <strong style={{ color: 'var(--purple)' }}>TotalEnergies &amp; SLB Subsurface Proof Point:</strong> GCP HPC Toolkit enables on-demand bursting of petabyte seismic velocity models from on-premises data centers to 10,000+ cloud GPU/TPU nodes with zero idle infrastructure cost, delivering up to 40% wall-clock compute reduction.
          </div>

          <div className="card mb-24" style={{ borderColor: 'var(--amber)', background: 'rgba(244,180,26,0.04)', boxShadow: '0 0 12px rgba(244,180,26,0.1)' }}>
            <div className="row gap-8 mb-8" style={{ alignItems: 'center' }}>
              <span className="pill pill-amber">🎯 Featured P1 Win-Back</span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{TGS_WINBACK_PLAYBOOK.customer}</span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.5', margin: '0 0 8px 0' }}>
              <strong>AWS Deficit:</strong> TGS routinely faces weekly AWS GPU capacity shortages in key regions and zero GTM support for client RFPs.
            </p>
            <div style={{ fontSize: '12px', color: 'var(--teal)', fontWeight: 600 }}>
              <strong>Google Fix:</strong> Contractually reserved A3 Ultra &amp; TPU Trillium regional clusters + Parallelstore sub-ms IOPS + Joint GTM RFP co-bidding alliance.
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: BEYOND OSDU & COMPETITIVE BATTLECARD */}
      {activeTab === 'battlecard' && (
        <div style={{ animation: 'fadeSlideIn 0.25s ease' }}>
          <div className="section-eyebrow mb-8">Key Differentiating Services Beyond OSDU</div>
          <div className="grid-2 mb-24">
            {BEYOND_OSDU_SERVICES.map((s, idx) => (
              <div key={idx} className="card" style={{ borderColor: 'var(--border)' }}>
                <div className="row gap-8 mb-8" style={{ alignItems: 'center' }}>
                  <span style={{ fontSize: '20px' }}>{s.icon}</span>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{s.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--teal)' }}>{s.category}</div>
                  </div>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '10px' }}>{s.summary}</p>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  📌 <strong>Proof Point: </strong>{s.publicReference}
                </div>
              </div>
            ))}
          </div>

          <div className="sep mb-24" />
          <div className="section-eyebrow mb-12">Head-to-Head Competitive Battlecard (GCP vs AWS vs Azure)</div>

          <div className="table-responsive">
            <table className="data-table" style={{ width: '100%', minWidth: '650px', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid var(--border)' }}>
                  <th style={{ padding: '10px' }}>Dimension</th>
                  <th style={{ padding: '10px', color: 'var(--google-blue)' }}>Google Cloud (GCP)</th>
                  <th style={{ padding: '10px', color: 'var(--text-muted)' }}>AWS</th>
                  <th style={{ padding: '10px', color: 'var(--text-muted)' }}>Microsoft Azure</th>
                  <th style={{ padding: '10px', color: 'var(--teal)' }}>Winning Advantage</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITIVE_MATRIX_GRID.map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px', fontWeight: 600, color: 'var(--text-primary)' }}>{r.feature}</td>
                    <td style={{ padding: '10px', color: 'var(--text-primary)', background: 'rgba(66,133,244,0.06)', fontWeight: 500 }}>{r.gcp}</td>
                    <td style={{ padding: '10px', color: 'var(--text-muted)' }}>{r.aws}</td>
                    <td style={{ padding: '10px', color: 'var(--text-muted)' }}>{r.azure}</td>
                    <td style={{ padding: '10px', color: 'var(--teal)', fontWeight: 600 }}>{r.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
