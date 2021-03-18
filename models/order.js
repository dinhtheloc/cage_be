const mongoose = require('mongoose');
const customerSchema = require('./customer');
const productSchema = require('./product');

const orderSchema = new mongoose.Schema({
    name: String,
    address: String,
    customerInfo: {
        type: customerSchema,
        default: {}
    },
    list: Array,
    totalAmount: Number,
    profitAmount: Number,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now }
});

const order = mongoose.model("Order", orderSchema);
module.exports = order;