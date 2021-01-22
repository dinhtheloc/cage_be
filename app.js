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
// Put these statements before you define any routes.
app.use(bodyParser.urlencoded({ extended: true })); 

dotenv.config();

ConfigPassport(app);
ConfigMongodb();
ConfigSocketChat(io);
// Api root
const authenticateToken = require('./middleware/auth');
const userRoute = require('./routes/admin/users');
const postRoute = require('./routes/admin/posts');
const articleRoute = require('./routes/admin/article');
const imageBlogRoute = require('./routes/admin/image-blog');
const authRoute = require('./routes/admin/auth');
const blogArticleRoute = require('./routes/blog-site/article');
app.use('/api', authenticateToken, [userRoute, postRoute, articleRoute, imageBlogRoute]);
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

server.listen(process.env.PORT || 3001, () => console.log(`Server has started.`));

