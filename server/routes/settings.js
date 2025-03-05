const express = require('express');

// import Settings db model
const { Settings } = require('../database/index');
// create router
const route = express.Router();

// create reference to default values (similar to global "light mode" theme)
const defaultRef = {

}

const themeCorrecter = (newTheme) => {

}

// handle GET requests
route.get('/', (req, res) => {
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
route.post('/', (req, res) => {

  // insert new setting (theme) into the database
  Settings.create(req.body)
    .then(() => {
      // send status of 201 upon successful creation of the new theme in the settings database
      res.sendStatus(201);
    })
    .catch(err => {
      // handle errors by sending back status of 500
      res.sendStatus(500);
    })
});

// handle PATCH requests
route.patch('/:id', (req, res) => {
  console.log(req.body, req.params.id);
  // update a theme in the db by the given id, using the values in the request body as the new value to use in the theme
  Settings.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      // send status of 200 upon successful alteration of a theme in the settings database
      res.sendStatus(200);
    })
    .catch(err => {
      // handle errors by sending back status of 500
      res.sendStatus(500);
    })
});

// handle DELETE requests
route.delete('/', (req, res) => {

});

// export the route for use in server/index.js
module.exports = route;
