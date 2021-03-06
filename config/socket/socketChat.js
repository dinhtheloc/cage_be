// const { addMessage, getMessages } = require('./messages');
const { userModel } = require('../../models/user');
const { findRoomchat, addMessage, getNotifications, countNotifications } = require('../../controllers/roomChat');
const { findUserByFacebookId } = require('../../controllers/user');

let numClients = 0;
let listUserOnline = [];

const ConfigSocketChat = (io) => {
    io.on('connection', async (socket) => {
        const { _id } = socket.handshake.query;

        if (_id) {
            const user = await userModel.findById(_id).exec();
            const existingUser = listUserOnline.find((user) => String(user._id) === String(_id));

            if (!existingUser) {

                listUserOnline.push(user);
                numClients++;
                io.emit('stats', { numClients: numClients, listUserOnline });

            }
        }

        socket.on('disconnect', function () {
            const index = listUserOnline.findIndex((user) => String(user._id) === String(_id));
            if (index !== -1) {
                numClients--;
                listUserOnline.splice(index, 1);
                io.emit('stats', { numClients: numClients, listUserOnline });
            }
        });
        // count client

        socket.on('join', async ({ arrayUserIds }, callback) => {
            if (arrayUserIds[0] === arrayUserIds[1]) {
                callback({ status: "Error: duplicate facebook id" });
                return;
            }
            const roomChat = await findRoomchat(arrayUserIds);
            const user = await findUserByFacebookId(arrayUserIds[1]);
            const { _id, messages } = roomChat;

            socket.join(String(_id));
            io.to(socket.id).emit('getData', { messages, roomId: _id, user });

            const notifications = await getNotifications(arrayUserIds[0]);
            const count = await countNotifications(arrayUserIds[0]);
            io.in(String(`${arrayUserIds[0]}_notifications`)).emit('notifications', { notifications, count });
        });

        socket.on('sendMessage', async (data, callback) => {
            const { message, roomId, user } = data;
            const time = new Date();

            const dataCreate = {
                roomId,
                time,
                message,
                avatar: user.avatar,
                name: user.name,
                userId: user.facebook_id
            };
            const { fbIdSend, fbIdReciever, notificationsReciever, countReciever, notificationsSend, counSend } = await addMessage(dataCreate);
            io.in(String(dataCreate.roomId)).emit('message', dataCreate);
            io.in(String(`${fbIdSend}_notifications`)).emit('notifications', { notifications: notificationsSend, count: counSend });
            io.in(String(`${fbIdReciever}_notifications`)).emit('notifications', { notifications: notificationsReciever, count: countReciever });
        });

        socket.on('joinNotification', async ({ facebook_id }, callback) => {
            const notifications = await getNotifications(facebook_id);
            const count = await countNotifications(facebook_id);
            socket.join(String(`${facebook_id}_notifications`));
            io.to(socket.id).emit('getNotifications', { notifications, count });
        });

    });
}


module.exports = ConfigSocketChat;