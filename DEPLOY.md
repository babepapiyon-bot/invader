# Space Invaders Online - デプロイ手順

このゲームはGitHub PagesとRenderを使用してオンライン対戦をサポートしています。

## 📋 前提条件

- GitHub アカウント
- Renderアカウント（https://render.com）
- Node.js と npm（ローカルテスト用）

---

## 🚀 セットアップ手順

### 1. GitHub リポジトリを作成

1. GitHub で新しいリポジトリを作成します（名前例：`space-invaders-online`）
2. このフォルダをクローンまたはプッシュします：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/space-invaders-online.git
git push -u origin main
```

### 2. GitHub Pages を有効化（フロントエンド）

1. GitHub リポジトリの **Settings** → **Pages** に移動
2. **Source** で `main` ブランチを選択
3. フォルダは **root** を選択して **Save**
4. 数分後、`https://YOUR_USERNAME.github.io/space-invaders-online/` でアクセス可能に

### 3. Render に PeerServer をデプロイ（バックエンド）

#### 方法A: Renderダッシュボードから

1. https://render.com にログイン
2. **New** → **Web Service** をクリック
3. GitHub リポジトリを接続
4. 以下を設定：
   - **Name**: `space-invaders-peerserver`
   - **Region**: `Singapore` または `Japan` (低レイテンシー)
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment Variables**（オプション）: 不要

5. **Create Web Service** をクリック
6. デプロイ完了後、URL を確認（例：`https://space-invaders-peerserver-xxxx.onrender.com`）

#### 方法B: Render CLI を使用

```bash
npm install -g render
render deploy
```

### 4. PeerServer URL を更新

`index.html` の PeerServer URL を Render のURLに変更します：

```javascript
const PEER_CONFIG = {
    host: 'space-invaders-peerserver-xxxx.onrender.com',  // ← YOUR_RENDER_URL に置き換え
    port: 443,
    path: '/peerjs',
    secure: true
};
```

### 5. 変更をプッシュ

```bash
git add index.html
git commit -m "Update PeerServer URL"
git push origin main
```

---

## 🎮 ゲームをプレイする方法

### オンライン対戦

1. **プレイヤー1**：
   - GitHub Pages のゲーム画面を開く
   - 表示された **Your ID** をコピー
   - **ローカルプレイ** ボタンは押さない（相手を待つ）

2. **プレイヤー2**：
   - 別のブラウザ/デバイスでGitHub Pages のゲーム画面を開く
   - プレイヤー1の ID をテキストボックスに貼り付け
   - **接続** ボタンをクリック

3. **接続成功**：
   - 両プレイヤーのステータスが "接続成功 - ゲーム開始" に変わります
   - ゲームスタート！

### ローカルプレイ

- **ローカルプレイ** ボタンをクリックして、同じ画面で2人プレイ

---

## 🎮 操作方法

- **1P (緑)**
  - 移動: `A` / `D`
  - 通常弾: `W`
  - シャドウ弾: `S`

- **2P (青)**
  - 移動: `←` / `→`
  - 通常弾: `↑`
  - シャドウ弾: `↓`

---

## 🔧 トラブルシューティング

### PeerServer に接続できない

**原因**: Render サーバーがまだ起動していないか、URL が誤っている

**解決策**:
1. Render ダッシュボードでサーバーのステータスを確認
2. `index.html` の `PEER_CONFIG.host` が正しい URL か確認
3. ブラウザコンソール（F12）でエラーを確認

### 相手に接続できない

**原因**: 相手のID が誤っている、またはネットワーク遅延

**解決策**:
1. ID を正確にコピー&ペースト（スペースなし）
2. ブラウザコンソールでエラーメッセージを確認
3. 別のデバイスから試す

### ゲームが遅い

**原因**: ネットワーク遅延、またはサーバーが遠い

**解決策**:
1. Render で低レイテンシーのリージョン（Singapore/Japan）を選択
2. ローカルテストで動作確認

---

## 📝 ローカルテスト

ローカルでテストする場合：

```bash
npm install
npm start
```

ブラウザで `http://localhost:3000` にアクセス

---

## 📦 ファイル構成

```
invader/
├── index.html          ← メインゲーム（GitHub Pages でホスト）
├── index_new.html      ← オンライン対戦版（新）
├── server.js           ← PeerServer（Render でホスト）
├── package.json        ← 依存関係
├── DEPLOY.md           ← このファイル
└── invader_online.html ← 旧バージョン
```

---

## 🔒 セキュリティとプライバシー

- ID は一時的でゲーム終了時に破棄されます
- ゲーム状態は P2P 通信で直接転送され、サーバーを経由しません
- ネットワーク通信は HTTPS/WSS で暗号化されています

---

## 📞 サポート

問題が発生した場合：
1. ブラウザコンソール（F12 → Console）でエラーを確認
2. Render と GitHub ダッシュボードでステータスを確認
3. ネットワーク接続を確認

---

## 📄 参考リンク

- [PeerJS Documentation](https://peerjs.com/)
- [Render Documentation](https://docs.render.com/)
- [GitHub Pages](https://pages.github.com/)
