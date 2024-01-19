const { Router } = require("express");
const { auth, parseInt, CacheM } = require("../middlewares");
const { CACHE_TIME } = require("../helpers");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("/:userId", UserController.get);
  router.get(
    "",
    [parseInt, CacheM(CACHE_TIME.ONE_HOUR)],
    UserController.getAll
  );
  router.patch("/:userId", auth, UserController.update);
  router.delete("/:userId", auth, UserController.delete);

  return router;
};
