import { useState, useEffect } from 'react';
import { NAV_ITEMS, META } from './data';
import S01Thesis     from './sections/S01_Thesis';
import S02Offense    from './sections/S02_Offense';
import S03Partners   from './sections/S03_Partners';
import S04Technology from './sections/S04_Technology';
import S05Alphabet   from './sections/S05_Alphabet';
import S06Exchange   from './sections/S06_Exchange';
import S07Roadmap    from './sections/S07_Roadmap';
import S08OKR        from './sections/S08_OKR';
import S09Decisions  from './sections/S09_Decisions';
import './index.css';

const SECTION_MAP = {
  thesis:     S01Thesis,
  offense:    S02Offense,
  partners:   S03Partners,
  technology: S04Technology,
  alphabet:   S05Alphabet,
  exchange:   S06Exchange,
  roadmap:    S07Roadmap,
  okr:        S08OKR,
  decisions:  S09Decisions,
};

// ── Theme Hook ─────────────────────────────────────────────────────────
function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('og-dashboard-theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('og-dashboard-theme', theme);
  }, [theme]);

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return { theme, toggle };
}

// ── Toggle Widget ──────────────────────────────────────────────────────
function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light';
  return (
    <div className="theme-toggle" onClick={onToggle} title={`Switch to ${isLight ? 'dark' : 'light'} mode`}>
      <span className="theme-toggle-label">
        {isLight ? '☀️' : '🌙'} {isLight ? 'Light' : 'Dark'} mode
      </span>
      <div className={`theme-toggle-track${isLight ? ' on' : ''}`}>
        <div className="theme-toggle-thumb" />
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState('thesis');
  const { theme, toggle }   = useTheme();
  const ActiveSection       = SECTION_MAP[active];

  // Reset scroll position whenever the section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [active]);

  return (
    <div className="app-shell">
      {/* ── Sidebar ── */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span className="logo-tag">Google Cloud</span>
          <div className="logo-title">Global Oil &amp; Gas<br/>Strategy Dashboard</div>
          <div className="logo-sub">{META.confidential}</div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section-label">Strategy Pillars</div>
          {NAV_ITEMS.map(item => (
            <div
              key={item.id}
              className={`nav-item${active === item.id ? ' active' : ''}`}
              onClick={() => setActive(item.id)}
            >
              <span className="nav-num">{item.num}</span>
              <div>
                <div className="nav-label">{item.label}</div>
                <div style={{fontSize:'10px',color:'var(--text-muted)',marginTop:'1px'}}>{item.sub}</div>
              </div>
            </div>
          ))}
        </nav>


        <div className="sidebar-footer">
          <strong>{META.author}</strong>
          {META.title}<br/>
          {META.date}
          <ThemeToggle theme={theme} onToggle={toggle} />
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className="main-content">
        <ActiveSection />
      </main>
    </div>
  );
}
