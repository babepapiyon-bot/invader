# SPACE INVADERS - Online Multiplayer Edition

懐かしのスペースインベーダーをオンライン対戦対応版にアップグレードしました！WebRTC (PeerJS) とRenderを使用して、世界中の誰とでも対戦できます。

## 🎮 ゲームの特徴

- **2人同時対戦**: ローカルプレイまたはオンライン対戦に対応
- **シンプルな操作**: キーボード操作で直感的にプレイ
- **リアルタイム通信**: WebRTC (PeerJS) による低レイテンシー通信
- **無料ホスティング**: GitHub Pages + Render で完全無料で運用

## 🚀 クイックスタート

### ローカルプレイ

1. `index.html` をブラウザで開く
2. **ローカルプレイ** ボタンをクリック
3. 同じ画面で2人プレイ！

### オンライン対戦

詳細は [DEPLOY.md](DEPLOY.md) を参照してください。

**簡単な手順**:
1. GitHub でリポジトリを作成
2. GitHub Pages を有効化（フロントエンド）
3. Render で PeerServer をデプロイ（バックエンド）
4. ゲームを共有して対戦開始！

## 📋 操作方法

### 1P (緑)
- **移動**: `A` / `D` キー
- **通常弾**: `W` キー
- **特殊弾**: `S` キー

### 2P (青)
- **移動**: `←` / `→` キー
- **通常弾**: `↑` キー
- **特殊弾**: `↓` キー

### ゲームルール

- **目的**: 相手のシャドウ（上部に表示される透明な像）に特殊弾を当てて勝利
- **通常弾**: インベーダーを倒してスコアと特殊弾を獲得
- **インベーダー**: 下から攻撃を仕掛けてくるので、避けて対処

## 🏗️ 技術スタック

### フロントエンド
- HTML5 Canvas
- JavaScript (Vanilla)
- **PeerJS** - WebRTC ラッパーライブラリ

### バックエンド
- **Node.js** - サーバーランタイム
- **PeerServer** - P2P 接続の仲介
- **Express** - ウェブサーバー

### ホスティング
- **GitHub Pages** - フロントエンド
- **Render** - バックエンド (PeerServer)

## 📦 ファイル構成

```
invader/
├── index.html              ← 🎮 メインゲーム（GitHub Pages）
├── index_new.html          ← オンライン版（新）
├── server.js               ← 🖥️ PeerServer（Render）
├── package.json            ← 依存関係管理
├── DEPLOY.md               ← デプロイ手順（重要！）
└── README.md               ← このファイル
```

## 🔧 ローカル開発

### インストール

```bash
npm install
```

### 実行

```bash
npm start
```

ブラウザで `http://localhost:3000` を開く

## 🚀 デプロイ

### GitHub Pages へのプッシュ

```bash
git add index.html
git commit -m "Update game"
git push origin main
```

### Render へのデプロイ

1. Render で新しい Web Service を作成
2. GitHub リポジトリを接続
3. `server.js` が自動的に実行されます

詳細な手順は [DEPLOY.md](DEPLOY.md) を参照

## 🎯 実装のポイント

### PeerJS 統合

- **接続確立**: 2人のプレイヤーが ID を交換して直接接続
- **ゲーム状態同期**: フレームごとにプレイヤー位置を送信
- **低レイテンシー**: P2P 通信でサーバー経由の遅延を排除

### サーバー設定

- **環境変数対応**: `PORT` が Render から指定される
- **プロキシ対応**: `proxied: true` で安全なWebSocket接続
- **HTTPS/WSS**: 暗号化通信で安全に通信

## 📱 ブラウザ互換性

- Chrome / Edge: ✅ 完全対応
- Firefox: ✅ 完全対応
- Safari: ⚠️ WebRTC対応だが、一部制限あり
- モバイル: ✅ 対応（タッチ操作は未実装）

## 🤝 貢献

改善提案やバグ報告は GitHub Issues でお願いします。

## 📄 ライセンス

MIT License

## 🎓 学習リソース

このプロジェクトから学べること：

- WebRTC と P2P 通信の基礎
- PeerJS ライブラリの使用方法
- GitHub Pages でのホスティング
- Render でのバックエンド運用
- Canvas API によるゲーム開発
- リアルタイムマルチプレイヤーゲームの設計

---

**楽しいゲームライフを！** 🎮
