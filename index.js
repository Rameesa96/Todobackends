const express =require('express')
const mongoose = require('mongoose')
const bodyParser=require("body-parser")
const cors =require("cors")
const app =express()
require("dotenv").config()
const port = process.env.PORT
const connectionstring=process.env.Databaseurl
const Taskroute =require('./routers/Task')

//mongodb connection
mongoose.connect(connectionstring)

mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})
mongoose.connection.on("error",()=>{
    console.log("mongodb disconnected")
})

//middlewares

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/task",Taskroute)

app.listen(port,()=>{
    console.log("Server running on port 5000")
})