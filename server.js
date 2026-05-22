const { PeerServer } = require('peer');

// Renderなどの環境ポート、またはデフォルトで9000番を使用
const port = process.env.PORT || 9000;

const peerServer = PeerServer({ 
  port: port, 
  path: '/myapp' 
});

console.log(`PeerServer running on port ${port}`);