const express = require('express');
const Route = express.Router();
const { createArticle, getArticles, updateArticle, deleteArticle } = require('../../controllers/article');

Route.get("/getArticles", (req, res) => getArticles(req, res));
Route.post('/createArticle', (req, res) => createArticle(req, res));
Route.post('/updateArticle', (req, res) => updateArticle(req, res));
Route.post('/deleteArticle', (req, res) => deleteArticle(req, res));

module.exports = Route;