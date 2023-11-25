const mongoose = require('mongoose');

const author_schema = mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        picture_url: {type: String}
    }
)

module.exports.authors = mongoose.model('authors', author_schema);
