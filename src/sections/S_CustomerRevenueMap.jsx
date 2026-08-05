import React, { useState, useMemo } from 'react';
import { ACCOUNTS, DEAL_STAGES } from '../data';

const POSTURE_PILL = {
  Lead: 'pill-green', 'Co-Exist': 'pill-blue', Wedge: 'pill-amber', 'Win-Back': 'pill-red', Cede: 'pill-muted',
};

const STAGE_COLORS = {
  Prospect: '#666', Qualified: '#FBBC04', PoC: '#4285F4', Committed: '#9334E6', Production: '#34A853',
};

const REGION_COLORS = { Americas: '#4285F4', EMEA: '#34A853', APAC: '#FBBC04', MEA: '#EA4335' };

export default function S_CustomerRevenueMap() {
  const [sortKey, setSortKey] = useState('estOpportunity');
  const [sortDir, setSortDir] = useState('desc');
  const [filterRegion, setFilterRegion] = useState('All');
  const [filterPosture, setFilterPosture] = useState('All');

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('desc'); }
  };

  const filtered = useMemo(() => {
    let list = [...ACCOUNTS];
    if (filterRegion !== 'All') list = list.filter(a => a.region === filterRegion);
    if (filterPosture !== 'All') list = list.filter(a => a.posture === filterPosture);
    list.sort((a, b) => {
      const av = a[sortKey] ?? 0, bv = b[sortKey] ?? 0;
      return sortDir === 'asc' ? av - bv : bv - av;
    });
    return list;
  }, [sortKey, sortDir, filterRegion, filterPosture]);

  // Summary calculations
  const totalPipeline = ACCOUNTS.reduce((s, a) => s + (a.estOpportunity || 0), 0);
  const byRegion = {};
  ACCOUNTS.forEach(a => { byRegion[a.region] = (byRegion[a.region] || 0) + (a.estOpportunity || 0); });
  const byPosture = {};
  ACCOUNTS.forEach(a => { byPosture[a.posture] = (byPosture[a.posture] || 0) + (a.estOpportunity || 0); });
  const byStage = {};
  ACCOUNTS.forEach(a => { byStage[a.dealStage] = (byStage[a.dealStage] || 0) + 1; });

  const regions = [...new Set(ACCOUNTS.map(a => a.region))];
  const postures = [...new Set(ACCOUNTS.map(a => a.posture))];

  const sortArrow = (key) => sortKey === key ? (sortDir === 'asc' ? ' ↑' : ' ↓') : '';

  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">03 · Customer Revenue Map</div>
        <h1 className="section-title">Revenue Potential by Account</h1>
        <p className="section-desc">
          Estimated annual cloud opportunity across {ACCOUNTS.length} named accounts totaling
          ${totalPipeline}M in addressable pipeline. Public estimates sourced from analyst reports;
          "Actual GCP Spend" column is a placeholder for internal CRM data.
        </p>
      </div>

      {/* ── Summary Cards ────────────────────────────────────────── */}
      <div className="metric-grid metric-grid--4col">
        <div className="metric-card">
          <div className="metric-value">${totalPipeline}M</div>
          <div className="metric-label">Total Pipeline</div>
          <div className="metric-sub">{ACCOUNTS.length} named accounts</div>
        </div>
        {Object.entries(byRegion).sort((a,b) => b[1] - a[1]).slice(0, 3).map(([region, val]) => (
          <div key={region} className="metric-card">
            <div className="metric-value" style={{ color: REGION_COLORS[region] }}>${val}M</div>
            <div className="metric-label">{region}</div>
            <div className="metric-sub">{ACCOUNTS.filter(a => a.region === region).length} accounts</div>
          </div>
        ))}
      </div>

      {/* ── Pipeline Funnel ──────────────────────────────────────── */}
      <h2 className="subsection-title" style={{ marginTop: '2rem' }}>Pipeline by Deal Stage</h2>
      <div className="funnel">
        {DEAL_STAGES.map((stage, i) => {
          const count = byStage[stage] || 0;
          const width = 100 - (i * 15);
          return (
            <div key={stage} className="funnel-stage" style={{ width: `${width}%` }}>
              <div className="funnel-bar" style={{ background: STAGE_COLORS[stage] }}>
                <span className="funnel-label">{stage}</span>
                <span className="funnel-count">{count} accounts</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Filters ──────────────────────────────────────────────── */}
      <div className="table-filters" style={{ marginTop: '2rem' }}>
        <div className="filter-group">
          <label>Region:</label>
          <select value={filterRegion} onChange={e => setFilterRegion(e.target.value)}>
            <option value="All">All</option>
            {regions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className="filter-group">
          <label>Posture:</label>
          <select value={filterPosture} onChange={e => setFilterPosture(e.target.value)}>
            <option value="All">All</option>
            {postures.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <span className="filter-count">{filtered.length} accounts shown</span>
      </div>

      {/* ── Account Table ────────────────────────────────────────── */}
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              <th onClick={() => toggleSort('name')}>Account{sortArrow('name')}</th>
              <th>Tier</th>
              <th>Region</th>
              <th>Incumbent</th>
              <th>Posture</th>
              <th onClick={() => toggleSort('estOpportunity')} className="col-num">Est. Opportunity ($M){sortArrow('estOpportunity')}</th>
              <th className="col-num">Actual GCP Spend ($M)</th>
              <th className="col-num">Competitor Spend ($M)</th>
              <th>3-Year Ramp</th>
              <th>Deal Stage</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id}>
                <td className="cell-name">{a.name}</td>
                <td><span className="pill pill-muted">{a.tier}</span></td>
                <td><span style={{ color: REGION_COLORS[a.region] }}>{a.region}</span></td>
                <td>{a.incumbent}</td>
                <td><span className={`pill ${POSTURE_PILL[a.posture] || ''}`}>{a.posture}</span></td>
                <td className="col-num">${a.estOpportunity}M</td>
                <td className="col-num col-placeholder">{a.gcpSpend != null ? `$${a.gcpSpend}M` : '—'}</td>
                <td className="col-num">{a.competitorSpend != null ? `$${a.competitorSpend}M` : '—'}</td>
                <td className="cell-ramp">
                  {a.ramp3yr && <span className="ramp-mini">{a.ramp3yr.map(v => `$${v}M`).join(' → ')}</span>}
                </td>
                <td>
                  <span className="stage-dot" style={{ background: STAGE_COLORS[a.dealStage] }} />
                  {a.dealStage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="metric-source" style={{ marginTop: '0.75rem' }}>
        Revenue estimates sourced from Rystad Digital Oilfield reports, company 10-K IT disclosures, and analyst coverage.
        "Actual GCP Spend" is a placeholder for internal CRM/Salesforce data.
      </div>
    </div>
  );
}
