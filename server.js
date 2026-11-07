// ZK STORE — Production-Grade Integrated Full-Stack Server
// Provides both Static Asset Delivery & Complete RESTful Atelier API
const http = require('http');
const fs = require('fs');
const path = require('path');
const { handleApiRequest } = require('./backend/controllers/apiRouter.js');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer(async (req, res) => {
  const startTime = Date.now();

  // Log on finish
  res.on('finish', () => {
    const elapsed = Date.now() - startTime;
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url} — ${res.statusCode} (${elapsed}ms)`);
  });

  try {
    // 1. Dispatch REST API requests (/api/...)
    if (req.url.startsWith('/api')) {
      const handled = await handleApiRequest(req, res);
      if (handled) return;
    }

    // 2. Static File Serving
    let parsedUrl = req.url.split('?')[0];
    if (parsedUrl === '/') parsedUrl = '/index.html';

    const filePath = path.join(ROOT_DIR, parsedUrl);

    // Prevent directory traversal attacks
    if (!filePath.startsWith(ROOT_DIR)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('403 Forbidden');
      return;
    }

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        // SPA Fallback for client-side routing
        if (!path.extname(filePath)) {
          const indexPath = path.join(ROOT_DIR, 'index.html');
          fs.readFile(indexPath, (err, content) => {
            if (err) {
              res.writeHead(404, { 'Content-Type': 'text/plain' });
              res.end('404 Not Found');
            } else {
              res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
              res.end(content);
            }
          });
          return;
        }

        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: '404 File Not Found', path: parsedUrl }));
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });

      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
    });
  } catch (error) {
    console.error('Unhandled Server Error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error', message: error.message }));
  }
});

server.listen(PORT, () => {
  console.log('================================================================');
  console.log('   ZK STORE — $50,000-LEVEL FULL-STACK LUXURY FASHION PLATFORM   ');
  console.log('================================================================');
  console.log(`   Frontend Storefront : http://localhost:${PORT}`);
  console.log(`   Backend REST API    : http://localhost:${PORT}/api/health`);
  console.log(`   Products API        : http://localhost:${PORT}/api/products`);
  console.log(`   Orders Tracking API : http://localhost:${PORT}/api/orders`);
  console.log('================================================================');
  console.log('   Atelier Node backend is running and ready to handle patrons.');
  console.log('================================================================\n');
});
