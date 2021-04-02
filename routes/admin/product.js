const express = require('express');
const Route = express.Router();
const { 
    createProduct,
    getProductById,
    getProduct,
    updateProduct,
    deleteProduct
 } = require('../../controllers/product');

Route.get("/getProduct", (req, res, next) => getProduct(req, res, next));
Route.get("/getProductById", (req, res, next) => getProductById(req, res, next));
Route.post('/createProduct', (req, res, next) => createProduct(req, res, next));
Route.post('/updateProduct', (req, res, next) => updateProduct(req, res, next));
Route.post('/deleteProduct', (req, res, next) => deleteProduct(req, res, next));

module.exports = Route;