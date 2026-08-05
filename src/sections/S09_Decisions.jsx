import { useState } from 'react';
import { EXECUTIVE_DECISIONS } from '../data';

const STATUS_OPTS = ['pending', 'in-progress', 'decided', 'blocked'];
const STATUS_META = {
  pending:      { label: 'Pending',      cls: 'pill-muted'  },
  'in-progress':{ label: 'In Progress',  cls: 'pill-blue'   },
  decided:      { label: 'Decided',      cls: 'pill-green'  },
  blocked:      { label: 'Blocked',      cls: 'pill-amber'  },
};

const STALL_RISK = [
  { decision: 1, stalls: 'Account planning, resource allocation, co-sell motion with partners' },
  { decision: 2, stalls: 'ADIPEC demo build, ISV joint architecture, product roadmap influence' },
  { decision: 3, stalls: 'Any fortress-account conversation , sellers cannot position what is not sanctioned' },
  { decision: 4, stalls: 'Aramco/KOC/QatarEnergy/Pertamina/PTTEP/Inpex engagement , NOCs will not proceed without a unified sovereign story' },
  { decision: 5, stalls: 'ISV joint business plans (Cognite, SLB, Baker Hughes, Kongsberg, AspenTech), GSI training, partner pipeline targets' },
  { decision: 6, stalls: 'ADIPEC content team, demo engineering, customer approval workflows for both events' },
  { decision: 7, stalls: 'Foundation Model co-development with ISVs, Vertex AI pre-training pipeline, IP framework negotiations' },
  { decision: 8, stalls: 'Startup cohort onboarding, GCP credits and Vertex AI grants allocation, Marketplace listing, HUMAIN AI sovereign enablement on Dammam me-central2' },
  { decision: 9, stalls: 'Project Interchange bilateral MOU, EQT/Pertamina pilot scoping, Google Energy Procurement alignment, ADIPEC Interchange announcement' },
  { decision: 10, stalls: 'DeepMind Energy Lab research partnerships, GNoME/AlphaFold pilot scoping, ADIPEC DeepMind announcement, academic advisory board constitution' },
];

export default function S09Decisions() {
  const [statuses, setStatuses] = useState(EXECUTIVE_DECISIONS.map(() => 'pending'));
  const [owners, setOwners]     = useState(EXECUTIVE_DECISIONS.map(() => ''));
  const [dates, setDates]       = useState(EXECUTIVE_DECISIONS.map(() => ''));

  const cycle = i => setStatuses(s => s.map((v, idx) => idx === i ? STATUS_OPTS[(STATUS_OPTS.indexOf(v) + 1) % STATUS_OPTS.length] : v));

  const pending  = statuses.filter(s => s === 'pending').length;
  const decided  = statuses.filter(s => s === 'decided').length;
  const inProg   = statuses.filter(s => s === 'in-progress').length;
  const blocked  = statuses.filter(s => s === 'blocked').length;

  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">10 · Governance</div>
        <h1 className="section-title">Executive Decisions Required , First 30 Days</h1>
        <p className="section-desc">
          Ten decisions that must come from Google Cloud leadership in the first 30 days. These are not
          requests for guidance , they are hard dependencies for specific workstreams. Each decision
          unresolved past Day 30 becomes a named blocker in the weekly Global O&amp;G Deal &amp; Product Council.
          Click status to cycle. Add owner and target date inline.
        </p>
      </div>

      {/* Summary */}
      <div className="grid-4 mb-24">
        <div className="stat-chip">
          <div className="stat-value" style={{ color: 'var(--text-muted)' }}>{pending}</div>
          <div className="stat-label">Pending</div>
        </div>
        <div className="stat-chip">
          <div className="stat-value" style={{ color: 'var(--google-blue)' }}>{inProg}</div>
          <div className="stat-label">In Progress</div>
        </div>
        <div className="stat-chip">
          <div className="stat-value" style={{ color: 'var(--green)' }}>{decided}</div>
          <div className="stat-label">Decided</div>
        </div>
        <div className="stat-chip">
          <div className="stat-value" style={{ color: 'var(--amber)' }}>{blocked}</div>
          <div className="stat-label">Blocked</div>
        </div>
      </div>

      {pending > 0 && (
        <div className="highlight-block amber mb-24">
          <strong style={{ color: 'var(--amber)' }}>{pending} decision{pending > 1 ? 's' : ''} still pending.</strong>{' '}
          Each pending decision has specific workstreams listed below that will stall without resolution.
          If unresolved by Day 15, escalate to Paula Natoli, Anil Jain, and Raiford Smith.
        </div>
      )}

      {decided === EXECUTIVE_DECISIONS.length && (
        <div className="highlight-block mb-24" style={{ borderLeftColor: 'var(--green)', background: 'rgba(52,168,83,0.07)' }}>
          <strong style={{ color: 'var(--green)' }}>All {EXECUTIVE_DECISIONS.length} decisions resolved.</strong> The 90-day plan is fully
          unblocked. Proceed to Day-30 board review and FY27 planning.
        </div>
      )}

      <div className="decision-list">
        {EXECUTIVE_DECISIONS.map((d, i) => {
          const stall = STALL_RISK.find(s => s.decision === i + 1);
          return (
            <div key={i} className="decision-item" style={{ borderLeftColor: statuses[i] === 'decided' ? 'var(--green)' : statuses[i] === 'blocked' ? 'var(--amber)' : 'var(--border)' }}>
              <div className="decision-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="decision-text">
                <strong>{d.title}</strong>
                {d.detail}
                {stall && (
                  <div style={{ marginTop: '8px', fontSize: '11.5px', color: 'var(--amber)', display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                    <span style={{ minWidth: '14px' }}>⚠</span>
                    <span><strong>Stall risk: </strong>{stall.stalls}</span>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end', minWidth: '130px' }}>
                <span
                  className={`pill ${STATUS_META[statuses[i]].cls}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => cycle(i)}
                  title="Click to cycle status"
                >
                  {STATUS_META[statuses[i]].label}
                </span>
                <input
                  type="text"
                  value={owners[i]}
                  onChange={e => setOwners(o => o.map((v, idx) => idx === i ? e.target.value : v))}
                  placeholder="Owner name"
                  style={{
                    background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)',
                    fontSize: '11px', padding: '4px 8px', width: '126px', outline: 'none',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                />
                <input
                  type="text"
                  value={dates[i]}
                  onChange={e => setDates(d => d.map((v, idx) => idx === i ? e.target.value : v))}
                  placeholder="Target date"
                  style={{
                    background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)',
                    fontSize: '11px', padding: '4px 8px', width: '126px', outline: 'none',
                    fontFamily: 'Roboto Mono, monospace',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="highlight-block mt-24">
        <strong style={{ color: 'var(--google-blue)' }}>Escalation protocol:</strong> Any decision unresolved
        after Day 30 must be logged as a formal blocker in the weekly Global O&amp;G Deal &amp; Product Council
        by the Market Lead Director. Blockers unresolved after Day 45 require a named executive sponsor from
        Paula Natoli's or Anil Jain's leadership team to drive resolution. The Day-90 board review scorecard
        will record which decisions were resolved on time and which caused workstream delays.
      </div>
    </div>
  );
}
