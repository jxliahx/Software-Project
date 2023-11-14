const express = require("express");
const cookieParser = require("cookie-parser");
const dbConnection = require("../utils/database");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.use(cookieParser());
router.use(express.urlencoded({ extended: true }));

// This API add a new task into the current Project
router.post("/add", (req, res) => {
  const sql = `INSERT INTO Tasks (ProjectID,TaskName, Description, DueDate) VALUES (?)`;
  const values = [
    req.body.projectID,
    req.body.taskName,
    req.body.description,
    req.body.dueDate,
  ];
  dbConnection.query(sql, [values], (err, result) => {
    if (err) return res.json({ Status: false, Error: err });
    return res.json({ Status: true });
  });
});