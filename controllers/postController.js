const { findById } = require("../models/post")
const Post = require("../models/post")
const User = require("../models/user")

//create a post
const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body)
        const post = await newPost.save()
        return res.status(201).json(post)
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}


//get a post by id
const getPostById = async (req, res) => {
    try {
        const postId = req.params.id
        const post = await Post.findById(postId)
        if (!post) {
            return res.status(404).json({ "errMsg": "post not found" })
        }
        res.status(200).json(post)
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}

//update a post
const updatePost = async (req, res) => {
    try {
        const id = req.params.id
        //check if post actually exist
        const postToUpdate = await Post.findOne({ id: id })
        if (!postToUpdate) {
            return res.status(404).json({ "errMsg": "post not found" })
        }
        //removed userId and likes from the request body, so as not to accidentally update them
        const { userId, likes, ...others } = req.body
        const updatedPost = await Post.findOneAndUpdate({ id: id }, others)
        res.status(200).json("update success")
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }

}

//delete a post

//like a post
const likePost = async (req, res) => {
    try {
        const checkPost = await Post.findById(req.params.id)
        const checkUser = await User.findById(req.body.userId)
        if (!checkUser) {
            return res.status(404).json("user not found")
        }
        if (!checkPost) {
            return res.status(404).json("post not found")
        }
        if (!checkPost.likes.includes(req.body.userId)) {
            await checkPost.updateOne({ $push: { likes: req.body.userId } })
            return res.status(200).json("You have liked this post")
        } else {
            await checkPost.updateOne({ $pull: { likes: req.body.userId } })
            return res.status(200).json("You have unliked this post")
        }
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }

}


module.exports = {
    createPost,
    getPostById,
    updatePost,
    likePost,
}