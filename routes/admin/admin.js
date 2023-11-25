const express = require('express');

let admin_router = express.Router();
const {
  get_users,
  get_user,
  add_user
} = require('../../controllers/admin/users_controller');

/* GET users listing. */
admin_router.get('/users', async function(req, res, next) {
  const users = await get_users();
  res.send(users);
});

admin_router.get('/users/:id', async function(req,res,next) {
  const user = await get_user(req.params.id);
  res.send(user);
});

admin_router.post('/users/', async function(req, res, next) {
  add_user(req.body);
});

module.exports.admin_router = admin_router;
