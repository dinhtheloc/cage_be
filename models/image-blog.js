const mongoose = require('mongoose');

const imageBlogSchema = new mongoose.Schema({
    name: String,
    link: String,
    createDate: { type: Date, default: Date.now }
});

const imageBlog = mongoose.model("ImageBlog", imageBlogSchema);
module.exports = imageBlog;