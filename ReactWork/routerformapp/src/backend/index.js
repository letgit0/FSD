const http = require('http');
const fetchServerData = require('./getdata.js');

const PORT = 5000;

const server = http.createServer(async (req, res) => {

  if (req.url === '/msg' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Message endpoint working');
  }

  if (req.url === '/data' && req.method === 'GET') {
    const result = await fetchServerData();
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(result));
  }

});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
