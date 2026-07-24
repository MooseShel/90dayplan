import { useState } from 'react';
import { GTM_OPERATING_MODEL, ENABLEMENT_KITS, SCALING_MECHANISMS, FIELD_MULTIPLIER_METRICS } from '../data';

const STATUS_CYCLE = ['Not Started', 'In Progress', 'In Review', 'Shipped ✓'];
const STATUS_PILL  = { 'Not Started': 'pill-muted', 'In Progress': 'pill-blue', 'In Review': 'pill-amber', 'Shipped ✓': 'pill-green' };

const COLOR_VAR = {
  blue: 'var(--google-blue)', teal: 'var(--teal)', purple: 'var(--purple)',
  amber: 'var(--amber)', green: 'var(--green)', red: 'var(--red)',
};

export default function S08Enablement() {
  const [activeFunc, setActiveFunc] = useState('sales');
  const [kitStatuses, setKitStatuses] = useState(ENABLEMENT_KITS.map(() => 'Not Started'));

  const cycleKit = (i) =>
    setKitStatuses(s => s.map((v, idx) => idx === i ? STATUS_CYCLE[(STATUS_CYCLE.indexOf(v) + 1) % STATUS_CYCLE.length] : v));

  const activeModel = GTM_OPERATING_MODEL.find(m => m.id === activeFunc);

  return (
    <div className="section-page">
      {/* ── Header ── */}
      <div className="section-header">
        <div className="section-eyebrow">08 · Sales Enablement &amp; GTM Operating Model</div>
        <h1 className="section-title">Scaling the Machine</h1>
        <p className="section-desc">
          The Market Lead doesn't sell — the Market Lead makes 50 sellers, 40 partners, and 6 engineering teams
          sell better, faster, and with domain authority they didn't have before. This section maps the operating
          model that scales central O&amp;G strategy across Google Cloud's five supporting functions.
        </p>
      </div>

      {/* ── Hub-and-Spoke Diagram ── */}
      <div className="section-eyebrow mb-16">Operating Model — Hub &amp; Spoke</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
        {/* Center Hub */}
        <div className="card" style={{
          textAlign: 'center',
          borderColor: 'var(--google-blue)',
          background: 'rgba(66,133,244,0.08)',
          boxShadow: 'var(--shadow-glow-blue)',
          padding: '20px',
        }}>
          <div style={{ fontSize: '24px', marginBottom: '6px' }}>🎯</div>
          <div style={{ fontFamily: "'DM Sans', 'Roboto', sans-serif", fontWeight: 700, fontSize: '16px', color: 'var(--text-primary)', marginBottom: '4px' }}>
            Market Lead Director
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            Central Orchestrator · Strategy Owner · Force Multiplier
          </div>
        </div>

        {/* Spoke Nodes — clickable function cards */}
        <div className="grid-5" style={{ gap: '10px' }}>
          {GTM_OPERATING_MODEL.map(m => (
            <div
              key={m.id}
              className="card"
              onClick={() => setActiveFunc(m.id)}
              style={{
                cursor: 'pointer',
                textAlign: 'center',
                borderColor: activeFunc === m.id ? COLOR_VAR[m.color] : 'var(--border)',
                background: activeFunc === m.id ? `${COLOR_VAR[m.color]}11` : 'var(--bg-card)',
                boxShadow: activeFunc === m.id ? `0 0 0 1px ${COLOR_VAR[m.color]}40` : 'var(--shadow-card)',
                padding: '14px 10px',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ fontSize: '20px', marginBottom: '4px' }}>{m.icon}</div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: activeFunc === m.id ? COLOR_VAR[m.color] : 'var(--text-primary)', lineHeight: 1.3 }}>
                {m.function}
              </div>
              <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.3 }}>
                {m.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* Detail Panel for selected function */}
        {activeModel && (
          <div className="card" style={{
            borderLeft: `3px solid ${COLOR_VAR[activeModel.color]}`,
            animation: 'fadeSlideIn 0.2s ease',
          }}>
            <div className="card-title" style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '18px' }}>{activeModel.icon}</span>
              <span>{activeModel.function}</span>
              <span className={`pill pill-${activeModel.color}`}>{activeModel.subtitle}</span>
            </div>

            <div className="grid-3" style={{ gap: '16px' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Their Role
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {activeModel.role}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: COLOR_VAR[activeModel.color], marginBottom: '6px' }}>
                  Market Lead Multiplier
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {activeModel.multiplier}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '6px' }}>
                  90-Day Deliverable
                </div>
                <div style={{ fontSize: '13px', color: 'var(--green)', lineHeight: 1.6, fontWeight: 500 }}>
                  {activeModel.deliverable}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="sep" />

      {/* ── Enablement Kit Tracker ── */}
      <div className="section-eyebrow mb-16">Enablement Kit Tracker — click status to cycle</div>

      <div className="card" style={{ padding: 0, overflow: 'hidden', width: '100%', marginBottom: '32px' }}>
        <div className="table-responsive" style={{ marginBottom: 0 }}>
          <table className="data-table" style={{ width: '100%', minWidth: '750px' }}>
            <thead>
              <tr>
                <th>Kit</th>
                <th>Audience</th>
                <th>Contents</th>
                <th>Timeline</th>
                <th style={{ textAlign: 'center' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {ENABLEMENT_KITS.map((kit, i) => (
                <tr key={kit.name}>
                  <td><strong>{kit.name}</strong></td>
                  <td>
                    <span className="pill pill-muted" style={{ fontSize: '10px' }}>{kit.audience}</span>
                  </td>
                  <td style={{ fontSize: '12px', maxWidth: '300px' }}>{kit.contents}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>
                    <span className={`pill pill-${kit.phase === 1 ? 'blue' : 'purple'}`} style={{ fontSize: '10px' }}>
                      {kit.timeline}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <span
                      className={`pill ${STATUS_PILL[kitStatuses[i]]}`}
                      style={{ cursor: 'pointer', fontSize: '10px' }}
                      onClick={() => cycleKit(i)}
                    >
                      {kitStatuses[i]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="sep" />

      {/* ── Operating Cadence ── */}
      <div className="section-eyebrow mb-16">Operating Cadence — Recurring Mechanisms</div>

      <div className="grid-3" style={{ gap: '14px', marginBottom: '32px' }}>
        {SCALING_MECHANISMS.map(m => (
          <div key={m.name} className="card" style={{
            borderTop: `3px solid ${COLOR_VAR[m.color]}`,
          }}>
            <div className="row" style={{ marginBottom: '8px', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>{m.icon}</span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {m.name}
                </div>
                <div style={{ fontSize: '11px', color: COLOR_VAR[m.color], fontWeight: 500 }}>
                  {m.cadence}
                </div>
              </div>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '8px' }}>
              {m.participants}
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              {m.purpose}
            </div>
          </div>
        ))}
      </div>

      <div className="sep" />

      {/* ── Field Multiplier Scorecard ── */}
      <div className="section-eyebrow mb-16">Field Multiplier Scorecard — Day 0 → 90 Targets</div>

      <div className="card" style={{ marginBottom: '32px' }}>
        <div className="stack" style={{ gap: '18px' }}>
          {FIELD_MULTIPLIER_METRICS.map(m => {
            const max = m.day90;
            return (
              <div key={m.metric}>
                <div className="row-between" style={{ marginBottom: '6px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)' }}>
                    {m.metric}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: COLOR_VAR[m.color] }}>
                    {m.day90}{m.unit}
                  </span>
                </div>
                {/* Progress milestones */}
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center', marginBottom: '4px' }}>
                  <div style={{ flex: 1, position: 'relative' }}>
                    <div className="progress-bar" style={{ height: '8px', borderRadius: '4px' }}>
                      <div
                        className={`progress-fill ${m.color === 'blue' ? 'blue' : m.color === 'green' ? 'green' : 'amber'}`}
                        style={{ width: '100%', borderRadius: '4px', opacity: 0.3 }}
                      />
                    </div>
                    {/* Milestone markers */}
                    {max > 0 && (
                      <div style={{ position: 'relative', height: '12px' }}>
                        {[
                          { val: m.day30, label: `D30: ${m.day30}${m.unit}` },
                          { val: m.day60, label: `D60: ${m.day60}${m.unit}` },
                        ].map((ms, idx) => (
                          <span
                            key={idx}
                            style={{
                              position: 'absolute',
                              left: `${(ms.val / max) * 100}%`,
                              transform: 'translateX(-50%)',
                              fontSize: '9px',
                              color: 'var(--text-muted)',
                              whiteSpace: 'nowrap',
                              top: '1px',
                            }}
                          >
                            {ms.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Philosophy Callout ── */}
      <div className="highlight-block teal" style={{ marginBottom: '24px' }}>
        <strong style={{ fontStyle: 'normal', color: 'var(--teal)' }}>Scaling Philosophy:</strong>{' '}
        The Market Lead doesn't sell — the Market Lead makes 50 sellers, 40 partners, and 6 engineering
        teams sell better, faster, and with domain authority they didn't have before. Every kit, cadence,
        and mechanism exists to remove friction and multiply field impact across Google's global energy practice.
      </div>

      <div className="highlight-block" style={{ marginBottom: '0' }}>
        <strong style={{ fontStyle: 'normal', color: 'var(--google-blue)' }}>Existing Asset Leverage:</strong>{' '}
        This enablement program builds on existing Google Cloud Energy materials — battle cards, pitch decks,
        and certification programs already in-market. The strategy updates, refines, and extends these assets
        with the new agentic OSDU, sovereign, and multicloud wedge positioning where applicable.
      </div>
    </div>
  );
}
