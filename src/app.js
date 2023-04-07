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
    try{
        //if(products){
        //if(products.length>0){
            res.status(200).json({status: "success",message: "Product fetched successfully", data :{product: products}});
        //}else{
            //res.status(404).json({message: "Product not found"});
        //}
    //}else{
       // res.status(404).json({message: "Product not found"});
    // }
    }catch(err){
        cosole.log(err);
    }
})
module.exports = app;
