const express = require('express');
const Route = express.Router();
const { removeProperty } = require('../../utilities/helper');
const { getPosts, createPost } = require('../../controllers/post');

Route.get("/getPosts", (req, res) => getPosts(req, res));
Route.post('/createPost', (req, res) => createPost(req, res));

module.exports = Route;