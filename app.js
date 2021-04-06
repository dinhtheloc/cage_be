const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const http = require('http');
const socketio = require('socket.io');
const ConfigPassport = require('./config/passport');
const ConfigMongodb = require('./config/mongodb');
const ConfigSocketChat = require('./config/socket/socketChat');
const ConfigRouter = require('./routes/config-router');
const app = require('express')();

const express = require('express');
const path = require('path');

const server = http.createServer(app);
// const io = socketio(server, {
//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"]
//     }
// });

app.use(cors());
app.use(bodyParser.json());
// Put these statements before you define any routes.
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config({ path: path.join(__dirname, '.env') });

ConfigPassport(app);
ConfigMongodb();
// ConfigSocketChat(io);

ConfigRouter(app);

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



// function ChangeToSlug(name) {
//     let slug;

//     //Đổi chữ hoa thành chữ thường
//     slug = name.toLowerCase();
//     //Đổi ký tự có dấu thành không dấu
//     slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
//     slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
//     slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
//     slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
//     slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
//     slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
//     slug = slug.replace(/đ/gi, 'd');
//     //Xóa các ký tự đặt biệt
//     slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
//     //Đổi khoảng trắng thành ký tự gạch ngang
//     slug = slug.replace(/ /gi, "-");
//     //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
//     //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
//     slug = slug.replace(/\-\-\-\-\-/gi, '-');
//     slug = slug.replace(/\-\-\-\-/gi, '-');
//     slug = slug.replace(/\-\-\-/gi, '-');
//     slug = slug.replace(/\-\-/gi, '-');
//     //Xóa các ký tự gạch ngang ở đầu và cuối
//     slug = '@' + slug + '@';
//     slug = slug.replace(/\@\-|\-\@|\@/gi, '');
//     //In slug ra textbox có id “slug”
//     return slug;
// }

// const data = require('./dataProduct2');
// const {productModel} = require('./models/product');

// const arrayData = [];

// data.map(i => {

//     const slug = ChangeToSlug(i.name);
//     const name = i.name;
//     const inventoryNumber = i.inventoryNumber;
//     const buyingPrice = Number(i.buyingPrice) * 1000;
//     const saleprice = Number(i.saleprice) * 1000;
//     const isActive = true;

//     const categoryId = '';
//     const typeId = '';
//     const avatar = '';
//     const shortDescription = '';
//     const description = '';
//     const images = [''];
//     const loves = 0;

//     const bodyCreate = {
//         name,
//         slug,
//         inventoryNumber,
//         buyingPrice,
//         saleprice,
//         isActive,

//         categoryId,
//         typeId,
//         avatar,
//         shortDescription,
//         description,
//         images,
//         loves
//     };

//     arrayData.push(bodyCreate);
// });

// console.log(arrayData);

// import data

// productModel.insertMany(arrayData, function(error, docs) {
//     console.log('error', error);
//     console.log('docs', docs);
// });





server.listen(process.env.PORT || 3001, () => console.log(`Server has started.` + process.env.PORT));

