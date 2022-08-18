// const { urlencoded } = require("express");
const express = require("express");
const app = express();
require("dotenv").config()
const port = process.env.PORT || 3000
//config file
const dbConnection = require("./config/config");
//routes
const userRoute = require("./routes/userRoutes")
const postRoute = require("./routes/postRoutes")


// app.use(urlencoded({extended: false}))
app.use(express.json())
app.use("/users", userRoute)
app.use("/posts", postRoute)


dbConnection.startConnection(
  app.listen(port//, 
  //   () => {
  //   console.log(`http://localhost:3000`);
  // }
  )
);
