const express = require('express');
const server = express();
const {PORT}  = require('./config');
const {HomeRoutes}   = require("./routes")


//Midelware
server.use(express.static("./public"));
server.use(express.json());

// Rutas
server.subscribe("/", HomeRoutes);

server.listen(PORT, () => {
    console.log(`Sevidor corriendo en el puerto ${PORT}`);
})