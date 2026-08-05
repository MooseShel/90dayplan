import React, { useState } from 'react';
import { TAM_SAM_SOM, MARKET_SHARE, REVENUE_PROJECTIONS, REVENUE_PROJECTIONS_SOURCE } from '../data';

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

/* ── Donut Chart (pure CSS/SVG) ──────────────────────────────────── */
function DonutChart({ data, size = 220 }) {
  const total = data.reduce((s, d) => s + d.share, 0);
  let cumulative = 0;
  const r = 80, cx = size / 2, cy = size / 2;
  const circumference = 2 * Math.PI * r;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {data.map((d, i) => {
        const dashArray = (d.share / total) * circumference;
        const dashOffset = -(cumulative / total) * circumference;
        cumulative += d.share;
        return (
          <circle
            key={i}
            cx={cx} cy={cy} r={r}
            fill="none" stroke={d.color} strokeWidth={28}
            strokeDasharray={`${dashArray} ${circumference - dashArray}`}
            strokeDashoffset={dashOffset}
            transform={`rotate(-90 ${cx} ${cy})`}
            style={{ transition: 'stroke-dasharray 0.8s ease' }}
          />
        );
      })}
      <text x={cx} y={cy - 6} textAnchor="middle" className="donut-center-value">
        {MARKET_SHARE.data.find(d => d.provider === 'Google Cloud')?.share}%
      </text>
      <text x={cx} y={cy + 14} textAnchor="middle" className="donut-center-label">
        GCP Today
      </text>
    </svg>
  );
}

/* ── Stacked Bar Chart with Y-Axis Grid & Stable Info Box ─────── */
const WORKLOAD_COLORS = {
  aiml: '#4285F4',
  hpc: '#34A853',
  analytics: '#FBBC04',
  sovereign: '#EA4335',
  ccus: '#9334E6',
};

const WORKLOAD_LABELS = {
  aiml: 'AI/ML Workloads',
  hpc: 'HPC Seismic & Sim',
  analytics: 'Data Analytics & OSDU',
  sovereign: 'Sovereign Cloud',
  ccus: 'CCUS & Carbon MRV',
};

function formatRevenue(val) {
  if (val >= 1000) return `$${(val / 1000).toFixed(2)}B`;
  return `$${val}M`;
}

function RevenueChart({ data }) {
  const [activeTooltip, setActiveTooltip] = useState({
    year: 2028,
    wl: 'aiml',
    val: 750,
    pctOfYear: '38',
    total: 1960
  });

  const maxScale = 2000;
  const workloads = ['aiml', 'hpc', 'analytics', 'sovereign', 'ccus'];
  const yTicks = [2000, 1500, 1000, 500, 0];

  return (
    <div className="revenue-chart-wrapper card" style={{ padding: '1.5rem', marginTop: '1.25rem' }}>
      <div className="revenue-chart-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
            Google Cloud O&G Revenue Trajectory ($M)
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.25rem 0 0 0' }}>
            5-Year growth forecast by core workload pillar (2024 – 2028)
          </p>
        </div>
        <div className="stat-chip" style={{ padding: '6px 14px', background: 'rgba(52, 168, 83, 0.12)', border: '1px solid rgba(52, 168, 83, 0.3)', borderRadius: '20px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--google-green)', fontWeight: '700' }}>48% CAGR Target</span>
        </div>
      </div>

      {/* Chart Canvas Area */}
      <div className="revenue-chart-canvas" style={{ position: 'relative', display: 'flex', height: '260px', paddingTop: '20px' }}>
        {/* Y-Axis Labels */}
        <div className="revenue-y-axis" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingRight: '1rem', width: '60px', borderRight: '1px solid var(--border)', fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'right' }}>
          {yTicks.map(tick => (
            <span key={tick}>{tick === 0 ? '$0' : formatRevenue(tick)}</span>
          ))}
        </div>

        {/* Chart Bars Grid */}
        <div className="revenue-bars-grid" style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', paddingLeft: '1rem' }}>
          <div className="revenue-grid-lines" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pointerEvents: 'none', opacity: 0.15 }}>
            {yTicks.map(tick => (
              <div key={tick} style={{ borderBottom: '1px dashed var(--text-primary)', width: '100%' }} />
            ))}
          </div>

          {data.map((d) => (
            <div key={d.year} className="revenue-bar-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70px', zIndex: 2 }}>
              <div className="revenue-bar-total" style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--google-blue)', marginBottom: '6px' }}>
                {formatRevenue(d.total)}
              </div>

              <div
                className="revenue-bar-stack"
                style={{
                  width: '48px',
                  height: '180px',
                  display: 'flex',
                  flexDirection: 'column-reverse',
                  background: 'transparent',
                  overflow: 'hidden',
                }}
              >
                {workloads.map((wl) => {
                  const val = d[wl];
                  const pctOfYear = ((val / d.total) * 100).toFixed(0);
                  const heightPct = (val / maxScale) * 100;
                  const isHovered = activeTooltip && activeTooltip.year === d.year && activeTooltip.wl === wl;
                  return (
                    <div
                      key={wl}
                      className="revenue-bar-segment"
                      style={{
                        height: `${heightPct}%`,
                        background: WORKLOAD_COLORS[wl],
                        transition: 'opacity 0.15s, transform 0.15s',
                        opacity: isHovered ? 1 : 0.88,
                        transform: isHovered ? 'scaleX(1.08)' : 'scaleX(1)',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={() => setActiveTooltip({ year: d.year, wl, val, pctOfYear, total: d.total })}
                    />
                  );
                })}
              </div>

              <div className="revenue-bar-year" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginTop: '8px' }}>
                {d.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Box Container */}
      <div
        className="revenue-tooltip-box"
        style={{
          marginTop: '1.25rem',
          minHeight: '44px',
          padding: '0.6rem 1rem',
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.85rem',
          boxSizing: 'border-box'
        }}
      >
        {activeTooltip ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="legend-dot" style={{ background: WORKLOAD_COLORS[activeTooltip.wl], marginRight: '8px', width: '10px', height: '10px' }} />
              <strong style={{ color: 'var(--text-primary)', marginRight: '6px' }}>{activeTooltip.year} {WORKLOAD_LABELS[activeTooltip.wl]}:</strong>
              <span style={{ color: 'var(--google-blue)', fontWeight: '700' }}>${activeTooltip.val}M</span>
              <span style={{ color: 'var(--text-muted)', marginLeft: '6px' }}>({activeTooltip.pctOfYear}% of total ${activeTooltip.total}M)</span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Hover over any segment to inspect</span>
          </div>
        ) : (
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            Hover over any bar segment to inspect workload breakdown
          </span>
        )}
      </div>

      {/* Legend Footer */}
      <div className="revenue-chart__legend" style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', marginTop: '1.25rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
        {workloads.map(wl => (
          <span key={wl} className="revenue-chart__legend-item" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="legend-dot" style={{ background: WORKLOAD_COLORS[wl], width: '10px', height: '10px' }} />
            {WORKLOAD_LABELS[wl]}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── TAM / SAM / SOM Concentric Circles ──────────────────────────── */
function TamCircles({ tam, sam, som }) {
  const [hoveredCircle, setHoveredCircle] = useState(null);

  return (
    <div className="tam-circles-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="tam-circles" style={{ position: 'relative', width: '250px', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          className={`tam-ring tam-ring--tam ${hoveredCircle === 'tam' ? 'tam-ring--active' : ''}`}
          style={{
            position: 'absolute',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: 'rgba(66, 133, 244, 0.12)',
            border: '2px solid #4285F4',
            transition: 'all 0.3s ease',
            boxShadow: hoveredCircle === 'tam' ? '0 0 20px rgba(66, 133, 244, 0.4)' : 'none',
          }}
          onMouseEnter={() => setHoveredCircle('tam')}
          onMouseLeave={() => setHoveredCircle(null)}
        >
          <div style={{ position: 'absolute', top: '10px', width: '100%', textAlign: 'center', fontSize: '0.75rem', fontWeight: '700', color: '#4285F4', letterSpacing: '0.5px' }}>
            TAM: ${tam.value}B
          </div>
        </div>

        <div
          className={`tam-ring tam-ring--sam ${hoveredCircle === 'sam' ? 'tam-ring--active' : ''}`}
          style={{
            position: 'absolute',
            width: '165px',
            height: '165px',
            borderRadius: '50%',
            background: 'rgba(52, 168, 83, 0.16)',
            border: '2px solid #34A853',
            transition: 'all 0.3s ease',
            boxShadow: hoveredCircle === 'sam' ? '0 0 20px rgba(52, 168, 83, 0.4)' : 'none',
          }}
          onMouseEnter={() => setHoveredCircle('sam')}
          onMouseLeave={() => setHoveredCircle(null)}
        >
          <div style={{ position: 'absolute', top: '10px', width: '100%', textAlign: 'center', fontSize: '0.72rem', fontWeight: '700', color: '#34A853', letterSpacing: '0.5px' }}>
            SAM: ${sam.value}B
          </div>
        </div>

        <div
          className={`tam-ring tam-ring--som ${hoveredCircle === 'som' ? 'tam-ring--active' : ''}`}
          style={{
            position: 'absolute',
            width: '95px',
            height: '95px',
            borderRadius: '50%',
            background: 'rgba(234, 67, 53, 0.22)',
            border: '2px solid #EA4335',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            boxShadow: hoveredCircle === 'som' ? '0 0 20px rgba(234, 67, 53, 0.4)' : 'none',
            zIndex: 3,
          }}
          onMouseEnter={() => setHoveredCircle('som')}
          onMouseLeave={() => setHoveredCircle(null)}
        >
          <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#EA4335' }}>
            SOM
          </div>
          <div style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-primary)' }}>
            ${som.value}B
          </div>
        </div>
      </div>
      <div className="tam-legend-caption" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem', fontStyle: 'italic' }}>
        Concentric Market Scale ($ Billions)
      </div>
    </div>
  );
}

export default function S_MarketOpportunity() {
  const [hoveredProvider, setHoveredProvider] = useState(null);

  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">02 · Market Opportunity</div>
        <h1 className="section-title">Sizing the Prize</h1>
        <p className="section-desc">
          The cloud opportunity in oil & gas is projected to reach $21B+ by 2028.
          Google Cloud's current ~10% share in O&G represents a massive growth runway ,
          with AI, sovereign, and HPC workloads as the primary vectors for share capture.
        </p>
      </div>

      {/* ── TAM / SAM / SOM ──────────────────────────────────────── */}
      <h2 className="subsection-title">Addressable Market</h2>
      <div className="tam-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        <TamCircles tam={TAM_SAM_SOM.tam} sam={TAM_SAM_SOM.sam} som={TAM_SAM_SOM.som} />
        
        <div className="tam-details" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div className="tam-detail-card card" style={{ borderLeft: '4px solid #4285F4', padding: '1rem 1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="tam-detail-label" style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-primary)' }}>{TAM_SAM_SOM.tam.label}</div>
              <div className="tam-detail-value" style={{ fontSize: '1.25rem', fontWeight: '800', color: '#4285F4' }}>${TAM_SAM_SOM.tam.value}B</div>
            </div>
            <div className="tam-detail-desc" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{TAM_SAM_SOM.tam.desc}</div>
            <SourceFootnote source={TAM_SAM_SOM.tam.source} url={TAM_SAM_SOM.tam.sourceUrl} />
          </div>

          <div className="tam-detail-card card" style={{ borderLeft: '4px solid #34A853', padding: '1rem 1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="tam-detail-label" style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-primary)' }}>{TAM_SAM_SOM.sam.label}</div>
              <div className="tam-detail-value" style={{ fontSize: '1.25rem', fontWeight: '800', color: '#34A853' }}>${TAM_SAM_SOM.sam.value}B</div>
            </div>
            <div className="tam-detail-desc" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{TAM_SAM_SOM.sam.desc}</div>
            <SourceFootnote source={TAM_SAM_SOM.sam.source} url={TAM_SAM_SOM.sam.sourceUrl} />
          </div>

          <div className="tam-detail-card card" style={{ borderLeft: '4px solid #EA4335', padding: '1rem 1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="tam-detail-label" style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-primary)' }}>{TAM_SAM_SOM.som.label}</div>
              <div className="tam-detail-value" style={{ fontSize: '1.25rem', fontWeight: '800', color: '#EA4335' }}>${TAM_SAM_SOM.som.value}B</div>
            </div>
            <div className="tam-detail-desc" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{TAM_SAM_SOM.som.desc}</div>
            <SourceFootnote source={TAM_SAM_SOM.som.source} url={TAM_SAM_SOM.som.sourceUrl} />
          </div>
        </div>
      </div>

      {/* ── Market Share ──────────────────────────────────────────── */}
      <h2 className="subsection-title" style={{ marginTop: '3rem' }}>Cloud Market Share in O&G</h2>
      <div className="market-share-layout card" style={{ padding: '1.5rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <DonutChart data={MARKET_SHARE.data} />
        <div className="share-details" style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {MARKET_SHARE.data.map((d, i) => (
            <div
              key={i}
              className={`share-row ${hoveredProvider === d.provider ? 'share-row--active' : ''}`}
              style={{ padding: '0.5rem 0.75rem', borderRadius: '8px' }}
              onMouseEnter={() => setHoveredProvider(d.provider)}
              onMouseLeave={() => setHoveredProvider(null)}
            >
              <span className="legend-dot" style={{ background: d.color }} />
              <span className="share-provider" style={{ fontWeight: '600', fontSize: '0.88rem' }}>{d.provider}</span>
              <span className="share-pct" style={{ fontWeight: '700', fontSize: '0.88rem' }}>{d.share}%</span>
              <span className="share-anchor" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{d.anchor}</span>
            </div>
          ))}
          <div className="share-target" style={{ padding: '0.6rem 0.75rem', borderRadius: '8px', background: 'rgba(52, 168, 83, 0.08)', border: '1px dashed #34A853', marginTop: '0.4rem' }}>
            <span className="legend-dot" style={{ background: MARKET_SHARE.target.color }} />
            <span className="share-provider" style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.88rem' }}>Target: {MARKET_SHARE.target.provider}</span>
            <span className="share-pct" style={{ color: MARKET_SHARE.target.color, fontWeight: '800', fontSize: '0.88rem' }}>{MARKET_SHARE.target.share}%</span>
            <span className="share-anchor" style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--google-green)' }}>{MARKET_SHARE.target.timeline}</span>
          </div>
        </div>
      </div>
      <SourceFootnote source={MARKET_SHARE.source} url={MARKET_SHARE.sourceUrl} />

      {/* ── Revenue Projections ───────────────────────────────────── */}
      <h2 className="subsection-title" style={{ marginTop: '3rem' }}>Revenue Growth Projection by Workload</h2>
      <RevenueChart data={REVENUE_PROJECTIONS} />
      <SourceFootnote source={REVENUE_PROJECTIONS_SOURCE} url="https://www.gartner.com/en/newsroom/press-releases/gartner-forecasts-global-it-spending" />
    </div>
  );
}
