const express = require('express');
const Route = express.Router();
const { 
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory
 } = require('../../controllers/category');

Route.get("/getCategory", (req, res, next) => getCategory(req, res, next));
Route.post('/createCategory', (req, res, next) => createCategory(req, res, next));
Route.post('/deleteCategory', (req, res, next) => deleteCategory(req, res, next));


module.exports = Route;