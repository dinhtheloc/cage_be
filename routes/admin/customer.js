const express = require('express');
const Route = express.Router();
const { 
    createCustomer,
    getCustomerById,
    getCustomer,
    updateCustomer,
    deleteCustomer
 } = require('../../controllers/customer');

Route.get("/getCustomer", (req, res) => getCustomer(req, res));
Route.get("/getCustomerById", (req, res) => getCustomerById(req, res));
Route.post('/createCustomer', (req, res) => createCustomer(req, res));
Route.post('/updateCustomer', (req, res) => updateCustomer(req, res));
Route.post('/deleteCustomer', (req, res) => deleteCustomer(req, res));

module.exports = Route;