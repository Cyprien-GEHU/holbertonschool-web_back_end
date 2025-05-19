// this function will a small with the module Node HTTP

const httpServer = require('http');

const host = '127.0.0.1';
const port = 1245;

const app = httpServer.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {});

module.exports = app;
