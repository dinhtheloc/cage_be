const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401); // if there isn't any token

  jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    console.log('user', user);
    next(); // pass the execution off to whatever request the client intended
  })
};