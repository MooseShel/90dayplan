import { ALPHABET_CAPABILITIES, ALPHABET_SOLUTIONS_TRADE_OFFS } from '../data';

export default function S05Alphabet() {
  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">05 · Alphabet Advantage</div>
        <h1 className="section-title">Cross-Alphabet Capability Stack</h1>
        <p className="section-desc">
          No competitor can assemble DeepMind, geospatial, Workspace, Mandiant, Tapestry, and Google's
          own energy-procurement franchise into a single energy proposition. Each capability enters a
          pursuit as a priced module with a named owner and a KPI , never as a brand tour.
        </p>
      </div>

      <div className="grid-2 mb-24" style={{ gap: '16px' }}>
        <div className="highlight-block" style={{ height: '100%', margin: 0 }}>
          "AWS sells energy companies infrastructure. Azure sells them software. Google shows up as a fellow
          builder of the energy system , with the whole of Alphabet behind it , then sells them intelligence."
        </div>
        <div className="highlight-block amber" style={{ height: '100%', margin: 0 }}>
          <strong style={{ color: 'var(--amber)' }}>Alphabet Energy Taskforce (New · Day 1–30):</strong> A dedicated
          coordination body with named contacts from DeepMind, Geospatial, Security/Mandiant, Workspace, and
          Energy Procurement , with pre-allocated budgets that bypass standard divisional P&amp;L negotiations.
          Without this taskforce, Alphabet capabilities remain brand claims, not commercial offers.
        </div>
      </div>

      {/* 3-column capability grid */}
      <div className="section-eyebrow mb-16">Seven Capability Modules , Commercial Plays</div>
      <div className="grid-3 mb-24" style={{ gap: '14px' }}>
        {ALPHABET_CAPABILITIES.map(cap => (
          <div key={cap.name} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="row gap-10 mb-4">
              <span style={{ fontSize: '22px' }}>{cap.icon}</span>
              <span className="card-title" style={{ margin: 0 }}>{cap.name}</span>
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.55', flex: 1 }}>{cap.app}</div>
            <div style={{
              fontSize: '11.5px', borderLeft: '2px solid var(--google-blue)',
              paddingLeft: '10px', color: 'var(--text-muted)',
            }}>
              <strong style={{ color: 'var(--google-blue)', display: 'block', marginBottom: '2px' }}>First 90-Day Play</strong>
              {cap.play}
            </div>
          </div>
        ))}
      </div>

      {/* Two-badge meeting , full width callout */}
      <div className="card mb-24" style={{ borderColor: 'var(--google-blue)', boxShadow: 'var(--shadow-glow-blue)' }}>
        <div className="grid-2" style={{ gap: '32px', alignItems: 'center' }}>
          <div>
            <div className="card-title mb-8" style={{ fontSize: '16px' }}>The Two-Badge Meeting No Competitor Can Convene</div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              Google energy-procurement leaders join operator executive sessions alongside Google Cloud AI teams.
              The conversation spans both sides of the energy-compute equation simultaneously , as an{' '}
              <strong style={{ color: 'var(--text-primary)' }}>AI platform provider</strong> and as a{' '}
              <strong style={{ color: 'var(--text-primary)' }}>firm-power anchor customer</strong>.
              AWS and Azure cannot convene this meeting. They are buyers and sellers of compute, not co-builders
              of energy infrastructure.
            </p>
          </div>
          <div className="stack-sm">
            {[
              'EQT / Expand Energy , power demand + AI surveillance agent dialogue',
              'TotalEnergies , GW-scale solar PPA + Gemini agents on Cognite estate',
              'Baker Hughes , data-center cooling optimization + drilling intelligence',
              'Saudi Aramco , Alphabet stack + sovereign AI + national grid planning',
              'Devon / Fervo , geothermal + clean-power synergy + D&C optimization',
            ].map(item => (
              <div key={item} className="row gap-8">
                <span style={{ color: 'var(--google-blue)', fontSize: '12px', minWidth: '12px' }}>›</span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alphabet Composite vs Standalone Trade-Offs Table */}
      <div className="section-eyebrow mb-12">Comparative Architecture: Hyperscaler Point Solution vs. Alphabet Composite Solution</div>
      <div className="card mb-20" style={{ padding: 0, overflow: 'hidden', width: '100%' }}>
        <div className="table-responsive" style={{ marginBottom: 0 }}>
          <table className="data-table" style={{ width: '100%', minWidth: '700px' }}>
            <thead>
              <tr>
                <th style={{ width: '25%' }}>Solution Model</th>
                <th style={{ width: '22%' }}>Portfolio Breadth</th>
                <th style={{ width: '20%' }}>Defensibility</th>
                <th style={{ width: '15%' }}>Field Risk</th>
                <th style={{ width: '18%' }}>Executive Perception</th>
              </tr>
            </thead>
            <tbody>
              {ALPHABET_SOLUTIONS_TRADE_OFFS.map((sol, idx) => (
                <tr key={idx}>
                  <td>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '12px', marginBottom: '2px' }}>
                      {sol.model.split('(')[0]}
                    </strong>
                    <span className={`pill pill-${sol.color}`} style={{ fontSize: '10px' }}>
                      {sol.model.includes('(') ? sol.model.split('(')[1].replace(')', '') : ''}
                    </span>
                  </td>
                  <td style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {sol.breadth}
                  </td>
                  <td style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {sol.differentiation}
                  </td>
                  <td style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {sol.fieldRisk}
                  </td>
                  <td style={{ fontSize: '12px', color: sol.color === 'green' ? 'var(--green)' : 'var(--amber)', background: sol.color === 'green' ? 'rgba(52, 168, 83, 0.03)' : 'transparent' }}>
                    {sol.buyerImpression}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

