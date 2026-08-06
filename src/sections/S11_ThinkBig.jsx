import { useState } from 'react';
import {
  THINK_BIG_INITIATIVES,
  DEEPMIND_RESEARCH_VERTICALS,
  DEEPMIND_LAB_TIERS,
  THINK_BIG_TIMELINE,
} from '../data';

const COLOR_MAP = {
  amber: 'var(--amber)',
  purple: 'var(--purple)',
  blue: 'var(--google-blue)',
  teal: 'var(--teal)',
  green: 'var(--green)',
  red: 'var(--red)',
};

function InterchangeSection({ data }) {
  const cs = data.commercialStructure;
  return (
    <div className="flex-col" style={{ gap: '16px' }}>
      {/* Thesis */}
      <div className="highlight-block amber">
        <strong style={{ color: 'var(--amber)', display: 'block', marginBottom: '6px' }}>
          The Strategic Insight
        </strong>
        {data.thesis}
      </div>

      {/* Mechanism */}
      <div className="card" style={{ borderColor: 'var(--amber)', boxShadow: '0 0 0 1px rgba(251,188,4,0.25)' }}>
        <div className="card-title mb-8" style={{ fontSize: '15px' }}>
          ⚡ How It Works
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
          {data.mechanism}
        </div>
        <div style={{
          marginTop: '12px', padding: '8px 12px',
          background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)',
          fontSize: '11.5px', color: 'var(--amber)',
        }}>
          <strong>Positioning:</strong> {data.positioning}
        </div>
      </div>

      {/* Why Only Google , competitive moat */}
      <div className="section-eyebrow mb-8">Competitive Moat , Why Only Google Can Do This</div>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="table-responsive" style={{ marginBottom: 0 }}>
          <table className="data-table" style={{ minWidth: '500px' }}>
            <thead>
              <tr>
                <th>Dimension</th>
                <th style={{ color: 'var(--google-blue)' }}>Google / Alphabet</th>
                <th style={{ color: 'var(--red)' }}>AWS / Azure</th>
              </tr>
            </thead>
            <tbody>
              {data.onlyGoogle.map(row => (
                <tr key={row.dimension}>
                  <td><strong>{row.dimension}</strong></td>
                  <td style={{ fontSize: '12px', color: 'var(--green)' }}>{row.google}</td>
                  <td style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Target Accounts */}
      <div className="section-eyebrow mb-8">Interchange Target Accounts</div>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="table-responsive" style={{ marginBottom: 0 }}>
          <table className="data-table" style={{ minWidth: '600px' }}>
            <thead>
              <tr>
                <th>Account</th>
                <th>Power Asset</th>
                <th>Google Need</th>
                <th>Interchange Play</th>
              </tr>
            </thead>
            <tbody>
              {data.targetAccounts.map(a => (
                <tr key={a.name}>
                  <td><strong>{a.name}</strong></td>
                  <td style={{ fontSize: '12px' }}>{a.powerAsset}</td>
                  <td style={{ fontSize: '12px', color: 'var(--google-blue)' }}>{a.googleNeed}</td>
                  <td style={{ fontSize: '12px', color: 'var(--green)' }}>{a.play}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Commercial Structure */}
      <div className="section-eyebrow mb-8">Bilateral Commercial Structure</div>
      <div className="grid-2" style={{ gap: '14px' }}>
        <div className="card" style={{ borderColor: 'var(--teal)' }}>
          <div className="card-title mb-8" style={{ color: 'var(--teal)', fontSize: '14px' }}>
            Energy Operator Provides
          </div>
          {cs.operatorGives.map(item => (
            <div key={item} className="row gap-8 mt-8">
              <span style={{ color: 'var(--teal)', fontSize: '12px' }}>→</span>
              <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
          <div style={{ marginTop: '16px', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Value Received</div>
            {cs.operatorValue.map(item => (
              <div key={item} className="row gap-8 mt-4">
                <span style={{ color: 'var(--green)', fontSize: '12px' }}>✓</span>
                <span style={{ fontSize: '12px', color: 'var(--green)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card" style={{ borderColor: 'var(--google-blue)' }}>
          <div className="card-title mb-8" style={{ color: 'var(--google-blue)', fontSize: '14px' }}>
            Google / Alphabet Provides
          </div>
          {cs.googleGives.map(item => (
            <div key={item} className="row gap-8 mt-8">
              <span style={{ color: 'var(--google-blue)', fontSize: '12px' }}>→</span>
              <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
          <div style={{ marginTop: '16px', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Value Received</div>
            {cs.googleValue.map(item => (
              <div key={item} className="row gap-8 mt-4">
                <span style={{ color: 'var(--amber)', fontSize: '12px' }}>✓</span>
                <span style={{ fontSize: '12px', color: 'var(--amber)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeepMindLabSection({ data }) {
  const [activeVertical, setActiveVertical] = useState('molecular');
  const activeV = DEEPMIND_RESEARCH_VERTICALS.find(v => v.id === activeVertical);

  return (
    <div className="flex-col" style={{ gap: '16px' }}>
      {/* Thesis */}
      <div className="highlight-block" style={{ borderLeftColor: 'var(--purple)' }}>
        <strong style={{ color: 'var(--purple)', display: 'block', marginBottom: '6px' }}>
          The Strategic Insight
        </strong>
        {data.thesis}
      </div>

      {/* Mechanism */}
      <div className="card" style={{ borderColor: 'var(--purple)', boxShadow: '0 0 0 1px rgba(161,66,244,0.2)' }}>
        <div className="card-title mb-8" style={{ fontSize: '15px' }}>
          🧬 How It Works
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
          {data.mechanism}
        </div>
        <div style={{
          marginTop: '12px', padding: '8px 12px',
          background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)',
          fontSize: '11.5px', color: 'var(--purple)',
        }}>
          <strong>Positioning:</strong> {data.positioning}
        </div>
      </div>

      {/* Competitive Moat */}
      <div className="section-eyebrow mb-8">Competitive Moat , No Competitor Can Replicate</div>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="table-responsive" style={{ marginBottom: 0 }}>
          <table className="data-table" style={{ minWidth: '500px' }}>
            <thead>
              <tr>
                <th>Capability</th>
                <th style={{ color: 'var(--purple)' }}>Google DeepMind</th>
                <th style={{ color: 'var(--red)' }}>AWS / Azure</th>
              </tr>
            </thead>
            <tbody>
              {data.onlyGoogle.map(row => (
                <tr key={row.dimension}>
                  <td><strong>{row.dimension}</strong></td>
                  <td style={{ fontSize: '12px', color: 'var(--green)' }}>{row.google}</td>
                  <td style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Research Verticals , tabbed interface */}
      <div className="section-eyebrow mb-8">Research Verticals</div>
      <div className="row gap-8 mb-16" style={{ flexWrap: 'wrap' }}>
        {DEEPMIND_RESEARCH_VERTICALS.map(v => (
          <button
            key={v.id}
            onClick={() => setActiveVertical(v.id)}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              border: activeVertical === v.id ? `2px solid ${COLOR_MAP[v.color]}` : '1px solid var(--border)',
              background: activeVertical === v.id ? 'var(--bg-elevated)' : 'transparent',
              color: activeVertical === v.id ? COLOR_MAP[v.color] : 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '12.5px',
              fontWeight: activeVertical === v.id ? 600 : 400,
              transition: 'all 0.2s ease',
            }}
          >
            {v.icon} {v.title}
          </button>
        ))}
      </div>

      {activeV && (
        <div className="card" style={{ borderColor: COLOR_MAP[activeV.color] }}>
          <div className="row gap-10 mb-8">
            <span style={{ fontSize: '22px' }}>{activeV.icon}</span>
            <div>
              <div className="card-title" style={{ margin: 0, color: COLOR_MAP[activeV.color] }}>{activeV.title}</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{activeV.tools}</div>
            </div>
          </div>
          <div style={{ overflow: 'auto' }}>
            <table className="data-table" style={{ minWidth: '600px' }}>
              <thead>
                <tr>
                  <th>Problem</th>
                  <th>Current State</th>
                  <th>DeepMind Approach</th>
                  <th>Target Accounts</th>
                </tr>
              </thead>
              <tbody>
                {activeV.problems.map(p => (
                  <tr key={p.problem}>
                    <td><strong>{p.problem}</strong></td>
                    <td style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{p.current}</td>
                    <td style={{ fontSize: '12px', color: 'var(--green)' }}>{p.approach}</td>
                    <td style={{ fontSize: '11.5px', color: 'var(--text-secondary)' }}>{p.targets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Program Tiers */}
      <div className="section-eyebrow mb-8">Program Structure , Three Engagement Tiers</div>
      <div className="grid-3" style={{ gap: '14px' }}>
        {DEEPMIND_LAB_TIERS.map(tier => (
          <div key={tier.tier} className="card" style={{ borderColor: COLOR_MAP[tier.color], display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="row gap-8">
              <span style={{ fontSize: '20px' }}>{tier.icon}</span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: COLOR_MAP[tier.color] }}>{tier.tier}: {tier.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{tier.count}</div>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.55', flex: 1 }}>
              {tier.offering}
            </div>
            <div style={{
              fontSize: '11px', borderTop: '1px solid var(--border)',
              paddingTop: '8px', color: 'var(--text-muted)',
            }}>
              <strong style={{ color: COLOR_MAP[tier.color] }}>Targets:</strong> {tier.targets}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CCUSSection({ data }) {
  const cs = data.commercialStructure;
  return (
    <div className="flex-col" style={{ gap: '16px' }}>
      {/* Dedicated CCUS Strategy PDF Executive Briefing Banner */}
      <div className="card" style={{
        borderColor: 'var(--teal)',
        background: 'linear-gradient(135deg, rgba(0,150,136,0.12) 0%, rgba(0,150,136,0.03) 100%)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        flexWrap: 'wrap',
        gap: '14px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ fontSize: '28px', lineHeight: 1 }}>📄</span>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--teal)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Dedicated CCUS Executive Strategy Briefing</span>
              <span className="badge teal" style={{ fontSize: '10px', padding: '2px 6px' }}>Standalone PDF</span>
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '3px', lineHeight: '1.4' }}>
              Download the complete 7-page strategy briefing covering Earth Engine, MethaneSAT, Delfi integration, consortium deal models & 90-day plan.
            </div>
          </div>
        </div>
        <a
          href="/google_cloud_ccus_think_big_strategy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            background: 'var(--teal)',
            color: '#ffffff',
            borderRadius: 'var(--radius-sm)',
            fontSize: '13px',
            fontWeight: 600,
            textDecoration: 'none',
            boxShadow: '0 2px 10px rgba(0,150,136,0.3)',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
          }}
        >
          <span>Open Strategy PDF</span>
          <span style={{ fontSize: '14px' }}>↗</span>
        </a>
      </div>

      {/* Thesis */}
      <div className="highlight-block" style={{ borderLeftColor: 'var(--teal)' }}>
        <strong style={{ color: 'var(--teal)', display: 'block', marginBottom: '6px' }}>
          The Strategic Insight
        </strong>
        {data.thesis}
      </div>

      {/* Mechanism */}
      <div className="card" style={{ borderColor: 'var(--teal)', boxShadow: '0 0 0 1px rgba(0,150,136,0.2)' }}>
        <div className="card-title mb-8" style={{ fontSize: '15px' }}>
          🌍 How It Works
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
          {data.mechanism}
        </div>
        <div style={{
          marginTop: '12px', padding: '8px 12px',
          background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)',
          fontSize: '11.5px', color: 'var(--teal)',
        }}>
          <strong>Positioning:</strong> {data.positioning}
        </div>
      </div>

      {/* Why Only Google , competitive moat */}
      <div className="section-eyebrow mb-8">Competitive Moat , Why Only Google Can Do This</div>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="table-responsive" style={{ marginBottom: 0 }}>
          <table className="data-table" style={{ minWidth: '500px' }}>
            <thead>
              <tr>
                <th>Dimension</th>
                <th style={{ color: 'var(--teal)' }}>Google / Alphabet</th>
                <th style={{ color: 'var(--red)' }}>AWS / Azure</th>
              </tr>
            </thead>
            <tbody>
              {data.onlyGoogle.map(row => (
                <tr key={row.dimension}>
                  <td><strong>{row.dimension}</strong></td>
                  <td style={{ fontSize: '12px', color: 'var(--green)' }}>{row.google}</td>
                  <td style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Target Consortium Accounts */}
      <div className="section-eyebrow mb-8">Target CCUS Consortiums</div>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="table-responsive" style={{ marginBottom: 0 }}>
          <table className="data-table" style={{ minWidth: '600px' }}>
            <thead>
              <tr>
                <th>Consortium</th>
                <th>Scale & Infrastructure</th>
                <th>Google Need / Gap</th>
                <th>CCUS Platform Play</th>
              </tr>
            </thead>
            <tbody>
              {data.targetAccounts.map(a => (
                <tr key={a.name}>
                  <td><strong>{a.name}</strong></td>
                  <td style={{ fontSize: '12px' }}>{a.powerAsset}</td>
                  <td style={{ fontSize: '12px', color: 'var(--teal)' }}>{a.googleNeed}</td>
                  <td style={{ fontSize: '12px', color: 'var(--green)' }}>{a.play}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Commercial Structure */}
      <div className="section-eyebrow mb-8">CCUS Consortium Commercial Structure</div>
      <div className="grid-2" style={{ gap: '14px' }}>
        <div className="card" style={{ borderColor: 'var(--teal)' }}>
          <div className="card-title mb-8" style={{ color: 'var(--teal)', fontSize: '14px' }}>
            Consortium Operator Provides
          </div>
          {cs.operatorGives.map(item => (
            <div key={item} className="row gap-8 mt-8">
              <span style={{ color: 'var(--teal)', fontSize: '12px' }}>→</span>
              <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
          <div style={{ marginTop: '16px', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Value Received</div>
            {cs.operatorValue.map(item => (
              <div key={item} className="row gap-8 mt-4">
                <span style={{ color: 'var(--green)', fontSize: '12px' }}>✓</span>
                <span style={{ fontSize: '12px', color: 'var(--green)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card" style={{ borderColor: 'var(--google-blue)' }}>
          <div className="card-title mb-8" style={{ color: 'var(--google-blue)', fontSize: '14px' }}>
            Google / Alphabet Provides
          </div>
          {cs.googleGives.map(item => (
            <div key={item} className="row gap-8 mt-8">
              <span style={{ color: 'var(--google-blue)', fontSize: '12px' }}>→</span>
              <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
          <div style={{ marginTop: '16px', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Value Received</div>
            {cs.googleValue.map(item => (
              <div key={item} className="row gap-8 mt-4">
                <span style={{ color: 'var(--amber)', fontSize: '12px' }}>✓</span>
                <span style={{ fontSize: '12px', color: 'var(--amber)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Land & Expand Trojan Horse */}
      <div className="section-eyebrow mb-8">Land-and-Expand Strategy , CCUS as Trojan Horse for Enterprise Cloud</div>
      <div className="card" style={{ borderColor: 'var(--teal)', background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-elevated) 100%)' }}>
        <div className="grid-2" style={{ gap: '16px' }}>
          {[
            { win: 'ExxonMobil Gulf Coast CCS Hub', expand: '→ ExxonMobil Upstream E&P + Refining + Chemical', color: 'var(--amber)' },
            { win: 'East Coast Cluster', expand: '→ BP Global + Equinor Offshore + TotalEnergies Global', color: 'var(--google-blue)' },
            { win: 'Project Greensand', expand: '→ INEOS Petrochemicals + Refining + Manufacturing', color: 'var(--green)' },
          ].map(item => (
            <div key={item.win} className="row gap-8" style={{ padding: '8px 12px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-elevated)' }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: item.color }}>{item.win}</div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '2px' }}>{item.expand}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function S11ThinkBig() {
  const [activeTab, setActiveTab] = useState('interchange');
  const { initiatives } = THINK_BIG_INITIATIVES;
  const interchange = initiatives[0];
  const deepmindLab = initiatives[1];
  const ccusPartnerships = initiatives[2];

  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">11 · THINK BIG</div>
        <h1 className="section-title">Transformative Alphabet-Only Energy Initiatives</h1>
        <p className="section-desc">
          {THINK_BIG_INITIATIVES.headline}
        </p>
      </div>

      {/* Initiative Selector */}
      <div className="grid-3 mb-24" style={{ gap: '16px' }}>
        {[interchange, deepmindLab, ccusPartnerships].map(init => (
          <div
            key={init.id}
            className="card"
            onClick={() => setActiveTab(init.id)}
            style={{
              cursor: 'pointer',
              borderColor: activeTab === init.id ? COLOR_MAP[init.color] : 'var(--border)',
              boxShadow: activeTab === init.id ? `0 0 0 1px ${COLOR_MAP[init.color]}40, 0 4px 16px ${COLOR_MAP[init.color]}15` : 'var(--shadow-card)',
              transition: 'all 0.3s ease',
              transform: activeTab === init.id ? 'translateY(-2px)' : 'none',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
              <span style={{ fontSize: '26px', lineHeight: 1, flexShrink: 0, marginTop: '2px' }}>{init.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: COLOR_MAP[init.color], lineHeight: 1.25 }}>{init.title}</div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '3px', lineHeight: 1.35 }}>{init.subtitle}</div>
              </div>
            </div>
            <div style={{
              fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.5',
              display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
              marginTop: 'auto',
            }}>
              {init.thesis.substring(0, 180)}…
            </div>
            {init.id === 'ccus-partnerships' && (
              <div style={{ marginTop: '12px', paddingTop: '8px', borderTop: '1px solid rgba(0,150,136,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', color: 'var(--teal)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>📄 Standalone Executive Strategy PDF</span>
                </span>
                <a
                  href="/google_cloud_ccus_think_big_strategy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ fontSize: '11.5px', color: 'var(--teal)', fontWeight: 600, textDecoration: 'underline' }}
                >
                  Download ↗
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Active Initiative Detail */}
      {activeTab === 'interchange' && <InterchangeSection data={interchange} />}
      {activeTab === 'deepmind-lab' && <DeepMindLabSection data={deepmindLab} />}
      {activeTab === 'ccus-partnerships' && <CCUSSection data={ccusPartnerships} />}

      {/* Shared Timeline */}
      <div style={{ marginTop: '32px' }}>
        <div className="section-eyebrow mb-8">Integration Timeline , All Three Initiatives</div>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="table-responsive" style={{ marginBottom: 0 }}>
            <table className="data-table" style={{ minWidth: '800px' }}>
              <thead>
                <tr>
                  <th>Phase</th>
                  <th style={{ color: 'var(--amber)' }}>⚡ Project Interchange</th>
                  <th style={{ color: 'var(--purple)' }}>🧬 DeepMind Energy Lab</th>
                  <th style={{ color: 'var(--teal)' }}>🌍 CCUS Partnerships</th>
                </tr>
              </thead>
              <tbody>
                {THINK_BIG_TIMELINE.map(row => (
                  <tr key={row.phase}>
                    <td><strong>{row.phase}</strong></td>
                    <td style={{ fontSize: '12px' }}>{row.interchange}</td>
                    <td style={{ fontSize: '12px' }}>{row.deepmind}</td>
                    <td style={{ fontSize: '12px' }}>{row.ccus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Transformative Callout */}
      <div className="card mt-24" style={{
        borderColor: 'var(--google-blue)',
        boxShadow: 'var(--shadow-glow-blue)',
        background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-elevated) 100%)',
      }}>
        <div className="grid-2" style={{ gap: '24px', alignItems: 'center' }}>
          <div>
            <div className="card-title mb-8" style={{ fontSize: '15px', color: 'var(--google-blue)' }}>
              Why These Ideas Are Unreplicable
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Project Interchange</strong> works because Google is
              simultaneously the world's largest AI company and an industrial-scale power buyer.{' '}
              <strong style={{ color: 'var(--text-primary)' }}>DeepMind Energy Lab</strong> works because Google owns
              the only frontier science engine that can solve molecular and physics problems blocking the energy transition.{' '}
              <strong style={{ color: 'var(--text-primary)' }}>CCUS Transformation Partnerships</strong> works because
              Google's differentiated stack , Earth Engine, MethaneSAT, Gemini Agents, SLB Delfi on GCP , is
              the only end-to-end CCUS platform that can serve multi-operator consortiums at global scale.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.65', marginTop: '8px' }}>
              Together, they convert Google from a <em>cloud vendor</em> into the energy industry's{' '}
              <strong style={{ color: 'var(--amber)' }}>indispensable strategic partner</strong> , creating
              relationships that are generational, not transactional.
            </p>
          </div>
          <div className="flex-col" style={{ gap: '12px' }}>
            {[
              { label: 'Pillar 4 · Alphabet Advantage', detail: 'DeepMind Energy Lab elevates from module to platform', color: 'var(--purple)' },
              { label: 'Pillar 5 · Energy Exchange', detail: 'Project Interchange formalizes into bilateral OS', color: 'var(--amber)' },
              { label: 'Pillar 6 · CCUS Partnerships', detail: 'AI Agentic Platform for ExxonMobil, East Coast Cluster, Greensand', color: 'var(--teal)' },
              { label: 'ADIPEC 2026', detail: 'All three announced as marquee reveals', color: 'var(--google-blue)' },
              { label: 'CERAWeek 2027', detail: 'Scale from pilot to portfolio-wide', color: 'var(--green)' },
            ].map(item => (
              <div key={item.label} className="row gap-8">
                <span style={{ color: item.color, fontSize: '14px', minWidth: '12px' }}>▸</span>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: item.color }}>{item.label}</div>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
