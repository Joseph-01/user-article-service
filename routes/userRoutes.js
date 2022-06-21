const {
    createUser,
    getAllUser,
    updateUser,
    followUser,
    getPostByUser,
    getUserById,
} = require("../controllers/userController");
const router = require("express").Router();

router.route("/").post(createUser).get(getAllUser);
router.route("/:id").get(getUserById).put(updateUser);
router.route("/:id/follow").put(followUser)
router.route("/:slug/posts").get(getPostByUser)

module.exports = router;
