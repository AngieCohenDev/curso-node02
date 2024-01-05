const http = require('http')

http.createServer((request, response) => {
    response.write('Hola mundo desde el servidor de node');
    response.end();
}).listen(8080);