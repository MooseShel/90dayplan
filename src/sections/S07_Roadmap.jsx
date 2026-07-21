import { useState } from 'react';
import { TIMELINE_PHASES } from '../data';

function useCountdown(targetDate) {
  const [diff, setDiff] = useState(() => Math.max(0, new Date(targetDate) - new Date()));
  const days    = Math.floor(diff / 86400000);
  const hours   = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  return { days, hours, minutes };
}

const STATUS_CYCLE = ['Not Started', 'In Progress', 'In Legal Review', 'Approved ✓'];
const STATUS_PILL  = { 'Not Started': 'pill-muted', 'In Progress': 'pill-blue', 'In Legal Review': 'pill-amber', 'Approved ✓': 'pill-green' };

function CountdownClock({ event, date, className, announceables, location }) {
  const { days, hours, minutes } = useCountdown(date);
  const [statuses, setStatuses] = useState(announceables.map(() => 'Not Started'));
  const cycle = i => setStatuses(s => s.map((v, idx) => idx === i ? STATUS_CYCLE[(STATUS_CYCLE.indexOf(v) + 1) % STATUS_CYCLE.length] : v));

  return (
    <div className={`countdown-card ${className}`}>
      <div className="countdown-event">{event}</div>
      <div className="countdown-date">{date} · {location}</div>
      <div className="countdown-digits">
        <div className="countdown-unit"><div className="countdown-num">{String(days).padStart(3,'0')}</div><div className="countdown-label">Days</div></div>
        <div className="countdown-sep">:</div>
        <div className="countdown-unit"><div className="countdown-num">{String(hours).padStart(2,'0')}</div><div className="countdown-label">Hrs</div></div>
        <div className="countdown-sep">:</div>
        <div className="countdown-unit"><div className="countdown-num">{String(minutes).padStart(2,'0')}</div><div className="countdown-label">Min</div></div>
      </div>
      <div className="sep" style={{ margin: '14px 0' }} />
      <div style={{ textAlign: 'left' }}>
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
          Announceable Tracker — click to cycle status
        </div>
        {announceables.map((a, i) => (
          <div key={a} className="row-between" style={{ marginBottom: '9px', gap: '10px', cursor: 'pointer' }} onClick={() => cycle(i)}>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', flex: 1 }}>{a}</span>
            <span className={`pill ${STATUS_PILL[statuses[i]]}`} style={{ fontSize: '10px', flexShrink: 0 }}>{statuses[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function S07Roadmap() {
  const [activePhase, setActivePhase] = useState('phase1');
  const phase = TIMELINE_PHASES.find(p => p.id === activePhase);

  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">07 · Execution Roadmap</div>
        <h1 className="section-title">30-60-90 Day Roadmap &amp; Event Anchors</h1>
        <p className="section-desc">
          Sequenced to leave sufficient time for customer approvals, legal reviews, demo builds, and executive narratives
          ahead of the two commercial proof events. ADIPEC (Nov 2026) is the 90-day public proof point.
          CERAWeek (Mar 2027) is the 180-day scale and commercial-framework announcement.
        </p>
      </div>

      {/* Countdown clocks — full width side by side */}
      <div className="countdown-grid mb-32">
        <CountdownClock
          event="ADIPEC 2026"
          date="November 2, 2026"
          location="Abu Dhabi"
          className="adipec"
          announceables={[
            'Sovereign NOC story — Aramco / KOC PoC sign-off',
            'APAC sovereign proof — Pertamina / PTTEP expansion live',
            'Multicloud fortress proof — Shell or Oxy wedge live',
            'ISV co-innovation reveal — Cognite / SLB / Kongsberg joint',
          ]}
        />
        <CountdownClock
          event="CERAWeek 2027"
          date="March 8, 2027"
          location="Houston"
          className="ceraweek"
          announceables={[
            'NOC commercial framework announcement (Gulf + APAC)',
            'Fortress-account production commitment',
            'PE sponsor-platform expansion (Quantum / EnCap)',
            'APAC Lead expansion — Reliance / Inpex / Harbour Energy',
            'North American reference wins — ≥4x pipeline coverage',
          ]}
        />
      </div>

      {/* Phase tabs */}
      <div className="timeline-phases mb-20">
        {TIMELINE_PHASES.map(p => (
          <div
            key={p.id}
            className={`phase-tab${activePhase === p.id ? ' active' : ''}`}
            onClick={() => setActivePhase(p.id)}
          >
            <div className="phase-num">{p.label}</div>
            <div className="phase-label">{p.theme}</div>
          </div>
        ))}
      </div>

      {/* Workstreams — 2-col grid */}
      {phase && (
        <div className="grid-2" style={{ gap: '14px', alignItems: 'start' }}>
          {phase.workstreams.map(ws => (
            <div key={ws.name} className="card">
              <div className="card-title mb-10">{ws.name}</div>
              <div className="stack-sm mb-14">
                {ws.actions.map(a => (
                  <div key={a} className="row gap-8" style={{ alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--google-blue)', fontSize: '12px', minWidth: '10px', marginTop: '2px' }}>›</span>
                    <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{a}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '10px' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px', marginRight: '8px' }}>Exit Criteria</span>
                <span style={{ fontSize: '12px', color: 'var(--green)' }}>{ws.exit}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
