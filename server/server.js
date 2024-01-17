const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const fileName = path.basename(req.url);

  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

const PORT = 8080;  // Ganti port menjadi 8080
server.listen(PORT, () => {
  console.log(Server running at http://localhost:${PORT}/);
});