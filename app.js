const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const ConfigPassport = require('./config/passport');
const ConfigMongodb = require('./config/mongodb');

// Setting up express
const app = express();
// Gửi yêu cầu phân tích kiểu nội dung application/json
app.use(bodyParser.json());
// Gửi yêu cầu phân tích kiểu nội dung application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
dotenv.config();

ConfigPassport(app);
ConfigMongodb();

// Api root
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
app.use('/api', userRoute);
app.use('/', authRoute);

// Create port
const port = process.env.PORT || 8080;

// Conectting port
const server = app.listen(port, () => {
    console.log('Port connected to: ' + port)
})

// Find 404 and hand over to error handler
// app.use((req, res, next) => {
//     next(createError(404));
// });

// // Index Route
// app.get('/', (req, res) => {
//     res.send('invaild endpoint');
// });

// error handler
// app.use(function (err, req, res, next) {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).send(err.message);
// });

// Static build location
app.use(express.static(path.join(__dirname, 'dist')));