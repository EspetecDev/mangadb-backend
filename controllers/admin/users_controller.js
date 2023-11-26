const bcrypt = require('bcrypt');
const { users } = require('../../models/admin/users_model');
const { create_secret_token } = require('../../utils/secret_token');

async function get_users( req, res, next ){
    res.send(await users.find());
    next();
}

async function get_user(  req, res, next  ) {
    try{
        const id = req.params.id;
        if(!id) console.log('db error - get_user - invalid id ');
        else 
            return res.send(await users.findOne({id}));
    }catch(e){console.log('get user error: ',e)};
}

// return an object that will be res.json 
async function add_user( req, res, next ){
    try{
        if(!req.body)
            return res.json({ message: "invalid data" });
        
        const { username, email, password, createdAt, isAdmin, avatar } = req.body;
        if(!username || !email || !password)
            return res.json({ message: "invalid username, email or password" });

        const existing_user = await users.findOne({email});
        if(existing_user)
            return res.json({ message: "username already exists" });

        const new_user = await users.create({ username, email, password, createdAt: Date.now(), isAdmin, avatar});
        const token = create_secret_token(new_user._id);
        res.cookie('token', token, { withCredentials: true, httpOnly: false});
        res.status(201).json({ message: 'user created successfully', success: true, new_user});
        
    }catch(e){console.log('create user error: ',e)};
}

async function login_user(req, res, next){
    try{
        const { username, password } = req.body;
        if(!username || !password )
            return res.json({ message: "username or password missing" });

        const user = await users.findOne({username});
        if(!user)
            return res.json({ message: "incorrect username or password" });
        const auth = await bcrypt.compare(password, user.password);
        if(!auth)
            return res.json({ message: "incorrect username or password" });

        const token = create_secret_token(user._id);
        res.cookie('token', token, { withCredentials: true, httpOnly: false });
        res.status(201).json({ message: 'logged in successfully', success: true});
    }catch(e){console.log('login error: ',e)};
}

module.exports = {
    get_users,
    get_user, 
    add_user,
    login_user
}