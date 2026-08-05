import React, { useState, useEffect, useRef } from 'react';
import { TAM_SAM_SOM, MARKET_SHARE, REVENUE_PROJECTIONS, REVENUE_PROJECTIONS_SOURCE } from '../data';

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
      <text x={cx} y={cy - 8} textAnchor="middle" className="donut-center-value">
        {MARKET_SHARE.data.find(d => d.provider === 'Google Cloud')?.share}%
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" className="donut-center-label">
        GCP Today
      </text>
    </svg>
  );
}

/* ── Stacked Bar Chart ───────────────────────────────────────────── */
const WORKLOAD_COLORS = {
  aiml: '#4285F4',
  hpc: '#34A853',
  analytics: '#FBBC04',
  sovereign: '#EA4335',
  ccus: '#9334E6',
};

const WORKLOAD_LABELS = {
  aiml: 'AI/ML',
  hpc: 'HPC Seismic',
  analytics: 'Data Analytics',
  sovereign: 'Sovereign Cloud',
  ccus: 'CCUS/Carbon',
};

function RevenueChart({ data }) {
  const maxTotal = Math.max(...data.map(d => d.total));
  const workloads = ['aiml', 'hpc', 'analytics', 'sovereign', 'ccus'];

  return (
    <div className="revenue-chart">
      <div className="revenue-chart__bars">
        {data.map((d) => (
          <div key={d.year} className="revenue-chart__col">
            <div className="revenue-chart__stack" style={{ height: '200px' }}>
              {workloads.map((wl) => (
                <div
                  key={wl}
                  className="revenue-chart__segment"
                  style={{
                    height: `${(d[wl] / maxTotal) * 100}%`,
                    background: WORKLOAD_COLORS[wl],
                  }}
                  title={`${WORKLOAD_LABELS[wl]}: $${d[wl]}M`}
                />
              ))}
            </div>
            <div className="revenue-chart__total">${d.total}M</div>
            <div className="revenue-chart__year">{d.year}</div>
          </div>
        ))}
      </div>
      <div className="revenue-chart__legend">
        {workloads.map(wl => (
          <span key={wl} className="revenue-chart__legend-item">
            <span className="legend-dot" style={{ background: WORKLOAD_COLORS[wl] }} />
            {WORKLOAD_LABELS[wl]}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── TAM / SAM / SOM Concentric Circles ──────────────────────────── */
function TamCircles({ tam, sam, som, unit }) {
  const levels = [
    { ...tam, color: 'rgba(66,133,244,0.15)', border: '#4285F4' },
    { ...sam, color: 'rgba(52,168,83,0.2)',    border: '#34A853' },
    { ...som, color: 'rgba(234,67,53,0.25)',   border: '#EA4335' },
  ];

  return (
    <div className="tam-circles">
      {levels.map((l, i) => (
        <div
          key={i}
          className="tam-circle"
          style={{
            width: `${220 - i * 60}px`,
            height: `${220 - i * 60}px`,
            background: l.color,
            borderColor: l.border,
          }}
        >
          <div className="tam-circle__value">{unit}{l.value}B</div>
          <div className="tam-circle__label">{l.label}</div>
        </div>
      ))}
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
          Google Cloud's current ~10% share in O&G represents a massive growth runway —
          with AI, sovereign, and HPC workloads as the primary vectors for share capture.
        </p>
      </div>

      {/* ── TAM / SAM / SOM ──────────────────────────────────────── */}
      <h2 className="subsection-title">Addressable Market</h2>
      <div className="tam-layout">
        <TamCircles {...TAM_SAM_SOM} />
        <div className="tam-details">
          {[TAM_SAM_SOM.tam, TAM_SAM_SOM.sam, TAM_SAM_SOM.som].map((level, i) => (
            <div key={i} className="tam-detail-card">
              <div className="tam-detail-value">{TAM_SAM_SOM.unit}{level.value}B</div>
              <div className="tam-detail-label">{level.label}</div>
              <div className="tam-detail-desc">{level.desc}</div>
              <div className="metric-source">Source: {level.source}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Market Share ──────────────────────────────────────────── */}
      <h2 className="subsection-title" style={{ marginTop: '3rem' }}>Cloud Market Share in O&G</h2>
      <div className="market-share-layout">
        <DonutChart data={MARKET_SHARE.data} />
        <div className="share-details">
          {MARKET_SHARE.data.map((d, i) => (
            <div
              key={i}
              className={`share-row ${hoveredProvider === d.provider ? 'share-row--active' : ''}`}
              onMouseEnter={() => setHoveredProvider(d.provider)}
              onMouseLeave={() => setHoveredProvider(null)}
            >
              <span className="legend-dot" style={{ background: d.color }} />
              <span className="share-provider">{d.provider}</span>
              <span className="share-pct">{d.share}%</span>
              <span className="share-anchor">{d.anchor}</span>
            </div>
          ))}
          <div className="share-target">
            <span className="legend-dot" style={{ background: MARKET_SHARE.target.color, border: '2px dashed #34A853' }} />
            <span className="share-provider">Target: {MARKET_SHARE.target.provider}</span>
            <span className="share-pct" style={{ color: MARKET_SHARE.target.color }}>{MARKET_SHARE.target.share}%</span>
            <span className="share-anchor">{MARKET_SHARE.target.timeline}</span>
          </div>
        </div>
      </div>
      <div className="metric-source">Source: {MARKET_SHARE.source}</div>

      {/* ── Revenue Projections ───────────────────────────────────── */}
      <h2 className="subsection-title" style={{ marginTop: '3rem' }}>Revenue Growth Projection by Workload</h2>
      <RevenueChart data={REVENUE_PROJECTIONS} />
      <div className="metric-source" style={{ marginTop: '0.5rem' }}>{REVENUE_PROJECTIONS_SOURCE}</div>
    </div>
  );
}
