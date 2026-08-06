import React, { useState, useEffect, useRef } from 'react';
import { INDUSTRY_METRICS, INDUSTRY_DRIVERS, DIGITAL_MATURITY } from '../data';

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
function SourceFootnote({ source, url }) {
  if (!source) return null;
  return (
    <div className="metric-source">
      Source:{' '}
      {url && url !== '#' ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="source-link">
          {source} <span style={{ fontSize: '0.65rem', marginLeft: '2px' }}>↗</span>
        </a>
      ) : (
        <span>{source}</span>
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

  const filteredMaturity = maturityFilter === 'All'
    ? DIGITAL_MATURITY
    : DIGITAL_MATURITY.filter(d => d.stage === maturityFilter);

  const sortedMaturity = [...filteredMaturity].sort((a, b) => b.score - a.score);

  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">01 · Industry & Market</div>
        <h1 className="section-title">Industry Landscape</h1>
        <p className="section-desc">
          The global oil & gas industry sits at an inflection point , AI adoption is accelerating,
          data fragmentation is a board-level crisis, and sovereign cloud requirements are reshaping
          vendor selection. These market dynamics create a once-in-a-decade window for Google Cloud.
        </p>
      </div>

      {/* ── Market Size Counters ───────────────────────────────────── */}
      <h2 className="subsection-title">Market at a Glance</h2>
      <div className="metric-grid metric-grid--6col">
        {INDUSTRY_METRICS.map((m, i) => (
          <div key={i} className="metric-card metric-card--landscape">
            <span className="metric-icon">{m.icon}</span>
            <div className="metric-value"><AnimatedValue value={m.value} /></div>
            <div className="metric-label">{m.label}</div>
            <div className="metric-sub">{m.sub}</div>
            <SourceFootnote source={m.source} url={m.sourceUrl} />
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
                <SourceFootnote source={d.source} url={d.sourceUrl} />
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
        source="Maturity scores are directional estimates based on public digital transformation disclosures (TotalEnergies, Shell, BP, Aramco), analyst reports (Gartner/IDC), and SPE conference publications."
        url="https://www.spe.org/en/jpt/jpt-main-page/"
      />
    </div>
  );
}
