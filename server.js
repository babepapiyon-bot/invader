const { PeerServer } = require('peer');
const express = require('express');
const path = require('path');

// Renderなどの環境ポート、またはデフォルトで3000番を使用
const port = process.env.PORT || 3000;

const app = express();

// 静的ファイル配信（ローカルテスト用）
app.use(express.static(path.join(__dirname)));

// ルートパスのリダイレクト
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// PeerServer 設定
const peerServer = PeerServer({ 
  port: port, 
  path: '/peerjs',
  proxied: true  // Render/プロキシ環境対応
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`PeerServer running at /${peerServer.config.path}`);
});