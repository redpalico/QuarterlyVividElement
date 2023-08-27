const http = require('http');

const server = http.createServer((req, res) => {
  // ランダムな1から6の整数を生成
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  // レスポンスの設定
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  if (randomNumber === 2) {
    res.end('bingo!');
  } else {
    res.end(randomNumber.toString());
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
