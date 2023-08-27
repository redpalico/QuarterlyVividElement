const http = require('http');

const server = http.createServer((req, res) => {
  // ランダムな1から6の整数を生成
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  // レスポンスの設定
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(randomNumber.toString()); // 数字を文字列として送信
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

