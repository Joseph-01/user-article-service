const { urlencoded } = require("express");
const express = require("express");
const app = express();
//config file
const dbConnection = require("./config/config");
//user route
const userRoute = require("./routes/userRoutes")
const postRoute = require("./routes/postRoutes")


// app.use(urlencoded({extended: false}))
app.use(express.json())
app.use("/users", userRoute)
app.use("/posts", postRoute)


dbConnection.startConnection(
  app.listen(3000, () => {
    console.log(`http://localhost:3000`);
  })
);
