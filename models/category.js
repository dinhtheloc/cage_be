const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    slug: String,
    isActive: Boolean,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now },
});

const category = mongoose.model("Category", categorySchema);
module.exports = category;