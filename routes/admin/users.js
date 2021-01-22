const express = require('express');
const Route = express.Router();
const upload = require('../../middleware/upload');

const { getUsers, createUsers, updateOnlineOffline,
    getUserById, updateUserById, uploadAvatar } = require('../../controllers/user');

Route.get("/getUsers", (req, res) => getUsers(req, res));

Route.post('/createUsers', (req, res) => createUsers(req, res));

Route.get("/getUserById", (req, res) => getUserById(req, res));

Route.put('/updateUserById', (req, res) => updateUserById(req, res));

Route.post("/uploadAvatar", upload.single('image'), (req, res) => uploadAvatar(req, res));

Route.put('/updateOnlineOffline', (req, res) => updateOnlineOffline(req, res));

module.exports = Route;