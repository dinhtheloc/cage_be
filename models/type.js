const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Tên sản phẩm đã được sử dụng.'],
        required: [true, 'Tên sản phẩm là trường bắt buộc.']
    },
    slug: String,
    isActive: Boolean,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now },
});

const type = mongoose.model("Type", typeSchema);
module.exports = type;