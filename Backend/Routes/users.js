const express = require("express");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const dbConnection = require("../utils/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const secret = process.env.SECRET;

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

// This API add a new record into UsersInfo table with the hashed password
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
      //res.set("Access-Control-Allow-Origin", "*");
      if (err) return res.json({ Status: false, Error: err });
      return res.json({ Status: true });
    });
  });
});

// This API allow a user to login, it creates a cookie for that user.
router.post("/login", (req, res) => {
  const sql = "SELECT * from UsersInfo Where Username = ?";
  dbConnection.query(sql, [req.body.username], (err, result) => {
    //res.set("Access-Control-Allow-Origin", "*");
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      bcrypt.compare(req.body.password, result[0].Password, (err, response) => {
        if (err)
          return res.json({ loginStatus: false, Error: "Wrong Password" });
        if (response) {
          const token = jwt.sign(
            {
              email: result[0].Email,
              id: result[0].UserID,
              firstName: result[0].FirstName,
            },
            secret,
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          return res.json({ loginStatus: true, id: result[0].UserID });
        }
      });
    } else {
      return res.json({ loginStatus: false, Error: "wrong email or password" });
    }
  });
});

// This API returns details of a single user. Example: https://cs476-StudentGroupPM-backend.onrender.com/api/users/detail/tungngo
router.get("/detail/:id", (req, res) => {
  const sql = "SELECT * FROM UsersInfo where UserID = ?";
  dbConnection.query(sql, [req.params.id], (err, result) => {
    //res.set("Access-Control-Allow-Origin", "*");
    if (err) return res.json({ Status: false });
    return res.json(result);
  });
});

// This API delete the cookie when user logout
router.get("/logout", (req, res) => {
  //res.set("Access-Control-Allow-Origin", "*");
  res.clearCookie("token");
  return res.json({ Status: true });
});

//This API list all users in the database
router.get("/", function (req, res) {
  const sql = "SELECT * FROM UsersInfo";
  dbConnection.query(sql, (err, result) => {
    //res.set("Access-Control-Allow-Origin", "*");
    if (err) return res.json({ Status: false });
    return res.json(result);
  });
});

// This API search all projects that current user is a member of.
router.get("/memberof", (req, res) => {
  const sql = `SELECT * FROM Projects WHERE ProjectID IN 
  (SELECT ProjectID FROM ProjectMembers WHERE UserID = ?)`;
  const cookie = req.headers.cookie;
  const payload = cookie.split(".")[1];
  const decodedValue = JSON.parse(atob(payload));
  const value = decodedValue.id;
  dbConnection.query(sql, value, (err, result) => {
    //res.set("Access-Control-Allow-Origin", "*");
    if (err) return res.json({ Status: false, Error: err });
    return res.json(result);
  });
});

// This API search all projects that belong to current user.
router.get("/admin", (req, res) => {
  const sql = `SELECT * FROM Projects WHERE UserID = ?`;
  const cookie = req.headers.cookie;
  const payload = cookie.split(".")[1];
  const decodedValue = JSON.parse(atob(payload));
  const value = decodedValue.id;
  dbConnection.query(sql, value, (err, result) => {
    //res.set("Access-Control-Allow-Origin", "*");
    if (err) return res.json({ Status: false, Error: err });
    return res.json(result);
  });
});

module.exports = router;
