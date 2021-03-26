const express = require('express');
const Route = express.Router();
const { 
    getTrendingProducts,
    getRankCustomers
 } = require('../../controllers/report');

Route.get("/getTrendingProducts", (req, res) => getTrendingProducts(req, res));
Route.get("/getRankCustomers", (req, res) => getRankCustomers(req, res));

module.exports = Route;