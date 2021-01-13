const express = require('express');
const Route = express.Router();
const { createArticle, getArticles } = require('../controllers/article');

Route.get("/getArticles", (req, res) => getArticles(req, res));
Route.post('/createArticle', (req, res) => createArticle(req, res));

module.exports = Route;