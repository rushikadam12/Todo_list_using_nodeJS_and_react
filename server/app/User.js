const express = require("express");
const routes = express.Router();
const VerifyUser = require("./middleware");
const db = require("./Login");
routes.get("/UserInfo", VerifyUser, async (req, res) => {
  try {
    const  id = req.userId;
    sql = "SELECT * FROM userinfo WHERE iduserinfo=?";
    db.query(sql, id, (err, result) => {
      if (err) {
        res.send(err);
        console.error("Error querying the database:", err);
      }
      if (result.length > 0) {
        res.send({user:result[0]});
        console.log(result)
      } else {
        res.send("No user Found");
      }
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = routes;
