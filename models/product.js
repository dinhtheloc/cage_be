const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    categoryId: String,
    typeId: String,
    avatar: String,
    name: String,
    slug: String,
    images: {
        type: [String],
        default: []
    },
    loves: Number,
    buyingPrice: Number,
    saleprice: Number,
    inventoryNumber: Number,
    shortDescription: String,
    description: String,
    isActive: Boolean,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now },
});

const product = mongoose.model("Product", productSchema);
module.exports = product;