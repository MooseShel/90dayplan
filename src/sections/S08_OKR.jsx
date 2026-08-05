import { OKRS } from '../data';
import { useState } from 'react';

const STATUS_OPTS = ['not-started', 'on-track', 'at-risk', 'complete'];
const STATUS_META = {
  'not-started': { label: 'Not Started', cls: 'pill-muted'  },
  'on-track':    { label: 'On Track',    cls: 'pill-green'  },
  'at-risk':     { label: 'At Risk',     cls: 'pill-amber'  },
  'complete':    { label: 'Complete',    cls: 'pill-blue'   },
};

const OKR_CONTEXT = {
  O1: "Establishing market leadership early creates reference pull , the first 3–5 signed customers become the social proof that unblocks the next 20. ADIPEC is the public proof point.",
  O2: "Fortress and Wedge accounts represent ~70% of global upstream production. Proving co-existence at Shell, Oxy, Chevron, Equinor, Aker BP, ENI, or BP removes the 'Google requires migration' objection at scale.",
  O3: "Gulf and APAC NOCs control the world's lowest-cost barrels at national-infrastructure scale. Winning across Aramco, Pertamina, PTTEP, Inpex, and Gulf sovereigns requires deployment capability no other hyperscaler can match.",
  O4: "≥30% partner-originated pipeline is the multiplier on Google's direct sales force. Without it, the market coverage model breaks , there are not enough direct sellers for 300+ global operators.",
  O5: "The Alphabet advantage is the one thing AWS and Azure cannot replicate. Not embedded in live pursuits by Day 90 = brand claim, not commercial differentiator.",
  O6: "Project Interchange, DeepMind Energy Lab, and CCUS Transformation Partnerships are three transformative, Alphabet-only initiatives. Interchange converts Google's power procurement needs into a bilateral partnership engine. DeepMind Energy Lab applies frontier science to energy R&D. CCUS Partnerships position Google as the AI Agentic Platform for the world's largest unplatformed carbon capture consortiums , ExxonMobil, East Coast Cluster (BP/Equinor/TotalEnergies), and Project Greensand (INEOS) , using each win as a wedge into enterprise-wide cloud relationships. Together they make Google the energy industry's indispensable strategic partner.",
};

export default function S08OKR() {
  const [statuses, setStatuses] = useState(
    () => Object.fromEntries(OKRS.flatMap(o => o.krs.map((_, i) => [`${o.id}-${i}`, 'not-started'])))
  );
  const [expandedObj, setExpandedObj] = useState(null);

  const cycle = key => setStatuses(s => ({
    ...s, [key]: STATUS_OPTS[(STATUS_OPTS.indexOf(s[key]) + 1) % STATUS_OPTS.length],
  }));

  const getObjStatus = obj => {
    const vals = obj.krs.map((_, i) => statuses[`${obj.id}-${i}`]);
    if (vals.every(v => v === 'complete')) return 'complete';
    if (vals.some(v => v === 'at-risk'))   return 'at-risk';
    if (vals.some(v => v !== 'not-started')) return 'on-track';
    return 'not-started';
  };

  const pct = obj => {
    const vals = obj.krs.map((_, i) => statuses[`${obj.id}-${i}`]);
    const w = { complete: 1, 'on-track': 0.5, 'at-risk': 0.25, 'not-started': 0 };
    return Math.round((vals.reduce((s, v) => s + w[v], 0) / vals.length) * 100);
  };

  const allStatuses = Object.values(statuses);
  const summary = {
    complete: allStatuses.filter(v => v === 'complete').length,
    onTrack:  allStatuses.filter(v => v === 'on-track').length,
    atRisk:   allStatuses.filter(v => v === 'at-risk').length,
    pending:  allStatuses.filter(v => v === 'not-started').length,
  };

  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">09 · OKR Dashboard</div>
        <h1 className="section-title">Day-90 OKR Scorecard</h1>
        <p className="section-desc">
          Six objectives, 23 key results. Click any KR status pill to cycle: Not Started → On Track → At Risk → Complete.
          Click an objective heading to expand its strategic rationale. This scorecard drives the weekly Deal &amp; Product Council and the Day-90 board review.
        </p>
      </div>

      {/* Summary strip */}
      <div className="grid-4 mb-24">
        <div className="stat-chip"><div className="stat-value" style={{ color: 'var(--google-blue)' }}>{summary.complete}</div><div className="stat-label">Complete</div></div>
        <div className="stat-chip"><div className="stat-value" style={{ color: 'var(--green)' }}>{summary.onTrack}</div><div className="stat-label">On Track</div></div>
        <div className="stat-chip"><div className="stat-value" style={{ color: 'var(--amber)' }}>{summary.atRisk}</div><div className="stat-label">At Risk</div></div>
        <div className="stat-chip"><div className="stat-value" style={{ color: 'var(--text-muted)' }}>{summary.pending}</div><div className="stat-label">Not Started</div></div>
      </div>

      {/* OKR grid , 2 columns */}
      <div className="grid-2" style={{ gap: '14px', alignItems: 'start' }}>
        {OKRS.map(obj => {
          const objStatus = getObjStatus(obj);
          const p = pct(obj);
          const isExpanded = expandedObj === obj.id;
          return (
            <div key={obj.id} className="okr-card">
              <div
                className="okr-header"
                style={{ cursor: 'pointer' }}
                onClick={() => setExpandedObj(isExpanded ? null : obj.id)}
              >
                <div className="okr-num">{obj.id}</div>
                <div className="okr-title">{obj.title}</div>
                <span className={`pill ${STATUS_META[objStatus].cls}`}>{STATUS_META[objStatus].label}</span>
              </div>
              {isExpanded && (
                <div style={{
                  padding: '0 18px 12px', fontSize: '12.5px', color: 'var(--text-secondary)',
                  borderBottom: '1px solid var(--border)', lineHeight: '1.6', animation: 'fadeSlideIn 0.2s ease',
                }}>
                  <strong style={{ color: 'var(--google-blue)' }}>Why this matters: </strong>
                  {OKR_CONTEXT[obj.id]}
                </div>
              )}
              <div style={{ padding: '8px 18px 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>KR completion weight</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'Roboto Mono, monospace' }}>{p}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${objStatus === 'at-risk' ? 'amber' : objStatus === 'complete' ? 'green' : 'blue'}`}
                    style={{ width: `${p}%` }}
                  />
                </div>
              </div>
              <div className="okr-krs">
                {obj.krs.map((kr, i) => {
                  const key = `${obj.id}-${i}`;
                  const s = statuses[key];
                  return (
                    <div key={i} className="kr-row">
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--text-muted)', fontSize: '11px', marginTop: '1px', minWidth: '18px', fontFamily: 'Roboto Mono, monospace' }}>KR{i + 1}</span>
                        <span style={{ lineHeight: '1.5' }}>{kr.text}</span>
                      </div>
                      <span
                        className={`pill ${STATUS_META[s].cls}`}
                        style={{ cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}
                        onClick={() => cycle(key)}
                        title="Click to cycle"
                      >
                        {STATUS_META[s].label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="highlight-block mt-24">
        <strong style={{ color: 'var(--google-blue)' }}>Governance cadence:</strong> Review weekly in the Global O&amp;G Deal &amp; Product Council. Any KR At Risk for two consecutive weeks must be escalated as a formal blocker with a named remediation owner. The Day-90 board review will use this scorecard as the primary governance instrument for the FY27 plan discussion.
      </div>
    </div>
  );
}
