const http = require('http');
const PORT = 4002;

const server = http.createServer((req,res)=>{});

server.listen(PORT,()=>{
  console.log("server running");
})