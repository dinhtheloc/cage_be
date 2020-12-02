const jwt = require("jsonwebtoken");

const callbackLoginFacebook = (req, res) => {
    const { user } = req;
    let token = jwt.sign({
        data: user
    }, process.env.SECRET_TOKEN, { expiresIn: '1d' });
    res.redirect(`${process.env.URL_REDIRECT_CLIENT_LOGIN}?token=${token}&userId=${user._id}`);
};

module.exports = { callbackLoginFacebook }