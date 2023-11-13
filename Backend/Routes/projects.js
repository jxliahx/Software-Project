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

// This API add a member of the current project into ProjectMembers table.
router.post("/addmember/:projectID", (req, res) => {
    const sql = `INSERT INTO ProjectMembers (ProjectID,UserID) VALUES (?)`;
    const values = [req.params.projectID, req.body.userID];
    dbConnection.query(sql, [values], (err, result) => {
      if (err) return res.json({ Status: false, Error: err });
      return res.json({ Status: true });
    });
  });

// This API return all members of a project.
router.get("/members/:projectID", (req, res) => {
  const sql = `SELECT * FROM UsersInfo WHERE UserID IN 
  (SELECT UserID FROM ProjectMembers WHERE ProjectID = ?)`;
  const value = [req.params.projectID];
  dbConnection.query(sql, [value], (err, result) => {
    if (err) return res.json({ Status: false, Error: err });
    return res.json(result);
  });
});

// This API return all incompleted tasks of a project.
router.get("/openTasks/:projectID", (req, res) => {
  const sql = `SELECT t.*, u.UserID, u.FirstName, u.LastName 
  FROM Tasks AS t 
  INNER JOIN ProjectMembers AS p 
   INNER JOIN UsersInfo AS u 
   ON t.MemberID = p.MemberID AND p.UserID=u.UserID AND t.ProjectID=? and t.IsCompleted=false`;
  const value = [req.params.projectID];
  dbConnection.query(sql, [value], (err, result) => {
    if (err) return res.json({ Status: false, Error: err });
    return res.json(result);
  });
});

// This API return all completed tasks of a project.
router.get("/closedTasks/:projectID", (req, res) => {
  const sql = `SELECT t.*, u.UserID, u.FirstName, u.LastName 
  FROM Tasks AS t 
  INNER JOIN ProjectMembers AS p 
   INNER JOIN UsersInfo AS u 
   ON t.MemberID = p.MemberID AND p.UserID=u.UserID AND t.ProjectID=? and t.IsCompleted=true`;
  const value = [req.params.projectID];
  dbConnection.query(sql, [value], (err, result) => {
    if (err) return res.json({ Status: false, Error: err });
    return res.json(result);
  });
});

// This API return all users that can be invited to the current project.
router.get("/openUsers/:projectID", (req, res) => {
  const sql = `SELECT * 
  FROM UsersInfo WHERE UserID NOT IN
  (SELECT UserID FROM ProjectMembers WHERE ProjectID = ?)`;
  const value = [req.params.projectID];
  dbConnection.query(sql, [value], (err, result) => {
    if (err) return res.json({ Status: false, Error: err });
    return res.json(result);
  });
});

module.exports = router;


