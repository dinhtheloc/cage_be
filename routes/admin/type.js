const express = require('express');
const Route = express.Router();
const { 
    createType,
    getType,
    deleteType
 } = require('../../controllers/type');

Route.get("/getType", (req, res, next) => getType(req, res, next));
Route.post('/createType', (req, res, next) => createType(req, res, next));
Route.post('/deleteType', (req, res) => deleteType(req, res));

module.exports = Route;