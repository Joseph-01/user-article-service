const {
  createPost,
  getPostById,
  updatePost,
  likePost,
  deletePost,
} = require("../controllers/postController");

const router = require("express").Router();

router.route("/").post(createPost);
router.route("/:id").get(getPostById).put(updatePost).delete(deletePost)
router.route("/:id/like").patch(likePost)

module.exports = router;
