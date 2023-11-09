const express = require("express");
const cookieParser = require("cookie-parser");
const dbConnection = require("../utils/database");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.use(cookieParser);

// This API add a new record into Projects
router.post("/add", (req, res) => {
  const sql = `INSERT INTO Projects (UserID,ProjectName) VALUES (?)`;
  const token = req.cookies.token;
  console.log(token);
  /*const decoded = jwt.verify(token, "Student_Group_PM");
  console.log(decoded);
  const values = [decoded.id, req.body.projectName];
  dbConnection.query(sql, [values], (err, result) => {
    if (err) return res.json({ Status: false, Error: err });
    return res.json({ Status: true });
  });*/
});

module.exports = router;
