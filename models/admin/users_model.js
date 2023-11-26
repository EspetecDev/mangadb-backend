const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const users_schema = mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: {type: String, required: true, unique: true},
        password: { type: String, required: true },
        createdAt: {type: Date, default: new Date() },
        isAdmin: { type: Boolean, default: false },
        avatar: {type: String}
    }
);

// pre cannot have arrow function wtf
// https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave
users_schema.pre('save', async function (next){
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports.users = mongoose.model('users', users_schema);
