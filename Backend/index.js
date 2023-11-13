const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
//const authJwt = require("./utils/jwt");
//const errorHandler = require("./utils/errorHandler");

const app = express();
const port = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
/*app.use(
  cors({
    origin: [
      "https://studentgrouppm.onrender.com/",
      "http://localhost:3000",
      "http://localhost",
    ],
    headers: ["Content-Type"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);*/

//middleware
app.use(express.json());
/*app.use(authJwt());
//app.use(errorHandler());
//app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studentgrouppm.onrender.com"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});*/

//Routes
const usersRoutes = require("./Routes/users");
app.use(`/api/users`, usersRoutes);

const projectsRoutes = require("./Routes/projects");
app.use(`/api/projects`, projectsRoutes);

app.use(
  cors({
    origin: [
      "https://studentgrouppm.onrender.com/",
      "http://localhost:3000",
      "http://localhost",
      "*",
    ],
    headers: ["Content-Type"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
