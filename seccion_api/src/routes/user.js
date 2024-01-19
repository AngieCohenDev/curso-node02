const { Router } = require("express");
const { auth } = require("../middlewares");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("/:userId", UserController.get);
  router.get("", [auth], UserController.getAll);
  router.patch("/:userId", UserController.update);
  router.delete("/:userId", UserController.delete);

  return router;
};
