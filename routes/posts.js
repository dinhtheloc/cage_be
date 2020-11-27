const express = require('express');
const Route = express.Router();
const {removeProperty} = require('../utilities/helper');

let post = require('../models/post');


Route.get("/getPosts", async (req, res) => {

    

    const { pageIndex = 1, pageSize = 1 } = req.query;

    try {
        // execute query with page and limit values
        const posts = await post.find()
          .limit(pageSize * 1)
          .skip((pageIndex - 1) * pageSize)
          .exec();
    
        // get total documents in the Posts collection 
        const count = await post.countDocuments();
    
        // return response with posts, total pages, and current page
        res.json({
          posts,
          count,
          totalPages: Math.ceil(count / pageSize),
          pageIndex
        });
      } catch (err) {
        console.error(err.message);
      }
});


// Create user
Route.route('/createPost').post((req, res, next) => {
    const { title, rank, slot, description } = req.body;

    if (!title && !rank && !slot && !description) {
        res.status(400).send('Dữ liệu không hợp lệ');
        return;
    }

    const user = res.locals.user;

    const createDate = new Date();

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