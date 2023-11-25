const mongoose = require('mongoose');

const series_schema = mongoose.Schema(
    {
        title: { type: String, required: true },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true },
        volumes: { type: [mongoose.Schema.Types.ObjectId], ref: 'volumes', required: true },
        total_jap_volumes: { type: Number, required: true },
        total_local_volumes: { type: Number, required: true },
        language: { type: String, enum: ['es', 'cat', 'en'], required: true },
        format: { type: String }
    }
)

module.exports.series = mongoose.model('series', series_schema);
