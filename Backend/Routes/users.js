const express = require("express");
const dbConnection = require("../utils/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/signup", (req, res) => {
  const sql = `INSERT INTO UsersInfo 
    (FirstName,LastName,Username,Email,Password) 
    VALUES (?)`;
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    const values = [
      req.body.firstName,
      req.body.lastName,
      req.body.username,
      req.body.email,
      hash,
    ];
    dbConnection.query(sql, [values], (err, result) => {
      if (err) return res.json({ Status: false, Error: err });
      return res.json({ Status: true });
    });
  });
});

router.post("/login", (req, res) => {
  const sql = "SELECT * from UsersInfo Where Username = ?";
  dbConnection.query(sql, [req.body.username], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      bcrypt.compare(req.body.password, result[0].Password, (err, response) => {
        if (err)
          return res.json({ loginStatus: false, Error: "Wrong Password" });
        if (response) {
          const email = result[0].email;
          const token = jwt.sign(
            {
              email: email,
              id: result[0].id,
              firstName: result[0].FirstName,
            },
            "Student_Group_PM",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          return res.json({ loginStatus: true, id: result[0].id });
        }
      });
    } else {
      return res.json({ loginStatus: false, Error: "wrong email or password" });
    }
  });
});

router.get("/detail/?username", (req, res) => {
  const sql = "SELECT * FROM UsersInfo where Username = ?";
  dbConnection.query(sql, [req.params.username], (err, result) => {
    if (err) return res.json({ Status: false });
    return res.json(result);
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: true });
});

module.exports = router;
