const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
//const authJwt = require("./utils/jwt");
//const errorHandler = require("./utils/errorHandler");

const app = express();
const port = process.env.PORT;
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  cors({
    origin: [
      "https://studentgrouppm.onrender.com/",
      "http://localhost:3000",
      "http://localhost",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//middleware
app.use(express.json());
//app.use(authJwt());
//app.use(errorHandler());

//Routes
const usersRoutes = require("./Routes/users");
app.use(`/api/users`, usersRoutes);

const projectsRoutes = require("./Routes/projects");
app.use(`/api/projects`, projectsRoutes);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
