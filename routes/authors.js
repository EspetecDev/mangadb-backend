const  express = require('express');
let authors_router = express.Router();
const { get_authors, 
        get_author,
        add_author
} = require('../controllers/authors_controller');

/* GET home page. */
authors_router.get('/', async function(req, res, next) {
    const all_authors = await get_authors();
    res.send(all_authors);
});

authors_router.get('/:id', async function(req,res,next) {
    const author = await get_author(req.params.id);
    res.send(author);
});

authors_router.post('/', async function(req, res, next) {
    add_author(req.body);
});

module.exports.authors_router = authors_router;
