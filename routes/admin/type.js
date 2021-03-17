const express = require('express');
const Route = express.Router();
const { 
    createType,
    getType,
    // updateCategory
 } = require('../../controllers/type');

Route.get("/getType", (req, res) => getType(req, res));
Route.post('/createType', (req, res) => createType(req, res));
// Route.post('/updateCategory', (req, res) => updateCategory(req, res));

module.exports = Route;