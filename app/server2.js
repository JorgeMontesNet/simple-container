var express = require('express');
var server = express();
server.use(express.static(__dirname));
server.listen(8080);
console.log('Server running on port 8080');