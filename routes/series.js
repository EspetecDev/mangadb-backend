const express = require('express');

let series_router = express.Router();
const { get_series,
        get_series_by_id, 
        add_series
                     } = require('../controllers/series_controller');

/* GET home page. */
series_router.get('/', async function(req, res, next) {
    const all_series = await get_series().catch(e => console.log(e));
    res.send(all_series);
});

series_router.get('/:id', async function(req,res,next) {
    const series = await get_series_by_id(req.params.id);
    res.send(series);
});

series_router.post('/', async function(req, res, next) {
    add_series(req.body);
});

module.exports.series_router = series_router;