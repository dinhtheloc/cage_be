const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    name: String,
    slug: String,
    isActive: Boolean,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now },
});

const type = mongoose.model("Type", typeSchema);
module.exports = type;