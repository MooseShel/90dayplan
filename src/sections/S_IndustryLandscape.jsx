import React, { useState, useEffect, useRef } from 'react';
import { INDUSTRY_METRICS, INDUSTRY_DRIVERS, DIGITAL_MATURITY, REFERENCES_REGISTRY } from '../data';
import SourceModal from '../components/SourceModal';

/* ── Animated counter ────────────────────────────────────────────── */
function AnimatedValue({ value, duration = 1200 }) {
  const [display, setDisplay] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cleaned = value.replace(/[^0-9.]/g, '');
          const num = parseFloat(cleaned);
          if (isNaN(num)) { setDisplay(value); return; }
          const prefix = value.match(/^[^0-9]*/)?.[0] || '';
          const suffix = value.match(/[^0-9.]*$/)?.[0] || '';
          const steps = 40;
          let i = 0;
          const interval = setInterval(() => {
            i++;
            const progress = i / steps;
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = (num * ease).toFixed(num % 1 ? 1 : 0);
            setDisplay(`${prefix}${current}${suffix}`);
            if (i >= steps) clearInterval(interval);
          }, duration / steps);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display || value}</span>;
}

/* ── Source Link Helper ─────────────────────────────────────────── */
function SourceFootnote({ source, url, refId, htmlPath, onOpenModal }) {
  if (!source) return null;
  return (
    <div className="metric-source" style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
      <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Source:</span>
      {url && url !== '#' ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="source-link">
          {source} <span style={{ fontSize: '0.65rem' }}>↗</span>
        </a>
      ) : (
        <span>{source}</span>
      )}
      {htmlPath && (
        <a
          href={htmlPath}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: 'rgba(56, 189, 248, 0.15)',
            color: '#38bdf8',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: '600',
            textDecoration: 'none',
            border: '1px solid rgba(56, 189, 248, 0.3)'
          }}
          title="Read full offline local HTML source document"
        >
          📄 Read Source Page
        </a>
      )}
      {refId && onOpenModal && (
        <button
          onClick={(e) => { e.stopPropagation(); onOpenModal(refId); }}
          style={{
            backgroundColor: 'rgba(52, 211, 153, 0.15)',
            color: '#34d399',
            border: '1px solid rgba(52, 211, 153, 0.3)',
            borderRadius: '4px',
            padding: '2px 8px',
            fontSize: '0.75rem',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          🔍 View Modal
        </button>
      )}
    </div>
  );
}

/* ── Maturity stages config ──────────────────────────────────────── */
const STAGE_COLORS = {
  Leader: '#34A853',
  'Fast Follower': '#4285F4',
  'Early Adopter': '#FBBC04',
  Nascent: '#EA4335',
};

const STAGE_ORDER = ['Leader', 'Fast Follower', 'Early Adopter', 'Nascent'];

export default function S_IndustryLandscape() {
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [maturityFilter, setMaturityFilter] = useState('All');
  const [activeModalRefId, setActiveModalRefId] = useState(null);

  const filteredMaturity = maturityFilter === 'All'
    ? DIGITAL_MATURITY
    : DIGITAL_MATURITY.filter(d => d.stage === maturityFilter);

  const sortedMaturity = [...filteredMaturity].sort((a, b) => b.score - a.score);

  return (
    <div className="section-container">
      {/* Source Modal */}
      {activeModalRefId && REFERENCES_REGISTRY[activeModalRefId] && (
        <SourceModal
          sourceData={REFERENCES_REGISTRY[activeModalRefId]}
          onClose={() => setActiveModalRefId(null)}
        />
      )}

      <div className="section-header">
        <span className="section-badge">SECTION 01 · INDUSTRY & MARKET CONTEXT</span>
        <h1 className="section-title">Global Oil & Gas Industry Landscape</h1>
        <p className="section-subtitle">
          Market scale, digital spend velocity, AI inflection, and digital maturity across 18 major global operators.
        </p>
      </div>

      {/* ── Market Size Counters ───────────────────────────────────── */}
      <h2 className="subsection-title">Market at a Glance</h2>
      <div className="industry-metrics-grid">
        {INDUSTRY_METRICS.map((m, i) => (
          <div key={i} className="industry-metric-card">
            <div className="industry-metric-card__icon">{m.icon}</div>
            <div className="industry-metric-card__value"><AnimatedValue value={m.value} /></div>
            <div className="industry-metric-card__label">{m.label}</div>
            <div className="industry-metric-card__sub">{m.sub}</div>
            <SourceFootnote
              source={m.source}
              url={m.sourceUrl}
              refId={m.refId}
              htmlPath={m.htmlPath}
              onOpenModal={(refId) => setActiveModalRefId(refId)}
            />
          </div>
        ))}
      </div>

      {/* ── Industry Macro Drivers ────────────────────────────────── */}
      <h2 className="subsection-title" style={{ marginTop: '3rem' }}>Why Now , Six Industry Drivers</h2>
      <div className="driver-grid">
        {INDUSTRY_DRIVERS.map((d) => (
          <div
            key={d.id}
            className={`driver-card ${selectedDriver === d.id ? 'driver-card--active' : ''}`}
            onClick={() => setSelectedDriver(selectedDriver === d.id ? null : d.id)}
          >
            <div className="driver-card__header">
              <span className="driver-card__icon">{d.icon}</span>
              <h3 className="driver-card__title">{d.trigger}</h3>
            </div>
            <div className="driver-card__stat">
              <span className="driver-card__stat-value">{d.stat}</span>
              <span className="driver-card__stat-label">{d.statLabel}</span>
            </div>
            {selectedDriver === d.id && (
              <div className="driver-card__detail">
                <p>{d.detail}</p>
                <SourceFootnote
                  source={d.source}
                  url={d.sourceUrl}
                  refId={d.refId}
                  htmlPath={d.htmlPath}
                  onOpenModal={(refId) => setActiveModalRefId(refId)}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Digital Maturity Curve ────────────────────────────────── */}
      <h2 className="subsection-title" style={{ marginTop: '3rem' }}>Digital Maturity by Operator</h2>
      <div className="maturity-filters">
        {['All', ...STAGE_ORDER].map(s => (
          <button
            key={s}
            className={`pill ${maturityFilter === s ? 'pill--active' : ''}`}
            onClick={() => setMaturityFilter(s)}
            style={maturityFilter === s && s !== 'All' ? { background: STAGE_COLORS[s], borderColor: STAGE_COLORS[s] } : {}}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="maturity-chart">
        {sortedMaturity.map((d, i) => (
          <div key={i} className="maturity-bar-row">
            <span className="maturity-bar-label">{d.name}</span>
            <div className="maturity-bar-track">
              <div
                className="maturity-bar-fill"
                style={{ width: `${d.score}%`, background: STAGE_COLORS[d.stage] }}
              />
              <span className="maturity-bar-score">{d.score}</span>
            </div>
            <span className="maturity-bar-stage" style={{ color: STAGE_COLORS[d.stage] }}>{d.stage}</span>
          </div>
        ))}
      </div>
      <SourceFootnote
        source="SPE Journal of Petroleum Technology & Analyst Data"
        url="https://jpt.spe.org/"
        refId="REF-07"
        htmlPath="/references/REF-07_SPE_Journal_of_Petroleum_Technology.html"
        onOpenModal={(refId) => setActiveModalRefId(refId)}
      />
    </div>
  );
}
