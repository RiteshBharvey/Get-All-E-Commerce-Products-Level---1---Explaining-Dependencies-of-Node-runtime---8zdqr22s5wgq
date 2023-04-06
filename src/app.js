const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

// Write GET endpoint for sending all the products to client here
// Endpoint - /api/v1/products

app.get("/api/v1/products",(req,res,next)=>{
  if(req.url==="/products"){
    res.status(200).send(products);
  }else{
    res.status(400).send({message: "Product not found"});
  }
})

module.exports = app;
