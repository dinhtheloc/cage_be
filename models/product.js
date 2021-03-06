const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    categoryId: String,
    typeId: String,
    avatar: String,
    name: {
        type: String,
        unique: [true, 'Tên sản phẩm đã được sử dụng.'],
        required: [true, 'Tên sản phẩm là trường bắt buộc.']
    },
    slug: String,
    images: Array,
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

const productModel = mongoose.model("Product", productSchema);
module.exports = { productSchema, productModel };