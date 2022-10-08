require("dotenv").config()
require("./db/conn")

const express = require("express")
const app = express()
const Products = require("./models/productsSchema")
const DefaultData = require('./defaultdata')
const cors = require("cors")
const port = 8080
const router = require("./routes/router")
const cookieParser = require("cookie-parser")




app.use(cors())
app.use(express.json())
app.use(cookieParser(""))
app.use(router)


app.listen(port,()=>{
    console.log(`server start at Your PORT ${port}`)
})

DefaultData()