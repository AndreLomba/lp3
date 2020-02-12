var express = require('express');

var server = express();

// IMPLANTAR O CRUD: POST, GET, PUT AND DELETE
server.get('/', (request, response) => {
    response.send('Hello World!')
})

server.listen(3000);