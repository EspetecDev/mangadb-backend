const express = require('express');

let volumes_router = express.Router();
const {
    get_volumes_from_series,
    get_volume, 
    add_volume
} = require('../controllers/volumes_controller');

/* GET home page. */
// volumes_router.get('/volumes', async function(req, res, next) {
//     const all_authors = await get_authors();
//     res.send(all_authors);
// });

volumes_router.get('/:id', async function(req,res,next) {
    const volume = await get_volume(req.params.id);
    res.send(volume);
});

volumes_router.post('/', async function(req, res, next) {
    add_volume(req.body);
});

module.exports.volumes_router = volumes_router;