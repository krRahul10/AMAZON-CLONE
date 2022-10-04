const express = require("express")
const router = new express.Router()
const Products = require("../models/productsSchema")

// *************GET PRODUCTS API *************

router.get("/getproducts", async (req,res) =>{
    try{
        const productsdata = await Products.find()
        res.status(201).json(productsdata)
        // console.log("condole data", productsdata)

    }catch(err){
        console.log("error",err.message)
    }
})

module.exports = router

