
const express = require('express');
const passport = require('passport');
const jwt = require("jsonwebtoken");
const route = express.Router();

route.get("/auth/facebook", passport.authenticate("facebook"));

route.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook"), (req, res) => {
    console.log('redirected', req.user)
    const {user} = req;
    let token = jwt.sign({
      data: user
    }, process.env.SECRET_TOKEN, { expiresIn: '1d' }); // expiry in seconds
    res.redirect(`http://localhost:3000/login-callback?token=${token}`);
  }
);

module.exports = route;