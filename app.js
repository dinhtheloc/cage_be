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
const authenticateToken = require('./middleware/auth');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
app.use('/api',authenticateToken, userRoute );
app.use('/', authRoute);

// Create port
const port = process.env.PORT || 8080;

// Conectting port
app.listen(port, () => {
    console.log('Port connected to: ' + port)
});

// Static build location
app.use(express.static(path.join(__dirname, 'dist')));