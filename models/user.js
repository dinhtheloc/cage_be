const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    facebook_id: String,
    gender: String,
    avatar: String
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;