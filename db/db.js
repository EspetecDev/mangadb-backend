const mongoose = require('mongoose');
const {cfg} = require('./db.config');

const db = mongoose.connect(cfg.db_url)
    .then(console.log('connected to db :)'))
    .catch(e => console.log('db error ',e));

module.exports.db = db;