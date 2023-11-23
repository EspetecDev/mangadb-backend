var express = require('express');
var router = express.Router();
const { getAllManga, getMangaById } = require('../models/manga');

/* GET home page. */
router.get('/', async function(req, res, next) {
    // collect all manga
    const all_manga = await getAllManga();
    res.send(all_manga);
    // res.render('index', {title: 'manga', data: manga});
});

router.get('/:id', async function(req,res,next) {
    const manga = await getMangaById(req.params.id);
    res.send(manga);
})

module.exports = router;
