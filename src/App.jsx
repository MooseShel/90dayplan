import { useState, useEffect } from 'react';
import { NAV_ITEMS, NAV_TIERS, META } from './data';
import S_IndustryLandscape from './sections/S_IndustryLandscape';
import S_MarketOpportunity from './sections/S_MarketOpportunity';
import S_CustomerRevenueMap from './sections/S_CustomerRevenueMap';
import S01Thesis     from './sections/S01_Thesis';
import S02Offense    from './sections/S02_Offense';
import S03Partners   from './sections/S03_Partners';
import S04Technology from './sections/S04_Technology';
import S05Alphabet   from './sections/S05_Alphabet';
import S11ThinkBig   from './sections/S11_ThinkBig';
import S06Exchange   from './sections/S06_Exchange';
import S_CompetitiveIntel from './sections/S_CompetitiveIntel';
import S_ExecutionRoadmap from './sections/S_ExecutionRoadmap';
import './index.css';

const SECTION_MAP = {
  // Tier 1 , Industry & Market
  landscape:   S_IndustryLandscape,
  opportunity: S_MarketOpportunity,
  revenuemap:  S_CustomerRevenueMap,
  // Tier 2 , Google Cloud Strategy
  thesis:      S01Thesis,
  accounts:    S02Offense,
  technology:  S04Technology,
  partners:    S03Partners,
  initiatives: S11ThinkBig,
  competitive: S_CompetitiveIntel,
  // Tier 3 , Execution
  execution:   S_ExecutionRoadmap,
};

// Merge Technology + Alphabet for section 06
function S06Combined() {
  return (
    <>
      <S04Technology />
      <div style={{ marginTop: '2rem' }}>
        <S05Alphabet />
      </div>
    </>
  );
}

// Merge Think Big + Energy Exchange for section 08
function S08Combined() {
  return (
    <>
      <S11ThinkBig />
      <div style={{ marginTop: '2rem' }}>
        <S06Exchange />
      </div>
    </>
  );
}

// Override the combined sections
SECTION_MAP.technology = S06Combined;
SECTION_MAP.initiatives = S08Combined;

// ── Google Cloud Logo SVG ──────────────────────────────────────────────
function GoogleCloudLogo({ width = 120 }) {
  return (
    <svg width={width} viewBox="0 0 496 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="52" fontFamily="'Google Sans', 'Inter', sans-serif" fontSize="38" fontWeight="500" fill="var(--text-primary)">
        <tspan fill="#4285F4">G</tspan>
        <tspan fill="#EA4335">o</tspan>
        <tspan fill="#FBBC04">o</tspan>
        <tspan fill="#4285F4">g</tspan>
        <tspan fill="#34A853">l</tspan>
        <tspan fill="#EA4335">e</tspan>
        <tspan fill="var(--text-primary)"> Cloud</tspan>
      </text>
    </svg>
  );
}

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
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      <span className="theme-toggle-label">
        <span className="theme-toggle-icon">{isLight ? '☀️' : '🌙'}</span>
        <span className="theme-toggle-text">{isLight ? 'Light mode' : 'Dark mode'}</span>
      </span>
      <div className={`theme-toggle-track${isLight ? ' on' : ''}`}>
        <div className="theme-toggle-thumb" />
      </div>
    </button>
  );
}

export default function App() {
  const [active, setActive]           = useState('landscape');
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    () => localStorage.getItem('og-sidebar-collapsed') === 'true'
  );
  const [collapsedTiers, setCollapsedTiers] = useState(() => {
    try {
      const saved = localStorage.getItem('og-sidebar-collapsed-tiers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const { theme, toggle } = useTheme();
  const ActiveSection     = SECTION_MAP[active];
  const currentNav        = NAV_ITEMS.find(n => n.id === active);

  const toggleSidebar = () => {
    setSidebarCollapsed(prev => {
      const next = !prev;
      localStorage.setItem('og-sidebar-collapsed', String(next));
      return next;
    });
  };

  const toggleTier = (tierId) => {
    setCollapsedTiers(prev => {
      const next = { ...prev, [tierId]: !prev[tierId] };
      localStorage.setItem('og-sidebar-collapsed-tiers', JSON.stringify(next));
      return next;
    });
  };

  // Keyboard shortcut: Ctrl+B / Cmd+B to toggle sidebar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Reset scroll position and close mobile drawer whenever the section changes
  const handleNavClick = (id) => {
    setActive(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <div className="app-shell">
      {/* ── Mobile Top Header ── */}
      <header className="mobile-header">
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
        <div className="mobile-header-brand">
          <span className="mobile-header-tag">Google Cloud</span>
          <span className="mobile-header-section">{currentNav?.num} · {currentNav?.label}</span>
        </div>
        <div className="mobile-header-theme">
          <ThemeToggle theme={theme} onToggle={toggle} />
        </div>
      </header>

      {/* ── Mobile Backdrop Overlay ── */}
      {mobileOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar / Drawer ── */}
      <aside className={`sidebar${mobileOpen ? ' mobile-open' : ''}${sidebarCollapsed ? ' collapsed' : ''}`}>
        <div className="sidebar-logo">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <GoogleCloudLogo width={sidebarCollapsed ? 110 : 160} />
            <button
              className="sidebar-toggle-btn"
              onClick={toggleSidebar}
              title={sidebarCollapsed ? "Expand sidebar (Ctrl+B)" : "Collapse sidebar (Ctrl+B)"}
              aria-label="Toggle sidebar collapse"
            >
              {sidebarCollapsed ? '▸' : '◂'}
            </button>
          </div>
          <div className="logo-title">Global Oil &amp; Gas<br/>Industry Strategy</div>
          <a
            href="/google_cloud_og_industry_strategy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-pdf-link"
            title="Download Master Executive Strategy Document (PDF)"
          >
            📄 Executive Strategy Doc (PDF) ↗
          </a>
          <div className="logo-sub">{META.confidential}</div>
        </div>

        <nav className="sidebar-nav">
          {NAV_TIERS.map(tier => {
            const isTierCollapsed = !!collapsedTiers[tier.id];
            const tierItems = NAV_ITEMS.filter(item => item.tier === tier.id);
            return (
              <div key={tier.id} className={`nav-tier-group${isTierCollapsed ? ' tier-collapsed' : ''}`}>
                <div
                  className="nav-tier-header"
                  onClick={() => toggleTier(tier.id)}
                  title={isTierCollapsed ? `Expand ${tier.label}` : `Collapse ${tier.label}`}
                >
                  <span className="nav-tier-label">{tier.label}</span>
                  <span className="nav-tier-icon">{isTierCollapsed ? '►' : '▼'}</span>
                  <div className="nav-tier-divider" />
                </div>
                <div className="nav-tier-items">
                  {tierItems.map(item => (
                    <div
                      key={item.id}
                      className={`nav-item${active === item.id ? ' active' : ''}`}
                      onClick={() => handleNavClick(item.id)}
                      title={sidebarCollapsed ? `${item.num} · ${item.label}` : undefined}
                    >
                      <span className="nav-num">{item.num}</span>
                      <div>
                        <div className="nav-label">{item.label}</div>
                        <div style={{fontSize:'10px',color:'var(--text-muted)',marginTop:'1px'}}>{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-footer-text">
            <strong>{META.author}</strong>
            {META.title}<br/>
            {META.date}
          </div>
          <ThemeToggle theme={theme} onToggle={toggle} />
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className={`main-content${sidebarCollapsed ? ' collapsed' : ''}`}>
        <ActiveSection />
      </main>
    </div>
  );
}
