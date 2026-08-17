// ponytail: plain node:http static server — this page has no client-side
// routing, so it needs nothing fancier than "read the file, guess the type".
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const ROOT = process.cwd();
const PORT = process.env.PORT || 3000;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

async function resolvePath(urlPath) {
  const resolved = normalize(join(ROOT, decodeURIComponent(urlPath)));
  const safePath = resolved.startsWith(ROOT) ? resolved : ROOT;
  try {
    const stats = await stat(safePath);
    if (stats.isDirectory()) return join(safePath, 'index.html');
    return safePath;
  } catch {
    return join(ROOT, 'index.html');
  }
}

createServer(async (req, res) => {
  const urlPath = req.url.split('?')[0];
  const filePath = await resolvePath(urlPath === '/' ? '/index.html' : urlPath);
  try {
    const body = await readFile(filePath);
    res.writeHead(200, {
      'Content-Type': TYPES[extname(filePath)] || 'application/octet-stream',
    });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
}).listen(PORT, () => {
  console.log(`Serving ${ROOT} at http://localhost:${PORT}`);
});
