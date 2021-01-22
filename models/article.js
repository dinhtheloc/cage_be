const mongoose = require('mongoose');
// const { userSchema } = require('./user');

const articleSchema = new mongoose.Schema({
    slugName: String,
    title: String,
    description: String,
    image400x400: String, 
    banner: String,
    body: String,
    published: { type: Boolean, default: false },
    updateDate: { type: Date, default: Date.now },
    createDate: { type: Date, default: Date.now }
});

const article = mongoose.model("Article", articleSchema);
module.exports = article;