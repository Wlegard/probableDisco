const express = require('express');

// import Settings db model
const { Settings } = require('../database/index');
// create router
const route = express.Router();

// create reference to default values?

// handle GET requests
route.get('/settings', (req, res) => {
  // acquire array of settings (themes) from database
  Settings.find()
    .then(themes => {
      // send found array of themes back with status of 200
      res.status(200).send(themes);
    })
    .catch(err => {
      // handle errors by sending back status of 500
      res.sendStatus(500);
    })
});

// handle POST requests
route.post('/settings', (req, res) => {

  // insert new setting (theme) into the database
  Settings.create(req.body)
    .then(() => {
      // send status of 201 upon successful creation of new theme in settings database
      res.sendStatus(201);
    })
    .catch(err => {
      // handle errors by sending back status of 500
      res.sendStatus(500);
    })
});

// handle PATCH requests
route.patch('/settings', (req, res) => {

});

// handle DELETE requests
route.delete('/settings', (req, res) => {

});

// export the route for use in server/index.js
module.exports = route;
