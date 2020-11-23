const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message: String,
    name: String,
    avatar: String,
    time: { type: Date, default: Date.now },
    roomId: String,
    userId: String
});

const message = mongoose.model("Message", messageSchema);
module.exports = message;