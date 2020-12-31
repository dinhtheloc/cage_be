const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const ConfigPassport = require('./config/passport');
const ConfigMongodb = require('./config/mongodb');
const ConfigSocketChat = require('./config/socket/socketChat');
const app = require('express')();

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(bodyParser.json());
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

