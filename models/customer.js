const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    dateOfBirth: { type: Date, default: null },
    address: String,
    phone: String,
    facebook: String,
    email: String,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now }
});

const customerModel = mongoose.model("Customer", customerSchema);
module.exports = { customerSchema, customerModel };