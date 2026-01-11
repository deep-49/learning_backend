const http = require('http');
const {home} =require('./home')

const server = http.createServer(home);

server.listen(3001);
console.log(`Server is running on http://localhost:3001`);

