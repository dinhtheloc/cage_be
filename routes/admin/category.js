const express = require('express');
const Route = express.Router();
const { 
    createCategory,
    getCategory,
    updateCategory
 } = require('../../controllers/category');

Route.get("/getCategory", (req, res) => getCategory(req, res));
Route.post('/createCategory', (req, res) => createCategory(req, res));
Route.post('/updateCategory', (req, res) => updateCategory(req, res));

module.exports = Route;