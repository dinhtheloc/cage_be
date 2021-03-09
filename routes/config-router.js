const ConfigRouter = (app) => {
    // Api root
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
}


module.exports = ConfigRouter;