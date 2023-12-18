const express = require("express");
const routes = express.Router();
const VerifyUser=require('./middleware');
const mysql=require('mysql2');
const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
  

routes.post('/userTask',VerifyUser,(req,res)=>{
    const {task,name}=req.body;
    const id=req.userId;
    console.log(task,name,id)
    
    sql= "INSERT INTO basic_crud.taskset (id,name,task) VALUES (?,?,?)";
    db.query(sql,[id,name,task],async(err,result)=>{
        try{
        if(err){
            res.send({'Error':'Data from database is not fetched'})
            console.log("Data base error")
            console.error(err);
            
        }else{
            res.send({'id':id,'name':name,'task':task,'status':'ok'});
        }

    }catch(err){
            res.send(err);
    }})


})

routes.get('/getuserTask',VerifyUser,async(req,res)=>{
    try{
    const id=req.userId;
    //console.log(id)
    sql="SELECT * FROM basic_crud.taskset WHERE id=?"
    db.query(sql,[id],(err,result)=>{
        if(err){
            res.send({error:err});
        }else{
            if(result.length>0){
                res.send(result);
               
            }
        }
    })}catch(err){
        console.log(err);
    }
})

routes.post('/TaskChecked',VerifyUser,async(req,res)=>{
    try{
    const id=req.userId;
    const {check,task}=req.body;
    let Bicheck= Number(check).toString(2);
    sql="UPDATE basic_crud.taskset SET complete=? WHERE id=? AND task=?"
    
    db.query(sql,[Bicheck,id,task],(err,result)=>{
        if(err){
            res.send(result);
            console.log(err);
        }else{
            res.send({id:id,check:check,status:'ok'})
            console.log("data is checked");
        }
    })
    }catch(err){
        console.log(err)
    }
    
})

// routes.get('/TaskCheckComplete',async(req,res)=>{
//     try{
        
//     }catch(err){
//         res.send(err);
//     }

// })

module.exports=routes;