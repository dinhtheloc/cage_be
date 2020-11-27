const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message: String,
    name: String,
    avatar: String,
    time: { type: Date, default: Date.now },
    roomId: String,
    userId: String
});

const messageModel = mongoose.model("Message", messageSchema);
module.exports = { messageSchema, messageModel };