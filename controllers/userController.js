const User = require("../models/user")
const Post = require("../models/post")
const bcrypt = require("bcryptjs")
const { findById, find, findOne } = require("../models/user")

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - email
 *         - password
 *         - username
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the post
 *         firstname:
 *           type: string
 *         lastname:
 *           type: stringe
 *         profilePic:
 *           type: string
 *         username:
 *           type: string
 *         password:
 *           type: string
 *         phoneNumber:
 *           type: string
 *         email:
 *           type: string
 *         followers:
 *           type: array
 *         followings:
 *           type: array
 *         isAdmin:
 *           type: boolean
 *         slug:
 *           type: string
 *       example:
 *         firstname: John
 *         lastname: Doe
 *         profilePic: 
 *         username: johndoe
 *         password: 123456
 *         phoneNumber: 08012345678
 *         isAdmin: false
 *         followers: []
 *         followings: []
 *         email: johndoe@gmail.com
 *         slug:
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: The user managing API
*/

//get all user, only for super admins
const getAllUser = async (req, res) => {
    try {
        //Zqb9VANRrl2KuMoC
        //mongodb+srv://<username>:<password>@atlascluster.7l3s3bx.mongodb.net/?retryWrites=true&w=majority
        const user = await User.find({})
        return res.json({ user })
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}

//create a user
const createUser = async (req, res) => {
    try {
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        //create new user object
        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            profilePic: req.body.profilePic,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            followers: req.body.followers,
            followings: req.body.followings,
            username: req.body.username,
            password: hashPassword,
            isAdmin: req.body.isAdmin,
        })

        const user = await newUser.save()
        return res.status(201).json({ user })
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}

//get a user by id
const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        res.status(200).json({ user })
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}
//update a user
const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        //check if user esxist
        const userToCheck = await User.findOne({_id: id})
        if(!userToCheck) {
            return res.status(404).json({ "errMsg": "not found" })
        }
        //get body to update
        const { password, ...others } = req.body
        const user = await User.findOneAndUpdate({ _id: req.params.id }, others)
        res.status(200).json("update success")
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}


//follow and unfollow a user 
const followUser = async (req, res) => {
    try {
        if (req.params.id != req.body.userId) {
            const userToFollow = await User.findById(req.params.id)
            const userFollowing = await User.findById(req.body.userId)
            if (!userToFollow.followers.includes(req.body.userId) && !userFollowing.followings.includes(req.params.id)) {
                await userToFollow.updateOne({ $push: { followers: req.body.userId } })
                await userFollowing.updateOne({ $push: { followings: req.params.id } })
                return res.status(200).json("You have followed this user")
            } else {
                await userToFollow.updateOne({ $pull: { followers: req.body.userId } })
                await userFollowing.updateOne({ $pull: { followings: req.params.id } })
                return res.status(200).json("You have unfollowed this user")
            }
        } else {
            return res.status(403).json({ "errMsg": "You are can not follow yourself" })

        }
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}




//get post by a particular user
const getPostByUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ "errMsg": "user not found" })
        }
        //get post by user id
        const post = await Post.find({userId: user._id})
        if(post == null) {
            return res.status(500).json({ "msg": "This user has no post" })
        }
        return res.status(200).json({ post })
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}

//password update
//delete a user
const deleteUser = async (req, res) => {
    try {
        const userToCheck = await User.findById(req.params.id)
        if(!userToCheck) {
            return res.status(404).json({ "errMsg": "user not found" })
        }
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).json("This user has been deleted")
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}


module.exports = {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
    followUser,
    getPostByUser
}