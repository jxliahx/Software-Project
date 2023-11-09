const express = require("express");
const cors = require("cors");

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

//Routes
const usersRoutes = require("./Routes/users");
app.use(`/api/users`, usersRoutes);

app.listen(port, () => {
  console.log(`Server is running`);
});
