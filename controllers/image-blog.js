const path = require('path');
const Resize = require('../config/resize');
const imageBlog = require('../models/image-blog');
const fs = require('fs');

const createImage = async (req, res) => {
    // folder upload
    const imagePath = path.join(__dirname, '../public/blog-images');
    // call class Resize
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
        res.status(400).send('Dữ liệu không hợp lệ');
    }

    const filename = await fileUpload.save(req.file.buffer);
    const body = {
        link: `/blog-images/${filename}`
    }

    imageBlog.create(body, (error, data) => {
        if (error) {
            res.status(500).send('Hệ thống gặp lỗi');
            return;
        } else {
            res.status(200).send(body.link);
        }
    });
}


const getListImage = async (req, res) => {
    imageBlog.find((error, data) => {
        if (error) {
            res.status(404).send('Lỗi không tìm ra');
        } else {
            res.json(data)
        }
    })

}

const deleteImage = async (req, res) => {

    const { link } = req.body;
    try {
        const imagePath = path.join(__dirname, '../public' + link);
        fs.unlinkSync(imagePath);
        imageBlog.findOneAndDelete({ link: link }, (err) => {
            if (err) {
                res.status(500).send('Hệ thống gặp lỗi');
                return;
            }
            res.status(200).send('Xóa thành công ' + link);
        });
    } catch (err) {
        // handle the error
        res.status(500).send('Hệ thống gặp lỗi');
        return;
    }
}


module.exports = { getListImage, createImage, deleteImage };