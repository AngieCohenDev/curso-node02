const express = require("express");
const app = express();

const response = {
  data: [],
  services: "Cars Service",
  architecture: "Microservices",
};

const logger = (message) => console.log("[🚙​ Cars Service]: " + message);

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v2/cars", (req, res) => {
  response.data.push("BWM", "Subaru", "Tesla", "Ferrari");
  logger("Get cars data");
  return res.send(response);
});

module.exports = app;