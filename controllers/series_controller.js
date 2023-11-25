const { series } = require('../models/series_model');

async function get_series(){
    return await series.find();
}

async function get_series_by_id( id ) {
    if(!id) console.log('db error - get_series_by_id - invalid id ');
    else 
        return await series.findOne({id});
}

async function add_series( data ){
    if(!data) console.log('db error - add_series - invalid data ');
    console.log(data);
    try{
        authors.create({...data});
    }catch(e){console.log('db insert error: ',e)};
}

module.exports = {
    get_series,
    get_series_by_id, 
    add_series
}