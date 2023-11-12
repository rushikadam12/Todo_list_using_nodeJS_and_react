const express=require('express');
const routes = express.Router();
const VerifyUser=require('./middleware')
const db =require('./Login')
routes.get('/UserInfo/:id',VerifyUser,async(req,res)=>{
    
    try{
    const {id}=req.params;
    sql="SELECT * FROM userinfo WHERE iduserinfo=?";
    db.query(sql,id,(err,result)=>{
        if(result&&result.length>0){
           res.send(result[0]);
        }else{
            res.send("No user Found")
        }
    })
   
    }catch(err){
        res.send(err)
    }
})



module.exports=routes;
