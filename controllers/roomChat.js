const roomChatModel = require('../models/roomChat');

const findRoomchat = (arrayUserIds) => {
    return new Promise(async resolve => {
        const roomChat = await roomChatModel.findOne({ arrayUserIds: { $in: arrayUserIds } }).exec();

        if (roomChat) {
            resolve(roomChat);
        } else {
            const object = {
                arrayUserIds: arrayUserIds,
                messages: []
            }
            const roomChatCreate = await roomChatModel.create(object);
            resolve(roomChatCreate);
        }
    });
}

const addMessage = async ({ roomId, time, message, avatar, name, userId }) => {
    const roomChat = await roomChatModel.findById(roomId).exec();
    const objMess = { message, name, avatar, time, userId };
    roomChat.messages = [...roomChat.messages, objMess];
    roomChat.save();
}

module.exports = { findRoomchat, addMessage };