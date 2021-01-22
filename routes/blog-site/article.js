const express = require('express');
const Route = express.Router();
const { createArticle, getArticlesPublic,
    getArticleById,
    updateArticle, deleteArticle } = require('../../controllers/article');

Route.get("/getArticles", (req, res) => getArticlesPublic(req, res));
Route.post("/getArticleById", (req, res) => getArticleById(req, res));
Route.post('/createArticle', (req, res) => createArticle(req, res));
Route.post('/updateArticle', (req, res) => updateArticle(req, res));
Route.post('/deleteArticle', (req, res) => deleteArticle(req, res));

module.exports = Route;