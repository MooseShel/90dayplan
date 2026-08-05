import React, { useState } from 'react';
import { COMPETITIVE_MATRIX_GRID, COMPETITIVE_ACCOUNTS } from '../data';

const POSTURE_PILL = {
  Lead: 'pill-green', 'Co-Exist': 'pill-blue', Wedge: 'pill-amber',
};

export default function S_CompetitiveIntel() {
  const [view, setView] = useState('matrix');

  return (
    <div className="section-page">
      <div className="section-header">
        <div className="section-eyebrow">09 · Competitive Intelligence</div>
        <h1 className="section-title">Competitive Landscape</h1>
        <p className="section-desc">
          Detailed competitive positioning of Google Cloud vs AWS and Azure across
          key O&G capabilities. Understand where Google leads, where it must wedge,
          and where co-existence is the optimal strategy.
        </p>
      </div>

      {/* ── View Toggle ──────────────────────────────────────────── */}
      <div className="view-toggle">
        <button className={`pill ${view === 'matrix' ? 'pill--active' : ''}`} onClick={() => setView('matrix')}>
          Capability Matrix
        </button>
        <button className={`pill ${view === 'accounts' ? 'pill--active' : ''}`} onClick={() => setView('accounts')}>
          Account Intel
        </button>
      </div>

      {view === 'matrix' && (
        <>
          <h2 className="subsection-title">Capability Comparison</h2>
          <div className="table-scroll">
            <table className="data-table competitive-matrix">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th className="col-gcp">Google Cloud</th>
                  <th className="col-aws">AWS</th>
                  <th className="col-azure">Azure</th>
                  <th>Advantage</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITIVE_MATRIX_GRID.map((row, i) => (
                  <tr key={i}>
                    <td className="cell-name">{row.feature}</td>
                    <td className="col-gcp">{row.gcp}</td>
                    <td className="col-aws">{row.aws}</td>
                    <td className="col-azure">{row.azure}</td>
                    <td className="cell-winner">{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {view === 'accounts' && (
        <>
          <h2 className="subsection-title">Account-Level Competitive Positioning</h2>
          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Account</th>
                  <th>Incumbent</th>
                  <th>Google Posture</th>
                  <th>Wedge Strategy</th>
                  <th>Expansion Play</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITIVE_ACCOUNTS.map((a, i) => (
                  <tr key={i}>
                    <td className="cell-name">{a.name}</td>
                    <td>{a.incumbent}</td>
                    <td><span className={`pill ${POSTURE_PILL[a.googlePosture] || ''}`}>{a.googlePosture}</span></td>
                    <td>{a.wedge}</td>
                    <td>{a.expand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
