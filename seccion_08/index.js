const express = require('express');
const fs = require('fs');

const server = express();
const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");

server.get('/', (req, res)=>{
    res.write(home);
})
server.get('/about', (req, res)=>{
    res.write(about);
})

server.listen(8080, () => {
    console.log('El servidor esta corriendo en el puerto 8080');
})