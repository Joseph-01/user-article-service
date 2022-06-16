const { createUser, getAllUser, getUserBySlug, updateUser } = require("../controllers/userController")
const routes = require("express").Router()

routes.route("/").post(createUser).get(getAllUser)
routes.route("/:slug").get(getUserBySlug).put(updateUser)

// try change
module.exports = routes