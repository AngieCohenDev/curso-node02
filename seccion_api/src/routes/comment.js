const { Router } = require("express");

module.exports = function ({ CommentController }) {
  const router = Router();

  router.get("/:commentId/unique", CommentController.get);
  router.get("/:ideaId", CommentController.getIdeaComments);
  router.post("/:ideaId", CommentController.create);
  router.patch("/:commentId", CommentController.update);
  router.delete("/:userId", CommentController.delete);

  return router;
};
