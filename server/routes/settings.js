const express = require('express');

// import Settings db model
const { Settings } = require('../database/index');

const route = express.Router();

// handle GET requests
route.get('/settings', (req, res) => {

});

// handle POST requests
route.post('/settings', (req, res) => {

});

// handle PATCH requests
route.patch('/settings', (req, res) => {

});

// handle DELETE requests
route.delete('/settings', (req, res) => {

});

// export the route for use in server/index.js
module.exports = route;
