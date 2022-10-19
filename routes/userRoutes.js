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
const auth = require("../middleware/authMiddleware");

router.route("/").post(createUser)//.get(getAllUser);
router.route("/:id").get(auth.authenticator,getUserById).put(auth.authenticator,updateUser).delete(auth.authenticator,deleteUser)
router.route("/:id/follow").put(auth.authenticator,followUser)
router.route("/:id/posts").get(auth.authenticator,getPostByUser)

module.exports = router;
