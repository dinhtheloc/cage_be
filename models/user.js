const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    facebook_id: String,
    gender: {
        type: String,
        enum: ['none', 'male', 'female'],
        default: 'none'
    },
    avatar: String,
    valorant_id: String,
    valorant_name: String,
    rank: {
        type: String,
        enum: ['none', 'iron', 'bronze', 'silver', 'gold', 'platinum', 'diamond', 'immortal', 'radiant'],
        default: 'none'
    }
});

const userModel = mongoose.model("User", userSchema);
module.exports = { userSchema, userModel };