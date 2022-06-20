const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    caption: {
        type: String
    },
    body: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
        default: []
    },
    category: {
        type: Array,
        default: []
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("Post", PostSchema)