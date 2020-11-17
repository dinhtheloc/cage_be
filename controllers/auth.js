const jwt = require("jsonwebtoken");

const CallbackLoginFacebook = (req, res) => {
    console.log('redirected', req.user)
    const { user } = req;
    let token = jwt.sign({
        data: user
    }, process.env.SECRET_TOKEN, { expiresIn: '1d' }); // expiry in seconds
    res.redirect(`http://localhost:3000/login-callback?token=${token}`);
};



module.exports = { CallbackLoginFacebook }