import React, { useState } from 'react';
import { PILLARS, COMPETITIVE_ACCOUNTS, PILLARS_ARCHITECTURAL_DEEP_DIVES } from '../data';

const POSTURE_PILL = {
  Lead: 'pill-green', 'Co-Exist': 'pill-blue', Wedge: 'pill-amber', Cede: 'pill-muted',
};

const THESIS_CONTEXT = `Google enters oil & gas as a challenger operating a layer above the infrastructure incumbents ,
providing intelligence rather than migration. The offer draws on the full Alphabet portfolio, assembling
a proposition AWS and Azure structurally cannot replicate. AWS and Azure sell compute and storage.
Google sells outcomes anchored in domain intelligence, geospatial reasoning, industrial AI, and energy systems expertise.`;

const WHY_NOW = [
  { trigger: 'AI Inflection', icon: '🧠', detail: 'Energy companies sit at the center of the AI boom from both sides , as operators who need AI to scale production and cut costs, and as the critical infrastructure that must power the global AI build-out. Data centers alone are projected to consume as much electricity as entire nations by 2030. Oil & gas is not a passive AI adopter; it is an indispensable enabler.' },
  { trigger: 'Data Fragmentation', icon: '📂', detail: 'Operators have 20–30 years of siloed data across OSDU, PI historians, paper scans, and ERP systems. The economic cost of this fragmentation has become a board-level problem, not an IT problem.' },
  { trigger: 'Labor Shortage', icon: '👷', detail: 'The average upstream geoscientist is over 50 years old. A significant share of the workforce is expected to retire by 2030 (SPE/AAPG workforce surveys). Agentic AI that augments rather than replaces is a workforce strategy, not just an efficiency play.' },
  { trigger: 'Energy Transition', icon: '🌱', detail: "Operators need to decarbonize while growing production. Google's CCUS, methane-MRV, and grid-AI capabilities address both simultaneously , a combination no competitor can match." },
  { trigger: 'Sovereign AI', icon: '🔒', detail: 'Gulf and APAC NOCs need AI that stays in-country. The Dammam sovereign region, Google Cloud Jakarta/Bangkok/Tokyo regions, and GDC air-gap option give Google a sovereign answer that Azure and AWS cannot replicate at this level of regional trust and coverage.' },
  { trigger: 'Capital Discipline', icon: '📈', detail: 'Faced with investor pressure for free cash flow over production growth, operators can no longer afford multi-year, low-ROI IT transformations. AI that delivers immediate reduction in Non-Productive Time (NPT), optimizes well placement, and lowers lifting costs yields board-level financial returns in months rather than years.' },
];

export default function S01Thesis() {
  const [selected, setSelected] = useState(null);
  const [selectedPillar, setSelectedPillar] = useState(null);


  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">01 · Strategic Foundation</div>
        <h1 className="section-title">The Six-Pillar Operating Thesis</h1>
        <p className="section-desc">{THESIS_CONTEXT}</p>
      </div>

      <div className="highlight-block mb-24">
        "We are not asking operators to leave their cloud. We are asking them to run their intelligence on ours,
        and to build the next generation of the energy system alongside us."
      </div>

      {/* Why Now , 3-col grid */}
      <div className="section-eyebrow mb-16">Why Google · Why Oil &amp; Gas · Why Now</div>
      <div className="grid-3 mb-24">
        {WHY_NOW.map(w => (
          <div key={w.trigger} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="row gap-10">
              <span style={{ fontSize: '20px' }}>{w.icon}</span>
              <span className="card-title" style={{ margin: 0 }}>{w.trigger}</span>
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{w.detail}</div>
          </div>
        ))}
      </div>

      <div className="sep" />

      {/* Pillars , Interactive 6-Pillar Architecture */}
      <div className="section-eyebrow mb-16">Six-Pillar Framework · Deep Architectural Analysis</div>
      <div className="grid-2 mb-24" style={{ gap: '14px' }}>
        {PILLARS.map(p => {
          const deep = PILLARS_ARCHITECTURAL_DEEP_DIVES.find(d => d.num === String(p.num));
          const isExpanded = selectedPillar === p.num;
          return (
            <div 
              key={p.num} 
              className={`card ${isExpanded ? 'card--active' : ''}`}
              style={{ 
                cursor: 'pointer', 
                transition: 'all 0.2s ease',
                borderColor: isExpanded ? 'var(--google-blue)' : 'var(--border-color)',
                boxShadow: isExpanded ? 'var(--shadow-glow-blue)' : 'none'
              }}
              onClick={() => setSelectedPillar(isExpanded ? null : p.num)}
            >
              <div className="row-between mb-8">
                <div className="row gap-12" style={{ alignItems: 'center' }}>
                  <span className="tag">Pillar {p.num}</span>
                  <span className="card-title" style={{ margin: 0 }}>{p.title}</span>
                </div>
                <span className="pill pill-blue" style={{ fontSize: '11px' }}>
                  {isExpanded ? '▲ Close Deep Dive' : '▼ View Architecture'}
                </span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px' }}>{p.posture}</div>
              
              <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', borderLeft: '2px solid var(--border-bright)', paddingLeft: '10px', marginBottom: isExpanded ? '14px' : '0' }}>
                <strong style={{ color: 'var(--text-secondary)' }}>Day-90 proof: </strong>{p.proof}
              </div>

              {isExpanded && deep && (
                <div style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '12px', animation: 'fadeSlideIn 0.25s ease' }}>
                  <div style={{ marginBottom: '10px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      🏗️ Core Architecture
                    </div>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                      {deep.coreArchitecture}
                    </div>
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--google-blue)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      ⚙️ Deep-Dive Mechanics
                    </div>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                      {deep.deepDiveMechanics}
                    </div>
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--red)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      ⚠️ Critical Variables &amp; Edge Cases
                    </div>
                    <div className="stack-sm">
                      {deep.criticalVariables.map((cv, idx) => (
                        <div key={idx} style={{ fontSize: '12px', color: 'var(--text-muted)', paddingLeft: '8px', borderLeft: '2px solid var(--red)' }}>
                          {cv}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(52, 168, 83, 0.06)', padding: '10px 12px', borderRadius: '6px', borderLeft: '3px solid var(--green)' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--green)', textTransform: 'uppercase', marginBottom: '2px' }}>
                      ⚖️ Comparative Trade-Offs &amp; Implications
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {deep.tradeOffs}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="sep" />

      {/* Competitive Intel , full width table with expandable rows */}
      <div className="section-eyebrow mb-8">Competitive Intelligence , Posture by Account</div>
      <div className="row gap-16 mb-12" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', flex: 1, lineHeight: '1.6' }}>
          Four postures govern the sales motion. Click any row to see the detailed play.
        </p>
        <div className="posture-legend" style={{ margin: 0 }}>
          {Object.entries(POSTURE_PILL).map(([k, v]) => (
            <span key={k} className={`pill ${v}`}>{k}</span>
          ))}
        </div>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden', width: '100%' }}>
        <div className="table-responsive" style={{ marginBottom: 0 }}>
          <table className="data-table" style={{ width: '100%', minWidth: '600px' }}>
            <thead>
              <tr>
                <th>Account</th><th>Incumbent</th><th>Posture</th><th>Entry Wedge</th><th>Expansion Vector</th>
              </tr>
            </thead>
            <tbody>
              {COMPETITIVE_ACCOUNTS.map(a => (
                <React.Fragment key={a.name}>
                  <tr style={{ cursor: 'pointer' }} onClick={() => setSelected(selected === a.name ? null : a.name)}>
                    <td><strong>{a.name}</strong></td>
                    <td><span className="tag">{a.incumbent}</span></td>
                    <td><span className={`pill ${POSTURE_PILL[a.googlePosture] || 'pill-muted'}`}>{a.googlePosture}</span></td>
                    <td style={{ fontSize: '12px' }}>{a.wedge}</td>
                    <td style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{a.expand}</td>
                  </tr>
                  {selected === a.name && (
                    <tr>
                      <td colSpan={5} style={{ background: 'rgba(66,133,244,0.05)', padding: '10px 14px', fontSize: '12px', color: 'var(--text-secondary)', borderLeft: '3px solid var(--google-blue)' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>Play for {a.name}:</strong> Lead with <em>{a.wedge}</em>, then expand to <em>{a.expand}</em>. Incumbent ({a.incumbent}) stays in place , no migration conversation required.
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="highlight-block teal mt-16">
        <strong style={{ color: 'var(--teal)' }}>Counter-move playbook:</strong> When AWS discounts at a Tier 1A independent , lead with an outcome-priced pilot on a KPI AWS cannot match: NPT reduction, interpretations per day, or production cycle time. When Azure deepens ADME at a fortress account: "Your OSDU investment is safe. We make it think." No migration. No displacement. Pure intelligence layer.
      </div>
    </div>
  );
}
