const { findById } = require("../models/post")
const Post = require("../models/post")
const User = require("../models/user")

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
 *     Post:
 *       type: object
 *       required:
 *         - body
 *         - title
 *         - userId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the post
 *         userId:
 *           type: string
 *         title:
 *           type: stringe
 *         image:
 *           type: string
 *         body:
 *           type: string
 *         likes:
 *           type: array
 *         categories:
 *           type: array
 *       example:
 *         id: dkdcnvfe8e89
 *         userId: 63586f767c5dd57d7e0d3a1c
 *         title: The New Turing Omnibus
 *         caption: caption for post three
 *         body: Lorem Ipsum Lorem Ipsum dolor sit amet, consectetuer adipiscingelit. Duis tellus. Donec ante dolor, iaculis nec, gravidaac, cursus in, eros. Mauris vestibulum, felis et egestasullamcorper, purus nibh vehicula sem, eu egestas antenisl non justo. Fusce tincidunt, lorem nev dapibusconsectetuer, leo orci mollis ipsum, eget suscipit erospurus in ante. At ipsum vitae est lacinia tincidunt. Maecenas elit orci,gravida ut, molestie non, venenatis vel, lorem. Sedlacinia. Suspendisse potenti. Sed ultricies cursuslectus. In id magna sit amet nibh suspicit euismod.Integer enim. Donec sapien ante, accumsan ut,sodales commodo, auctor quis, lacus. Maecenas a elitlacinia urna posuere sodales. Curabitur pede pede,molestie id, blandit vitae, varius ac, purus. Mauris atipsum vitae est lacinia tincidunt. Maecenas elit orci, gravida ut, molestie non, venenatis vel,lorem. Sed lacinia. Suspendisse potenti. Sed ultrucies cursus lectus. In id magna sit amet nibhsuspicit euismod. Integer enim. Donec sapien ante, accumsan ut, sodales commodo, auctorquis, lacus. Maecenas a elit lacinia urna posuere sodales. Curabitur pede pede, molestie id,blandit vitae, varius ac, purus. Morbi dictum. Vestibulum adipiscing pulvinar quam. In aliquam rhoncus sem. In mi erat, sodaleseget, pretium interdum, malesuada ac, augue. Aliquam sollicitudin, massa ut vestibulum posuere, massa arcu elementumpurus, eget vehicula lorem metus vel libero. Sed in dui id lectus commodo elementum. Etiam rhoncus tortor. Proin alorem. Ut nec velit. Quisque varius. Proin nonummy justo dictum sapien tincidunt iaculis. Duis lobortis pellentesque risus.Aenean ut tortor imperdiet dolor scelerisque bibendum. Fusce metus nibh, adipiscing id, ullamcorper at, consequat a,nulla
 */

/**
 * @swagger
 * tags:
 *  name: Posts
 *  description: The posts managing API
*/

/**
 * @swagger
 * /posts:
 *  get:
 *   summary: Returns the list of all the posts
 *   tags: [Posts]
 *   responses:
 *      200:
 *        description: The list of the posts
 *        content:
 *          application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Post'
 *      500:
 *         description: Some server error
 */
const getAllPost = async (req, res) => {
    try {
        const post = await Post.find({})
        return res.json({ post })
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */
const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body)
        const post = await newPost.save()
        return res.status(201).json(post)
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}


/**
 * @swagger
 * /posts/{id}:
 *  get:
 *   summary: Get the post by id
 *   tags: [Posts]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The post id
 *   responses:
 *    200:
 *      description: The post description by id
 *      contents:
 *        application/json:
 *          schema:
 *            type: array 
 *            items:
 *              $ref: '#/components/schemas/Post'
 *    404:
 *      description: The post was not found
 */
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

/**
 * @swagger
 * /posts/{id}:
 *  put:
 *   summary: Update the post by id
 *   tags: [Posts]
 *   security:
 *     - bearerAuth: []
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Post'
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The post id
 *   responses:
 *    200:
 *      description: The post description by id
 *      contents:
 *        application/json:
 *          schema:
 *            type: array 
 *            items:
 *              $ref: '#/components/schemas/Post'
 *    404:
 *      description: The post was not found
 */
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


/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete the post by id
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post id
 *     responses:
 *       200:
 *         description: The post was deleted
 *       404:
 *         description: The post was not found
 *       500:
 *         description: Some server error
 *         
 */

//delete a post
const deletePost = async (req, res) => {
    try {
        const postToCheck = await Post.findById(req.params.id)
        if (!postToCheck) {
            return res.status(404).json({ "errMsg": "post not found" })
        }
        await Post.findByIdAndDelete(req.params.id)
        return res.status(200).json("This post has been deleted")
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}

/**
 * @swagger
 * /posts/{id}/like:
 *   patch:
 *     summary: Like a post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *             example:
 *               userId: 60e1c7b5b8b5a8a0b4b0b5b5
 *     responses:
 *       200:
 *         description: The post was liked/unliked
 *       404:
 *         description: The post was not found
 *       500:
 *         description: Some server error
 */

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
    getAllPost,
    createPost,
    getPostById,
    updatePost,
    likePost,
    deletePost,
}