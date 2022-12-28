const User = require('../models/users');

async function signUp(req, res) {
    const {
        username,
        emial,
        password,
        firstName,
        lastName,
        image,
        repassword,
        country,
        phoneNumber,
        birthdate,
    } = req.body;
    const newUser = await User.create({
        username,
        emial,
        password,
        firstName,
        lastName,
        image,
        repassword,
        country,
        phoneNumber,
        birthdate,
    });

    res.json({
        status: 'success',
        newUser,
    });
}

module.exports = {
    signUp,
};
