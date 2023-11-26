const express = require('express');

let admin_router = express.Router();
const {
  get_users,
  get_user,
  add_user,
  login_user
} = require('../../controllers/admin/users_controller');

/* GET users listing. */
admin_router.get('/users',get_users);
admin_router.get('/users/:id', get_user);
admin_router.post('/users/register', add_user);
admin_router.post('/users/login', login_user);

module.exports.admin_router = admin_router;
