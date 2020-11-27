const jwt = require("jsonwebtoken");

const CallbackLoginFacebook = (req, res) => {
    const { user } = req;
    let token = jwt.sign({
        data: user
    }, process.env.SECRET_TOKEN, { expiresIn: '1d' });
    res.redirect(`${process.env.URL_REDIRECT_CLIENT_LOGIN}?token=${token}`);
};



module.exports = { CallbackLoginFacebook }