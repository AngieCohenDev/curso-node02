const express = require("express");
const app = express();

const response = {
  data: [],
  services: "Books Service",
  architecture: "Microservices",
};

const logger = (message) => console.log("[📚 Books Service]: " + message);

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v2/books", (req, res) => {
  response.data.push(
    "Harry Potter y el misterio del Principe Metizo",
    "Cien años de soledad",
    "Cosas que vio la luna",
    "Los reyes malditos"
  );
  logger("Get books data");
  return res.send(response);
});

module.exports = app;
