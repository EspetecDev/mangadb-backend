const { volumes } = require('../models/author_model');

async function get_volumes_from_series(series_id){
    return await volumes.find({_id: series_id});
}

async function get_volume( id ) {
    if(!id) console.log('db error - get_volume - invalid id ');
    else 
        return await volumes.findOne({id});
}

async function add_volume( data ){
    if(!data) console.log('db error - add_volume - invalid data ');
    console.log(data);
    try{
        volumes.create({...data});
    }catch(e){console.log('db insert error: ',e)};
}

module.exports = {
    get_volumes_from_series,
    get_volume, 
    add_volume
}