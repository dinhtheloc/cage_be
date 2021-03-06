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
    const typeRoute = require('./admin/type');
    const productRoute = require('./admin/product');
    const orderRoute = require('./admin/order');
    const customerRoute = require('./admin/customer');
    const reportRoute = require('./admin/report');

    const errorController = require('../controllers/errorController');


    const listRouteBO = [
        userRoute,
        postRoute,
        articleRoute,
        imageBlogRoute,
        // xing beauty
        categoryRoute,
        typeRoute,
        productRoute,
        customerRoute,
        orderRoute,
        reportRoute
    ];


    app.use('/api', authenticateToken, listRouteBO);
    app.use('/', authRoute);
    app.use('/api-blog', blogArticleRoute);

    app.use(errorController);

}


module.exports = ConfigRouter;