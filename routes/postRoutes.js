const {
  createPost,
  getPostById,
  updatePost,
  likePost,
} = require("../controllers/postController");

const router = require("express").Router();

router.route("/").post(createPost);
router.route("/:id").get(getPostById).put(updatePost)
router.route("/:id/like").put(likePost)

module.exports = router;
