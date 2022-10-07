const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");

// *************GET PRODUCTS API *************

router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await Products.find();
    res.status(201).json(productsdata);
    // console.log("console data", productsdata)
  } catch (err) {
    res.status(422).json(err.message);
    console.log("error", err.message);
  }
});

// ************GET INDIVIDUAL DATA *******

router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const individualData = await Products.findOne({ id: id });

    // console.log(individualData);

    res.status(201).json(individualData);
  } catch (err) {
    res.status(422).json(err.message);
  }
});

module.exports = router;
