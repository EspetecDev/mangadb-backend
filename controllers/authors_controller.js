

const { authors } = require('../models/author_model');

async function get_authors(){
    return await authors.find();
}

async function get_author( id ) {
    if(!id) console.log('db error - get_author - invalid id ');
    else 
        return await authors.findOne({id});
}

async function add_author( data ){
    if(!data) console.log('db error - add_author - invalid data ');
    console.log(data);
    try{
        authors.create({...data});
    }catch(e){console.log('db insert error: ',e)};
}

module.exports = {
    get_authors,
    get_author, 
    add_author
}