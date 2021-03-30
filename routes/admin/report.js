const express = require('express');
const Route = express.Router();
const { 
    getTrendingProducts,
    getRankCustomers,
    getReportOrder,
    getDataChart
 } = require('../../controllers/report');

Route.get("/getTrendingProducts", (req, res) => getTrendingProducts(req, res));
Route.get("/getRankCustomers", (req, res) => getRankCustomers(req, res));
Route.get("/getReportOrder", (req, res) => getReportOrder(req, res));
Route.post("/getDataChart", (req, res) => getDataChart(req, res));

module.exports = Route;