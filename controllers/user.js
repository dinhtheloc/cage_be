const { userModel } = require('../models/user');
const path = require('path');
const Resize = require('../config/resize');

const findUserByFacebookId = (facebookId) => {
    return new Promise(async resolve => {
        const user = await userModel.findOne({ facebook_id: facebookId }).exec();
        resolve(user);
    });
}


const getUsers = (req, res) => {
    userModel.find((error, data) => {
        if (error) {
            res.status(404).send('Lỗi không tìm ra');
        } else {
            res.json(data)
        }
    })
}

const createUsers = (req, res) => {
    userModel.create(req.body, (error, data) => {
        if (error) {
            res.status(404).send('Lỗi không tìm ra');
        } else {
            res.json(data)
        }
    });
}
const getUserById = (req, res) => {
    const { _id } = res.locals.user;
    userModel.findById(_id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
}

const updateUserById = (req, res) => {
    const { name, valorant_id, valorant_name, rank, gender } = req.body.data;
    const { _id } = res.locals.user;
    if (!name || !valorant_id, !valorant_name) {
        res.status(400).send('Dữ liệu không hợp lệ');
        return;
    }

    userModel.findById(_id,
        function (err, user) {
            if (!err) {
                user.name = name;
                user.valorant_id = valorant_id;
                user.valorant_name = valorant_name;

                if (rank) {
                    user.rank = rank;
                }

                if (gender) {
                    user.gender = gender;
                }

                user.save(function (err, user) {
                    if (err) {
                        res.status(500).send('Hệ thống gặp lỗi');
                        return;
                    }
                    res.status(200).send('Cập nhật thành công');
                });
            } else {
                res.status(500).send('Hệ thống gặp lỗi');
                return;
            }
        }
    );
}
const uploadAvatar = async (req, res) => {

    const { _id } = res.locals.user;
    // folder upload
    const imagePath = path.join(__dirname, '../public/upload');
    // call class Resize
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
        res.status(400).send('Dữ liệu không hợp lệ');
    }

    const filename = await fileUpload.save(req.file.buffer);

    const user = await userModel.findById(_id);
    user.avatar = filename;
    user.save();
    res.status(200).send('Cập nhật thành công');
}

module.exports = {
    findUserByFacebookId, getUsers, createUsers,
    getUserById, updateUserById, uploadAvatar
};