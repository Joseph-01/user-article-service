require("dotenv").config()
const authUrl = process.env.AUTH_URL
const axios = require("axios");
const { response } = require('express');
const axiosInstance = axios.create({
    baseURL: authUrl
})

const authenticator = async (req, res, next) => {
    try {
        const header = req.headers.authorization

        const userResponse = await axiosInstance({
            url: `auth`,
            method: "get",
            headers: {
                "authorization":
                    header
            }
        });

        const checkUserDetails = userResponse.data
        if ("id" in checkUserDetails.user && "authorize" in checkUserDetails) {
            if (checkUserDetails.authorize === true) {
                next()
            } else {
                res.status(401).json({ msg: "Not authorize" })
            }
        } else {
            res.status(404).json({ msg: "User not found" })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = { authenticator }