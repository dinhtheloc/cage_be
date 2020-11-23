const express = require('express');
const Route = express.Router();
const {removeProperty} = require('../utilities/helper');

let post = require('../models/post');


Route.get("/getPosts", (req, res) => {
    post.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


// Create user
Route.route('/createPost').post((req, res, next) => {
    const { title, rank, slot, description } = req.body;

    if (!title && !rank && !slot && !description) {
        res.status(400).send('Dữ liệu không hợp lệ');
        return;
    }

    const user = res.locals.user;

    const createDate = new Date().now();

    const data = {
        title, rank, slot, description, user, createDate
    };

    post.create({...data}, (error, data) => {
        if (error) {
            res.status(500).send('Hệ thống gặp lỗi');
            return;
        } else {
            res.status(200).send('Tạo mới thành công');
        }
    })
});


module.exports = Route;