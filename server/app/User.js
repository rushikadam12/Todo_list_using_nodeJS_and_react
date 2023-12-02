const express = require("express");
const routes = express.Router();
const VerifyUser = require("./middleware");
const jwt=require('jsonwebtoken');
const mysql=require('mysql2')
const db = mysql.createConnection({
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

routes.get("/UserInfo", VerifyUser, async (req, res) => {
  try {
    /*const authtoken= req.headers["x-access-token"];;
    const decode=jwt.verify(authtoken,process.env.SECR_KEY);
    //const Id=req.userId*/
    
    const id=req.userId;
    //console.log(id);
    sql = "SELECT * FROM userinfo WHERE iduserinfo=?";
    db.query(sql,[id], (err, result) => {
      if (err) {
        res.send(err);
        console.error("Error querying the database:", err);
      }
      if (result.length > 0) {
        res.send({user:result[0]});
       // console.log(result)
      } else {
        res.send("No user Found");
      }
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = routes;
