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
          <div className="timeline-grid">
            {TIMELINE_PHASES.map((phase) => (
              <div key={phase.id} className="timeline-phase-card">
                <div className="timeline-phase-header">
                  <span className="timeline-phase-label">{phase.label}</span>
                  <span className="timeline-phase-theme">{phase.theme}</span>
                </div>
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
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Tab: GTM Operating Model ─────────────────────────────── */}
      {tab === 'gtm' && (
        <div className="exec-panel">
          <h2 className="subsection-title">GTM Operating Model — Hub & Spoke</h2>
          <div className="gtm-grid">
            {GTM_OPERATING_MODEL.map((func) => (
              <div key={func.id} className={`gtm-card gtm-card--${func.color}`}>
                <div className="gtm-card__header">
                  <span className="gtm-card__icon">{func.icon}</span>
                  <div>
                    <h3 className="gtm-card__title">{func.function}</h3>
                    <div className="gtm-card__subtitle">{func.subtitle}</div>
                  </div>
                </div>
                <div className="gtm-card__body">
                  <div className="gtm-card__row"><strong>Role:</strong> {func.role}</div>
                  <div className="gtm-card__row"><strong>Multiplier:</strong> {func.multiplier}</div>
                  <div className="gtm-card__row"><strong>Day 90 Deliverable:</strong> {func.deliverable}</div>
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
                        <td>{kit.timeline}</td>
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
          <div className="okr-grid">
            {OKRS.map((obj) => (
              <div key={obj.id} className="okr-card">
                <div className="okr-card__header">
                  <span className="okr-card__id">{obj.id}</span>
                  <h3 className="okr-card__title">{obj.title}</h3>
                </div>
                <ul className="okr-card__krs">
                  {obj.krs.map((kr, i) => (
                    <li key={i} className="okr-kr">
                      <span className="okr-kr__bullet">KR{i + 1}</span>
                      <span className="okr-kr__text">{kr.text}</span>
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
          <div className="decisions-grid">
            {EXECUTIVE_DECISIONS.map((d, i) => (
              <div key={i} className="decision-card">
                <div className="decision-card__num">{i + 1}</div>
                <div className="decision-card__body">
                  <h3 className="decision-card__title">{d.title}</h3>
                  <p className="decision-card__detail">{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
