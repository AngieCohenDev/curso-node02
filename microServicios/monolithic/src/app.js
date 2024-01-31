const express = require("express");
const app = express();

const response = {
  data: [],
  services: "Monolithic Service",
  architecture: "Monolithic",
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v1/users", (req, res) => {
  response.data.push("Angie", "Goku", "Lee", "Harper");
  return res.send(response);
});

app.get("/api/v1/books", (req, res) => {
  response.data.push(
    "Matar un ruiseñor",
    "El Principito",
    "De la tierra a la luna",
    "Troya"
  );
  return res.send(response);
});

app.get("/api/v1/cars", (req, res) => {
  response.data.push("Volvo", "Maserati", "Royce Royal", "Kia");
  return res.send(response);
});

module.exports = app;
