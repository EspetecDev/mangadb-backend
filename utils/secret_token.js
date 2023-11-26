require('dotenv').config();
const jwt = require('jsonwebtoken');

// 3 days 24h...
module.exports.create_secret_token = (id) => {
    return jwt.sign({id}, process.env.TOKEN_KEY, {
        expiresIn: 3 * 24 * 60 * 60,
    });
};