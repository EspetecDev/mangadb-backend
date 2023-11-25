const mongoose = require('mongoose');

const users_schema = mongoose.Schema(
    {
        username: { type: String, required: true },
        isAdmin: { type: String },
        language: { type: String, enum: ['es', 'cat', 'en'], required: true },
        avatar: {type: String}
    }
)

module.exports.users = mongoose.model('users', users_schema);
