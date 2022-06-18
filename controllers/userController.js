const User = require("../models/user")
const bcrypt = require("bcrypt")
const res = require("express/lib/response")
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
        return res.status(200).json({ user })
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}

//get a user by id
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
        const { password, ...others } = req.body
        const user = await User.findOneAndUpdate({ slug: req.params.slug }, others)
        res.status(200).json("update success")
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}
//password update

//follow a user
const followUser = async (req, res) => {
    try {
        if (req.params.id != req.body.userId) {
            const userToFollow = await find({id: req.params.id})
            // const userFollowing = await findById(req.body.userId)
            res.json(userToFollow)
            // if(userToFollow.followers.includes(req.body.userId)) {
            //     res.send("work")
            // }
        } else {
            return res.status(403).json({ "errMsg": "You are can not follow yourself" })

        }
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}
//unfollow a user


module.exports = {
    createUser,
    getAllUser,
    getUserBySlug,
    updateUser,
    followUser
}