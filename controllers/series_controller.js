const { series } = require('../models/series_model');

async function get_series(req, res, next){
    const all_series = await series.find();
    res.status(200).json({ success: true, all_series});
}
// TODO: Check
async function get_series_by_query(req, res, next){ // query
    if(!query) console.log('db error - get_series_by_query - invalid query ');
    res.send(await series.find({title: query}));
}
// TODO: Check
async function get_series_by_id( req, res, next ) { // id
    if(!id) console.log('db error - get_series_by_id - invalid id ');
    else 
        return await series.findOne({id});
}

async function add_series( req, res, next ){
    try{
        if(!req.body)
            return res.json({ message: "invalid data" });
        const { title, author, volumes, 
            total_jap_volumes, total_local_volumes, 
            language, format } = req.body;

        // if(!title || !author || !volumes || !language || !format)
        if(!title || !author || !language || !format)
            return res.json({ message: "invalid series data" });

        const existing_series = await series.findOne({title});
        if(existing_series)
            return res.json({ message: "series already exists" });

        const new_series = await series.create({
            title, author, volumes, 
            total_jap_volumes, total_local_volumes, 
            language, format}).catch(e => console.log(e));
        // const token = create_secret_token(new_user._id);
        // res.cookie('token', token, { withCredentials: true, httpOnly: false});
        res.status(201).json({ message: 'series created successfully', success: true, new_series});
        
    }catch(e){console.log('add_series error: ',e)};
    
}

module.exports = {
    get_series,
    get_series_by_id, 
    get_series_by_query,
    add_series
}