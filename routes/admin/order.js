const express = require('express');
const Route = express.Router();
const { 
    createOrder,
    getOrderById,
    getOrder,
    updateOrder,
    deleteOrder
 } = require('../../controllers/order');

Route.get("/getOrder", (req, res) => getOrder(req, res));
Route.get("/getOrderById", (req, res) => getOrderById(req, res));
Route.post('/createOrder', (req, res) => createOrder(req, res));
Route.post('/updateOrder', (req, res) => updateOrder(req, res));
Route.post('/deleteOrder', (req, res) => deleteOrder(req, res));

module.exports = Route;