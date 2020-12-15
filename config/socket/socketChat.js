// const { addMessage, getMessages } = require('./messages');

const { findRoomchat, addMessage, getNotifications } = require('../../controllers/roomChat');
const { findUserByFacebookId } = require('../../controllers/user');

const ConfigSocketChat = (io) => {
    io.on('connection', (socket) => {

        socket.on('join', async ({ arrayUserIds, facebook_id }, callback) => {
            if (arrayUserIds[0] === arrayUserIds[1]) { 
                callback({status: "Error: duplicate facebook id"});
                return;
            }
            const roomChat = await findRoomchat(arrayUserIds);
            const user = await findUserByFacebookId(facebook_id);
            const { _id, messages } = roomChat;
            socket.join(String(_id));
            io.to(socket.id).emit('getData', { messages, roomId: _id, user });
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
            const {fbId, notifications} = await addMessage(dataCreate);
            io.in(String(dataCreate.roomId)).emit('message', dataCreate);
            io.in(String(`${fbId}_notifications`)).emit('notifications', notifications);
        });

        socket.on('joinNotification', async ({ facebook_id }, callback) => {
            const notifications = await getNotifications(facebook_id);
            socket.join(String(`${facebook_id}_notifications`));
            io.to(socket.id).emit('getNotifications', { notifications });
        });

        // socket.on('notifications', () => {
        //     const user = removeUser(socket.id);

        //     if (user) {
        //         io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
        //         io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        //     }
        // })
    });
}


module.exports = ConfigSocketChat;