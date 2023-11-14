const express = require("express");
const cookieParser = require("cookie-parser");
const dbConnection = require("../utils/database");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.use(cookieParser());