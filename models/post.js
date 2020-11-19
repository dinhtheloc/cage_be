const mongoose = require('mongoose');
const { userSchema } = require('./user');

const postSchema = new mongoose.Schema({
    title: String,
    rank: {
        type: String,
        enum: ['none', 'iron', 'bronze', 'silver', 'gold', 'platinum', 'diamond', 'immortal', 'radiant'],
        default: 'none'
    },
    slot: Number,
    description: String,
    createDate: { type: Date, default: Date.now },
    user: {
        type: userSchema,
        default: {}
    }
});

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;