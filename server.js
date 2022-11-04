const { urlencoded } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config()
const port = process.env.PORT || 3000
const swaggerUI = require("swagger-ui-express")
const swaggerDocs = require("swagger-jsdoc")
//config file
const dbConnection = require("./config/config");

//swagger options
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "user-article-service",
            version: "0.0.1",
            description: "This is the service for creating, updating, deleting and getting users details, and also for anything relating to the article service"
        },
        servers: [
            {
                // url: "http://localhost:3000"
                url: "https://article-api-shugr.cyclic.app"
            }
        ]
    },
    apis: [
        "./controllers/*.js"
    ]
}

const specs = swaggerDocs(options)

//routes
const userRoute = require("./routes/userRoutes")
const postRoute = require("./routes/postRoutes")


// app.use(urlencoded({extended: true}))
app.use(cors())
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(express.json())
app.use("/users", userRoute)
app.use("/posts", postRoute)


// app.listen(port)
dbConnection.startConnection(
    app.listen(3000)
);
