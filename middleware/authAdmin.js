module.exports = (req, res, next) => {
  if (localStorage.getItem('SECRET_PASSWORD_ADMIN') === process.env.SECRET_TOKEN) {
    next();
  } else {
    return res.sendStatus(403);
  }
};