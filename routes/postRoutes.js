const {
  getAllPost,
  createPost,
  getPostById,
  updatePost,
  likePost,
  deletePost,
} = require("../controllers/postController");

const auth = require("../middleware/authMiddleware");

const router = require("express").Router();

router.route("/").get(getAllPost);
router.route("/:id").post(auth.authenticator,createPost);
router.route("/:id").get(getPostById).put(auth.authenticator,updatePost).delete(auth.authenticator,deletePost)
router.route("/:id/like").patch(auth.authenticator,likePost)

module.exports = router;
