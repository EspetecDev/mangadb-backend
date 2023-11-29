const express = require('express');

let series_router = express.Router();
const { get_series,
        get_series_by_id, 
        get_series_by_query,
        add_series
                     } = require('../controllers/series_controller');

/* GET home page. */
series_router.get('/', get_series);
series_router.get('/query', get_series_by_query);
series_router.get('/:id', get_series_by_id);
series_router.post('/', add_series);

module.exports.series_router = series_router;