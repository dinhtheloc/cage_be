const jwt = require("jsonwebtoken");

const callbackLoginFacebook = (req, res) => {
    const { user } = req;
    let token = jwt.sign({
        data: user
    }, process.env.SECRET_TOKEN, { expiresIn: '1d' });
    res.redirect(`${process.env.URL_REDIRECT_CLIENT_LOGIN}?token=${token}&userId=${user._id}`);
};

const loginBo = (req, res) => {

    const { password } = req.body;

    if (password === process.env.SECRET_PASSWORD_ADMIN) {

        const user = {
            admin: true,
            name: 'cayghe'
        }

        let token = jwt.sign({
            data: user
        }, process.env.SECRET_TOKEN, { expiresIn: '1d' });

        res.json({
            token
        });
    } else {
        res.status(400).send('Sai mật khẩu, vui lòng kiểm tra lại');
    }

};

module.exports = { callbackLoginFacebook, loginBo }