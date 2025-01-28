//サーバーコード
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 静的ファイルの設定
// public ディレクトリ内の静的ファイルを提供
app.use(express.static(path.join(__dirname, 'public')));

// ファビコンのリクエストを無視（不要なエラーを防ぐ）
app.get('/favicon.ico', (req, res) => res.status(204));

// ルート設定
// index.html を返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// サーバー起動
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
