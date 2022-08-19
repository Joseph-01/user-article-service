const mongoose = require("mongoose");
require("dotenv").config()

// const connectionString = "mongodb://localhost:27017/blogApi_v3";
const connectionString = process.env.MONGODB_URI

const connect = (connectionString) => {
    mongoose
        .connect(connectionString)
        .then(() => {
            console.log("working")
        })
        .catch((error) => console.log(error));
};

const startConnection = async (listenPort) => {
    try {
        await connect(connectionString)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    startConnection
}
