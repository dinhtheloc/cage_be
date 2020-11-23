const { addMessage, getMessages } = require('./messages');

const ConfigSocketChat = (io) => {
    io.on('connect', (socket) => {
        socket.on('join', async ({ roomId }, callback) => {
            socket.join(roomId);

            const messages = await getMessages(roomId);
            io.to(`${socket.id}`).emit('getData', { messages });
        });

        socket.on('sendMessage', (data, callback) => {
            const { message, roomId, user } = data;

            const time = new Date();

            const dataCreate = {
                time, message, avatar: user.avatar, name: user.name, roomId, userId: user.facebook_id
            };
            addMessage(dataCreate);

            io.to(roomId).emit('message', { ...dataCreate });

            callback();
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