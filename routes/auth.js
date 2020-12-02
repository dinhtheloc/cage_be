
const express = require('express');
const passport = require('passport');
const route = express.Router();
const { callbackLoginFacebook } = require('../controllers/auth');

route.get("/auth/facebook", passport.authenticate("facebook"));

route.get("/auth/facebook/callback", passport.authenticate("facebook"), (req, res) => callbackLoginFacebook(req, res));

module.exports = route;