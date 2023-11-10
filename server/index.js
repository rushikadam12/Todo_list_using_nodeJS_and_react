require('dotenv').config();

const express=require('express');
const app=express();
const port = 3001;
const cors=require('cors')
const Login=require('./app/Login');
const session = require('express-session');
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));

app.use(session({
    key:"userId",
    secret:process.env.SECR_KEY,
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*60*24,
    },
}))

app.use(Login)


app.listen(port,()=>{
    console.log('server is online');
})