var express = require('express');
var router = express.Router();
const { get_authors, 
        get_author,
        add_author
                     } = require('../controllers/authors_controller');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const all_authors = await get_authors();
    res.send(all_authors);
});

router.get('/:id', async function(req,res,next) {
    const author = await get_author(req.params.id);
    res.send(author);
});

router.post('/', async function(req, res, next) {
    const all_authors = await add_author(req.body);
    res.send(all_authors);
});

module.exports = router;
