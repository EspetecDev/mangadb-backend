// auth only for admin users, for now

const { users } = require('../models/admin/users_model');
const jwt = require('jsonwebtoken');

// verify users's acceess to the route by checking the token
module.exports.user_verification = (req, res) => {
    const token = req.cookies.token;
    if(!token)
        return res.json({status: false});

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if(err)
            return res.json({status: false});
        else{
            const user = await users.findById(data.id);
            if(user)
                return res.json({status: true, user: user.username});
            else
                return res.json({status: false});
        }
    })
}