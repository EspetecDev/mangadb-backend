const { users } = require('../../models/admin/users_model');

async function get_users(){
    return await users.find();
}

async function get_user( id ) {
    if(!id) console.log('db error - get_user - invalid id ');
    else 
        return await users.findOne({id});
}

async function add_user( data ){
    if(!data) console.log('db error - add_user - invalid data ');
    console.log(data);
    try{
        users.create({...data});
    }catch(e){console.log('db insert error: ',e)};
}

module.exports = {
    get_users,
    get_user, 
    add_user
}