// const { addMessage, getMessages } = require('./messages');

const { findRoomchat, addMessage } = require('../../controllers/roomChat');
const { findUserByFacebookId } = require('../../controllers/user');

const ConfigSocketChat = (io) => {
    io.on('connection', (socket) => {

        socket.on('join', async ({ arrayUserIds, facebook_id }, callback) => {
            const roomChat = await findRoomchat(arrayUserIds);
            const user = await findUserByFacebookId(facebook_id);
            const { _id, messages } = roomChat;
            console.log(_id);
            socket.join(String(_id));

            
            io.to(socket.id).emit('getData', { messages, roomId: _id, user });
        });

        socket.on('sendMessage', (data, callback) => {
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
            addMessage(dataCreate);
            io.in(String(dataCreate.roomId)).emit('message', dataCreate);
        });

        // socket.on('disconnect', () => {
        //     const user = removeUser(socket.id);

        //     if (user) {
        //         io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
        //         io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        //     }
        // })
    });
}


module.exports = ConfigSocketChat;