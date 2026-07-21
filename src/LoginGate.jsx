import { useState, useEffect } from 'react';

const VALID_HASH = '9aa44d80e790ce088ec2a8defefb75a75050eed40ca02852a252681f85661f87';

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function LoginGate({ children }) {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('og-dash-auth') === 'true');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (authed) return children;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const hash = await sha256(`${user}:${pass}`);
    if (hash === VALID_HASH) {
      sessionStorage.setItem('og-dash-auth', 'true');
      setAuthed(true);
    } else {
      setError('Invalid credentials');
      setLoading(false);
    }
  };

  return (
    <div className="login-gate">
      <div className="login-card">
        <div className="login-logo">
          <span className="logo-tag">Google Cloud</span>
          <div className="login-title">Global Oil &amp; Gas<br/>Strategy Dashboard</div>
          <div className="login-subtitle">Confidential — Authorized Access Only</div>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={user}
              onChange={e => setUser(e.target.value)}
              autoComplete="username"
              autoFocus
              required
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={pass}
              onChange={e => setPass(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>
          {error && <div className="login-error">{error}</div>}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Verifying…' : 'Sign In'}
          </button>
        </form>

        <div className="login-footer">
          This document contains proprietary competitive intelligence.<br/>
          Unauthorized access is prohibited.
        </div>
      </div>
    </div>
  );
}
