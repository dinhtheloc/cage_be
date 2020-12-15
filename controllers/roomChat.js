const roomChatModel = require('../models/roomChat');

const findRoomchat = (arrayUserIds) => {
    return new Promise(async resolve => {
        const roomChat = await roomChatModel.findOne({ arrayUserIds: { $all: arrayUserIds } }).exec();

        console.log('arrayUserIds', arrayUserIds);
        console.log('roomChat', roomChat);
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

const addMessage = ({ roomId, time, message, avatar, name, userId }) => {
    return new Promise(async resolve => {
        const roomChat = await roomChatModel.findById(roomId).exec();
        const objMess = { message, name, avatar, time, userId };
        roomChat.messages = [...roomChat.messages, objMess];
        roomChat.lastMessages = {
            message: message,
            userId: userId,
            name: name,
            avatar: avatar,
            hasRead: false,
            time: time
        }

        let fbId = '';

        if (roomChat.arrayUserIds.length === 2) {
            if (roomChat.arrayUserIds[0] === userId) {
                fbId = roomChat.arrayUserIds[1];
            } else {
                fbId = roomChat.arrayUserIds[0];
            }
        }

        const notifications = await roomChatModel.find({ arrayUserIds: fbId });
        roomChat.save();
        resolve({ fbId, notifications });
    });
}

const getNotifications = (facebook_id) => {
    return new Promise(async resolve => {
        const notifications = await roomChatModel.find({
            $and: [
                {
                    arrayUserIds: facebook_id
                },
                {
                    lastMessages: {$exists: true}
                }
            ]
        });
        resolve(notifications);
    })
}




module.exports = { findRoomchat, addMessage, getNotifications };