require("dotenv").config()
require("./db/conn")
const express = require("express")

const port = 8080
const app = express()

app.get("/",(req,res) =>{
    res.json("hello Rahul")
})

app.listen(port,()=>{
    console.log(`server start at Your PORT ${port}`)
})