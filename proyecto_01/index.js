const express = require('express');
const server = express();
const {PORT}  = require('./config');
const {HomeRoutes, QuotesRoutes}   = require("./routes");
const { NotFoundMiddleware } = require('./middlewares');


//Midelware
server.use(express.static("./public"));
server.use(express.json());

// Rutas
server.use("/", HomeRoutes);
server.use("/", QuotesRoutes);
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
    console.log(`Sevidor corriendo en el puerto ${PORT}`);
})