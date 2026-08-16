import React, { useState } from 'react';
import { ACCOUNTS, WEDGE_STEPS, POSTURE_TRADE_OFFS } from '../data';


const TIER_LABELS = {
  '1A': 'Tier 1A · Public Independents (Lead & Wedge Postures)',
  '1B': 'Tier 1B · PE-Backed Sponsors (Platform Multiplier)',
  '1C': 'Tier 1C · Large Privates (Data-Ready Independents)',
  '2': 'Tier 2 · Gulf & APAC NOCs (Sovereign Deployment)',
  '3': 'Tier 3 · Affinity Majors & Global Scale (Reciprocity)',
  '4': 'Tier 4 · Midstream & Infrastructure',
  'F': 'Fortress Accounts (Co-Existence Wedge Doctrine)',
};
const POSTURE_COLOR = {
  Lead: 'var(--green)',
  'Co-Exist': 'var(--google-blue)',
  Wedge: 'var(--amber)',
  'Win-Back': 'var(--amber)',
  Cede: 'var(--text-muted)',
};

function AccountRow({ a }) {
  const score = a.dataReady ? (a.tv + a.sponsor + a.friction + a.repeat) : null;
  return (
    <tr>
      <td><strong>{a.name}</strong></td>
      <td><span className="tag">{a.tier}</span></td>
      <td><span className={`pill ${a.priority === 'P1' ? 'pill-green' : a.priority === 'P2' ? 'pill-blue' : 'pill-muted'}`}>{a.priority}</span></td>
      <td>
        {!a.dataReady
          ? <span className="pill pill-red">⛔ Data Gate Fail , Accelerator Required</span>
          : <span className="pill pill-green">{score} / 100</span>}
      </td>
      <td style={{ color: POSTURE_COLOR[a.posture] || 'var(--text-muted)', fontWeight: 600, fontSize: '12px' }}>{a.posture}</td>
      <td><span className="tag">{a.incumbent || ','}</span></td>
    </tr>
  );
}

const SCORING_CRITERIA = [
  { label: 'Time to Value', weight: '30%', detail: 'Weeks to first production-quality output; shorter cycle = higher score' },
  { label: 'Exec Sponsorship', weight: '30%', detail: 'Named C-suite or SVP champion with authority to fund and expand' },
  { label: 'Low Cloud Friction', weight: '25%', detail: 'No long-term AWS/Azure contract lock; procurement flexibility' },
  { label: 'Repeatability', weight: '15%', detail: 'How many similar operators can this pattern replicate to?' },
];

export default function S02Offense() {
  const [activeStep, setActiveStep] = useState(0);
  const tiers = [...new Set(ACCOUNTS.map(a => a.tier))];

  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">02 · Customer Strategy</div>
        <h1 className="section-title">Market Offense &amp; Named-Account Scorecard</h1>
        <p className="section-desc">
          A scored, four-tier named-account attack. Every account is prioritized by a composite score across
          four dimensions , but data readiness is a binary gate that must be cleared before any pilot begins.
          Accounts that fail enter a paid Data Readiness Accelerator Track (Gemini Document AI + GSI sprint)
          to unlock them. This prevents under-resourced pilots that damage the brand.
        </p>
      </div>

      {/* Scoring Criteria */}
      <div className="section-eyebrow mb-16">Account Scoring Methodology</div>
      <div className="grid-4 mb-8">
        {SCORING_CRITERIA.map(s => (
          <div key={s.label} className="stat-chip">
            <div className="stat-value">{s.weight}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="stack-sm mb-16">
        {SCORING_CRITERIA.map(s => (
          <div key={s.label} className="row gap-8">
            <span style={{ color: 'var(--google-blue)', fontSize: '12px', minWidth: '12px' }}>›</span>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text-secondary)' }}>{s.label}:</strong> {s.detail}
            </span>
          </div>
        ))}
      </div>

      <div className="highlight-block amber mb-24">
        <strong style={{ color: 'var(--amber)' }}>Data Readiness Gate:</strong> Data readiness is a
        pre-qualifying Pass/Fail gate, NOT a 20% scorecard weight. Any account that fails must first complete
        the paid Data Readiness Accelerator Track before pilot engagement. This ensures Google never enters
        a lighthouse engagement with an operator who cannot generate meaningful training signal for the agents.
      </div>

      {/* Account Table */}
      <div className="section-eyebrow mb-16">Named Account Heat Map</div>
      <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: '8px', width: '100%' }}>
        <div className="table-responsive" style={{ marginBottom: 0 }}>
          <table className="data-table" style={{ width: '100%', minWidth: '650px', tableLayout: 'fixed' }}>
            <colgroup>
              <col style={{ width: '22%' }} />
              <col style={{ width: '8%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '28%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '20%' }} />
            </colgroup>
            <thead>
              <tr>
                <th>Account</th><th>Tier</th><th>Priority</th><th>Score / Gate</th><th>Posture</th><th>Incumbent</th>
              </tr>
            </thead>

            <tbody>
              {tiers.map(tier => (
                <React.Fragment key={tier}>
                  <tr>
                    <td colSpan={6} style={{
                      background: 'var(--bg-elevated)', color: 'var(--text-label)',
                      fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.8px',
                      textTransform: 'uppercase', padding: '8px 14px',
                    }}>
                      {TIER_LABELS[tier] || tier}
                    </td>
                  </tr>
                  {ACCOUNTS.filter(a => a.tier === tier).map(a => <AccountRow key={a.id} a={a} />)}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ fontSize: '10.5px', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '24px', paddingLeft: '14px' }}>
        Note: Composite scores are author-estimated based on public signals and industry assessment. They are not derived from Google internal CRM data and should be validated with account teams before use in external presentations.
      </div>


      <div className="highlight-block teal mb-24">
        <strong style={{ color: 'var(--teal)' }}>PE Sponsor-Platform Strategy:</strong> One Quantum Capital Group
        or EnCap-class win unlocks the entire portco fleet. Structure the first agreement as a master framework
        with per-entity activation. Private equity sponsors control data, budget, and exit timeline , they are
        motivated by demonstrable EBITDA impact within 90 days, not multi-year transformation promises.
        Lead with a Gemini data-room diligence module that shows value before the well is spud.
      </div>

      <div className="sep" />

      {/* Wedge Flow */}
      <div className="section-eyebrow mb-8">Co-Existence Wedge Doctrine (Fortress & Wedge Accounts)</div>
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
        Shell, Oxy, Chevron, Equinor, ADNOC, Aker BP, Petronas, ENI, BP, Petrobras, and Williams are deeply
        committed to AWS or Azure. The wedge doctrine avoids a migration conversation entirely , Google
        intelligence runs <em>above</em> existing cloud estates. Click each step to see the implementation
        detail and example accounts.
      </p>

      <div className="wedge-flow mb-16">
        {WEDGE_STEPS.map((step, i) => (
          <div
            key={step.label}
            className={`wedge-step${activeStep === i ? ' active' : ''}`}
            onClick={() => setActiveStep(i)}
          >
            <div className="wedge-step-num">STEP {i + 1}</div>
            <div className="wedge-step-label">{step.label}</div>
            <div className="wedge-step-detail">{step.detail}</div>
          </div>
        ))}
      </div>

      {activeStep !== null && (
        <div className="card mb-16" style={{ animation: 'fadeSlideIn 0.25s ease' }}>
          <div className="card-title mb-8">{WEDGE_STEPS[activeStep].label}</div>
          <div className="stack-sm">
            {WEDGE_STEPS[activeStep].accounts.map(acc => (
              <div key={acc} className="row gap-8">
                <span style={{ color: 'var(--google-blue)', fontSize: '12px' }}>›</span>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{acc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Posture Trade-Offs Table */}
      <div className="section-eyebrow mb-12">Comparative Posture Trade-Offs &amp; Strategic Implications</div>
      <div className="card mb-20" style={{ padding: 0, overflow: 'hidden', width: '100%' }}>
        <div className="table-responsive" style={{ marginBottom: 0 }}>
          <table className="data-table" style={{ width: '100%', minWidth: '700px' }}>
            <thead>
              <tr>
                <th style={{ width: '12%' }}>Posture</th>
                <th style={{ width: '22%' }}>Target Type</th>
                <th style={{ width: '22%' }}>Resource Intensity</th>
                <th style={{ width: '16%' }}>Time-to-Revenue</th>
                <th style={{ width: '28%' }}>Strategic Risk if Misdiagnosed</th>
              </tr>
            </thead>
            <tbody>
              {POSTURE_TRADE_OFFS.map((p, idx) => (
                <tr key={idx}>
                  <td>
                    <span className={`pill pill-${p.color}`}>{p.posture}</span>
                  </td>
                  <td style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {p.targetType}
                  </td>
                  <td style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {p.resourceIntensity}
                  </td>
                  <td style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {p.timeToRevenue}
                  </td>
                  <td style={{ fontSize: '12px', color: 'var(--red)', background: 'rgba(234, 67, 53, 0.03)' }}>
                    {p.strategicRisk}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="highlight-block mt-16">
        <strong style={{ color: 'var(--google-blue)' }}>Counter-move against AWS:</strong> When AWS discounts
        in a Tier 1A independent, lead with an outcome-priced pilot anchored to a KPI AWS cannot match ,
        NPT reduction, interpretations per day, or production cycle time. AWS charges for compute; Google
        charges for results. When Azure deepens ADME at a fortress account: "Your OSDU investment is safe.
        We make it think."
      </div>
    </div>
  );
}

