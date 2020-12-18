const roomChatModel = require('../models/roomChat');

const findRoomchat = (arrayUserIds) => {
    return new Promise(async resolve => {
        const roomChat = await roomChatModel.findOne({ arrayUserIds: { $all: arrayUserIds } }).exec();
        if (roomChat) {

            if (arrayUserIds[0] !== roomChat.lastMessages.userId && !roomChat.lastMessages.hasRead) {
                roomChat.lastMessages.hasRead = true;
                roomChat.save();
            }
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

        roomChat.updateTime = new Date;

        await roomChat.save();

        let fbIdSend = '';
        let fbIdReciever = '';

        if (roomChat.arrayUserIds.length === 2) {
            if (roomChat.arrayUserIds[0] === userId) {
                fbIdSend = roomChat.arrayUserIds[1];
                fbIdReciever = roomChat.arrayUserIds[0];
            } else {
                fbIdReciever = roomChat.arrayUserIds[1];
                fbIdSend = roomChat.arrayUserIds[0];
            }
        }

        const notificationsSend = await getNotifications(fbIdSend);
        const counSend = await countNotifications(fbIdSend);

        const notificationsReciever = await getNotifications(fbIdReciever);
        const countReciever = await countNotifications(fbIdReciever);


        resolve({ fbIdSend, fbIdReciever, notificationsReciever, countReciever, notificationsSend, counSend });
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
                    lastMessages: { $exists: true }
                }
            ]
        }).sort({ updateTime: 'desc' });
        resolve(notifications);
    })
}

const countNotifications = (facebook_id) => {

    return new Promise(async resolve => {
        const count = await roomChatModel.countDocuments({
            $and: [
                {
                    arrayUserIds: String(facebook_id)
                },
                {
                    "lastMessages.userId": { $ne: String(facebook_id) }
                },
                {
                    "lastMessages.hasRead": false
                },
                {
                    lastMessages: { $exists: true }
                }
            ]
        });

        resolve(count);
    })
}




module.exports = { findRoomchat, addMessage, getNotifications, countNotifications };