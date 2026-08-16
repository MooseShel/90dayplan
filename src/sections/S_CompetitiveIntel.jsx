import React, { useState } from 'react';
import { 
  COMPETITIVE_MATRIX_GRID, 
  COMPETITIVE_ACCOUNTS, 
  HONEST_COMPETITIVE_GAPS,
  COMPETITIVE_CRITICAL_VARIABLES,
  COMPETITIVE_POSITIONING_APPROACHES,
  DECISIVE_LEADS_DEEP_DIVES,
  TGS_WINBACK_PLAYBOOK
} from '../data';

const POSTURE_PILL = {
  Lead: 'pill-green', 
  'Co-Exist': 'pill-blue', 
  Wedge: 'pill-amber',
  'Win-Back': 'pill-amber',
  Cede: 'pill-muted'
};

export default function S_CompetitiveIntel() {
  const [activeTab, setActiveTab] = useState('leads'); // leads | gaps | matrix | accounts | tradeoffs
  const [selectedLead, setSelectedLead] = useState('gemini');
  const [selectedAccount, setSelectedAccount] = useState(null);

  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">09 · Competitive Intelligence</div>
        <h1 className="section-title">Competitive Landscape &amp; Field Strategy</h1>
        <p className="section-desc">
          A rigorous, multi-dimensional assessment of Google Cloud vs. AWS and Azure across the energy vertical.
          Articulates where Google holds structural moats, provides candid field pivots for genuine gaps, 
          and establishes disciplined positioning rules across all account tiers.
        </p>
      </div>

      {/* ── Top Navigation Tabs ──────────────────────────────────── */}
      <div className="tech-tabs academia-toggle mb-24" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button className={activeTab === 'leads' ? 'active' : ''} onClick={() => setActiveTab('leads')}>
          ⚔️ Decisive Leads &amp; Moats
        </button>
        <button className={activeTab === 'gaps' ? 'active' : ''} onClick={() => setActiveTab('gaps')}>
          ⚖️ Honest Gaps &amp; Field Pivots
        </button>
        <button className={activeTab === 'matrix' ? 'active' : ''} onClick={() => setActiveTab('matrix')}>
          📊 Capability Matrix Grid
        </button>
        <button className={activeTab === 'accounts' ? 'active' : ''} onClick={() => setActiveTab('accounts')}>
          🎯 Account Postures &amp; TGS Win-Back
        </button>
        <button className={activeTab === 'tradeoffs' ? 'active' : ''} onClick={() => setActiveTab('tradeoffs')}>
          🧭 Critical Variables &amp; Positioning Rules
        </button>
      </div>

      {/* ── TAB 1: DECISIVE LEADS & MOATS ────────────────────────── */}
      {activeTab === 'leads' && (
        <div style={{ animation: 'fadeSlideIn 0.25s ease' }}>
          <div className="highlight-block mb-20">
            <strong style={{ color: 'var(--google-blue)' }}>Defensible Moats in Combination:</strong> Individually, several capabilities can be contested by AWS or Azure. 
            However, the combination of <strong style={{ color: 'var(--text-primary)' }}>governed multimodal reasoning (2M tokens)</strong>, <strong style={{ color: 'var(--text-primary)' }}>sub-millisecond DAOS I/O HPC</strong>, and <strong style={{ color: 'var(--text-primary)' }}>Mandiant OT threat defense</strong> creates a defensible moat that no hyperscaler can match.
          </div>

          <div className="grid-5 mb-20" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
            {DECISIVE_LEADS_DEEP_DIVES.map(lead => (
              <div 
                key={lead.id} 
                className={`card ${selectedLead === lead.id ? 'card--active' : ''}`}
                style={{ 
                  cursor: 'pointer', 
                  padding: '14px', 
                  borderColor: selectedLead === lead.id ? 'var(--google-blue)' : 'var(--border-color)',
                  background: selectedLead === lead.id ? 'rgba(66, 133, 244, 0.08)' : 'var(--card-bg)'
                }}
                onClick={() => setSelectedLead(lead.id)}
              >
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{lead.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--text-primary)', marginBottom: '4px' }}>{lead.title.split(' ')[0]} {lead.title.split(' ')[1] || ''}</div>
                <span className="pill pill-blue" style={{ fontSize: '10px', padding: '2px 6px' }}>{lead.badge.split('·')[0]}</span>
              </div>
            ))}
          </div>

          {(() => {
            const current = DECISIVE_LEADS_DEEP_DIVES.find(l => l.id === selectedLead) || DECISIVE_LEADS_DEEP_DIVES[0];
            return (
              <div className="card" style={{ borderColor: 'var(--google-blue)', padding: '24px' }}>
                <div className="row-between mb-16" style={{ alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div className="row gap-12" style={{ alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '28px' }}>{current.icon}</span>
                      <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>{current.title}</h2>
                    </div>
                    <span className="pill pill-blue">{current.badge}</span>
                  </div>
                </div>

                <div className="grid-2 gap-16 mb-16">
                  <div className="card" style={{ background: 'var(--bg-inset)', padding: '16px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                      🏗️ Core Architecture
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                      {current.architecture}
                    </div>
                  </div>

                  <div className="card" style={{ background: 'var(--bg-inset)', padding: '16px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--google-blue)', textTransform: 'uppercase', marginBottom: '6px' }}>
                      ⚙️ Deep-Dive Mechanics
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                      {current.mechanics}
                    </div>
                  </div>
                </div>

                <div className="highlight-block teal" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                  <strong style={{ color: 'var(--teal)' }}>Strategic Implication &amp; Field Execution: </strong>
                  {current.strategicImplication}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ── TAB 2: HONEST GAPS & FIELD PIVOTS ────────────────────── */}
      {activeTab === 'gaps' && (
        <div style={{ animation: 'fadeSlideIn 0.25s ease' }}>
          <div className="highlight-block amber mb-20">
            <strong style={{ color: 'var(--amber)' }}>Candid Competitive Assessment:</strong> A winning sales organization does not deny genuine gaps when facing sophisticated technical buyers. 
            Google Cloud acknowledges where AWS or Azure lead in volume or incumbency, and executes disciplined <strong style={{ color: 'var(--text-primary)' }}>field pivots</strong> that reframe the buying criteria.
          </div>

          <div className="table-responsive">
            <table className="data-table" style={{ width: '100%', minWidth: '750px' }}>
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Competitive Dimension</th>
                  <th style={{ width: '26%' }}>Honest Assessment</th>
                  <th style={{ width: '22%' }}>Why It Matters</th>
                  <th style={{ width: '30%' }}>Recommended Field Response / Pivot</th>
                </tr>
              </thead>
              <tbody>
                {HONEST_COMPETITIVE_GAPS.map((gap, i) => (
                  <tr key={i}>
                    <td>
                      <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>{gap.dimension}</strong>
                      <span className="pill pill-amber" style={{ fontSize: '10.5px' }}>{gap.tag}</span>
                    </td>
                    <td style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                      {gap.assessment}
                    </td>
                    <td style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                      {gap.whyItMatters}
                    </td>
                    <td style={{ fontSize: '12px', color: 'var(--green)', lineHeight: '1.55', background: 'rgba(52, 168, 83, 0.04)', borderLeft: '3px solid var(--green)' }}>
                      <strong>Pivot: </strong>{gap.fieldPivot}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── TAB 3: CAPABILITY MATRIX GRID ────────────────────────── */}
      {activeTab === 'matrix' && (
        <div style={{ animation: 'fadeSlideIn 0.25s ease' }}>
          <h2 className="subsection-title mb-12">Head-to-Head Hyperscaler Capability Comparison</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Direct comparison across the 6 critical dimensions of oil &amp; gas digital transformation:
          </p>
          <div className="table-responsive">
            <table className="data-table competitive-matrix" style={{ minWidth: '700px' }}>
              <thead>
                <tr>
                  <th style={{ width: '18%' }}>Capability</th>
                  <th className="col-gcp" style={{ width: '28%' }}>Google Cloud</th>
                  <th className="col-aws" style={{ width: '24%' }}>AWS</th>
                  <th className="col-azure" style={{ width: '24%' }}>Azure</th>
                  <th style={{ width: '16%' }}>Advantage Summary</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITIVE_MATRIX_GRID.map((row, i) => (
                  <tr key={i}>
                    <td className="cell-name"><strong>{row.feature}</strong></td>
                    <td className="col-gcp" style={{ fontSize: '12px', lineHeight: '1.5' }}>{row.gcp}</td>
                    <td className="col-aws" style={{ fontSize: '12px', lineHeight: '1.5' }}>{row.aws}</td>
                    <td className="col-azure" style={{ fontSize: '12px', lineHeight: '1.5' }}>{row.azure}</td>
                    <td className="cell-winner" style={{ fontSize: '11.5px' }}>{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── TAB 4: ACCOUNT POSTURES & TGS WIN-BACK ────────────────── */}
      {activeTab === 'accounts' && (
        <div style={{ animation: 'fadeSlideIn 0.25s ease' }}>
          <div className="grid-2 gap-16 mb-24">
            {/* TGS Win-back Card */}
            <div className="card" style={{ borderColor: 'var(--amber)', background: 'linear-gradient(180deg, rgba(251, 188, 4, 0.05) 0%, var(--card-bg) 100%)' }}>
              <div className="row-between mb-12">
                <div className="row gap-8">
                  <span style={{ fontSize: '22px' }}>🎯</span>
                  <span className="card-title" style={{ margin: 0 }}>P1 Priority Win-Back: TGS</span>
                </div>
                <span className="pill pill-amber">AWS Under Escalation</span>
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: '1.55' }}>
                {TGS_WINBACK_PLAYBOOK.headline}
              </p>

              <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--red)', textTransform: 'uppercase', marginBottom: '6px' }}>
                AWS Vulnerabilities &amp; Customer Pain Points:
              </div>
              <div className="stack-sm mb-14">
                {TGS_WINBACK_PLAYBOOK.painPoints.map((p, idx) => (
                  <div key={idx} style={{ fontSize: '12px', color: 'var(--text-secondary)', paddingLeft: '8px', borderLeft: '2px solid var(--red)' }}>
                    <strong>{p.title}: </strong>{p.detail}
                  </div>
                ))}
              </div>

              <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--green)', textTransform: 'uppercase', marginBottom: '6px' }}>
                Google Counter-Offense:
              </div>
              <div className="stack-sm">
                {TGS_WINBACK_PLAYBOOK.googleCounterStrategy.slice(0, 2).map((c, idx) => (
                  <div key={idx} style={{ fontSize: '12px', color: 'var(--text-secondary)', paddingLeft: '8px', borderLeft: '2px solid var(--green)' }}>
                    <strong>{c.title}: </strong>{c.detail}
                  </div>
                ))}
              </div>
            </div>

            {/* Posture Distribution Summary */}
            <div className="card">
              <div className="card-title mb-12">Account Attack Posture Rules</div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                The 33-account target universe is governed by 4 distinct field postures. No single playbook is deployed universally:
              </p>

              <div className="stack-md">
                <div style={{ padding: '10px 12px', borderRadius: '6px', background: 'rgba(52, 168, 83, 0.08)', borderLeft: '3px solid var(--green)' }}>
                  <div className="row-between mb-4">
                    <strong style={{ color: 'var(--green)', fontSize: '13px' }}>Lead Posture (7 Accounts)</strong>
                    <span className="tag">Full Platform Displacement</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Greenfield, merger-disrupted, or sovereign-mandated accounts (EQT, Woodside, Devon, Pertamina).</div>
                </div>

                <div style={{ padding: '10px 12px', borderRadius: '6px', background: 'rgba(251, 188, 4, 0.08)', borderLeft: '3px solid var(--amber)' }}>
                  <div className="row-between mb-4">
                    <strong style={{ color: 'var(--amber)', fontSize: '13px' }}>Wedge Posture (15 Accounts)</strong>
                    <span className="tag">In-Place Workload Insertion</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Entrenched AWS/Azure accounts where Google enters via BigQuery Omni, HPC seismic, or Earth Engine without forcing data migration (Shell, Chevron, Oxy).</div>
                </div>

                <div style={{ padding: '10px 12px', borderRadius: '6px', background: 'rgba(66, 133, 244, 0.08)', borderLeft: '3px solid var(--google-blue)' }}>
                  <div className="row-between mb-4">
                    <strong style={{ color: 'var(--google-blue)', fontSize: '13px' }}>Co-Exist Posture (4 Accounts)</strong>
                    <span className="tag">Sovereign &amp; Attach Motion</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Geopolitically locked accounts (ADNOC/G42) where Google engages for Mandiant OT security and specialized AI attach without primary platform battle.</div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="subsection-title mb-12">Named-Account Competitive Playbook</h3>
          <div className="table-responsive">
            <table className="data-table" style={{ minWidth: '650px' }}>
              <thead>
                <tr>
                  <th>Account</th>
                  <th>Incumbent</th>
                  <th>Google Posture</th>
                  <th>Wedge Strategy</th>
                  <th>Expansion Play</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITIVE_ACCOUNTS.map((a, i) => (
                  <React.Fragment key={i}>
                    <tr 
                      style={{ cursor: 'pointer' }}
                      onClick={() => setSelectedAccount(selectedAccount === a.name ? null : a.name)}
                    >
                      <td className="cell-name"><strong>{a.name}</strong></td>
                      <td><span className="tag">{a.incumbent}</span></td>
                      <td><span className={`pill ${POSTURE_PILL[a.googlePosture] || 'pill-muted'}`}>{a.googlePosture}</span></td>
                      <td style={{ fontSize: '12px' }}>{a.wedge}</td>
                      <td style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{a.expand}</td>
                    </tr>
                    {selectedAccount === a.name && (
                      <tr>
                        <td colSpan={5} style={{ background: 'rgba(66, 133, 244, 0.06)', padding: '12px 16px', fontSize: '12.5px', color: 'var(--text-secondary)', borderLeft: '3px solid var(--google-blue)' }}>
                          <strong style={{ color: 'var(--text-primary)' }}>Detailed Attack Play for {a.name}: </strong>
                          Lead with <em>{a.wedge}</em> to prove technical ROI in &lt;90 days. Once established, expand horizontally into <em>{a.expand}</em>. Incumbent ({a.incumbent}) infrastructure remains in place , zero cloud migration friction.
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── TAB 5: CRITICAL VARIABLES & POSITIONING RULES ─────────── */}
      {activeTab === 'tradeoffs' && (
        <div style={{ animation: 'fadeSlideIn 0.25s ease' }}>
          <div className="section-eyebrow mb-12">Critical Variables Governing Competitive Position</div>
          <div className="grid-3 mb-24">
            {COMPETITIVE_CRITICAL_VARIABLES.map((v, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-primary)' }}>{v.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                  {v.mechanism}
                </div>
                <div style={{ fontSize: '11.5px', color: 'var(--red)', background: 'rgba(234, 67, 53, 0.05)', padding: '6px 8px', borderRadius: '4px' }}>
                  <strong>Risk: </strong>{v.risk}
                </div>
                <div style={{ fontSize: '11.5px', color: 'var(--green)', background: 'rgba(52, 168, 83, 0.05)', padding: '6px 8px', borderRadius: '4px', marginTop: 'auto' }}>
                  <strong>Field Action: </strong>{v.fieldAction}
                </div>
              </div>
            ))}
          </div>

          <div className="section-eyebrow mb-12">Comparative Positioning Approaches &amp; Risk Matrix</div>
          <div className="table-responsive">
            <table className="data-table" style={{ minWidth: '650px' }}>
              <thead>
                <tr>
                  <th style={{ width: '28%' }}>Positioning Approach</th>
                  <th style={{ width: '28%' }}>Capabilities / Examples</th>
                  <th style={{ width: '24%' }}>When to Deploy</th>
                  <th style={{ width: '20%' }}>Risk &amp; Governance</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITIVE_POSITIONING_APPROACHES.map((pos, i) => (
                  <tr key={i}>
                    <td>
                      <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>{pos.approach}</strong>
                      <span className={`pill pill-${pos.color}`} style={{ fontSize: '10.5px' }}>{pos.color === 'green' ? 'Durable / Low Risk' : pos.color === 'amber' ? 'Moderate Risk' : 'Strategic Reframe'}</span>
                    </td>
                    <td style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {pos.examples}
                    </td>
                    <td style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {pos.whenToUse}
                    </td>
                    <td style={{ fontSize: '12px', color: pos.color === 'green' ? 'var(--green)' : pos.color === 'amber' ? 'var(--amber)' : 'var(--google-blue)', lineHeight: '1.5' }}>
                      {pos.risk}
                    </td>
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
