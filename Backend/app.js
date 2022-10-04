require("dotenv").config()
require("./db/conn")
const express = require("express")
const app = express()
const Products = require("./models/productsSchema")
const DefaultData = require('./defaultdata')
const cors = require("cors")

const port = 8080




app.use(express.json())
app.use(cors())

app.get("/",(req,res) =>{                           
    res.json("hello Rahul")
})

app.listen(port,()=>{
    console.log(`server start at Your PORT ${port}`)
})

DefaultData()