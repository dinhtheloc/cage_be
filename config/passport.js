const strategy = require('passport-facebook');
const passport = require('passport');
const userModel = require("../models/user");

const Strategy = strategy.Strategy;

const ConfigPassport = function (app) {

  app.use(passport.initialize());
  app.use(passport.session());

  // Configure the Facebook strategy for use by Passport.
  passport.use(new Strategy({ 
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL
  },
    function (accessToken, refreshToken, profile, done) {
      // Check the DB to find a User with the profile.id
      userModel.findOne({ facebook_id: profile.id }, function (err, user) {
        if (err) {
          console.log(err);  // handle errors!
        }
        if (user) {
          done(null, user);
        } else { // else create a new User
          user = new userModel({
            facebook_id: profile.id, // pass in the id and displayName params from Facebook
            name: profile.displayName
          });
          user.save(function (err) { // Save User if there are no errors else redirect to login route
            if (err) {
              console.log(err);  // handle errors!
            } else {
              done(null, user);
            }
          });
        }
      });
    }
  ));

  passport.serializeUser(function (user, cb) {
    cb(null, user);
  });
  passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
  });

}

module.exports = ConfigPassport;