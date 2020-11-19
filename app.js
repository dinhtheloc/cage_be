const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const http = require('http');
const socketio = require('socket.io');

const ConfigPassport = require('./config/passport');
const ConfigMongodb = require('./config/mongodb');
const ConfigSocketChat = require('./config/socket/socketChat');

// Setting up express
// const app = express();
const app = require('express')();
const server = require('http').createServer(app);
// const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

// Gửi yêu cầu phân tích kiểu nội dung application/json
app.use(bodyParser.json());
// Gửi yêu cầu phân tích kiểu nội dung application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

dotenv.config();

ConfigPassport(app);
ConfigMongodb();
ConfigSocketChat(io);

// Api root
const authenticateToken = require('./middleware/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const authRoute = require('./routes/auth');
app.use('/api', authenticateToken, userRoute);
app.use('/api', authenticateToken, postRoute);
app.use('/', authRoute);
app.use('/upload', express.static('public/upload'));

server.listen(process.env.PORT || 8080, () => console.log(`Server has started.`));