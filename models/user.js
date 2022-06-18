const mongoose = require("mongoose")
const slugify  = require("slugify")

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String
    },
    followers:{
        type: Array,
        default: []
    },
    followings:{
        type: Array,
        default: []
    },
    username: {
        type: String,
        required: true,
        unique: true,
        max: 20,
        min: 5
    },
    password: {
        type: String,
        required: true,
        unique: true,
        max: 20,
        min: 5
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    slug: {
        type: String,
        unique: true,
        required: true
    }
},
{timestamps: true}
)

UserSchema.pre("validate", function(next) {
    if(this.username) {
        this.slug = slugify(this.username, {
            lower: true,
            strict: true
        })
    }

    next()
})

module.exports = mongoose.model("User", UserSchema)