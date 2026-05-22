const { PeerServer } = require('peer');
const express = require('express');
const http = require('http');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

// PeerJS ライブラリを静的配信（node_modules から）
app.use('/peerjs-lib', express.static(path.join(__dirname, 'node_modules/peerjs/dist')));

// 静的ファイル配信
app.use(express.static(path.join(__dirname)));

// ルートパスのリダイレクト
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// PeerServer を HTTP サーバーに統合
const peerServer = PeerServer({
  app: server,
  path: '/peerjs',
  proxied: true
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Static files available at http://localhost:${port}`);
  console.log(`PeerJS library available at /peerjs-lib/peerjs.min.js`);
  console.log(`PeerServer endpoint: /peerjs`);
});