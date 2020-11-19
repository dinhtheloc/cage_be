const express = require('express');
const app = express();
const path = require('path');

// Express route
const Route = express.Router();
// mdw
const upload = require('../middleware/upload');

const Resize = require('../config/resize');

// User schema
let { userModel } = require('../models/user');

Route.get("/getUsers", (req, res) => {
    userModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


// Create user
Route.route('/createUsers').post((req, res, next) => {
    userModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


// Get single user
Route.route('/getUserById').get((req, res) => {
    const { _id } = res.locals.user;
    userModel.findById(_id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update user
Route.route('/updateUserById').put((req, res) => {
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
})


Route.post("/uploadAvatar", upload.single('image'), async function (req, res) {

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
})


// // Delete student
// expressRoute.route('/remove-student/:id').delete((req, res, next) => {
//     userModel.findByIdAndRemove(req.params.id, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.status(200).json({
//                 msg: data
//             })
//         }
//     })
// })

module.exports = Route;