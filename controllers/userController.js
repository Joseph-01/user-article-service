const User = require("../models/user")
const Post = require("../models/post")
const bcrypt = require("bcrypt")
const { findById, find, findOne } = require("../models/user")

//get all user, only for super admins
const getAllUser = async (req, res) => {
    try {
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

//get a user by slug
const getUserBySlug = async (req, res) => {
    try {
        const user = await User.findOne({ slug: req.params.slug })
        res.status(200).json({ user })
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}
//update a user
const updateUser = async (req, res) => {
    try {
        const slug = req.params.slug
        //check if user esxist
        const slugToCheck = await User.findOne({slug: slug})
        if(!slugToCheck) {
            return res.status(404).json({ "errMsg": "not found" })
        }
        //get body to update
        const { password, ...others } = req.body
        const user = await User.findOneAndUpdate({ slug: req.params.slug }, others)
        res.status(200).json("update success")
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}


//follow a user
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
                return res.status(403).json({ "errMsg": "You already follow this user" })
            }
        } else {
            return res.status(403).json({ "errMsg": "You are can not follow yourself" })

        }
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}


//unfollow a user
const unFollowUser = async (req, res) => {
    try {
        if (req.params.id != req.body.userId) {
            const userToFollow = await User.findById(req.params.id)
            const userFollowing = await User.findById(req.body.userId)
            if (userToFollow.followers.includes(req.body.userId) && userFollowing.followings.includes(req.params.id)) {
                await userToFollow.updateOne({ $pull: { followers: req.body.userId } })
                await userFollowing.updateOne({ $pull: { followings: req.params.id } })
                return res.status(200).json("You have unfollowed this user")
            } else {
                return res.status(403).json({ "errMsg": "You do not follow this user" })
            }
        } else {
            return res.status(403).json({ "errMsg": "You are can not unfollow yourself" })

        }
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}


//get post by a particular user
const getPostByUser = async (req, res) => {
    try {
        const slugToCheck = req.params.slug
        const user = await User.findOne({ slug: slugToCheck })
        if (!user) {
            return res.status(404).json({ "errMsg": "user not found" })
        }
        //get post by user slug
        const post = await Post.find({userId: user._id})
        res.status(200).json({ post })
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}

//password update
//delete a user


module.exports = {
    createUser,
    getAllUser,
    getUserBySlug,
    updateUser,
    followUser,
    unFollowUser,
    getPostByUser
}