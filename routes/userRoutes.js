const {
    createUser,
    getAllUser,
    updateUser,
    followUser,
    getPostByUser,
    getUserById,
    deleteUser,
} = require("../controllers/userController");
const router = require("express").Router();

router.route("/").post(createUser).get(getAllUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser)
router.route("/:id/follow").put(followUser)
router.route("/:slug/posts").get(getPostByUser)

module.exports = router;
