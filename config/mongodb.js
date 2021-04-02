const mongoose = require('mongoose');
const Mongodb = function () {
    // Connecting mongoDB
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.URL_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connected');
    },
        error => {
            console.log('Database could not be connected : ' + error);
        }
    );
    mongoose.set('useCreateIndex', true);
}

module.exports = Mongodb;