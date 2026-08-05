import React, { useState } from 'react';
import { TIMELINE_PHASES, GTM_OPERATING_MODEL, ENABLEMENT_KITS, OKRS, EXECUTIVE_DECISIONS } from '../data';

const TABS = [
  { id: 'roadmap', label: 'Phase Roadmap', icon: '🗓️' },
  { id: 'gtm',     label: 'GTM Operating Model', icon: '📊' },
  { id: 'okrs',    label: 'Strategic Objectives', icon: '🎯' },
  { id: 'align',   label: 'Leadership Alignment', icon: '✅' },
];

export default function S_ExecutionRoadmap() {
  const [tab, setTab] = useState('roadmap');
  const [activePhase, setActivePhase] = useState('phase1');

  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">10 · Execution</div>
        <h1 className="section-title">Execution Roadmap</h1>
        <p className="section-desc">
          A phased execution plan covering the 90-day roadmap, GTM operating model,
          strategic objectives, and leadership alignment requirements.
        </p>
      </div>

      {/* ── Tab Bar ──────────────────────────────────────────────── */}
      <div className="exec-tabs">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`exec-tab ${tab === t.id ? 'exec-tab--active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            <span className="exec-tab__icon">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Tab: Phase Roadmap ───────────────────────────────────── */}
      {tab === 'roadmap' && (
        <div className="exec-panel">
          <h2 className="subsection-title">30-60-90 Day Execution Phases</h2>
          
          {/* Phase Selector Pills */}
          <div className="maturity-filters" style={{ marginBottom: '1.5rem' }}>
            {TIMELINE_PHASES.map((p) => (
              <button
                key={p.id}
                className={`pill ${activePhase === p.id ? 'pill--active' : ''}`}
                onClick={() => setActivePhase(p.id)}
                style={{ fontSize: '0.85rem', padding: '6px 16px' }}
              >
                <strong>{p.label}</strong> , {p.theme}
              </button>
            ))}
          </div>

          <div className="timeline-phases-container">
            {TIMELINE_PHASES.filter(p => !activePhase || activePhase === p.id).map((phase) => (
              <div key={phase.id} className="timeline-phase-card card mb-6" style={{ padding: '1.5rem' }}>
                <div className="timeline-phase-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
                  <div>
                    <span className="timeline-phase-label" style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--google-blue)', marginRight: '1rem' }}>{phase.label}</span>
                    <span className="timeline-phase-theme" style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)' }}>{phase.theme}</span>
                  </div>
                  <span className="badge badge--blue" style={{ fontSize: '0.75rem' }}>Phase Goal</span>
                </div>

                {/* Workstreams Grid */}
                {phase.workstreams && phase.workstreams.length > 0 ? (
                  <div className="grid-2" style={{ gap: '1.25rem' }}>
                    {phase.workstreams.map((ws, i) => (
                      <div key={i} className="workstream-card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
                        <div className="workstream-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                          <span className="badge badge--purple" style={{ fontWeight: '600' }}>{ws.name}</span>
                        </div>
                        <ul className="workstream-actions" style={{ paddingLeft: '1.2rem', margin: '0 0 1rem 0', flex: 1, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                          {ws.actions.map((act, idx) => (
                            <li key={idx} style={{ marginBottom: '0.35rem' }}>{act}</li>
                          ))}
                        </ul>
                        {ws.exit && (
                          <div className="workstream-exit" style={{ background: 'var(--bg-elevated)', borderLeft: '3px solid var(--google-green)', padding: '0.5rem 0.75rem', borderRadius: '0 4px 4px 0', fontSize: '0.75rem' }}>
                            <strong style={{ color: 'var(--google-green)' }}>Exit Gate:</strong> {ws.exit}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : phase.milestones && phase.milestones.length > 0 ? (
                  <div className="timeline-milestones">
                    {phase.milestones.map((m, i) => (
                      <div key={i} className="timeline-milestone">
                        <span className="timeline-ms-icon">{m.icon}</span>
                        <div>
                          <div className="timeline-ms-title">{m.title}</div>
                          <div className="timeline-ms-detail">{m.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Tab: GTM Operating Model ─────────────────────────────── */}
      {tab === 'gtm' && (
        <div className="exec-panel">
          <h2 className="subsection-title">GTM Operating Model , Hub & Spoke</h2>
          <div className="gtm-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {GTM_OPERATING_MODEL.map((func) => (
              <div key={func.id} className={`gtm-card gtm-card--${func.color}`} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem' }}>
                <div className="gtm-card__header" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span className="gtm-card__icon" style={{ fontSize: '1.6rem' }}>{func.icon}</span>
                  <div>
                    <h3 className="gtm-card__title" style={{ fontSize: '1rem', fontWeight: '600', margin: 0 }}>{func.function}</h3>
                    <div className="gtm-card__subtitle" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{func.subtitle}</div>
                  </div>
                </div>
                <div className="gtm-card__body" style={{ fontSize: '0.82rem', lineHeight: '1.5' }}>
                  <div className="gtm-card__row" style={{ marginBottom: '0.4rem' }}><strong>Role:</strong> {func.role}</div>
                  <div className="gtm-card__row" style={{ marginBottom: '0.4rem' }}><strong>Multiplier:</strong> {func.multiplier}</div>
                  <div className="gtm-card__row" style={{ color: 'var(--google-blue)' }}><strong>Day 90 Deliverable:</strong> {func.deliverable}</div>
                </div>
              </div>
            ))}
          </div>

          {ENABLEMENT_KITS && (
            <>
              <h2 className="subsection-title" style={{ marginTop: '2rem' }}>Enablement Kit Tracker</h2>
              <div className="table-scroll">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Kit</th>
                      <th>Audience</th>
                      <th>Contents</th>
                      <th>Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ENABLEMENT_KITS.map((kit, i) => (
                      <tr key={i}>
                        <td className="cell-name">{kit.name}</td>
                        <td>{kit.audience}</td>
                        <td>{kit.contents}</td>
                        <td><span className="badge badge--teal">{kit.timeline}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      )}

      {/* ── Tab: Strategic Objectives (OKRs) ─────────────────────── */}
      {tab === 'okrs' && (
        <div className="exec-panel">
          <h2 className="subsection-title">Strategic Objectives & Key Results</h2>
          <div className="okr-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {OKRS.map((obj) => (
              <div key={obj.id} className="okr-card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem' }}>
                <div className="okr-card__header" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
                  <span className="okr-card__id badge badge--blue" style={{ fontSize: '0.9rem', fontWeight: '700' }}>{obj.id}</span>
                  <h3 className="okr-card__title" style={{ fontSize: '0.92rem', fontWeight: '600', margin: 0, lineHeight: '1.3' }}>{obj.title}</h3>
                </div>
                <ul className="okr-card__krs" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {obj.krs.map((kr, i) => (
                    <li key={i} className="okr-kr" style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', lineHeight: '1.4' }}>
                      <span className="okr-kr__bullet" style={{ fontWeight: '700', color: 'var(--google-blue)', flexShrink: 0 }}>KR{i + 1}</span>
                      <span className="okr-kr__text" style={{ color: 'var(--text-secondary)' }}>{kr.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Tab: Leadership Alignment ─────────────────────────────── */}
      {tab === 'align' && (
        <div className="exec-panel">
          <h2 className="subsection-title">Leadership Alignment Requirements</h2>
          <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
            Strategic decisions requiring executive alignment to enable execution.
          </p>
          <div className="decisions-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {EXECUTIVE_DECISIONS.map((d, i) => (
              <div key={i} className="decision-card" style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem', alignItems: 'flex-start' }}>
                <div className="decision-card__num" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(66, 133, 244, 0.15)', color: 'var(--google-blue)', fontWeight: '700', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', fontSize: '1rem' }}>{i + 1}</div>
                <div className="decision-card__body">
                  <h3 className="decision-card__title" style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>{d.title}</h3>
                  <p className="decision-card__detail" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
