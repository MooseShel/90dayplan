const EXCHANGES = [
  { asset: 'Gas, generation & grid access', accounts: 'EQT, Expand, Williams, midstream', googleNeed: 'Firm, scalable electricity for AI infrastructure; anchor demand; AI-optimized data-center operations', joint: 'Long-term demand plus AI-optimized generation, cooling, and reliability — a new revenue line with Google on both sides' },
  { asset: 'Drilling & subsurface expertise', accounts: 'Devon-Fervo, Chevron, Oxy', googleNeed: 'Geothermal and CCS development capability; Google\'s Fervo/Ormat blueprints and geoscience AI', joint: 'New growth platforms built on existing industrial strengths, with Google as reference architect and offtaker' },
  { asset: 'Industrial equipment & operating data', accounts: 'Baker Hughes, SLB, operators', googleNeed: 'Power, cooling, and reliability optimization for the data-center fleet; Gemini agents on OT data', joint: 'Higher asset availability and lower energy intensity — sold to the fastest-growing industrial customer on earth' },
  { asset: 'National infrastructure mandates', accounts: 'Aramco, KOC, QatarEnergy', googleNeed: 'Sovereign AI, local digital capability, grid-planning intelligence (Tapestry), and the sovereign trio', joint: 'Economic development, residency, and controlled innovation aligned to national visions (Vision 2030 etc.)' },
];

export default function S06Exchange() {
  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">06 · Energy Exchange</div>
        <h1 className="section-title">Energy-for-Intelligence Exchange</h1>
        <p className="section-desc">
          Energy companies help Google solve firm-power and infrastructure challenges; Google helps energy
          companies become AI-native operators. This raises the conversation from IT procurement to
          CEO-level capital allocation.
        </p>
      </div>

      <div className="highlight-block amber mb-24">
        <strong style={{color:'var(--amber)'}}>Legal Decoupling (Refined):</strong> Energy off-take agreements (PPAs, geothermal, nuclear) and
        Google Cloud software licensing are structured as wholly separate contracts with independent counterparties
        and procurement processes. No bilateral tie-in language. This satisfies antitrust and regulatory compliance
        at both Google and the operator — particularly in regulated utility markets and public bidding environments.
      </div>

      <div className="section-eyebrow mb-16">Exchange Framework</div>
      <div className="table-responsive">
        <div className="card" style={{padding:0,overflow:'hidden',marginBottom:'24px'}}>
          <table className="data-table" style={{ minWidth: '550px' }}>
            <thead>
              <tr>
                <th>Customer Asset</th>
                <th>Accounts</th>
                <th>Google Need / Capability</th>
                <th>Joint Value Created</th>
              </tr>
            </thead>
            <tbody>
              {EXCHANGES.map(e => (
                <tr key={e.asset}>
                  <td><strong>{e.asset}</strong></td>
                  <td><span style={{fontSize:'11.5px',color:'var(--text-muted)'}}>{e.accounts}</span></td>
                  <td style={{fontSize:'12px'}}>{e.googleNeed}</td>
                  <td style={{fontSize:'12px',color:'var(--green)'}}>{e.joint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-title mb-8">Google's Energy Procurement Portfolio</div>
          {[
            'Kairos Power SMRs (advanced nuclear by 2030)',
            '1.8 GW Elementl nuclear program',
            'Fervo ~115 MW enhanced geothermal (Nevada)',
            'Ormat 150 MW additional geothermal PPA',
            'Form Energy 100-hour iron-air storage',
            'TotalEnergies GW-scale solar PPAs (TX, OH, Malaysia)',
            'ERCOT co-located renewables + compute campuses',
          ].map(item => (
            <div key={item} className="row gap-8 mt-8">
              <span style={{color:'var(--green)',fontSize:'12px'}}>›</span>
              <span style={{fontSize:'12.5px',color:'var(--text-secondary)'}}>{item}</span>
            </div>
          ))}
        </div>
        <div className="card">
          <div className="card-title mb-8">Two-Badge Meeting No Competitor Can Convene</div>
          <div style={{fontSize:'13px',color:'var(--text-secondary)',lineHeight:'1.65'}}>
            Google energy-procurement leaders join operator executive sessions alongside Google Cloud AI teams.
            The result is a conversation that spans both sides of the energy-compute equation — simultaneously
            as an <strong style={{color:'var(--text-primary)'}}>AI platform provider</strong> and as a <strong style={{color:'var(--text-primary)'}}>firm-power anchor customer</strong>.
            AWS and Azure cannot convene this meeting.
          </div>
          <div className="highlight-block teal mt-16" style={{fontSize:'12px'}}>
            CERAWeek 2027 (Houston, Mar 8–12): Primary venue for CEO-level Exchange dialogues.
            Houston audience (operators, PE, service companies) is the natural constituency for
            this conversation.
          </div>
        </div>
      </div>
    </div>
  );
}
