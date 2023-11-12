const express = require("express");
const bcrypt = require("bcrypt");
const routes = express.Router();
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const session = require("express-session");
const VerifyUser = require("./middleware");
module.exports=db = mysql.createConnection({
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

routes.get("/CheckUser", VerifyUser, (req, res) => {
  res.send({ msg: "your are authenticated" });
});

routes.post("/SignUp", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hpassword = await bcrypt.hash(password, parseInt(process.env.SALT));

    const sql = "INSERT INTO userinfo (name,email,password) VALUES (?,?,?)";

    db.query(sql, [username, email, hpassword], (err, result) => {
      if (err) res.send(err);
      else res.json({ msg: "data is added"});
    });
  } catch (err) {
    res.send(err);
  }
});
routes.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  sql = "SELECT * FROM userinfo WHERE email=?";
  db.query(sql, email, (err, result) => {
    if (err) {
      res.send("wrong email");
    }
    if (result.length > 0) {
      //comparing user password and database password using bcrypt
      bcrypt.compare(password, result[0].password, (err, response) => {
        if (err) res.json({ error_msg: "wrong password" });
        if (response) {
          const id = result[0].id;
          //create the token
          const token = jwt.sign({ id }, process.env.SECR_KEY, {
            expiresIn: 300,
          });
          req.session.user = result; //to save the result in user session
          res.json({
            auth: true,
            msg: "ok",
            token: token,
          });
        } else {
          res.json({ auth: "false", error_msg: "wrong/password" });
        }
      });
    } else {
      res.send({ error_msg: "no user found", auth: false });
    }
  });
});

module.exports = routes;
