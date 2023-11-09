const express = require("express");
const cors = require("cors");
//const authJwt = require("./utils/jwt");
//const errorHandler = require("./utils/errorHandler");

const port = 5000;

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
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
  console.log(`Server is running`);
});
