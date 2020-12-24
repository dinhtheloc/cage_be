const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const fs = require('fs');
const ConfigPassport = require('./config/passport');
const ConfigMongodb = require('./config/mongodb');
const ConfigSocketChat = require('./config/socket/socketChat');

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/cayghe.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/cayghe.com/fullchain.pem'),
};

const app = require('express')();


const server = http.createServer(app);

const io = socketio(server);

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
app.use('/api', authenticateToken, [userRoute, postRoute]);
// app.use('/api', authenticateToken, postRoute);
// app.use('/api', authenticateToken, messageRoute);
app.use('/', authRoute);
app.use('/upload', express.static('public/upload'));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(process.env.PORT || 3001, () => console.log(`Server has started.`));

