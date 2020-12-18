const mongoose = require('mongoose');
const messageSchema = require('./message');

const roomChatSchema = new mongoose.Schema({
    arrayUserIds: {
        type: [String],
        validate: [arrayLimit, 'Mảng chỉ chứa 2 phần tử'],
        required: true
    },
    messages: {
        type: messageSchema,
        default: []
    },
    lastMessages: {
        message: String,
        userId: String,    
        name: String,
        avatar: String,
        hasRead: Boolean,
        time: Date
    },
    updateTime: { type: Date, default: Date.now }
});

function arrayLimit(val) {
    return val.length <= 2;
}

const roomChatModel = mongoose.model("RoomChat", roomChatSchema);
module.exports = roomChatModel;