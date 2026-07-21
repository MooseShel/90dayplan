import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// ── HTTP Basic Auth (server-side layer) ───────────────────────────────
const AUTH_USER = process.env.AUTH_USER || 'shelh';
const AUTH_PASS = process.env.AUTH_PASS || '90DayPl@n';

app.use((req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Basic ')) {
    res.set('WWW-Authenticate', 'Basic realm="90-Day Strategy Dashboard"');
    return res.status(401).send('Authentication required');
  }
  const [user, pass] = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');
  if (user === AUTH_USER && pass === AUTH_PASS) return next();
  res.set('WWW-Authenticate', 'Basic realm="90-Day Strategy Dashboard"');
  return res.status(401).send('Invalid credentials');
});

// ── Serve static build ────────────────────────────────────────────────
app.use(express.static(join(__dirname, 'dist')));

// ── SPA fallback ──────────────────────────────────────────────────────
app.get('{*path}', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✓ Dashboard running on http://localhost:${PORT}`);
});
