const ConfigRouter = (app) => {
    // Api root
    const express = require('express');
    const path = require('path');
    const authenticateToken = require('../middleware/auth');
    const userRoute = require('./admin/users');
    const postRoute = require('./admin/posts');
    const articleRoute = require('./admin/article');
    const imageBlogRoute = require('./admin/image-blog');
    const authRoute = require('./admin/auth');
    const blogArticleRoute = require('./blog-site/article');

    const categoryRoute = require('./admin/category');
    const productRoute = require('./admin/product');

    const listRouteBO = [
        userRoute,
        postRoute,
        articleRoute,
        imageBlogRoute,
        // xing beauty
        categoryRoute,
        productRoute
    ];


    app.use('/api', authenticateToken, listRouteBO);

    app.use('/', authRoute);
    app.use('/api-blog', blogArticleRoute);
    app.use('/upload', express.static('public/upload'));
    app.use('/blog-images', express.static('public/blog-images'));
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

    // Handles any requests that don't match the ones above
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}


module.exports = ConfigRouter;