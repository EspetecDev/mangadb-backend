const {index_router} = require('../routes/index');
// admin
const {admin_router} = require('./admin/admin');

const {authors_router} = require('../routes/authors');
const {series_router} = require('../routes/series');
const {volumes_router} = require('../routes/volumes');

const routers = [
        {route: '/', router: index_router},
        {route: '/admin', router: admin_router},
        {route: '/authors', router: authors_router},
        {route: '/series', router: series_router},
        {route: '/volumes', router: volumes_router},
    ];

module.exports.routers = routers;