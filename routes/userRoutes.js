const {
    createUser,
    getAllUser,
    getUserBySlug,
    updateUser,
    followUser,
    unFollowUser,
    getPostByUser,
} = require("../controllers/userController");
const router = require("express").Router();

router.route("/").post(createUser).get(getAllUser);
router.route("/:slug").get(getUserBySlug).put(updateUser);
router.route("/:id/follow").put(followUser)
router.route("/:id/unfollow").put(unFollowUser)
router.route("/:slug/posts").get(getPostByUser)

module.exports = router;
