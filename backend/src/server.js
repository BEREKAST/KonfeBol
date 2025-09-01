// src/server.js  — servidor mínimo y autosuficiente
const express = require('express');

console.log('>>> Entré a server.js');              // debe verse SIEMPRE

const app = express();
app.get('/health', (_req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;
console.log('[server] Iniciando…');

app.listen(PORT, () => {
  console.log(`[server] API escuchando en http://localhost:${PORT}`);
});

// Loguea cualquier motivo de salida
process.on('exit', (code) => console.log('[server] exit code:', code));
process.on('uncaughtException', (e) => { console.error('[uncaught]', e); });
process.on('unhandledRejection', (e) => { console.error('[unhandled]', e); });
console.log('>>> Entré a server.js');              // debe verse SIEMPRE