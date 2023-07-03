const cors = require("cors");
const express = require("express");
const app = express();
const pool = require("./connection/database");
const env = require("dotenv");
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
env.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000", // The origin of the front-end
    credentials: true, // Allow cookies
  })
);



app.listen(process.env.PORT, () => {
  console.log("App listening on port " + process.env.PORT);
});