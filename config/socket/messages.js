
const messageModel = require('../../models/message');

const addMessage = (data) => {
  messageModel.create({ ...data }, (error, data) => {
    if (error) {
      console.log(error);
    }
  });
}

const getMessages = (roomId) => {
  return new Promise(resolve => {
    messageModel.find({ roomId }, function (err, docs) {
      resolve(docs);
    });
  });
}


module.exports = { addMessage, getMessages };