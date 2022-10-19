const { urlencoded } = require("express");
const express = require("express");
const app = express();
require("dotenv").config()
const port = process.env.PORT || 3000
//config file
const dbConnection = require("./config/config");
//routes
const userRoute = require("./routes/userRoutes")
const postRoute = require("./routes/postRoutes")


// app.use(urlencoded({extended: true}))
app.use(express.json())
app.use("/users", userRoute)
app.use("/posts", postRoute)


// app.listen(port)
dbConnection.startConnection(
    app.listen(3000)
);
