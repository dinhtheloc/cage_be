const express = require('express');
const app = express();

const authenticateToken = require('../middleware/auth');

// Express route
const Route = express.Router();

// User schema
let UserSchema = require('../models/user');

Route.get("/getUsers", authenticateToken, (req, res) => {
    UserSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


// Create user
Route.route('/createUsers').post((req, res, next) => {
    UserSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


// // Get single user
// expressRoute.route('/get-student/:id').get((req, res) => {
//     UserSchema.findById(req.params.id, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     })
// })


// // Update user
// expressRoute.route('/update-student/:id').put((req, res, next) => {
//     UserSchema.findByIdAndUpdate(req.params.id, {
//         $set: req.body
//     }, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.json(data)
//             console.log('Student successfully updated!')
//         }
//     })
// })

// // Delete student
// expressRoute.route('/remove-student/:id').delete((req, res, next) => {
//     UserSchema.findByIdAndRemove(req.params.id, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.status(200).json({
//                 msg: data
//             })
//         }
//     })
// })

module.exports = Route;