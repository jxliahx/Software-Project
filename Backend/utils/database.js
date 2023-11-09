const mysql = require("mysql");

const dbConnection = mysql.createConnection({
  host: "sql9.freemysqlhosting.net",
  user: "sql9659179",
  password: "rqakftnfXc",
  database: "sql9659179",
});

dbConnection.connect(function (err) {
  if (err) {
    console.log("connection error");
  } else {
    console.log("Connected");
  }
});

module.exports = dbConnection;
