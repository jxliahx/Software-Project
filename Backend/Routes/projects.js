const express = require("express");
const cookieParser = require("cookie-parser");
const dbConnection = require("../utils/database");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.use(cookieParser());

// This API add a new record into Projects with current logged UserID
router.post("/add", (req, res) => {
  const sql = `INSERT INTO Projects (UserID,ProjectName) VALUES (?)`;
  const cookie = req.headers.cookie;
  const payload = cookie.split(".")[1];
  const decodedValue = JSON.parse(atob(payload));
  console.log(decodedValue.id);
  const values = [decodedValue.id, req.body.projectName];
  dbConnection.query(sql, [values], (err, result) => {
    if (err) return res.json({ Status: false, Error: err });
    return res.json({ Status: true });
  });
});

// This API search all projects that current user is a member of.
router.get("/memberof", (req, res) => {
    const sql = `INSERT INTO Projects (UserID,ProjectName) VALUES (?)`;
    const cookie = req.headers.cookie;
    const payload = cookie.split(".")[1];
    const decodedValue = JSON.parse(atob(payload));
    const values = [decodedValue.id, req.body.projectName];
    dbConnection.query(sql, [values], (err, result) => {
      if (err) return res.json({ Status: false, Error: err });
      return res.json({ Status: true });
    });
  });

// This API add members of a project into ProjectMembers table.
router.post("/addmembers", (req, res) => {
    const sql = `INSERT INTO ProjectMembers (ProjectID,UserID) VALUES (?)`;
    const values = [decodedValue.id, req.body.projectName];
    dbConnection.query(sql, [values], (err, result) => {
      if (err) return res.json({ Status: false, Error: err });
      return res.json({ Status: true });
    });
  });

module.exports = router;
