const express = require('express');
const Route = express.Router();
const upload = require('../../middleware/upload');
const { getListImage, createImage, deleteImage } = require('../../controllers/image-blog');

Route.get("/getListImage", (req, res) => getListImage(req, res));
Route.post('/createImage', upload.single('image'),(req, res) => createImage(req, res));
Route.post('/deleteImage',(req, res) => deleteImage(req, res));

module.exports = Route;