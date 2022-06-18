const {
    createUser,
    getAllUser,
    getUserBySlug,
    updateUser,
    followUser,
} = require("../controllers/userController");
const routes = require("express").Router();

routes.route("/").post(createUser).get(getAllUser);
routes.route("/:slug").get(getUserBySlug).put(updateUser);
routes.route("/:id/follow").put(followUser);

module.exports = routes;
