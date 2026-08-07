import React from 'react';

export default function SourceModal({ sourceData, onClose }) {
  if (!sourceData) return null;

  const {
    id,
    title,
    publisher,
    pubDate,
    summary,
    keyMetrics = [],
    liveUrl,
    archiveUrl,
    htmlPath,
    mdPath,
    statusText
  } = sourceData;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          maxWidth: '750px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          color: '#f8fafc',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', borderBottom: '1px solid #334155', paddingBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
                {id || 'REFERENCE'}
              </span>
              <span style={{ backgroundColor: 'rgba(52, 211, 153, 0.15)', color: '#34d399', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '500' }}>
                {statusText || 'Verified Source'}
              </span>
            </div>
            <h2 style={{ fontFamily: 'Google Sans, sans-serif', fontSize: '1.5rem', margin: 0, color: '#ffffff' }}>
              {title}
            </h2>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '4px' }}>
              Publisher: <strong style={{ color: '#cbd5e1' }}>{publisher}</strong> {pubDate ? `• Date: ${pubDate}` : ''}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(51, 65, 85, 0.5)',
              border: 'none',
              color: '#94a3b8',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>

        {/* Key Metrics */}
        {keyMetrics.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {keyMetrics.map((m, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid #334155', borderRadius: '10px', padding: '1rem' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#38bdf8', fontFamily: 'Google Sans, sans-serif' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#e2e8f0' }}>{m.label}</div>
                {m.desc && <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>{m.desc}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Executive Summary */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.5rem', fontFamily: 'Google Sans, sans-serif', borderLeft: '3px solid #1a73e8', paddingLeft: '8px' }}>
            Verified Source Summary
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6' }}>
            {summary}
          </p>
        </div>

        {/* Action Links */}
        <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid #334155', borderRadius: '12px', padding: '1.25rem', marginTop: '1.5rem' }}>
          <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '0.95rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Read Source Content & Archives
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {htmlPath && (
              <a
                href={htmlPath}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#1a73e8',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                📄 Open Full HTML Source Reader
              </a>
            )}
            {mdPath && (
              <a
                href={mdPath}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'rgba(51, 65, 85, 0.8)',
                  color: '#f8fafc',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                📝 View Markdown Copy
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'rgba(51, 65, 85, 0.5)',
                  color: '#38bdf8',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                🔗 Original Live Web Link
              </a>
            )}
            {archiveUrl && (
              <a
                href={archiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'rgba(51, 65, 85, 0.5)',
                  color: '#94a3b8',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                🏛️ Wayback Archive Mirror
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
