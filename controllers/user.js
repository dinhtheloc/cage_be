const {userModel} = require('../models/user');

const findUserByFacebookId = (facebookId) => {
    return new Promise(async resolve => {
        const user = await userModel.findOne({ facebook_id: facebookId }).exec();
        resolve(user);
    });
}

module.exports = { findUserByFacebookId };