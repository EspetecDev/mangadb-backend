const mongoose = require('mongoose');
const { MONGO_URL } = process.env;

function getDBURL(){
    return MONGO_URL.replace(MONGO_URL.slice(MONGO_URL.indexOf('//')+2, MONGO_URL.indexOf('@')), '<creds>');
}

const db = mongoose.connect(MONGO_URL)
    .then(console.log(`connected to ${getDBURL()} :)`))
    .catch(e => console.log('db error ',e));

module.exports.db = db;