const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const { NotFound, errorM } = require("../middlewares");
const swaggerUI = require("swagger-ui-express");
const { SWAGGER_PATH } = require("../config");
const swaggerDocument = require(SWAGGER_PATH);
require("express-async-errors");

module.exports = function ({
  HomeRoutes,
  CommentRoutes,
  UserRoutes,
  ideaRoutes,
  AuthRoutes,
}) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());

  apiRoutes.use("/home", HomeRoutes);
  apiRoutes.use("/user", UserRoutes);
  apiRoutes.use("/idea", ideaRoutes);
  apiRoutes.use("/comment", CommentRoutes);
  apiRoutes.use("/auth", AuthRoutes);

  router.use("/v1/api", apiRoutes);
  router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  router.use(NotFound);
  router.use(errorM);

  return router;
};
