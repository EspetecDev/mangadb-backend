const mongoose = require('mongoose');

const volume_schema = mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String },
        number_in_series: { type: Number, required: true },
        cover: { type: String },
        series: { type: mongoose.Schema.Types.ObjectId, ref: 'series', required: true },
        publish_date: { type: Date, required: true },
        isbn: { type: String },
        price: { type: mongoose.Schema.Types.Decimal128 }
    }
)

module.exports.volumes = mongoose.model('volumes', volume_schema);

