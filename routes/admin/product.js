const express = require('express');
const Route = express.Router();
const { 
    createProduct,
    getProductById,
    getProduct,
    updateProduct,
    deleteProduct
 } = require('../../controllers/product');

Route.get("/getProduct", (req, res) => getProduct(req, res));
Route.get("/getProductById", (req, res) => getProductById(req, res));
Route.post('/createProduct', (req, res) => createProduct(req, res));
Route.post('/updateProduct', (req, res) => updateProduct(req, res));
Route.post('/deleteProduct', (req, res) => deleteProduct(req, res));

module.exports = Route;